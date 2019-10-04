function calculateInsurance(){
	let name = document.getElementById("name").value;
	let age = parseInt(document.getElementById("age").value);
	let country = document.getElementById("country").value;
	let hp = parseInt(document.getElementById("horsePower").value);
	let insurance;

	if (country == "Austria"){
		insurance = hp * 100 / age + 50;
	}
	else if(country == "Hungary"){
		insurance = hp * 120 / age + 100;
	}
	else if(country == "Greece"){
		insurance = hp * 150 / (age+3) + 50;
	}

	document.getElementById("calcResult").innerHTML = name+", your insurance costs "+insurance+"€";
}








/*Create a new function calculateInsurance(). This function does a calculation with a formula based on the selected country:

For Austria : insurance = horse_power x 100 / age   + 50;

For Hungary: insurance = horse_power x 120 / age  + 100;

For Greece: insurance = horse_power x 150 / (age+3)  + 50;*/