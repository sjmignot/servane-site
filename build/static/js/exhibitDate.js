const TIMESTAMP_CONST_NAME = "data-timestamp";

let eventDates = document.querySelectorAll(".event__active-indicator");

let currentTimestamp = Date.now() / 1000; // Divide by 1000 to make compatible with python timestamp (which is in seconds)
console.log(currentTimestamp);

eventDates.forEach((event) => {
  console.log(event);
  console.log(event.getAttribute(TIMESTAMP_CONST_NAME));
  if (event.getAttribute(TIMESTAMP_CONST_NAME) < currentTimestamp) {
    console.log("event has passed");
    event.style.visibility = "visible";
  }
});
