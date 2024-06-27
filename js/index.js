document.addEventListener("DOMContentLoaded", function() {
    const img = document.getElementById('horseImg');
    const hoverDiv = document.getElementById('horseText');

    img.addEventListener('mouseover', function() {
        hoverDiv.style.opacity = '1';
    });

    img.addEventListener('mouseout', function() {
        hoverDiv.style.opacity = '0';
    });
});