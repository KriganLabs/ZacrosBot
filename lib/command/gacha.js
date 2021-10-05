cmd.on('gachaceweindo',['indo'],['asupan'],async(msg,{client})=> {
let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/cewe/indonesia?apikey=ZYY`)
let anu2 = anu.data.result
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')
return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{thumbnail: Buffer.alloc(0)})
});

cmd.on('gachacewevietnam',['vietnam'],['asupan'],async(msg,{client})=> {
let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/cewe/vietnam?apikey=ZYY`)
let anu2 = anu.data.result
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')
return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{thumbnail: Buffer.alloc(0)})
});

cmd.on('gachacewemalaysia',['malaysia'],['asupan'],async(msg,{client})=> {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/cewe/malaysia?apikey=ZYY`)

let anu2 = anu.data.result

await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{thumbnail: Buffer.alloc(0)})
});

cmd.on('gachacewekorea',['korea'],['asupan'],async(msg,{client})=> {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/cewe/korea?apikey=ZYY`)

let anu2 = anu.data.result

await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{thumbnail: Buffer.alloc(0)})
});

cmd.on('gachacewejepang',['jepang'],['asupan'],async(msg,{client})=> {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/cewe/japan?apikey=ZYY`)

let anu2 = anu.data.result

await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{thumbnail: Buffer.alloc(0)})
});

cmd.on('gachacewethailand',['thailand'],['asupan'],async(msg,{client})=> {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/cewe/thailand?apikey=ZYY`)

let anu2 = anu.data.result

await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{thumbnail: Buffer.alloc(0)})
});

cmd.on('gachacewechina',['china'],['asupan'],async(msg,{client})=> {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/cewe/china?apikey=ZYY`)

let anu2 = anu.data.result

await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{thumbnail: Buffer.alloc(0)})
});

cmd.on("asupan", ["cecan","santuy","hijaber","ukhty","bocil","ghea","rika"], ["asupan"], async (msg, res) => {
  if (res.command.match("asupancecan")) {
    let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/asupan/cecan?apikey=ZYY`)
let anu2 = anu.data.result.url
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2)).buffer,'imageMessage',{caption:`Nih`,quoted:msg});
  } else if (res.command.match("santuy")) {
 let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/asupan/santuy?apikey=ZYY`)
let anu2 = anu.data.result.url
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2)).buffer,'videoMessage',{caption:`Nih`,quoted:msg});
  } else if (res.command.match("hijaber")) {
    let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/asupan/hijaber?apikey=ZYY`)
let anu2 = anu.data.result.url
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2)).buffer,'imageMessage',{caption:`Nih`,quoted:msg});
   } else if (res.command.match("ukhty")) {
      let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/asupan/ukty?apikey=ZYY`)
let anu2 = anu.data.result.url
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2)).buffer,'videoMessage',{caption:`Nih`,quoted:msg});
   } else if (res.command.match("bocil")) {
      let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/asupan/bocil?apikey=ZYY`)
let anu2 = anu.data.result.url
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2)).buffer,'videoMessage',{caption:`Nih`,quoted:msg});
   } else if (res.command.match("ghea")) {
      let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/asupan/ghea?apikey=ZYY`)
let anu2 = anu.data.result.url
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2)).buffer,'videoMessage',{caption:`Nih`,quoted:msg});
   } else if (res.command.match("rika")) {
      let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/asupan/rikagusriani?apikey=ZYY`)
let anu2 = anu.data.result.url
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2)).buffer,'videoMessage',{caption:`Nih`,quoted:msg});

}
}, {
  wait: true
});
