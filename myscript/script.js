let ul = document.querySelector('ul');

document.querySelector('#menu-btn').onclick = () => {
  ul.classList.toggle('active');
};

const arrow_1=document.getElementById('arrow_1')
function myFunction(x) {
  console.log(arrow_1)
  arrow_1.classList.toggle("fa-chevron-down");
}

const arrow_2=document.getElementById('arrow_2')
function myFunction1(x) {
  arrow_2.classList.toggle("fa-chevron-down");
}

const arrow_3=document.getElementById('arrow_3')
function myFunction2(x) {
  arrow_3.classList.toggle("fa-chevron-down");
}

const arrow_4=document.getElementById('arrow_4')
function myFunction3(x) {
  arrow_4.classList.toggle("fa-chevron-down");
}

const arrow_5=document.getElementById('arrow_5')
function myFunction4(x) {
  arrow_5.classList.toggle("fa-chevron-down");
}
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}