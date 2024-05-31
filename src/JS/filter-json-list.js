import arrHistoryList from '../../history-list-arr.json'

export function sortMessageType () {
    const paramts = new URLSearchParams(window.location.search)
    // console.log(paramts.getAll('search-type'))
    const sortListType = paramts.getAll('search-type').length > 0 ?
    arrHistoryList.filter(item => paramts.getAll('search-type').includes(item.messageType))
    : arrHistoryList
    // console.log (sortListType)
    return sortListType

}