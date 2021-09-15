 cmd.on('hadist',['hadist'],['islamic'],async(msg,{query,client})=> {

 res = await functions.axios.get(`https://exneph-api.herokuapp.com/api/muslim/hadits?kitab=bukhari&nomor=${query}&apikey=KITT`)

anu = res.data.data

return client.reply(msg,`${anu.name} No. ${anu.contents.number}\n\nArab : \n\n${anu.contents.arab}\n\nIndonesia : \n\n${anu.contents.id}`)

});
