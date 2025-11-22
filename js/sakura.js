// pétalos más grandes y fluidos
for(let i=0;i<22;i++){
let s = document.createElement('div');
s.classList.add('sakura');


const size = 26 + Math.random()*40;
s.style.width = size + 'px';
s.style.height = size + 'px';


s.style.left = Math.random()*100 + 'vw';
s.style.animation = `fall ${4 + Math.random()*5}s linear ${Math.random()*3}s infinite`;


document.body.appendChild(s);
}