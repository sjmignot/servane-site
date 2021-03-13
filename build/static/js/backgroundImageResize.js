const TIMESTAMP_CONST_NAME = "data-timestamp";

let eventDates = document.querySelectorAll(".event__active-indicator");

let currentTimestamp = Date.now() / 1000; // Divide by 1000 to make compatible with python timestamp (which is in seconds)

eventDates.forEach((event) => {
  if (event.getAttribute(TIMESTAMP_CONST_NAME) < currentTimestamp) {
    event.style.visibility = "visible";
  }
});
