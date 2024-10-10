


export function listBroadcast () {
    const historySection = document.querySelector('#section-mesaging')
    const messagingUl = document.querySelector('.messaging-list')
    const broadcastList = document.querySelector('.nav-item-prime')

    const openList = 'open-list'
    const vectorUpDown = 'transform-vector'
    const dataA = 'data-a'
    const dataLink ='data-link'


    broadcastList.addEventListener('click', (e)=>{
        e.preventDefault()
        
        switch(e.target.getAttribute(dataA)){
            case '1':{
                history.pushState(null,null,e.target.getAttribute(dataLink))
                historySection.classList.remove(openList)
            }
            break
            case '2':{
                history.pushState(null,null,e.target.getAttribute(dataLink))
                document.querySelector('#vector-2').classList.toggle(vectorUpDown)
                messagingUl.classList.toggle(openList)
            }
            break
            case '21':{
                historySection.classList.remove(openList)
                history.pushState(null,null,e.target.getAttribute(dataLink))
            }
            break
            case '22':{
                historySection.classList.remove(openList)
                history.pushState(null,null,e.target.getAttribute(dataLink))
            }
            break
            case '23':{
                historySection.classList.remove(openList)
                history.pushState(null,null,e.target.getAttribute(dataLink))
            }
            break
            case '24':{
                history.pushState(null,null,e.target.getAttribute(dataLink))
                historySection.classList.toggle(openList)
            }
            break
            case '3':{
                history.pushState(null,null,e.target.getAttribute(dataLink))
                historySection.classList.remove(openList)
            }
            break
            case '4':{
                history.pushState(null,null,e.target.getAttribute(dataLink))
                historySection.classList.remove(openList)
            }
            break
            case '5':{
                history.pushState(null,null,e.target.getAttribute(dataLink))
                historySection.classList.remove(openList)
            }
            break
        }
    })

    if (window.location.pathname === '/messaging/history') {
        historySection.classList.add(openList)
    } else {
        historySection.classList.remove(openList)
    }
    
    
}