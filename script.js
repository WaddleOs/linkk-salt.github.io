document.getElementById("shortenBtn").addEventListener("click", function () {
    const urlInput = document.getElementById("urlInput").value;
    if (!urlInput) {
        alert("Lütfen bir URL girin!");
        return;
    }

    // Kısaltma işlemi için API isteği yapılacak
    const apiUrl = `https://ay.live/st/?api=0327a9827dcdb42667cb49f96824030d6d46274c&url=${encodeURIComponent(urlInput)}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('API isteği başarısız oldu');
            }
            return response.text(); // Kısaltılmış URL dönecek
        })
        .then(shortUrl => {
            const resultContainer = document.getElementById("resultContainer");
            document.getElementById("shortUrl").textContent = shortUrl;
            resultContainer.style.display = "block"; // Sonucu göster
        })
        .catch(error => {
            console.error("Kısaltma hatası:", error);
            alert("Bir hata oluştu: " + error.message);
        });
});

// Kopyalama işlevi
document.getElementById("copyBtn").addEventListener("click", function () {
    const shortUrl = document.getElementById("shortUrl").textContent;
    navigator.clipboard.writeText(shortUrl)
        .then(() => alert("Kısaltılmış URL kopyalandı!"))
        .catch(() => alert("Kopyalama başarısız oldu."));
});
