function getReviewCount() {
    return parseInt(localStorage.getItem('reviewCount')) || 0;
}

function setReviewCount(count) {
    localStorage.setItem('reviewCount', count);
}

let reviewCount = getReviewCount();
reviewCount++;
setReviewCount(reviewCount);

const counterDisplay = document.querySelector('#review-count');
if (counterDisplay) {
    counterDisplay.textContent = reviewCount;
}

const lastModified = document.querySelector('#last-modified');
if (lastModified) {
    lastModified.textContent = document.lastModified;
}