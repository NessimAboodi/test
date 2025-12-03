document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const filmCards = document.querySelectorAll('.film-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Gérer la classe "active" sur les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 2. Récupérer le filtre cliqué
            const filterValue = button.getAttribute('data-filter');

            // 3. Afficher ou cacher les films
            filmCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === category) {
                    card.style.display = 'block';
                    
                    // Petit bonus : Relancer l'animation d'apparition
                    card.style.animation = 'none';
                    card.offsetHeight; /* force le navigateur à recalculer (reflow) */
                    card.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});