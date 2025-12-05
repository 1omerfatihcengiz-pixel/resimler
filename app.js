import * as app2 from "./app2.js";
const input2 = document.getElementById("inputicin2")
const input = document.getElementById("inputicin");
const buton = document.getElementById("kadetmebutonu");
const kayıttutucu = document.getElementById("kayıttutucu");
const temizleyicibuton = document.getElementById("temileyicibuton");



buton.addEventListener("click", () => {
    let yazi = input.value.trim();
    if (!yazi) return;

    const idi = app2.raskeleIDulusturucu2();
    const div = document.createElement("div");
    div.id = idi;
    const kutu = document.createElement("div")
kutu.id = idi + "_tik"
kutu.classList.add("tik-kutu")
div.classList.remove("tiklı")
let sate = 0;
kutu.addEventListener("click",()=>{
    sate = (sate + 1)%3

kutu.classList.remove("tik","zaman");
kutu.classList.remove("tikli")
if(sate==1){
    kutu.classList.add("tik");
    div.classList.add("tikli")
}if(sate==2){
kutu.classList.add("zaman");
div.classList.remove("tikli")
}else{ kutu.classList.toggle("secili")}
})

    const span = document.createElement("span");
    span.textContent = yazi;
    const tarih = new Date();
    const formahtarih = tarih.getDate().toString().padStart(2, '0') + "." +
    (tarih.getMonth()+ 1).toString().padStart(2, '0') + "." +
    tarih.getFullYear();
    const tarihEtiketi = document.createElement("small");
tarihEtiketi.style.color = "#000000ff";
tarihEtiketi.style.marginLeft = "5px";
tarihEtiketi.textContent = formahtarih;

div.appendChild(kutu)
    div.appendChild(span);
    div.appendChild(tarihEtiketi)
    const silamebutonu3 = document.createElement("button");
silamebutonu3.textContent="x";
silamebutonu3.id =idi +"_sil"
silamebutonu3.addEventListener("click", () => div.remove());
   div.appendChild(silamebutonu3)
    kayıttutucu.appendChild(div);

    input.value = "";
});




temizleyicibuton.addEventListener("click", () => {
    input.value = "";
    input2.value = "";
    kayıttutucu.innerHTML = "";
});
input2.addEventListener("input",()=>{
  const  arama = input2.value.toLowerCase();
  const kayit = kayıttutucu.querySelectorAll("div")
  
  kayit.forEach(kayit => {
        const yazi = kayit.querySelector("span").textContent.toLowerCase();

        if(yazi.includes(arama)){
             kayit.style.display= "flex" ;
        }else{
            kayit.style.display= "none";

        }
})})
