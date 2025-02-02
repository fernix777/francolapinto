// Datos de la trayectoria deportiva
const carreraEvents = [
    {
        año: "2025",
        titulo: "Debut en Fórmula 1",
        descripcion: "Piloto oficial de Williams Racing en la máxima categoría del automovilismo mundial"
    },
    {
        año: "2024",
        titulo: "Piloto de Desarrollo Williams F1",
        descripcion: "Rol clave en el desarrollo del monoplaza y simulador del equipo Williams Racing"
    },
    {
        año: "2023",
        titulo: "Fórmula 2",
        descripcion: "Destacada participación en la categoría antesala de la F1, logrando múltiples podios"
    },
    {
        año: "2022",
        titulo: "Fórmula 3",
        descripcion: "Victorias y podios que lo posicionaron como una de las jóvenes promesas del automovilismo"
    },
    {
        año: "2021",
        titulo: "Fórmula Regional Europea",
        descripcion: "Desarrollo crucial en una de las categorías formativas más competitivas"
    }
];

// Función para cargar la línea de tiempo
function cargarTimelineEvents() {
    const timeline = document.querySelector('.timeline');
    carreraEvents.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.className = 'timeline-event';
        eventElement.innerHTML = `
            <div class="event-date">${event.año}</div>
            <div class="event-content">
                <h3>${event.titulo}</h3>
                <p>${event.descripcion}</p>
            </div>
        `;
        timeline.appendChild(eventElement);
    });
}

// Función para manejar la navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Función para manejar el header sticky
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".header").style.top = "0";
    } else {
        document.querySelector(".header").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

// Hero Carousel
function initHeroCarousel() {
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    
    // Mostrar la primera imagen
    slides[0].classList.add('active');
    
    function showNextSlide() {
        // Ocultar slide actual
        slides[currentSlide].classList.remove('active');
        
        // Calcular siguiente slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Mostrar nuevo slide
        slides[currentSlide].classList.add('active');
    }
    
    // Cambiar slide cada 5 segundos
    setInterval(showNextSlide, 5000);
}

// Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    initHeroCarousel();
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    cargarTimelineEvents();
});
