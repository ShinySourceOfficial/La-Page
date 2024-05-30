function showSuccessMessage() {
    const alert = document.getElementById('success-alert');
    alert.classList.remove('d-none');
    setTimeout(() => {
        alert.classList.add('d-none');
    }, 5000);
}