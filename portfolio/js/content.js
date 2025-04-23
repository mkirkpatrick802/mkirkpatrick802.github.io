$(document).ready(function () {
    window.current_page = 'aboutme.html';
    LoadContent();
});

function LoadContent() {
    console.log("Current page is:", window.current_page);

    // Load main page content
    $("#content").load("/portfolio/html/" + window.current_page, function () {
        console.log(window.current_page + " loaded into #content");

        // After loading the main page, run page-specific logic
        RunPageScripts(window.current_page);
    });

    // Conditionally load the showcase
    if (window.current_page !== "aboutme.html") {
        $("#showcase").load("/portfolio/html/showcase.html");
    } else {
        $("#showcase").empty(); // Clear showcase on about me
    }
}

function RunPageScripts(page) {
    switch (page) {
        case "aboutme.html":
            LoadAboutMeScripts();
            break;
        case "resume.html":
            LoadResumeScripts();
            break;
        case "blog.html":
            LoadBlogScripts();
            break;
        default:
            break;
    }
}

// Example: function for aboutme
function LoadAboutMeScripts() {
    console.log("Running scripts for about me");

    $(".project-container").load("/portfolio/html/showcase.html");
}

// Optional other pages
function LoadResumeScripts() {
    console.log("Running scripts for resume");

    $("#section").load(`/portfolio/html/resume-section/food.html`);
}

function LoadBlogScripts() {
    console.log("Running scripts for blog");
}

window.LoadContent = LoadContent;