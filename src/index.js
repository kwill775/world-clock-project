function updateTime() {
  let logAngelesElement = document.querySelector("#los-angeles");
  let logAngelesDateElement = logAngelesElement.querySelector(".date");
  let logAngelesTimeElement = logAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  logAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  logAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
