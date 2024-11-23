document.querySelector('.gallery-title').addEventListener('mouseover', function () {
    let images = document.querySelectorAll('.gallery-image');
    images.forEach(function (image) {
        image.style.opacity = 1;
    });
});

document.querySelector('.gallery-title').addEventListener('mouseout', function () {
    let images = document.querySelectorAll('.gallery-image');
    images.forEach(function (image) {
        image.style.opacity = 0;
    });
});
