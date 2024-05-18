// import './style.css'
import './src/css/index.css'

import htmlComunication360 from './src/component/comunication360.html?raw';
import mesagingHistory from './src/component/mesaging-history.html?raw';







document.querySelector('#app').innerHTML = `
${htmlComunication360}
${mesagingHistory}
  
`

