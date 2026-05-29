document.addEventListener('DOMContentLoaded', function () {
    const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
    const paymentDetails = document.querySelectorAll('.payment-details');
    const paymentForm = document.getElementById('paymentForm');

    paymentMethods.forEach(method => {
        method.addEventListener('change', function () {
            paymentDetails.forEach(detail => {
                detail.style.display = 'none';
            });

            const selectedPaymentMethod = document.querySelector(`.payment-details.${this.value}`);
            if (selectedPaymentMethod) {
                selectedPaymentMethod.style.display = 'block';
            }
        });
    });

    paymentForm.addEventListener('submit', function (event) {
        event.preventDefault(); // منع الإرسال الافتراضي للنموذج
        const confirmation = confirm('هل أنت متأكد من إتمام عملية الدفع؟');
        if (confirmation) {
            paymentForm.submit(); // إرسال النموذج إذا أكد المستخدم
        }
    });
});

