const tabs = document.querySelectorAll('.tab');
const tabPanes = document.querySelectorAll('.tab-pane');

let tabInterval = null;
initTabInterval();

tabs.forEach( tab => {
    tab.addEventListener('click', () => {
        clearInterval(tabInterval);
        const targetTabPane = document.querySelector(`#${tab.dataset.targetId}`)
        
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tab.classList.add('active');

        tabPanes.forEach(tabPane => {
            tabPane.classList.remove('in');
        });
        targetTabPane.classList.add('in');
        initTabInterval();
    })
})

function initTabInterval(){
    tabInterval = setInterval(() => {
        let activeTab = document.querySelector('.tab.active');
        let nextTab = activeTab.nextElementSibling;
        if(!nextTab)
            nextTab = activeTab.parentNode.firstElementChild;
        nextTab.click();
    }, 5000);
}
