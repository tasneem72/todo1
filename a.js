var newtask =document.querySelector('#new-task');
var addtaskbtn =document.querySelector('#addtask');
var toDoU1=document.querySelector(".todo-list-box ul");
var completeU1 = document.querySelector(".complete-list ul");
  
var createnewtask =function(task){ 
    console.log("creating task...");
var listItem = document.createElement("li");
var cheakbox = document.createElement("input");
var label = document.createElement("label");

label.innerText =task;
cheakbox.type ="checkbox" ;
listItem.appendChild(cheakbox);
listItem.appendChild(label);
return listItem;
};
 var addtask = function(){
console.log("adding task...")
var listItem = createnewtask(newtask.value);
toDoU1.appendChild(listItem);
newtask.value="";

bindIncompleteItems(listItem, completetask);
 };

 var completetask= function(){
 var listItem = this.parentNode;
 var deletebtn = document.createElement("button");
 deletebtn.innerText ="delete";
 deletebtn.className ="delete";
listItem.appendChild(deletebtn);

var cheakbox= listItem.querySelector("input[type=chechbox]");
cheakbox.remove();
completeU1.appendChild(listItem);
bindIncompleteItems(listItem,deletetask);


 };
 var deletetask = function(){
 var listItem = this.parentNode;
 var ul= listItem.parentNode;
 ul.removechild(listItem);
 };

 var bindIncompleteItems = function(taskItem,checkboxclick){
     console.log("error");

     var checkbox = taskItem.querySelector("input[type=checkbox]");
     checkbox.onchange =checkboxclick ;
 };

 var bindcompleteItems = function (taskItem, deletebuttonpress){
 console.log("error2");
  
 var deleletbutton = taskItem.querySelector("delete");
 deleletbutton.onclick = deletebuttonpress;


 };
  for(var i=0; i< toDoU1.children.length; i++){
      bindIncompleteItems(toDoU1.children[i],completetask);
  }
   for(var i=0; i<completeU1.children.length; i++){
       bindcompleteItems(completeU1.children[i],deletetask);
   }
   addtaskbtn.addEventListener("click",addtask);