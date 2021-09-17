 cmd.on('gachaceweindo',['ceweindo'],['gacha'],async(msg,{client})=> {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/cewe/indonesia?apikey=ZYY`)

let anu2 = anu.data.result

await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{caption:``,quoted:msg})

});

cmd.on('gachacewevietnam',['cewevietnam'],['gacha'],async(msg,{client})=> {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/cewe/vietnam?apikey=ZYY`)

let anu2 = anu.data.result

await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{caption:``,quoted:msg})

});

cmd.on('gachacewemalaysia',['cewemalaysia'],['gacha'],async(msg,{client})=> {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/cewe/malaysia?apikey=ZYY`)

let anu2 = anu.data.result

await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{caption:``,quoted:msg})

});

cmd.on('gachacewekorea',['cewekorea'],['gacha'],async(msg,{client})=> {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/cewe/korea?apikey=ZYY`)

let anu2 = anu.data.result

await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{caption:``,quoted:msg})

});

cmd.on('gachacewejepang',['cewejepang'],['gacha'],async(msg,{client})=> {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/cewe/japan?apikey=ZYY`)

let anu2 = anu.data.result

await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{caption:``,quoted:msg})

});

cmd.on('gachacewethailand',['cewethailand'],['gacha'],async(msg,{client})=> {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/cewe/thailand?apikey=ZYY`)

let anu2 = anu.data.result

await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{caption:``,quoted:msg})

});

cmd.on('gachacewechina',['cewechina'],['gacha'],async(msg,{client})=> {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/cewe/china?apikey=ZYY`)

let anu2 = anu.data.result

await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{caption:``,quoted:msg})

});
