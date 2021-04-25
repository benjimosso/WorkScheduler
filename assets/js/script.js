// var dateUnputE1 = $('#currentDay')
var textearea = $('textarea')
    // var SaveButton = $('#save')
var InputClass = $('.form-control')
    // console.log('-----------------')
    // console.log(InputClass)
    // console.log('-----------------')

// it's calling only the first class. 
var Present = $('.present')
var Past = $('.past')
var future = $('.future')


Present.removeClass('present')
Past.removeClass('past')
future.removeClass('future')
    // var test = $('.input-group')
    // console.log(test)


var Timer = moment().format('HH');
//Timer = '19';

//console.log(Timer)

// test = textearea.value
// console.log(test)

function DateTime() {
    var Weekday = moment().format('ddd Do MMM YYYY')
    $('#currentDay').text(Weekday)
}
DateTime()

function TimeCheck() {
    $(textearea).each(function() {
            //console.log("!!", this.dataset.number, Timer)
            // console.log("KK", this.dataset)
            //console.log(this)

            if (this.dataset.number < Timer) {
                $(this).addClass('past')
            } else if (this.dataset.number > Timer) {
                $(this).addClass('future')
            } else if (this.dataset.number === Timer) {
                $(this).addClass('present')
            }
            // console.log(this.dataset.number)
        })
        // console.log("Past", Past)
        // console.log("future", future)
        // console.log("Present", Present)
        // console.log("##", Past === future, Past === Present)

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





// Object.keys(InputClass[3].dataset.number).forEach(element => console.log(element));

// function BackgroundAlternative() {
//     $()
//     if (InputClass[i].dataset.number < Timer) {
//         Past.addClass('past')
//     } else if (InputClass[i].dataset.number > Timer) {
//         future.addClass('future')
//     } else if (InputClass[i].dataset.number === Timer) {
//         Present.addClass('present')
//     }
// }
// BackgroundAlternative()


// var input = document.getElementById('input').value
// localStorage.setItem('userinput', input)
// localStorage.getItem('userinput')
// console.log(input)


// function userPick(event) {
//     event.preventDefault()
//     if (event.target.classList.contains("btn")) {


//         // replace for Jquery (if you know how to)
//         $(InputClass).each(function() {
//             console.log(this)

//             localStorage.setItem('userinput', $(this).value)
//             localStorage.getItem('userinput')
//                 //console.log(InputClass[i].value)

//         });
//         //var input = document.getElementsByClassName('form-control').value
//         //var Input2 = document.getElementById('input').value
//         // localStorage.setItem('userinput', input)
//         // localStorage.getItem('userinput')
//         // console.log(input)
//     }
// }

$('.btn-primary').on('click', function() {
    var UserText = $(this).siblings('.form-control').val();
    var Hour = $(this).parent().attr('id')
    console.log("a ver si sale")
    localStorage.setItem(Hour, UserText)

})