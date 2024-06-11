import arrHistoryList from '../../history-list-arr.json'

export function sortMessageType () {
    const paramts = new URLSearchParams(window.location.search)
    console.log(paramts.getAll('search-filter'))
    const sortListType = paramts.getAll('search-type').length > 0
    ? arrHistoryList.filter(item => paramts.getAll('search-type').includes(item.messageType))
    : arrHistoryList;

    const sortListFilter = paramts.getAll('search-filter').length > 0
    ? sortListType.filter(item => {
        const sortParamts = (itemChannal) => paramts.getAll('search-filter').includes(itemChannal)
        // console.log(paramts.getAll('search-filter'))
        // console.log(itemFilter.channel)
        return item.channel.some(sortParamts);
    })
    : sortListType;

    // console.log(sortListFilter)
    return sortListFilter;
}