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

// Handle viewing clothing fit
document.querySelectorAll('.view-fit').forEach(button => {
    button.addEventListener('click', function() {
        const item = this.parentElement;
        const size = item.getAttribute('data-size');
        const resultDiv = document.getElementById('result');

        resultDiv.innerHTML += `<h3>Selected Item: ${item.querySelector('h3').innerText}</h3>
            <p>Size: ${size}</p>
            <p>See how it fits based on your measurements!</p>`;
    });
});
