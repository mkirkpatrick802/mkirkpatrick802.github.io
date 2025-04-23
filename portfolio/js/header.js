// Helper to get a random top offset between -35px and -25px
function getRandomPosition() {
    return `${Math.floor(Math.random() * 11) - 35}px`;
}

// Handles the bobbing animation of a bookmark element
function moveBookmark(bookmark) {
    bookmark.style.top = getRandomPosition();

    setTimeout(() => {
        bookmark.style.top = '-40px';

        // Schedule next bob after 3–6 seconds
        setTimeout(() => moveBookmark(bookmark), Math.random() * 3000 + 3000);
    }, 500); // Bob duration
}

// Start bobbing effect on all elements with class "bookmark"
const bookmarks = document.querySelectorAll('.bookmark');
bookmarks.forEach(bookmark => {
    setTimeout(() => moveBookmark(bookmark), Math.random() * 3000 + 3000);
});

// Generic click loader for nav buttons
function setupNavigationButton(className, page) {
    const element = document.querySelector(`.${className}`);
    if (element) {
        element.addEventListener('click', () => {
            window.current_page = `${page}.html`;
            LoadContent();
        });
    }
}

// Set up navigation links
setupNavigationButton('about_me', 'aboutme');
setupNavigationButton('resume', 'resume');
setupNavigationButton('blog', 'blog');