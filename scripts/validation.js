/* VALIDATION FOR FEEDBACK FORM */
function validate() {
  /* FIRST NAME VALIDATION - NO ENTRY */
  if (document.f_form.fname.value === "") {
    alert("Please fill in your first name.");
    document.f_form.fname.focus();
    return false;
    /* FIRST NAME VALIDATION - NUMBERS AND SYMBOLS */
  } else if (!/^[a-zA-Z]*$/g.test(document.f_form.fname.value)) {
    alert("Your first name cannot contain numbers or symbols.");
    document.f_form.fname.focus();
    return false;
    /* FIRST NAME VALIDATION - NAME IS SHORTER THAN 3 CHARACTERS */
  } else if (document.f_form.fname.value.length < 3) {
    alert("Your first name cannot be less than three characters.");
    document.f_form.fname.focus();
    return false;
    /* FIRST NAME VALIDATION - NAME IS LONGER THAN 40 CHARACTERS */
  } else if (document.f_form.fname.value.length > 40) {
    alert("Your first name cannot be more than 40 characters.");
    document.f_form.fname.focus();
    return false;

    /* SURNAME VALIDATION - NO ENTRY */
  } else if (document.f_form.lname.value === "") {
    alert("Please fill in your surname.");
    document.f_form.lname.focus();
    return false;
    /* SURNAME VALIDATION - NUMBERS AND SYMBOLS */
  } else if (!/^[a-zA-Z]*$/g.test(document.f_form.lname.value)) {
    alert("Your surname cannot contain numbers or symbols.");
    document.f_form.lname.focus();
    return false;
    /* SURNAME VALIDATION - NAME IS SHORTER THAN 3 CHARACTERS */
  } else if (document.f_form.lname.value.length < 3) {
    alert("Your surname cannot be less than three characters.");
    document.f_form.lname.focus();
    return false;
    /* SURNAME VALIDATION - NAME IS LONGER THAN 40 CHARACTERS */
  } else if (document.f_form.lname.value.length > 40) {
    alert("Your surname cannot be more than 40 characters.");
    document.f_form.lname.focus();
    return false;

    /* EMAIL VALIDATION - NO ENTRY*/
  } else if (document.f_form.email.value === "") {
    alert("Please fill in your email address.");
    document.f_form.email.focus();
    return false;
    /* EMAIL VALIDATION - FORMAT */
  } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.f_form.email.value)) {
    alert("Please enter a valid email.");
    document.f_form.email.focus();
    return false;
    /* EMAIL VALIDATION - TOO LONG */
  } else if (document.f_form.email.value.length > 320) {
    alert("Your email cannot be longer than 320 characters.");
    document.f_form.email.focus();
    return false;

    /* PHONE NUMBER VALIDATION - NO ENTRY */
  } else if (document.f_form.phone.value === "") {
    alert("Plese fill in your phone number.");
    document.f_form.phone.focus();
    return false;
    /* PHONE NUMBER VALIDATION - FORMAT */
  } else if (!/^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(document.f_form.phone.value)) {
    alert("Please enter a valid phone number");
    document.f_form.phone.focus();
    return false;

    /* RADIO BUTTON VALIDATION - NO ENTRY */
  } else if (!document.querySelector("input[name='pref_contact']:checked")) {
    alert("Please select a preferred contact method");
    return false;

    /* CHECKBOX VALIDITON - NO ENTRY */
  } else if (!document.querySelector("input[name='reason']:checked")) {
    alert("Please select a contact reason.");
    return false;

    /* DROPDOWN VALIDATION - NO ENTRY */
  } else if (document.f_form.area.value === "") {
    alert("Please select an area for your query.");
    return false;

    /* TEXT AREA VALIDATION - NO ENTRY */
  } else if (document.f_form.add_info.value === "") {
    alert("Please leave a short message about your query.");
    document.f_form.add_info.focus();
    return false;
    /* TEXT AREA VALIDATION - LESS THAN 30 CHARACTERS */
  } else if (document.f_form.add_info.value.length < 30) {
    alert("Please ensure your query is longer than 30 characters.");
    document.f_form.add_info.focus();
    return false;
    /* TEXT AREA VALIDATION - MORE THAN 500 CHARACTERS */
  } else if (document.f_form.add_info.value.length > 500) {
    alert("Please write no more than 500 characters.");
    document.f_form.add_info.focus();
    return false;

    /* ALL FIELDS VALIDATED */
  } else {
    return true;
  }
}
