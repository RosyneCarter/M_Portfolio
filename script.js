document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#projets').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Récupération des valeurs du formulaire
    const prenom = document.getElementById('prenom').value.trim();
    const nom = document.getElementById('nom').value.trim();
    const sujet = document.getElementById('sujet').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation des champs
    if (prenom === '' || nom === '' || sujet === '' || message === '') {
        alert('Veuillez remplir tous les champs.');
    } else {
        // Si tout est valide, afficher un message de succès
        alert('Message envoyé avec succès !');

        // Réinitialiser le formulaire
        document.getElementById('contact-form').reset();
    }
});

// Ajouter un effet de surbrillance sur le lien du menu actif
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});