import { createTagId } from "./createTegId"
import arrHistoryList from '../../history-list-arr.json'


export let finishList = +arrHistoryList.length / 6

let arrPages = []

for(let i = 1;i<=finishList;i++){
    const buttonLi = createTagId('button','type','button')
    buttonLi.innerText = i
    arrPages.push(buttonLi)   
}

function buttonStart (elTeg) {
    const buttonStart = createTagId('button','type','button')
    buttonStart.innerText = 1
    elTeg.append(buttonStart)
}
function buttonNonSatrt (elTeg) {
    const buttonNon = createTagId('button','type','button')
    buttonNon.innerText = '. ..'
    elTeg.append(buttonNon)
}
function buttonNonFinish (elTeg) {
    const buttonNon = createTagId('button','type','button')
    buttonNon.innerText = '.. .'
    elTeg.append(buttonNon)
}
function buttonFinis (elTeg) {
    const buttonFinis = createTagId('button','type','button')
    buttonFinis.innerText = finishList
    elTeg.append(buttonFinis)
}


export function numbering1 (elTeg) {
    for (let i = 0;i<5;i++){
        elTeg.append(arrPages[i])
    }
    buttonNonFinish(elTeg)
    buttonFinis(elTeg)
}
export function numbering2 (elTeg) {
    buttonStart(elTeg)
    buttonNonSatrt(elTeg)
    for (let i = (+finishList/2-2);i< (+finishList/2+2);i++){
        elTeg.append(arrPages[i])
    }
    buttonNonFinish(elTeg)
    buttonFinis(elTeg)
}
export function numbering3 (elTeg) {
    buttonStart(elTeg)
    buttonNonSatrt(elTeg)
    for (let i = (+finishList - 5);i<finishList;i++){
        elTeg.append(arrPages[i])
    }
}