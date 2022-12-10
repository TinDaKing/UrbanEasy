const dropDownList = document.querySelector("#drop-down-menu");
const user = document.querySelector("#user");
const main = document.getElementsByTagName('main')[0];
let isDropDownListShowed = false;
const searchBarBackDrop = document.getElementById("search-bar-back-drop");
const open = () => {
    dropDownList.classList.remove('hidden');
    isDropDownListShowed = true;
}
const close = () => {
    dropDownList.classList.add('hidden');
    isDropDownListShowed = false;
 
}
user.addEventListener('mousedown', event => {
    if (isDropDownListShowed) {
        close();
        document.body.removeEventListener("mousedown", closeDropDownListHandler);
    } else {
        open();
        document.body.addEventListener("mousedown", closeDropDownListHandler);
    }
})


const closeDropDownListHandler = event => {
    const isClickInsideButton = user.contains(event.target)
    const isClickInsideAvoidElement = dropDownList.contains(event.target);
    if (!isClickInsideButton && !isClickInsideAvoidElement) {
        close();
    }
}

const searchBar = document.querySelector("#search-bar");
let isSearchBarShowed = false;
const searchButton = document.querySelector("#search-button-small");
const searchBarSmall = document.querySelector("#search-bar-small");
const closeSearchBar = () => {
    
}
const openSearchBar = () => {
    searchBarSmall.classList.add("hidden");
    searchBar.classList.remove("hidden");
}
searchButton.addEventListener('click', event => {
    openSearchBar();
    isSearchBarShowed = true;
    searchBarBackDrop.addEventListener('mousedown', toggleSearchBarHandler);
    searchBarBackDrop.classList.remove("hidden");
});


const toggleSearchBarHandler = event => {
    isInsideSearchBar = searchBar.contains(event.target);
    if (!isInsideSearchBar && isSearchBarShowed) {
        searchBar.classList.add("hidden");
        searchBarSmall.classList.remove("hidden");
        isSearchBarShowed = false;
        searchBarBackDrop.classList.add("hidden");
        searchBarBackDrop.removeEventListener('mousedown', toggleSearchBarHandler);
    }
};
