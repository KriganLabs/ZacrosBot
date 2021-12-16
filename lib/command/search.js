cmd.on('gsearch', ['google','gsearch'], ['info'], async(msg, {
  query, client
})=> {
  res = await functions.axios.get(`${botinfo.linkApi.zacros}/search/google?query=${query}`)
  let anu = res.data.result
  let b = ``
  for (let c of anu) b+= functions.parseResult(c,{title:'Google Search'})+'\n'
  return client.sendText(msg.from, b.trim())
},{query:'Isi query!',param:functions.needed('query')});

cmd.on('ppcp',['ppcp','ppcouple'],['search','image'],async(msg,{query,client})=> {
let res = await functions.axios.get(`${botinfo.linkApi.zacros}/randomimg/ppcouple`)
await client.sendMessage(msg.from,(await client.getBuffer(res.data.male)).buffer,'imageMessage', {caption: "Male", quoted:msg})
return client.sendMessage(msg.from,(await client.getBuffer(res.data.female)).buffer,'imageMessage', {caption: "Female", quoted:msg})
},{wait:true});

cmd.on('stickersearch', ['ssearch','stiksearch'], ['info'], async(msg, {
  query, client
})=> {
  res = await functions.axios.get(`${botinfo.linkApi.zacros}/search/sticker?query=${query}`)
  let anu = res.data.result
  let b = ``
  for (let c of anu) b+= functions.parseResult(c,{title:'Sticker Search'})+'\n'
  return client.sendText(msg.from, b.trim())
},{query:'Isi query!',param:functions.needed('query')});

cmd.on('happymod', ['happymod'], ['info'], async(msg, {
  query, client
})=> {
  res = await functions.axios.get(`${botinfo.linkApi.zacros}/search/happymod?query=${query}`)
  let anu = res.data.result
  let b = ``
  for (let c of anu) b+= functions.parseResult(c,{title:'Happy Mod'})+'\n'
  return client.sendImage(msg.from, ares.data.result[0].icon, b.trim())
},{query:'Isi query!',param:functions.needed('query')});

cmd.on('tiktoksearch', ['ttsearch'], ['info'], async(msg, {
  query, client
})=> {
  res = await functions.axios.get(`${botinfo.linkApi.zacros}/search/tiktok?query=${query}`)
  let anu = res.data.result
  return client.sendVideo(msg.from, anu.video, functions.parseResult(anu,{title:"Tiktok Search"}))
},{query:'Isi query!',param:functions.needed('query')});

