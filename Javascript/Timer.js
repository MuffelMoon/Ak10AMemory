const targetDate = new Date(Date.UTC(2025, 5, 30, 13, 10, 0));

function updateCountdown() {
    const now = new Date();
    const berlinTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Berlin" }));

    const difference = targetDate - berlinTime;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    if (difference >= 0) {
        document.getElementById("Counter_Tage").textContent = `${days} Tage`;
        document.getElementById("Counter_Stunden").textContent = `${hours} Std.`;
        document.getElementById("Counter_Minuten").textContent = `${minutes} Min.`;
        document.getElementById("Counter_Sekunden").textContent = `${seconds} Sek.`;
        document.getElementById("LetztePrüfung").textContent = "in";
    } else {
        const negativeDifference = Math.abs(difference);
        const negativeDays = Math.floor(negativeDifference / (1000 * 60 * 60 * 24));
        const negativeHours = Math.floor((negativeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const negativeMinutes = Math.floor((negativeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const negativeSeconds = Math.floor((negativeDifference % (1000 * 60)) / 1000);

        document.getElementById("Counter_Tage").textContent = `${negativeDays} Tage`;
        document.getElementById("Counter_Stunden").textContent = `${negativeHours} Std.`;
        document.getElementById("Counter_Minuten").textContent = `${negativeMinutes} Min.`;
        document.getElementById("Counter_Sekunden").textContent = `${negativeSeconds} Sek.`;
        document.getElementById("LetztePrüfung").textContent = "vor";
    }
}

setInterval(updateCountdown, 1000);

updateCountdown();
