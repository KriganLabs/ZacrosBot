cmd.on('eval',['>','=>'],['owner'],async(msg,res) => {
let parse = res.command.includes('=>') ? res.text.replace('=>','return ') : res.text.replace('>','')
try{
let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e });
return client.reply(msg,functions.util.format(evaluate), {quoted : msg, contextInfo: { externalAdReply: { title: botinfo.botname, "body": 'Multipurpose Whatsapp bot using baileys library!', thumbnailUrl:botinfo.thumb, sourceUrl: 'https://github.com/rasssya76/ZacrosBot/'}}});
} catch(e){
return res.client.reply(msg,functions.util.format(e), {quoted : msg, contextInfo: { externalAdReply: { title: botinfo.botname, "body": 'Multipurpose Whatsapp bot using baileys library!', thumbnailUrl:botinfo.thumb, sourceUrl: 'https://github.com/rasssya76/ZacrosBot/'}}});
}
},{owner:'--noresp',usedPrefix:false});

cmd.on('exec',['$'],['owner'],async(msg,res) => {
try{
functions.exec(`${res.query}`,(err,out) => {
if (err) return client.reply(msg,functions.util.format(err), {quoted : msg, contextInfo: { externalAdReply: { title: botinfo.botname, "body": 'Multipurpose Whatsapp bot using baileys library!', thumbnailUrl:botinfo.thumb, sourceUrl: 'https://github.com/rasssya76/ZacrosBot/'}}});
client.reply(msg,functions.util.format(out), {quoted : msg, contextInfo: { externalAdReply: { title: botinfo.botname, "body": 'Multipurpose Whatsapp bot using baileys library!', thumbnailUrl:botinfo.thumb, sourceUrl: 'https://github.com/rasssya76/ZacrosBot/'}}});
});
} catch(e){
 return res.client.reply(msg,functions.util.format(e), {quoted : msg, contextInfo: { externalAdReply: { title: botinfo.botname, "body": 'Multipurpose Whatsapp bot using baileys library!', thumbnailUrl:botinfo.thumb, sourceUrl: 'https://github.com/rasssya76/ZacrosBot/'}}});
}
},{owner:'--noresp',usedPrefix:false})

cmd.on('bc',['broadcast'],['owner'],(msg,{query,client}) => {
let anu = client.chats.all().filter(a => !a.read_only && a.message && !a.archive).map(a => a.jid)
for (let _ of anu) {
client.sendText(_, `[ Bot Broadcast ]\n\n${query}`)}
},{owner:true,param:functions.needed("query")});

cmd.on('bcgc',['bcgc'],['owner'],(msg,{query,client}) => {
let asu = client.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v.jid)
for (let f of asu) {
client.sendText(f, `[ All Group Broadcast ]\n\n${query}`)}
},{owner:true,param:functions.needed("query")});

cmd.on('clear',['clearall'],['owner'],(msg,{query,client}) => {
 for ( let am of client.chats.all()) client.modifyChat(am.jid,'delete')
 return client.sendText(msg.from, "Ok")
},{owner:true})

cmd.on('tampilanbot',['setui'],['owner'],async(msg,{query,client}) => {
	qq = query.split("|");
	switch(qq[0]){
	case "name": {
		await client.updateProfileName(qq[1]);
		return client.reply(msg, `Sukses Mengganti Nama WhatsApp Bot : ${qq[1]}`);
		}
		break
	case "bio": {
		await client.setStatus(qq[1]);
		return client.reply(msg, `Sukses Mengganti Bio WhatsApp Bot : ${qq[1]}`);
		}
		break
	case "prefix": {
	    botinfo.prefix = qq[1];
	    return client.reply(msg, `Sukses Mengganti Prefix Bot : ${qq[1]}`);
		}
		break
	case "botname":{
	    botinfo.botname = qq[1];
	    return client.reply(msg, `Sukses Mengganti Nama Bot : ${qq[1]}`);
		}
		break
	case "ownername":{
		botinfo.ownername = qq[1];
		return client.reply(msg, `Sukses Mengganti Nama Owner Bot : ${qq[1]}`);
		}
		break
	case "footertext": {
		botinfo.footerText = qq[1];
		return client.reply(msg, `Sukses Mengganti Default Footer Button : ${qq[1]}`);
		}
		break
    }
	if (!qq[0] && !qq[1]) {
		return client.reply(msg, "Masukkan Query & Code!\n\nList Query :\n- name\n- bio\n- prefix\n- botname\n- ownername\n- footertext\n\nContoh Penggunaan :\n.setui prefix !");
		}
		},{owner:true,param:functions.needed("type  code")});
		
		cmd.on("blocklist", ["blocklist"], ["owner"], (req, res) => {
			try {
			  let blocklist = client.blocklist;
			  let txt = "";
			  let num = 1;
			  let blockList = [];
			  txt += "Jumlah: " + blocklist.length + "\n";
			  for (let i of blocklist) {
				txt += "Urutan: " + num++ + "\n";
				txt += "Nomor: @" + i.split("@")[0] + "\n";
				txt += "Wame: wa.me/" + i.split("@")[0] + "\n\n";
				blockList.push(i.replace("@c.us", "@s.whatsapp.net"));
			  }
			  client.reply(req, txt, {
				contextInfo: {
				  mentionedJid: blockList
				}
			  });
			} catch (err) {
			  console.log(err);
			  client.reply(req, "Terjadi kesalahan");
			}
		  }, {
			owner: true,
		  });
