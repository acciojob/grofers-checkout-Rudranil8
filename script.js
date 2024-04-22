const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let prices = document.querySelectorAll('.price');
	let total = 0;
	for(let i=0; i<prices.length; i++){
		total+=parseFloat(prices[i].innerText);
	}
};

getSumBtn.addEventListener("click", getSum);

