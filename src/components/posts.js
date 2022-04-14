import renderContainer from './renderContainer.js';

export default (posts, i18n) => {
  const el = document.querySelector('.posts');
  el.innerHTML = '';
  const textTitle = renderContainer('Посты');
  el.innerHTML = textTitle;
  const list = el.querySelector('ul');

  posts.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add(
      'list-group-item',
      'd-flex',
      'justify-content-between',
      'align-items-start',
      'border-0',
      'border-end-0',
    );
    const link = document.createElement('a');
    link.setAttribute('href', 'item.link');
    link.setAttribute('target', '_blank');
    link.classList.add('fw-bold');
    link.textContent = item.title;

    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-outline-primary', 'btn-sm');
    btn.type = 'button';
    btn.textContent = i18n.t('Просмотр');
    li.append(link, btn);
    list.append(li);
  });
};
