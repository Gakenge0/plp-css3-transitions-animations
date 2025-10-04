/* =========================
   Global Variables
========================= */
let clickCount = 0;

/* =========================
   Counter Box
========================= */
function updateCounter() {
    clickCount++;
    const box = document.getElementById('counter-box');
    box.textContent = clickCount;
    box.style.backgroundColor = `hsl(${clickCount*40 % 360}, 70%, 50%)`;
    box.style.transform = `scale(${1 + clickCount*0.1})`;
}

/* =========================
   Bubble Function
========================= */
function createBubble() {
    const container = document.getElementById('bubble-container');
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = Math.random() * 90 + 'vw';
    const size = Math.random() * 40 + 20;
    bubble.style.width = bubble.style.height = size + 'px';
    container.appendChild(bubble);
    setTimeout(() => bubble.remove(), 5000);
}

/* =========================
   Modal Functions
========================= */
function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
    modal.classList.add('show');
}
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
    setTimeout(() => modal.style.display='none', 500);
}

/* =========================
   Card Flip on Click
========================= */
const card = document.querySelector('#card1 .card');
card.addEventListener('click', () => card.classList.toggle('flipped'));

/* =========================
   Particle Trail
========================= */
document.addEventListener('mousemove', e => {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 600);
});

/* =========================
   Event Listeners
========================= */
document.getElementById('counter-btn').addEventListener('click', updateCounter);
document.getElementById('bubble-btn').addEventListener('click', createBubble);
document.getElementById('modal-btn').addEventListener('click', showModal);
document.getElementById('close-modal').addEventListener('click', closeModal);
