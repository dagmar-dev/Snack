document.querySelector('.check').addEventListener('click', check);

function check() {
    const snack = document.querySelector('#snack').value.toLowerCase();
    if (snack === 'snack' || snack === 'damar') {
        document.querySelector('#snacks').style.display = 'block';
        
    } else {
        console.log('go away');
    }
}
