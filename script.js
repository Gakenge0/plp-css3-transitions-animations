/* =========================
   Global Variables
========================= */
let clickCount = 0;

/* =========================
   Counter Box Function
========================= */
function updateCounter() {
    clickCount++;
    const box = document.getElementById('counter-box');
    box.textContent = clickCount;
    
    // Change size & color dynamically
    box.style.backgroundColor = `hsl(${clickCount * 40 % 360}, 70%, 50%)`;
    box.style.transform = `scale(${1 + clickCount * 0.1})`;
}

/* =========================
   Bubble Function
========================= */
function createBubble() {
    const container = document.getElementById('bubble-container');
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = Math.random() * 90 + 'vw';
    bubble.style.width = bubble.style.height = Math.random() * 40 + 20 + 'px';
    container.appendChild(bubble);

    setTimeout(() => bubble.remove(), 5000); // Remove bubble after animation
}

/* =========================
   Background Change Function
========================= */
function changeBackground() {
    const hue = Math.floor(Math.random() * 360);
    document.body.style.background = `hsl(${hue}, 50%, 85%)`;
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
    setTimeout(() => modal.style.display = 'none', 500);
}

/* =========================
   Event Listeners
========================= */
document.getElementById('counter-btn').addEventListener('click', updateCounter);
document.getElementById('bubble-btn').addEventListener('click', createBubble);
document.getElementById('bg-btn').addEventListener('click', changeBackground);
document.getElementById('modal-btn').addEventListener('click', showModal);
document.getElementById('close-modal').addEventListener('click', closeModal);
