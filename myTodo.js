let j=1;
let rem=1;
function removeCard(rem_col)
{
  console.log(`rem card is ${rem_col}`)
    let element = document.getElementById(rem_col);
    console.log(element)
    element.remove()
}

function mark(chk_done){
    console.log(chk_done)
    let lis = document.querySelectorAll(`.${chk_done}`)
    console.log(lis[0])
    lis[0].style.textDecoration = 'line-through'
    lis[1].disabled=true;
  }


 
//when submit button gets clicked
function addTask()    {
    let k=1;

    let allInputs = document.querySelectorAll('#newTask')
    
    let getTitle = document.getElementById('title_input').value

    let columnDiv=document.createElement('div')
    columnDiv.setAttribute("class","column")
    columnDiv.setAttribute("id",`column${j}`)
    let columnDiv_id = `column${j}`;

    let closeDiv=document.createElement('span')
    closeDiv.setAttribute("class","close")
    let closeX= document.createTextNode('x')
    closeDiv.appendChild(closeX)
    closeDiv.setAttribute('onclick',`removeCard("${columnDiv_id}")`)

    let cardDiv=document.createElement('div')
    cardDiv.setAttribute("class","card")
    
    
    let titleDiv=document.createElement('div')
    titleDiv.setAttribute("class","title")
    let newTitle = document.createTextNode(getTitle)
    titleDiv.appendChild(newTitle)

    let ulDiv =document.createElement('ul')
    ulDiv.setAttribute("id","list")
    allInputs.forEach(element => {

    let newTodo = document.createElement('li')
    let addTask = document.createTextNode(element.innerHTML)
    newTodo.setAttribute("id","lis")
        
    let chk = document.createElement('input')
    chk.setAttribute('type','checkbox')
    chk.setAttribute("id",'myCheck')
    let chk_id = `column${j}${k++}`;
    chk.setAttribute("class",`${chk_id}`)
    newTodo.setAttribute("class",`${chk_id}`)
    chk.setAttribute('onclick',`mark("${chk_id}")`)
    
    newTodo.appendChild(chk)
    newTodo.appendChild(addTask)    
    ulDiv.appendChild(newTodo)

  });   // end of forEach loop

    cardDiv.appendChild(titleDiv)
    cardDiv.appendChild(ulDiv)
    columnDiv.appendChild(closeDiv)    
    columnDiv.appendChild(cardDiv)
    document.querySelector('.row').appendChild(columnDiv)   
    document.getElementById('title_input').value = ''

    document.querySelector('#list_input').innerHTML=''
     j++;
}


//adding to modal list
function addToList()   {

    let toDo = document.querySelector('#input').value
    let createTodo = document.createElement('li')
    createTodo.setAttribute("id", "newTask");
    let addTodo = document.createTextNode(toDo)
    createTodo.appendChild(addTodo)
    document.querySelector('#list_input').appendChild(createTodo)
    document.querySelector('#input').value = '' 

}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("closing")[0];
 
btn.onclick = function() {
modal.style.display = "block";
}

span.onclick = function() {
  console.log("hello")
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}