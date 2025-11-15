// Data Management (Array of Object)
const products = [
    { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
    { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
    { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 },
];

const summary = {
    totalProducts: 120,
    totalSales: 85,
    totalRevenue: 12500000 
};

const VALID_EMAIL = "sarahnuramaliaa@gmail.com"; // 
const VALID_PASSWORD = "24090129"; // NIM 24090129


// Fungsi untuk DASHBOARD

function renderDashboardStats() {
    if (!document.getElementById('totalProducts')) return;

    document.getElementById('totalProducts').textContent = summary.totalProducts.toLocaleString('id-ID');
    document.getElementById('totalSales').textContent = summary.totalSales.toLocaleString('id-ID');
    
    // Format mata uang
    const totalRevenueFormatted = summary.totalRevenue.toLocaleString('id-ID');
    document.getElementById('totalRevenue').textContent = `Rp ${totalRevenueFormatted}`;
}

// Fungsi untuk LIST DATA PRODUK

function renderProductList() {
    const tableBody = document.querySelector('#productTable tbody');
    if (!tableBody) return;

    tableBody.innerHTML = ''; 

    products.forEach((product, index) => {
        const row = tableBody.insertRow();
        
        // Data Kolom
        row.insertCell().textContent = index + 1; 
        row.insertCell().textContent = product.name;
        row.insertCell().textContent = product.price.toLocaleString('id-ID');
        row.insertCell().textContent = product.stock;

        // Kolom Aksi
        const actionCell = row.insertCell();
        
        // Tombol Edit
        const editBtn = document.createElement('button');
        editBtn.className = 'action-btn edit';
        editBtn.innerHTML = '<i class="fas fa-pencil-alt"></i>';
        editBtn.addEventListener('click', () => {
            alert(`Edit produk: ${product.name}`);
        });
        
        // Tombol Delete
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'action-btn delete';
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.addEventListener('click', () => {
            if (confirm(`Yakin hapus produk ${product.name} ini?`)) {
                // Hapus baris dari tabel menggunakan DOM remove() method
                row.remove(); 
            
            }
        });
        
        actionCell.appendChild(editBtn);
        actionCell.appendChild(deleteBtn);
    });
}

// Event Listener Utama (DOM dan Event Listener)

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const logoutBtn = document.getElementById('logoutBtn');
    const errorMessage = document.getElementById('errorMessage');

    // 1. Logika Login (index.html)
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim(); 

            errorMessage.textContent = ''; 

            if (!email || !password) {
                errorMessage.textContent = 'Email dan Password tidak boleh kosong.';
                return;
            }

            if (email === VALID_EMAIL && password === VALID_PASSWORD) {
                 alert('Login berhasil'); 
                 localStorage.setItem('isLoggedIn', 'true');
                 window.location.href = 'dashboard.html';
            } else {
                 errorMessage.textContent = 'Email atau Password salah.';
            }
        });
    }

    // 2. Auth Check & Redirect (untuk dashboard.html dan products.html)
    const requiresAuth = window.location.pathname.includes('dashboard.html') || 
                         window.location.pathname.includes('products.html');

    if (requiresAuth && localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'index.html';
        return;
    }

    // 3. Logika Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn');
            window.location.href = 'index.html';
        });
    }
    
    // 4. Panggil Render Fungsi
    if (document.getElementById('totalProducts')) {
        renderDashboardStats();
        // Redirect tombol "Lihat Data Produk"
        const viewProductsBtn = document.getElementById('viewProductsBtn');
        if (viewProductsBtn) {
            viewProductsBtn.addEventListener('click', () => {
                window.location.href = 'products.html'; 
            });
        }
    }
    
    if (document.getElementById('productTable')) {
        renderProductList();
    }
});