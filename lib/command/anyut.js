cmd.on('dashboard', ['dashboard'], ['info'], async (msg, {
    query,
    client,
    prefix,
    command
}) => {
    let {
    list,
    down,
    upper,
    head
    } = botinfo.unicode
    let type = query.toLowerCase().trim()
    let lama = []
    let hasile = `*Hai _${msg.sender.name}_!*\n\n*Command list*\n`
    for (let a in cmd._tags) {
    hasile += list + ` ${prefix[0]}${a.toLowerCase()}menu\n`
     }
    hasile = hasile.trim()
    buttons = [{
    buttonId: prefix[0]+`snkbot`,
    buttonText: {
    displayText: 'Syarat & ketentuan'
    },
    type: 1
    },{
    buttonId: prefix[0]+'owner',
    buttonText: {
    displayText: 'Contact owner'
    },
    type: 1
    },{
    buttonId: prefix[0]+'menu',
    buttonText: {
    displayText: 'Menu Bot'
    },
    type: 1
    }]
    let locationMessage = {jpegThumbnail:logo.buffer}
    used_logo = (used_logo+1)%3
    let buttonsMessage = {
    contentText: hasile,
    footerText: 'Gunakan bot dengan baik dan benar yah',
    locationMessage,
    buttons,
    headerType: "LOCATION"
    }
    return client.sendMessageFromContent(msg.from,{buttonsMessage})
    }
)

cmd.on('menu-cmd', ['menu'], ['info'], async (msg, {
    prefix,
    client,
    query,
    usedPrefix
}) => {
    let {
        list,
        body,
        upper,
        down,
        line,
        head
    } = botinfo.unicode
    let type = query && query.toLowerCase()
    let lama = []
    if (!cmd._tags[type]) {
    let sections = []
    let list_now = 0
    let list_nitip = {}
    for (let b in cmd._tags){
    let tit = list_now == 0 ? `${upper}${list} ${list}${line.repeat(13)}${list} ${list_now+1} ${list}${line.repeat(13)}${list}`:`${body}${list} ${list}${line.repeat(13)}${list} ${list_now+1} ${list}${line.repeat(13)}${list}`
    sections.push({
    "title": tit,
    "rows": [{
            "title": `${b[0].toUpperCase()+b.slice(1).toLowerCase()} Menu`,
            "rowId":prefix[0]+`menu${b}`,
            "description": 'Membuka Menu '+ b[0].toUpperCase()+b.slice(1).toLowerCase()
          }
        ]
      })
    list_nitip[b] = prefix[0]+`menu${b}`
    list_now++
    }
    return client.sendMessageFromContent(msg.from,{
  "listMessage": {
    "title": `*Hai ${msg.sender.name}!*`,
    "description": `Berikut Daftar Menunya!`,
    "footerText": `Tekan tombol yang bertuliskan "Daftar Menu" yaa!`,
    "buttonText": "Daftar Menu",
    "listType": "SINGLE_SELECT",
    sections
  }
})
    }
    for (let a of cmd._tags[type]) {
    if (!a.enable) continue
    let prek = a.usedPrefix ? prefix[0] : ''
    let param = a.param? a.param : ''
    lama = lama.concat(a.command.map(value => prek + value+ ` ${param}`))
    }
    
    let hasil = `${head}${line.repeat(4)}${list} *${type[0].toUpperCase()+type.slice(1).toLowerCase()} Menu*\n`
    for (let b of lama) {
        hasil += list + ` ${b.toLowerCase()}\n`
    }
    
    hasil = hasil.trim()+`\n${head}${line.repeat(2)}${list}`
    buttons = [{
        buttonId: prefix[0]+'information',
        buttonText: {
        displayText: 'Information'
        },
        type: 1
    },{
        buttonId: prefix[0]+'sdk',
        buttonText: {
        displayText: 'Syarat Dan Ketentuan'
        },
        type: 1
    }]
   let buttonsMessage = {
        contentText: hasil,
        footerText: `© Powered by zacros team`,
        buttons,
        headerType: 1
    }
return client.sendMessageFromContent(msg.from,{buttonsMessage})
})

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


cmd.on('info',['information'],['info'],(msg,{client,prefix}) => {
return client.sendText(msg.from,`*Hai ${msg.sender.name} berikut adalah informasi bot*

*</Information>*
Bot ini dibuat oleh : Zyy, Zenn, Manxtodd, & StevenTS / PPBI (Para Pemburu Bokep Internasional)
Bot Name : Zacros
Library : Baileys
Language : JavaScript
Source Code Bot : https://www.github.com/Zobin33/Anu-wabot

Mau donasi? chat owner mwehehe:3

Come join my group to discuss about bots or other
https://chat.whatsapp.com/BoWdkqEtgbaBmINjVsDmzD

Special thanks to :
• Galang/Zobin (Base)
• Lindow
• FazOne
• Anu Team`,msg)
})

cmd.on('info',['sdk'],['info'],(msg,{client,prefix}) => {
return client.sendText(msg.from,`*Hai ${msg.sender.name} berikut adalah syarat dan ketentuan bot*

- Dilarang spam terhadap bot
- Dilarang Menelpon Bot
- Harap menggunakan fitur bot dengan baik
- Bot tidak akan menyimpan media yang anda kirimkan
- Bot tidak akan bertanggung jawab atas fitur apapun yang anda gunakan
- Apabila menemukan bug/error pada bot harap hubungi Developer
- Bot berhak membanned/memblokir terhadap user dengan alasan maupun tanpa alasan`,msg)
})
