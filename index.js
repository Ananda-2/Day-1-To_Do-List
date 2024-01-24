const searchBox = document.getElementById("search-bar"); 
const listContainer = document.getElementById("list-item") ; 

function addTask(){
    console.log(searchBox.value);

    if(searchBox.value === ''){
        alert("Enter text first") ;
    }
    else{
        let LI = document.createElement("li");
        LI.innerHTML = searchBox.value ;
        listContainer.appendChild(LI) ;

        // create span for x 

        let span = document.createElement("span") ;
        span.innerHTML = "\u00d7" ;
        LI.appendChild(span) ;

    }
    searchBox.value = "" ;
    saveData();
}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked") ;
        saveData();

    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove() ;
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML) ;
}
function getData(){
    listContainer.innerHTML = localStorage.getItem("data") ;
}

getData();