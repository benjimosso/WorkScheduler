// var dateUnputE1 = $('#currentDay')
var textearea = $('textarea')
    // var SaveButton = $('#save')
var InputClass = $('.form-control')
    // console.log('-----------------')
    // console.log(InputClass)
    // console.log('-----------------')

// it's calling only the first class. 
// var Present = $('.present')
// var Past = $('.past')
// var future = $('.future')


// Present.removeClass('present')
// Past.removeClass('past')
// future.removeClass('future')
// var test = $('.input-group')
// console.log(test)


var Timer = moment().format('HH');
//Timer = '19';

console.log(Timer)

// test = textearea.value
// console.log(test)

function DateTime() {
    var Weekday = moment().format('ddd Do MMM YYYY')
    $('#currentDay').text(Weekday)
}
DateTime()

function Background() {
    $(textearea).each(function() {
            console.log("!!", this.dataset.number, Timer)
                // console.log("KK", this.dataset)
            console.log(this)

            if (this.dataset.number < Timer) {
                $(this).addClass('past')
                $(this).removeClass('future')
                $(this).removeClass('present')

            } else if (this.dataset.number > Timer) {
                $(this).addClass('future')
                $(this).removeClass('present')
                $(this).removeClass('past')
            } else if (this.dataset.number === Timer) {
                $(this).addClass('present')
                $(this).removeClass('past')
                $(this).removeClass('future')
            }
            // console.log(this.dataset.number)
        })
        // console.log("Past", Past)
        // console.log("future", future)
        // console.log("Present", Present)
        // console.log("##", Past === future, Past === Present)
}

Background()





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
document.addEventListener('click', userPick)

// var input = document.getElementById('input').value
// localStorage.setItem('userinput', input)
// localStorage.getItem('userinput')
// console.log(input)


function userPick(event) {
    event.preventDefault()
    if (event.target.classList.contains("btn")) {
        // $('li').each(function(index) {
        //     $(this).find('textarea').val()
        // })


        // replace for Jquery (if you know how to)
        for (let i = 0; i < InputClass.length; i++) {
            //const test = InputClass[i].value;

            localStorage.setItem('userinput', InputClass[i].value)
            localStorage.getItem('userinput')
            console.log(InputClass[i].value)

        }
        //var input = document.getElementsByClassName('form-control').value
        //var Input2 = document.getElementById('input').value
        // localStorage.setItem('userinput', input)
        // localStorage.getItem('userinput')
        // console.log(input)
    }
}