// scroll suave
document.querySelectorAll('a[href^="#"]').forEach(el=>{
el.addEventListener('click', e=>{
const id = el.getAttribute('href');
if(id.startsWith('#')){
e.preventDefault();
const target = document.querySelector(id);
if(target) target.scrollIntoView({ behavior:'smooth' });
}
});
});