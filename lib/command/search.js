
cmd.on('ppcp',['ppcp','ppcouple'],['search','image'],async(msg,{query,client})=> {
let res = await functions.axios.get(`${botinfo.linkApi.zacros}/randomimg/ppcouple`)
await client.sendMessage(msg.from,(await client.getBuffer(res.data.male)).buffer,'imageMessage', {caption: "Male", quoted:msg})
return client.sendMessage(msg.from,(await client.getBuffer(res.data.female)).buffer,'imageMessage', {caption: "Female", quoted:msg})
},{wait:true});
