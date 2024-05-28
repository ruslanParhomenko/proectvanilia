// import arrHistoryList from '../../history-list-arr.json'

import { createTagId } from "./createTegId"




export function historyListHtml (arrHistory,searchValue)  {

    console.log(searchValue)

    const totalItem = document.querySelector('.list-quantity')
    const htmlDivHistoryList = document.querySelector('.history-table-list-item')
    // const numPage = window.location.search.substring(1).split('=')[1]
    const paramts = new URLSearchParams(window.location.search)
    const numPage = paramts.get('page')

    const arrHistoryList = searchValue ? arrHistory.filter(item => item.name === searchValue) : arrHistory

    console.log(arrHistoryList)

    totalItem.innerText = `${arrHistoryList.length} Item(s) in Total`
    let item = 0
    let itemFinish = 5
    
    function startItem (page) {
        if(page>1){
            item += 6
            startItem(page-1)
        }
        return item
    }

    let itemStart = startItem(numPage)
    itemFinish += itemStart

    for(let i = itemStart; i <= itemFinish; i++ ){
        if (!arrHistoryList[i]) {
            break
        }
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
        switch(spanMessage.innerText){
            case 'Automatic':{
                liMessageType.classList.add('message-type-automatic')
            }
            break
            case 'Emergency' :{
                liMessageType.classList.add('message-type-emergency')
            }
            break
            case 'Broadcast' :{
                liMessageType.classList.add('message-type-broadcast')
            }
            break
        }
        ul.append(liMessageType)
    
        const liChannel = createTagId('li','id','channel')
        let src = arrHistoryList[i].channel.filter((item)=>item.cheked)
        for(let s=0;s<src.length;s++){
            const imgChannel = document.createElement('img')
            imgChannel.src = src[s].item
            liChannel.append(imgChannel)
        }
        ul.append(liChannel)
    
        const liRecipients = createTagId('li','id','recipients')
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


}