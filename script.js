// Mengambil data json menggunakan AJAX
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "data.json",
    dataType: "json",
    success: function (response) {
      // Mengambil data name and position
      const dataName = response.data_biography.name;
      $("#data_name").append(dataName);
      const dataPosition = response.data_biography.position;
      $("#data_position").append(dataPosition);

      // Mengambil data stats
      const dataStats = response.data_stats;
      $.each(dataStats, function (key, value) {
        $("#data_stats").append(
          `<div class="p-4 bg-white rounded-md shadow-md hover:bg-slate-400 group dark:shadow-slate-600 dark:bg-slate-900 dark:hover:bg-indigo-200">
              <h3 class="mb-2 text-base font-semibold text-gray-800 md:text-lg group-hover:text-white dark:text-white dark:group-hover:text-black">
                ${key}
              </h3>
              <p class="text-gray-600 group-hover:text-white dark:text-white dark:group-hover:text-black">
                ${value}
              </p>
           </div>`
        );
      });

      // Mengambil data biography
      const dataBiography = response.data_biography.biography;
      $("#data_biography").append(dataBiography);

      // Mengambil data timeline
      const dataTimeline = response.data_timeline;
      $.each(dataTimeline, function (key, value) {
        $("#data_timeline").append(
          `<li>
            <div class="flex items-center pt-3 flex-start">
              <div class="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-black dark:bg-white"></div>
              <p class="text-sm">${value.year}</p>
            </div>
            <div class="mt-2 mb-6 ms-4">
              <h4 class="mb-1.5 text-base md:text-lg lg:text-xl font-semibold">
                ${value.club}
              </h4>
              <p class="p-4 mb-3 text-sm text-justify text-white rounded-md md:text-base bg-slate-400 dark:bg-slate-400 dark:text-black">
                ${value.desc}
              </p>
            </div>
          </li>`
        );
      });
    },

    error: function (xhr, status, error) {
      console.log(error);
    },
  });
});

// Mengatur tema dark mode dengan checkbox
// const checkBox = document.querySelector("#switch");
// checkBox.addEventListener("click", () => {
//   if (checkBox.checked) {
//     document.documentElement.classList.add("dark");
//   } else {
//     document.documentElement.classList.remove("dark");
//   }
// });

// Mengatur tema dark mode dengan checkbox dengan jquery
$("#switch").click(function () {
  if ($(this).is(":checked")) {
    $("body").addClass("dark");
  } else {
    $("body").removeClass("dark");
  }
});

// Mengubah style class navbar saat discroll
// window.addEventListener("scroll", function () {
//   var navbar = document.querySelector("nav");
//   if (window.scrollY > 10) {
//     navbar.classList.add(
//       "bg-slate-500",
//       "bg-opacity-10",
//       "backdrop-filter",
//       "backdrop-blur-md",
//       "shadow-md"
//     );
//     navbar.classList.remove("shadow-none");
//   } else {
//     navbar.classList.remove(
//       "bg-slate-500",
//       "bg-opacity-10",
//       "backdrop-filter",
//       "backdrop-blur-md",
//       "shadow-md"
//     );
//     navbar.classList.add("shadow-none");
//   }
// });

// Mengubah style class navbar saat discroll dengan jquery
$(window).on("scroll", function () {
  let navbar = $("nav");
  if ($(this).scrollTop() > 10) {
    navbar
      .addClass(
        "bg-slate-500 bg-opacity-10 backdrop-filter backdrop-blur-md shadow-md"
      )
      .removeClass("shadow-none");
  } else {
    navbar
      .removeClass(
        "bg-slate-500 bg-opacity-10 backdrop-filter backdrop-blur-md shadow-md"
      )
      .addClass("shadow-none");
  }
});

// Menambahkan event listener untuk menyesuaikan posisi navbar
// document.addEventListener("DOMContentLoaded", function () {
//   const navLinks = document.querySelectorAll("nav a");

//   navLinks.forEach(function (link) {
//     link.addEventListener("click", function (event) {
//       event.preventDefault();

//       const navHeight = document.querySelector("nav").offsetHeight;

//       // Mendapatkan posisi elemen target
//       const id = this.getAttribute("href");
//       const targetElement = document.getElementById(id.substring(1));
//       const targetPosition = targetElement.offsetTop;

//       const scrollToPosition = targetPosition - navHeight - 15;

//       window.scrollTo({
//         top: scrollToPosition,
//         behavior: "smooth",
//       });
//     });
//   });
// });

// Menambahkan event listener untuk menyesuaikan posisi navbar dengan jquery
$(document).ready(function () {
  $("nav a").on("click", function (event) {
    event.preventDefault();

    const navHeight = $("nav").outerHeight();

    // Mendapatkan posisi elemen target
    const id = $(this).attr("href");
    const targetPosition = $(id).offset().top;

    const scrollToPosition = targetPosition - navHeight - 15;

    $("html, body").animate(
      {
        scrollTop: scrollToPosition,
      },
      "slow"
    );
  });
});
