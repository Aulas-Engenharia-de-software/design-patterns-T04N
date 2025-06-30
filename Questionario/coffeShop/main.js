// Importa as classes (usando o método tradicional de script em HTML)
// As classes já estão globalmente disponíveis por serem carregadas antes deste script.

document.addEventListener('DOMContentLoaded', () => {
    const coffeeTypeRadios = document.querySelectorAll('input[name="coffeeType"]');
    const milkCheckbox = document.getElementById('milk');
    const whipCheckbox = document.getElementById('whip');
    const chocolateCheckbox = document.getElementById('chocolate');
    const calculateButton = document.getElementById('calculateOrder');
    const resetButton = document.getElementById('resetOrder');
    const receiptCard = document.getElementById('receiptCard');
    const orderDescriptionSpan = document.getElementById('orderDescription');
    const orderCostSpan = document.getElementById('orderCost');

    function calculateOrder() {
        let selectedCoffee;

        // Determina o tipo de café base
        if (document.querySelector('input[name="coffeeType"]:checked').value === 'simple') {
            selectedCoffee = new SimpleCoffee();
        } else {
            selectedCoffee = new Espresso();
        }

        // Adiciona os complementos (decoradores)
        if (milkCheckbox.checked) {
            selectedCoffee = new MilkDecorator(selectedCoffee);
        }
        if (whipCheckbox.checked) {
            selectedCoffee = new WhipDecorator(selectedCoffee);
        }
        if (chocolateCheckbox.checked) {
            selectedCoffee = new ChocolateDecorator(selectedCoffee);
        }

        // Exibe o resultado
        orderDescriptionSpan.textContent = selectedCoffee.getDescription();
        orderCostSpan.textContent = selectedCoffee.getCost().toFixed(2);
        receiptCard.style.display = 'block'; // Mostra o recibo
    }

    function resetOrder() {
        // Reseta os radios e checkboxes
        document.querySelector('input[name="coffeeType"][value="simple"]').checked = true;
        milkCheckbox.checked = false;
        whipCheckbox.checked = false;
        chocolateCheckbox.checked = false;

        // Oculta o recibo
        receiptCard.style.display = 'none';
        orderDescriptionSpan.textContent = '';
        orderCostSpan.textContent = '';
    }

    // Adiciona os listeners de eventos
    calculateButton.addEventListener('click', calculateOrder);
    resetButton.addEventListener('click', resetOrder);
});