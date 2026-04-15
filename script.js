// ═══════════════════════════════════════
//  DATABASE PRODUK LENGKAP
// ═══════════════════════════════════════
const DB = [
  // ELEKTRONIK
  {id:10,emoji:'📱',name:'Apple iPhone 15 Pro Max 256GB',price:22999000,orig:24999000,cat:'Elektronik',badge:'new',rating:4.9,sold:1200,desc:'Smartphone flagship dengan rangka titanium aerospace-grade dan chip A17 Pro. Kamera 48MP dengan periskop optical zoom hingga 5x. Layar Super Retina XDR 6.7 inci.'},
  {id:11,emoji:'💻',name:'MacBook Air M2 Chip 8GB/256GB',price:17599000,orig:19999000,cat:'Elektronik',badge:'hot',rating:4.9,sold:2100,desc:'Laptop tertipis Apple dengan chip M2. Baterai tahan 18 jam, layar Liquid Retina 13.6". Desain fanless — hening total.'},
  {id:12,emoji:'🎧',name:'Sony WH-1000XM5 Noise Cancelling',price:4899000,orig:5999000,cat:'Elektronik',badge:'sale',rating:4.8,sold:3400,desc:'Headphone ANC terbaik di kelasnya. Noise cancelling industri terdepan, 30 jam baterai, audio LDAC lossless.'},
  {id:26,emoji:'📺',name:'Samsung QLED Smart TV 55" 4K UHD',price:7500000,orig:8900000,cat:'Elektronik',badge:'sale',rating:4.8,sold:1800,desc:'TV 4K QLED dengan warna 100% Color Volume. Smart TV Tizen, suara Dolby Atmos, panel 120Hz.'},
  {id:13,emoji:'⌚',name:'Garmin Forerunner 265 Smartwatch GPS',price:7999000,orig:8599000,cat:'Elektronik',badge:'new',rating:4.7,sold:890,desc:'Jam tangan lari premium. AMOLED touchscreen, GPS multi-band, health monitoring 24/7.'},
  {id:14,emoji:'📸',name:'Sony Alpha A7 IV Mirrorless 33MP',price:32999000,orig:34999000,cat:'Elektronik',badge:'pro',rating:4.9,sold:420,desc:'Kamera hybrid terbaik. Sensor full-frame BSI 33MP, video 4K 60fps, Eye-AF generasi terbaru.'},
  {id:15,emoji:'🎮',name:'PlayStation 5 Console Disc Edition',price:8499000,orig:9500000,cat:'Elektronik',badge:'hot',rating:4.9,sold:8900,desc:'Konsol game generasi terbaru. SSD NVMe ultra-cepat, DualSense haptic feedback, 4K 120fps gaming.'},

  // KECANTIKAN
  {id:21,emoji:'🧴',name:'Skintific 5X Ceramide Barrier Moisture Gel',price:139000,orig:169000,cat:'Kecantikan',badge:'best',rating:4.9,sold:45200,desc:'Pelembap gel ringan dengan 5 jenis ceramide. Menenangkan kemerahan, memperkuat skin barrier, cocok semua jenis kulit.'},
  {id:22,emoji:'💄',name:'Wardah Exclusive Matte Lip Cream',price:65000,orig:89000,cat:'Kecantikan',badge:'sale',rating:4.8,sold:89100,desc:'Lip cream pigmented, tahan hingga 8 jam. Formula moisturizing, tidak bikin bibir kering. 30+ pilihan warna.'},
  {id:23,emoji:'✨',name:'Somethinc Niacinamide + Sabi Beet Serum',price:115000,orig:145000,cat:'Kecantikan',badge:'hot',rating:4.7,sold:32100,desc:'Serum andalan brightening. Niacinamide 10% + Tranexamic Acid mencerahkan noda hitam dan bekas jerawat.'},
  {id:24,emoji:'🌞',name:'Azarine Hydrasoothe Sunscreen Gel SPF45',price:65000,orig:75000,cat:'Kecantikan',badge:'new',rating:4.9,sold:98000,desc:'Sunscreen ringan bentuk gel, menyerap sempurna tanpa whitecast. PA++++, cocok di bawah makeup.'},
  {id:25,emoji:'🌿',name:'The Body Shop Tea Tree Oil 10ml',price:189000,orig:219000,cat:'Kecantikan',badge:'sale',rating:4.8,sold:12500,desc:'Minyak esensial murni 100%. Ampuh mengempeskan jerawat meradang dalam 6-8 jam pemakaian.'},
  {id:30,emoji:'💋',name:'Dior Addict Lip Glow Color Reviver Balm',price:620000,orig:680000,cat:'Kecantikan',badge:'premium',rating:4.9,sold:3200,desc:'Lip balm mewah yang warnanya menyesuaikan pH bibir alami. Melembapkan 24 jam, aroma bunga mawar.'},

  // FASHION
  {id:16,emoji:'👟',name:"Nike Air Force 1 '07 Original White",price:1549000,orig:1799000,cat:'Fashion',badge:'hot',rating:4.8,sold:15000,desc:"Sneakers legendaris sepanjang masa. Upper kulit asli, sol Air-Sole empuk, warna pure white ikonik."},
  {id:17,emoji:'👗',name:'ZARA Midi Dress Floral Summer Edition',price:599000,orig:899000,cat:'Fashion',badge:'sale',rating:4.7,sold:4300,desc:'Dress motif floral musim panas. Bahan rayon ringan, potongan A-line yang flattering, panjang midi.'},
  {id:18,emoji:'👜',name:'Coach Tabby Shoulder Bag 26 Leather',price:4500000,orig:6500000,cat:'Fashion',badge:'premium',rating:4.9,sold:1200,desc:'Tas wanita ikonik Coach berbahan kulit glove-tanned asli. Tali adjustable, ruang simpan praktis.'},
  {id:19,emoji:'👔',name:'Kemeja Flannel Premium Kotak Lengan Panjang',price:250000,orig:350000,cat:'Fashion',badge:'sale',rating:4.6,sold:12500,desc:'Kemeja flannel bahan cotton 100% tebal berkualitas. Hangat, nyaman, cocok untuk musim hujan.'},
  {id:20,emoji:'🕶️',name:'Ray-Ban Aviator Classic Polarized Gold',price:2400000,orig:2800000,cat:'Fashion',badge:'hot',rating:4.8,sold:3100,desc:'Kacamata hitam ikonik aviator. Lensa polarized G-15 anti-silau, frame baja tahan karat, UV400.'},
  {id:27,emoji:'👟',name:'Adidas Ultraboost 22 Running Shoes',price:2800000,orig:3300000,cat:'Fashion',badge:'pro',rating:4.9,sold:5200,desc:'Sepatu lari paling responsif. Teknologi Boost+ energy return, upper Primeknit breathable.'},

  // HOBI & MUSIK
  {id:1,emoji:'🎹',name:'Yamaha P-45 Digital Piano 88-Keys GHS',price:7500000,orig:8200000,cat:'Hobi & Musik',badge:'best',rating:4.9,sold:1450,desc:'Piano digital ideal untuk pemula-profesional. 88 tuts Graded Hammer Standard, 10 voices, 64-note polyphony. Suara Stereo AWM yang kaya.'},
  {id:2,emoji:'🎸',name:'Yamaha F310 Acoustic Guitar Natural',price:1850000,orig:2100000,cat:'Hobi & Musik',badge:'hot',rating:4.8,sold:3200,desc:'Gitar akustik legendaris untuk pemula. Spruce top, nato back & sides, tone rich dan playability nyaman. Bundle pick & capo.'},
  {id:3,emoji:'🎛️',name:'Korg nanoKEY2 MIDI Controller USB',price:790000,orig:950000,cat:'Hobi & Musik',badge:'sale',rating:4.7,sold:850,desc:'Keyboard MIDI 25 tuts super tipis dan portabel. USB bus-powered, velocity sensitive, cocok untuk produser mobile.'},
  {id:4,emoji:'📕',name:'Buku Panduan Teori Musik & Chord Keyboard',price:85000,orig:120000,cat:'Hobi & Musik',badge:'new',rating:4.9,sold:4200,desc:'Buku wajib untuk pemula musik. Covers teori dasar, notasi balok, chord keyboard lengkap, dan latihan skala.'},
  {id:28,emoji:'🧸',name:'Mainan Edukasi Balok Susun 100pcs Premium',price:120000,orig:180000,cat:'Hobi & Musik',badge:'kids',rating:4.7,sold:8400,desc:'Mainan edukatif anak usia 2-8 tahun. Melatih motorik halus, kreativitas, dan kemampuan spatial.'},

  // HEWAN PELIHARAAN
  {id:5,emoji:'🐟',name:'Royal Canin Indoor Adult Cat Food 2kg',price:125000,orig:150000,cat:'Hewan Peliharaan',badge:'promo',rating:4.9,sold:15800,desc:'Makanan kucing premium untuk kucing indoor. Formula khusus mengurangi bau kotoran, menjaga berat badan ideal dan bulu lebat.'},
  {id:6,emoji:'🎒',name:'Tas Ransel Kucing Astronot Transparan',price:185000,orig:250000,cat:'Hewan Peliharaan',badge:'hot',rating:4.8,sold:7300,desc:'Carrier kucing unik berbentuk astronot. Kubah transparan 180°, ventilasi optimal, kapasitas kucing hingga 5kg.'},
  {id:7,emoji:'🐈',name:'Cat Tree Tower Premium Bertingkat 150cm',price:450000,orig:600000,cat:'Hewan Peliharaan',badge:'best',rating:4.7,sold:2100,desc:'Pohon garukan kucing 5 level. Material sisal alami, platform bulu lembut, hammock, dan gantungan mainan.'},
  {id:8,emoji:'💊',name:'Viterna Plus Vitamin & Suplemen Kucing',price:95000,orig:125000,cat:'Hewan Peliharaan',badge:'kesehatan',rating:4.9,sold:5400,desc:'Suplemen vitamin lengkap A, B, C, D, E untuk kucing. Meningkatkan imunitas, nafsu makan, dan kilap bulu.'},
  {id:29,emoji:'🐾',name:'Pasir Kucing Bentonite Wangi Kopi 10L',price:45000,orig:60000,cat:'Hewan Peliharaan',badge:'hot',rating:4.8,sold:22000,desc:'Pasir bentonite gumpal kuat dengan wangi kopi. Efektif menetralisir bau, debu minimal, tahan lama 4 minggu.'},

  // PROPERTI
  {id:9,emoji:'🏡',name:'Tanah & Bangunan SHM 380m² (Padang)',price:1500000000,orig:1650000000,cat:'Properti',badge:'investasi',rating:5.0,sold:2,desc:'Investasi properti super strategis di Tunggul Hitam, Padang. Luas 380m², SHM. Terdiri dari: 1 rumah induk, 2 rumah kontrakan, kos 4 pintu. Passive income total ±Rp8jt/bulan. Lokasi strategis akses mudah.'},
];

// ═══════════════════════════════════════
//  STATE MANAGEMENT
// ═══════════════════════════════════════
let cart = JSON.parse(localStorage.getItem('sn_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('sn_wish')) || [];
let currentUser = localStorage.getItem('sn_user') || null;
let activeCat = 'Semua';
let activeProducts = [...DB];
let displayCount = 0;
const PER_PAGE = 12;
let selectedPay = 'whatsapp';
let pendingOrderData = null;

const WHATSAPP_NO = '6285129787175';

// ═══════════════════════════════════════
//  UTILITIES
// ═══════════════════════════════════════
const fmt = n => 'Rp' + n.toLocaleString('id-ID');
const disc = (p,o) => Math.round((1-p/o)*100);
const totalCart = () => cart.reduce((s,i) => s + i.price * i.qty, 0);
const totalItems = () => cart.reduce((s,i) => s + i.qty, 0);

function toast(msg, type='success', duration=3500) {
  const icons = {success:'✅',error:'❌',info:'ℹ️',warn:'⚠️'};
  const wrap = document.getElementById('toast-wrap');
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<span class="toast-icon">${icons[type]||'✅'}</span><span class="toast-msg">${msg}</span><button class="toast-close" onclick="this.parentElement.remove()">✕</button>`;
  wrap.appendChild(el);
  setTimeout(() => {
    el.style.transition = '.3s';
    el.style.opacity = '0';
    el.style.transform = 'translateX(110%)';
    setTimeout(() => el.remove(), 320);
  }, duration);
}

// ═══════════════════════════════════════
//  THEME
// ═══════════════════════════════════════
if (localStorage.getItem('sn_theme') === 'dark') {
  document.body.classList.add('dark');
  document.getElementById('themeIcon').textContent = '☀️';
}
function toggleTheme() {
  document.body.classList.toggle('dark');
  const dark = document.body.classList.contains('dark');
  localStorage.setItem('sn_theme', dark ? 'dark' : 'light');
  document.getElementById('themeIcon').textContent = dark ? '☀️' : '🌙';
}

// ═══════════════════════════════════════
//  COUNTDOWN TIMER
// ═══════════════════════════════════════
function initCountdown() {
  let key = 'sn_flash_end';
  let end = parseInt(localStorage.getItem(key)) || 0;
  if (!end || end < Date.now()) {
    end = Date.now() + 6 * 3600 * 1000;
    localStorage.setItem(key, end);
  }
  function tick() {
    const diff = end - Date.now();
    if (diff <= 0) { localStorage.removeItem(key); initCountdown(); return; }
    const h = Math.floor(diff/3600000);
    const m = Math.floor((diff%3600000)/60000);
    const s = Math.floor((diff%60000)/1000);
    document.getElementById('cdH').textContent = String(h).padStart(2,'0');
    document.getElementById('cdM').textContent = String(m).padStart(2,'0');
    document.getElementById('cdS').textContent = String(s).padStart(2,'0');
  }
  tick();
  setInterval(tick, 1000);
}
initCountdown();

// ═══════════════════════════════════════
//  FILTER & SEARCH
// ═══════════════════════════════════════
function setCategory(cat, el) {
  activeCat = cat;
  document.querySelectorAll('.cat-link').forEach(e => e.classList.remove('active'));
  if (el) el.classList.add('active');
  document.getElementById('searchInput').value = '';
  applyFilters();
}

function handleSearch(e) {
  if (e.key === 'Enter') doSearch();
}

function doSearch() {
  applyFilters();
  document.querySelector('.content').scrollIntoView({behavior:'smooth',block:'start'});
}

function applyFilters() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  const minP = parseInt(document.getElementById('minPrice').value) || 0;
  const maxP = parseInt(document.getElementById('maxPrice').value) || Infinity;
  const rating = parseFloat(document.querySelector('input[name="ratingFilter"]:checked').value);
  const sort = document.getElementById('sortSelect').value;

  let filtered = DB.filter(p => {
    const matchCat = activeCat === 'Semua' || p.cat === activeCat;
    const matchQ = !q || p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    const matchPrice = p.price >= minP && p.price <= maxP;
    const matchRating = p.rating >= rating;
    return matchCat && matchQ && matchPrice && matchRating;
  });

  if (sort === 'termurah') filtered.sort((a,b) => a.price - b.price);
  else if (sort === 'termahal') filtered.sort((a,b) => b.price - a.price);
  else if (sort === 'terbaru') filtered.sort((a,b) => b.id - a.id);
  else if (sort === 'rating') filtered.sort((a,b) => b.rating - a.rating);
  else filtered.sort((a,b) => b.sold - a.sold);

  activeProducts = filtered;
  displayCount = 0;

  let title = activeCat === 'Semua' ? '✨ Semua Produk' : `📦 ${activeCat}`;
  if (q) title = `🔍 Hasil: "${q}"`;
  document.getElementById('gridTitle').textContent = title;
  document.getElementById('gridCount').textContent = `${filtered.length} produk ditemukan`;
  document.getElementById('productGrid').innerHTML = '';

  loadMore();
}

function loadMore() {
  const grid = document.getElementById('productGrid');
  const slice = activeProducts.slice(displayCount, displayCount + PER_PAGE);

  if (activeProducts.length === 0) {
    grid.innerHTML = `<div class="empty-state"><div class="es-icon">🔍</div><h3>Produk Tidak Ditemukan</h3><p>Coba kata kunci atau filter yang berbeda.</p></div>`;
    document.getElementById('loadMoreWrap').style.display = 'none';
    return;
  }

  slice.forEach(p => {
    const isWish = wishlist.includes(p.id);
    const d = disc(p.price, p.orig);
    const div = document.createElement('div');
    div.className = 'p-card';
    div.innerHTML = `
      <div class="p-card-img">
        ${p.emoji}
        <span class="p-badge ${p.badge}">${p.badge.toUpperCase()}</span>
        <button class="p-wish ${isWish?'active':''}" onclick="event.stopPropagation();toggleWish(${p.id},this)">${isWish?'❤️':'🤍'}</button>
      </div>
      <div class="p-body">
        <div class="p-cat">${p.cat}</div>
        <div class="p-name">${p.name}</div>
        <div class="p-price">${fmt(p.price)}</div>
        <div class="p-orig">${fmt(p.orig)}</div>
        <div class="p-disc">Hemat ${d}%</div>
        <div class="p-stats"><span>⭐ ${p.rating}</span><span>Terjual ${p.sold >= 1000 ? (p.sold/1000).toFixed(1)+'rb' : p.sold}</span></div>
        <button class="btn-add" onclick="event.stopPropagation();addToCart(${p.id})">+ Keranjang</button>
      </div>
    `;
    div.addEventListener('click', () => openQV(p.id));
    grid.appendChild(div);
  });

  displayCount += slice.length;
  document.getElementById('loadMoreWrap').style.display = displayCount < activeProducts.length ? 'block' : 'none';
}

function resetPage() {
  document.getElementById('searchInput').value = '';
  document.getElementById('minPrice').value = '';
  document.getElementById('maxPrice').value = '';
  document.querySelector('input[name="ratingFilter"]').checked = true;
  activeCat = 'Semua';
  document.querySelectorAll('.cat-link').forEach((e,i) => { if(i===0) e.classList.add('active'); else e.classList.remove('active'); });
  applyFilters();
}

function resetFilters() {
  document.getElementById('minPrice').value = '';
  document.getElementById('maxPrice').value = '';
  document.querySelector('input[name="ratingFilter"]').checked = true;
  document.getElementById('sortSelect').value = 'populer';
  applyFilters();
  toast('Filter direset!', 'info');
}

// ═══════════════════════════════════════
//  PANELS / OVERLAY
// ═══════════════════════════════════════
function openOverlay() { document.getElementById('overlay').classList.add('active'); }
function closeAll() {
  document.getElementById('overlay').classList.remove('active');
  document.getElementById('cartPanel').classList.remove('open');
  document.getElementById('wishPanel').classList.remove('open');
}

function openCart() { renderCart(); openOverlay(); document.getElementById('cartPanel').classList.add('open'); }
function openWishlist() { renderWishlist(); openOverlay(); document.getElementById('wishPanel').classList.add('open'); }

// ═══════════════════════════════════════
//  CART
// ═══════════════════════════════════════
function addToCart(id) {
  const p = DB.find(x => x.id === id);
  if (!p) return;
  const exist = cart.find(x => x.id === id);
  if (exist) exist.qty++;
  else cart.push({...p, qty:1});
  saveCart();
  toast(`🛒 ${p.name.substring(0,30)}... ditambahkan!`);
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart();
  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty < 1) { cart = cart.filter(x => x.id !== id); }
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem('sn_cart', JSON.stringify(cart));
  document.getElementById('cartBadge').textContent = totalItems();
}

function renderCart() {
  const body = document.getElementById('cartBody');
  const foot = document.getElementById('cartFoot');
  const total = totalCart();

  if (cart.length === 0) {
    body.innerHTML = `<div style="text-align:center;padding:60px 20px;color:var(--text-muted)"><div style="font-size:64px;margin-bottom:16px;">🛍️</div><div style="font-size:16px;font-weight:800;color:var(--text);">Keranjang Kosong</div><div style="font-size:13px;margin-top:8px;">Yuk mulai belanja!</div></div>`;
    foot.style.display = 'none';
    return;
  }

  body.innerHTML = cart.map(i => `
    <div class="cart-item">
      <div class="ci-img">${i.emoji}</div>
      <div class="ci-info">
        <div class="ci-name">${i.name}</div>
        <div class="ci-price">${fmt(i.price)} <span class="ci-qty">×${i.qty}</span></div>
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="changeQty(${i.id},-1)">−</button>
          <span class="qty-num">${i.qty}</span>
          <button class="qty-btn" onclick="changeQty(${i.id},1)">+</button>
        </div>
      </div>
      <button class="btn-rm" onclick="removeFromCart(${i.id})">🗑</button>
    </div>
  `).join('');

  document.getElementById('cartTotalText').textContent = fmt(total);
  foot.style.display = 'block';
}

// ═══════════════════════════════════════
//  WISHLIST
// ═══════════════════════════════════════
function toggleWish(id, btn) {
  if (!currentUser) { toast('Silakan masuk akun terlebih dahulu!', 'warn'); openModal('loginModal'); return; }
  const idx = wishlist.indexOf(id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    if (btn) { btn.textContent = '🤍'; btn.classList.remove('active'); }
    toast('Dihapus dari wishlist', 'info');
  } else {
    wishlist.push(id);
    if (btn) { btn.textContent = '❤️'; btn.classList.add('active'); }
    toast('❤️ Disimpan ke wishlist!');
  }
  localStorage.setItem('sn_wish', JSON.stringify(wishlist));
  document.getElementById('wishBadge').textContent = wishlist.length;
}

function renderWishlist() {
  const body = document.getElementById('wishBody');
  if (wishlist.length === 0) {
    body.innerHTML = `<div style="text-align:center;padding:60px 20px;color:var(--text-muted)"><div style="font-size:64px;margin-bottom:16px;">💔</div><div style="font-size:16px;font-weight:800;color:var(--text);">Wishlist Kosong</div><div style="font-size:13px;margin-top:8px;">Simpan produk favorit di sini!</div></div>`;
    return;
  }
  body.innerHTML = wishlist.map(id => {
    const p = DB.find(x => x.id === id);
    if (!p) return '';
    return `
      <div class="cart-item">
        <div class="wi-img">${p.emoji}</div>
        <div class="ci-info">
          <div class="ci-name">${p.name}</div>
          <div class="ci-price">${fmt(p.price)}</div>
          <button class="btn-add" style="margin-top:10px;padding:8px;" onclick="addToCart(${p.id})">🛒 Tambah Keranjang</button>
        </div>
        <button class="btn-rm" onclick="toggleWish(${p.id}); renderWishlist();">✕</button>
      </div>
    `;
  }).join('');
}

// ═══════════════════════════════════════
//  AUTH
// ═══════════════════════════════════════
function openAuth() {
  closeAll();
  if (currentUser) {
    document.getElementById('profName').textContent = `Halo, ${currentUser}! 👋`;
    document.getElementById('profCartCount').textContent = totalItems();
    document.getElementById('profWishCount').textContent = wishlist.length;
    openModal('profileModal');
  } else {
    openModal('loginModal');
  }
}

function doLogin() {
  const name = document.getElementById('loginName').value.trim();
  const pass = document.getElementById('loginPass').value.trim();
  if (!name) { toast('Nama pengguna tidak boleh kosong!', 'error'); return; }
  if (!pass || pass.length < 3) { toast('Kata sandi minimal 3 karakter!', 'error'); return; }
  currentUser = name;
  localStorage.setItem('sn_user', name);
  document.getElementById('userLabel').textContent = name.split(' ')[0];
  document.getElementById('loginName').value = '';
  document.getElementById('loginPass').value = '';
  closeModal('loginModal');
  toast(`🎉 Selamat datang, ${name}!`);
}

function doLogout() {
  currentUser = null;
  localStorage.removeItem('sn_user');
  document.getElementById('userLabel').textContent = 'Masuk';
  closeModal('profileModal');
  toast('Anda telah keluar akun.', 'info');
}

// ═══════════════════════════════════════
//  QUICK VIEW
// ═══════════════════════════════════════
function openQV(id) {
  const p = DB.find(x => x.id === id);
  if (!p) return;
  const isWish = wishlist.includes(p.id);
  const d = disc(p.price, p.orig);

  const reviews = [
    { user:'Ahmad F.', stars:'⭐⭐⭐⭐⭐', text:'Barang sampai aman & sesuai deskripsi. Kualitas sangat memuaskan, worth it banget! Packing rapi, pengiriman cepat.' },
    { user:'Siti R.', stars:'⭐⭐⭐⭐⭐', text:'Sudah 3x beli di sini, selalu puas. Seller responsif, produk original 100%. Highly recommended!' },
    { user:'Budi S.', stars:'⭐⭐⭐⭐', text:'Produk sesuai ekspektasi. Pengiriman 2 hari sampai. Akan repeat order lagi.' },
  ];

  document.getElementById('qvContent').innerHTML = `
    <button class="modal-close" onclick="closeModal('qvModal')">✕</button>
    <div class="qv-img-wrap">${p.emoji}</div>
    <div style="display:flex;flex-direction:column;gap:0;overflow-y:auto;max-height:80vh;padding-right:4px;">
      <div class="qv-cat">${p.cat}</div>
      <div class="qv-name">${p.name}</div>
      <div class="qv-pricing">
        <span class="qv-price">${fmt(p.price)}</span>
        <div style="display:flex;flex-direction:column;gap:2px;">
          <span class="qv-orig">${fmt(p.orig)}</span>
          <span class="qv-disc">Hemat ${d}%</span>
        </div>
      </div>
      <div class="qv-meta">
        <div>⭐ <strong>${p.rating}</strong> <span>Rating</span></div>
        <div>📦 <strong>${p.sold >= 1000 ? (p.sold/1000).toFixed(1)+'rb' : p.sold}</strong> <span>Terjual</span></div>
      </div>
      <div class="qv-desc">${p.desc}</div>
      <div class="reviews">
        <div class="review-title">💬 Ulasan Pembeli</div>
        ${reviews.map(r => `<div class="review-item"><div class="review-user">${r.user} <span style="color:#F59E0B">${r.stars}</span></div><div class="review-text">"${r.text}"</div></div>`).join('')}
      </div>
      <div class="qv-actions">
        <button class="btn-qv-cart" onclick="addToCart(${p.id}); closeModal('qvModal')">🛒 Tambah ke Keranjang</button>
        <button class="btn-qv-wish ${isWish?'active':''}" onclick="toggleWish(${p.id}, this)">${isWish?'❤️':'🤍'}</button>
      </div>
    </div>
  `;
  openModal('qvModal');
}

// ═══════════════════════════════════════
//  CHECKOUT
// ═══════════════════════════════════════
function openCheckout() {
  if (cart.length === 0) { toast('Keranjang masih kosong!', 'error'); return; }
  if (!currentUser) { toast('Harap masuk akun terlebih dahulu!', 'warn'); openAuth(); return; }
  closeAll();

  document.getElementById('ckName').value = currentUser;
  document.getElementById('ckPhone').value = '';
  document.getElementById('ckAddress').value = '';
  document.getElementById('ckNote').value = '';
  renderCheckoutSummary();
  openModal('checkoutModal');
}

function renderCheckoutSummary() {
  const subtotal = totalCart();
  const fee = 2500;
  const total = subtotal + fee;

  document.getElementById('ckItems').innerHTML = cart.map(i =>
    `<div class="sum-item"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:60%;display:block;">${i.qty}× ${i.name}</span><span style="flex-shrink:0;font-weight:700;">${fmt(i.price*i.qty)}</span></div>`
  ).join('');

  document.getElementById('ckSubtotal').textContent = fmt(subtotal);
  document.getElementById('ckTotal').textContent = fmt(total);
}

function selectPay(method, el) {
  selectedPay = method;
  document.querySelectorAll('.pay-opt').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
}

function processPayment() {
  const name = document.getElementById('ckName').value.trim();
  const phone = document.getElementById('ckPhone').value.trim();
  const address = document.getElementById('ckAddress').value.trim();
  const note = document.getElementById('ckNote').value.trim();

  if (!name) { toast('Nama penerima harus diisi!', 'error'); return; }
  if (!phone) { toast('Nomor HP/WhatsApp harus diisi!', 'error'); return; }
  if (!address) { toast('Alamat pengiriman harus diisi!', 'error'); return; }

  const subtotal = totalCart();
  const total = subtotal + 2500;

  pendingOrderData = { name, phone, address, note, total };

  if (selectedPay === 'whatsapp') {
    doWhatsAppPayment(name, phone, address, note, total);
  } else if (selectedPay === 'qris') {
    closeModal('checkoutModal');
    document.getElementById('qrisAmount').textContent = fmt(total);
    openModal('qrisModal');
  } else {
    // COD
    doCODPayment(name, phone, address, note, total);
  }
}

function buildWAMessage(name, phone, address, note, total) {
  const lines = ['*🛒 PESANAN BARU — ShopNow*', '─────────────────────', ''];
  cart.forEach((i, idx) => {
    lines.push(`*${idx+1}. ${i.name}*`);
    lines.push(`   Qty: ${i.qty} × ${fmt(i.price)} = ${fmt(i.price*i.qty)}`);
    lines.push('');
  });
  lines.push('─────────────────────');
  lines.push(`*Subtotal:* ${fmt(totalCart())}`);
  lines.push(`*Biaya Layanan:* ${fmt(2500)}`);
  lines.push(`*Total Bayar:* ${fmt(total)}`);
  lines.push('');
  lines.push('─────────────────────');
  lines.push('*📦 DATA PENGIRIMAN*');
  lines.push(`Nama: ${name}`);
  lines.push(`HP/WA: ${phone}`);
  lines.push(`Alamat: ${address}`);
  if (note) lines.push(`Catatan: ${note}`);
  lines.push('');
  lines.push(`*💳 Metode Bayar:* Transfer Bank / E-Wallet`);
  lines.push('─────────────────────');
  lines.push('Mohon konfirmasi pesanan ini. Terima kasih! 🙏');
  return lines.join('\n');
}

function doWhatsAppPayment(name, phone, address, note, total) {
  const msg = buildWAMessage(name, phone, address, note, total);
  const url = `https://wa.me/${WHATSAPP_NO}?text=${encodeURIComponent(msg)}`;

  closeModal('checkoutModal');
  clearCart();

  document.getElementById('successMsg').innerHTML = `
    <strong>${name}</strong>, pesanan Anda akan segera dikonfirmasi.<br>
    WhatsApp terbuka otomatis untuk mengirim detail pesanan ke admin kami.<br><br>
    Jika tidak terbuka, <a href="${url}" target="_blank" style="color:var(--primary);font-weight:800;">klik di sini</a>.
  `;
  openModal('successModal');

  setTimeout(() => { window.open(url, '_blank'); }, 800);
  toast('🎉 Pesanan dikirim ke WhatsApp Admin!', 'success', 5000);
}

function doCODPayment(name, phone, address, note, total) {
  const lines = [
    '*📦 PESANAN COD — ShopNow*',
    '─────────────────────',
    '',
  ];
  cart.forEach((i, idx) => {
    lines.push(`*${idx+1}. ${i.name}*`);
    lines.push(`   Qty: ${i.qty} × ${fmt(i.price)} = ${fmt(i.price*i.qty)}`);
    lines.push('');
  });
  lines.push('─────────────────────');
  lines.push(`*Total COD:* ${fmt(total)}`);
  lines.push('');
  lines.push('*📦 DATA PENGIRIMAN*');
  lines.push(`Nama: ${name}`);
  lines.push(`HP/WA: ${phone}`);
  lines.push(`Alamat: ${address}`);
  if (note) lines.push(`Catatan: ${note}`);
  lines.push('');
  lines.push('*💳 Metode:* Bayar di Tempat (COD)');
  lines.push('─────────────────────');
  lines.push('Mohon konfirmasi & segera diproses. Terima kasih! 🙏');

  const msg = lines.join('\n');
  const url = `https://wa.me/${WHATSAPP_NO}?text=${encodeURIComponent(msg)}`;

  closeModal('checkoutModal');
  clearCart();

  document.getElementById('successMsg').innerHTML = `
    <strong>${name}</strong>, pesanan COD Anda berhasil dibuat!<br>
    Detail pesanan dikirim ke WhatsApp admin untuk segera diproses.<br><br>
    Bayar saat barang tiba di tangan Anda 🚚
  `;
  openModal('successModal');
  setTimeout(() => { window.open(url, '_blank'); }, 800);
  toast('🚚 Pesanan COD berhasil dibuat!', 'success', 5000);
}

function confirmQRIS() {
  if (!pendingOrderData) return;
  const { name, phone, address, note, total } = pendingOrderData;

  const lines = [
    '*💳 PEMBAYARAN QRIS — ShopNow*',
    '─────────────────────',
    '',
  ];
  cart.forEach((i, idx) => {
    lines.push(`*${idx+1}. ${i.name}*`);
    lines.push(`   Qty: ${i.qty} × ${fmt(i.price)} = ${fmt(i.price*i.qty)}`);
    lines.push('');
  });
  lines.push('─────────────────────');
  lines.push(`*Total Bayar QRIS:* ${fmt(total)}`);
  lines.push('');
  lines.push('*📦 DATA PENGIRIMAN*');
  lines.push(`Nama: ${name}`);
  lines.push(`HP/WA: ${phone}`);
  lines.push(`Alamat: ${address}`);
  if (note) lines.push(`Catatan: ${note}`);
  lines.push('');
  lines.push('*💳 Metode:* QRIS (Sudah Bayar)');
  lines.push('─────────────────────');
  lines.push('Harap konfirmasi bukti pembayaran QRIS. Terima kasih! 🙏');

  const msg = lines.join('\n');
  const url = `https://wa.me/${WHATSAPP_NO}?text=${encodeURIComponent(msg)}`;

  closeModal('qrisModal');
  clearCart();

  document.getElementById('successMsg').innerHTML = `
    <strong>${name}</strong>, terima kasih telah membayar via QRIS!<br>
    WhatsApp terbuka untuk mengirim bukti pembayaran ke admin kami.<br><br>
    Pesanan akan segera diproses setelah konfirmasi. 📦
  `;
  openModal('successModal');
  setTimeout(() => { window.open(url, '_blank'); }, 800);
  toast('✅ Pembayaran QRIS dikonfirmasi!', 'success', 5000);
}

function clearCart() {
  cart = [];
  localStorage.setItem('sn_cart', JSON.stringify(cart));
  document.getElementById('cartBadge').textContent = '0';
}

// ═══════════════════════════════════════
//  MODAL HELPERS
// ═══════════════════════════════════════
function openModal(id) { document.getElementById(id).classList.add('active'); }
function closeModal(id) { document.getElementById(id).classList.remove('active'); }

// Close modal on backdrop click
document.querySelectorAll('.modal').forEach(m => {
  m.addEventListener('click', e => {
    if (e.target === m) closeModal(m.id);
  });
});

// ═══════════════════════════════════════
//  INIT
// ═══════════════════════════════════════
function init() {
  if (currentUser) document.getElementById('userLabel').textContent = currentUser.split(' ')[0];
  document.getElementById('cartBadge').textContent = totalItems();
  document.getElementById('wishBadge').textContent = wishlist.length;
  applyFilters();
}

init();
