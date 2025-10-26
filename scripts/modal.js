/* GET ALL MODAL BUTTONS */
const btns = document.getElementsByClassName("btn");

/* GET ALL MODAL CLOSE BUTTONS */
const closeBtns = document.getElementsByClassName("close");

/* LOOP THROUGH ALL MODAL BUTTONS + EVENT LISTENERS */
for (let i = 0; i < btns.length; i++) {
  /* Add click event listener to each modal button */
  btns[i].addEventListener("click", function () {
    /* Modal ID for associated button */
    const modalId = this.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    /* Display the modal */
    modal.style.display = "block";
    /* Reset slide index when modal is opened */
    modalSlideIndex = 1;
    /* Display first slide of the modal */
    modalShowSlides(modalId, modalSlideIndex);
  });
}

/* LOOP THROUGH ALL CLOSE BUTTONS + EVENT LISTENERS */
for (let i = 0; i < closeBtns.length; i++) {
  /* Add click event listener to each close button */
  closeBtns[i].addEventListener("click", function () {
    /* Modal ID for associated close button */
    const modalId = this.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    /* Hide (close) the modal */
    modal.style.display = "none";
  });
}

/* CLOSE MODAL WHEN CLICKING OUTSIDE OF IT */
window.addEventListener("click", function (event) {
  /* Check if the clicked element is a modal */
  if (event.target.classList.contains("modal")) {
    /* If not, hide the modal */
    event.target.style.display = "none";
  }
});
