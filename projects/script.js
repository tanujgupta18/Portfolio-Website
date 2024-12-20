$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    // if (window.scrollY > 60) {
    //   document.querySelector("#scroll-top").classList.add("active");
    // } else {
    //   document.querySelector("#scroll-top").classList.remove("active");
    // }
  });
});

// fetch projects start
function getProjects() {
  return fetch("projects.json")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

function showProjects(projects) {
  let projectsContainer = document.querySelector(".work .box-container");
  let projectsHTML = "";
  projects.forEach((project) => {
    let viewButton = "";
    let codeButton = "";

    // Only create buttons if the links are not empty
    if (project.links.view) {
      viewButton = `<a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>`;
    }
    if (project.links.code) {
      codeButton = `<a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>`;
    }
    // Construct the project HTML
    projectsHTML += `
      <div class="grid-item ${project.category}">
        <div class="box tilt" style="width: 300px; margin: 1.2rem">
          <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
          <div class="content">
            <div class="tag">
              <h3>${project.name}</h3>
            </div>
            <div class="desc">
              <p>${project.desc}</p>
              <div class="btns">
                ${viewButton}
                ${codeButton}
              </div>
            </div>
          </div>
        </div>
      </div>`;
  });

  // Insert the generated HTML into the projects container
  projectsContainer.innerHTML = projectsHTML;

  // Initialize Isotope grid
  var $grid = $(".box-container").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    masonry: {
      columnWidth: 200,
    },
  });

  // Filter items on button click
  $(".button-group").on("click", "button", function () {
    $(".button-group").find(".is-checked").removeClass("is-checked");
    $(this).addClass("is-checked");
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });
}

getProjects().then((data) => {
  showProjects(data);
});
// fetch projects end
