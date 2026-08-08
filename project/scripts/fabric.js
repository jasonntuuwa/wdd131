const chestInput = document.querySelector('#chest-measurement');
const calculateButton = document.querySelector('#calculate-size');
const fitResult = document.querySelector('#fit-result');

function getRecommendedSize(chest) {
    if (chest <= 36) {
        return 'Small';
    } else if (chest <= 40) {
        return 'Medium';
    } else if (chest <= 44) {
        return 'Large';
    } else if (chest <= 48) {
        return 'X-Large';
    } else {
        return 'XX-Large';
    }
}

calculateButton.addEventListener('click', () => {
    const chest = parseFloat(chestInput.value);

    if (!chest || chest < 28 || chest > 60) {
        fitResult.textContent = `Enter a chest measurement between 28 and 60 inches.`;
        return;
    }

    const size = getRecommendedSize(chest);
    fitResult.textContent = `Based on a ${chest}" chest, we recommend size ${size}.`;
});