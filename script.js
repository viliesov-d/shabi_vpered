// Прокрутка до розділу "Зв'яжіться з нами"
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Сповіщення при натисканні на кнопку "Дізнатися більше"
function learnMore() {
    alert("Більше про нашу школу! Залишайтеся з нами для деталей.");
}

// Перемикання карток викладачів
function toggleTeacherInfo(card) {
    card.classList.toggle('flipped');
}

// Валідація форми зворотного зв’язку
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementsByName('name')[0];
    const email = document.getElementsByName('email')[0];
    const message = document.getElementsByName('message')[0];

    // Перевірка заповненості полів
    if (!name.value || !email.value || !message.value) {
        alert("Заповніть всі поля перед відправкою!");
        return;
    }
    
    // Перевірка коректності email
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email.value)) {
        alert("Введіть коректний email!");
        return;
    }

    // Успішне відправлення
    alert("Ваше повідомлення успішно надіслано! Ми скоро зв'яжемося з вами.");
    
    // Очищення форми після відправлення
    name.value = '';
    email.value = '';
    message.value = '';
});


// Плавна прокрутка до контактного блоку
document.getElementById('scrollToContact').addEventListener('click', function(event) {
    event.preventDefault(); // Зупиняє стандартну поведінку посилання
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});


// Сповіщення при натисканні на кнопку "Дізнатися більше"
function learnMore() {
    alert("Дізнайтеся більше про наші курси! Залишайтеся на зв'язку для деталей.");
}

// Анімація для переходу між відгуками у слайдері
let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function showNextTestimonial() {
    testimonials[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % testimonials.length;
    testimonials[currentSlide].classList.add('active');
}

// Автоматичний перехід між відгуками кожні 5 секунд
setInterval(showNextTestimonial, 5000);

// Валідація та інтерактивна подяка у формі
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementsByName('name')[0];
    const email = document.getElementsByName('email')[0];
    const message = document.getElementsByName('message')[0];
    
    if (!name.value || !email.value || !message.value) {
        alert("Заповніть всі поля перед відправкою!");
        return;
    }
    
    alert(`Дякуємо, ${name.value}! Ваше повідомлення успішно надіслано. Ми зв'яжемося з вами найближчим часом.`);
    
    // Очищення полів після відправлення
    name.value = '';
    email.value = '';
    message.value = '';
});

document.querySelectorAll('.teacher-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

// Отримуємо всі кнопки на картках курсів
const courseButtons = document.querySelectorAll('.course-card button');

// Отримуємо елементи модального вікна
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalDuration = document.getElementById('modal-duration');
const modalPrice = document.getElementById('modal-price');
const closeModal = document.querySelector('.close-btn');

// Дані про курси (можна зробити динамічним)
const courses = [
    {
        title: 'Business English',
        description: 'Поглиблене вивчення ділової англійської мови.',
        duration: 'Тривалість: 4 місяці',
        price: 'Ціна: 13900 грн'
    },
    {
        title: 'Legal English',
        description: 'Юридична англійська для професійної діяльності.',
        duration: 'Тривалість: 2 місяці',
        price: 'Ціна: 7900 грн'
    },
    {
        title: 'Business Communication',
        description: 'Розвиток навичок ділового спілкування.',
        duration: 'Тривалість: 3 місяці',
        price: 'Ціна: 9900 грн'
    }
];

// Додаємо обробник подій до кожної кнопки
courseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Заповнюємо модальне вікно відповідними даними
        modalTitle.textContent = courses[index].title;
        modalDescription.textContent = courses[index].description;
        modalDuration.textContent = courses[index].duration;
        modalPrice.textContent = courses[index].price;

        // Показуємо модальне вікно
        modal.classList.add('show');
    });
});

// Закриваємо модальне вікно
closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
});

// Закриття модального вікна при кліку за межами контенту
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});

function adjustLayout() {
    const width = window.innerWidth;

    if (width <= 768) {
        console.log("Адаптація для мобільних пристроїв");
        // Зміна поведінки кнопок чи елементів
    } else if (width <= 1024) {
        console.log("Адаптація для планшетів");
    } else {
        console.log("Адаптація для десктопів");
    }
}

window.addEventListener('resize', adjustLayout);

