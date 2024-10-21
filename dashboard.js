// Sample data for recipients
const recipients = [
    { name: 'John Doe', organ: 'Kidney', bloodType: 'A+', contact: '555-1234' },
    { name: 'Jane Smith', organ: 'Liver', bloodType: 'O+', contact: '555-5678' },
    { name: 'James Brown', organ: 'Heart', bloodType: 'B+', contact: '555-4321' },
    { name: 'Emily Davis', organ: 'Lung', bloodType: 'AB-', contact: '555-8765' }
];

// Simulate loading stats
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('total-recipients').textContent = recipients.length;
    document.getElementById('total-donors').textContent = 50; // Example number
    document.getElementById('successful-transplants').textContent = 40; // Example number

    // Load recipients into table
    const tableBody = document.querySelector('#recipients-table tbody');
    recipients.forEach((recipient) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${recipient.name}</td>
            <td>${recipient.organ}</td>
            <td>${recipient.bloodType}</td>
            <td>${recipient.contact}</td>
        `;
        tableBody.appendChild(row);
    });
});

// Search function for the table
function searchTable() {
    const input = document.getElementById('search').value.toLowerCase();
    const rows = document.querySelectorAll('#recipients-table tbody tr');

    rows.forEach(row => {
        const name = row.querySelector('td').textContent.toLowerCase();
        if (name.includes(input)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
