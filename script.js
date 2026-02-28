let currentTab = 'all';
const tabActive = ['bg-blue-500','text-white'];
const tabInactive = ['bg-white','text-black'];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container")
const rejectContainer = document.getElementById("reject-container")



function switchTab(tab){
    const tabs = ['all', 'interview', 'rejected'];
    currentTab = tab;

    for(const t of tabs){
        const tabName = document.getElementById(t+'-btn');
        if(t === tab){
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        } else{
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }
    }
    // const pages = ['allContainer', 'interviewContainer', 'rejectContainer'];
    // for(const section of pages){
    //     section.classList.add('hidden');
    //     console.log(section);
    //     //section.classList.add('hidden');
    // }
    allContainer.classList.add('hidden');
    interviewContainer.classList.add('hidden');
    rejectContainer.classList.add('hidden');
    emtyStat.classList.add('hidden');
    if(tab === 'all'){
        allContainer.classList.remove('hidden');
        if(allContainer.children.length < 1){
            emtyStat.classList.remove('hidden')
        }
    }else if(tab === 'interview'){
        interviewContainer.classList.remove('hidden');
        if(interviewContainer.children.length < 1){
            emtyStat.classList.remove('hidden')
        }
    }else{
        rejectContainer.classList.remove('hidden');
        if(rejectContainer.children.length < 1){
            emtyStat.classList.remove('hidden')
        }
    }
    updateStat()
}

// stat update
const totalStat = document.getElementById('stat-total');
const interviewlStat = document.getElementById('stat-interview');
const rejectStat = document.getElementById('statrejected');
const emtyStat = document.getElementById('no-jobs-message');
const avilable = document.getElementById('availabl');

switchTab(currentTab);

document.getElementById("job-container").addEventListener("click", function(event){
    const clickedElement = event.target;
    const card = clickedElement.closest(".card");
    const parent = card.parentNode
    const stutas = card.querySelector(".card-status");
    
    

    if(clickedElement.classList.contains("card-interview-btn")){
        stutas.innerText = "Interviewed";
        interviewContainer.appendChild(card)
    }
    if(clickedElement.classList.contains("card-rejected-btn")){
        stutas.innerText = "Rejected";
        rejectContainer.appendChild(card)
    }
    if(clickedElement.classList.contains("card-delete-btn")){
        parent.removeChild(card)
    }
    updateStat()
});

function updateStat(){
    // totalStat.innerText = allContainer.children.length;
    // interviewlStat.innerText = interviewContainer.children.length;
    // rejectStat.innerText = rejectContainer.children.length;
    // avilable.innerText = allContainer.children.length;

    const countss = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectContainer.children.length
    };
    totalStat.innerText =countss['all'];
    interviewlStat.innerText = countss['interview'];
    rejectStat.innerText = countss['rejected'];

    avilable.innerText = countss[currentTab];

    if(countss[currentTab] < 1){
        emtyStat.classList.remove('hidden');
    }else{
        emtyStat.classList.add('hidden');
    }
}
updateStat()
