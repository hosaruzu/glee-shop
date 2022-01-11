document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    type: 'slide',
    arrows: false,
    autoplay: false,
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

function openTab(evt, tabName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("js-tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("js-tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tabs__btn--active", "");
  }

  document.getElementById(tabName).style.display = "grid";
  evt.currentTarget.className += " tabs__btn--active";
};

document.getElementById("defaultOpen").click();