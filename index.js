// ***NEW_ARRIVAL_SECTION***

// Access Through Id's
const LoadMoreFirst = document.getElementById("newarrival-hide");
const ButtonFirst = document.getElementById("viewbtn-1");

// Arrow Function to perform hide and unhide when we click on view more btn  
ButtonFirst.addEventListener("click", () => {
    if (LoadMoreFirst.style.display === "none" || LoadMoreFirst.style.display === "") {
        LoadMoreFirst.style.display = "block";       // show section
        ButtonFirst.textContent = "Show Less";       // change button text
    } else {
        LoadMoreFirst.style.display = "none";        // hide section
        ButtonFirst.textContent = "View All";        // change button text back
    }
});


// ***TOP_SELLING_SECTION***

// Access Through Id's
const LoadMoreSec = document.getElementById("topselling-hide");
const ButtonSec = document.getElementById("viewbtn-2");

// Arrow Function to perform hide and unhide when we click on view more btn  
ButtonSec.addEventListener("click", () => {
    if (LoadMoreSec.style.display === "none" || LoadMoreSec.style.display === "") {
        LoadMoreSec.style.display = "block";       // show section
        ButtonSec.textContent = "Show Less";       // change button text
    } else {
        LoadMoreSec.style.display = "none";        // hide section
        ButtonSec.textContent = "View All";        // change button text back
    }
});


// // ***REVIEW_SECTION*** 

// const reviewContainer = document.querySelector(".review-cards");
// const prevBtn = document.querySelector(".review-icons img:first-child");
// const nextBtn = document.querySelector(".review-icons img:last-child");

// let position = 0;
// const cardWidth = document.querySelector(".review-card").offsetWidth; // exact width
// const totalCards = document.querySelectorAll(".review-card").length;

// // Next button
// nextBtn.addEventListener("click", () => {
//     position++;
//     if (position >= totalCards - 5) {
//         reviewContainer.style.transition = "none";
//         position = 0;
//         reviewContainer.style.transform = `translateX(0px)`;
//     } else {
//         reviewContainer.style.transition = "transform 0.6s ease";
//         reviewContainer.style.transform = `translateX(-${position * cardWidth
//             }px)`;
//     }
// });

// // Previous button
// prevBtn.addEventListener("click", () => {
//     position--;
//     if (position < 0) {
//         position = totalCards - 6;
//         reviewContainer.style.transition = "none";
//         reviewContainer.style.transform = `translateX(-${position * cardWidth
//             }px)`;
//     } else {
//         reviewContainer.style.transition = "transform 0.6s ease";
//         reviewContainer.style.transform = `translateX(-${position * cardWidth
//             }px)`;
//     }
// });





// Review Swiper Functionality
const reviewContainer = document.querySelector(".review-cards");
const prevBtn = document.querySelector(".review-prev");
const nextBtn = document.querySelector(".review-next");

let position = 0;
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;

// Get responsive values
function getCardsVisible() {
    const width = window.innerWidth;
    if (width < 576) return 1;
    if (width < 768) return 1.5;
    if (width < 992) return 2;
    if (width < 1200) return 2.5;
    return 3;
}

function getCardWidth() {
    const card = document.querySelector(".review-card");
    const style = window.getComputedStyle(reviewContainer);
    const gap = parseInt(style.gap) || 20;
    return card.offsetWidth + gap;
}

function getTotalCards() {
    return document.querySelectorAll(".review-card").length;
}

function updatePosition() {
    const cardWidth = getCardWidth();
    reviewContainer.style.transform = `translateX(-${position * cardWidth
        }px)`;
    prevTranslate = -position * cardWidth;
    currentTranslate = prevTranslate;
}

// Next button
nextBtn.addEventListener("click", () => {
    const totalCards = getTotalCards();
    const visibleCards = getCardsVisible();
    const maxPosition = Math.ceil(totalCards - visibleCards);

    position++;

    if (position >= maxPosition) {
        position = 0;
    }

    reviewContainer.style.transition = "transform 0.6s ease";
    updatePosition();
});

// Previous button
prevBtn.addEventListener("click", () => {
    const totalCards = getTotalCards();
    const visibleCards = getCardsVisible();
    const maxPosition = Math.ceil(totalCards - visibleCards);

    position--;

    if (position < 0) {
        position = maxPosition - 1;
    }

    reviewContainer.style.transition = "transform 0.6s ease";
    updatePosition();
});

// Touch/Mouse events
reviewContainer.addEventListener("touchstart", touchStart, {
    passive: true,
});
reviewContainer.addEventListener("touchend", touchEnd, { passive: true });
reviewContainer.addEventListener("touchmove", touchMove, {
    passive: true,
});

reviewContainer.addEventListener("mousedown", touchStart);
reviewContainer.addEventListener("mouseup", touchEnd);
reviewContainer.addEventListener("mouseleave", touchEnd);
reviewContainer.addEventListener("mousemove", touchMove);

function touchStart(e) {
    isDragging = true;
    startPos = getPositionX(e);
    animationID = requestAnimationFrame(animation);
    reviewContainer.style.transition = "none";
}

function touchMove(e) {
    if (isDragging) {
        const currentPosition = getPositionX(e);
        currentTranslate = prevTranslate + currentPosition - startPos;
    }
}

function touchEnd() {
    if (!isDragging) return;
    isDragging = false;
    cancelAnimationFrame(animationID);

    const movedBy = currentTranslate - prevTranslate;
    const cardWidth = getCardWidth();
    const totalCards = getTotalCards();
    const visibleCards = getCardsVisible();
    const maxPosition = Math.ceil(totalCards - visibleCards);

    // If moved enough, change slide
    if (movedBy < -50 && position < maxPosition - 1) {
        position++;
    }

    if (movedBy > 50 && position > 0) {
        position--;
    }

    reviewContainer.style.transition = "transform 0.6s ease";
    updatePosition();
}

function getPositionX(e) {
    return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
}

function animation() {
    if (isDragging) {
        reviewContainer.style.transform = `translateX(${currentTranslate}px)`;
        requestAnimationFrame(animation);
    }
}

// Update on window resize
let resizeTimer;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        position = 0;
        reviewContainer.style.transition = "none";
        updatePosition();
    }, 250);
});

// Prevent context menu on long press
reviewContainer.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

// Prevent default drag behavior
reviewContainer.addEventListener("dragstart", (e) => {
    e.preventDefault();
});

