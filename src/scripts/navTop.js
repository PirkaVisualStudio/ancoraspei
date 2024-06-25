const showMenu = (toggleId, navId, listId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    list = document.getElementById(listId);

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
    toggle.classList.toggle("show-icon");
    list.classList.toggle("show-list");
  });
};

showMenu("navToggle", "navMenu", "listId");

/*=========== DROPDOWN SHOW/HIDE ===========*/

const dropdownItems = document.querySelectorAll(".dropdown-item");
//1. select each dropdown item
dropdownItems.forEach((item) => {
  //2.select each button click
  const dropdownButton = item.querySelector(".dropdown-button");

  dropdownButton.addEventListener("click", () => {
    //7. select the current dropdown item
    const showDropdown = item.querySelector(".show-dropdown");
    //5. call the toggleItem function
    toggleItem(item);

    //8. remove show-dropdown class from all other items
    if (showDropdown && showDropdown != item) {
      toggleItem(showDropdown);
    }
  });
});

//3. create function to display dropdown
const toggleItem = (item) => {
  //3.1 select each dropdown item
  const dropdownConatainer = item.querySelector(".dropdown-container");

  //6 if the same item conains the show-dropdown class, remove
  if (item.classList.contains("show-dropdown")) {
    dropdownConatainer.removeAttribute("style");
    item.classList.remove("show-dropdown");
  } else {
    //4. add maximum height of the dropdown and add show class
    dropdownConatainer.style.height = dropdownConatainer.scrollHeight + "px";
    item.classList.add("show-dropdown");
  }
};
