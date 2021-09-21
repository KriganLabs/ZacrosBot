/*cmd.on('maker',['sticker','s','stiker'],['maker'],async(msg,{client}) => {
buf = await msg.quotedMsg.downloadMsg()
res = functions.createExif('Exneph','Bot','g')

client.sendSticker(msg.from,buf.buffer,{},'./tmp/g.exif')
},{usedPrefix:true});

cmd.on('semtiker',['stickernowm','snowm','stikernowm'],['maker'],async(msg,{client}) => {
client.sendSticker(msg.from,(await msg.quotedMsg.downloadMsg()).buffer)
},{usedPrefix:true});*/

 cmd.on('toimg',['toimg'],['maker'],async(msg,{client}) => {
client.sendImage(msg.from,(await msg.quotedMsg.downloadMsg()).buffer)
},{usedPrefix:true});

cmd.on('skytext',['skytext'],['maker'],async(msg,{query,client})=> {
if (!query) return client.sendText(msg.from,`Isi Query!!\nContoh : .skytext Anu`,msg)
res = await functions.axios.get(`https://exneph-api.herokuapp.com/api/maker2?text=${query.toLowerCase().trim()}&apikey=ZYY`)
let anu = res.data.result
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')
return client.sendMessage(msg.from,(await client.getBuffer(anu.results)).buffer,'imageMessage',{caption:``,quoted:msg})
});
