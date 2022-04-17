import renderContainer from './renderContainer.js';

export default (feeds) => {
  const el = document.querySelector('.feeds');
  el.innerHTML = '';
  const render = renderContainer('Фиды');
  el.innerHTML = render;
  const list = el.querySelector('ul');

  feeds.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'border-0', 'border-end-0');
    const title = document.createElement('h3');
    title.classList.add('h6', 'm-0');
    title.textContent = item.title;
    const description = document.createElement('p');
    description.classList.add('m-0', 'small', 'text-black-50');
    description.textContent = item.description;
    li.append(title, description);
    list.append(li);
  });
};
