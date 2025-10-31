// Enhanced interactions for E-Sphera e-commerce platform
// - Mega menu keyboard & hover handling
// - Mobile drawer toggle with search
// - Cart and wishlist counters
// - Product interactions
// - Form demo with local draft save and toast notifications

document.addEventListener('DOMContentLoaded', () => {
      // Year
      const year = document.getElementById('year');
      if (year) year.textContent = new Date().getFullYear();

      // Initialize cart and wishlist counts
      let cartCount = 0;
      let wishlistCount = 0;

      // Update counter displays
      const updateCounters = () => {
            const cartBadge = document.getElementById('cart-count');
            const wishlistBadge = document.getElementById('wishlist-count');
            const drawerCart = document.getElementById('drawer-cart');
            const drawerWishlist = document.getElementById('drawer-wishlist');

            if (cartBadge) cartBadge.textContent = cartCount;
            if (wishlistBadge) wishlistBadge.textContent = wishlistCount;
            if (drawerCart) drawerCart.textContent = cartCount;
            if (drawerWishlist) drawerWishlist.textContent = wishlistCount;
      };

      // Load saved counts from localStorage
      const savedCart = localStorage.getItem('e-sphera.cart.count');
      const savedWishlist = localStorage.getItem('e-sphera.wishlist.count');
      if (savedCart) cartCount = parseInt(savedCart) || 0;
      if (savedWishlist) wishlistCount = parseInt(savedWishlist) || 0;
      updateCounters();

      // Mega menu open/close behavior
      document.querySelectorAll('.nav-item.has-mega').forEach(item => {
            const btn = item.querySelector('.nav-btn');
            const panel = item.querySelector('.mega');

            // show/hide helpers
            const open = () => {
                  btn.setAttribute('aria-expanded', 'true');
                  panel.hidden = false;
            };
            const close = () => {
                  btn.setAttribute('aria-expanded', 'false');
                  panel.hidden = true;
            };

            // hover
            let hoverTimer;
            item.addEventListener('mouseenter', () => { clearTimeout(hoverTimer); open(); });
            item.addEventListener('mouseleave', () => { hoverTimer = setTimeout(close, 220); });

            // keyboard accessible: toggle on button
            btn.addEventListener('click', (e) => {
                  const isOpen = btn.getAttribute('aria-expanded') === 'true';
                  if (isOpen) close(); else open();
            });

            // close on Escape
            document.addEventListener('keydown', (e) => {
                  if (e.key === 'Escape') close();
            });
      });

      // Mobile drawer toggle
      const hamburger = document.querySelector('.hamburger');
      const drawer = document.getElementById('mobile-drawer');
      const drawerClose = document.querySelector('.drawer-close');

      const openDrawer = () => {
            if (!drawer) return;
            drawer.hidden = false;
            hamburger.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
      };
      const closeDrawer = () => {
            if (!drawer) return;
            drawer.hidden = true;
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
      };

      if (hamburger) hamburger.addEventListener('click', openDrawer);
      if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
      // Close drawer when clicking outside
      document.addEventListener('click', (e) => {
            if (!drawer || drawer.hidden) return;
            if (!drawer.contains(e.target) && !hamburger.contains(e.target)) closeDrawer();
      });

      // Device tilt/parallax
      const device = document.getElementById('device-3d');
      if (device) {
            device.addEventListener('mousemove', (e) => {
                  const r = device.getBoundingClientRect();
                  const px = (e.clientX - r.left) / r.width;
                  const py = (e.clientY - r.top) / r.height;
                  const rx = (py - 0.5) * 10; // tilt X
                  const ry = (px - 0.5) * -12; // tilt Y
                  device.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
            });
            device.addEventListener('mouseleave', () => {
                  device.style.transform = 'perspective(900px) rotateX(14deg) rotateY(0deg)';
            });
      }

      // Card hover interactions: set title into :before using data-title for micro animation (CSS can handle)
      document.querySelectorAll('.card.interactive').forEach(card => {
            card.addEventListener('mouseenter', () => {
                  const title = card.dataset.title;
                  card.style.setProperty('--hover-title', `"${title}"`);
            });
      });

      // Product interactions - Add to Cart
      document.querySelectorAll('.micro').forEach(btn => {
            if (btn.textContent.includes('Add to Cart')) {
                  btn.addEventListener('click', (e) => {
                        e.preventDefault();
                        cartCount++;
                        localStorage.setItem('e-sphera.cart.count', cartCount);
                        updateCounters();
                        showToast('✓ Added to cart!', 2000);
                  });
            }
      });

      // Wishlist button
      const wishlistBtn = document.querySelector('.wishlist-btn');
      if (wishlistBtn) {
            wishlistBtn.addEventListener('click', () => {
                  wishlistCount++;
                  localStorage.setItem('e-sphera.wishlist.count', wishlistCount);
                  updateCounters();
                  showToast('❤️ Added to wishlist!', 2000);
            });
      }

      // Cart button click
      const cartBtn = document.querySelector('.cart-btn');
      if (cartBtn) {
            cartBtn.addEventListener('click', () => {
                  if (cartCount === 0) {
                        showToast('Your cart is empty', 2000);
                  } else {
                        showToast(`You have ${cartCount} item${cartCount > 1 ? 's' : ''} in cart`, 2000);
                  }
            });
      }

      // Contact form submission simulation + save draft
      const form = document.getElementById('contact-form');
      const toast = document.getElementById('toast');

      const showToast = (msg, timeout = 3000) => {
            if (!toast) return;
            toast.textContent = msg;
            toast.hidden = false;
            setTimeout(() => { toast.hidden = true; }, timeout);
      };

      if (form) {
            // restore draft from localStorage
            const draftKey = 'e-sphera.contact.draft.v1';
            const saved = localStorage.getItem(draftKey);
            if (saved) {
                  try {
                        const data = JSON.parse(saved);
                        form.name.value = data.name || '';
                        form.email.value = data.email || '';
                        form.message.value = data.message || '';
                        const select = form.querySelector('select[name="subject"]');
                        if (select && data.subject) select.value = data.subject;
                        showToast('Draft restored');
                  } catch (e) { /* ignore */ }
            }

            form.addEventListener('submit', (e) => {
                  e.preventDefault();
                  const btn = form.querySelector('button[type="submit"]');
                  btn.disabled = true;
                  btn.textContent = 'Sending...';

                  // Collect payload for a real integration
                  const payload = {
                        name: form.name.value,
                        email: form.email.value,
                        subject: form.subject ? form.subject.value : '',
                        message: form.message.value,
                        ts: new Date().toISOString()
                  };

                  // Simulate network call
                  window.setTimeout(() => {
                        btn.textContent = 'Sent ✓';
                        showToast('✓ Message sent! We\'ll respond within 24 hours.', 4000);
                        form.reset();
                        localStorage.removeItem(draftKey);
                        setTimeout(() => { btn.disabled = false; btn.textContent = 'Send Message'; }, 1600);
                  }, 900);
            });

            // Save draft button
            const saveBtn = document.getElementById('save-draft');
            if (saveBtn) {
                  saveBtn.addEventListener('click', () => {
                        const payload = {
                              name: form.name.value,
                              email: form.email.value,
                              subject: form.subject ? form.subject.value : '',
                              message: form.message.value,
                              savedAt: new Date().toISOString()
                        };
                        try {
                              localStorage.setItem('e-sphera.contact.draft.v1', JSON.stringify(payload));
                              showToast('💾 Draft saved locally');
                        } catch (err) {
                              showToast('Unable to save draft', 2500);
                        }
                  });
            }
      }

      // Search functionality
      const searchInput = document.querySelector('.search-input');
      const searchBtn = document.querySelector('.search-btn');
      
      if (searchBtn && searchInput) {
            searchBtn.addEventListener('click', () => {
                  const query = searchInput.value.trim();
                  if (query) {
                        showToast(`🔍 Searching for "${query}"...`, 2000);
                        // In a real app, this would trigger search
                  }
            });

            searchInput.addEventListener('keypress', (e) => {
                  if (e.key === 'Enter') {
                        const query = searchInput.value.trim();
                        if (query) {
                              showToast(`🔍 Searching for "${query}"...`, 2000);
                        }
                  }
            });
      }

      // Newsletter form (demo)
      const nl = document.getElementById('newsletter');
      if (nl) {
            nl.addEventListener('submit', (e) => {
                  e.preventDefault();
                  const el = document.getElementById('nl-email');
                  if (!el.value) { showToast('Enter an email'); return; }
                  showToast('Subscribed — check your inbox', 3000);
                  nl.reset();
            });
      }

      // Small accessibility: trap focus inside mobile drawer when open (simple)
      const focusableSelector = 'a,button,input,select,textarea,[tabindex]:not([tabindex="-1"])';
      document.addEventListener('keydown', (e) => {
            if (e.key !== 'Tab') return;
            if (!drawer || drawer.hidden) return;
            const focusables = Array.from(drawer.querySelectorAll(focusableSelector)).filter(n => !n.disabled);
            if (!focusables.length) return;
            const first = focusables[0], last = focusables[focusables.length - 1];
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      });
});