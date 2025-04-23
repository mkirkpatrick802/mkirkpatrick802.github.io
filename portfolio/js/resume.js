var tags = document.querySelectorAll(".tag");

$(document).ready(function () {
    const defaultTagId = "food";
    const tags = document.querySelectorAll(".tag");

    // Load the default section
    $("#section").load(`/portfolio/html/resume-section/${defaultTagId}.html`);

    // Set the correct tag as active
    tags.forEach(tag => {
        tag.classList.remove("active");
        if (tag.id === defaultTagId) {
            tag.classList.add("active");
        }
    });
});

tags.forEach(tag => {
    tag.addEventListener("click", () => {
        const tagId = tag.id;
        $("#section").load(`/portfolio/html/resume-section/${tagId}.html`);

        tags.forEach(t => t.classList.remove("active"));
        tag.classList.add("active");
    });
});