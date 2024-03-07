document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('yourinfo');
    var messageElement = document.getElementById('yourname');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var formData = new FormData(form);
        var firstname = formData.get('firstname');
        var lastname = formData.get('lastname');
        if (!firstname || !lastname) {
            showMessage('Please fill out both fields', 'error');
            return;
        }
        var message = "Hello, ".concat(firstname, " ").concat(lastname, "! Welcome to this page!");
        showMessage(message, 'success');
    });
    function showMessage(message, type) {
        messageElement.innerHTML = "<div class \"".concat(type, "\">").concat(message, "</div> ");
    }
});
