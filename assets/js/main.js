function toggleMenu(){const m=document.getElementById('mobileMenu');m.style.display=m.style.display==='flex'?'none':'flex'}
function closeMenu(){document.getElementById('mobileMenu').style.display='none'}
function toggleFaq(el){const item=el.parentElement;const isOpen=item.classList.contains('open');document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));if(!isOpen)item.classList.add('open')}
const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
window.addEventListener('scroll',()=>{const nav=document.getElementById('nav');nav.style.boxShadow=window.scrollY>50?'0 4px 20px rgba(0,0,0,0.3)':'none'});