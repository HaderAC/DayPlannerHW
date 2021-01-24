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

    $(".saveBtn").on("click", function () {

        var input = $(this).siblings(".description").val();
        var timeBlock = $(this).parent().attr("id");

        //Here we will save to local storage the users input and time of it

        localStorage.setItem(timeBlock, input);
    })

    // Here is where the function to change the color of the timeblocks depending
    // of them being in the past, present or future will go.

    function addColor() {

        var currentTime = moment().hour();
        //Function to go thru the timeblocks 

        $(".time-block present").each(function () {

            var timeBlock = parseInt($(this).attr("id").split("-")[1]);

            if (timeBlock < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");

            } else if (timeBlock === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");

            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }

        })

    }

addColor();

});