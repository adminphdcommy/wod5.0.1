function plus(){
	var size = document.getElementById("title").style.fontSize = "40px"
	
	
}

function minus(){
	var size = document.getElementById("title").style.fontSize = "20px"
	
	
}

function red(){
	var color = document.getElementsByTagName("body")
	color[0].style.color = "red"
	color[0].style.backgroundColor = "green"
}

function yellow(){
	var color = document.getElementsByTagName("body")
	color[0].style.color = "yellow"
	color[0].style.backgroundColor = "red"
}

function green(){
	var color = document.getElementsByTagName("body")
	color[0].style.color = "green"
	color[0].style.backgroundColor = "yellow"
}

function reset(){
	var color = document.getElementsByTagName("body")
	color[0].style.color = ""
	color[0].style.backgroundColor = ""
}

function addpara(){
	var newpara = document.getElementById("addnew1").value
	var addpara = document.getElementById("div1");
	var newslot = document.createElement("p");
	newslot.innerHTML = newpara;
	addpara.appendChild(newslot);
	
}

function delpara(){
	var delpara = document.querySelectorAll("#div1 p");
	var content = document.getElementById("div1")
	content.removeChild(delpara[delpara.length-1])
	
}

function addtask(){
	var newpara = document.getElementById("addtask1").value
	var addpara = document.getElementById("todolist");
	var newli = document.createElement("li");
	var newdelbtn = document.createElement("button");
	var span = document.createElement("span")
	span.innerHTML = newpara;
	newdelbtn.innerHTML = "Delete Task"
	addpara.appendChild(newli);
	newli.appendChild(span);
	newli.appendChild(newdelbtn);	
	newdelbtn.onclick = function(){
		addpara.removeChild(newli)
	};
	window.confirm("new task added")
}



var div3 = document.getElementById("div3")

var pwfield = document.getElementById("password")
var cpwfield = document.getElementById("cpassword")
var submitbtn = document.getElementById("submit1")
cpwfield.addEventListener("blur",function(){
	if(pwfield.value !== cpwfield.value){
		
		document.getElementById("pwcheck").innerHTML = " Password Not Match!"
		document.getElementById("pwcheck").style.color = "red"
	}
	else {
		document.getElementById("pwcheck").innerHTML = " Password Matched!"
		submitbtn.removeAttribute("disabled")
		document.getElementById("pwcheck").style.color = "green"
	}
})

















