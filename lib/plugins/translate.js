const cheerio = require('cheerio')
const axios = require('axios')

const translate = async (text, tobahasa) => {
	const hasil = []
	const Id = "1622009669437"
	const From = "auto"
	const to = `${tobahasa}`
	const querry = `${text}`
	const BodyFrom = {
		async: `translate,sl:${From},tl:${to},st:${querry},id:${Id},qc:true,ac:true,_id:tw-async-translate,_pms:s,_fmt:pc`
	}
	await axios.request({
		url: "https://www.google.com/async/translate?vet=12ahUKEwjBteH47uXwAhXkmeYKHbrhAQYQqDgwAHoECAIQJg..i&ei=LnitYMHmMeSzmge6w4cw&safe=strict&yv=3",
		method: "POST",
		data: new URLSearchParams(Object.entries(BodyFrom)),
		headers: {
			"accept": "/",
			"accept-language": "en-US,en;q=0.9,id;q=0.8",
			"content-type": "application/x-www-form-urlencoded;charset=UTF-8",
			"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
			"x-client-data": "CJC2yQEIo7bJAQjBtskBCIqSygEIqZ3KAQj4x8oBCI+DywEI0JrLAQipncsBCKCgywEIrKDLAQi/oMsBCNzyywEIp/PLARiR9csB",
		}
	}).then(respon => {
		cookie = "CONSENT=YES+ID.id+; ANID=AHWqTUnX0T03YQM5DJrnSlgTL2-xjkXKec41XOXJT271O_5ZmyM37RPGX7pUGwVU; SID=9gep57D29sJ0EU35tYpIhhYn0RBgU-Ajgi4egNwuHPGijmS77wTmE_svZ6Qm6WQNSgTTow.; _Secure-3PSID=9gep57D29sJ0EU35tYpIhhYn0RBgU-Ajgi4egNwuHPGijmS7IDIb2m5xhgwbMErvR03tZw.; HSID=AgucTO20Puw7zqIUf; SSID=AQW-C5GGheV1PNK9; APISID=k8yue7DzMqQ8yIaL/Ari-xDyYD_rdLb3O4; SAPISID=h9ne4OUzj1EP7dwY/AhNkv1L6gI7PB5sb9; __Secure-3PAPISID=h9ne4OUzj1EP7dwY/AhNkv1L6gI7PB5sb9; SEARCH_SAMESITE=CgQI05IB; 1P_JAR=2021-05-25-22; NID=216=UPSdni6PuN5EldyfiNEiFnPaTS8OEW5W1pw9xSEnb2Mj39V6OJ8ONA3tPyIv8fUYyyZcxV8TB5Ci2Re8QccljGhDTTf6OugNQBXoP_9YQ8nxAUTDEHzGWLQlREJyZN6GcUGLfaWF9QNq5G5f31FcfKTMO9YUBxSoioUH1ekMyMj2lxcTw6dK3xZ8k7v0-7VpqJaKzo_f9dHzPmLoeg-Kvgq3zpri36TlOtjIvJEY1Pwlex1SUroXn4Gohb4Mv_r0t3u8jyg; DV=A3prDqcLtqpMIBqkWuyFV2lKhtdZmhek1AaxNaN2ogEAAMBLUjyomhJKagAAABD63jYjJ8URPwAAAA; SIDCC=AJi4QfHLIFqYJM2U5RjlG7dLI_QseLPP98qIp2A90ZaW1p3P25_5u6RJbZPvnylNwBWqvWydiA; __Secure-3PSIDCC=AJi4QfGzIBvHLplLAVWaeQ3MKEhRpQl6mXGI5TTtNCs_P8weihf00x6BoQ22AZN1X96EnJyiVKI"
		const $ = cheerio.load(respon.data)
		let translate = $('#tw-answ-target-text').text().trim() || $('#tw-answ-romanization').text().trim()
		let daribahasa = $('#tw-answ-language-detected').text().split(' ')[0]
		hasil.push({
			translate,
			daribahasa
		})
	})
	return hasil
}

module.exports = {
	translate
}
