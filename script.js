const profiles = [
    { name: 'John Doe', age: 30, weight: 70, bloodGroup: 'A+', healthStatus: 'Good', height: 170 },
    { name: 'Jane Smith', age: 25, weight: 65, bloodGroup: 'O-', healthStatus: 'Excellent', height: 160 },
    { name: 'Robert Johnson', age: 28, weight: 75, bloodGroup: 'B+', healthStatus: 'Good', height: 175 },
    { name: 'Emily Davis', age: 32, weight: 60, bloodGroup: 'AB-', healthStatus: 'Fair', height: 165 },
    { name: 'Michael Wilson', age: 35, weight: 80, bloodGroup: 'A-', healthStatus: 'Excellent', height: 180 },
    { name: 'Sarah Brown', age: 27, weight: 55, bloodGroup: 'O+', healthStatus: 'Good', height: 155 },
    { name: 'David Jones', age: 40, weight: 90, bloodGroup: 'B-', healthStatus: 'Fair', height: 185 },
    { name: 'Laura Garcia', age: 29, weight: 62, bloodGroup: 'AB+', healthStatus: 'Good', height: 167 },
    { name: 'James Martinez', age: 31, weight: 78, bloodGroup: 'A+', healthStatus: 'Excellent', height: 172 },
    { name: 'Linda Anderson', age: 26, weight: 68, bloodGroup: 'O-', healthStatus: 'Fair', height: 160 },
    { name: 'Daniel Hernandez', age: 33, weight: 85, bloodGroup: 'B+', healthStatus: 'Good', height: 178 },
    { name: 'Karen Thompson', age: 34, weight: 70, bloodGroup: 'AB-', healthStatus: 'Excellent', height: 169 },
    { name: 'Matthew Lewis', age: 38, weight: 88, bloodGroup: 'A-', healthStatus: 'Good', height: 182 },
    { name: 'Jessica Lee', age: 24, weight: 52, bloodGroup: 'O+', healthStatus: 'Fair', height: 157 },
    { name: 'Christopher Walker', age: 36, weight: 82, bloodGroup: 'B-', healthStatus: 'Good', height: 177 },
    { name: 'Amanda Hall', age: 37, weight: 67, bloodGroup: 'AB+', healthStatus: 'Excellent', height: 164 },
    { name: 'Joshua Allen', age: 41, weight: 95, bloodGroup: 'A+', healthStatus: 'Good', height: 187 },
    { name: 'Ashley Young', age: 28, weight: 63, bloodGroup: 'O-', healthStatus: 'Good', height: 161 },
    { name: 'Andrew King', age: 30, weight: 74, bloodGroup: 'B+', healthStatus: 'Excellent', height: 176 },
    { name: 'Rachel Wright', age: 35, weight: 69, bloodGroup: 'AB-', healthStatus: 'Fair', height: 170 },
    { name: 'Sampangi Dedipya', age: 20, weight: 60, bloodGroup: 'O+', healthStatus: 'Fair', height: 152 }
];

function showLogin(userType) {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('form-title').innerText = userType === 'recipient' ? 'Recipient Login' : 'Donor Login';
    generateFormFields(userType);
}

function generateFormFields(userType) {
    const form = document.getElementById('user-form');
    form.innerHTML = ''; // Clear previous form fields
    if (userType === 'recipient') {
        form.innerHTML = `
            <input type="text" name="name" placeholder="Name" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="tel" name="phone" placeholder="Phone Number" required>
            <input type="text" name="blood-group-needed" placeholder="Blood Group Needed" required>
            <input type="text" name="health-status" placeholder="Health Status" required>
            <input type="text" name="verification-id" placeholder="Verification ID Number" required>
            <input type="text" name="address" placeholder="Address" required>
        `;
    } else {
        form.innerHTML = `
            <input type="text" name="name" placeholder="Name" required>
            <input type="number" name="age" placeholder="Age" required>
            <input type="number" name="weight" placeholder="Weight" required>
            <input type="text" name="blood-group" placeholder="Blood Group" required>
            <input type="text" name="bmi" placeholder="BMI" required>
            <input type="text" name="health-status" placeholder="Health Status" required>
        `;
    }
}

function submitForm() {
    const form = document.getElementById('user-form');
    const formData = new FormData(form);
    const userType = document.getElementById('form-title').innerText.includes('Recipient') ? 'recipient' : 'donor';

    const profile = {};
    formData.forEach((value, key) => {
        profile[key] = value;
    });

    if (userType === 'recipient') {
        document.getElementById('results').classList.remove('hidden');
        document.getElementById('login-form').classList.add('hidden');
    } else {
        document.getElementById('donor-profile').classList.remove('hidden');
        document.getElementById('login-form').classList.add('hidden');
        displayProfile(profile);
    }
}

function displayProfile(profile) {
    const profileDetails = document.getElementById('profile-details');
    profileDetails.innerHTML = `
        <p>Name: ${profile.name}</p>
        <p>Age: ${profile.age}</p>
        <p>Weight: ${profile.weight}</p>
        <p>Blood Group: ${profile['blood-group']}</p>
        <p>BMI: ${profile.bmi}</p>
        <p>Health Status: ${profile['health-status']}</p>
    `;
}

function searchDonors() {
    const bloodGroup = document.getElementById('blood-group').value;
    const matchingProfiles = profiles.filter(profile => profile.bloodGroup === bloodGroup);

    const profilesContainer = document.getElementById('profiles');
    profilesContainer.innerHTML = '';
    matchingProfiles.forEach(profile => {
        const profileDiv = document.createElement('div');
        profileDiv.classList.add('profile');
        profileDiv.innerHTML = `
            <p>Name: ${profile.name}</p>
            <p>Age: ${profile.age}</p>
            <p>Weight: ${profile.weight}</p>
            <p>Blood Group: ${profile.bloodGroup}</p>
            <p>Health Status: ${profile.healthStatus}</p>
            <p>Height: ${profile.height}</p>
            <button onclick="sendRequest('${profile.name}')">Send Request</button>
        `;
        profilesContainer.appendChild(profileDiv);
    });
}

function sendRequest(name) {
    alert(`Request sent to ${name}. They will contact you if interested.`);
}

function goBack() {
    document.getElementById('donor-profile').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
}