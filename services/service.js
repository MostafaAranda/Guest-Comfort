
// // ~======== الحصول على جميع الأزرار التي تفتح النموذج =======
// var openFormButtons = document.querySelectorAll('.book-btn');

// //~======== إضافة  حدث لكل زر=======
// openFormButtons.forEach(function(button) {
//     button.addEventListener('click', function() {
//         var formContainer = document.getElementById('form-container');
//         formContainer.classList.toggle('hidden');
//     });
// });


// الحصول على جميع الأزرار التي تفتح النموذج
var openFormButtons = document.querySelectorAll('.book-btn');
var formContainer = document.getElementById('form-container');

// إضافة مستمع حدث لكل زر
openFormButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        formContainer.classList.toggle('show'); // تبديل كلاس "show" لإظهار أو إخفاء النموذج
    });
});

// إضافة مستمع حدث لإغلاق النموذج عند النقر خارج النموذج
window.addEventListener('click', function(event) {
    if (event.target === formContainer) {
        formContainer.classList.remove('show');
    }
});


// ~ ========> صفحة التفضيلات (preferecnes) <=======

document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('fieldset');

    forms.forEach(fieldset => {
        const checkboxes = fieldset.querySelectorAll('input[type="checkbox"]');

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    checkboxes.forEach(box => {
                        if (box !== this) {
                            box.checked = false;
                        }
                    });
                }
            });
        });
    });
});


