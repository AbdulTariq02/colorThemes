let buttons = document.querySelectorAll('.button')
let body = document.querySelector('body')
// console.log(buttons)

buttons.forEach(function (button) {
    console.log(buttons)


    button.addEventListener('click', function (e) {
        console.log(e)
        console.log(e.target)
        // body.style.transition = "  background-color 0.3s"
        // console.log(e.target.id)

        if (e.target.id === 'red') {
            body.style.backgroundColor = 'red'
            body.style.transition = "  background-color 0.3s"
        } if (e.target.id === 'white') {
            body.style.backgroundColor = 'white'
            body.style.transition = "  background-color 0.3s"
        } if (e.target.id === 'blue') {
            body.style.backgroundColor = 'rgb(140, 140, 178)'
            body.style.transition = "  background-color 0.3s"
        } if (e.target.id === 'yellow') {
            body.style.backgroundColor = 'yellow'
            body.style.transition = "  background-color 0.3s"
        }
       


    })
})


