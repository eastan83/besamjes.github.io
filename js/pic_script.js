// 初始化 Masonry
window.onload = function () {
  const grid = document.querySelector('.grid');
  new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: 16,
    percentPosition: true
  });

  
  // 初始化 Fancybox
  Fancybox.bind("[data-fancybox='gallery']", {
    Toolbar: {
      display: ["close"]
    },
    Thumbs: false,
    dragToClose: true
  });
};
