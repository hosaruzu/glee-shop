import Splide from '@splidejs/splide';

Splide.defaults = {
  type: 'slide',
  arrows: false,
  autoplay: false,
  rewind: true
}
const splide = new Splide('.splide');

splide.on('pagination:mounted', function (data) {
  data.list.classList.add('splide__pagination--custom');

  data.items.forEach(function (item) {
    item.button.textContent = String(item.page + 1);
  });
});

splide.mount();