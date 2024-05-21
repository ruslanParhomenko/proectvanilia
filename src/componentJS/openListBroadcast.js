
 export function openListBroadcast (event,idListBroadcast,idSection,styleName) {

    const buttonHistory = document.querySelector(idListBroadcast)
    const aList = buttonHistory.children[0]
   
    
    document.querySelector(idSection).classList.contains('close') && (event === buttonHistory || event === aList) 
    ?
    document.querySelector(idSection).classList.replace('close', styleName)
    : 
    document.querySelector(idSection).classList.replace(styleName, 'close')
}






