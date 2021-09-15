 cmd.on('gachaceweindo',['ceweindo'],['gacha'],async(msg,{client})=> {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/cewe/indonesia?apikey=ZYY`)

let anu2 = anu.data.result

return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{caption:``,quoted:msg})

});
