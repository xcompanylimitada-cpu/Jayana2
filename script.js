// Smooth scroll para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});

// Animações suaves ao rolar a página
document.addEventListener('DOMContentLoaded', function() {
    // Observador de interseção para animar elementos ao entrarem na viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Selecionar elementos para animar
    const elementsToAnimate = document.querySelectorAll(
        '.hero-text, .pain-point, .learning-item, .module, .included-item, .audience-item'
    );
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
    
    // Adicionar classe inicial para elementos visíveis ao carregar
    setTimeout(() => {
        elementsToAnimate.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add('animate-in');
            }
        });
    }, 500);
    
    // Efeito de hover nos botões (reforço visual)
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Simulação de clique no botão de investimento (para demonstração)
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            // Se não é um link âncora, prevenimos o comportamento padrão
            if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                e.preventDefault();
                
                const originalText = this.textContent;
                this.textContent = 'Redirecionando para o checkout...';
                this.style.opacity = '0.8';
                
                // Simular um redirecionamento após 2 segundos
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.opacity = '1';
                    
                    // Mostrar mensagem de sucesso
                    alert('Em um ambiente real, você seria redirecionado para a página de pagamento segura. Obrigado pelo interesse no curso Proteção & Prosperidade!');
                }, 2000);
            }
        });
    });
});