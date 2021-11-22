let {y2mateA,y2mateV} = require('../plugins/y2mate.js')
cmd.on('yt',['ytmp3','ytmp4'],['downloader'],async(msg,{client,query,prefix,isUrl,command}) => {
if (!isUrl) return client.reply(msg,`Link Yang Anda Masukan Bukan Dari Url`)
let type = command.endsWith('3') || command.endsWith('audio') || command.endsWith('aud') ? (await y2mateA(isUrl[0]))[0] : (await y2mateV(isUrl[0]))[0]
let data = command.endsWith('3') || command.endsWith('audio') || command.endsWith('aud') ? {type:'audio',mimetype:'audio/mpeg',filename:type.output,quoted:msg} : {type:'video',mimetype:'video/mp4',filename:type.output,quoted:msg}

let thumbnail = (await client.getBuffer(type.thumb)).buffer
client.sendMessage(msg.from,thumbnail,'imageMessage',{quoted:msg,caption:functions.parseResult(type,'Youtube Download')})
client.sendMessage(msg.from,(await client.getBuffer(type.link)).buffer,data.type+'Message',{...data,contextInfo:{externalAdReply:{title:type.judul,description:`Zacros`,mediaType:"VIDEO",thumbnail,mediaUrl:isUrl[0],thumbnailUrl:type.thumb}}})
},{query: `Masukan Link Youtube`,param:functions.needed('Link Youtube/Video')})

cmd.on('play',['play','playvid','playaud'],['downloader'],async(msg,{query,client,prefix}) => {
let res = await functions.ytSearch(query)
let data = res.videos[0]
let buttons = [{buttonId:`${prefix[0]}ytmp4 ${data.url}`,buttonText:{displayText:'Video'},type:1},{buttonId:`${prefix[0]}ytmp3 ${data.url}`,buttonText:{displayText:'Audio'},type:1}]

let buffer_thumb = (await client.getBuffer(data.thumbnail)).buffer
let imageMessage = (await client.prepareMessageMedia(buffer_thumb,'imageMessage',{thumbnail: Buffer.alloc(0)})).imageMessage
let buttonsMessage = {footerText:`Jika Tidak Bisa Menekan Tombol, Ketik ${prefix[0]}ytmp3/4 `+data.url,contentText:functions.parseResult(data,{title:'Youtube Play'}),buttons,imageMessage,headerType:"IMAGE"}

return client.sendMessageFromContent(msg.from,{buttonsMessage},{quoted:msg})
},{query:`Masukan Query Anda`,param: functions.needed('query')})

  
cmd.on('tiktoknowm',['tiktok'],['downloader'],async(msg,{query,client})=> {
if (!query) return client.sendText(msg.from,`Masukkan link tiktok\nContoh : .ttnowm https://vm.tiktok.com/ZSJcLPNpe`,msg)
let vid = await functions.axios.get(`${botinfo.linkApi.zacros}/downloader/tiktoknowm?link=${query}`)
return client.sendVideo(msg.from, vid)
},{param:functions.needed('link video')});

cmd.on('tiktokaud',['ttaudio'],['downloader'],async(msg,{query,client})=> {
let res = await functions.axios.get(botinfo.linkApi.zacros+"/downloader/tiktokaudio?link="+query)
return client.sendAudio(msg.from, res)
},{query: "Masukkan parameter query",param:functions.needed('link video')});

cmd.on('fbdl',['facebookdl', 'fb','facebook'],['downloader'],async(msg,{query,client})=> {
let res = await functions.axios.get(botinfo.linkApi.zacros+"/downloader/fbdl?link="+query)
let video = res.data.medias[1]
return client.sendVideo(msg.from, video.url)
},{query: "Masukkan parameter query",param:functions.needed('link')});

cmd.on('ig',['igvideo','instagram'],['downloader'],async(msg,{query,client})=> {
let res = await functions.axios.get(botinfo.linkApi.zacros+"/downloader/igdl?link="+query)
return client.sendVideo(msg.from, res[0])
},{query: "Masukkan parameter query",param:functions.needed('link video')});

cmd.on('yts',['ytsearch'],['search','downloader'],async(msg,{query,client})=> {
 let a = (await functions.ytSearch(query)).all;
let b = ``

for (let c of a) b+= functions.parseResult(c,{title:'Youtube Search',ignoreKey:['duration']})+'\n'
return client.sendText(msg.from, b.trim())
},{query:'Isi query!',param:functions.needed('query')});
