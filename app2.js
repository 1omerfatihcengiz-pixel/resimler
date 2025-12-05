
export function klasik(a1,a2,a3,a4,a5){
    let alt = "\r\n";
    let metin = a1 + alt + a2 + alt + a3 + alt + a4 + alt + a5 + alt + "lütfen 1-5 arasından bir sayı seçiniz";
    prompt(metin);
}

export function toplama(a, b){ 
    let sonuc = a + b; 
    sonucu(sonuc);
}

export function sonucu(sonuc){
    console.log("sonuc :", sonuc);
}

export function çıkartma(a, b){ 
    let sonuc = a - b; 
    sonucu(sonuc);
}

export function çarpma(a, b){ 
    let sonuc = a * b; 
    sonucu(sonuc);
}

export function bölme(a, b){ 
    let sonuc = a / b; 
    sonucu(sonuc);
}

export function tekmiçifmi_miniversiyon_1(){
    let sayi = Number(prompt("lütfen sayı seçiniz"))
    if(sayi % 2 == 0){
        alert("çift sayı =" + sayi)
    } else {
        alert("tek sayı =" + sayi)
    }
}

export function MukemelSayi(sayi){
    let toplam = 1;
    for(let i = 2 ; i <= sayi/2 ; i++){
        if(sayi % i == 0){
            toplam += i;
        }
    }
    if(toplam == sayi){
        alert("mükemmel sayıdır :" + sayi);
    } else {
        alert("mükemmel sayı değildir");
    }
}

export function cdecimalLıBinaryYecevir(sayi){
    let binary = "";
    while (true){
        binary += (sayi % 2).toString();
        sayi = Math.floor(sayi / 2);
        if (sayi == 1){
            binary += 1;
            break;
        }
    }
    let sonuc = cevireci(binary);
    console.log("sonuç = " + sonuc);
}

export function cevireci(binary){
    let cevirecibinary = "";
    for(let i = binary.length - 1; i >= 0; i--){
        cevirecibinary += binary.charAt(i);
    }
    return cevirecibinary;
}

export function ovjeTanimlayici(isime, turr, hakindae, fiyate){
    let ovje = {isim:isime, tur:turr, hakindae:hakindae, fiyat:fiyate};
    console.log(ovje); 
    return ovje;
}

export function raskeleIDulusturucu(){
    return "id_" + Math.random().toString(36).slice(2, 11);
}   
export function raskeleIDulusturucu2(){
    return "id_" + Math.random().toString(36).slice(2, 11);
  
}   