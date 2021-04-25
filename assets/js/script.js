var textearea = $('textarea')
var InputClass = $('.form-control')
var Present = $('.present')
var Past = $('.past')
var future = $('.future')

// Hide the classes. 
Present.removeClass('present')
Past.removeClass('past')
future.removeClass('future')

// declare var to show only the Hour for later use in ifstatement
var Timer = moment().format('HH');

// Current date function
function DateTime() {
    var Weekday = moment().format('ddd Do MMM YYYY')
    $('#currentDay').text(Weekday)
}
DateTime()

// Background change and local storage set up
function TimeCheck() {
    // if statement comparing Timer var and data set on textarea
    $(textearea).each(function() {
        if (this.dataset.number < Timer) {
            $(this).addClass('past')
        } else if (this.dataset.number > Timer) {
            $(this).addClass('future')
        } else if (this.dataset.number === Timer) {
            $(this).addClass('present')
        }
    })

    // Grab inputs from local storage to prevent erase them when refresh page
    $("#10 .form-control").val(localStorage.getItem("10"));
    $("#11 .form-control").val(localStorage.getItem("11"));
    $("#12 .form-control").val(localStorage.getItem("12"));
    $("#13 .form-control").val(localStorage.getItem("13"));
    $("#14 .form-control").val(localStorage.getItem("14"));
    $("#15 .form-control").val(localStorage.getItem("15"));
    $("#16 .form-control").val(localStorage.getItem("16"));
    $("#17 .form-control").val(localStorage.getItem("17"));
    $("#18 .form-control").val(localStorage.getItem("18"));
    $("#19 .form-control").val(localStorage.getItem("19"));
}

TimeCheck()

// event listener on save buttons to send the input from text area to local storage
$('.btn-primary').on('click', function() {
    var UserText = $(this).siblings('.form-control').val();
    var Hour = $(this).parent().attr('id')
    localStorage.setItem(Hour, UserText)

})