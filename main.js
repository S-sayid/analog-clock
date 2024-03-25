let hr = document.getElementById('hour')
let minuts = document.getElementById('minutes')
let sec = document.getElementById('second')

function displayTime(){
	let date = new Date()
	let getHr = date.getHours()
	let getMi = date.getMinutes()
	let getSeond = date.getSeconds()

	let hrRotate = (30*getHr) + (getMi/2)
	let miRotate = 6*getMi
	let secRotate = 6*getSeond

	hr.style.transform = `rotate(${hrRotate}deg)`
	minuts.style.transform = `rotate(${miRotate}deg)`
	sec.style.transform = `rotate(${secRotate}deg)`	
}

setInterval(displayTime, 1000)

	