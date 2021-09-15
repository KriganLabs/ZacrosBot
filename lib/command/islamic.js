 cmd.on('hadist',['hadist'],['islamic'],async(msg,{query,client})=> {

 res = await functions.axios.get(`https://exneph-api.herokuapp.com/api/muslim/hadits?kitab=bukhari&nomor=${query}&apikey=KITT`)

anu = res.data.data

return client.reply(msg,`${anu.name} No. ${anu.contents.number}\n\nArab : \n\n${anu.contents.arab}\n\nIndonesia : \n\n${anu.contents.id}`)

});

 cmd.on('nabi-nabi',['kisahnabi'],['islamic'],async(msg,{query,client})=> {

let etto = await functions.axios.get(`https://exneph-api.herokuapp.com/api/kisahnabi?nabi=${query.toLowerCase().trim()}&apikey=ZYY`)

let etto2 = etto.data.result.nabi

return client.sendMessage(msg.from,(await client.getBuffer(etto2.image)).buffer,'imageMessage',{caption:`Nama : ${etto2.nabi}\nUmur : ${etto2.umur} Tahun\nTempat : ${etto2.tempat}\n\nKisah : ${etto2.kisah}`,quoted:msg})

});
