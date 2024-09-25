function showBillOfRights() {
    const list = document.getElementById('billOfRightsList');
    if (list.style.display === 'none') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
}

function showRestOfAmendments() {
    const list = document.getElementById('restOfAmendmentsList');
    if (list.style.display === 'none') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
}

function toggleDropdown(articleId) {
    const dropdownContent = document.getElementById(articleId);
    if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
        dropdownContent.style.display = 'block'; // Show the dropdown
    } else {
        dropdownContent.style.display = 'none'; // Hide the dropdown
    }
}