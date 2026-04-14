document.addEventListener('DOMContentLoaded', () => {

  // ===== NOMOR WA BISNIS KAMU =====
  const NOMOR_WHATSAPP = "6285129787175"; 

  // 1. DATABASE PRODUK
  const db = [
    { id:1, emoji:'📱', name:'Apple iPhone 15 Pro Max 256GB', price:22999000, orig:24999000, cat:'Elektronik', badge:'HOT', rating:4.9, sold:1200 },
    { id:2, emoji:'💻', name:'MacBook Air M2 Chip 8GB/256GB', price:17599000, orig:19999000, cat:'Elektronik', badge:'SALE', rating:4.8, sold:2100 },
    { id:3, emoji:'🎧', name:'Sony WH-1000XM5 Headphone', price:4899000, orig:5999000, cat:'Elektronik', badge:'PRO', rating:4.9, sold:3400 },
    { id:4, emoji:'🧴', name:'Skintific 5X Ceramide Barrier Moisture Gel', price:139000, orig:169000, cat:'Kecantikan', badge:'BEST', rating:4.9, sold:45200 },
    { id:5, emoji:'💄', name:'Wardah Exclusive Matte Lip Cream', price:65000, orig:89000, cat:'Kecantikan', badge:'SALE', rating:4.8, sold:89100 },
    { id:6, emoji:'✨', name:'Somethinc Niacinamide Sabi Beet Serum', price:115000, orig:145000, cat:'Kecantikan', badge:'HOT', rating:4.7, sold:32100 },
    { id:7, emoji:'👟', name:'Nike Air Force 1 Original White', price:1549000, orig:1799000, cat:'Fashion', badge:'HYPE', rating:4.8, sold:15000 },
    { id:8, emoji:'👗', name:'ZARA Midi Dress Floral Summer', price:599000, orig:899000, cat:'Fashion', badge:'NEW', rating:4.7, sold:4300 },
    { id:9, emoji:'🎹', name:'Yamaha P-45 Digital Piano 88-Keys', price:7500000, orig:8200000, cat:'Hobi & Musik', badge:'PRO', rating:4.9, sold:1450 },
    { id:10, emoji:'🎸', name:'Yamaha F310 Acoustic Guitar', price:1850000, orig:2100000, cat:'Hobi & Musik', badge:'BEST', rating:4.8, sold:3200 }
  ];

  // 2. STATE APLIKASI
  let cart = JSON.parse(localStorage.getItem('shopCart')) || [];
  let wishlist = JSON.parse(localStorage.getItem('shopWishlist')) || [];
  let userName = localStorage.getItem('shopUser') || null;
  let activeCat = 'Semua';

  const formatRp = (num) => 'Rp' + num.toLocaleString('id-ID');

  // 3. RENDER PRODUK
  window.renderGrid = (dataArray) => {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';

    if (dataArray.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);"><div style="font-size: 60px; margin-bottom:15px;">🔍</div><h3 style="font-weight:800;">Produk tidak ditemukan</h3><p style="margin-top:10px;">Coba gunakan kata kunci yang berbeda.</p></div>`;
      return;
    }

    dataArray.forEach(p => {
      const isWish = wishlist.includes(p.id);
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-img">
          ${p.emoji}
          <span class="card-badge">${p.badge}</span>
          <button class="card-wishlist" style="color: ${isWish ? 'var(--danger)' : 'var(--text-muted)'};" onclick="event.stopPropagation(); toggleWishlist(${p.id})">
            ${isWish ? '❤️' : '🤍'}
          </button>
        </div>
        <div class="card-body">
          <div class="card-cat">${p.cat}</div>
          <div class="card-name">${p.name}</div>
          <div class="card-price">${formatRp(p.price)}</div>
          <div class="card-orig">${formatRp(p.orig)}</div>
          <div class="card-stats"><span>⭐ ${p.rating}</span><span>Terjual ${(p.sold/1000).toFixed(1)}rb</span></div>
          <button class="btn-add" onclick="event.stopPropagation(); addToCart(${p.id})">+ Keranjang</button>
        </div>
      `;
      grid.appendChild(card);
    });
  };

  // 4. SISTEM FILTER
  window.applyFilters = () => {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const minP = parseInt(document.getElementById('minPrice').value) || 0;
    const maxP = parseInt(document.getElementById('maxPrice').value) || Infinity;
    const sortMethod = document.getElementById('sortSelect').value;

    let filtered = db.filter(p => {
      let matchCat = activeCat === 'Semua' || p.cat === activeCat;
      let matchSearch = p.name.toLowerCase().includes(query) || p.cat.toLowerCase().includes(query);
      let matchPrice = p.price >= minP && p.price <= maxP;
      return matchCat && matchSearch && matchPrice;
    });

    if (sortMethod === 'termurah') filtered.sort((a,b) => a.price - b.price);
    else if (sortMethod === 'termahal') filtered.sort((a,b) => b.price - a.price);
    else filtered.sort((a,b) => b.sold - a.sold); 

    document.getElementById('gridTitle').textContent = query ? `Hasil Pencarian: "${query}"` : (activeCat === 'Semua' ? '✨ Rekomendasi Hari Ini' : `Kategori: ${activeCat}`);
    renderGrid(filtered);
  };

  window.setCategory = (cat, element) => {
    activeCat = cat;
    document.querySelectorAll('.cat-link').forEach(el => el.classList.remove('active'));
    if (element) element.classList.add('active');
    document.getElementById('searchInput').value = '';
    applyFilters();
  };

  window.resetUI = () => {
    document.getElementById('searchInput').value = '';
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    setCategory('Semua', document.querySelector('.cat-link'));
  };

  // 5. SISTEM KERANJANG
  window.addToCart = (id) => {
    const p = db.find(x => x.id === id);
    const exist = cart.find(x => x.id === id);
    if(exist) exist.qty++; else cart.push({...p, qty: 1});
    localStorage.setItem('shopCart', JSON.stringify(cart));
    updateCartUI();
    showToast(`🛒 Masuk keranjang: ${p.name}`);
  };

  window.removeFromCart = (id) => {
    cart = cart.filter(x => x.id !== id);
    localStorage.setItem('shopCart', JSON.stringify(cart));
    updateCartUI();
  };

  const updateCartUI = () => {
    document.getElementById('cartBadge').textContent = cart.reduce((sum, item) => sum + item.qty, 0);
    const body = document.getElementById('cartBody');
    const footer = document.getElementById('cartFooter');

    if (cart.length === 0) {
      body.innerHTML = `<div style="text-align:center; padding: 60px 20px; color: var(--text-muted);"><div style="font-size: 60px; margin-bottom:15px;">🛍️</div><div style="font-weight:700;">Keranjangmu Kosong</div></div>`;
      footer.style.display = 'none';
      return;
    }

    footer.style.display = 'block';
    body.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-img">${item.emoji}</div>
        <div class="cart-info">
          <div class="cart-title">${item.name}</div>
          <div style="font-size:15px; font-weight:800; color:var(--primary);">${formatRp(item.price)} <span style="color:var(--text-muted); font-size:12px; font-weight:500;">x ${item.qty}</span></div>
        </div>
        <button class="btn-remove" onclick="removeFromCart(${item.id})">✕</button>
      </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    document.getElementById('cartSummary').innerHTML = `<span>Total Tagihan:</span> <span>${formatRp(total)}</span>`;
  };

  // 6. SISTEM WISHLIST
  window.toggleWishlist = (id) => {
    if (!userName) {
      showToast("Harap masuk akun untuk menyimpan wishlist.", "error");
      openAuthModal();
      return;
    }

    const idx = wishlist.indexOf(id);
    if(idx > -1) {
      wishlist.splice(idx, 1);
      showToast("Dihapus dari wishlist.", "info");
    } else {
      wishlist.push(id);
      showToast("❤️ Disimpan ke wishlist!");
    }
    localStorage.setItem('shopWishlist', JSON.stringify(wishlist));
    updateWishlistUI();
    applyFilters(); 
  };

  const updateWishlistUI = () => {
    document.getElementById('wishBadge').textContent = wishlist.length;
    const body = document.getElementById('wishlistBody');
    if (wishlist.length === 0) {
      body.innerHTML = `<div style="text-align:center; padding: 60px 20px; color: var(--text-muted);"><div style="font-size: 60px; margin-bottom:15px;">💔</div><div style="font-weight:700;">Belum ada impianmu</div></div>`;
      return;
    }

    body.innerHTML = wishlist.map(id => {
      const item = db.find(x => x.id === id);
      return item ? `
        <div class="cart-item">
          <div class="cart-img">${item.emoji}</div>
          <div class="cart-info">
            <div class="cart-title">${item.name}</div>
            <div style="font-size:15px; font-weight:800; color:var(--text);">${formatRp(item.price)}</div>
            <button class="btn-add" style="padding: 6px; margin-top: 8px;" onclick="addToCart(${item.id})">+ Keranjang</button>
          </div>
          <button class="btn-remove" onclick="toggleWishlist(${item.id})">✕</button>
        </div>
      ` : '';
    }).join('');
  };

  // 7. KONTROL OVERLAY & PANEL
  window.openPanel = (panelId) => {
    closeAllPanels();
    document.getElementById('globalOverlay').classList.add('active');
    document.getElementById(panelId).classList.add('open');
  };

  window.closeAllPanels = () => {
    document.getElementById('globalOverlay').classList.remove('active');
    document.getElementById('cartPanel').classList.remove('open');
    document.getElementById('wishlistPanel').classList.remove('open');
  };

  window.closeModal = (id) => {
    document.getElementById(id).classList.remove('active');
  };

  // 8. SISTEM AKUN
  window.openAuthModal = () => {
    closeAllPanels();
    if (userName) {
      document.getElementById('welcomeText').textContent = `Halo, ${userName}!`;
      document.getElementById('profileModal').classList.add('active');
    } else {
      document.getElementById('loginModal').classList.add('active');
    }
  };

  window.processLogin = () => {
    const name = document.getElementById('loginUsername').value.trim();
    if (!name) { showToast("Nama pengguna tidak boleh kosong!", "error"); return; }
    
    userName = name;
    localStorage.setItem('shopUser', userName);
    document.getElementById('userLabel').textContent = userName;
    
    closeModal('loginModal');
    document.getElementById('loginUsername').value = '';
    showToast(`Berhasil masuk! Selamat datang, ${userName}.`);
  };

  window.processLogout = () => {
    userName = null;
    localStorage.removeItem('shopUser');
    document.getElementById('userLabel').textContent = 'Masuk';
    closeModal('profileModal');
    showToast("Anda telah keluar akun.", "info");
  };

  // 9. MODAL CHECKOUT & WHATSAPP
  window.openCheckoutModal = () => {
    if (cart.length === 0) { showToast("Keranjangmu masih kosong!", "error"); return; }
    if (!userName) {
      showToast("Harap masuk akun terlebih dahulu!", "error");
      openAuthModal();
      return;
    }

    closeAllPanels();
    document.getElementById('checkoutName').value = userName;
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    document.getElementById('checkoutTotalText').textContent = formatRp(total);
    
    document.getElementById('checkoutMethod').value = "Transfer Bank";
    toggleQrisView();

    document.getElementById('checkoutModal').classList.add('active');
  };

  window.toggleQrisView = () => {
    const method = document.getElementById('checkoutMethod').value;
    const qrisBox = document.getElementById('qrisContainer');
    if(method === 'QRIS') {
      qrisBox.style.display = 'block';
    } else {
      qrisBox.style.display = 'none';
    }
  };

  window.processPaymentAndSendWA = () => {
    const name = document.getElementById('checkoutName').value.trim();
    const address = document.getElementById('checkoutAddress').value.trim();
    const method = document.getElementById('checkoutMethod').value;
    
    if(!name || !address) { showToast("Mohon lengkapi Nama dan Alamat pengiriman!", "error"); return; }

    let pesan = `Halo *ShopNow*, saya mau pesan nih:\n\n`;
    let totalHarga = 0;
    
    cart.forEach((item, index) => {
      pesan += `${index + 1}. ${item.name}\n   (Qty: ${item.qty}x)\n`;
      totalHarga += (item.price * item.qty);
    });

    pesan += `\n*Total Harga: ${formatRp(totalHarga)}*`;
    pesan += `\n\n*Detail Penerima:*`;
    pesan += `\n👤 Nama: ${name}`;
    pesan += `\n📍 Alamat: ${address}`;
    pesan += `\n💳 Metode Pembayaran: ${method}`;
    
    if(method === 'QRIS') {
      pesan += `\n\n_Note: Saya sudah scan QRIS di website._`;
    }

    const waLink = 'https://api.whatsapp.com/send?phone=' + NOMOR_WHATSAPP + '&text=' + encodeURIComponent(pesan);
    
    window.open(waLink, '_blank');

    closeModal('checkoutModal');
    cart = [];
    localStorage.setItem('shopCart', JSON.stringify(cart));
    updateCartUI();
    showToast(`Mengarahkan ke WhatsApp...`);
  };

  // 10. TEMA (DARK/LIGHT)
  if(localStorage.getItem('shopTheme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('themeIcon').textContent = '☀️';
  }
  
  window.toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('shopTheme', isDark ? 'dark' : 'light');
    document.getElementById('themeIcon').textContent = isDark ? '☀️' : '🌙';
  };

  // 11. TOAST NOTIFICATION
  window.showToast = (msg, type = "success") => {
    const box = document.getElementById('toastBox');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span style="font-size:18px;">${type === 'success' ? '✅' : (type === 'error' ? '❌' : 'ℹ️')}</span> <span>${msg}</span>`;
    box.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(100%)'; setTimeout(() => toast.remove(), 300); }, 3000);
  };

  // INIT DATA SAAT HALAMAN DIBUKA
  if(userName) document.getElementById('userLabel').textContent = userName;
  applyFilters();
  updateCartUI();
  updateWishlistUI();

});
</script>
