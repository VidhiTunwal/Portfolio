document.addEventListener('DOMContentLoaded', function () {
    const sentence = 'Welcome to my portfolio!!';
    const typedWelcome = document.getElementById('typed-welcome');
    const words = sentence.split(' ');

    
    function appendWordsWithDelay() {
        let typedText = '';
        words.forEach((word, index) => {
            setTimeout(() => {
                typedText += `${word} `;
                typedWelcome.textContent = typedText;

                
                if (typedText.trim() === sentence.trim()) {
                    
                    typedWelcome.classList.remove('word');
                    typedWelcome.classList.add('typed-complete'); 
                }
            }, index * 500); 
        });
    }

        setTimeout(() => {
        appendWordsWithDelay();
    }, 1000); 
});


    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
                alert("Form submitted successfully!");         
this.reset();     
});

    const profileContainer = document.getElementById('profile-container');
    const swipeContents = document.querySelectorAll('.swipe-content');

    
    profileContainer.addEventListener('click', function () {
        profileContainer.classList.toggle('oval');
        swipeContents.forEach(content => {
            content.classList.toggle('swiped');

            const profileImage = document.querySelector(".profile-image");
            profileImage.addEventListener("mouseenter", function () {
                this.style.transform = "scale(1.2)"; 
            });
            profileImage.addEventListener("mouseleave", function () {
                this.style.transform = "scale(1)"; 
            });
        });
    });

    