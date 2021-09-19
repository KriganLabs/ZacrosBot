cmd.on('gachaceweindo',['asupanceweindo'],['random'],async(msg,{client})=> {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/cewe/indonesia?apikey=ZYY`)

let anu2 = anu.data.result

await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{caption:``,quoted:msg})

});

cmd.on('gachacewevietnam',['asupancewevietnam'],['random'],async(msg,{client})=> {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/cewe/vietnam?apikey=ZYY`)

let anu2 = anu.data.result

await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{caption:``,quoted:msg})

});

cmd.on('gachacewemalaysia',['asupancewemalaysia'],['random'],async(msg,{client})=> {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/cewe/malaysia?apikey=ZYY`)

let anu2 = anu.data.result

await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{caption:``,quoted:msg})

});

cmd.on('gachacewekorea',['asupancewekorea'],['random'],async(msg,{client})=> {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/cewe/korea?apikey=ZYY`)

let anu2 = anu.data.result

await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{caption:``,quoted:msg})

});

cmd.on('gachacewejepang',['asupancewejepang'],['random'],async(msg,{client})=> {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/cewe/japan?apikey=ZYY`)

let anu2 = anu.data.result

await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{caption:``,quoted:msg})

});

cmd.on('gachacewethailand',['asupancewethailand'],['random'],async(msg,{client})=> {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/cewe/thailand?apikey=ZYY`)

let anu2 = anu.data.result

await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{caption:``,quoted:msg})

});

cmd.on('gachacewechina',['asupancewechina'],['random'],async(msg,{client})=> {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/cewe/china?apikey=ZYY`)

let anu2 = anu.data.result

await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{caption:``,quoted:msg})

});

cmd.on("asupan", ["asupancecan","asupansantuy","asupanhijaber","asupanukhty","asupanbocil","asupanghea","asupanrika"], ["random"], async (msg, res) => {
  if (res.command.match("asupancecan")) {
    let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/asupan/cecan?apikey=ZYY`)
let anu2 = anu.data.result.url
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2)).buffer,'imageMessage',{caption:`Nih`,quoted:msg});
  } else if (res.command.match("asupansantuy")) {
 let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/asupan/santuy?apikey=ZYY`)
let anu2 = anu.data.result.url
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2)).buffer,'videoMessage',{caption:`Nih`,quoted:msg});
  } else if (res.command.match("asupanhijaber")) {
    let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/asupan/hijaber?apikey=ZYY`)
let anu2 = anu.data.result.url
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2)).buffer,'imageMessage',{caption:`Nih`,quoted:msg});
   } else if (res.command.match("asupanukhty")) {
      let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/asupan/ukty?apikey=ZYY`)
let anu2 = anu.data.result.url
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2)).buffer,'videoMessage',{caption:`Nih`,quoted:msg});
   } else if (res.command.match("asupanbocil")) {
      let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/asupan/bocil?apikey=ZYY`)
let anu2 = anu.data.result.url
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2)).buffer,'videoMessage',{caption:`Nih`,quoted:msg});
   } else if (res.command.match("asupanghea")) {
      let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/asupan/ghea?apikey=ZYY`)
let anu2 = anu.data.result.url
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2)).buffer,'videoMessage',{caption:`Nih`,quoted:msg});
   } else if (res.command.match("asupanrika")) {
      let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/asupan/rikagusriani?apikey=ZYY`)
let anu2 = anu.data.result.url
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2)).buffer,'videoMessage',{caption:`Nih`,quoted:msg});

}
}, {
  wait: true
});
