cmd.on('lirik',['lirik'],['search'],async(msg,{query,client})=> {
if (!query) return client.sendText(msg.from,`Isi Query!\nContoh : .lirik congratulations`,msg)
let res = await functions.axios.get(`https://zenzapi.xyz/api/liriklagu?query=${query}%20&apikey=Zacros`)
let data = res.data.result
let isi = ` *LIRIK LAGU*

• Judul : ${data.judul}
• Penyanyi : ${data.penyanyi}

${data.lirik}`
return client.sendMessage(msg.from,(await client.getBuffer(data.thumb)).buffer,'imageMessage', {caption: isi, quoted:msg})
},{wait:true,param:functions.needed('Query')});

cmd.on('ppcp',['ppcp','ppcouple'],['search','image'],async(msg,{query,client})=> {
let res = await functions.axios.get(`https://zenzapi.xyz/api/random/couples?apikey=Zacros`)
await client.sendMessage(msg.from,(await client.getBuffer(res.data.result.male)).buffer,'imageMessage', {caption: "Male", quoted:msg})
return client.sendMessage(msg.from,(await client.getBuffer(res.data.result.female)).buffer,'imageMessage', {caption: "Female", quoted:msg})
},{wait:true});
