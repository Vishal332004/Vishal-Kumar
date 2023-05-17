const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b33380936cmsha1e9f0c9f831c17p1b7b3ejsnaca683435608',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
let placelocation=""
console.log(placelocation.length=="","value");
document.querySelector("#searchShow").addEventListener("click", () => {
	placelocation = document.querySelector("#inputsearch").value;
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + placelocation;
	async function vis() {
		try {
			const response = await fetch(url, options);
			const result = await response.json();
			if (placelocation.length =="" == false) {
				document.querySelector(".heading p").innerHTML = `${placelocation} Weather`
				document.querySelector(".heading p").style = "font-size:34px; font-width:700;background:aqua;border-radius:1rem;color:#fff; box-shadow: 0 0 20px aqua;"
				document.querySelector("#searchShow .temp span:nth-child(1)").innerHTML = result.temp;
				document.querySelector("#searchShow .wind span:nth-child(1)").innerHTML = result.wind_speed;
				document.querySelector("#searchShow .templike span:nth-child(1)").innerHTML = result.feels_like;
				document.querySelector("#searchShow .humidity span:nth-child(1)").innerHTML = result.humidity;
			}
			console.log(result, "vis");
		} catch (error) {
			console.error(error);
		}
	}
	vis()
})
async function London() {
	try {
		const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london`, options);
		const result = await response.json();
		console.log(result, "London");
		if (!(result == undefined)) {
			console.log("hello");
			document.querySelector("#showcase div:nth-child(1) h3 span").innerHTML = result.temp;
			document.querySelector("#showcase div:nth-child(1) p span:nth-child(1)").innerHTML = result.temp;
			document.querySelector("#showcase div:nth-child(1) p span:nth-child(2)").innerHTML = result.wind_speed
		}
		;

	} catch (error) {
		console.error(error);
	}
}
London()
async function Delhi() {
	try {
		const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi`, options);
		const result = await response.json();
		if (!(result == undefined)) {
			console.log("hello");
			console.log(result, "Delhi");
			document.querySelector("#showcase div:nth-child(2) h3 span").innerHTML = result.temp;
			document.querySelector("#showcase div:nth-child(2) p span:nth-child(1)").innerHTML = result.temp;
		}
		document.querySelector("#showcase div:nth-child(2) p span:nth-child(2)").innerHTML = result.wind_speed
			;
	} catch (error) {
		console.error(error);
	}
}
Delhi()
async function US() {
	try {
		const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=America`, options);
		const result = await response.json();
		if (!(result == undefined)) {
			console.log("hello");
			console.log(result, "us");
			document.querySelector("#showcase div:nth-child(3) h3 span").innerHTML = result.temp;
			document.querySelector("#showcase div:nth-child(3) p span:nth-child(1)").innerHTML = result.temp;
		}
		document.querySelector("#showcase div:nth-child(3) p span:nth-child(2)").innerHTML = result.wind_speed
			;
	} catch (error) {
		console.error(error);
	}
}
US()


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>Nav bar<<<<<<<<<<<<<<<<<<<<<<<<<<< */
let navIcon = document.querySelector("#navIcon").addEventListener("click", () => {
	document.querySelector("nav ul").classList.toggle("display-top")
})

// document.querySelectorAll("#root section").forEach((value, index) => {
// 	document.querySelectorAll("nav ul a")[index].addEventListener("click",()=>{
// 		document.querySelectorAll("nav ul a").forEach((val,i)=>{
// 			val.classList.remove("active");
// 		})
// 		document.querySelectorAll("nav ul a")[index].classList.add("active")
// 	})
// 	// let valueHeight=value.offsetHeight;
// 	// console.log(valueHeight);
// 	// // console.log(value);
// 	// // console.log(index);
// 	// console.log(window.scrollY);
// })

document.querySelectorAll("nav ul a").forEach((value, i) => {
	value.addEventListener("click", () => {
		document.querySelectorAll("nav ul a").forEach(val => val.classList.remove("active"))
		document.querySelectorAll("nav ul a")[i].classList.add("active")

	})
})

document.querySelector("#searchShow button").addEventListener("click", () => {
	placelocation = document.querySelector("#inputsearch").value;
	if (placelocation.length==""== false) {
		document.querySelector("#search #searchShow>div").classList.remove("display-height")
		console.log(placelocation.length==""==false);
	}
})