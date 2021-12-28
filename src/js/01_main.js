document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    type: 'slide',
    arrows: false,
    autoplay: true,
    rewind: true
  });

  splide.on('pagination:mounted', function (data) {
    data.list.classList.add('splide__pagination--custom');
    data.items.forEach(function (item) {
      item.button.textContent = String(item.page + 1);
    });
  });

  splide.mount();
});