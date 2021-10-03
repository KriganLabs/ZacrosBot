cmd.on('eval',['>','=>'],['owner'],async(msg,res) => {
let parse = res.command.includes('=>') ? res.text.replace('=>','return ') : res.text.replace('>','')
try{
let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e });
return client.reply(msg,functions.util.format(evaluate));
} catch(e){
return res.client.reply(msg,functions.util.format(e));
}
},{owner:'--noresp',usedPrefix:false});

cmd.on('exec',['$'],['owner'],async(msg,res) => {
try{
functions.exec(`${res.query}`,(err,out) => {
if (err) return client.reply(msg,functions.util.format(err));
client.reply(msg,functions.util.format(out));
});
} catch(e){
 return res.client.reply(msg,functions.util.format(e));
}
},{owner:'--noresp',usedPrefix:false})

cmd.on('bc',['broadcast'],['owner'],(msg,{query,client}) => {
let sender = msg.sender.vname
let anu = client.chats.all()
for (let _ of anu) {
client.sendText(_.jid, `𝐙𝐚𝐜𝐫𝐨𝐬 𝐁𝐨𝐭 𝐁𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭\n\n${query}\n\nBroadcast message sender : ${sender}`)}
},{owner:'Only owner',query:'Isi query!'});
