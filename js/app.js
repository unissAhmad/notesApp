showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    if (addTxt.value != "") {
        let notes = localStorage.getItem('notes');
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
            // console.log(JSON.parse(notes));
        }
        notesObj.push(addTxt.value);
        localStorage.setItem('notes', JSON.stringify(notesObj));
        addTxt.value = "";
        // console.log(notesObj);
        showNotes();
    }


});
//function to show notes from localStorage
function showNotes() {
    let html = '';
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.forEach(function (element, index) {
        html += `
        <div class="card my-2 mx-2 notecard" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>   
                <p class="card-text">${element}</p>
                <a id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary" >Delete Note</a>
            </div>
        </div>
</div>
        `;
    });
    let noteElement = document.getElementById('notes');
    noteElement.innerHTML = html;
}
//func to delete a note
function deleteNote(index){
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    showNotes();
}
let searchTxt=document.getElementById('searchTxt');
searchTxt.addEventListener('input',function(){
    let inputVal = searchTxt.value.toLowerCase();
    let card = document.getElementsByClassName('notecard');
    Array.from(card).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardTxt);
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }else{
            element.style.display="none";
        }
    })
})