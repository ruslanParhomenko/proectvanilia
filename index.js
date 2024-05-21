import { openListBroadcast } from "./src/componentJS/openListBroadcast";

const openHistory = ['#communication360-messaging-history','#section-mesaging','mesaging-history-item']

document.querySelector('.navigation-drawer').addEventListener('click',(e) => {
    e.preventDefault()
    e.stopPropagation()

    openListBroadcast(e.target,...openHistory)

})

const openMessaging = ['#communication360-messaging','#messaging-list','messaging-list']
document.querySelector('.navigation-drawer').addEventListener('click', (e) => {

    openListBroadcast(e.target,...openMessaging)


})