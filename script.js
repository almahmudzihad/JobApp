let currentTab = 'all';
const tabActive = ['bg-blue-500','text-white'];
const tabInactive = ['bg-white','text-black'];


function switchTab(tab){
    const tabs = ['all', 'interview', 'rejected'];

    for(const t of tabs){
        const tabName = document.getElementById(t+'-btn');
        if(t === tab){
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
    }
}