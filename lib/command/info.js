cmd.on('covidindo', ['covidindo'], ['info'], async(msg, {
  query, client
})=> {
  res = await functions.axios.get(`${botinfo.linkApi.zacros}/info/covid-indo`)
  let anu = res.data.result[0]
  client.reply(msg, functions.parseResult(anu))
});

cmd.on('infogempa', ['infogempa'], ['info'], async(msg, {
  query, client
})=> {
  res = await functions.axios.get(`https://exneph-api.herokuapp.com/api/infogempa?apikey=ZYY`)
  let anu = res.data.result
  client.reply(msg, `Info Gempa Terkini\n\nWaktu : ${anu.Waktu}\nLintang : ${anu.Lintang}\nBujur : ${anu.Bujur}\nMagnitude : ${anu.Magnitudo}\nKedalaman : ${anu.Kedalaman}\nWilayah : ${anu.Wilayah}`)
});

cmd.on('sc', ['sc'], ['info'], async(msg, {
  query, client
})=> {
  client.sendText(msg.from, `Bot ini menggunakan source code\n\nhttps://github.com/Zobin33/Anu-wabot\nhttps://github.com/Zacros-Team/ZacrosBot`, msg)
});
