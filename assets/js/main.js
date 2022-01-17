document.querySelector("html").classList.remove("no-js");
if (!window.Cypress) {
  const scrollCounter = document.querySelector(".js-scroll-counter");

  AOS.init({
    mirror: true,
    offset: 10,
    duration: 400,
    once: true,
  });

  document.addEventListener("aos:in", function (e) {
    console.log("in!", e.detail);
  });

  window.addEventListener("scroll", function () {
    // scrollCounter.innerHTML = window.pageYOffset;
  });
}
// ---- phân trên là thư viên aos  cấm sửa 🐱‍🏍🐱‍👤🐱‍🏍🐱‍🏍

// -- trên là phần script của header các bố nghịch ít thôi
// -- dưới là phẩn sử lý button to top
var mybutton = document.getElementById("myBtn");
mybutton.style.display = "none"; // -- khi vào auto mất hình
// -- Khi người dùng cuộn xuống 200px từ đầu tài liệu, hiển thị nút
window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
});

function scrollFunction() {}
// Khi người dùng nhấp vào nút, thì bay lên đầu trang
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.getElementById("see_map").addEventListener("click", showMap);
document.getElementById("ToTop").addEventListener("click", topFunction);

function showMap() {
  document.getElementById("map_frame").classList.toggle("map_show")
}
