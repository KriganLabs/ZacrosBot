cmd.on('covidworld',['covidworld'],['info'],async(msg,{query,client})=> {

res = await functions.axios.get(`https://exneph-api.herokuapp.com/api/covidworld?apikey=ZYY`)

let anu = res.data.result

client.reply(msg, `*Kopit World*\n\nCases : ${anu.totalCases}\nRecovered : ${anu.recovered}\nDeaths : ${anu.deaths}\nActive Cases : ${anu.activeCases}\nClosed Cases : ${anu.closedCases}\n\nLast Update : ${anu.lastUpdate}`)
});