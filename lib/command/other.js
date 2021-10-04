cmd.on('example3',['ping','speed','response'],['other'],async(req, res) => {
timestamp = m.Speed();
latensi = m.Speed(); - timestamp
return client.sendText(req.from, "Speed Response is "+latensi.toFixed(4)+" Second", req);
});

cmd.on('btnrespon',['howtouse'],['other'],async(msg, res) => {
  txt = `_*Cara Penggunaan*_

• Untuk Command Yang Bertanda *<media>*
artinya kamu harus reply media dengan command tersebut, contoh : .sticker (media/ reply video/gambar)

• Untuk command yang bertanda *<sticker>*
artinya kamu harus reply sticker dengan command tersebut, contoh : .toimg (sticker/ reply sticker/sticker gif)

• Untuk command yang bertanda *<video>*
artinya kamu harus reply video dengan command tersebut, contoh : .tomp3 (video/ reply videonya)

• Untuk command yang bertanda *<image>*
artinya kamu harus reply gambar dengan command tersebut, contoh : .invert (image/ reply gambarnya)

• Untuk command yang bertanda *<audio>*
artinya kamu harus reply audio dengan command tersebut, contoh : .vibra (audio/ reply voice note/audio nya)

• Untuk command yang bertanda *<query>*
artinya kamu harus input teks/keyword untuk mencari sesuatu dengan bot, contoh : .pinterest (query/ query bisa kalian masukkan apa yang mau kalian cari atau teks/nama)`
buttons = [{buttonId:bot.prefix+"menu", buttonText:{displayText:"Back To Menu"},type:1}]
let buttonsMessage = {
  contentText:txt,
  footerText:bot.footerBtn,
  buttons,
  headerType:1
}
return client.sendMessageFromContent(msg.from, {buttonsMessage},{quoted:msg})
});

cmd.on('kittshop',['kittodshop'],['other'],async(msg,res) => {
  ctext = `Halo ${msg.sender.name}! Welcome To Kitt Shop.

Price List (Free Fire Acc) :
- akun1 (acc data)
- akun2 (acc data)
- akun3 (acc data)

Price List (Nomor Kosong Luar Negeri) :
• +354 nokos (backup number 100% garansi)
• +972 nokos (backup number 100% garansi)
• +41 nokos (backup number 100% garansi)

Information Stock (Acc & Nokos)
• +354 nokos stock now : 1
• +41 nokos stock now : 1
• +972 nokos stock now : 4
• FF Acc Stock Now : 0`

buttons = [{
	buttonId:`ordernow`,
	buttonText:{displayText:"Order Now"},
	type:1
	},{
	buttonId:bot.prefix[0]+`ownerbot`,
	buttonText:{displayText:"Contact Owner"},
	type:1
	}]
let buttonsMessage = {
	contentText:ctext,
	footerText:bot.footerBtn,
	buttons,
	headerType:1
	}
return client.sendMessageFromContent(msg.from, {buttonsMessage},{quoted:msg});
},{usedPrefix:true});

cmd.on("ownerr",["ownerbot"],["other"],async(msg,res) => {
	client.sendMessageFromContent(msg.from, {contactsArrayMessage: {
				"displayName": "Manxtodd",
				  "contacts": [
				 	 {
					  "displayName": "Manxtodd",
						"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Manxtodd\nitem1.TEL;waid=6288231715470:6288231715470\nitem1.X-ABLabel:Contributor Ini Bot\nEND:VCARD"
					 },
				   {
					 	"displayName": "Kang Banned",
						"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Kang Banned\nitem1.TEL;waid=0:0\nitem1.X-ABLabel:Mark Zuckerberg\nEND:VCARD"
					 },
					 {
						"displayName": "Kittod",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Kittod\nitem1.TEL;waid=628815119135:628815119135\nitem1.X-ABLabel:Bos Nya Ini Bot\nEND:VCARD"
					 }
					 ],
				   }}, {quoted:msg})
	});

cmd.on('esenka',['snkbot'],["other"],async(msg, res) => {
  txxt = `Dengan menggunakan bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
  
- Bot tidak menyimpan data anda di server kami.
- Bot tidak bertanggung jawab atas Apa yang anda kirim ke lawan bicara anda.
- Bot tidak boleh digunakan untuk layanan yang bertujuan/berkontribusi dalam: 
    • seks / perdagangan manusia
    • perjudian
    • perilaku adiktif yang merugikan 
    • kejahatan
    • kekerasan (kecuali jika diperlukan untuk melindungi keselamatan publik)
    • pembakaran hutan / penggundulan hutan
    • ujaran kebencian atau diskriminasi berdasarkan usia, jenis kelamin, identitas gender, ras, seksualitas, agama, kebangsaan

Source Code BOT : https://github.com/Manxtodd/Whatsapp-bot (#comingsoon)
Baileys WhatsApp library: https://github.com/adiwajshing/Baileys

*Support Me :*
- buymeacoffee.com/manxtodd
- paypal.me/manxtodd

Best regards, @${bot.ownerNumber[0]}.`
  client.reply(msg, txxt, {contextInfo:{mentionedJid:m.parseMention(txxt)}})
});

cmd.on("donate",["donasi","donate"],["other"],async(msg, res) => {
  dmsg = `_*Donasi ${bot.botname}*_

*- For Owner* 
Dana : 08815119135
Gopay : 08815119135

*- For Contributor*
Dana : 088231715470 (Manxtodd)
Gopay : 088231715470 (Manxtodd)
Paypal : http://paypal.me/Manxtodd (Manxtodd)

Shoopepay : gak tau:v (Zyy)
Dana : gak tau :v (Zyy)
Gopay : gak tau:v (Zyy)

Gopay : gak tau:v (StevenTs)
Dana : gak tau:v (StevenTs)`
return await client.sendText(msg.from, dmsg, msg);
});

cmd.on("lapor",["report","laporkan"],["other"],async(msg, {query,client}) => {
  let tet = `*Laporan!\n\n• Pengirim : @${msg.sender.jid.split("@")[0]}\n• Pesan : ${query}`
  await client.sendMessage(bot.ownerNumber[0]+"@s.whatsapp.net", tet, "conversation", {contextInfo:{mentionedJid:functions.parseMention(tet)}});
  return client.sendText(msg.from, "Laporan Sudah Terkirim Ke Owner Ya Kak!", msg);
  },{query:"Mau Lapor Apa Kak?",param:functions.needed("query")});

cmd.on("tag",["mention","tag"],["other"],async(msg, {query, client}) => {
	return await client.sendMessage(msg.from, query+" tagged!", "conversation",{contextInfo:{mentionedJid: m.parseMention("@"+query)},quoted:msg});
	},{query:"Masukan Nomor!\nEx : .mention @0",param:m.needed("number")});
