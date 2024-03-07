document.addEventListener('DOMContentLoaded', function (){
    const form = document.getElementById('yourinfo') as HTMLFormElement;
    const messageElement = document.getElementById('yourname') as HTMLDivElement;

    form.addEventListener('submit', function (event){
        event.preventDefault();
        const formData = new FormData(form)
        const firstname = formData.get('firstname') as string;
        const lastname = formData.get('lastname') as string;

        if(!firstname || !lastname ) {
            showMessage('Please fill out both fields', 'error');
            return;
        }
        const message = `Hello, ${firstname} ${lastname}! Welcome to this page!`;
        showMessage(message, 'success')
    })

    function showMessage(message: string, type: 'success' | 'error'){
        messageElement.innerHTML = `<div class "${type}">${message}</div> `;
    }
})