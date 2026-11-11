document.querySelectorAll('.admin-tab').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('.admin-tab').forEach(x=>x.classList.remove('active'));
 document.querySelectorAll('.admin-section').forEach(x=>x.classList.remove('active'));
 btn.classList.add('active');document.getElementById(btn.dataset.tab).classList.add('active');
}));
function addAdminProduct(){const n=document.getElementById('productName').value||'Новый товар';const p=document.getElementById('productPrice').value||'0';alert(`Товар "${n}" за ${p} ₽ сохранён в демо-режиме.`)}
function saveTheme(){
 const r=document.documentElement.style;
 r.setProperty('--primary',document.getElementById('primary').value);
 r.setProperty('--secondary',document.getElementById('secondary').value);
 r.setProperty('--button',document.getElementById('button').value);
 r.setProperty('--text',document.getElementById('text').value);
 r.setProperty('--bg',document.getElementById('bg').value);
 r.setProperty('--card',document.getElementById('card').value);
 alert('Тема применена в текущем сеансе.');
}
