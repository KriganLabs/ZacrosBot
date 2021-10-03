const similarity = require('similarity')
const threshold = 0.72

client.tebakgambar = client.tebakgambar ? client.tebakgambar : {}
client.tebaklagu = client.tebaklagu ? client.tebaklagu : {}
client.tebakkata = client.tebakkata ? client.tebakkata : {}
//tes
cmd.before('tebakgambar', async(m) => {
let bantuan = typeof m.string === 'string' ? m.string.toLowerCase()	: ''
switch(bantuan){
	case client.prefix+'hint':
		let jawab = client.tebakgambar[m.from][1]
		client.reply(m, '```' + jawab.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_') + '```')
        break
}	
  let id = m.from
 //if (!m.quotedMsg || !m.quotedMsg.fromMe || !fromBaileys || !/Ketik.*hint/i.test(m.quotedMsg.string) || bantuan === client.prefix+'hint') return
	if(!(bantuan == client.prefix+'hint')) {
		if(bantuan === 'Masih ada soal belum terjawab di chat ini' && m?.fromMe) throw false
		if(/Waktu habis!.*Jawabannya adalah/i.test(bantuan) && m?.fromMe) throw false
		if(m.quotedMsg.fromMe){
		const fromBaileys = m.quotedMsg.id ? m.quotedMsg.id.startsWith('3EB0') && m.quotedMsg.id.length === 12 : false	
		if(fromBaileys && /Ketik.*hint/i.test(m.quotedMsg.string)){
  if (!(id in client.tebakgambar)) return client.reply(m, 'Soal itu telah berakhir')
  if (m.quotedMsg.id == client.tebakgambar[id][0].key.id) {
    let json = JSON.parse(JSON.stringify(client.tebakgambar[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (bantuan == json.jawaban.toLowerCase().trim()) {
		client.reply(m,`*Jawaban Anda Benar!*`)
      clearTimeout(client.tebakgambar[id][2])
      delete client.tebakgambar[id]
    } else if (similarity(bantuan, json.jawaban.toLowerCase().trim()) >= threshold) client.reply(m, `*Dikit Lagi!*`)
    else client.reply(m,`*Jawaban Anda Salah!*`)
  }
}
}
}
})

cmd.on('tebakgambar', ['tebakgambar'],['fun'], async(msg, {usedPref}) => {
	timeout = 120000
         jidnye = msg.from
		  if (jidnye in client.tebakgambar) {
			return client.sendMessage(jidnye, 'Masih ada soal belum terjawab di chat ini', 'conversation', {quoted: client.tebakgambar[jidnye][0]})
		  }
		  gas = await functions.axios.get('https://megayaa.herokuapp.com/api/kuis/tebakgambar').then(x => x.data)
		  caption = `
*「 TEBAK GAMBAR 」*\n\nTimeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPref}hint untuk hint
    `.trim()
  client.tebakgambar[jidnye] = [
    await client.sendMessage(jidnye, (await client.getBuffer(gas.image)).buffer, 'imageMessage', { quoted: msg, caption: caption }),
    gas,
    setTimeout(() => {
      if (client.tebakgambar[jidnye]) client.sendMessage(msg.from,`Waktu habis!\nJawabannya adalah *${gas.jawaban}*`, 'conversation', {quoted: client.tebakgambar[jidnye][0]})
		//gambargame.splice(from, 1)
      delete client.tebakgambar[jidnye]
    }, timeout)
	]
	}, {})

cmd.before('tebaklagu', async(m) => {
let bantuan = typeof m.string === 'string' ? m.string.toLowerCase()	: ''
switch(bantuan){
	case client.prefix+'cek':
		let jawab = client.tebaklagu[m.from][2]
		client.reply(m, '```' + jawab.judul.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_') + '```')
        break
}	
  let id = m.from
 //if (!m.quotedMsg || !m.quotedMsg.fromMe || !fromBaileys || !/Ketik.*hint/i.test(m.quotedMsg.string) || bantuan === client.prefix+'hint') return
	if(!(bantuan == client.prefix+'cek')) {
		if(bantuan === 'Masih ada soal belum terjawab di chat ini' && m.fromMe) throw false
		if(/Waktu habis!.*Jawabannya adalah/i.test(bantuan) && m.fromMe) throw false
		if(m.quotedMsg.fromMe){
		const fromBaileys = m.quotedMsg.id ? m.quotedMsg.id.startsWith('3EB0') && m.quotedMsg.id.length === 12 : false	
		const detectAudio = client.tebaklagu[m.from] !== null ? (m.quotedMsg.type === 'audioMessage') && (client.tebaklagu[m.from][1].message.audioMessage.url === m.quotedMsg.message.audioMessage.url) : false
		if(fromBaileys && /Ketik.*cek untuk bantuan/i.test(m.quotedMsg.string) || detectAudio){
  if (!(id in client.tebaklagu)) return client.reply(m, 'Soal itu telah berakhir')
  if (m.quotedMsg.id == client.tebaklagu[id][0].key.id || detectAudio) {
    let json = JSON.parse(JSON.stringify(client.tebaklagu[id][2]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (bantuan == json.judul.toLowerCase().trim()) {
		client.reply(m,`*Jawaban Anda Benar!*`)
      clearTimeout(client.tebaklagu[id][3])
      delete client.tebaklagu[id]
    } else if (similarity(bantuan, json.judul.toLowerCase().trim()) >= threshold) client.reply(m, `*Dikit Lagi!*`)
    else client.reply(m,`*Jawaban Anda Salah!*`)
  }
}
}
}
})	
	
cmd.on('tebaklagu', ['tebaklagu'],['fun'], async(msg, {usedPref}) => {
	timeout = 120000
         jidnye = msg.from
		  if (jidnye in client.tebaklagu) {
			return client.sendMessage(jidnye, 'Masih ada soal belum terjawab di chat ini', 'conversation', {quoted: client.tebaklagu[jidnye][0]})
		  }
		   gas = await functions.axios.get('http://fazone-app.tk/tebaklagu.php').then(x => x.data)
		  if(gas.preview === null) return client.reply(msg, 'Server Error Ulangi Lagi')
		  caption = `
*「 TEBAK LAGU 」*\n\nTimeout *${(timeout / 1000).toFixed(2)} detik*
Silahkan Reply Pesan ini/Audionya
Dengan Mengetik teks judul lagu
Ketik ${usedPref}cek untuk bantuan
    `.trim()
  client.tebaklagu[jidnye] = [
    await client.sendMessage(jidnye, caption, 'conversation', { quoted: msg }),
	await client.sendMessage(jidnye, (await client.getBuffer(gas.preview)).buffer, 'audioMessage', {quoted: msg, mimetype: 'audio/mp4'}),
    gas,
    setTimeout(() => {
      if (client.tebaklagu[jidnye]) client.sendMessage(msg.from,`Waktu habis!\nJawabannya adalah *${JSON.parse(JSON.stringify(client.tebaklagu[jidnye][2])).judul}*`, 'conversation', {quoted: client.tebaklagu[jidnye][0]})
		//gambargame.splice(from, 1)
      delete client.tebaklagu[jidnye]
    }, timeout)
	]
	}, {})
	
	

cmd.before('tebakkata', async(m) => {
let bantuan = typeof m.string === 'string' ? m.string.toLowerCase()	: ''
switch(bantuan){
	case client.prefix+'teka':
		let jawab = client.tebakkata[m.from][1]
		client.reply(m, '```' + jawab.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_') + '```')
        break
}	
  let id = m.from
 //if (!m.quotedMsg || !m.quotedMsg.fromMe || !fromBaileys || !/Ketik.*hint/i.test(m.quotedMsg.string) || bantuan === client.prefix+'hint') return
	if(!(bantuan == client.prefix+'teka')) {
		if(bantuan === 'Masih ada soal belum terjawab di chat ini' && m.fromMe) throw false
		if(/Waktu habis!.*Jawabannya adalah/i.test(bantuan) && m.fromMe) throw false
		if(m.quotedMsg.fromMe){
		const fromBaileys = m.quotedMsg.id ? m.quotedMsg.id.startsWith('3EB0') && m.quotedMsg.id.length === 12 : false	
		if(fromBaileys && /Ketik.*teka untuk bantuan/i.test(m.quotedMsg.string)){
  if (!(id in client.tebakkata)) return client.reply(m, 'Soal itu telah berakhir')
  if (m.quotedMsg.id == client.tebakkata[id][0].key.id) {
    let json = JSON.parse(JSON.stringify(client.tebakkata[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (bantuan == json.jawaban.toLowerCase().trim()) {
		client.reply(m,`*Jawaban Anda Benar!*`)
      clearTimeout(client.tebakkata[id][2])
      delete client.tebakkata[id]
    } else if (similarity(bantuan, json.jawaban.toLowerCase().trim()) >= threshold) client.reply(m, `*Dikit Lagi!*`)
    else client.reply(m,`*Jawaban Anda Salah!*`)
  }
}
}
}
})	
	
cmd.on('tebakkata', ['tebakkata'],['fun'], async(msg, {usedPref}) => {
	timeout = 120000
         jidnye = msg.from
		  if (jidnye in client.tebakkata) {
			return client.sendMessage(jidnye, 'Masih ada soal belum terjawab di chat ini', 'conversation', {quoted: client.tebakkata[jidnye][0]})
		  }
		   gas = await functions.axios.get('http://fazone-app.tk/tebakkata.php').then(x => x.data)
		  caption = `
*「 TEBAK KATA 」*\n\n
${gas.pertanyaan}

Silahkan Reply Pesan ini Dengan Mengetik jawabannya
Ketik ${usedPref}teka untuk bantuan
    `.trim()
  client.tebakkata[jidnye] = [
    await client.sendMessage(jidnye, caption, 'conversation', { quoted: msg }),
    gas,
    setTimeout(() => {
      if (client.tebakkata[jidnye]) client.sendMessage(msg.from,`Waktu habis!\nJawabannya adalah *${JSON.parse(JSON.stringify(client.tebakkata[jidnye][1])).jawaban}*`, 'conversation', {quoted: client.tebakkata[jidnye][0]})
		//gambargame.splice(from, 1)
      delete client.tebakkata[jidnye]
    }, timeout)
	]
	}, {})


cmd.on('dare',['dare'],['fun'],async(msg, {
  command, client}) => {
 res = await functions.axios.get(`https://exneph-api.herokuapp.com/api/random/dare?apikey=ZYY`)
anu = res.data.result
return client.sendText(msg.from,`Dare\n\n${anu}`,msg)
},{usedPrefix:true});

cmd.on('truth',['truth'],['fun'],async(msg, {
  command, client}) => {
 res = await functions.axios.get(`https://exneph-api.herokuapp.com/api/random/truth?apikey=ZYY`)
anu = res.data.result
return client.sendText(msg.from,`Truth\n\n${anu}`,msg)
},{usedPrefix:true});


