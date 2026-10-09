const backgroundButton = document.getElementById("backgroundButton");
const textInput = document.getElementById("textInput");
const displayButton = document.getElementById("displayButton");
const addButton = document.getElementById("addButton");
const textOutput = document.getElementById("textOutput");
const rowCount = document.getElementById("rowCount");
const dataTable = document.getElementById("dataTable");

const colors = ["lightblue", "lightgreen", "lightcoral"];
let colorIndex = 0;

backgroundButton.addEventListener("click", function() {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});

displayButton.addEventListener("click", function() {
    if (textInput.value === "") {
        alert("入力値が空です。");
        return;
    }

    textOutput.textContent = textInput.value;
    textOutput.classList.toggle("highlight");
});

addButton.addEventListener("click", function() {
    if (textInput.value === "") {
        return;
    }

    const row = document.createElement("tr");

    const contentCell = document.createElement("td");
    contentCell.textContent = textInput.value;

    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";

    deleteButton.addEventListener("click", function() {
        row.remove();
        updateRowCount();
    });

    actionCell.appendChild(deleteButton);
    row.appendChild(contentCell);
    row.appendChild(actionCell);
    dataTable.appendChild(row);

    if (dataTable.rows.length > 3) {
        dataTable.deleteRow(0);
    }

    updateRowCount();
});

function updateRowCount() {
    const count = dataTable.rows.length;
    rowCount.textContent = count;

    if (count >= 3) {
        displayButton.style.display = "none";
    } else {
        displayButton.style.display = "";
    }
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}