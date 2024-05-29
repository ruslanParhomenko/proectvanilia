import { numbering1, numbering2, numbering3 } from "./numbering-page"

import { finishList } from "./numbering-page"



export function pageHistoryList () {

    const midlPage = +finishList / 2

    const pagesDiv = document.querySelector('#list-page')
    const vectorPageForward = document.querySelector('#vector-forward')
    const vectorPageBack = document.querySelector('#vector-back')


    

    function vector (i) {
        let paramts = new URLSearchParams(window.location.search)
        if(paramts.get('id')){
            paramts.delete('id')
            window.location.search = paramts
        } else {

            let num = +window.location.search.substring(1).split('=')[1]
            if (num > 1 && num < finishList){

                num +=  +i
                paramts.set('page',num)
                window.location.search = paramts
            } else {
                paramts.set('page',num)
                window.location.search = paramts
            }
        }
    }
    

    vectorPageBack.addEventListener('click',()=>vector(-1))
    vectorPageForward.addEventListener('click',()=>vector(1))
    pagesDiv.addEventListener('click',(e)=>{
        
        const paramts = new URLSearchParams(window.location.search)
        paramts.delete('id')
        switch(e.target.innerText){
            case '. ..':{
                paramts.set('page',1)
                window.location.search  = paramts
            }
            break
            case '.. .':{
                paramts.set('page',+finishList)
                window.location.search  = paramts
            }
            break
            default :{

                paramts.set('page',e.target.innerText)
                window.location.search  = paramts
            }
        }
        })

    // let numPage = window.location.search.substring(1).split('=')[1]
    const paramts = new URLSearchParams(window.location.search)
    const numPage = paramts.get('page')
    

    switch(+numPage) {
        case +finishList:
        case +finishList-1:
        case +finishList-2: 
        case +finishList-3:{
        numbering3(pagesDiv)
        }
        break
        case midlPage:
        case midlPage+1:{
        numbering2(pagesDiv)
        }
        break
        default :{
        numbering1(pagesDiv)
        }
        break
        }

}