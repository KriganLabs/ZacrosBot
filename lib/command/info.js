cmd.on('covidworld', ['covidworld'], ['info'], async(msg, {
  query, client
})=> {
  res = await functions.axios.get(`https://exneph-api.herokuapp.com/api/covidworld?apikey=ZYY`)
  let anu = res.data.result
  client.reply(msg, `*Kopit World*\n\nCases : ${anu.totalCases}\nRecovered : ${anu.recovered}\nDeaths : ${anu.deaths}\nActive Cases : ${anu.activeCases}\nClosed Cases : ${anu.closedCases}\n\nLast Update : ${anu.lastUpdate}`)
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

cmd.on('register', ['register'], ['info'], (msg {
  client, sender
}) => {
  if (userDb[sender.jid]) return client.reply(msg, 'Kamu dah Registasi')
  userDb[sender.jid] = sender
  functions.fs.writeFileSync('./src/json/user.json', JSON.stringify(userDb, null, 2))
  return client.reply(msg, functions.parseResult(sender, {
    title: 'Berhasil Registasi Dengan Data'
  }))
})