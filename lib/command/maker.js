cmd.on('skytext',['skytext'],['maker'],async(msg,{query,client})=> {
res = await functions.axios.get(`https://exneph-api.herokuapp.com/api/maker2?text=${query.toLowerCase().trim()}&apikey=ZYY`)
let anu = res.data.result
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')
return client.sendMessage(msg.from,(await client.getBuffer(anu.results)).buffer,'imageMessage',{caption:``,quoted:msg})
});
