// 获取所有的图片元素
const images = document.querySelectorAll('.clickable-image');

// 获取大图显示区域和模态窗口中的图片元素
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');

// 为每张图片添加点击事件，显示大图
images.forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = 'block';  // 显示模态框
        modalImage.src = image.src;     // 设置模态框中的大图为点击的图片
    });
});

// 点击关闭按钮时关闭模态框
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// 点击模态框以外的区域时也关闭模态框
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
