document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    button.addEventListener('click', function() {
        const input = document.querySelector('input');
        const numRows = input.value;

        // Validate input
        if (isNaN(numRows) || numRows <= 0) {
            alert('Please enter a valid number of rows.');
            return;
        }

        // Get the table body element
        const tableBody = document.querySelector('tbody');

        // Clear previous rows if any
        while (tableBody.firstChild) {
            tableBody.removeChild(tableBody.firstChild);
        }

        // Create header row
        const headerRow = document.createElement('tr');
        const headers = ['Courses', 'Credit Hours', 'Grades'];
        headers.forEach(headerText => {
            const header = document.createElement('th');
            header.textContent = headerText;
            headerRow.appendChild(header);
        });
        tableBody.appendChild(headerRow);

        // Create the specified number of rows
        for (let i = 0; i < numRows; i++) {
            // Create a new row
            const row = document.createElement('tr');

            // Create the cells
            const courseCell = document.createElement('td');
            courseCell.textContent = `Course ${i + 1}`;

            const creditCell = document.createElement('td');
            creditCell.textContent = `Credit ${i + 1}`;

            const gradeCell = document.createElement('td');
            gradeCell.textContent = `Grade ${i + 1}`;

            // Append the cells to the row
            row.appendChild(courseCell);
            row.appendChild(creditCell);
            row.appendChild(gradeCell);

            // Append the row to the table body
            tableBody.appendChild(row);
        }
    });
});
