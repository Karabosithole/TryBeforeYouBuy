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
