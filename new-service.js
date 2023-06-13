var activeSection = null;

function toggleSection(section) {
  var sectionElement = document.getElementById("section" + section);

  if (activeSection === sectionElement) {
    sectionElement.classList.remove("active");
    sectionElement.classList.add("closing");
    activeSection = null;

    // Reset the sectionElement to its initial state after the animation completes
    setTimeout(function () {
      sectionElement.classList.remove("closing");
    }, 300);
  } else {
    if (activeSection !== null) {
      activeSection.classList.remove("active");
      activeSection.classList.add("closing");

      // Reset the activeSection to its initial state after the animation completes
      setTimeout(function () {
        activeSection.classList.remove("closing");
      }, 300);
    }
    sectionElement.classList.add("active");
    activeSection = sectionElement;
  }
}