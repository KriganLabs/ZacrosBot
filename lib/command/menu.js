cmd.on('help', ['bot'], ['other'], async (msg, {
    query,
    client,
    prefix,
    command
}) => {
client.sendButton(msg.from,{jpegThumbnail:functions.fs.readFileSync('./src/images/wallpaper2.jpg')},'locationMessage',[{id:'.menu',text:'Menu Bot'},{id:'.sdk',text:'Syarat & Ketentuan'}],{quoted:msg,content:`Hai user\n\nIngin menggunakan bot ? sebelum menggunakan diharapkan membaca syarat dan ketentuan terlebih dahulu ya!\n\nKlik tombol menu di bawah ini untuk melihat list menu & tombol syarat dan ketentuan untuk membaca syarat dan ketentuan bot`,footer:'Powered by zacros team'})
},{usedPrefix:false})

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
    "footerText": `Tekan tombol yang bertuliskan "Daftar Menu" yaa!\n\nJika mengalami kesulitan dalam menggunakan bot, kamu bisa mengetik .infopenggunaan dalam kolom chat`,
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
        buttonId: prefix[0]+`info`,
        buttonText: {
        displayText: 'Information'
        },
        type: 1
    },{
        buttonId: prefix[0]+`sdk`,
        buttonText: {
        displayText: 'Syarat Dan Ketentuan'
        },
        type: 1
    }]
   let locationMessage = {jpegThumbnail:logo.buffer}
   used_logo = (used_logo+1)%3
   let buttonsMessage = {
        contentText: hasil,
        footerText: `© Powered by zacros team`,
        locationMessage,
        buttons,
        headerType: "LOCATION"
    }
return client.sendMessageFromContent(msg.from,{buttonsMessage})
})
