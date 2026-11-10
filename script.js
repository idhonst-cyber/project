document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
  // INTERAKTIF 1: Toggle Dark / Light Theme
  // ==========================================
  const themeToggleBtn = document.getElementById("themeToggle");
  const body = document.body;
  const themeIcon = themeToggleBtn.querySelector(".icon");
  const themeText = themeToggleBtn.querySelector(".text");

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    themeIcon.textContent = "☀️";
    themeText.textContent = "Light Mode";
  }

  themeToggleBtn.addEventListener("click", () => {
    const isDark = body.classList.contains("dark-mode");

    if (isDark) {
      // Switch to Light
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      themeIcon.textContent = "🌙";
      themeText.textContent = "Dark Mode";
      localStorage.setItem("theme", "light");
    } else {
      // Switch to Dark
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      themeIcon.textContent = "☀️";
      themeText.textContent = "Light Mode";
      localStorage.setItem("theme", "dark");
    }
  });


  // ==========================================
  // INTERAKTIF 2: Kalkulator Estimasi Harga
  // ==========================================
  const sizeSelect = document.getElementById("size");
  const crustSelect = document.getElementById("crust");
  const extraCheeseCheckbox = document.getElementById("extraCheese");
  const totalPriceDisplay = document.getElementById("totalPrice");

  function calculateTotal() {
    const sizePrice = parseInt(sizeSelect.value);
    const crustPrice = parseInt(crustSelect.value);
    const extraPrice = extraCheeseCheckbox.checked ? parseInt(extraCheeseCheckbox.value) : 0;

    const total = sizePrice + crustPrice + extraPrice;
    
    // Format ke Rupiah
    totalPriceDisplay.textContent = "Rp " + total.toLocaleString("id-ID");
  }

  sizeSelect.addEventListener("change", calculateTotal);
  crustSelect.addEventListener("change", calculateTotal);
  extraCheeseCheckbox.addEventListener("change", calculateTotal);


  // ==========================================
  // INTERAKTIF 3: Kuis Rekomendasi Menu
  // ==========================================
  const quizBtn = document.getElementById("quizBtn");
  const quizResult = document.getElementById("quizResult");

  quizBtn.addEventListener("click", () => {
    const taste = document.getElementById("taste").value;
    const portion = document.getElementById("portion").value;

    let title = "";
    let desc = "";

    if (taste === "meat") {
      title = "Meat Lovers Pizza 🥩";
      desc = "Pilihan sempurna! Melimpah dengan sosis sapi, ayam, burger sapi, dan topping daging yang lezat.";
    } else if (taste === "cheese") {
      title = "Cheese Lovers / Super Supreme 🧀";
      desc = "Sensasi keju mozzarella tebal yang dipadu dengan topping lengkap gurih manis.";
    } else if (taste === "seafood") {
      title = "Tuna Melt Pizza 🐟";
      desc = "Rasa segar khas tuna berpadu mayo lembut dan jagung manis yang tidak bikin enek.";
    }

    if (portion === "group") {
      desc += " **Saran porsi:** Pesan ukuran **Jumbo** dengan pinggiran **Cheesebites** untuk dibagi bersama!";
    } else {
      desc += " **Saran porsi:** Cukup ukuran **Personal/Regular** dengan **Stuffed Crust Keju**.";
    }

    quizResult.innerHTML = `
      <h4 style="color: #10b981; margin-bottom: 4px;">Rekomendasi Terbaik:</h4>
      <p style="font-size: 1.1rem; font-weight: 700; margin-bottom: 4px;">${title}</p>
      <p style="font-size: 0.88rem; opacity: 0.9;">${desc}</p>
    `;
    quizResult.classList.remove("hidden");
  });


  // ==========================================
  // INTERAKTIF 4: Rating Bintang Interactive
  // ==========================================
  const stars = document.querySelectorAll(".star");
  const feedback = document.getElementById("ratingFeedback");

  const ratingTexts = {
    1: "Perlu Banyak Perbaikan 😞",
    2: "Kurang Memuaskan 😐",
    3: "Lumayan / Cukup Baik 🙂",
    4: "Sangat Enak & Memuaskan 😀",
    5: "Luar Biasa! Pilihan Utama 🍕🔥"
  };

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      const selectedValue = parseInt(star.getAttribute("data-value"));

      stars.forEach((s) => {
        const value = parseInt(s.getAttribute("data-value"));
        if (value <= selectedValue) {
          s.classList.add("active");
        } else {
          s.classList.remove("active");
        }
      });

      feedback.textContent = `Kamu memberi nilai ${selectedValue} dari 5: "${ratingTexts[selectedValue]}"`;
      feedback.style.color = "#f59e0b";
      feedback.style.fontWeight = "bold";
    });
  });

});