// تابع برای تغییر حالت دارک و لایت مود
function toggleDarkMode() {
    const body = document.body;
    const darkModeBtn = document.getElementById('dark-mode-btn');
    const icon = darkModeBtn.querySelector('i');

    // تغییر حالت دارک و لایت مود
    body.classList.toggle('dark-mode');

    // تغییر آیکون دکمه
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        // ذخیره وضعیت دارک مود در localStorage
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        // ذخیره وضعیت لایت مود در localStorage
        localStorage.setItem('darkMode', 'disabled');
    }
}

// بررسی وضعیت دارک مود از localStorage هنگام بارگذاری صفحه
window.onload = function() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        const darkModeBtn = document.getElementById('dark-mode-btn');
        const icon = darkModeBtn.querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        document.body.classList.remove('dark-mode');
    }
    // اضافه کردن event listener برای لینک‌های منو بعد از بارگذاری صفحه
    addSmoothScrollListeners();
};

// تابع برای باز و بسته کردن منوی همبرگری
function toggleMenu() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('active');
}

// تابع برای اسکرول به بالا
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// نمایش یا مخفی کردن دکمه اسکرول به بالا بر اساس موقعیت صفحه
window.onscroll = function() {
    const scrollBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// تابع برای اضافه کردن smooth scrolling به لینک‌های منو
function addSmoothScrollListeners() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک

            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // برای اسکرول نرم
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // اسکرول به ابتدای عنصر
                });
                // بستن منو بعد از کلیک
                toggleMenu(); 
            }
        });
    });
}