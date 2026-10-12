'use strict';
const themeButton=document.getElementById('theme-toggle');
function applyTheme(dark){document.body.classList.toggle('dark',dark);themeButton.setAttribute('aria-pressed',String(dark));themeButton.textContent=dark?'Light theme':'Dark theme';}
let preferred=false;try{const saved=localStorage.getItem('nkuba-resume-theme');preferred=saved?saved==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;}catch(e){preferred=window.matchMedia('(prefers-color-scheme: dark)').matches;}applyTheme(preferred);
themeButton.addEventListener('click',()=>{const dark=!document.body.classList.contains('dark');applyTheme(dark);try{localStorage.setItem('nkuba-resume-theme',dark?'dark':'light');}catch(e){/* Theme still works for this visit. */}});
document.getElementById('print').addEventListener('click',()=>window.print());
