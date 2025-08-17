$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }
  });
});

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

/* SCROLL EXPERIENCE */
srtop.reveal(".experience .timeline", { delay: 400 });
srtop.reveal(".experience .timeline .container", { interval: 400 });

// disable developer mode
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

/* ===== Read More / Read Less (Experience) ===== */

$(".experience").on("click", ".read-more-btn", function () {
  const $btn = $(this);
  const more = $btn.prev(".more-text")[0];

  // if not open -> open
  if (!more.classList.contains("open")) {
    // set dynamic height for smooth animation
    more.style.maxHeight = more.scrollHeight + "px";
    more.classList.add("open");
    $btn.text("Read Less").attr("aria-expanded", "true");
  } else {
    // close
    more.style.maxHeight = 0;
    more.classList.remove("open");
    $btn.text("Read More").attr("aria-expanded", "false");
  }
});

// keep height correct if window resizes while section is open
$(window).on("resize", function () {
  $(".more-text.open").each(function () {
    this.style.maxHeight = this.scrollHeight + "px";
  });
});
