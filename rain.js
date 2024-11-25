// Yağmur Efekti JavaScript
const numOfRaindrops = 100; // Yağmur damlası sayısı
const rain = document.getElementById('rain');

function createRain() {
    for (let i = 0; i < numOfRaindrops; i++) {
        let raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = `${Math.random() * window.innerWidth}px`;
        raindrop.style.animationDuration = `${Math.random() * 1 + 2}s`;
        raindrop.style.animationDelay = `${Math.random() * 1}s`;
        rain.appendChild(raindrop);
    }
}

// Yağmur damlası stilini tanımla
const style = document.createElement('style');
style.innerHTML = `
    .raindrop {
        position: absolute;
        top: -10px;
        width: 2px;
        height: 10px;
        background-color: rgba(255, 255, 255, 0.7);
        animation-name: fall;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    @keyframes fall {
        100% {
            top: 100vh;
        }
    }
`;
document.head.appendChild(style);

// Yağmur fonksiyonunu başlat
createRain();
