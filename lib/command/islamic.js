 cmd.on('hadist',['hadist'],['islamic'],async(msg,{query,client})=> {
if (!query) return client.sendText(msg,`Masukkan nomor`)
 res = await functions.axios.get(`https://exneph-api.herokuapp.com/api/muslim/hadits?kitab=bukhari&nomor=${query}&apikey=ZYY`)
anu = res.data.data
return client.reply(msg,`${anu.name} No. ${anu.contents.number}\n\nArab : \n\n${anu.contents.arab}\n\nIndonesia : \n\n${anu.contents.id}`)
});

 cmd.on('asmaulhusna',['asmaulhusna'],['islamic'],async(msg,{query,client})=> {
let res = await functions.axios.get(`https://exneph-api.herokuapp.com/api/muslim/asmaulhusna?apikey=ZYY`)
anu = res.data.result.data
asu = anu[Math.floor(Math.random() * anu.length)]
client.reply(msg,`Nomor : ${asu.index}\nLatin : ${asu.latin}\nArabic : ${asu.arabic}\n\n*${asu.translation_id}*`)
});
