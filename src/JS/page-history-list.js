import { numbering1, numbering2, numbering3 } from "./numbering-page"

import { finishList } from "./numbering-page"



export function pageHistoryList () {

    const midlPage = +finishList / 2

    const pagesDiv = document.querySelector('#list-page')
    const vectorPageForward = document.querySelector('#vector-forward')
    const vectorPageBack = document.querySelector('#vector-back')

    function vector (i) {
        let paramts = new URLSearchParams(window.location.search)
        let num = +window.location.search.substring(1).split('=')[1]
        num +=  +i
        paramts.set('page',num)
        window.location.search = paramts
    }

    vectorPageBack.addEventListener('click',()=>vector(-1))
    vectorPageForward.addEventListener('click',()=>vector(1))
    pagesDiv.addEventListener('click',(e)=>{
        const paramts = new URLSearchParams(window.location.search)
        paramts.set('page',e.target.innerText)
        window.location.search  = paramts
        })

    let numPage = window.location.search.substring(1).split('=')[1]

    switch(+numPage) {
        case undefined:
        case 1:
        case 2:
        case 3: 
        case 4:{
        numbering1(pagesDiv)
        }
        break
        case midlPage:
        case midlPage+1:{
        numbering2(pagesDiv)
        }
        break
        default :{
        numbering3(pagesDiv)
        }
        break
        }

}