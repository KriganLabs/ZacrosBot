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
  res = await functions.axios.get(`${botinfo.linkApi.zacros}/info/gempa`)
  let anu = res.data.result
  let b = ``
  for (let c of anu) b+= functions.parseResult(c,{title:'Info Gempa / BMKG'})+'\n'
  return client.sendText(msg.from, b.trim())
},{query:'Isi query!',param:functions.needed('query')});

cmd.on('sc', ['sc'], ['info'], async(msg, {
  query, client
})=> {
  client.sendText(msg.from, `Bot ini menggunakan source code\n\nhttps://github.com/Zobin33/Anu-wabot\nhttps://github.com/Zacros-Team/ZacrosBot`, msg)
});
