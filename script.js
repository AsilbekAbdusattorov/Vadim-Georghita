document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Сообщение отправлено! Мы скоро с вами свяжемся.');
        // Formani yuborish yoki boshqa amallarni amalga oshirish
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});
