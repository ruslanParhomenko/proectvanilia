
  
export function filterArr () {
        
    const inputSearch = document.querySelector('#search-list')
    const paramts =new URLSearchParams(window.location.search)

    let inputValue = paramts.get('search') ?? ''
    inputSearch.setAttribute('value',inputValue)

    inputSearch.addEventListener('keydown',(e) => {
        console.log(e)
        if (e.key === 'Enter') {
            let paramtsId = new URLSearchParams(window.location.search)
            paramtsId.set('search', e.target.value.trim())
            window.location.search = paramtsId   
        }
    })
}
    


    


    







