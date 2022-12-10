const tabsBox = document.querySelector(".tabs-box"),
allTabs = tabsBox.querySelectorAll(".tab"),
arrowIcons = document.querySelectorAll(".icon2 i");

let isDragging = false;

const handleIcons = (scrollVal) => {
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
        let scrollWidth = tabsBox.scrollLeft += icon.id === "left" ? -340 : 340;
        handleIcons(scrollWidth);
    });
});

allTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
    });
});

const dragging = (e) => {
    if(!isDragging) return;
    tabsBox.classList.add("dragging");
    tabsBox.scrollLeft -= e.movementX;
    handleIcons(tabsBox.scrollLeft)
}

const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging");
}

$(document).ready(function(){
    $( ".footer-icon" ).click(function() {
    if($(this).hasClass('footer-icon-inactive')) {
        $( this ).removeClass( "footer-icon-inactive" );
        $( this ).addClass( "footer-icon-active" );
    } else {
        $( this ).removeClass( "footer-icon-active" );
        $( this ).addClass( "footer-icon-inactive" );
    }

    });
});

$(document).ready(function(){
    $( ".layer-hi" ).click(function() {
    if($(this).hasClass('liked')) {
        $( this ).removeClass( "liked" );
        $(".layer-hi").attr("src","assets/images/favorite-pink-icon.png");

    } else {
        $( this ).addClass( "liked" );
        $(".layer-hi").attr("src","assets/images/favorite-icon.png");
    }

    });
});

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);