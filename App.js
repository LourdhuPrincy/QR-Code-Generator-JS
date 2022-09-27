const input=document.getElementById('input');
const btn=document.getElementById('submit');
const img=document.getElementById('img');
btn.textContent='Click To Get QR'

btn.addEventListener('click', ()=>{
    if(input.value){
        if(btn.textContent=='Click To Get QR'){
            img.style.display='block';
            img.setAttribute('src', `https://qrickit.com/api/qr.php?d=${input.value}&fgdcolor=6A1B4D&bgdcolor=DDD101&qrsize=250`);
            btn.textContent="Loading..."
        
            img.addEventListener('load', ()=>{
            btn.textContent="Generate New QR Code"
            btn.style.backgroundColor='#02B290'
            btn.style.color='#6A1B4D';
            })
        } else if(btn.textContent=='Generate New QR Code'){
                input.value="";
                btn.textContent='Click To Get QR';
                btn.style.backgroundColor='#1b98f5'
                btn.style.color='#fff';
                img.style.display='none';
           }
     }
});
    