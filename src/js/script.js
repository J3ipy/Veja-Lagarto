document.addEventListener('DOMContentLoaded', () => {
    
    /* --- 1. LÓGICA DO MENU (NAVBAR) --- */
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close');

    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu');
        });
    }

    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu');
        });
    }

    // Função global para fechar menu ao clicar no link (necessário para o HTML chamar)
    window.closeMenu = function() {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu');
    };


    /* --- 2. LÓGICA DOS CARROSSEIS INDEPENDENTES --- */
    // Seleciona todos os carrosseis da página
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        // Variáveis locais para ESTE carrossel específico
        let slideIndex = 0;
        const slides = carousel.querySelectorAll('.map-slide');
        const dots = carousel.querySelectorAll('.dot');
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');

        // Se não houver slides, pula este carrossel
        if(slides.length === 0) return;

        // Função para mostrar o slide correto
        const showSlide = (n) => {
            // Lógica circular (se passar do último, volta pro primeiro)
            if (n >= slides.length) slideIndex = 0;
            if (n < 0) slideIndex = slides.length - 1;

            // Remove a classe 'active' de todos os slides e dots DESTE carrossel
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            // Adiciona a classe 'active' no slide e dot atuais
            slides[slideIndex].classList.add('active');
            if(dots[slideIndex]) {
                dots[slideIndex].classList.add('active');
            }
        };

        // Event Listener: Botão Anterior
        if(prevBtn) {
            prevBtn.addEventListener('click', () => {
                slideIndex--;
                showSlide(slideIndex);
            });
        }

        // Event Listener: Botão Próximo
        if(nextBtn) {
            nextBtn.addEventListener('click', () => {
                slideIndex++;
                showSlide(slideIndex);
            });
        }

        // Event Listener: Bolinhas (Dots)
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                slideIndex = index;
                showSlide(slideIndex);
            });
        });
    });

});