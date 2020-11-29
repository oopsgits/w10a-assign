let firstPTag = document.querySelector("p");
firstPTag.style.fontSize = "1.5";

let allPTags = document.querySelectorAll("p");
for(var index = 0; index<allPTags.length; index++){
    allPTags[index].style.color = "blue"
}

let headerTitle = document.getElementById("header-title");
headerTitle.style.color = "green"

let footerLinks = document.getElementsByClassName("footer-links");
for(var index = 0; index<footerLinks.length; index++) {
    footerLinks[index].style.color = "purple"
}

let images = document.getElementsByTagName("img");
for (var index = 0; index<images.length; index++) {
    images[index].style.width = "50px";
}

let newPTag = document.createElement("p");
let newTextNode = document.createTextNode("I Have Been Injecteed");
newPTag.appendChild(newTextNode);
document.getElementById("body-container").append(newPTag);

let headerContainer = document.getElementById("header-container");
headerContainer.removeChild(headerTitle);

headerContainer.classList.add("header-backround");

let bodyContainer = document.getElementById("body-container");
bodyContainer.classList.remove("header-background");


let footerContainer = document.getElementById("footer-container");
footerContainer.classList.toggle("header-background");









// -------------------------------------from week 10 qiz----------------------------------------------------------------------------

// input = document.getElementById('inputBox');

// input.addEventListener('click', {

//     alert('You clciked me!');

// });

