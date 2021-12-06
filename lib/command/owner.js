cmd.on('eval',['>','=>'],['owner'],async(msg,res) => {
let parse = res.command.includes('=>') ? res.text.replace('=>','return ') : res.text.replace('>','')
try{
let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e });
return client.reply(msg,functions.util.format(evaluate), {quoted : msg, contextInfo: { externalAdReply: { title: botinfo.botname, "body": 'Multipurpose Whatsapp bot using baileys library!', thumbnailUrl:botinfo.thumb, sourceUrl: 'https://github.com/Zacros-Team/ZacrosBot/'}}});
} catch(e){
return res.client.reply(msg,functions.util.format(e), {quoted : msg, contextInfo: { externalAdReply: { title: botinfo.botname, "body": 'Multipurpose Whatsapp bot using baileys library!', thumbnailUrl:botinfo.thumb, sourceUrl: 'https://github.com/Zacros-Team/ZacrosBot/'}}});
}
},{owner:'--noresp',usedPrefix:false});

cmd.on('exec',['$'],['owner'],async(msg,res) => {
try{
functions.exec(`${res.query}`,(err,out) => {
if (err) return client.reply(msg,functions.util.format(err), {quoted : msg, contextInfo: { externalAdReply: { title: botinfo.botname, "body": 'Multipurpose Whatsapp bot using baileys library!', thumbnailUrl:botinfo.thumb, sourceUrl: 'https://github.com/Zacros-Team/ZacrosBot/'}}});
client.reply(msg,functions.util.format(out), {quoted : msg, contextInfo: { externalAdReply: { title: botinfo.botname, "body": 'Multipurpose Whatsapp bot using baileys library!', thumbnailUrl:botinfo.thumb, sourceUrl: 'https://github.com/Zacros-Team/ZacrosBot/'}}});
});
} catch(e){
 return res.client.reply(msg,functions.util.format(e), {quoted : msg, contextInfo: { externalAdReply: { title: botinfo.botname, "body": 'Multipurpose Whatsapp bot using baileys library!', thumbnailUrl:botinfo.thumb, sourceUrl: 'https://github.com/Zacros-Team/ZacrosBot/'}}});
}
},{owner:'--noresp',usedPrefix:false})

cmd.on('bc',['broadcast'],['owner'],(msg,{query,client}) => {
let sender = msg.sender.vname
let anu = client.chats.all()
for (let _ of anu) {
client.sendText(_.jid, `${botinfo.botname} Broadcast\n\n${query}\n\nBroadcast message sender : ${sender}`)}
},{owner:'Only owner',query:'Isi query!'});

cmd.on('bcgc',['broadcastgc', 'bcgc'],['owner'],(msg,{query,client}) => {
let sender = msg.sender.vname
let anu = client.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v.jid)
for (let _ of anu) {
client.sendText(_.jid, `${botinfo.botname} Broadcast\n\n${query}\n\nBroadcast message sender : ${sender}`)}
},{owner:'Only owner',query:'Isi query!'});

cmd.on('bcbutt',['bcbutton'],['owner'],(msg,{query,client}) => {
let sender = msg.sender.vname
let anu = client.chats.all()
for (let _ of anu) {
client.sendButton(_.jid,Buffer.alloc(0),'documentMessage',[{id:'.menu',text:'MENU'},{id:'.info',text:'INFO'}],{mimetype:'application/octet-stream',filename:botinfo.botname+' Broadcast',content:`${query}\n\n_Broadcast message sender : ${sender}_`,footer:botinfo.footerText,contextInfo:{ externalAdReply: { title: botinfo.botName, "body": `Multipurpose Whatsapp bot using library baileys!`,thumbnailUrl: botinfo.thumb,sourceUrl: 'wa.me/+6283153448697'}}})
}
},{owner:'Only owner',query:'Isi query!',param: functions.needed('teks')});
