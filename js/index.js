// Function to check if an element is visible in the viewport
function isElementVisible(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    }

    // Function to autoplay the video when it becomes visible
    function autoplayVideo() {
    var video = document.getElementById('slrs1');
    if (isElementVisible(video)) {
        video.play();
    }
    }

    // Call the autoplayVideo function when the page loads and when scrolling
    document.addEventListener('DOMContentLoaded', autoplayVideo);
    window.addEventListener('scroll', autoplayVideo);