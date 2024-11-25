document.getElementById("shortenBtn").addEventListener("click", function () {
    const urlInput = document.getElementById("urlInput").value;
    if (!urlInput) {
        alert("Lütfen bir URL girin!");
        return;
    }

    // API bağlantısını oluştur
    const apiUrl = `https://ay.live/st/?api=0327a9827dcdb42667cb49f96824030d6d46274c&url=${encodeURIComponent(urlInput)}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('API yanıtı başarısız oldu');
            }
            return response.text();
        })
        .then(shortUrl => {
            const resultContainer = document.getElementById("resultContainer");
            document.getElementById("shortUrl").textContent = shortUrl;
            resultContainer.style.display = "block";
        })
        .catch(error => {
            console.error("Kısaltma hatası:", error);
            alert("Bir hata oluştu: " + error.message);
        });
});