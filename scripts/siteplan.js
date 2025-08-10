// Dynamic Year in Footer
document.getElementById("year").textContent = new Date().getFullYear();

// Search Functionality
const searchBar = document.getElementById('searchBar');
const productCards = document.querySelectorAll('.product-card');

searchBar.addEventListener('input', function(e) {
    const searchValue = e.target.value.toLowerCase();

    productCards.forEach(card => {
        const productName = card.dataset.name.toLowerCase();
        const productCategory = card.dataset.category.toLowerCase();

        if (productName.includes(searchValue) || productCategory.includes(searchValue)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});
