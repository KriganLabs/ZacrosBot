cmd.on('covidworld',['covidworld'],['info'],async(msg,{query,client})=> {
res = await functions.axios.get(`https://exneph-api.herokuapp.com/api/covidworld?apikey=ZYY`)
let anu = res.data.result
client.reply(msg, `*Kopit World*\n\nCases : ${anu.totalCases}\nRecovered : ${anu.recovered}\nDeaths : ${anu.deaths}\nActive Cases : ${anu.activeCases}\nClosed Cases : ${anu.closedCases}\n\nLast Update : ${anu.lastUpdate}`)
});

cmd.on('infogempa',['infogempa'],['info'],async(msg,{query,client})=> {
res = await functions.axios.get(`https://exneph-api.herokuapp.com/api/infogempa?apikey=ZYY`)
let anu = res.data.result
client.reply(msg,`Info Gempa Terkini\n\nWaktu : ${anu.Waktu}\nLintang : ${anu.Lintang}\nBujur : ${anu.Bujur}\nMagnitude : ${anu.Magnitudo}\nKedalaman : ${anu.Kedalaman}\nWilayah : ${anu.Wilayah}`)
});

cmd.on('ghstalk',['githubstalk'],['stalk'],async(msg,{query,client})=> {
if (!query) return client.sendText(msg.from,`Isi Query!\nContoh : .githubstalk Azyansah`,msg)
res = await functions.axios.get(`https://exneph-api.herokuapp.com/api/github/stalk?username=${query}&apikey=ZYY`)
anu = res.data.result
await client.reply(msg,'Tunggu sebentar ya..')
return client.sendText(msg.from, functions.parseResult(anu.user,'Github Stalk'),msg)
},{param:functions.needed('Query')});

cmd.on('sc',['sc'],['info'],async(msg,{query,client})=> {
client.sendText(msg.from,`Bot ini menggunakan source code\n\nhttps://github.com/Zobin33/Anu-wabot`,msg)
});
