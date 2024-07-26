
let ul = document.getElementById("ingredients");

let li = document.createElement("li");
li.innerHTML = "Sugar";
ul.appendChild(li);


let list = Array.from(ul.getElementsByTagName("li"));


for(let i=0; i<list.length; i++){
  let text = list[i].innerHTML;
  list[i].innerHTML="";
  let label = document.createElement("label");
  label.htmlFor = "check";
  let input = document.createElement("input");
  input.id = "check";
  input.type="checkbox";
  input.name="name";
  label.innerHTML =text;
  list[i].appendChild(input);
  list[i].appendChild(label);
}


