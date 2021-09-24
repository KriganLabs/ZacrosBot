let {y2mateA,y2mateV} = require('../plugins/y2mate.js')
cmd.on('yt',['ytmp3','ytmp4','ytdoc'],['downloader'],async(msg,{client,query,prefix,isUrl,command}) => {
if (!isUrl) return client.reply(msg,`Link Yang Anda Masukan Bukan Dari Url`)
let type = command.endsWith('3') || command.endsWith('audio') || command.endsWith('aud') ? (await y2mateA(isUrl[0]))[0] : (await y2mateV(isUrl[0]))[0]
let data = command.endsWith('3') || command.endsWith('audio') || command.endsWith('aud') ? {type:'audio',mimetype:'audio/mpeg',filename:type.output,quoted:msg} : {type:'video',mimetype:'video/mp4',filename:type.output,quoted:msg}

let thumbnail = (await client.getBuffer(type.thumb)).buffer
client.sendMessage(msg.from,thumbnail,'imageMessage',{quoted:msg,caption:functions.parseResult(type,'Youtube Download')})
client.sendMessage(msg.from,(await client.getBuffer(type.link)).buffer,data.type+'Message',{...data,contextInfo:{externalAdReply:{title:type.judul,description:`Zacros`,mediaType:"VIDEO",thumbnail,mediaUrl:isUrl[0],thumbnailUrl:type.thumb}}})
},{query: `Masukan Link Youtube`,param:functions.needed('Link Youtube/Video')})

cmd.on('play',['play','playvid','playaud','playdoc'],['downloader','search'],async(msg,{query,client,prefix}) => {
let res = await functions.ytSearch(query)
let data = res.videos[0]
let buttons = [{buttonId:`${prefix[0]}ytmp4 ${data.url}`,buttonText:{displayText:'Video'},type:1},{buttonId:`${prefix[0]}ytmp3 ${data.url}`,buttonText:{displayText:'Audio'},type:1}/*,{buttonId:`${prefix[0]}ytdoc ${data.url}`,buttonText:{displayText:'Dokumen'},type:1}*/]

let buffer_thumb = (await client.getBuffer(data.thumbnail)).buffer
let imageMessage = (await client.prepareMessageMedia(buffer_thumb,'imageMessage')).imageMessage
let buttonsMessage = {footerText:`\n© Zyy.`,contentText:`*Youtube Play*\n\nType : ${data.type}\nUrl : ${data.url}\nTitle : ${data.title}\nDurasi : ${data.timestamp}\nViews : ${data.views}\n\nNote :Jika Tidak Bisa Menekan Tombol, Ketik ${prefix[0]}ytmp3/4 ${data.url}`,buttons,imageMessage,headerType:"IMAGE"}

return client.sendMessageFromContent(msg.from,{buttonsMessage},{quoted:msg})
},{query:`Masukan Query Anda`})

cmd.on('tiktok',['tiktok',"ttnowm","ttwm","ttaudio"],['downloader'],async(msg,{query,client,prefix}) => {
let res = await functions.axios.get(`https://megayaa.herokuapp.com/api/tiktod/?url=https://vt.tiktok.com/ZSJVM6WaE`)
let data = res.data.result

if (res.command === "tiktok") {
let res = await functions.axios.get(`https://megayaa.herokuapp.com/api/tiktod/?url=https://vt.tiktok.com/ZSJVM6WaE`)
let data = res.data.result
let buttons = [{buttonId:`${prefix[0]}ttnowm ${query}`,buttonText:{displayText:'No Watermark'},type:1},{buttonId:`${prefix[0]}ttwm ${query}`,buttonText:{displayText:'Watermark'},type:1},{buttonId:`${prefix[0]}ttaudio ${query}`,buttonText:{displayText:'Audio'},type:1}]
let buffer_thumb = (await client.getBuffer(logo.buffer)).buffer
let buttonsMessage = {footerText:`© Zyy.`,contentText:`*Youtube Play*\n\nClick the button`,buttons,locationMessage:{jpegThumbnail:logo.buffer},headerType:"LOCATION"}
return client.sendMessageFromContent(msg.from,{buttonsMessage},{quoted:msg})
    };

if (res.command === "ttnowm") {
let res = await functions.axios.get(`https://megayaa.herokuapp.com/api/tiktod/?url=https://vt.tiktok.com/ZSJVM6WaE`)
let data = res.data.result
await client.sendText(msg.from,"Tunggu sebentar ya..",msg)
return client.sendMessage(msg.from,(await client.getBuffer(data.nowatermark)).buffer,'videoMessage',{caption:`Nih`,quoted:msg})
    };

if (res.command === "ttwm") {
let res = await functions.axios.get(`https://megayaa.herokuapp.com/api/tiktod/?url=https://vt.tiktok.com/ZSJVM6WaE`)
let data = res.data.result
await client.sendText(msg.from,"Tunggu sebentar ya..",msg)
return client.sendMessage(msg.from,(await client.getBuffer(data.watermark)).buffer,'videoMessage',{caption:`Nih`,quoted:msg})
    };

},{query:`Masukan Link Anda`})
