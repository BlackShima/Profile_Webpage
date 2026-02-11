// Event 1: แจ้งเตือนเมื่อกดปุ่ม Contact
document.querySelector('.btn-primary').addEventListener('click', function() {
    alert('กำลังเปิดแอปอีเมลเพื่อติดต่อผมครับ!');
});

// Event 2: เปลี่ยนสี Navbar เมื่อ Scroll
window.onscroll = function() {
    let nav = document.querySelector('.navbar');
    if (window.pageYOffset > 100) {
        nav.style.opacity = "0.9";
    } else {
        nav.style.opacity = "1";
    }
};

// เพิ่ม Event อื่นๆ เช่น Hover effect, Dark mode toggle, หรือปุ่ม Scroll to Top