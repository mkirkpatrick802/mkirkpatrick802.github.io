function getRandomPosition() {
    // Get a random value between -35 and -25
    return Math.floor(Math.random() * 11) - 35 + 'px';
}

function moveBookmark(bookmark) {
    // Set a random bobbing position
    bookmark.style.top = getRandomPosition();

    // Reset to -40px after a short delay
    setTimeout(() => {
        bookmark.style.top = '-40px';
        // Move again after a random interval (between 3 and 6 seconds)
        setTimeout(() => moveBookmark(bookmark), Math.random() * 3000 + 3000); // Adjust the range as needed
    }, 500); // Adjust the delay (in milliseconds) as needed
}

// Select all bookmarks
const bookmarks = document.querySelectorAll('.bookmark');

// Start each bookmark's movement on a random interval
bookmarks.forEach(bookmark => {
    setTimeout(() => moveBookmark(bookmark), Math.random() * 3000 + 3000); // Initial random delay (between 3 and 6 seconds)
});

let current_page = "aboutme.html";
document.getElementsByClassName('about_me')[0].addEventListener('click', () => {
    current_page = 'aboutme.html';
})

document.getElementsByClassName('resume')[0].addEventListener('click', () => {
    current_page = 'resume.html';
})

document.getElementsByClassName('gallery')[0].addEventListener('click', () => {
    current_page = 'gallery.html';
})
