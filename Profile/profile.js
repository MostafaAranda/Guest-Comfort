function showContent(contentId) {
    // إخفاء جميع الصفحات 
    const contentPages = document.querySelectorAll('.content-page');
    contentPages.forEach(page => page.style.display = 'none');

    // عرض الصفحة اللي عليها الدور
    const selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';
}

// عرض الصفحة الاساسية اول ما افتح الموقع
document.addEventListener('DOMContentLoaded', () => {
    showContent('overview');
});

// // ~===== الصفحة الثالثة (Reservation) =====

// document.getElementById('search-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Search submitted!');
//     // You can add more JavaScript here to handle the form submission
// });