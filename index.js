

const historySection = document.querySelector('#section-mesaging')
const messagingUl = document.querySelector('#messaging-list')

const listUlBroadcoast = document.querySelectorAll('.nav-item-prime')

const openList = 'open-list'
const vectorUpDown = 'transform-vector'
const dataA = 'data-a'
const dataLi = 'data-li'

listUlBroadcoast.forEach(el => console.log(el.addEventListener('click', (e)=> {
    e.preventDefault()
    let event = e.target
    
    if((+event.getAttribute(dataLi) || +event.getAttribute(dataA)) === 2) {
        document.querySelector('#vector-2').classList.toggle(vectorUpDown)
        messagingUl.classList.toggle(openList)
    }
    if((+event.getAttribute(dataLi) || +event.getAttribute(dataA)) === 24 ) {
        historySection.classList.toggle(openList)
    }

})))



