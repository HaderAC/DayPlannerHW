// Variable is being declared for the current day
var currentDay = moment().format("dddd, MMMM Do YYY, h:mm:ss a");

//Selecting the current day id to display the current day and time

$("#currentDay").text(currentDay);

// Here is where the functionality of the scheduler goes

$(document).ready(function () {

    // This will get the local storage fro the value of timeblock 6am to 6pm
    
        $("#hour-6 .description").val(localStorage.getItem("hour-6"));
        $("#hour-7 .description").val(localStorage.getItem("hour-7"));
        $("#hour-8 .description").val(localStorage.getItem("hour-8"));
        $("#hour-9 .description").val(localStorage.getItem("hour-9"));
        $("#hour-10 .description").val(localStorage.getItem("hour-10"));
        $("#hour-11 .description").val(localStorage.getItem("hour-11"));
        $("#hour-12 .description").val(localStorage.getItem("hour-12"));
        $("#hour-13 .description").val(localStorage.getItem("hour-13"));
        $("#hour-14 .description").val(localStorage.getItem("hour-14"));
        $("#hour-15 .description").val(localStorage.getItem("hour-15"));
        $("#hour-16 .description").val(localStorage.getItem("hour-16"));
        $("#hour-17 .description").val(localStorage.getItem("hour-17"));
        $("#hour-18 .description").val(localStorage.getItem("hour-18"));
    
    //This wil be the onclick on the save button
})
