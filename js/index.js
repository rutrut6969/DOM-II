// Your code goes here

// Guideed Project During Lecture
// function clickEvent(e) {
//     console.log('You clicked on the ' + e.view + '!!!');
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.currentTarget)
// }
// // const home = document.querySelector('.nav .nav-link');
// // console.log(home);
// homeLink.addEventListener('click' // string with the name of the event
//     , clickEvent);
// document.querySelector('nav').addEventListener('click', clickEvent);
// // attach a 'click' event listener to the header element
// document.querySelector('header').addEventListener('click', clickEvent);
// document.body.addEventListener('click', clickEvent);
// document.addEventListener('click', clickEvent);
// window.addEventListener('click', clickEvent);

// Actual Project

/*	
 * [ ] `mouseover`
 * [ ] `keydown`
 * [ ] `wheel`
 * [ ] `drag / drop`
 * [ ] `load`
 * [ ] `focus`
 * [ ] `resize`
 * [ ] `scroll`
 * [ ] `select`
 * [ ] `dblclick` 
 */
// Variables
const body = document.body;
const p = document.querySelector('#nope');
const button = document.querySelectorAll('.destination .btn');
let scale = 1;
let clicks = 0;
console.log(button);

// Functions
function click() {
    clicks++;
    if (clicks === 1) {
        alert("You really shouldn't do that.");
    } else if (clicks === 2) {
        alert("People really don't know how to listen do they?");
    } else {
        alert("I said don't do that!!!")
        body.innerHTML = "<div><p id='nope'>GOOD RIDANCE</p></div>";
        nope.style.color = 'purple';
        nope.style.fontSize = 'xx-large';
        nope.style.textAlign = 'center';
        body.style.backgroundColor = 'orange';
        html.addEventListener('mousemove', mouseMove);
    }

}

function dblClick() {
    alert("I really don't understand why people click these Navigation links so often...");
}

function mouseMove(e) {
    console.log(e.offsetY);
    console.log(e.offsetX);
    body.style.backgroundColor = 'rgb(' + e.offsetX + ',' + e.offsetY + ',40)';
}

function mouseOver(e) {
    aboutLink.textContent = "Double Click Me!";
}

function mouseOut(e) {
    aboutLink.textContent = 'About Us';
}

function rotate() {
    document.body.className = 'transform';
}

function rotateBack() {
    document.body.className = '';
}

function goAway(e) {
    // for (let i = 0; i < button.length; i++) {
    //     button[i].style.opacity = '0';
    //     button[i].style.transition = 'ease-in 0.4s';

    // };
    button.forEach(element => {
        element.style.opacity = '0';
        element.style.transition = 'ease-in 0.4s';
    })
}

function comeBack(e) {
    // for (let i = 0; i < button.length; i++) {
    //     button[i].style.opacity = '1';
    //     button[i].style.transition = 'ease-out 0.4s';
    // }
    button.forEach(element => {
        element.style.opacity = '1';
        element.style.transition = 'ease-out 0.4s';
    })
}

function zoom(event) {
    scale += event.deltaY * -0.01;
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
    // Apply scale transform
    body.style.transform = `scale(${scale})`;
}


// Listeners
homeLink.addEventListener('click', click);
aboutLink.addEventListener('dblclick', dblClick);
aboutLink.addEventListener('mouseover', mouseOver);
aboutLink.addEventListener('mouseout', mouseOut);
bus.addEventListener('mouseover', rotate);
body.addEventListener('click', rotateBack);
// for (let i = 0; i < button.length; i++) {
//     button[i].addEventListener('mousedown', goAway);
//     button[i].addEventListener('mouseup', comeBack)
// }
button.forEach(element => {
    element.addEventListener('mousedown', goAway);
    element.addEventListener('mouseup', comeBack);
});
body.addEventListener('wheel', zoom);