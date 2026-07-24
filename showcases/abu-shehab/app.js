/* Abu Shehab concept demo — front-end only. Menu + admin edits persist in localStorage. */
const IMG=id=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;
const DEFAULT_MENU=[
{id:1,cat:"starters",name:"باجلا",en:"Bajilla",desc:"فول مطبوخ على الطريقة البحرينية مع الليمون والبهارات الشعبية.",price:0.800,img:IMG("1547592166-23ac45744acd"),emoji:"🥣",avail:true},
{id:2,cat:"starters",name:"نخي",en:"Nikhi",desc:"حمّص مسلوق بالكمون على طريقة الفرجان — فطور أهل البحرين.",price:0.800,img:IMG("1577805947697-89e18249d767"),emoji:"🫘",avail:true},
{id:3,cat:"starters",name:"عدس",en:"Adas",desc:"شوربة عدس ساخنة بالليمون الأسود تُقدَّم مع خبز محلي.",price:1.000,img:IMG("1547592180-85f173990554"),emoji:"🍲",avail:true},
{id:4,cat:"starters",name:"سمبوسة خضار",en:"Sambousa",desc:"سمبوسة مقرمشة محشية خضار وبهارات، ٦ حبات.",price:1.200,img:IMG("1601050690597-df0568f70950"),emoji:"🥟",avail:true},
{id:5,cat:"starters",name:"كبدة دجاج",en:"Chicken Liver",desc:"كبدة دجاج متبلة على الصاج مع خبز رقاق.",price:1.500,img:IMG("1544025162-d76694265947"),emoji:"🍢",avail:true},
{id:6,cat:"mains",name:"مجبوس دجاج",en:"Chicken Machboos",desc:"أرز بسمتي بالبهارات البحرينية مع دجاج مسحّب وداقوس.",price:2.500,img:IMG("1512058564366-18510be2db19"),emoji:"🍛",avail:true},
{id:7,cat:"mains",name:"مجبوس لحم",en:"Lamb Machboos",desc:"لحم غنم طري على أرز مبهّر بالطريقة الشعبية.",price:3.500,img:IMG("1544025162-d76694265947"),emoji:"🍖",avail:true},
{id:8,cat:"mains",name:"مجبوس ربيان",en:"Shrimp Machboos",desc:"ربيان بحريني طازج مع أرز مبهّر وليمون أسود.",price:3.200,img:IMG("1565557623262-b51c2513a641"),emoji:"🦐",avail:true},
{id:9,cat:"mains",name:"هريس",en:"Harees",desc:"هريس حبوب مع الدجاج على نار هادئة — طبق التراث.",price:1.800,img:IMG("1547592166-23ac45744acd"),emoji:"🥘",avail:true},
{id:10,cat:"mains",name:"صالونة سمك",en:"Fish Saloona",desc:"يخنة سمك هامور بمرق الطماطم والبهارات مع أرز أبيض.",price:2.800,img:IMG("1519708227418-c8fd9a32b7a2"),emoji:"🐟",avail:true},
{id:11,cat:"mains",name:"بيض طماط مع رقاق",en:"Egg & Tomato",desc:"بيض بالطماط على الطريقة الشعبية يقدَّم مع خبز رقاق حار.",price:1.200,img:IMG("1484723091739-30a097e8f929"),emoji:"🍳",avail:true},
{id:12,cat:"drinks",name:"چاي كرك",en:"Karak Tea",desc:"كرك بالحليب والهيل على الطريقة البحرينية.",price:0.300,img:IMG("1571934811356-5cc061b6821f"),emoji:"☕",avail:true},
{id:13,cat:"drinks",name:"شاي أحمر",en:"Red Tea",desc:"شاي مخدّر على الجمر بنكهة الدارسين.",price:0.200,img:IMG("1571934811356-5cc061b6821f"),emoji:"🫖",avail:true},
{id:14,cat:"drinks",name:"ليمون نعناع",en:"Lemon Mint",desc:"عصير ليمون طازج مع النعناع البارد.",price:0.800,img:IMG("1556679343-c7306c1976bc"),emoji:"🥤",avail:true},
{id:15,cat:"desserts",name:"بلاليط",en:"Balaleet",desc:"شعيرية حلوة بالزعفران والهيل مع عجّة بيض.",price:1.200,img:IMG("1484723091739-30a097e8f929"),emoji:"🍮",avail:true},
{id:16,cat:"desserts",name:"لقيمات",en:"Luqaimat",desc:"لقيمات مقرمشة مغموسة بالدبس أو العسل.",price:1.000,img:IMG("1514517220017-8ce97a34a7b6"),emoji:"🍩",avail:true},
{id:17,cat:"desserts",name:"حلوى بحرينية",en:"Halwa",desc:"حلوى شعبية بالزعفران والمكسرات من الطازج.",price:1.500,img:IMG("1488477181946-6428a0291777"),emoji:"🍯",avail:true},
{id:18,cat:"desserts",name:"خنفروش",en:"Khanfaroosh",desc:"خنفروش بحريني بالهيل والزعفران، ٤ حبات.",price:1.000,img:IMG("1488477181946-6428a0291777"),emoji:"🧁",avail:true}];
const DEFAULT_STATE={special:6,offers:[{id:16,off:30},{id:12,off:25}]};
const CATS={starters:"المقبلات",mains:"الأطباق الرئيسية",drinks:"المشروبات",desserts:"الحلويات"};
const BD=n=>n.toFixed(3);
const load=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}};
const save=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
let MENU=load("as_menu",DEFAULT_MENU),STATE=load("as_state",DEFAULT_STATE),CART=load("as_cart",{});
const find=id=>MENU.find(m=>m.id==id);
const toast=t=>{let el=document.querySelector(".toast");if(!el){el=document.createElement("div");el.className="toast";document.body.appendChild(el)}el.textContent=t;el.classList.add("show");clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove("show"),1800)};
const thumb=(m,cls)=>`<div class="${cls}"><span aria-hidden="true">${m.emoji||"🍽️"}</span>${m.img?`<img src="${m.img}" alt="${m.name}" loading="lazy" onerror="this.remove()">`:""}</div>`;

/* ---------- customer page ---------- */
function initShop(){
let cat="all";
const grid=document.querySelector("#menu-grid"),tabs=document.querySelector(".tabs");
tabs.innerHTML=`<button data-c="all" class="on">الكل</button>`+Object.entries(CATS).map(([k,v])=>`<button data-c="${k}">${v}</button>`).join("");
tabs.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;cat=b.dataset.c;tabs.querySelectorAll("button").forEach(x=>x.classList.toggle("on",x===b));renderMenu()});
function offer(id){const o=STATE.offers.find(o=>o.id==id);return o?o.off:0}
function renderMenu(){
 const items=MENU.filter(m=>m.avail&&(cat=="all"||m.cat==cat));
 grid.innerHTML=items.map(m=>{const off=offer(m.id),p=off?m.price*(1-off/100):m.price;return `<article class="dish">${thumb(m,"ph")}<div class="body"><h3>${m.name}</h3><p>${m.desc}</p><div class="row"><span class="price">${off?`<s style="color:#a99">${BD(m.price)}</s> `:""}${BD(p)} <small>د.ب</small></span><button class="add" data-add="${m.id}">أضِف للسلة +</button></div></div></article>`}).join("")||`<p class="empty">لا توجد أصناف في هذا القسم حالياً.</p>`;
}
function renderSpecials(){
 const box=document.querySelector("#spec-grid"),sp=find(STATE.special);
 const offs=STATE.offers.map(o=>({m:find(o.id),off:o.off})).filter(x=>x.m&&x.m.avail);
 box.innerHTML=(sp&&sp.avail?`<article class="spec">${sp.img?`<img src="${sp.img}" alt="" onerror="this.remove()">`:""}<div><span class="tag hot">طبق اليوم ⭐</span><h3>${sp.name}</h3><p>${sp.desc}</p><div class="price">${BD(sp.price)} د.ب <button class="btn gold" data-add="${sp.id}">اطلبه الآن</button></div></div></article>`:"")+
 offs.map(({m,off})=>`<article class="spec">${m.img?`<img src="${m.img}" alt="" onerror="this.remove()">`:""}<div><span class="tag">عرض محدود −${off}٪</span><h3>${m.name}</h3><div class="price"><s>${BD(m.price)}</s> ${BD(m.price*(1-off/100))} د.ب <button class="btn gold" data-add="${m.id}">أضِف</button></div></div></article>`).join("");
}
/* cart */
const count=()=>Object.values(CART).reduce((a,b)=>a+b,0);
const total=()=>Object.entries(CART).reduce((a,[id,q])=>{const m=find(id);if(!m)return a;const off=offer(m.id);return a+q*(off?m.price*(1-off/100):m.price)},0);
function renderCart(){
 document.querySelector(".cart-btn em").textContent=count();
 const list=document.querySelector(".cart-items");
 const rows=Object.entries(CART).map(([id,q])=>{const m=find(id);return m?`<div class="ci">${thumb(m,"thumb")}<div><b>${m.name}</b><small>${BD(m.price*(1-(offer(m.id)||0)/100))} د.ب</small></div><div class="qty"><button data-q="-1" data-id="${id}" aria-label="أنقص">−</button><span>${q}</span><button data-q="1" data-id="${id}" aria-label="زد">+</button></div></div>`:""}).join("");
 list.innerHTML=rows||`<div class="empty"><span>🛒</span>سلتك فارغة — تصفح المنيو وأضف ما يشهيك!</div>`;
 document.querySelector("#cart-total").textContent=BD(total())+" د.ب";
 document.querySelector("#checkout-btn").disabled=!count();
}
document.body.addEventListener("click",e=>{
 const add=e.target.closest("[data-add]");
 if(add){const id=add.dataset.add;CART[id]=(CART[id]||0)+1;save("as_cart",CART);renderCart();add.classList.add("ok");const t=add.textContent;add.textContent="أُضيف ✓";setTimeout(()=>{add.classList.remove("ok");add.textContent=t},900);return}
 const q=e.target.closest("[data-q]");
 if(q){const id=q.dataset.id;CART[id]=(CART[id]||0)+ +q.dataset.q;if(CART[id]<=0)delete CART[id];save("as_cart",CART);renderCart()}
});
document.querySelector(".cart-btn").addEventListener("click",()=>document.body.classList.add("cart-open"));
document.querySelectorAll("[data-close-cart]").forEach(el=>el.addEventListener("click",()=>document.body.classList.remove("cart-open")));
/* checkout */
document.querySelector("#checkout-btn").addEventListener("click",()=>{document.body.classList.remove("cart-open");document.body.classList.add("modal-open")});
document.querySelector(".modal-veil").addEventListener("click",e=>{if(e.target.classList.contains("modal-veil"))document.body.classList.remove("modal-open")});
document.querySelectorAll("input[name=mode]").forEach(r=>r.addEventListener("change",()=>{document.querySelector("#addr-wrap").style.display=document.querySelector("input[name=mode]:checked").value=="delivery"?"grid":"none"}));
document.querySelector("#order-form").addEventListener("submit",e=>{
 e.preventDefault();
 const num="AS-"+Math.floor(1000+Math.random()*9000);
 document.querySelector("#order-form").style.display="none";
 const d=document.querySelector(".done");d.style.display="block";d.querySelector(".num").textContent=num;
 CART={};save("as_cart",CART);renderCart();
});
renderSpecials();renderMenu();renderCart();
}

/* ---------- admin page ---------- */
function initAdmin(){
const tbody=document.querySelector("#rows"),specSel=document.querySelector("#spec-sel");
function stats(){
 document.querySelector("#st-total b").textContent=MENU.length;
 document.querySelector("#st-hidden b").textContent=MENU.filter(m=>!m.avail).length;
 document.querySelector("#st-offers b").textContent=STATE.offers.length;
 document.querySelector("#st-spec b").textContent=(find(STATE.special)||{}).name||"—";
}
function render(){
 tbody.innerHTML=MENU.map(m=>`<tr class="${m.avail?"":"off"}"><td>${thumb(m,"thumb")}</td><td><b>${m.name}</b><br><small>${m.en||""}</small></td><td class="hide-m"><span class="chip">${CATS[m.cat]}</span></td><td><input type="number" step="0.100" min="0" value="${m.price.toFixed(3)}" data-price="${m.id}" aria-label="سعر ${m.name}"></td><td class="keep"><button class="tgl ${m.avail?"on":""}" data-tgl="${m.id}" aria-label="إظهار/إخفاء ${m.name}" title="${m.avail?"ظاهر في المنيو":"مخفي"}"></button></td><td class="keep hide-m"><label class="mini" style="cursor:pointer">صورة 📷<input type="file" accept="image/*" data-img="${m.id}" hidden></label> <button class="mini danger" data-del="${m.id}">حذف</button></td></tr>`).join("");
 specSel.innerHTML=MENU.filter(m=>m.avail).map(m=>`<option value="${m.id}" ${m.id==STATE.special?"selected":""}>${m.name}</option>`).join("");
 stats();
}
const persist=()=>{save("as_menu",MENU);save("as_state",STATE)};
tbody.addEventListener("change",e=>{
 if(e.target.dataset.price){find(e.target.dataset.price).price=+e.target.value||0;persist();toast("تم تحديث السعر ✓")}
 if(e.target.dataset.img){const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{find(e.target.dataset.img).img=r.result;persist();render();toast("تم رفع الصورة ✓")};r.readAsDataURL(f)}
});
tbody.addEventListener("click",e=>{
 const t=e.target.closest("[data-tgl]");if(t){const m=find(t.dataset.tgl);m.avail=!m.avail;persist();render();toast(m.avail?"الصنف ظاهر الآن":"تم إخفاء الصنف")}
 const d=e.target.closest("[data-del]");if(d&&confirm("حذف هذا الصنف؟")){MENU=MENU.filter(m=>m.id!=d.dataset.del);persist();render();toast("تم حذف الصنف")}
});
specSel.addEventListener("change",()=>{STATE.special=+specSel.value;persist();stats();toast("تم تغيير طبق اليوم ⭐")});
document.querySelector("#add-form").addEventListener("submit",e=>{
 e.preventDefault();const f=e.target;
 const item={id:Date.now(),name:f.name.value,en:"",cat:f.cat.value,desc:f.desc.value,price:+f.price.value||0,img:"",emoji:"🍽️",avail:true};
 const file=f.img.files[0];
 const fin=()=>{MENU.push(item);persist();render();f.reset();toast("تمت إضافة الصنف الجديد ✓")};
 if(file){const r=new FileReader();r.onload=()=>{item.img=r.result;fin()};r.readAsDataURL(file)}else fin();
});
document.querySelector("#reset").addEventListener("click",()=>{if(confirm("إرجاع بيانات العرض التجريبي الأصلية؟")){localStorage.removeItem("as_menu");localStorage.removeItem("as_state");MENU=structuredClone(DEFAULT_MENU);STATE=structuredClone(DEFAULT_STATE);render();toast("تمت إعادة الضبط")}});
render();
}
document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#rows")?initAdmin():initShop()});
