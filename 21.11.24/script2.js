
function yes() {
    const ans = 'yes'
    const q = prompt('can you say?')
    setTimeout(() => { alert('אין מורשה הזמן עבר') }, 4000);
    if (q === 'yes') {
        alert('thank you')
    } else { 'oki' }
}
yes()