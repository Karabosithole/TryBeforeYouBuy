document.getElementById('measurementForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const chest = document.getElementById('chest').value;
    const waist = document.getElementById('waist').value;
    const hips = document.getElementById('hips').value;
    const inseam = document.getElementById('inseam').value;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Your Measurements</h2>
        <p>Chest: ${chest} cm</p>
        <p>Waist: ${waist} cm</p>
        <p>Hips: ${hips} cm</p>
        <p>Inseam: ${inseam ? inseam + ' cm' : 'Not provided'}</p>
    `;
});

// Handle clothing item navigation
const clothingItems = document.querySelectorAll('.clothing-item');
let currentIndex = 0;

function showItem(index) {
    clothingItems.forEach((item, idx) => {
        item.style.display = idx === index ? 'block' : 'none';
    });

    // Show or hide buttons
    document.getElementById('prevButton').style.display = index === 0 ? 'none' : 'inline-block';
    document.getElementById('nextButton').style.display = index === clothingItems.length - 1 ? 'none' : 'inline-block';
}

document.getElementById('prevButton').addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        showItem(currentIndex);
    }
});

document.getElementById('nextButton').addEventListener('click', function() {
    if (currentIndex < clothingItems.length - 1) {
        currentIndex++;
        showItem(currentIndex);
    }
});

// Initial display
showItem(currentIndex);

// Handle viewing clothing fit
document.querySelectorAll('.view-fit').forEach(button => {
    button.addEventListener('click', function() {
        const item = this.parentElement;
        alert(`Viewing fit for: ${item.querySelector('h4').innerText}`);
    });
});
