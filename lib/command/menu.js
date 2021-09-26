cmd.on('menu-all', ['menu','help'], [], async (msg, {
    query,
    client,
    prefix,
    command,
    usedPrefix
}) => {
    let {
    list,
    down,
    line,
    upper,
    head
    } = botinfo.unicode
    let type = query.toLowerCase().trim()
    let lama = []
    const moment = require("moment-timezone")
   
   const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
   
   const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'selamat malam'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'selamat petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'selamat sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'selamat siang'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'selamat pagi'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'selamat malam'
}
    let ancok = `*</Information>*\n${list} *Bot ini masih dalam tahap proses pengembangan!*\n${list} Group Chats : \n${list} https://bit.ly/Discussion-Bot\n${list} My Personal Web : \n${list} https://bit.ly/Zyy-PersonalWeb\n\n*Special thanks to :*\n${head} Zobin (Base)\n${head} Manxtodd \n${head} FazOne\n${head} Lindow\n${head} Anu Team`

    let hasile = `*Hai ${msg.sender.name} ${ucapanWaktu}!*\n\n${head} Creator : ${botinfo.ownername}\n${head} Bot Name : ${botinfo.botname}\n${head} Prefix : Banyak Lah Pokoknya\n${head} Lib : Baileys\n${head} Language : Javascript\n\n*</Command list>*\n`
    for (let a in cmd._tags) {
    hasile += list + ` ${prefix[0]}${a.toLowerCase()}menu\n`
     }
    hasile = hasile.trim()
    buttons = [{
    buttonId: usedPrefix+'snkbot',
    buttonText: {
    displayText: 'Syarat & Ketentuan'
    },
    type: 1
    },{
    buttonId: `${prefix[0]}owner`,
    buttonText: {
    displayText: 'Contact Owner'
    },
    type: 1
    }]
let imageMessage = logo.message
imageMessage.jpegThumbnail = logo.buffer
    let buttonsMessage = {
            contentText: `${hasile}\n\n${ancok}`,
            footerText: '*_Powered by zacros team.   _*',
            imageMessage,
            buttons,
            headerType: 4
    }
return client.sendMessageFromContent(msg.from,{buttonsMessage})
    }
)

cmd.on('menu-cmd', [/^([a-z]{0,20}menu)/i], [], async (msg, {
    prefix,
    client
}) => {
    let {
        list
    } = botinfo.unicode
    let type = msg.string.replace(prefix[0], '').split('menu')[0].toLowerCase()
    let lama = []
    if (type.includes("owner") && !msg.isOwner) return client.reply(msg, botinfo.response.owner)
    if (!cmd._tags[type]) return
    for (let a in cmd._tags[type]) {
    if (!cmd._tags[type][a].enable) continue
    let prek = cmd._tags[type][a].usedPrefix ? prefix[0] : ''
    lama = lama.concat(cmd._tags[type][a].command.map(value => prek + value))
    }
    
    let hasil = `*</${type[0].toUpperCase()+type.slice(1).toLowerCase()} Menu>*\n\n`
    for (let b of lama) {
        hasil += list + ` ${b.replace(/\\/g,'').toLowerCase()}\n`
    }
    
    hasil = hasil.trim()
    buttons = [{
        buttonId: `${prefix}carapenggunaan`,
        buttonText: {
        displayText: 'Cara penggunaan'
        },
        type: 1
    }]
   let buttonsMessage = {
        contentText: hasil,
        footerText: `Made With ❤️ by Azyansah`,
        buttons,
        headerType: 1
    }
return client.sendMessageFromContent(msg.from,{buttonsMessage})
})


cmd.on('snkbot',['snkbot'],[],(req,res) => {
  return res.client.reply(req,'Ancok')
},{usedPrefix:true});

cmd.on('menu-info',['infopenggunaan'],['info'],(msg,{client,prefix}) => {
return client.reply(msg,`*Hai* _${msg.sender.name}_
Berikut Cara Penggunaan Bot
Jika Terdapat Tanda _${botinfo.unicode.needed[0]}_ Dan _${botinfo.unicode.needed[1]}_ Artinya Di perlukan Sesuatu
Contoh: _${botinfo.unicode.needed[0]}_Teks_${botinfo.unicode.needed[1]}_
Artinya Diatas Diperlukan Teks
Ada juga _${botinfo.unicode.optional[0]}_ Dan _${botinfo.unicode.optional[1]}_
Artinya Itu Bisa Di Isi Bisa Tidak Sesuai Ada Mau (Opsional)
*_Cara Penggunaan_*
Untuk Penggunaan Silahkan Ketik:
*fiturnya*
Contoh: *${prefix[0]}menu*
Di Nomor Bot Atau Di Grub Yang Terdapat Nomor Bot, Maka Bot Akan Merespon!
Untuk Penggunaan Kedua Contohnya Jika Terdapat _${botinfo.unicode.needed[0]}_ Dan _${botinfo.unicode.needed[1]}_ Maka Kurung Tadi Jangan Di Anggap
Contoh: *${prefix[0]}ytmp3 https://youtu.be/aHbakLal*
Untuk Info Lebih Lanjut Ketik fiturnya --info
Contoh: *${prefix[0]}menu --info*`)
}) 
