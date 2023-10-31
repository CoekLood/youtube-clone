const tabs = document.querySelectorAll(".lower-header a");
const rightArrow = document.querySelector(".lower-header .right-arrow i");
const tabsList = document.querySelector(".lower-header-items");
const leftArrowContainer = document.querySelector(".lower-header .left-arrow");
const rightArrowContainer = document.querySelector(".lower-header .right-arrow");
const leftArrow = document.querySelector(".lower-header .left-arrow i");

const removeAllActiveClasses = () => {
    tabs.forEach(tab => {
        tab.classList.remove("active");
    })
};

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        removeAllActiveClasses();
        tab.classList.add("active");
    })
});

const manageIcons = () => {
    if (tabsList.scrollLeft >= 1) {
        leftArrowContainer.classList.add("active");
    } else {
        leftArrowContainer.classList.remove("active");
    }

    let maxScroll = tabsList.scrollWidth- tabsList.clientWidth - 20;
    if (tabsList.scrollLeft >= maxScroll) {
        rightArrowContainer.classList.remove("active");
    }
    else {
        rightArrowContainer.classList.add("active");
    }
    
};

rightArrow.addEventListener("click", () => {
    tabsList.scrollLeft += 200;
    manageIcons();
});

leftArrow.addEventListener("click", () => {
    tabsList.scrollLeft -= 200;
    manageIcons();
});

tabsList.addEventListener("scroll", () => manageIcons());

let dragging = false;
tabsList.addEventListener('mousedown', () => {
    dragging=true;
});

const drag = (e) => {
    if(!dragging) return;
    tabsList.classList.add('dragging');
    tabsList.scrollLeft -= e.movementX;
};

tabsList.addEventListener('mousemove', drag);

document.addEventListener('mouseup', () => {
    dragging=false;
    tabsList.classList.remove('dragging');
});