let url = "https://677f67de0476123f76a64435.mockapi.io/books";
// Parent element
let re = document.getElementById("result");

async function show() {
    try {
        // Fetch data from the API
        let response = await fetch(url);
        // Convert data to JSON
        let data = await response.json();

        // Create a table element
        let table = document.createElement("table");
        table.className = "table";

        // Create the table header
        let thead = document.createElement("thead");
        thead.innerHTML = `
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
            </tr>
        `;
        table.appendChild(thead);

        // Create the table body
        let tbody = document.createElement("tbody");

        // Loop through the data and create rows
        data.forEach(element => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <th scope="row">${element.id}</th>
                <td>${element.name}</td>
            `;
            tbody.appendChild(row);
        });

        // Append the tbody to the table
        table.appendChild(tbody);

        // Append the table to the parent element
        re.appendChild(table);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

show();