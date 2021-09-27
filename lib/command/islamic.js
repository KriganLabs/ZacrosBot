 cmd.on('hadist',['hadist'],['islamic'],async(msg,{query,client})=> {
if (!query) return client.sendText(msg,`Masukkan nomor`)
 res = await functions.axios.get(`https://exneph-api.herokuapp.com/api/muslim/hadits?kitab=bukhari&nomor=${query}&apikey=ZYY`)
anu = res.data.data
return client.reply(msg,`${anu.name} No. ${anu.contents.number}\n\nArab : \n\n${anu.contents.arab}\n\nIndonesia : \n\n${anu.contents.id}`)
});

 cmd.on('nabi-nabi',['kisahnabi'],['islamic'],async(msg,{query,client})=> {
if (!query) return client.sendText(msg.from,`Masukkan nama nabi\nContoh : .kisahnabi muhammad`,msg)
let etto = await functions.axios.get(`https://exneph-api.herokuapp.com/api/kisahnabi?nabi=${query.toLowerCase().trim()}&apikey=ZYY`)
let etto2 = etto.data.result.nabi
return client.sendMessage(msg.from,(await client.getBuffer(etto2.image)).buffer,'imageMessage',{caption:`Nama : ${etto2.nabi}\nUmur : ${etto2.umur} Tahun\nTempat : ${etto2.tempat}\n\nKisah : ${etto2.kisah}`,quoted:msg})
},{param:functions.needed('Nama nabi')});

 cmd.on('asmaulhusna',['asmaulhusna'],['islamic'],async(msg,{query,client})=> {
let res = await functions.axios.get(`https://exneph-api.herokuapp.com/api/muslim/asmaulhusna?apikey=ZYY`)
anu = res.data.result.data
asu = anu[Math.floor(Math.random() * anu.length)]
client.reply(msg,`Nomor : ${asu.index}\nLatin : ${asu.latin}\nArabic : ${asu.arabic}\n\n*${asu.translation_id}*`)
});
