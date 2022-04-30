
var liste = document.getElementById("list");

function newElement() {
  if (document.getElementById("task").value != "") {
    var textTask = document.getElementById("task").value;
    document.getElementById("task").value = "";

    
      var li = document.createElement("li");
      var text = document.createTextNode(textTask);
      liste.appendChild(li);
      li.appendChild(text);
      var span = document.createElement("span");
      var t = document.createTextNode("x");
      span.className = "close1";
      span.appendChild(t);
      li.appendChild(span);
    
  }else{
      alert("boş geçilemez")
  }
}




liste.addEventListener("click",function(item){
    if(item.target.tagName="li"){
        item.target.classList.toggle("checked")
        console.log("li")
    }
})

