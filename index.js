import { openListBroadcast } from "./src/componentJS/openListBroadcast";

const openHistory = ['#communication360-messaging-history','#section-mesaging','mesaging-history-item']

document.querySelector('.navigation-drawer').addEventListener('click',(e) => {
    e.preventDefault()
    // e.stopPropagation()

    openListBroadcast(e.target,...openHistory)

})