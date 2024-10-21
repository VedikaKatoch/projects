// Placeholder data for users and matches
let users = [
    { id: 1, name: 'Avika doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Dol', email: 'jane@example.com', status: 'Inactive' }
];

let matches = [
    { id: 1, donor: 'John Doe', recipient: 'Jane Doe', status: 'Pending' }
];

// Load initial data when the page loads
window.onload = function() {
    loadUsers();
    loadMatches();
};

// User Management
function loadUsers() {
    const userTableBody = document.querySelector('#userTable tbody');
    userTableBody.innerHTML = '';
    users.forEach(user => {
        const row = `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.status}</td>
            <td><button onclick="editUser(${user.id})">Edit</button> <button onclick="deleteUser(${user.id})">Delete</button></td>
        </tr>`;
        userTableBody.innerHTML += row;
    });
}

function addUser() {
    const newUser = { id: users.length + 1, name: 'New User', email: 'new@example.com', status: 'Active' };
    users.push(newUser);
    loadUsers();
}

function editUser(userId) {
    // Implement edit logic here
    alert(`Edit User ID: ${userId}`);
}

function deleteUser(userId) {
    users = users.filter(user => user.id !== userId);
    loadUsers();
}

// Match Management
function loadMatches() {
    const matchTableBody = document.querySelector('#matchTable tbody');
    matchTableBody.innerHTML = '';
    matches.forEach(match => {
        const row = `<tr>
            <td>${match.id}</td>
            <td>${match.donor}</td>
            <td>${match.recipient}</td>
            <td>${match.status}</td>
            <td><button onclick="editMatch(${match.id})">Edit</button> <button onclick="deleteMatch(${match.id})">Delete</button></td>
        </tr>`;
        matchTableBody.innerHTML += row;
    });
}

function addMatch() {
    const newMatch = { id: matches.length + 1, donor: 'New Donor', recipient: 'New Recipient', status: 'Pending' };
    matches.push(newMatch);
    loadMatches();
}

function editMatch(matchId) {
    // Implement edit logic here
    alert(`Edit Match ID: ${matchId}`);
}

function deleteMatch(matchId) {
    matches = matches.filter(match => match.id !== matchId);
    loadMatches();
}

// Reporting
function generateReport() {
    const reportOutput = document.getElementById('reportOutput');
    reportOutput.innerHTML = `<p>Total Users: ${users.length}</p>
                              <p>Total Matches: ${matches.length}</p>`;
}
