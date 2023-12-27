// SIDEBAR
const sidebarDropdown = document.querySelectorAll('.sidebar-dropdown')
const sidebar = document.getElementById('sidebar')
const toggleSidebar = document.querySelector('.toggle-sidebar')

sidebarDropdown.forEach(item=> {
    const toggle = item.previousElementSibling

    toggle.addEventListener('click', function(e) {
        e.preventDefault()

        sidebar.classList.remove('sidebar-collapse')

        item.classList.toggle('hidden')
        this.classList.toggle('active')
    })
})

toggleSidebar.addEventListener('click', function() {
    sidebar.classList.toggle('sidebar-collapse')

    sidebarDropdown.forEach(item=> {
        const toggle = item.previousElementSibling
        item.classList.add('hidden')
        toggle.classList.remove('active')
    })
})







// TAB
const tabIndicator = document.querySelectorAll('[data-toggle="tab"]')
const tabContent = document.querySelectorAll('.tab-content')

tabIndicator.forEach(item=> {
    item.addEventListener('click', function(e) {
        e.preventDefault()

        tabIndicator.forEach(i=> i.classList.remove('active'))
        tabContent.forEach(i=> i.classList.add('hidden'))

        this.classList.add('active')
        document.querySelector(this.dataset.target).classList.remove('hidden')
    })
})