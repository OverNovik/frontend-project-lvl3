export default (post) => {
  const modal = document.getElementById('modal');
  const titleModal = document.querySelector('.modal-title');
  const bodyModal = document.querySelector('.modal-body');
  const linkModal = document.querySelector('.full-article');

  modal.classList.add('show');
  modal.style.display = 'block';
  modal.style.background = '#cccc';
  modal.removeAttribute('aria-hidden');
  modal.setAttribute('aria-modal', true);
  titleModal.textContent = post.title;
  bodyModal.textContent = post.description;
  linkModal.href = post.link;
  modal.addEventListener('click', (e) => {
    const closeWindow = document.querySelector('.btn-secondary');
    const cross = document.querySelector('.close');
    if (e.target === cross || e.target === closeWindow || e.target === modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      modal.removeAttribute('aria-modal');
      modal.setAttribute('aria-hidden', true);
    }
  });
};
