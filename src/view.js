export default () => {
  const watched = (path, value) => {
    const form = document.querySelector('.rss-form');
    const input = form.querySelector('#url-input');
    console.log('1', path);
    console.log('2', value);

    if (value === 'valid') {
      input.classList.remove('is-invalid');
    } else {
      input.classList.add('is-invalid');
    }
  };

  return watched;
};
