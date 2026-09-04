function toggleNav(){document.getElementById('mobileNav')?.classList.toggle('open')}
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>document.getElementById('mobileNav')?.classList.remove('open')))
})
