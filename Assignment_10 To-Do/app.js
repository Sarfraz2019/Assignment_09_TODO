var list = document.getElementById("list")

function addTodo(){
var li = document.createElement("li");

 // create input tag 
// var cbox = document.createElement('input');
// cbox.setAttribute('type', 'text');
// li.appendChild(cbox);
// cbox.setAttribute('class', 'item_input');

    // create text node 
    var todoItem = document.getElementById("toDo")
if (todoItem.value === '') {
   alert("You must write something!");
 } else {
   var inputText = document.createTextNode(todoItem.value)
   li.appendChild(inputText)
  list.appendChild(li);
 }
    


   


    // create delete button 
 var delBtn = document.createElement("button")
 delBtn.setAttribute('class', 'remove');
 
   var delText = document.createTextNode('')
 delBtn.appendChild(delText)
 var icon1 = '<i class="fas fa-minus-circle"></i>'
 delBtn.innerHTML = icon1

// create edit button
var editBtn = document.createElement("button")
editBtn.setAttribute('class', 'edit');

var editText = document.createTextNode('')
editBtn.appendChild(editText)
var icon = '<i class="far fa-edit"></i>'
editBtn.innerHTML = icon
// editBtn.appendChild(editText)






  // append button to li
    li.appendChild(delBtn)
    li.appendChild(editBtn)

    delBtn.setAttribute("onclick","deleteItem(this)")
    editBtn.setAttribute("onclick","editItem(this)")
   
    

    todoItem.value = ""
}

 //  we can write any other character for parameter except e ..#i.e  a,b,c ...x,y,z
function deleteItem(e){
   e.parentNode.remove()
}

function editItem(e){
   var val = e.parentNode.firstChild.nodeValue;
   var editValue = prompt("Enter edit Value",val)
   e.parentNode.firstChild.nodeValue= editValue
}
function dltAll(){
   list.innerHTML = ""
}