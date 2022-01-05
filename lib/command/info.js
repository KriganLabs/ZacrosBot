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
},{param:functions.needed('query')});

cmd.on('sc', ['sc','script','scriptbot'], ['info'], async(msg, {
  query, client
})=> {
  client.sendText(msg.from, `
Link Script Bot ini : https://github.com/Zacros-Team/ZacrosBot
Base Bot : https://github.com/Zobin33/Anu-wabot
`, msg)
});

cmd.on('botstats', ['botstats'], ['info'], async(msg, {
  client
})=> {
  let os = require("os")
  let nos = require("node-os-utils")
  let moment = require("moment-timezone")
  let anu = ``
  for (let a of os.cpus()) {
  anu+= "• *Model* : "+a.model+"\n"
  anu+= "• *Speed* : "+a.speed+"\n\n"
  }
  let mess = `  Info Server
  
• *Hostname* : ${os.hostname()}
• *Ram* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require(`os`).totalmem() / 1024 / 1024)}MB
• *Platfrom* : ${os.platform()}
• *Core* : ${os.cpus().length}
• *Cpu Model* : ${os.cpus()[0].model}
• *Ping* : ${moment().millisecond()}
• *Version* : ${os.version()}
• *Arch* : ${os.arch()}
• *Type* : ${os.type()}

  *Cpu*
  
${anu.trim()}
  `
  
  return client.sendText(msg.from, mess)
});
