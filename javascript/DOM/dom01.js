/*
Add the following elements to the container using ONLY JavaScript and the DOM methods shown above.

1. a <p> with red text that says “Hey I’m red!”
2. an <h3> with blue text that says “I’m a blue h3!”
3. a <div> with a black border and pink background color with the following elements inside of it:
  a. another <h1> that says “I’m in a div”
  b. a <p> that says “ME TOO!”
  c. Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/

const container = document.querySelector('#container');

const p = document.createElement('p');
p.textContent = "Hey I'm red!";
p.style.color = 'red';  
const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';  
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
const pDiv = document.createElement('p');
pDiv.textContent = "ME TOO!";
const div = document.createElement('div');
div.setAttribute('style', 'border: 1px black solid; background: pink;');   

container.appendChild(p);
container.appendChild(h3);
div.appendChild(h1);
div.appendChild(pDiv);
container.appendChild(div);