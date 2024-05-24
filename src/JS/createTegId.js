

 export function createTagId  (tag,atribut,text) {
    const teg = document.createElement(tag)
    if(atribut && text){
        teg.setAttribute(atribut,text)
    }
    return teg
}