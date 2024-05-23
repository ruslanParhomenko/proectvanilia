// open list Broadcast, list History

const historySection = document.querySelector('#section-mesaging')
const messagingUl = document.querySelector('.messaging-list')

const openList = 'open-list'
const vectorUpDown = 'transform-vector'
const dataA = 'data-a'
const dataLink ='data-link'

const broadcastList = document.querySelector('.nav-item-prime')

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
    

// add html json list to history component and pages

import arrHistoryList from './history-list-arr.json'

// pages

const pagesDiv = document.querySelector('#list-page')
// console.log(pagesDiv)

for(let i = 0;i<=arrHistoryList.length;i++){
    const buttonLi = createTagId('button','type','button')
    buttonLi.innerText = 1 + i
    pagesDiv.append(buttonLi)    
}




// history list
const htmlDivHistoryList = document.querySelector('.history-table-list-item')
let startList = 0
let finishList = 10

                // <ul>
                //     <li id="checkbox"><input type="checkbox"></li>
                //     <li id="name-subject"><span>Sample Message Name Sample</span></li>
                //     <li id="message-type"><span>Broadcast</span></li>
                //     <li id="channel">
                //         <img src="/img/vector-phone.svg" alt="">
                //         <img src="/img/vector-sms.svg" alt="">
                //         <img src="/img/vector-mail.svg" alt="">
                //     </li>
                //     <li id="recipients"><span>000000</span></li>
                //     <li id="date-sent"><span>Jan 01, 2024 12:00am</span></li>
                //     <li id="view-summary"><button><img src="/img/vector-list-item.svg" alt=""></button></li>
                // </ul>

function createTagId  (tag,atribut,text) {
    const teg = document.createElement(tag)
    if(atribut && text){

        teg.setAttribute(atribut,text)
    }
    return teg
}


for(let i = startList;i<=finishList; i++){

    const ul = createTagId('ul','data-history',arrHistoryList[i].id)
    
    const liCheckbox = createTagId('li','id','checkbox')
    const input = createTagId('input','type','checkbox')
    liCheckbox.append(input)
    ul.append(liCheckbox)

    const liName = createTagId('li','id','name-subject')
    const spanName = createTagId('span')
    spanName.innerText= arrHistoryList[i].name
    liName.append(spanName)
    ul.append(liName)

    const liMessageType = createTagId('li','id','message-type')
    const spanMessage = createTagId('span') 
    spanMessage.innerText = arrHistoryList[i].messageType.filter((item) => item.cheked)[0].item
    liMessageType.append(spanMessage)
    ul.append(liMessageType)

    const liChannel = createTagId('li','id','channel')
    let src = arrHistoryList[i].channel.filter((item)=>item.cheked)
    for(let s=0;s<src.length;s++){
        const imgChannel = document.createElement('img')
        imgChannel.src = src[s].item
        liChannel.append(imgChannel)
    }
    ul.append(liChannel)

    const liRecipients = createTagId('li','id','recepients')
    const spanRecipients = createTagId('span')
    spanRecipients.innerText = arrHistoryList[i].recipients
    liRecipients.append(spanRecipients)
    ul.append(liRecipients)

    const liDate = createTagId('li','id','date-sent')
    const spanDate = createTagId('span')
    spanDate.innerHTML = arrHistoryList[i].dateSent
    liDate.append(spanDate)
    ul.append(liDate)

    const liViewSummary = createTagId('li','id','view-summary')
    const buttonView = createTagId('button')
    const imgView = createTagId('img')
    imgView.src = arrHistoryList[i].viewSummary
    buttonView.append(imgView)
    liViewSummary.append(buttonView)
    ul.append(liViewSummary)

    htmlDivHistoryList.append(ul)
}


