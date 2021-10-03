cmd.on('katabucin',['katabucin'],['random'],async(msg,{query,client})=> {
 let json = (await functions.axios.get(`https://raw.githubusercontent.com/Azyansah/Database-2/main/katabucin.txt`)).data
let anu = functions.randomize(json)
return client.sendText(msg.from,anu,msg)
});

 cmd.on('quotes',['quotes','motivasi'],['random'],async(msg,{query,client})=> {
let json = (await functions.axios.get(`https://raw.githubusercontent.com/Azyansah/Database-2/main/quotes.json`)).data
let anu = functions.randomize(json)
return client.sendText(msg.from,`Author : ${anu.author}\n\n*${anu.quotes}*`,msg)
});

cmd.on('animquot',['animequotes'],['random'],async(msg,{query,client})=> {
res = await functions.axios.get(`https://exneph-api.herokuapp.com/api/random/kataanimev2?apikey=ZYY`)
anu = res.data
return client.sendText(msg.from, functions.parseResult(anu),msg)
});

cmd.on('gabut',['gabut'],['random'],async(msg, {
  command, client}) => {
 res = await functions.axios.get(`https://exneph-api.herokuapp.com/api/gabut?apikey=ZYY`)
anu = res.data.result
return client.sendText(msg.from, functions.parseResult(anu),msg)
},{usedPrefix:true});

 cmd.on('islamiquotes',['islamiquotes'],['random'],async(req,res) => {
let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/randomquote/muslim?apikey=ZYY`)
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')
  return res.client.reply(req,`*${anu.data.result.text_id}*`)
},{usedPrefix:true});

 cmd.on('kanyequotes',['kanyequotes'],['random'],async(req,res) => {
let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/quotes/kanye?apikey=ZYY`)
  return res.client.reply(req,`Author : ${anu.data.result.author}\n\n*Id : ${anu.data.result.text_id}*\n\nEn : *${anu.data.result.text_en}*`)
},{usedPrefix:true});

 cmd.on('meme',['meme'],['random'],async(msg,{client})=> {
let anu = await functions.axios.get(`https://megayaa.herokuapp.com/api/random/meme`)
let anu2 = anu.data.result
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')
return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{caption:functions.parseResult(anu2),quoted:msg})
});

cmd.on('pantun',['pantun'],['random'],async(msg,{query,client})=> {
let json = (await functions.axios.get(`https://raw.githubusercontent.com/Azyansah/Database/main/gabut/pantun2.json`)).data
let anu = functions.randomize(json)
return client.sendText(msg.from,`Author : ${anu.author}\n\n*${anu.pantun}*`,msg)
});

cmd.on("katabijak", ["katabijakv1", "katabijakv2", "katabijakv3"], ["random"], async (req, res) => {
  if (res.command.match("katabijakv1")) {
    let {
      data
    } = await functions.axios.get("https://dhnjing.xyz/random/katabijak/v1");
    client.reply(req, data.result);
  } else if (res.command.match("katabijakv2")) {
    let {
      data
    } = await functions.axios.get("https://dhnjing.xyz/random/katabijak/v2");
    client.reply(req, data.result);
  } else if (res.command.match("katabijakv3")) {
    let {
      data
    } = await functions.axios.get("https://dhnjing.xyz/random/katabijak/v3");
    client.reply(req, data.result);
  }
})

cmd.on("asupan", ["asupan","asupanv1","asupanv2", "asupanv3"], ["asupan"], async (msg, res) => {
  if (res.command.match("asupanv3")) {
    let url = "https://megayaa.herokuapp.com/api/asupan";
    await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')
    await client.sendMessage(msg.from, (await client.getBuffer(url)).buffer, "videoMessage", {
      quoted: msg, caption: "Nih"
    });
  } else if (res.command.match("asupanv2")) {
    let url = "https://megayaa.herokuapp.com/api/asupan";
    await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')
    await client.sendMessage(msg.from, (await client.getBuffer(url)).buffer, "videoMessage", {
      quoted: msg, caption: "Nih"
    });
  } else if (res.command.match("asupanv1")) {
    let url = "https://megayaa.herokuapp.com/api/asupan";
    await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')
    await client.sendMessage(msg.from, (await client.getBuffer(url)).buffer, "videoMessage", {
      quoted: msg, caption: "Nih"
    });
   } else if (res.command.match("asupan")) {
     let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/asupan?apikey=ZYY`)
let anu2 = anu.data.result.result
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2)).buffer,'videoMessage',{caption:``,quoted:msg});
  }
}, {
  wait: true
});

cmd.on("fml", ["fmylife","fml"], ["random"], async(msg, {
  command, client
}) => {
  let a = await functions.axios.get("https://megayaa.herokuapp.com/api/fml")
  client.sendMessage(msg.from, a.data.result.replace(/FML/gi, ""), "conversation", {
    quoted: msg
  })
}, {})

cmd.on("lolivid", ["randomloli","loli"], ["asupan"], async(msg, {
  command, client
}) => {
  let url = "https://megayaa.herokuapp.com/api/lolivid"
  await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')
  await client.sendMessage(msg.from, (await client.getBuffer(url)).buffer, "videoMessage", {
    quoted: msg, caption: "Nih"
  })
}, {
  wait: true
})
