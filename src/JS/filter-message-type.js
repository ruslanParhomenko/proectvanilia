// import { historyListHtml } from "./history-list-arr"


export function filterMessageType () {

    const filterList = document.querySelectorAll('.history-filteres > li input')
    console.log(filterList)
    const inputChecked = {}
    // console.log(inputChecked)
 
    filterList.forEach(item => item.addEventListener('input', e => {
        // console.log(e.target.checked)
        

            const paramts = new URLSearchParams(window.location.search)
            console.log(paramts)
            const type = e.target.dataset.name
            console.log(type)
            if (!paramts.getAll('search-type').includes(type) && e.target.checked !== 'on' ) {
                paramts.append('search-type',type)
                inputChecked[e.target.dataset.name] = e.target.value
                console.log(inputChecked)
                window.location.search = paramts
                localStorage.setItem(type,JSON.stringify(inputChecked))
            }
            // const paramtsSearchType = new URL(window.location.href)
            // const inputSelect = e.target
            // const type = inputSelect.dataset.name
            // console.log(paramtsSearchType.searchParams.getAll('search-type'))
            // if (paramtsSearchType.searchParams.getAll('search-type').includes(type)){
            // paramtsSearchType.searchParams.set('saerch-type',type)
            // } else {
            // paramtsSearchType.searchParams.append('search-type',type)
            // }
            // history.pushState({},'',paramtsSearchType)
            // historyListHtml()
            
               else  {
                paramts.delete('search-type',type)
                localStorage.removeItem(type)
                window.location.search = paramts
              

            // const paramts = new URL(window.location.href)
            // const inputNonselect = e.target
            // const typeDelet = inputNonselect.dataset.name
            // paramts.searchParams.delete('search-type',typeDelet)
            // history.pushState({},'',paramts)
            // historyListHtml()
            }
    }))
    // let ls = JSON.parse(localStorage.getItem('input'))
    for (let i = 0; i < filterList.length; i++) {
        console.log(filterList[i].dataset.name)
        if(localStorage.getItem(filterList[i].dataset.name)){
            filterList[i].checked = 'on'
        }
    }
}