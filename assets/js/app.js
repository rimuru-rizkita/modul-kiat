(function(){
const ICONS={
buku:'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
dengarkan:'<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
isyarat:'<path d="M18 11V6a2 2 0 0 0-4 0v5"/><path d="M14 10V4a2 2 0 0 0-4 0v6"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>',
easyread:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
aksesibilitas:'<circle cx="12" cy="4" r="2"/><path d="M5 8h14"/><path d="M12 8v6"/><path d="m8 21 4-7 4 7"/>',
bantuan:'<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
kanan:'<path d="m9 18 6-6-6-6"/>', kiri:'<path d="m15 18-6-6 6-6"/>',
putar:'<polygon points="7 4 20 12 7 20 7 4" fill="currentColor"/>',
jeda:'<rect x="6" y="4" width="4" height="16" fill="currentColor"/><rect x="14" y="4" width="4" height="16" fill="currentColor"/>',
hukum:'<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
lensa:'<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
mik:'<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>',
video:'<path d="m16 13 5.2 3.5a.5.5 0 0 0 .8-.4V7.9a.5.5 0 0 0-.75-.43L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
ketik:'<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/>',
centang:'<path d="M20 6 9 17l-5-5"/>',
tujuan:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
cc:'<rect width="18" height="14" x="3" y="5" rx="2"/><path d="M7 15h4M15 15h2M7 11h2M13 11h4"/>',
transkrip:'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/>',
suara:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
orang:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
lindung:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
kontras:'<circle cx="12" cy="12" r="10"/><path d="M12 18a6 6 0 0 0 0-12v12z" fill="currentColor"/>',
fokus:'<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
tutup:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
waktu:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
aksi:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
huruf:'<path d="m3 17 5-12 5 12"/><path d="M5 13h6"/><path d="M15 17V11"/><path d="M15 11a3 3 0 1 1 6 0v6"/>',
kampus:'<path d="m4 6 8-4 8 4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M14 22v-4a2 2 0 0 0-4 0v4"/><path d="M18 5v17"/><path d="M6 5v17"/>',
};
ICONS.kalender='<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>';
ICONS.kunci='<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>';
ICONS.pengumuman='<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>';
ICONS.bawah='<path d="m6 9 6 6 6-6"/>';
ICONS.jurnal='<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>';
ICONS.home='<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>';
ICONS.peringatan='<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>';
ICONS.asesmen='<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>';
ICONS.atas='<path d="m18 15-6-6-6 6"/>';
ICONS.jeda='<rect x="6" y="4" width="4" height="16" fill="currentColor"/><rect x="14" y="4" width="4" height="16" fill="currentColor"/>';
const svg=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICONS[n]||''}</svg>`;
const paint=(r=document)=>r.querySelectorAll('i[data-ic]').forEach(i=>{ i.innerHTML=svg(i.dataset.ic); i.setAttribute('aria-hidden','true'); });
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const root=document.documentElement;
const store={ get(k,d){ try{ const v=localStorage.getItem(k); return v===null?d:JSON.parse(v);}catch(e){return d;} }, set(k,v){ try{ localStorage.setItem(k,JSON.stringify(v)); }catch(e){} } };
const calm=()=>root.dataset.motion==='off'?'auto':'smooth';
/* ---- Pop-up ---- */
let mLast=null;
function popup(o){
  const m=$('#modal'); mLast=document.activeElement;
  m.dataset.tone=o.tone||'info'; $('#mIcon').innerHTML=`<i class="ic" data-ic="${o.icon||'centang'}"></i>`;
  $('#mTitle').textContent=o.title; $('#mBody').innerHTML=o.html||'';
  const acts=o.actions||[{label:'Mengerti',primary:true}];
  $('#mActions').innerHTML=acts.map((a,i)=>`<button class="btn ${a.primary?'btn-primary':'btn-outline'}" data-ma="${i}">${a.icon?`<i class="ic" data-ic="${a.icon}"></i>`:''}${a.label}</button>`).join('');
  $$('#mActions [data-ma]').forEach(b=>b.addEventListener('click',()=>{ const a=acts[+b.dataset.ma]; const keep=a.onClick&&a.onClick()===false; if(!keep) closePopup(); }));
  paint(m); $('#scrim').hidden=false; m.hidden=false; (m.querySelector('[data-ma]')).focus();
}
function closePopup(){ const m=$('#modal'); if(m.hidden) return; m.hidden=true; if(hasTTS) speechSynthesis.cancel(); if($$('.drawer').every(d=>d.hidden)) $('#scrim').hidden=true; if(mLast&&document.contains(mLast)) mLast.focus(); }
let tT; function toast(m){ const t=$('#toast'); t.textContent=m; t.hidden=false; clearTimeout(tT); tT=setTimeout(()=>t.hidden=true,2400); }

/* ---- Data ---- */
const STEPS=['Pemicu','Materi','Refleksi','Aksi','Integrasi'];
const EASY=[['orang','PKn belajar tentang menjadi warga negara yang baik.'],['hukum','Warga negara punya hak dan kewajiban.'],['kampus','Semua mahasiswa wajib ikut kuliah ini.'],['buku','Indonesia punya banyak suku, agama, dan kemampuan.'],['aksesibilitas','Penyandang disabilitas juga warga negara yang setara.'],['transkrip','Materi kuliah harus bisa dipakai semua mahasiswa.'],['lindung','Kalau hakmu tidak dipenuhi, kamu boleh melapor.']];
const SEGS_OLD=[['Tujuan dan kontrak kuliah','00:00–01:30','Hari ini kita belajar apa itu Pendidikan Kewarganegaraan.'],['Kisah Dimas','01:30–04:10','Dimas tidak bisa membaca salindia PDF hasil pindaian.'],['Apa itu PKn','04:10–07:00','PKn membentuk warga negara yang baik dan berjiwa Pancasila.'],['Tiga sumber PKn','07:00–10:00','Sumber PKn: historis, sosiologis, dan politis.'],['Tantangan dan ringkasan','10:00–12:30','Warga negara yang baik memastikan semua orang bisa ikut serta.']];
const SEGS_BY_STEP=[
 [['Tujuan dan kontrak kuliah','00:00–01:30','Hari ini kita belajar apa itu Pendidikan Kewarganegaraan.'],['Kisah Dimas','01:30–04:10','Dimas tidak bisa membaca salindia PDF hasil pindaian.']],
 [['Apa itu PKn','04:10–07:00','PKn membentuk warga negara yang baik dan berjiwa Pancasila.'],['Tiga sumber PKn','07:00–10:00','Sumber PKn: historis, sosiologis, dan politis.'],['Tantangan dan kisah Dimas','10:00–12:30','Warga negara yang baik memastikan semua orang bisa ikut serta.']],
 [['Pertanyaan refleksi','12:30–14:00','Apa yang berubah dalam pandanganmu? Jawab dengan tulisan, suara, atau video isyarat.']],
 [['Tugas audit materi','14:00–15:30','Bersama kelompok, periksa apakah satu materi kuliah bisa dipakai semua mahasiswa.']],
 [['Ringkasan dan rencana','15:30–17:00','Memenuhi hak adalah kewajiban, bukan kebaikan hati. Tulis satu rencanamu.']]
];
const EASY_BY_STEP=[
 [['orang','Dimas adalah mahasiswa.'],['fokus','Dimas sulit melihat tulisan kecil.'],['dengarkan','Dimas memakai aplikasi pembaca layar.'],['peringatan','Materi kuliahnya hanya gambar. Aplikasinya tidak bisa membaca.'],['bantuan','Menurutmu, apa yang seharusnya terjadi?']],
 [['orang','PKn belajar tentang menjadi warga negara yang baik.'],['hukum','Warga negara punya hak dan kewajiban.'],['kampus','Semua mahasiswa wajib ikut kuliah ini.'],['buku','Indonesia punya banyak suku, agama, dan kemampuan.'],['aksesibilitas','Penyandang disabilitas juga warga negara yang setara.'],['transkrip','Materi kuliah harus bisa dipakai semua mahasiswa.']],
 [['jurnal','Sekarang kamu menulis jurnal.'],['bantuan','Apa yang berubah dalam pikiranmu?'],['mik','Kamu boleh menulis, merekam suara, atau membuat video isyarat.'],['lindung','Kamu tidak wajib bercerita tentang dirimu.']],
 [['orang','Sekarang kamu bekerja dalam kelompok.'],['transkrip','Pilih satu materi kuliah.'],['centang','Periksa: apakah semua orang bisa memakainya?'],['kampus','Hasilnya dikirim ke Unit Layanan Disabilitas.']],
 [['orang','Kamu sudah belajar tentang warga negara yang setara.'],['lindung','Kalau hakmu tidak dipenuhi, kamu boleh melapor.'],['jurnal','Tulis satu hal yang akan kamu lakukan minggu ini.']]
];
const ACTIVITY={1:'.poll',3:'#jm-ketik',4:'#audit',5:'#plan'};
/* Disesuaikan dengan RPS Kewarganegaraan WU25-00003 (revisi 1). l = Lensa Hak Disabilitas dari proposal. */
const RPS=[
 {p:1,t:'Konsep, Tujuan, dan Fungsi Pendidikan Kewarganegaraan',c:'2-1',m:'Contextual Learning',n:[['Tes tulis (UTS)',2]],sub:'Memahami konsep dan prinsip dasar NKRI, bersikap positif terhadap fungsi dan tujuan PKn untuk memperkuat jati diri keindonesiaan, dan menyetujui kontrak kuliah.',l:'Dari cara pandang kasihan ke cara pandang hak.'},
 {p:2,t:'Pentingnya Identitas bagi Bangsa Indonesia',c:'2-1',m:'Contextual Learning',n:[['Tes tulis (UTS)',4]],sub:'Menghargai kebinekaan, memelihara persatuan, dan mengelola keberagaman.',l:'Disabilitas sebagai bagian keberagaman bangsa; bahasa isyarat sebagai bahasa komunitas Tuli.'},
 {p:3,t:'Perlunya Integrasi bagi Bangsa Indonesia',c:'2-1',m:'Contextual Learning',n:[['Tes tulis (UTS)',4]],sub:'Berpartisipasi aktif memperkuat perilaku integratif dan mengelola keberagaman.',l:'Inklusi lawan segregasi; hambatan sikap dan lingkungan.'},
 {p:4,t:'Nilai dan Norma dalam Konstitusi Indonesia',c:'2-1',m:'Contextual Learning',n:[['Tes tulis (UTS)',5]],sub:'Mengembangkan perilaku konstitusional dan mengubah perilaku yang tidak sesuai nilai dan norma.',l:'Sila ke-2 dan ke-5; persamaan dan bebas diskriminasi dalam UUD 1945.'},
 {p:5,t:'Perilaku Konstitusional Warga Negara',c:'2-1',m:'Contextual Learning',n:[['Tes tulis (UTS)',5]],sub:'Membiasakan diri berperilaku sesuai konstitusi (taat hukum).',l:'UU No. 8 Tahun 2016 dan UU No. 19 Tahun 2011 (pengesahan CRPD).'},
 {p:6,t:'Kewarganegaraan Indonesia',c:'2-1',m:'Contextual Learning',n:[['Tes tulis (UTS)',5]],sub:'Bersikap kritis, bertanggung jawab, berorientasi pada kepentingan publik; memahami data kependudukan dan pencatatan sipil.',l:'Dokumen kependudukan dan layanan publik yang aksesibel.'},
 {p:7,t:'Harmoni Kewajiban dan Hak Warga Negara',c:'2-1',m:'Contextual Learning',n:[['Tes tulis (UTS)',5]],sub:'Menjalankan kewajiban dan hak sebagai warga negara secara harmonis.',l:'Kekerasan dan diskriminasi (Permendikbudristek No. 55/2024); akomodasi yang layak.'},
 {p:8,exam:'UTS',t:'Ujian Tengah Semester (UTS)',sub:'Tes tulis untuk CPMK 2-1, materi Pertemuan 1–7. Bobot 30%.',l:'Format alternatif: waktu tambahan, format baca, atau juru bahasa isyarat.'},
 {p:9,t:'Hakikat Demokrasi yang Berlandaskan Pancasila dan UUD NRI 1945',c:'2-2',m:'Case Based Learning',n:[['Presentasi',7]],sub:'Menampilkan sikap demokratis yang sesuai dengan nilai Pancasila dan UUD NRI 1945.',l:'Hak politik dan pemilu yang aksesibel.'},
 {p:10,t:'Pembangunan Budaya Demokrasi Pancasila',c:'2-2',m:'Case Based Learning',n:[['Presentasi',7],['Tugas kelompok: video kampanye',10]],sub:'Membangun budaya demokrasi Pancasila dan mematuhi aturan dalam kehidupan demokrasi.',l:'Partisipasi bermakna: tidak ada tentang kami tanpa kami.'},
 {p:11,t:'Penegakan Hukum yang Berkeadilan',c:'2-2',m:'Case Based Learning',n:[['Presentasi',8]],sub:'Menjunjung supremasi hukum dan berani melaporkan tindakan yang tidak sesuai.',l:'Akses terhadap keadilan; alur lapor Satgas PPKPT.'},
 {p:12,t:'Konsep dan Urgensi Wawasan Nusantara',c:'2-2',m:'Case Based Learning',n:[['Presentasi',7]],sub:'Menjaga kesatuan wilayah NKRI, persatuan bangsa, dan lingkungan tempat tinggal.',l:'Keadilan akses antardaerah: infrastruktur dan informasi.'},
 {p:13,t:'Wawasan Nusantara dalam Membangun Jati Diri di Tengah Pergaulan Dunia',c:'2-2',m:'Case Based Learning',n:[['Presentasi',7]],sub:'Menunjukkan sikap nasionalisme dan mengedepankan kepentingan bangsa.',l:'CRPD dan SDGs: tidak ada yang tertinggal.'},
 {p:14,t:'Ketahanan Nasional dalam Membangun Komitmen Kolektif Kebangsaan',c:'2-2',m:'Case Based Learning',n:[['Presentasi',7]],sub:'Menerapkan ketahanan nasional mulai dari ketahanan diri dan berprestasi.',l:'Kesiapsiagaan bencana yang inklusif.'},
 {p:15,t:'Bela Negara untuk Kemakmuran Bangsa',c:'2-2',m:'Case Based Learning',n:[['Presentasi',7],['Tugas kelompok: mitigasi bencana',10]],sub:'Mengembangkan dan menampilkan semangat bela negara.',l:'Menghormati martabat setiap warga sebagai bentuk bela negara.'},
 {p:16,exam:'UAS',t:'Ujian Akhir Semester (UAS)',sub:'Ujian akhir semester.',l:'Format alternatif tersedia sesuai kebutuhan.'}
];
$('#babList').innerHTML=RPS.map(r=>`<li><a href="${r.p===1?'#langkah-1':'#beranda'}" ${r.p===1?'aria-current="page"':''}><span class="bab-no">${r.p}</span>${r.t}</a></li>`).join('');
$('#easySummary').innerHTML=[EASY[0],EASY[1],EASY[4]].map(([ic,t])=>`<div class="easy"><span class="easy-pic"><i class="ic" data-ic="${ic}"></i></span><p>${t}</p></div>`).join('');
const kontrak=$('#kontrak'); kontrak.checked=store.get('kiat-kontrak',false); kontrak.addEventListener('change',()=>{ store.set('kiat-kontrak',kontrak.checked); if(kontrak.checked) toast('Kontrak kuliah disetujui'); });

/* ---- Bagian bacaan per format ---- */
['[data-step="1"] > p[data-read]','[data-step="2"] > .prose','[data-step="2"] > .src-grid','[data-step="2"] > .goal-list','[data-step="2"] > .lensa-section','[data-step="2"] > .hukum-list','[data-step="3"] > .intro','[data-step="3"] > .questions','[data-step="4"] > .intro','[data-step="5"] > #easySummary'].forEach(sel=>$$('.langkah'+sel).forEach(e=>e.classList.add('only-teks')));
$$('.langkah[data-step="1"] > .video').forEach(e=>e.classList.add('no-isyarat'));
/* ---- Steps ---- */
let step=1; let done=new Set(store.get('kiat-done',[])); let seen=new Set(store.get('kiat-seen',[]));
function renderStepper(){
  $('#stepper').innerHTML=STEPS.map((n,i)=>{ const s=i+1, d=done.has(s), now=s===step, v=!d&&!now&&seen.has(s);
    const state= now?'<span class="here">Kamu di sini</span>': d?'<span class="state">Selesai</span>': v?'<span class="state">Sudah dibuka</span>':'<span class="state">&nbsp;</span>';
    return `<li class="${d?'done':''} ${v?'seen':''}"><button data-go="${s}" ${now?'aria-current="step"':''} aria-label="Langkah ${s}: ${n}${d?', selesai':v?', sudah dibuka':''}${now?', sedang dibuka':''}"><span class="dot">${d&&!now?svg('centang').replace('<svg','<svg class="ic" style="width:1.1rem;height:1.1rem"'):s}</span><span>${n}</span>${state}</button></li>`; }).join('');
  $('#stepHint').textContent = done.size===5 ? 'Semua langkah selesai. Hebat!' : `${done.size} dari 5 langkah selesai. Klik nomor untuk berpindah, atau tekan Lanjut di bawah.`;
}
function goStep(n, focus){
  step=Math.min(5,Math.max(1,n)); stopTTS(); cur=0;
  $$('.langkah').forEach(s=>s.hidden=+s.dataset.step!==step); seen.add(step); store.set('kiat-seen',[...seen]);
  $('#where').textContent=`Langkah ${step} dari 5`;
  $('#prevStep').hidden=step===1;
  const nx=$('#nextStep'); nx.innerHTML= step<5 ? `Lanjut: ${STEPS[step]}<i class="ic" data-ic="kanan"></i>` : `<i class="ic" data-ic="centang"></i>Selesaikan Pertemuan 1`; paint(nx);
  renderStepper(); store.set('kiat-step',step); placeAlt(); sn=0; ei=0; if(typeof renderSeg==='function'){ renderSeg(); renderEasy(); }
  if(/^#langkah-/.test(location.hash) && location.hash!=='#langkah-'+step) history.replaceState(null,'','#langkah-'+step);
  if(focus){ window.scrollTo({top:0,behavior:calm()}); const h=$(`.langkah[data-step="${step}"] h2`); h.setAttribute('tabindex','-1'); h.focus({preventScroll:true}); }
}
$('#stepper').addEventListener('click',e=>{ const b=e.target.closest('[data-go]'); if(b){ goStep(+b.dataset.go,true);} });
$('#prevStep').addEventListener('click',()=>goStep(step-1,true));
$('#nextStep').addEventListener('click',()=>{
  if(step===5){ const p=$('#plan'); if(!p.value.trim()){ toast('Tulis satu rencana dulu, ya'); p.focus(); return; } done.add(5); store.set('kiat-done',[...done]); renderStepper(); renderDash();
    popup({icon:'centang',tone:'ok',title:'Pertemuan 1 selesai!',html:`<p>Hebat, Raka. Rencanamu minggu ini:</p><p><strong>${plan.value.replace(/[<>&]/g,'')}</strong></p><p>Berikutnya, Pertemuan 2: Pentingnya Identitas bagi Bangsa Indonesia.</p>`,actions:[{label:'Kembali ke Beranda',primary:true,icon:'home',onClick:()=>{ location.hash='beranda'; }},{label:'Tutup'}]}); return; }
  done.add(step); store.set('kiat-done',[...done]); toast(`${STEPS[step-1]} selesai`); goStep(step+1,true);
});

/* ---- Tabs ---- */
const tabs=$$('.fmt');
let fmt='teks';
function placeAlt(){ const sec=$(`.langkah[data-step="${step}"]`); if(!sec) return; const head=sec.querySelector('.langkah-head');
  head.after($('#panel-isyarat')); $('#panel-isyarat').after($('#panel-easy')); }
function selectFmt(f,focus){
  fmt=f; tabs.forEach(t=>{ const on=t.dataset.fmt===f; t.setAttribute('aria-selected',on); t.tabIndex=on?0:-1; if(on&&focus) t.focus(); });
  const pa=$('#panel-artikel'); pa.dataset.mode=f; pa.setAttribute('aria-labelledby',$(`.fmt[data-fmt="${f}"]`).id);
  $('#panel-isyarat').hidden=f!=='isyarat'; $('#panel-easy').hidden=f!=='easy';
  $('#player').hidden=f!=='dengar';
  $('#signTab').hidden = f==='isyarat' || $('#view-bab').hidden;
  placeAlt();
  if(f!=='dengar') stopTTS();
  if(f!=='isyarat'){ clearInterval(sT); const sp=$('#sPlay'); if(sp&&sp.getAttribute('aria-pressed')==='true') sp.click(); }
}
tabs.forEach((t,i)=>{ t.addEventListener('click',()=>selectFmt(t.dataset.fmt));
  t.addEventListener('keydown',e=>{ let j=null; if(e.key==='ArrowRight') j=(i+1)%4; if(e.key==='ArrowLeft') j=(i+3)%4; if(e.key==='Home') j=0; if(e.key==='End') j=3; if(j!==null){ e.preventDefault(); selectFmt(tabs[j].dataset.fmt,true);} }); });

/* ---- TTS ---- */
const hasTTS='speechSynthesis' in window; let rate=1, playing=false, cur=0, voice=null;
function pickVoice(){ if(!hasTTS) return; voice=speechSynthesis.getVoices().find(v=>/^id/i.test(v.lang))||null; $('#voiceInfo').textContent=voice?`Suara: ${voice.name}.`:'Suara Bahasa Indonesia belum terpasang di perangkat ini; dipakai suara bawaan.'; }
if(hasTTS){ pickVoice(); speechSynthesis.onvoiceschanged=pickVoice; } else $('#voiceInfo').textContent='Perangkat ini belum mendukung suara.';
const readables=()=>$$(`.langkah[data-step="${step}"] [data-read]`);
const clearReading=()=>$$('.reading').forEach(e=>e.classList.remove('reading'));
function setPlay(on){ const b=$('#ttsPlay'); b.innerHTML=`<i class="ic" data-ic="${on?'jeda':'putar'}"></i>`; b.setAttribute('aria-label',on?'Jeda':'Putar narasi'); paint(b); }
function utter(t){ const u=new SpeechSynthesisUtterance(t); u.lang='id-ID'; if(voice) u.voice=voice; u.rate=rate; return u; }
function speakAt(i){ const l=readables(); if(i<0) i=0; if(i>=l.length){ stopTTS(); $('#ttsStatus').textContent='Selesai. Tekan Lanjut untuk langkah berikutnya.'; return; }
  cur=i; clearReading(); const el=l[i]; el.classList.add('reading'); el.scrollIntoView({block:'center',behavior:calm()});
  $('#ttsStatus').textContent=`Bagian ${i+1} dari ${l.length}`;
  if(!hasTTS) return; speechSynthesis.cancel(); const u=utter(el.innerText); u.onend=()=>{ if(playing&&cur===i) speakAt(i+1); }; speechSynthesis.speak(u); }
function stopTTS(){ playing=false; if(hasTTS) speechSynthesis.cancel(); clearReading(); setPlay(false); }
$('#ttsPlay').addEventListener('click',()=>{ if(playing){ playing=false; if(hasTTS) speechSynthesis.cancel(); setPlay(false); $('#ttsStatus').textContent='Dijeda.'; } else { playing=true; setPlay(true); speakAt(cur); } });
$('#ttsNext').addEventListener('click',()=>{ playing=true; setPlay(true); speakAt(cur+1); });
$('#ttsPrev').addEventListener('click',()=>{ playing=true; setPlay(true); speakAt(cur-1); });
$$('.speed button').forEach(b=>b.addEventListener('click',()=>{ rate=+b.dataset.rate; $$('.speed button').forEach(x=>x.setAttribute('aria-pressed',x===b)); if(playing) speakAt(cur); }));
function say(t,onend){ if(!hasTTS){ toast('Perangkat ini belum mendukung suara'); return; } speechSynthesis.cancel(); const u=utter(t); if(onend) u.onend=onend; speechSynthesis.speak(u); }
$('#voiceTest').addEventListener('click',()=>say('Halo. Ini contoh suara modul Kewarganegaraan.'));

/* ---- Video pemicu ---- */
const LINES=$$('#vTr p').map(p=>p.textContent.replace(/^\[[^\]]+\]\s*/,'')); let vOn=false,vI=0,vT=null;
$('#vPlay').addEventListener('click',function(){ vOn=!vOn; this.innerHTML=`<i class="ic" data-ic="${vOn?'jeda':'putar'}"></i>`; paint(this); this.setAttribute('aria-label',vOn?'Jeda video':'Putar video'); this.classList.toggle('playing',vOn); clearInterval(vT);
  const sc=$('#vScene'); vI=0; $('#vCap').textContent=LINES[0]; $('#vBar').style.width=(100/LINES.length)+'%'; $$('#vTr p').forEach((p,j)=>p.classList.toggle('now',j===0));
  if(vOn){ sc.src=sc.dataset.png; requestAnimationFrame(()=>{ sc.src=sc.dataset.gif; }); } else { sc.src=sc.dataset.png; $('#vBar').style.width='0%'; }
  if(vOn) vT=setInterval(()=>{ vI=(vI+1)%LINES.length; $('#vCap').textContent=LINES[vI]; $('#vBar').style.width=((vI+1)/LINES.length*100)+'%'; $$('#vTr p').forEach((p,j)=>p.classList.toggle('now',j===vI)); },3000); });
const tog=(id,fn)=>$(id).addEventListener('click',function(){ const on=this.getAttribute('aria-pressed')!=='true'; this.setAttribute('aria-pressed',on); fn(on); });
tog('#vCC',on=>$('#vCap').hidden=!on); tog('#vJbiBtn',on=>$('#vJbi').hidden=!on); tog('#vTrBtn',on=>$('#vTr').hidden=!on);

/* ---- Poll, term, hukum ---- */
const POLL={a:'Terima kasih sudah jujur. Di langkah Materi, kita lihat bedanya membantu karena kasihan dengan memenuhi hak.',b:'Kamu melihatnya sebagai hak. Siapa yang wajib memenuhinya? Kita bahas di langkah berikutnya.',c:'Tidak apa-apa. Lanjutkan ke langkah Materi, lalu kita bahas bersama.'};
$$('input[name="poll"]').forEach(r=>r.addEventListener('change',()=>{ popup({icon:'lensa',tone:'lensa',title:'Terima kasih sudah memilih',html:`<p>${POLL[r.value]}</p>`,actions:[{label:'Lanjut ke Materi',primary:true,icon:'kanan',onClick:()=>{ done.add(1); store.set('kiat-done',[...done]); goStep(2,true); }},{label:'Tetap di sini'}]}); }));
$('#termBtn').addEventListener('click',()=>popup({icon:'buku',title:'Akomodasi yang layak',html:'<p>Penyesuaian yang tepat agar penyandang disabilitas bisa belajar setara dengan yang lain.</p><p><strong>Contoh:</strong> materi yang bisa dibaca pembaca layar, juru bahasa isyarat, atau waktu ujian tambahan.</p>',actions:[{label:'Mengerti',primary:true}]}));
$$('.hukum > button').forEach(b=>b.addEventListener('click',()=>{ const on=b.getAttribute('aria-expanded')!=='true'; b.setAttribute('aria-expanded',on); document.getElementById(b.getAttribute('aria-controls')).hidden=!on; }));

/* ---- Jurnal ---- */
const jt=$('#jurnal'); jt.value=store.get('kiat-jurnal','');
const jMeta=()=>{ const w=jt.value.trim()?jt.value.trim().split(/\s+/).length:0; $('#jCount').textContent=`${w} kata`; }; jMeta();
let jT; jt.addEventListener('input',()=>{ jMeta(); $('#jSaved').textContent='Menyimpan…'; clearTimeout(jT); jT=setTimeout(()=>{ store.set('kiat-jurnal',jt.value); $('#jSaved').textContent='Tersimpan otomatis'; },700); });
$$('input[name="jmode"]').forEach(r=>r.addEventListener('change',()=>{ const m=r.value; $('#jText').hidden=m!=='ketik'; $('#jFile').hidden=m==='ketik'; $('#jUpload').accept=m==='suara'?'audio/*':'video/*'; $('#jUploadLabel').textContent=m==='suara'?'Unggah rekaman suara':'Unggah video bahasa isyarat'; }));
$('#jSubmit').addEventListener('click',()=>{ const m=$('input[name="jmode"]:checked').value;
  if(m==='ketik'&&jt.value.trim().split(/\s+/).filter(Boolean).length<5){ $('#jSaved').textContent='Tulis beberapa kalimat dulu, ya.'; jt.focus(); return; }
  if(m!=='ketik'&&!$('#jUpload').files.length){ toast('Pilih file dulu'); $('#jUpload').focus(); return; }
  popup({icon:'centang',tone:'ok',title:'Jurnal terkirim',html:'<p>Terima kasih sudah berbagi. Dosen akan membaca jurnalmu dan memberi tanggapan minggu ini.</p>',actions:[{label:'Lanjut ke Aksi',primary:true,icon:'kanan',onClick:()=>{ done.add(3); store.set('kiat-done',[...done]); goStep(4,true); }},{label:'Tutup'}]}); });

/* ---- Audit & rencana ---- */
const audits=$$('#audit input'); const sv=store.get('kiat-audit',[]);
const updA=()=>$('#auditCount').textContent=`${audits.filter(c=>c.checked).length} dari ${audits.length}`;
audits.forEach((c,i)=>{ c.checked=!!sv[i]; c.addEventListener('change',()=>{ store.set('kiat-audit',audits.map(x=>x.checked)); updA(); }); }); updA();
const plan=$('#plan'); plan.value=store.get('kiat-plan',''); plan.addEventListener('input',()=>store.set('kiat-plan',plan.value));
$$('[data-plan]').forEach(b=>b.addEventListener('click',()=>{ plan.value=b.dataset.plan; store.set('kiat-plan',plan.value); plan.focus(); }));

/* ---- Easy Read: satu kalimat per layar, per langkah ---- */
let ei=0; const ER=()=>EASY_BY_STEP[step-1];
function renderEasy(){ const L=ER(); if(ei>=L.length) ei=0;
  $('#easyIcon').dataset.ic=L[ei][0]; paint($('#easyCard')); $('#easyText').textContent=L[ei][1];
  $('#easyDots').innerHTML=L.map((_,i)=>`<span class="${i===ei?'on':''}"></span>`).join(''); $('#easyPos').textContent=`Kalimat ${ei+1} dari ${L.length}`;
  $('#easyPrev').disabled=ei===0; $('#easyPrev').style.visibility=ei===0?'hidden':'visible';
  const last=ei===L.length-1; $('#easyNext').innerHTML= last?'<i class="ic" data-ic="centang"></i>Selesai':'Berikutnya<i class="ic" data-ic="kanan"></i>'; paint($('#easyNext'));
}
$('#easyPrev').addEventListener('click',()=>{ if(ei>0){ ei--; renderEasy(); } });
$('#easyNext').addEventListener('click',()=>{ if(ei<ER().length-1){ ei++; renderEasy(); } else understandPopup(); });
function goActivity(){ const sel=ACTIVITY[step]; if(sel){ const el=$(`.langkah[data-step="${step}"] ${sel}`)||$(sel); el.scrollIntoView({block:'center',behavior:calm()}); const f=el.matches('input,button,textarea')?el:el.querySelector('input,button,textarea'); if(f) f.focus({preventScroll:true}); } else $('#nextStep').focus(); }
function understandPopup(){ const has=!!ACTIVITY[step];
  popup({icon:'easyread',title:'Apakah kamu paham?',html:'<p>Tidak apa-apa kalau belum. Kamu bisa mengulang pelan-pelan.</p>',actions:[
  {label:has?'Ya, lanjut ke kegiatan':'Ya, lanjut',primary:true,icon:'centang',onClick:()=>{ setTimeout(()=>{ if(has) goActivity(); else $('#nextStep').click(); },0); }},
  {label:'Ulangi pelan-pelan',icon:'suara',onClick:()=>{ rate=.75; ei=0; renderEasy(); setTimeout(()=>$('#easySay').click(),50); }}]}); }
$('#easySay').addEventListener('click',()=>{ const c=$('#easyCard'); c.classList.add('reading'); say(ER()[ei][1],()=>c.classList.remove('reading')); });

/* ---- Isyarat: video JBI per langkah ---- */
let sn=0, sT=null; const SG=()=>SEGS_BY_STEP[step-1];
function renderSeg(){ const L=SG(); if(sn>=L.length) sn=0;
  $('#segs').innerHTML=L.map((s,i)=>`<li><button data-seg="${i}" ${i===sn?'aria-current="true"':''}><i class="ic" data-ic="${i<sn?'centang':'putar'}" style="color:${i<sn?'var(--ok-mark)':'var(--link)'}"></i><span><strong>${s[0]}</strong><small>${s[1]}</small></span></button></li>`).join(''); paint($('#segs'));
  $('#sBadge').textContent=`Langkah ${step} · bagian ${sn+1} dari ${L.length}`; $('#sCap').textContent=L[sn][2]; $('#sBar').style.width=((sn+.5)/L.length*100)+'%'; }
$('#segs').addEventListener('click',e=>{ const b=e.target.closest('[data-seg]'); if(b){ sn=+b.dataset.seg; renderSeg(); } });
$('#sPlay').addEventListener('click',function(){ const on=this.getAttribute('aria-pressed')!=='true'; this.setAttribute('aria-pressed',on); this.innerHTML=on?'<i class="ic" data-ic="jeda"></i>Jeda':'<i class="ic" data-ic="putar"></i>Putar'; paint(this);
  clearInterval(sT); if(on) sT=setInterval(()=>{ const L=SG(); if(sn<L.length-1){ sn++; renderSeg(); } else { clearInterval(sT); this.click(); if(ACTIVITY[step]) toast('Bagian video selesai. Kerjakan kegiatan di bawah.'); else toast('Bagian video selesai. Tekan Lanjut.'); } }, $('#sSlow').getAttribute('aria-pressed')==='true'?5000:3500); });
tog('#sSlow',()=>{}); tog('#sCC',on=>$('#sCap').hidden=!on);

/* ---- Animasi JBI (WCAG 2.2.2: bisa dihentikan) ---- */
let animStopped=false;
function setAnim(stop){ animStopped=stop; $$('.jbi-img').forEach(im=>{ im.src=stop?im.dataset.png:im.dataset.gif; });
  $$('[data-anim]').forEach(b=>{ b.setAttribute('aria-pressed',stop); b.innerHTML=stop?'<i class="ic" data-ic="putar"></i>Jalankan animasi':'<i class="ic" data-ic="jeda"></i>Hentikan animasi'; paint(b); }); }
$$('[data-anim]').forEach(b=>b.addEventListener('click',()=>setAnim(!animStopped)));
/* ---- Preferensi ---- */
const DEF={size:100,font:'atkinson',spacing:'normal',theme:'auto',ruler:false,sorot:true,motion:false,jbi:true,startfmt:'teks'};
let pref=Object.assign({},DEF,store.get('kiat-pref',{})); const hostTheme=root.dataset.theme||'';
const SP={normal:[1.6,'0em','0em'],lega:[1.9,'0.04em','0.12em'],sangat:[2.2,'0.08em','0.2em']};
function applyPref(msg){
  root.style.setProperty('--scale',pref.size/100); const s=SP[pref.spacing]; root.style.setProperty('--lh',s[0]); root.style.setProperty('--ls',s[1]); root.style.setProperty('--ws',s[2]);
  if(pref.font==='atkinson') delete root.dataset.font; else root.dataset.font=pref.font;
  delete root.dataset.contrast;
  if(pref.theme==='light'||pref.theme==='dark') root.dataset.theme=pref.theme; else if(pref.theme==='high'){ root.dataset.contrast='high'; root.dataset.theme='dark'; } else { if(hostTheme) root.dataset.theme=hostTheme; else delete root.dataset.theme; }
  root.dataset.sorot=pref.sorot?'on':'off'; root.dataset.motion=pref.motion?'off':'on'; setAnim(!!pref.motion || matchMedia('(prefers-reduced-motion: reduce)').matches); $('#ruler').hidden=!pref.ruler;
  $('#vJbi').hidden=!pref.jbi; $('#vJbiBtn').setAttribute('aria-pressed',pref.jbi);
  $('#size').value=pref.size; $('#sizeVal').textContent=pref.size+'%'; $('#size').setAttribute('aria-valuetext',pref.size+' persen');
  ['font','spacing','theme','startfmt'].forEach(n=>{ const r=$(`input[name="${n}"][value="${pref[n]}"]`); if(r) r.checked=true; });
  $$('.switch').forEach(sw=>{ const v=!!pref[sw.dataset.pref]; sw.setAttribute('aria-checked',v); sw.previousElementSibling.textContent=v?'Aktif':'Mati'; });
  store.set('kiat-pref',pref); if(msg) toast(msg);
}
$('#size').addEventListener('input',e=>{ pref.size=+e.target.value; applyPref(); });
$('#sizeDown').addEventListener('click',()=>{ pref.size=Math.max(100,pref.size-10); applyPref('Ukuran teks '+pref.size+'%'); });
$('#sizeUp').addEventListener('click',()=>{ pref.size=Math.min(200,pref.size+10); applyPref('Ukuran teks '+pref.size+'%'); });
['font','spacing','theme','startfmt'].forEach(n=>$$(`input[name="${n}"]`).forEach(r=>r.addEventListener('change',()=>{ pref[n]=r.value; applyPref('Tersimpan'); if(n==='startfmt') selectFmt(r.value); })));
$$('.switch').forEach(sw=>sw.addEventListener('click',()=>{ const k=sw.dataset.pref; pref[k]=!pref[k]; applyPref(); }));
$('#resetPrefs').addEventListener('click',()=>{ pref=Object.assign({},DEF); applyPref('Dikembalikan ke awal'); });
document.addEventListener('mousemove',e=>{ if(pref.ruler) $('#ruler').style.top=e.clientY+'px'; });

/* ---- Laci ---- */
let last=null;
function openDlg(id){ last=document.activeElement; $('#scrim').hidden=false; const d=$('#'+id); d.hidden=false; d.querySelector('[data-close]').focus(); }
function closeDlg(){ $$('.drawer').forEach(d=>d.hidden=true); $('#scrim').hidden=true; if(last) last.focus(); }
$('#openPanel').addEventListener('click',()=>openDlg('panel')); $('#openPanel2').addEventListener('click',()=>openDlg('panel')); $('#openHelp').addEventListener('click',()=>openDlg('help')); $('#openBab').addEventListener('click',()=>openDlg('babDrawer'));
$$('[data-close]').forEach(b=>b.addEventListener('click',closeDlg)); $('#scrim').addEventListener('click',()=>{ if(!$('#modal').hidden) closePopup(); else closeDlg(); });
$('#babList').addEventListener('click',e=>{ if(e.target.closest('a')) closeDlg(); });
$('#mSay').addEventListener('click',()=>say($('#mTitle').textContent+'. '+$('#mBody').innerText));
document.addEventListener('keydown',e=>{ const mo=$('#modal'); const open=!mo.hidden?mo:$$('.drawer').find(d=>!d.hidden);
  if(e.key==='Escape'&&open){ if(open===mo) closePopup(); else closeDlg(); return; }
  if(e.altKey&&(e.key==='a'||e.key==='A')){ e.preventDefault(); openDlg('panel'); return; }
  if(e.key==='Tab'&&open){ const f=[...open.querySelectorAll('button,input,summary,a[href],[tabindex]:not([tabindex="-1"])')].filter(x=>!x.disabled&&x.offsetParent!==null); if(!f.length) return; const a=f[0], z=f[f.length-1];
    if(e.shiftKey&&document.activeElement===a){ e.preventDefault(); z.focus(); } else if(!e.shiftKey&&document.activeElement===z){ e.preventDefault(); a.focus(); } } });

/* ---- Beranda ---- */
let showAll=false;
function chapRow(r,st,pct){
  const meta = r.exam ? 'Ujian · format alternatif tersedia' : `CPMK ${r.c} · ${r.m} · ${r.n.map(x=>x[0]+' '+x[1]+'%').join(' + ')}`;
  if(r.p===1){ const fin=done.has(5); return `<li><button class="chap now" data-p="1"><span class="no">1</span><span class="t"><strong>${r.t}</strong><small>${meta}</small></span><span class="pill ${fin?'ok':'go'}"><i class="ic" data-ic="${fin?'centang':'waktu'}"></i>${fin?'Selesai':pct+'%'}</span></button></li>`; }
  return `<li><button class="chap ${r.exam?'exam':'locked'}" data-p="${r.p}"><span class="no">${r.p}</span><span class="t"><strong>${r.t}</strong><small>${meta}</small></span><span class="pill lock"><i class="ic" data-ic="${r.exam?'asesmen':'kunci'}"></i>${r.exam?r.exam:'Minggu ke-'+r.p}</span></button></li>`;
}
function renderDash(){
  const pct=Math.round(done.size/5*100), st=store.get('kiat-step',1);
  $('#heroStep').textContent= done.has(5)?'Selesai · siap untuk Pertemuan 2':`Langkah ${st} dari 5 · ${STEPS[st-1]}`;
  $('#heroBar').style.width=pct+'%'; $('#heroPct').textContent=pct+'% selesai'; $('#heroGo').href='#langkah-'+st;
  $('#statBab').textContent=`${done.has(5)?1:0} dari 14`;
  $('#chapList').innerHTML=RPS.slice(0,showAll?RPS.length:5).map(r=>chapRow(r,st,pct)).join('');
  paint($('#chapList'));
  $$('[data-start]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.start===pref.startfmt));
}
$('#chapList').addEventListener('click',e=>{ const b=e.target.closest('[data-p]'); if(!b) return; const r=RPS[+b.dataset.p-1], st=store.get('kiat-step',1);
  const rows = r.exam ? `<li><span>Isi</span><span>${r.sub}</span></li>` :
    `<li><span>CPMK</span><span>${r.c}</span></li><li><span>Kemampuan</span><span>${r.sub}</span></li><li><span>Metode</span><span>${r.m} · 2 × 50 menit</span></li><li><span>Penilaian</span><span>${r.n.map(x=>x[0]+' ('+x[1]+'%)').join(', ')}</span></li><li><span>Sumber</span><span>Tim Dikti (2016)</span></li>`;
  const acts = r.p===1 ? [{label:'Buka pertemuan',primary:true,icon:'kanan',onClick:()=>{ location.hash='langkah-'+st; }},{label:'Tutup'}]
    : r.exam ? [{label:'Ajukan format alternatif',primary:true,icon:'kampus',onClick:()=>{ setTimeout(()=>$('#openAcc').click(),0); }},{label:'Tutup'}]
    : [{label:'Tutup',primary:true}];
  popup({icon:r.exam?'asesmen':'buku',title:`Pertemuan ${r.p} · ${r.t}`,html:`<ul class="info-list">${rows}</ul><div class="lensa"><span class="lensa-title"><i class="ic" data-ic="lensa"></i>Lensa Hak Disabilitas</span><p>${r.l}</p></div>${r.p>1&&!r.exam?'<p class="muted">Materi dibuka sesuai jadwal pertemuan.</p>':''}`,actions:acts}); });
$('#moreBab').addEventListener('click',function(){ showAll=!showAll; this.setAttribute('aria-expanded',showAll); this.innerHTML=showAll?'Tampilkan lebih sedikit<i class="ic" data-ic="bawah" style="transform:rotate(180deg)"></i>':'Lihat semua 16 pertemuan<i class="ic" data-ic="bawah"></i>'; paint(this); renderDash(); });
$$('[data-start]').forEach(b=>b.addEventListener('click',()=>{ pref.startfmt=b.dataset.start; applyPref(); renderDash(); toast('Pertemuan akan dibuka dengan format '+b.textContent.trim()); }));
$('#openAcc').addEventListener('click',()=>popup({icon:'kampus',tone:'lensa',title:'Ajukan akomodasi belajar',
  html:`<p>Pilih yang kamu butuhkan. Kamu tidak perlu melampirkan diagnosis.</p><div class="acc-list">
  <label class="check"><input type="checkbox" value="waktu"><span>Waktu ujian tambahan</span></label>
  <label class="check"><input type="checkbox" value="jbi"><span>Juru bahasa isyarat di kelas</span></label>
  <label class="check"><input type="checkbox" value="format"><span>Materi format lain (audio, huruf besar, Braille)</span></label>
  <label class="check"><input type="checkbox" value="duduk"><span>Pengaturan tempat duduk atau ruang kelas</span></label></div>
  <div class="field"><label for="accNote">Catatan (opsional)</label><textarea id="accNote" style="min-height:5rem"></textarea></div>`,
  actions:[{label:'Kirim ke ULD',primary:true,icon:'centang',onClick:()=>{ const n=$$('#mBody input:checked').length; if(!n){ toast('Pilih minimal satu kebutuhan'); return false; }
    setTimeout(()=>popup({icon:'centang',tone:'ok',title:'Pengajuan terkirim',html:`<p>${n} kebutuhan dikirim ke Unit Layanan Disabilitas Itera. Petugas akan menghubungimu dalam 2 hari kerja.</p>`}),0); }},{label:'Batal'}]}));

$('#signTab').addEventListener('click',()=>{ selectFmt('isyarat'); window.scrollTo({top:0,behavior:calm()}); $('#tab-isyarat').focus(); toast('Format Bahasa Isyarat aktif'); });
$('#toTop').addEventListener('click',()=>{ window.scrollTo({top:0,behavior:calm()}); $('#materi').focus({preventScroll:true}); });
window.addEventListener('scroll',()=>{ $('#toTop').hidden = window.scrollY < 500; },{passive:true});
/* ---- Rute ---- */
function route(){
  const h=location.hash; const m=/^#langkah-([1-5])$/.exec(h);
  const bab=!!m; $('#view-beranda').hidden=bab; $('#view-bab').hidden=!bab;
  $('#signTab').hidden = !bab || !$('#panel-isyarat').hidden;
  if(bab){ if(+m[1]!==step||!route.inBab){ goStep(+m[1],route.inBab); } route.inBab=true; $('#signTab').hidden=!$('#panel-isyarat').hidden; }
  else { route.inBab=false; stopTTS(); renderDash(); }
  window.scrollTo({top:0});
}
/* ---- Mulai ---- */
paint(); renderSeg(); renderEasy(); applyPref();
const h0=/^#langkah-([1-5])$/.exec(location.hash); goStep(h0?+h0[1]:store.get('kiat-step',1)); selectFmt(pref.startfmt||'teks'); route();
window.addEventListener('hashchange',()=>{ if(/^#langkah-/.test(location.hash)) selectFmt(pref.startfmt||'teks'); route(); });
})();
