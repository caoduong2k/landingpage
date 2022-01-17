var header = document.querySelector("header");

var scrollval = 0;
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    header.style.top = "-60px";
    if (scrollval > window.scrollY) {
      header.style.transition = "all .25s";
      header.style.top = "-60px";
    } else {
      header.classList.add("scrolling");
      header.style.transition = "all .25s";
      header.style.top = "0";
    }
    scrollval = window.scrollY;
  } else {
    header.style.top = "0";
    header.classList.remove("scrolling");
  }
});

const sidebar = document.querySelector("#sidebar");

document.querySelector("a.menu-btn").onclick = () => {
  sidebar.classList.add("open");
  sidebar.style.width = "200px";
  return false;
};

document.querySelector("a.close-sidebar").onclick = () => {
  sidebar.style.width = "0";
  sidebar.classList.remove("open");
  return false;
};

document.querySelector(".shadow-sidebar").onclick = () => {
  sidebar.style.width = "0";
  sidebar.classList.remove("open");
  return false;
};

const header_menu_item = document.querySelectorAll("header a.menu-item");

header_menu_item.forEach((i) => {
  i.onclick = () => {
    const i_active = document.querySelector("header a.active.menu-item");
    i_active.classList.remove("active");

    i.classList.add("active");

    const id = i.getAttribute("data-href");

    if (id != "#") {
      const top = document.querySelector(id).offsetTop - 100;
      document.body.scrollTop = top;
      document.documentElement.scrollTop = top;
    } else {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  };
});

const sidebar_menu_item = document.querySelectorAll("#sidebar a.menu-item");

sidebar_menu_item.forEach((i) => {
  i.onclick = () => {
    const i_active = document.querySelector("#sidebar a.active.menu-item");
    i_active.classList.remove("active");

    i.classList.add("active");

    const id = i.getAttribute("data-href");

    if (id != "#") {
      const top = document.querySelector(id).offsetTop - 100;
      document.body.scrollTop = top;
      document.documentElement.scrollTop = top;
    } else {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    sidebar.style.width = "0";
    sidebar.classList.remove("open");
  };
});

document.querySelector(".shadow-sidebar").onclick = () => {
  sidebar.style.width = "0";
  sidebar.classList.remove("open");
  return false;
};
