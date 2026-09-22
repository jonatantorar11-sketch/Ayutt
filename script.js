const $=s=>document.querySelector(s);
window.addEventListener('load',()=>setTimeout(()=>$('#loader').remove(),700));
const music=$('#music'), start=$('#start'), story=$('#story'), musicBtn=$('#musicBtn');
start.onclick=()=>{story.classList.remove('hidden');music.play().catch(()=>{});start.textContent='Cerita Dibuka ❤️';document.body.style.cursor='default';setTimeout(()=>document.querySelectorAll('.reveal').forEach(x=>x.classList.add('show')),150);};
musicBtn.onclick=()=>{if(music.paused){music.play();musicBtn.textContent='♫'}else{music.pause();musicBtn.textContent='Ⅱ'}};
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(x=>observer.observe(x));

/* Ganti tanggal ini dengan tanggal mulai hubungan */
const startDate=new Date('2024-01-01T00:00:00');
function counter(){let now=new Date(), diff=now-startDate;let sec=Math.max(0,Math.floor(diff/1000));let s=sec%60;let m=Math.floor(sec/60)%60;let h=Math.floor(sec/3600)%24;let totalDays=Math.floor(sec/86400);let y=Math.floor(totalDays/365.2425);let mo=Math.floor((totalDays-y*365.2425)/30.44);let d=Math.floor(totalDays-y*365.2425-mo*30.44);[['years',y],['months',mo],['days',d],['hours',h],['minutes',m],['seconds',s]].forEach(a=>$('#'+a[0]).textContent=a[1])}setInterval(counter,1000);counter();

const letter=`Selamat ulang tahun, Ditaa. ❤️\n\nSemoga semua hal baik selalu menemukan jalan menuju kamu. Terima kasih sudah hadir, menemani, dan membuat begitu banyak hari terasa lebih indah. Aku tidak tahu apa yang akan terjadi di masa depan, tapi aku tahu satu hal: aku ingin terus membuat lebih banyak kenangan indah bersamamu.\n\nHari ini adalah tentang kamu. Tersenyumlah sebanyak-banyaknya, karena kamu pantas mendapatkan semua kebahagiaan itu. 🌹`;
let typed=false;$('#letterBtn').onclick=()=>{if(typed)return;typed=true;let i=0;const out=$('#letterText');const t=setInterval(()=>{out.innerHTML=letter.slice(0,i++).replace(/\n/g,'<br>');if(i>letter.length)clearInterval(t)},22)};

$('#blow').onclick=()=>{$('#flame').style.display='none';$('#wish').textContent='Semoga semua harapan baikmu menjadi nyata. ❤️✨';burst(35)};
function burst(n){for(let i=0;i<n;i++)setTimeout(()=>{let h=document.createElement('span');h.className='heart';h.textContent=['♥','❤','♡'][Math.floor(Math.random()*3)];h.style.left=Math.random()*100+'vw';h.style.top=(55+Math.random()*35)+'vh';h.style.fontSize=(12+Math.random()*22)+'px';$('#heartLayer').appendChild(h);setTimeout(()=>h.remove(),1700)},i*25)}
document.addEventListener('click',e=>{if(e.target.closest('button,.modal-card'))return;let h=document.createElement('span');h.className='heart';h.textContent='♥';h.style.left=e.clientX+'px';h.style.top=e.clientY+'px';$('#heartLayer').appendChild(h);setTimeout(()=>h.remove(),1700)});

$('#secretBtn').onclick=()=>$('#modal').classList.add('open');$('#close').onclick=()=>$('#modal').classList.remove('open');
$('#unlock').onclick=()=>{if($('#code').value==='143'){$('#secret').classList.add('show');$('#error').textContent='';burst(30)}else $('#error').textContent='Kode belum tepat ❤️'};
