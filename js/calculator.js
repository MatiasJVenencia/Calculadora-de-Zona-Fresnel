function calculateFresnel() {
    let distance = parseFloat(document.getElementById('distance').value);
    let frequency = parseFloat(document.getElementById('frequency').value);

    if (isNaN(distance) || isNaN(frequency) || distance <= 0 || frequency <= 0) {
        document.getElementById('result').innerText = "Por favor, introduce valores válidos.";
        return;
    }

    let fresnelZone = 8.656 * Math.sqrt(distance / frequency);
    document.getElementById('result').innerText = `Zona de Fresnel: ${fresnelZone.toFixed(3)} metros`;
}
