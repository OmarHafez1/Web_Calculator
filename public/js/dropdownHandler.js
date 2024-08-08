function displayForm(action) {
    document.querySelectorAll('.form-content').forEach(form => form.style.display = 'none');
    const formToShow = document.getElementById(`${action}-form`);
    if (formToShow) formToShow.style.display = 'block';
}

function handleDropdownClick(event) {
    event.preventDefault();

    document.querySelectorAll('.dropdown-item').forEach(el => el.classList.remove('active'));
    this.classList.add('active');

    const action = this.getAttribute('data-action').substring(1); // Remove leading '/'
    displayForm(action);
}

function initializeDropdown(menuId, operations) {
    const dropdownMenu = document.getElementById(menuId);

    operations.forEach((operation, index) => {
        const listItem = document.createElement('li');
        const linkItem = document.createElement('a');

        linkItem.className = `dropdown-item rounded-2${index === 0 ? ' active' : ''}`;
        linkItem.setAttribute('data-action', `/${operation.id}`);
        linkItem.textContent = operation.label;

        listItem.appendChild(linkItem);
        dropdownMenu.appendChild(listItem);
    });

    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', handleDropdownClick);
    });

    // Show the first form by default
    displayForm(operations[0].id);
}
