const dropdownButtons = document.querySelectorAll(".dropdown .dropbtn");
const dropdownContents = document.querySelectorAll(".dropdown-content");

let activeDropdown = null;

dropdownButtons.forEach((button, index) => {
  let isHovered = false;

  button.addEventListener("mouseenter", () => {
    if (activeDropdown !== null) {
      // Close the previously open drop-down
      activeDropdown.style.maxHeight = "0";
      activeDropdown.style.opacity = 0;
    }

    const dropdownContent = dropdownContents[index];
    dropdownContent.style.display = "flex";
    dropdownContent.style.opacity = 1;
    dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
    isHovered = true;
    activeDropdown = dropdownContent;
  });

  dropdownContents[index].addEventListener("mouseenter", () => {
    isHovered = true;
  });

  button.addEventListener("mouseleave", () => {
    const dropdownContent = dropdownContents[index];
    if (!isHovered) {
      dropdownContent.style.maxHeight = "0"; // Collapse to 0 max-height
      dropdownContent.style.opacity = 0;
    }
  });

  dropdownContents[index].addEventListener("mouseleave", () => {
    isHovered = false;
    const dropdownContent = dropdownContents[index];
    dropdownContent.style.maxHeight = "0"; // Collapse to 0 max-height
    dropdownContent.style.opacity = 0;
  });
});

