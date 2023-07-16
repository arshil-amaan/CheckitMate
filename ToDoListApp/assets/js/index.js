const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
  if(inputBox.value ===''){
    alert('Do Something');
  } else {
    // const li = document.createElement("li");
    // li.innerHTML = inputBox.value;
    // listContainer.appendChild(li);
    const litem = `<li>${inputBox.value}</li>`;
    listContainer.innerHTML=litem+listContainer.innerHTML;
    listContainer.firstChild.innerHTML += "<span>\u00d7</span>";
  }
  inputBox.value='';
  saveData();
}

listContainer.addEventListener('click',function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle('checked');
    saveData();
  } else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
}

function restoreData(){
  
listContainer.innerHTML = localStorage.getItem("data");
}
restoreData();