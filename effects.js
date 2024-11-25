const rain = document.getElementById('rain');

// Dinamik Yağmur Damlası Oluşturucu
for (let i = 0; i < 150; i++) {
    const drop = document.createElement('div');
    drop.classList.add('raindrop');
    drop.style.left = `${Math.random() * 100}%`;
    drop.style.animationDuration = `${Math.random() * 2 + 1}s`;
    rain.appendChild(drop);
}
