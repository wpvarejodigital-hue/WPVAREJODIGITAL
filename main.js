const menu=document.getElementById("menu");
const nav=document.querySelector("nav");
if(menu) menu.addEventListener("click",()=>{nav.classList.toggle("open");nav.style.display=nav.classList.contains("open")?"flex":"none";nav.style.flexDirection="column";nav.style.position="absolute";nav.style.top="65px";nav.style.left="0";nav.style.right="0";nav.style.background="#fff";nav.style.padding="18px";nav.style.borderBottom="1px solid #e1eaf5"});
const form=document.getElementById("form");
const input=document.getElementById("input");
const msgs=document.getElementById("msgs");
if(form) form.addEventListener("submit",e=>{
 e.preventDefault();
 const text=input.value.trim();
 if(!text)return;
 const u=document.createElement("div");u.className="user";u.textContent=text;msgs.appendChild(u);input.value="";
 setTimeout(()=>{
   const b=document.createElement("div");b.className="bot";
   b.textContent="Entendi. Vamos lapidar esse desafio. Quais dados, pessoas, processos ou sistemas hoje participam dessa operação? A partir disso podemos levantar indicadores e possíveis automações.";
   msgs.appendChild(b);msgs.parentElement.scrollTop=msgs.parentElement.scrollHeight;
 },500);
});