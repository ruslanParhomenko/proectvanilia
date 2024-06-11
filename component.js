import { listBroadcast } from "./src/JS/list-broadcast";
import { pageHistoryList } from "./src/JS/page-history-list";
import { historyListHtml } from "./src/JS/history-list-arr";
import { filterMessageType } from "./src/JS/filter-message-type";
import { filterArr } from "./src/JS/filter-arr-list";
import { modalFilterOpen } from "./src/JS/modal-filter-open";


import { sortMessageType } from "./src/JS/filter-json-list";




window.addEventListener('DOMContentLoaded', function () {

    listBroadcast();
    pageHistoryList();
    filterMessageType();
    historyListHtml();
    filterArr();
    sortMessageType();
    modalFilterOpen();
})

