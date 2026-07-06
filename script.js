// modal image viewer
const modal = document.getElementById('imageModal');
if (modal) {
  const modalImg = modal.querySelector('img');
  const closeBtn = modal.querySelector('.modal-close');
  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      modalImg.src = btn.getAttribute('data-modal');
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    });
  });
  function closeModal(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    modalImg.src = '';
  }
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });
}
// persistent checklists
const prefix = 'crowell-v2-';
document.querySelectorAll('input[type="checkbox"][data-key]').forEach(input => {
  const key = prefix + input.dataset.key;
  input.checked = localStorage.getItem(key) === 'true';
  input.addEventListener('change', () => localStorage.setItem(key, input.checked));
});


// highlight the current top tab
(function(){
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.top-tabs a').forEach(link => {
    const target = (link.getAttribute('href') || '').split('#')[0].toLowerCase();
    if (target === current) link.classList.add('active');
  });
})();
