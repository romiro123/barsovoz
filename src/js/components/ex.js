const filterBtn = document.querySelector('.filter__open-btn');
const filter = document.querySelector('.filter');

filterBtn.addEventListener('click', () => {
  filter.classList.toggle('filter--open-js');
})

document.addEventListener('click', function (event) {
  if (event.target.closest('.filter__open-btn') == null && event.target.closest('.filter') == null) {
    filter.classList.remove('filter--open-js');
  }
})

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 20) {
    filter.classList.remove('filter--open-js');
  }
}, { passive: true });
