// Set the target date: January 1, 2000
const targetDate = new Date("2004-10-31T19:00:00Z").getTime();


// Number of milliseconds in a year (accounting for leap years)
const millisecondsInYear = 365.25 * 24 * 60 * 60 * 1000;

// Update the timer every second
const interval = setInterval(function() {

    // Get the current time in milliseconds
    const now = new Date().getTime();

    // Calculate the time difference between now and the target date
    const elapsedMilliseconds = now - targetDate;

    // Convert milliseconds to decimal years
    const elapsedYears = elapsedMilliseconds / millisecondsInYear;

    // Update the HTML element with the decimal year value
    document.getElementById("elapsed-time").innerHTML = elapsedYears.toFixed(9); // Show the decimal years

}, 1); // Update every second

