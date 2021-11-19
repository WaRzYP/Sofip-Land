// Slides

let slide_one = document.getElementById('one')
let slide_two = document.getElementById('two')
let slide_three = document.getElementById('three')

// Bin 

let btn_prev = document.getElementById('btn-prev')

btn_prev.addEventListener('click', function () {


    stock--
    slide(stock)

})




let btn_suiv = document.getElementById('btn-suiv')
btn_suiv.addEventListener('click', function () {

    stock++
    slide(stock)

})



var stock = 0


// Function

function slide(recup) {

    if (stock == 0) {
        slide_one.classList.add("active")
        slide_two.classList.remove("active")
        slide_three.classList.remove("active")

    } else if (recup == 1) {

        slide_one.classList.remove("active")
        slide_two.classList.add("active")
        slide_three.classList.remove("active")

    } else if (recup == 2) {

        slide_one.classList.remove("active")
        slide_two.classList.remove("active")
        slide_three.classList.add("active")

    } else if (recup > 2) {
        slide_one.classList.remove('active')
        slide_two.classList.remove('active')
        slide_three.classList.add('active')
        stock = -1
    } else if (recup < 0) {

        slide_one.classList.add("active")
        slide_two.classList.remove("active")
        slide_three.classList.remove("active")
        stock = 0
    } else {
        console.error(recup)
    }

}

slide(0)

let delai = 1000

setInterval(function () { slide(stock++) }, delai)
