const starsEl = document.querySelectorAll('.fa-star');
const emojisEl = document.querySelectorAll('.fa-regular');
const colors = ['red', 'orange', 'lightblue', 'lightgreen', 'green'];

starsEl.forEach((starEl, index) => {
    starEl.addEventListener('click', () => {
        updateRating(index)
    });
});

updateRating(2);

function updateRating(index) {
    starsEl.forEach((starEl, ind) => {
        if (ind < index + 1) {
            starEl.classList.add('active');
        } else {
            starEl.classList.remove('active');
        }
    });

    emojisEl.forEach((emojiEl) => {
        emojiEl.style.transform = `translateX(-${index * 50}px)`;
        emojiEl.style.color = colors[index];
    })
}