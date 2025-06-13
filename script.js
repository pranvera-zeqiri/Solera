// script.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Solera website loaded");
  
    // Example: Alert when Shop Now button is clicked
    const shopBtn = document.querySelector(".btn.btn-light");
    if (shopBtn) {
      shopBtn.addEventListener("click", () => {
        alert("Redirecting to shop...");
      });
    }
  });

  //search bar

  document.getElementById('productSearch').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(function (card) {
      const title = card.querySelector('.card-title').innerText.toLowerCase();
      if (title.includes(searchValue)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });




  