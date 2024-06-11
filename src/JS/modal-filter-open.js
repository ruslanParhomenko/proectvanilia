

export function modalFilterOpen () {

    const arrBtn = document.querySelectorAll('*[data-btn-modal1]')

    const btnCancel = document.querySelectorAll('.btn-cancel')
    const btnApply = document.querySelectorAll('.btn-apply')



    const inputFilterArr = [...document.querySelectorAll('.modal-checkbox li input')]

    inputFilterArr.forEach(item => {
        if (localStorage.getItem(item.dataset.filter)) {
            item.checked = true
        }
    })
    const paramts = new URLSearchParams(window.location.search)
    inputFilterArr.forEach(item => {
        item.addEventListener('input', (e) => {
            console.log(paramts)
            if(!paramts.getAll('serrch-filter')?.includes(e.target.dataset.filter) && !!e.target.checked) {

                paramts.append('search-filter',e.target.dataset.filter)
                localStorage.setItem(e.target.dataset.filter,JSON.stringify(e.target.value))
            } else {
                console.log('remove')
                paramts.delete('search-filter',e.target.dataset.filter)
                localStorage.removeItem(e.target.dataset.filter)

            }
        })
    })



    

    function getOpenModal (e) {
        const btn = e.currentTarget.dataset.btnModal1
        const modalWindow = document.querySelector(`[data-window-modal1 = ${btn}]`)
        modalWindow.style.display = 'block'
    }
    function getCloseModal () {
        const allModalWindow = document.querySelector('[data-window-modal1]')
        allModalWindow.style.display = 'none'  
    }
    
    arrBtn?.forEach(itemBtn => {
        itemBtn.addEventListener('click', (e) => getOpenModal(e))
    })

    window.onclick = (e) => {
        if (e.target.hasAttribute('data-window-modal1')) {
            getCloseModal()
        }
    }

    btnCancel?.forEach(item => item.addEventListener('click', ()=>{
        inputFilterArr.forEach(item => {
            paramts.delete('search-filter',item.dataset.filter)
            localStorage.removeItem(item.dataset.filter)
        })
        window.location.search = paramts

         getCloseModal()
}
))
    btnApply?.forEach(item => {
        item.addEventListener('click', () => {
            window.location.search = paramts



            getCloseModal()
        })
    })

}