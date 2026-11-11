const products=[
{name:'VIP',price:199,icon:'👑',desc:'Преимущества для комфортной игры'},
{name:'Premium',price:399,icon:'💎',desc:'Ещё больше возможностей'},
{name:'Кейс с донатом',price:99,icon:'🎁',desc:'Открой и получи награду'}
];
let cart=[];
function renderProducts(){
 const html=products.map((p,i)=>`<div class="product"><div class="product-img">${p.icon}</div><h3>${p.name}</h3><p>${p.desc}</p><span class="price">${p.price} ₽</span><button class="btn btn-primary" onclick="addToCart(${i})">🛒 Купить</button></div>`).join('');
 const a=document.getElementById('products'),b=document.getElementById('productsLarge');
 if(a)a.innerHTML=html;if(b)b.innerHTML=html;
}
function addToCart(i){cart.push(products[i]);renderCart();alert(products[i].name+' добавлен в корзину');}
function renderCart(){const el=document.getElementById('cart');if(!el)return;if(!cart.length){el.textContent='Корзина пуста.';return}const total=cart.reduce((s,p)=>s+p.price,0);el.innerHTML=cart.map((p,i)=>`<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.06)"><span>${p.icon} ${p.name}</span><b>${p.price} ₽</b></div>`).join('')+`<p><b>Итого: ${total} ₽</b></p><button class="btn btn-primary" onclick="alert('В реальной версии здесь будет переход к оплате.')">Перейти к оплате</button>`}
function copyIP(){navigator.clipboard?.writeText('mc.mineserver.ru');alert('IP mc.mineserver.ru скопирован!')}
function openModal(id){document.getElementById(id).classList.add('show')}
function closeModal(id){document.getElementById(id).classList.remove('show')}
function submitFake(msg){alert(msg);event?.target?.closest('.modal')?.classList.remove('show')}
renderProducts();renderCart();
