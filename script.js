const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let prices = document.querySelectorAll('.price');
	let total = 0;
	for(let i=0; i<prices.length; i++){
		total+=parseFloat(prices[i].innerText);
	}
	let newRow = document.createElement('tr');
    let newCell = document.createElement('td');
    newCell.textContent = total;
    newRow.appendChild(newCell);
    let table = document.querySelector('table');
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

