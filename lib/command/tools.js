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
