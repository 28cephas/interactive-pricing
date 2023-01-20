const pageviewNumber = document.querySelector('#pageview')
const cost = document.querySelector('#cost')
const cost2 = document.querySelector('#cost2')
const range = document.querySelector('#range')
const switchBtn = document.querySelector('.switch')
const toggleSpan = document.querySelector('.toggle')

const pageViews = ['10K', '50K', '100K', '500K', '1M']
const perMonth = [8, 12, 16, 24, 36] 

let isYearly = false

switchBtn.addEventListener('click', () => {
    toggleSpan.classList.toggle('active')
    if(isYearly == false){
        isYearly = true
    } else{
        isYearly = false
    }
    update()
})

range.addEventListener('input', () => {
    update()

    let value1 = range.value * 25

    range.style.background = `linear-gradient(to right,
        hsl(174, 77%, 80%) 0%,
        hsl(174, 77%, 80%) ${value1}%,
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%
        )`
})

function update() {
    if(isYearly){
        cost.innerHTML = perMonth[range.value] * .75
        cost2.innerHTML = perMonth[range.value] * .75
    } else {
        cost.innerHTML = perMonth[range.value] 
        cost2.innerHTML = perMonth[range.value] 
    }

    pageviewNumber.innerHTML = pageViews[range.value]
}
