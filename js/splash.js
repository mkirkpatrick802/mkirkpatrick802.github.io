let splash = document.getElementById('splash_background');

if (document.readyState !== 'loading') {
    startSplash();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        startSplash();
    });
}

function startSplash() {
    setTimeout(()=>{
        setTimeout(()=>{
            splash.style.top = '-100vh';
        }, 2300)
    })
}