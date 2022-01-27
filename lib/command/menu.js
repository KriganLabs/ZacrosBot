cmd.on('menu-cmd', ['menu','help','command','commands'], [], async (msg, {
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
    "footerText": `Tekan tombol yang bertuliskan "Daftar Menu" yaa!\n\nJOIN MY GRUP CHATS \n [BOT WA] \nhttps://chat.whatsapp.com/KTm4p53s6457qcV5aDOAPI \n [R-BOT OFFICIAL GRUP] \nhttps://chat.whatsapp.com/DZf52GZI0yUA4izbhsjLqa \n\n binggung? ga bisa pake bot? ketik\n/infopenggunaan`,
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
        buttonId: `.info`,
        buttonText: {
        displayText: 'Information'
        },
        type: 1
    },{
        buttonId: prefix[0]+`snk`,
        buttonText: {
        displayText: 'Syarat Dan Ketentuan'
        },
        type: 1
    }]
   let locationMessage = {jpegThumbnail:logo.buffer}
   used_logo = (used_logo+1)%3
   let buttonsMessage = {
        contentText: hasil,
        footerText: botinfo.footerText + " | " + Object.keys(userDb).length + " Penggunaan",
        buttons,
        headerType: 1
    }
    const fs = require("fs")
    thumbnail = fs.readFileSync('./bot.jpg')
    fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`©RAMA`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `R-BOT👾️\nBy RamaGans`, 'jpegThumbnail': thumbnail}}}
return client.sendMessageFromContent(msg.from,{buttonsMessage},{quoted: fgif})            
})
