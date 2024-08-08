function createForm({ operation, id, label, placeholder }) {
    const form = document.createElement('form');
    form.id = `${id}-form`;
    form.className = 'form-content';
    form.style.display = 'none';

    form.innerHTML = `
        <div class="card shadow-sm mb-3">
            <div class="card-header">
                <h5 class="card-title">${label}</h5>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="${id}-input" class="form-label">${label}</label>
                    <input type="text" id="${id}-input" class="form-control" placeholder="${placeholder}">
                </div>
                <button type="button" class="btn btn-primary" onclick="submitForm('${id}', '${operation}')">
                    ${label}
                </button>
            </div>
        </div>
    `;

    return form;
}

function submitForm(formId, operation) {
    const input = document.getElementById(`${formId}-input`).value;
    const url = `calculate?expression=${operation}/${encodeURIComponent(input)}`;
    window.location.href = url; // Redirects to the URL with query parameters
}

function initializeForms(containerId, operations) {
    const formContainer = document.getElementById(containerId);
    operations.forEach(item => {
        const form = createForm(item);
        formContainer.appendChild(form);
    });
}


