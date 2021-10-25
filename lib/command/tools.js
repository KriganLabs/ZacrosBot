cmd.on("insgc",["inspect","inspectgc"],["tools"],async(msg,{query,client}) => {
let codee = query.split('https://chat.whatsapp.com/')[1];
let res = await client.query({json: ["query", "invite", codee],expect200: true});
let ins = `*「 Group Link Inspector 」*

• *Id:* ${res.id}

• *Judul:* ${res.subject}

• *Dibuat oleh* @${res.id.split('-')[0]}
pada *${functions.formatDate(res.creation * 1000)}*${res.subjectOwner ? `

• *Judul diubah oleh* @${res.subjectOwner.split(`@`)[0]}
pada *${functions.formatDate(res.subjectTime * 1000)}*`: ''}${res.descOwner ? `

• *Deskripsi diubah oleh* @${res.descOwner.split(`@`)[0]}
pada *${functions.formatDate(res.descTime * 1000)}*` : ''}

• *Jumlah Member:* ${res.size}

• *Teman yang diketahui join*: ${res.participants ? '\n' + res.participants.map((user, i) => ++i + '. @' + user.id.split(`@`)[0]).join('\n').trim() : 'Tidak ada'}
${res.desc ? `\n• *Deskripsi:*\n
${res.desc}` : '\n*Tidak ada Deskripsi*'}`
await client.sendMessage(msg.from, ins, "conversation", { quoted: msg, contextInfo: { mentionedJid: functions.parseMention(ins)}});
},{wait:true,query:"Masukan Url Group!\nContoh : .inspect (url group mu)",param:functions.needed("link")});

cmd.on('shorturl',['shorturl','tinyurl'],['tools'],async(msg,{query,client})=> {
let anu = (await functions.axios.get(`https://man-api.herokuapp.com/api/short/tiny?url=${query.toLowerCase().trim()}&apikey=MAN`)).data;
let anu2 = anu.result.link
return client.reply(msg,anu2)
},{query:"Url?",param:functions.needed("url")});

cmd.on('translate',['translate','tr'],['tools'],async(msg,{query,client}) => {
let anu = (await functions.axios.get(`https://megayaa.herokuapp.com/api/translate?to=id&kata=${query.toLowerCase().trim()}`)).data;
return client.reply(msg,`${anu.translate}\n\nQuery : ${query}\nTranslate : ${anu.info}`);
},{query:"Teksnya?",param:functions.needed("query")});

cmd.on("password",["genpassword","pwgenerator"],["tools"],async(msg,res) => {
  await client.sendText(msg.from, "Sedang Membuat Password...",msg);
  const low = functions.memorablePass("xxxxxxxx");
  const medium = functions.memorablePass("xxxxxxxxxxxx");
  const strong = functions.strongPass("xxxxxxxxxxxxxxxx");
  const verStrong = functions.strongPass("xxxxxxxxxxxxxxxxxxxxxxxx");
  let recult = `*[ PASSWORD GENERATOR ]*

• Low : ${low}
• Medium : ${medium}
• Strong : ${strong}
• Very Strong : ${verStrong}`
    return client.reply(msg, recult);
  });

cmd.on("dork",["dork"],["tools"],async(msg,{query,client}) => {
let q = query.split("|");
if (!q[0]) return client.sendText(msg.from, "Masukkan nomor\nEx : .dork 1848xxxxxxx|10");
if (!q[1]) return client.sendText(msg.from, "Masukkan jumlah nomor");
w = q[0]
const nitip = w.split('x')
const active = []
let non = []
for (i=0;i<q[1];i++){
let total = ``
for  (m=0;m<nitip.length;m++){
if (nitip[m] == '') {
total += Math.floor(Math.random()*9)
} else {
total += nitip[m]
}
}
total = total+`@s.whatsapp.net`
let anu = await client.isOnWhatsApp(total)
if (anu && anu.exists){
let stat = await client.getStatus(total)
stat = typeof stat.status == 'number' ? 'Unknown' : stat.status
active.push({jid:total,stat})
} else {
non.push({jid:total})
}
}
Wee = {active,non}
now = 1
be = '*Nomor Active*\n\n'
for (let i of active) {
be += `*${now++}.* Nomor *wa.me/${i.jid.split('@')[0]}*
Status: *${i.stat}*\n`
}
wq = 1
aec = '*Nomor Nonaktif*\n\n'
for (let i of non) {
aec += `*${wq++}.* Nomor: *wa.me/${i.jid.split('@')[0]}*\n`
}
if(active == '') {
client.reply(aec)
} else {
client.reply(msg,be+'\n\n'+aec)
}
},{param: functions.needed("nomor|jumlah"),wait:true});
