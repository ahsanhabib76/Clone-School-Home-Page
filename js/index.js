// NavBar toggle function
const navBar_ul = document.querySelector("#nav_ul");
const bars = document.querySelector(".bars");
const Xmark = document.querySelector("#xmark");

bars.addEventListener("click", () => {
  if (navBar_ul.classList.contains("visible")) {
    bars.style.backgroundColor = "none";
    navBar_ul.classList.remove("visible");
  } else {
    bars.style.backgroundColor = "#ddd";
    navBar_ul.classList.add("visible");
  }
});

// assing naBar li elements
const aboutIHBS = document.querySelector("#about_IHSB");
const Branches = document.querySelector("#Branches");
const Achievements = document.querySelector("#Achievements");
const Academics = document.querySelector("#Academics");
const Admission = document.querySelector("#Admission");
const Gallery = document.querySelector("#Gallery");
const Login = document.querySelector("#Login");

// assing dropDown menus
const aboutihbs_Dropdown = document.querySelector(".drop_down");
const branches_Dropdown = document.querySelector(".drop_down_2");
const achievements_Dropdown = document.querySelector(".drop_down_3");
const academics_Dropdown = document.querySelector(".drop_down_4");
const admission_Dropdown = document.querySelector(".drop_down_5");
const gallery_Dropdown = document.querySelector(".drop_down_6");
const login_Dropdown = document.querySelector(".drop_down_7");

// dropDown toggle function
const toggleDropdown = (elements) => {
  if (elements.classList.contains("visibility")) {
    elements.classList.remove("visibility");
  } else {
    elements.classList.add("visibility");
  }
};

// Dropdowns Event

// aboutIHBS
aboutIHBS.addEventListener("click", (e) => {
  e.stopPropagation();

  // remove visible class in every dropdown menus
  branches_Dropdown.classList.remove("visibility");
  achievements_Dropdown.classList.remove("visibility");
  academics_Dropdown.classList.remove("visibility");
  admission_Dropdown.classList.remove("visibility");
  gallery_Dropdown.classList.remove("visibility");
  login_Dropdown.classList.remove("visibility");

  toggleDropdown(aboutihbs_Dropdown);
});

Branches.addEventListener("click", (e) => {
  e.stopPropagation();

  // remove visible class in every dropdown menus
  aboutihbs_Dropdown.classList.remove("visibility");
  achievements_Dropdown.classList.remove("visibility");
  academics_Dropdown.classList.remove("visibility");
  admission_Dropdown.classList.remove("visibility");
  gallery_Dropdown.classList.remove("visibility");
  login_Dropdown.classList.remove("visibility");

  toggleDropdown(branches_Dropdown);
});

Achievements.addEventListener("click", (e) => {
  e.stopPropagation();

  // remove visible class in every dropdown menus
  aboutihbs_Dropdown.classList.remove("visibility");
  branches_Dropdown.classList.remove("visibility");
  academics_Dropdown.classList.remove("visibility");
  admission_Dropdown.classList.remove("visibility");
  gallery_Dropdown.classList.remove("visibility");
  login_Dropdown.classList.remove("visibility");

  toggleDropdown(achievements_Dropdown);
});

Academics.addEventListener("click", (e) => {
  e.stopPropagation();

  // remove visible class in every dropdown menus
  aboutihbs_Dropdown.classList.remove("visibility");
  branches_Dropdown.classList.remove("visibility");
  achievements_Dropdown.classList.remove("visibility");
  admission_Dropdown.classList.remove("visibility");
  gallery_Dropdown.classList.remove("visibility");
  login_Dropdown.classList.remove("visibility");

  toggleDropdown(academics_Dropdown);
});

Admission.addEventListener("click", (e) => {
  e.stopPropagation();

  // remove visible class in every dropdown menus
  aboutihbs_Dropdown.classList.remove("visibility");
  branches_Dropdown.classList.remove("visibility");
  achievements_Dropdown.classList.remove("visibility");
  academics_Dropdown.classList.remove("visibility");
  gallery_Dropdown.classList.remove("visibility");
  login_Dropdown.classList.remove("visibility");

  toggleDropdown(admission_Dropdown);
});

Gallery.addEventListener("click", (e) => {
  e.stopPropagation();

  // remove visible class in every dropdown menus
  aboutihbs_Dropdown.classList.remove("visibility");
  branches_Dropdown.classList.remove("visibility");
  achievements_Dropdown.classList.remove("visibility");
  academics_Dropdown.classList.remove("visibility");
  admission_Dropdown.classList.remove("visibility");
  login_Dropdown.classList.remove("visibility");

  toggleDropdown(gallery_Dropdown);
});

Login.addEventListener("click", (e) => {
  e.stopPropagation();

  // remove visible class in every dropdown menus
  aboutihbs_Dropdown.classList.remove("visibility");
  branches_Dropdown.classList.remove("visibility");
  achievements_Dropdown.classList.remove("visibility");
  academics_Dropdown.classList.remove("visibility");
  admission_Dropdown.classList.remove("visibility");
  gallery_Dropdown.classList.remove("visibility");

  toggleDropdown(login_Dropdown);
});

// event and media clicks event
const events = document.querySelector("#events");
const notices = document.querySelector("#notice");
const carosuel = document.querySelector(".carosuel");
const noDataFound = document.querySelector(".noData_found");

const eventBtn = () => {
  events.classList.add("active");
  notices.classList.remove("active");
  carosuel.style.display = "block";
  noDataFound.style.display = "none";
};

const noticeBtn = () => {
  notices.classList.add("active");
  events.classList.remove("active");
  carosuel.style.display = "none";
  noDataFound.style.display = "block";
};

// events
events.addEventListener("click", eventBtn);

// notices
notices.addEventListener("click", noticeBtn);

// Assocries Slide
