//------logic is the imp thing 

let btn = document.querySelector("button");//selected button
let imp = document.querySelector("input");//selected imp.value it prints the value that inserted in the input
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {//this is the button even listen to add the items into the ul -->> li
  let item = document.createElement("li");
  item.innerText = imp.value;

  let dlt = document.createElement("button");
  dlt.innerText = "delete";

  item.appendChild(dlt);
  ul.appendChild(item);
  imp.value = "";
});

ul.addEventListener("click", function (event) {//-- using bubbling concept we can target the parent and remove from the list 
  if (event.target.nodeName == "BUTTON") {
    event.target.parentNode.remove();//hear parent is li(item) and child is dltbtn 
    console.log("deleted");
  }
});
