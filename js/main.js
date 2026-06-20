document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.4);z-index:999;opacity:0;pointer-events:none;transition:opacity 0.3s';
  document.body.appendChild(overlay);

  function closeNav() {
    nav?.classList.remove('open');
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    document.body.style.overflow = '';
  }

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      overlay.style.opacity = isOpen ? '1' : '0';
      overlay.style.pointerEvents = isOpen ? 'auto' : 'none';
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    overlay.addEventListener('click', closeNav);
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
  }

  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Thank you! We will contact you soon.';
      btn.disabled = true;
      btn.style.background = '#00A651';
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
        btn.style.background = '';
        form.reset();
      }, 3000);
    });
  });
});
