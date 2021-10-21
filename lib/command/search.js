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
