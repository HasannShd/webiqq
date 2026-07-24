/* Abu Shehab concept demo — front-end only. Menu, admin edits & language persist in localStorage. */
const IMG=id=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;
const DEFAULT_MENU=[
{id:1,cat:"starters",name:"باجلا",en:"Bajilla",desc:"فول مطبوخ على الطريقة البحرينية مع الليمون والبهارات الشعبية.",dsc:"Slow-cooked fava beans the Bahraini way, with lemon and local spices.",price:0.800,img:IMG("1547592166-23ac45744acd"),emoji:"🥣",avail:true},
{id:2,cat:"starters",name:"نخي",en:"Nikhi",desc:"حمّص مسلوق بالكمون على طريقة الفرجان — فطور أهل البحرين.",dsc:"Cumin-boiled chickpeas, freej style — Bahrain's classic breakfast.",price:0.800,img:IMG("1577805947697-89e18249d767"),emoji:"🫘",avail:true},
{id:3,cat:"starters",name:"عدس",en:"Adas Soup",desc:"شوربة عدس ساخنة بالليمون الأسود تُقدَّم مع خبز محلي.",dsc:"Hot lentil soup with black lime, served with local bread.",price:1.000,img:IMG("1547592180-85f173990554"),emoji:"🍲",avail:true},
{id:4,cat:"starters",name:"سمبوسة خضار",en:"Veg Sambousa",desc:"سمبوسة مقرمشة محشية خضار وبهارات، ٦ حبات.",dsc:"Crispy sambousa stuffed with spiced vegetables — 6 pieces.",price:1.200,img:IMG("1601050690597-df0568f70950"),emoji:"🥟",avail:true},
{id:5,cat:"starters",name:"كبدة دجاج",en:"Chicken Liver",desc:"كبدة دجاج متبلة على الصاج مع خبز رقاق.",dsc:"Marinated chicken liver on the saj, with reqaq bread.",price:1.500,img:IMG("1544025162-d76694265947"),emoji:"🍢",avail:true},
{id:6,cat:"mains",name:"مجبوس دجاج",en:"Chicken Machboos",desc:"أرز بسمتي بالبهارات البحرينية مع دجاج مسحّب وداقوس.",dsc:"Basmati rice in Bahraini spices with pulled chicken and daqoos.",price:2.500,img:IMG("1512058564366-18510be2db19"),emoji:"🍛",avail:true},
{id:7,cat:"mains",name:"مجبوس لحم",en:"Lamb Machboos",desc:"لحم غنم طري على أرز مبهّر بالطريقة الشعبية.",dsc:"Tender lamb over spiced rice, the traditional way.",price:3.500,img:IMG("1544025162-d76694265947"),emoji:"🍖",avail:true},
{id:8,cat:"mains",name:"مجبوس ربيان",en:"Shrimp Machboos",desc:"ربيان بحريني طازج مع أرز مبهّر وليمون أسود.",dsc:"Fresh Bahraini shrimp with spiced rice and black lime.",price:3.200,img:IMG("1565557623262-b51c2513a641"),emoji:"🦐",avail:true},
{id:9,cat:"mains",name:"هريس",en:"Harees",desc:"هريس حبوب مع الدجاج على نار هادئة — طبق التراث.",dsc:"Wheat and chicken slow-stirred over low fire — a heritage dish.",price:1.800,img:IMG("1547592166-23ac45744acd"),emoji:"🥘",avail:true},
{id:10,cat:"mains",name:"صالونة سمك",en:"Fish Saloona",desc:"يخنة سمك هامور بمرق الطماطم والبهارات مع أرز أبيض.",dsc:"Hammour stew in spiced tomato broth, served with white rice.",price:2.800,img:IMG("1519708227418-c8fd9a32b7a2"),emoji:"🐟",avail:true},
{id:11,cat:"mains",name:"بيض طماط مع رقاق",en:"Egg & Tomato",desc:"بيض بالطماط على الطريقة الشعبية يقدَّم مع خبز رقاق حار.",dsc:"Eggs and tomato done the popular way, with hot reqaq bread.",price:1.200,img:IMG("1484723091739-30a097e8f929"),emoji:"🍳",avail:true},
{id:12,cat:"drinks",name:"چاي كرك",en:"Karak Tea",desc:"كرك بالحليب والهيل على الطريقة البحرينية.",dsc:"Milky cardamom karak, brewed the Bahraini way.",price:0.300,img:IMG("1571934811356-5cc061b6821f"),emoji:"☕",avail:true},
{id:13,cat:"drinks",name:"شاي أحمر",en:"Red Tea",desc:"شاي مخدّر على الجمر بنكهة الدارسين.",dsc:"Slow-steeped red tea with a hint of cinnamon.",price:0.200,img:IMG("1571934811356-5cc061b6821f"),emoji:"🫖",avail:true},
{id:14,cat:"drinks",name:"ليمون نعناع",en:"Lemon Mint",desc:"عصير ليمون طازج مع النعناع البارد.",dsc:"Fresh lemon juice blended with cool mint.",price:0.800,img:IMG("1556679343-c7306c1976bc"),emoji:"🥤",avail:true},
{id:15,cat:"desserts",name:"بلاليط",en:"Balaleet",desc:"شعيرية حلوة بالزعفران والهيل مع عجّة بيض.",dsc:"Sweet saffron-cardamom vermicelli topped with an omelette.",price:1.200,img:IMG("1484723091739-30a097e8f929"),emoji:"🍮",avail:true},
{id:16,cat:"desserts",name:"لقيمات",en:"Luqaimat",desc:"لقيمات مقرمشة مغموسة بالدبس أو العسل.",dsc:"Crisp golden dumplings dipped in date syrup or honey.",price:1.000,img:IMG("1514517220017-8ce97a34a7b6"),emoji:"🍩",avail:true},
{id:17,cat:"desserts",name:"حلوى بحرينية",en:"Bahraini Halwa",desc:"حلوى شعبية بالزعفران والمكسرات من الطازج.",dsc:"Traditional saffron halwa with nuts, made fresh.",price:1.500,img:IMG("1488477181946-6428a0291777"),emoji:"🍯",avail:true},
{id:18,cat:"desserts",name:"خنفروش",en:"Khanfaroosh",desc:"خنفروش بحريني بالهيل والزعفران، ٤ حبات.",dsc:"Bahraini saffron-cardamom fried cakes — 4 pieces.",price:1.000,img:IMG("1488477181946-6428a0291777"),emoji:"🧁",avail:true}];
const DEFAULT_STATE={special:6,offers:[{id:16,off:30},{id:12,off:25}]};

/* ---------- i18n ---------- */
const T={
ar:{cats:{starters:"المقبلات",mains:"الأطباق الرئيسية",drinks:"المشروبات",desserts:"الحلويات"},all:"الكل",add:"أضِف للسلة +",added:"أُضيف ✓",bd:"د.ب",today:"طبق اليوم ⭐",offer:off=>`عرض محدود −${off}٪`,orderNow:"اطلبه الآن",addS:"أضِف",emptyCat:"لا توجد أصناف في هذا القسم حالياً.",emptyCart:"سلتك فارغة — تصفح المنيو وأضف ما يشهيك!",
 tAdmin:"لوحة التحكم",tCart:"السلة 🛒",badge:"🇧🇭 نكهة البيت البحريني الأصيلة",heroP:"أكلات شعبية بأيدٍ بحرينية — من الباجلا والنخي إلى المجبوس والهريس. اطلب أونلاين ويوصلك حار وطازج.",viewMenu:"شاهد المنيو 🍽️",orderBtn:"اطلب الآن",ticker:"🚗 التوصيل خلال ٣٥ دقيقة داخل توبلي وما حولها · الحد الأدنى للطلب ١٫٥ د.ب · ☎️ ٣٨١٦٠٠٠٦",
 specEye:"لا تفوّتك",specH:"طبق اليوم والعروض",menuEye:"المنيو الرقمي",menuH:"وش تشتهي اليوم؟",whyH:"ليش أبو شهاب؟",whyP:"مطعم عائلي في قلب توبلي، نطبخ الأكل الشعبي البحريني مثل ما تعوّدت عليه من بيت أمك — بأيدٍ بحرينية ومكونات طازجة كل يوم.",why1:"وصفات بحرينية أصيلة من التراث",why2:"طبخ يومي طازج — ما نخزّن",why3:"أسعار شعبية تناسب الجميع",why4:"توصيل سريع أو استلام من المطعم",
 footInfo:"توبلي، مملكة البحرين · ☎️ ٣٨١٦٠٠٠٦ · يومياً ٦ صباحاً – ١٠ مساءً",footDemo:'عرض تجريبي (Concept Demo) من تصميم <a href="https://webiqq.com">WebiQQ</a> — الطلبات هنا غير حقيقية.',
 cartT:"سلتك 🛒",total:"الإجمالي",checkout:"إتمام الطلب ←",coT:"إتمام الطلب",fName:"الاسم",fPhone:"رقم الهاتف",fDelivery:"🚗 توصيل",fPickup:"🏪 استلام",fAddr:"العنوان",fAddrPh:"المنطقة، الشارع، المنزل",fPay:"طريقة الدفع",fCash:"💵 كاش",fBenefit:"🟥 بنفت",fCard:"💳 بطاقة",fConfirm:"أكّد الطلب ✓",doneH:"تم استلام طلبك!",doneP:"هذا عرض تجريبي — في الموقع الفعلي يصل الطلب للمطعم فوراً برسالة واتساب أو على شاشة المطبخ.",back:"رجوع للمنيو",dec:"أنقص",inc:"زد",skip:"تخطَّ إلى المنيو",
 aTitle:"لوحة تحكم أبو شهاب",aSpecial:"طبق اليوم ⭐",aReset:"إعادة ضبط العرض",aView:"عرض الموقع ↗",aStTotal:"إجمالي الأصناف",aStHidden:"أصناف مخفية",aStOffers:"عروض فعّالة",aStSpec:"طبق اليوم",
 aNote:'💡 هذه لوحة تجريبية تعمل بالكامل: عدّل سعراً أو أخفِ صنفاً أو غيّر طبق اليوم ثم افتح <a href="index.html"><b>الموقع</b></a> — ستجد التغيير ظهر فوراً. في النسخة الفعلية تكون اللوحة محمية بكلمة مرور ومتصلة بقاعدة بيانات.',
 aAddH:"إضافة صنف جديد",aName:"اسم الصنف",aCat:"القسم",aPrice:"السعر (د.ب)",aDesc:"الوصف",aImg:"الصورة",aAddBtn:"+ أضف الصنف",aManageH:"إدارة المنيو",thItem:"الصنف",thCat:"القسم",thPrice:"السعر (د.ب)",thVis:"ظاهر؟",aPhoto:"صورة 📷",aDel:"حذف",aFoot:'عرض تجريبي من تصميم <a href="https://webiqq.com">WebiQQ</a> — البيانات تُحفظ محلياً في متصفحك فقط.',
 tPrice:"تم تحديث السعر ✓",tImg:"تم رفع الصورة ✓",tShow:"الصنف ظاهر الآن",tHide:"تم إخفاء الصنف",tDel:"تم حذف الصنف",tSpec:"تم تغيير طبق اليوم ⭐",tAdd:"تمت إضافة الصنف الجديد ✓",tReset:"تمت إعادة الضبط",cDel:"حذف هذا الصنف؟",cReset:"إرجاع بيانات العرض التجريبي الأصلية؟",priceOf:"سعر",visOf:"إظهار/إخفاء"},
en:{cats:{starters:"Starters",mains:"Main Courses",drinks:"Drinks",desserts:"Desserts"},all:"All",add:"Add to cart +",added:"Added ✓",bd:"BD",today:"Today's Special ⭐",offer:off=>`Limited offer −${off}%`,orderNow:"Order it now",addS:"Add",emptyCat:"No items in this category right now.",emptyCart:"Your cart is empty — browse the menu and add something tasty!",
 tAdmin:"Admin",tCart:"Cart 🛒",badge:"🇧🇭 Authentic Bahraini home flavour",heroP:"Traditional dishes made by Bahraini hands — from bajilla and nikhi to machboos and harees. Order online, delivered hot and fresh.",viewMenu:"View Menu 🍽️",orderBtn:"Order Now",ticker:"🚗 Delivery in 35 min around Tubli · Minimum order BD 1.5 · ☎️ 3816 0006",
 specEye:"Don't miss out",specH:"Today's Special & Offers",menuEye:"Digital menu",menuH:"What are you craving today?",whyH:"Why Abu Shehab?",whyP:"A family restaurant in the heart of Tubli, cooking traditional Bahraini food just like your mother's kitchen — Bahraini hands and fresh ingredients, every single day.",why1:"Authentic Bahraini heritage recipes",why2:"Cooked fresh daily — nothing stored",why3:"Honest prices for everyone",why4:"Fast delivery or pickup",
 footInfo:"Tubli, Kingdom of Bahrain · ☎️ 3816 0006 · Daily 6 AM – 10 PM",footDemo:'Concept demo designed by <a href="https://webiqq.com">WebiQQ</a> — orders here are not real.',
 cartT:"Your Cart 🛒",total:"Total",checkout:"Checkout →",coT:"Checkout",fName:"Full name",fPhone:"Phone number",fDelivery:"🚗 Delivery",fPickup:"🏪 Pickup",fAddr:"Address",fAddrPh:"Area, road, house",fPay:"Payment method",fCash:"💵 Cash",fBenefit:"🟥 Benefit",fCard:"💳 Card",fConfirm:"Place Order ✓",doneH:"Order received!",doneP:"This is a concept demo — on the live site the order reaches the restaurant instantly via WhatsApp or a kitchen screen.",back:"Back to menu",dec:"Decrease",inc:"Increase",skip:"Skip to menu",
 aTitle:"Abu Shehab Dashboard",aSpecial:"Today's special ⭐",aReset:"Reset demo",aView:"View site ↗",aStTotal:"Total items",aStHidden:"Hidden items",aStOffers:"Active offers",aStSpec:"Today's special",
 aNote:'💡 This demo dashboard fully works: change a price, hide a dish or switch today\'s special, then open the <a href="index.html"><b>site</b></a> — the change shows instantly. The real version is password-protected and connected to a database.',
 aAddH:"Add a new dish",aName:"Dish name",aCat:"Category",aPrice:"Price (BD)",aDesc:"Description",aImg:"Image",aAddBtn:"+ Add dish",aManageH:"Manage menu",thItem:"Dish",thCat:"Category",thPrice:"Price (BD)",thVis:"Visible?",aPhoto:"Photo 📷",aDel:"Delete",aFoot:'Concept demo by <a href="https://webiqq.com">WebiQQ</a> — data is stored locally in your browser only.',
 tPrice:"Price updated ✓",tImg:"Image uploaded ✓",tShow:"Item is now visible",tHide:"Item hidden",tDel:"Item deleted",tSpec:"Today's special changed ⭐",tAdd:"New dish added ✓",tReset:"Demo reset",cDel:"Delete this dish?",cReset:"Restore the original demo data?",priceOf:"Price of",visOf:"Show/hide"}};
let LANG=localStorage.getItem("as_lang")||"ar";
const t=k=>T[LANG][k];
const load=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}};
const save=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
let MENU=load("as_menu",DEFAULT_MENU),STATE=load("as_state",DEFAULT_STATE),CART=load("as_cart",{});
const find=id=>MENU.find(m=>m.id==id);
const BD=n=>n.toFixed(3);
const nameOf=m=>LANG=="en"?(m.en||m.name):m.name;
const subOf=m=>LANG=="en"?m.name:(m.en||"");
const descOf=m=>LANG=="en"?(m.dsc||m.desc):m.desc;
const toast=x=>{let el=document.querySelector(".toast");if(!el){el=document.createElement("div");el.className="toast";document.body.appendChild(el)}el.textContent=x;el.classList.add("show");clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove("show"),1800)};
const thumb=(m,cls)=>`<div class="${cls}"><span aria-hidden="true">${m.emoji||"🍽️"}</span>${m.img?`<img src="${m.img}" alt="${nameOf(m)}" loading="lazy" onerror="this.remove()">`:""}</div>`;
function applyStatic(){
 document.documentElement.lang=LANG;document.documentElement.dir=LANG=="ar"?"rtl":"ltr";
 document.querySelectorAll("[data-i]").forEach(el=>{const v=el.dataset.i.split(".").reduce((a,k)=>a?.[k],T[LANG]);if(v!=null)el.innerHTML=v});
 document.querySelectorAll("[data-iph]").forEach(el=>el.placeholder=t(el.dataset.iph)||"");
 const lb=document.querySelector(".lang-btn");if(lb)lb.textContent=LANG=="ar"?"EN · English":"ع · العربية";
}
function bindLang(rerender){
 document.querySelector(".lang-btn")?.addEventListener("click",()=>{LANG=LANG=="ar"?"en":"ar";localStorage.setItem("as_lang",LANG);applyStatic();rerender()});
}

/* ---------- customer page ---------- */
function initShop(){
let cat="all";
const grid=document.querySelector("#menu-grid"),tabs=document.querySelector(".tabs");
const offer=id=>{const o=STATE.offers.find(o=>o.id==id);return o?o.off:0};
function renderTabs(){tabs.innerHTML=`<button data-c="all" class="${cat=="all"?"on":""}">${t("all")}</button>`+Object.keys(t("cats")).map(k=>`<button data-c="${k}" class="${cat==k?"on":""}">${t("cats")[k]}</button>`).join("")}
tabs.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;cat=b.dataset.c;renderTabs();renderMenu()});
function renderMenu(){
 const items=MENU.filter(m=>m.avail&&(cat=="all"||m.cat==cat));
 grid.innerHTML=items.map((m,i)=>{const off=offer(m.id),p=off?m.price*(1-off/100):m.price;return `<article class="dish" style="animation-delay:${Math.min(i*45,320)}ms">${thumb(m,"ph")}<div class="body"><h3>${nameOf(m)}${subOf(m)?` <small class="sub">${subOf(m)}</small>`:""}</h3><p>${descOf(m)}</p><div class="row"><span class="price">${off?`<s>${BD(m.price)}</s> `:""}${BD(p)} <small>${t("bd")}</small></span><button class="add" data-add="${m.id}">${t("add")}</button></div></div></article>`}).join("")||`<p class="empty">${t("emptyCat")}</p>`;
}
function renderSpecials(){
 const box=document.querySelector("#spec-grid"),sp=find(STATE.special);
 const offs=STATE.offers.map(o=>({m:find(o.id),off:o.off})).filter(x=>x.m&&x.m.avail);
 box.innerHTML=(sp&&sp.avail?`<article class="spec">${sp.img?`<img src="${sp.img}" alt="" onerror="this.remove()">`:""}<div><span class="tag hot">${t("today")}</span><h3>${nameOf(sp)}</h3><p>${descOf(sp)}</p><div class="price">${BD(sp.price)} ${t("bd")} <button class="btn gold" data-add="${sp.id}">${t("orderNow")}</button></div></div></article>`:"")+
 offs.map(({m,off})=>`<article class="spec">${m.img?`<img src="${m.img}" alt="" onerror="this.remove()">`:""}<div><span class="tag">${t("offer")(off)}</span><h3>${nameOf(m)}</h3><div class="price"><s>${BD(m.price)}</s> ${BD(m.price*(1-off/100))} ${t("bd")} <button class="btn gold" data-add="${m.id}">${t("addS")}</button></div></div></article>`).join("");
}
const count=()=>Object.values(CART).reduce((a,b)=>a+b,0);
const total=()=>Object.entries(CART).reduce((a,[id,q])=>{const m=find(id);if(!m)return a;const off=offer(m.id);return a+q*(off?m.price*(1-off/100):m.price)},0);
function renderCart(){
 document.querySelector(".cart-btn em").textContent=count();
 const list=document.querySelector(".cart-items");
 list.innerHTML=Object.entries(CART).map(([id,q])=>{const m=find(id);return m?`<div class="ci">${thumb(m,"thumb")}<div><b>${nameOf(m)}</b><small>${BD(m.price*(1-(offer(m.id)||0)/100))} ${t("bd")}</small></div><div class="qty"><button data-q="-1" data-id="${id}" aria-label="${t("dec")}">−</button><span>${q}</span><button data-q="1" data-id="${id}" aria-label="${t("inc")}">+</button></div></div>`:""}).join("")||`<div class="empty"><span>🛒</span>${t("emptyCart")}</div>`;
 document.querySelector("#cart-total").textContent=BD(total())+" "+t("bd");
 document.querySelector("#checkout-btn").disabled=!count();
}
document.body.addEventListener("click",e=>{
 const add=e.target.closest("[data-add]");
 if(add){const id=add.dataset.add;CART[id]=(CART[id]||0)+1;save("as_cart",CART);renderCart();add.classList.add("ok");const x=add.textContent;add.textContent=t("added");setTimeout(()=>{add.classList.remove("ok");add.textContent=x},900);return}
 const q=e.target.closest("[data-q]");
 if(q){const id=q.dataset.id;CART[id]=(CART[id]||0)+ +q.dataset.q;if(CART[id]<=0)delete CART[id];save("as_cart",CART);renderCart()}
});
document.querySelector(".cart-btn").addEventListener("click",()=>document.body.classList.add("cart-open"));
document.querySelectorAll("[data-close-cart]").forEach(el=>el.addEventListener("click",()=>document.body.classList.remove("cart-open")));
document.querySelector("#checkout-btn").addEventListener("click",()=>{document.body.classList.remove("cart-open");document.body.classList.add("modal-open")});
document.querySelector(".modal-veil").addEventListener("click",e=>{if(e.target.classList.contains("modal-veil"))document.body.classList.remove("modal-open")});
document.querySelectorAll("input[name=mode]").forEach(r=>r.addEventListener("change",()=>{document.querySelector("#addr-wrap").style.display=document.querySelector("input[name=mode]:checked").value=="delivery"?"grid":"none"}));
document.querySelector("#order-form").addEventListener("submit",e=>{
 e.preventDefault();
 document.querySelector("#order-form").style.display="none";
 const d=document.querySelector(".done");d.style.display="block";d.querySelector(".num").textContent="AS-"+Math.floor(1000+Math.random()*9000);
 CART={};save("as_cart",CART);renderCart();
});
const rerender=()=>{renderTabs();renderMenu();renderSpecials();renderCart()};
applyStatic();bindLang(rerender);rerender();
}

/* ---------- admin page ---------- */
function initAdmin(){
const tbody=document.querySelector("#rows"),specSel=document.querySelector("#spec-sel");
function stats(){
 document.querySelector("#st-total b").textContent=MENU.length;
 document.querySelector("#st-hidden b").textContent=MENU.filter(m=>!m.avail).length;
 document.querySelector("#st-offers b").textContent=STATE.offers.length;
 document.querySelector("#st-spec b").textContent=(x=>x?nameOf(x):"—")(find(STATE.special));
}
function render(){
 tbody.innerHTML=MENU.map(m=>`<tr class="${m.avail?"":"off"}"><td>${thumb(m,"thumb")}</td><td><b>${nameOf(m)}</b><br><small>${subOf(m)}</small></td><td class="hide-m"><span class="chip">${t("cats")[m.cat]||m.cat}</span></td><td><input type="number" step="0.100" min="0" value="${m.price.toFixed(3)}" data-price="${m.id}" aria-label="${t("priceOf")} ${nameOf(m)}"></td><td class="keep"><button class="tgl ${m.avail?"on":""}" data-tgl="${m.id}" aria-label="${t("visOf")} ${nameOf(m)}"></button></td><td class="keep hide-m"><label class="mini" style="cursor:pointer">${t("aPhoto")}<input type="file" accept="image/*" data-img="${m.id}" hidden></label> <button class="mini danger" data-del="${m.id}">${t("aDel")}</button></td></tr>`).join("");
 specSel.innerHTML=MENU.filter(m=>m.avail).map(m=>`<option value="${m.id}" ${m.id==STATE.special?"selected":""}>${nameOf(m)}</option>`).join("");
 stats();
}
const persist=()=>{save("as_menu",MENU);save("as_state",STATE)};
tbody.addEventListener("change",e=>{
 if(e.target.dataset.price){find(e.target.dataset.price).price=+e.target.value||0;persist();toast(t("tPrice"))}
 if(e.target.dataset.img){const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{find(e.target.dataset.img).img=r.result;persist();render();toast(t("tImg"))};r.readAsDataURL(f)}
});
tbody.addEventListener("click",e=>{
 const g=e.target.closest("[data-tgl]");if(g){const m=find(g.dataset.tgl);m.avail=!m.avail;persist();render();toast(m.avail?t("tShow"):t("tHide"))}
 const d=e.target.closest("[data-del]");if(d&&confirm(t("cDel"))){MENU=MENU.filter(m=>m.id!=d.dataset.del);persist();render();toast(t("tDel"))}
});
specSel.addEventListener("change",()=>{STATE.special=+specSel.value;persist();stats();toast(t("tSpec"))});
document.querySelector("#add-form").addEventListener("submit",e=>{
 e.preventDefault();const f=e.target;
 const item={id:Date.now(),name:f.name.value,en:f.name.value,cat:f.cat.value,desc:f.desc.value,dsc:f.desc.value,price:+f.price.value||0,img:"",emoji:"🍽️",avail:true};
 const file=f.img.files[0];
 const fin=()=>{MENU.push(item);persist();render();f.reset();toast(t("tAdd"))};
 if(file){const r=new FileReader();r.onload=()=>{item.img=r.result;fin()};r.readAsDataURL(file)}else fin();
});
document.querySelector("#reset").addEventListener("click",()=>{if(confirm(t("cReset"))){localStorage.removeItem("as_menu");localStorage.removeItem("as_state");MENU=structuredClone(DEFAULT_MENU);STATE=structuredClone(DEFAULT_STATE);render();toast(t("tReset"))}});
applyStatic();bindLang(render);render();
}
document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#rows")?initAdmin():initShop()});
