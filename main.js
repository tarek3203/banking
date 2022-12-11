document.getElementById('submit-btn').addEventListener('click', function() {
    let userEmail = document.getElementById('email-input').value;
    let userPassword = document.getElementById('password-input').value;
    if (userEmail == 'tariqbinbashar3203@gmail.com' && userPassword == 'tarek') {
        window.location.href = 'banking.html';
        document.getElementById('email-input').value = '';
        document.getElementById('password-input').value = '';
    }
})