const tiltCards = document.querySelectorAll(".tilt");
const chips = document.querySelectorAll(".chip");

tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 6;
        const rotateX = ((y / rect.height) - 0.5) * -6;

        card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
});

chips.forEach((chip) => {
    chip.addEventListener("click", () => {
        chip.classList.toggle("active");
    });
});
