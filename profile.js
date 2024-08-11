document.addEventListener('DOMContentLoaded', (event) => {
    const editBtn = document.getElementById('editBtn');
    const saveBtn = document.getElementById('saveBtn');
    const profileForm = document.getElementById('profileForm');
    
    // Mock user data (In real-world scenarios, this would come from a server)
    const userData = {
        firstName: 'John',
        lastName: 'Doe',
        dob: '1990-01-01',
        email: 'john.doe@example.com',
        address: '123 Main St, Anytown, USA',
        contactNumber: '1234567890'
    };

    // Populate profile form with user data
    document.getElementById('firstName').value = userData.firstName;
    document.getElementById('lastName').value = userData.lastName;
    document.getElementById('dob').value = userData.dob;
    document.getElementById('email').value = userData.email;
    document.getElementById('address').value = userData.address;
    document.getElementById('contactNumber').value = userData.contactNumber;

    // Edit button event
    editBtn.addEventListener('click', () => {
        Array.from(profileForm.elements).forEach(element => {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.disabled = false;
            }
        });
        editBtn.disabled = true;
        saveBtn.disabled = false;
    });

    // Save button event
    saveBtn.addEventListener('click', () => {
        // Here you would send the updated data to the server
        Array.from(profileForm.elements).forEach(element => {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.disabled = true;
            }
        });
        editBtn.disabled = false;
        saveBtn.disabled = true;
    });
});
