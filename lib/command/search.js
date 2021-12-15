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
