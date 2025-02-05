
function initMasonry() {
    const container = document.getElementById('masonry-grid');
    const videos = container.querySelectorAll('video');

    const videoPromises = Array.from(videos).map(video => {
        return new Promise(resolve => {
            if (video.readyState >= 1) {
                resolve();
            } else {
                video.addEventListener('loadedmetadata', resolve);
                video.load();
            }
        });
    });

    Promise.all([
        imagesLoaded(container),
        Promise.all(videoPromises)
    ]).then(() => {
        window.msnry = new Masonry(container, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-item',
            // gutter: 16,
            percentPosition: true
        });
    });
}

// 步骤3：窗口监听
window.addEventListener('resize', () => {
    window.msnry?.layout();
});

document.addEventListener('DOMContentLoaded', initMasonry);