// Variable is being declared for the current day
var currentDay = moment().format("dddd, MMMM Do YYY, h:mm:ss a");

//Selecting the current day id to display the current day and time

$("#currentDay").text(currentDay);

