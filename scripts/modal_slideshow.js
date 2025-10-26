/* GET ALL SLIDES */
let modalSlideIndex = 1;

/* NEXT/PREVIOUS BUTTONS FUNCTIONS */
function modalPlusSlides(modalId, n) {
  /* Call "modalShowSlides" function */
  modalShowSlides(modalId, (modalSlideIndex += n));
}

/* IMAGE CONTROL FOR CURRENT SLIDE */
function modal_currentSlide(modalId, n) {
  /* Call "modalShowSlides" function */
  modalShowSlides(modalId, (modalSlideIndex = n));
}

/* FUNCTION TO CONTROL DISPLAYED SLIDES */
function modalShowSlides(modalId, n) {
  let i;
  /* Get all modal slides within the specified modal */
  let modalSlides = document.querySelectorAll(`#${modalId} .modal_slides`);
  /* Reset slide if it goes beyond the number of slides (user presses next on last slide) */
  if (n > modalSlides.length) {
    modalSlideIndex = 1;
  }
  /* Reset slides if it goes below 1 (user presses previous on slide 1) */
  if (n < 1) {
    modalSlideIndex = modalSlides.length;
  }
  /* Hide all the slides */
  for (i = 0; i < modalSlides.length; i++) {
    modalSlides[i].style.display = "none";
  }
  /* Display the current slide */
  modalSlides[modalSlideIndex - 1].style.display = "block";
}
