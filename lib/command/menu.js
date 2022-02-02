//modul
const { processTime
} = require('@adiwajshing/baileys')
const moment = require('moment-timezone')
const fs = require('fs')
const os = require('os'); 
//all 
thumbnail = fs.readFileSync('./bot.jpg')
baterai = {
	battery: "" || "blom sinkron",
	isCharge: "" || false
}
const nom = msg.participant
const groups = client.chats.array.filter(v => v.jid.endsWith('g.us'))
const privat = client.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
const ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
uptime = process.uptime()
const timestampu = speed();
const latennsi = speed() - timestampu
const total = math(`${groups.length} ${privat.length}`)
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = client.user.phone				   
//Waktu
const jam = moment.tz('Asia/Jakarta').format('HH:mm')
//fake
const ftroli ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 128,status: 200, thumbnail: thumbnail, surface: 200, message: `Hai Kak ${msg.sender.name}!`, orderTitle: 'RamaXGans', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}        
         

cmd.on(
  "menu-cmd",
  ["menu", "help", "command", "commands"],
  [],
  async (msg, { prefix, client, query, usedPrefix }) => {
    let { list, body, upper, down, line, head } = botinfo.unicode;
    let type = query && query.toLowerCase();
    let lama = [];
    if (!cmd._tags[type]) {
      let sections = [];
      let list_now = 0;
      let list_nitip = {};
      for (let b in cmd._tags) {
        let tit =
          list_now == 0
            ? `${upper}${list} ${list}${line.repeat(13)}${list} ${
                list_now + 1
              } ${list}${line.repeat(13)}${list}`
            : `${body}${list} ${list}${line.repeat(13)}${list} ${
                list_now + 1
              } ${list}${line.repeat(13)}${list}`;
        sections.push({
          title: tit,
          rows: [
            {
              title: `➳ ${b[0].toUpperCase() + b.slice(1).toLowerCase()} Menu ☭`,
              rowId: prefix[0] + `menu${b}`,
              description:
                "Membuka Menu " + b[0].toUpperCase() + b.slice(1).toLowerCase(),
            },
          ],
        });
        list_nitip[b] = prefix[0] + `menu${b}`;
        list_now++;
      }
      stod = `${sender}`
      return client.sendMessageFromContent(msg.from, {
        listMessage: {
          title: `Hai Kak @${stod.split('@')[0]}`,
          description: `\n
   𝗜𝗡𝗙𝗢
→ Jam  : _${jam}_ WIB
→ Private Chat : _${privat.length}_
→ Group Chat : _${groups.length}_
→ Speed : _${latennsi.toFixed(4)} second_
→ Runtime : _${kyun(uptime)}_Baterai : _${baterai.battery}_
→ WA Version : _${client.user.phone.wa_version}_ 
→ Charged : _${baterai.isCharge}_
\n\n\n
   𝗝𝗢𝗜𝗡 𝗠𝗬 𝗢𝗙𝗖 𝗚𝗥𝗨𝗣 𝗖𝗛𝗔𝗧𝗦
→ 1
→ https://cutt.ly/4OpAVNf
→ 2
→ https://cutt.ly/pOpAZbR
\n
`,
          buttonText: "CLICK HERE",
          listType: "SINGLE_SELECT",          
          sections,
        },
      });
     }
    for (let a of cmd._tags[type]) {
      if (!a.enable) continue;
      let prek = a.usedPrefix ? prefix[0] : "";
      let param = a.param ? a.param : "";
      lama = lama.concat(a.command.map((value) => prek + value + ` ${param}`));
    }

    let hasil = `╭⎆──❲ *${
      type[0].toUpperCase() + type.slice(1).toLowerCase()
    } Menu* ❳──╮\n`;
    for (let b of lama) {
      hasil += list + ` ${b.toLowerCase()}\n`;
    }

    hasil = hasil.trim() + `\n╰┈┈┈┈┈┈┈┈┈┈┈┈╯`;

    buttons = [
      {
        buttonId: `.info`,
        buttonText: {
          displayText: "ɪɴғᴏʀᴍᴀsɪ",
        },
        type: 1,
      },
      {
        buttonId: prefix[0] + `snk`,
        buttonText: {
          displayText: "sʏᴀʀᴀᴛ ᴅᴀɴ ᴋᴇᴛᴇɴᴛᴜᴀɴ",
        },
        type: 1,
      },
    ];
    let locationMessage = { jpegThumbnail: logo.buffer };
    used_logo = (used_logo + 1) % 3;
    let buttonsMessage = {
      contentText: hasil,
      footerText:
        botinfo.footerText +
        " | " +
        Object.keys(userDb).length +
        " Pengguna",
      buttons,
      headerType: 1,
    }; 
    thumbnail = fs.readFileSync('./bot.jpg')
    return client.sendMessageFromContent(msg.from, { buttonsMessage },{ quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
    orderMessage: {
    thumbnail: thumbnail,
    itemCount: -97177262, // Bug
    status: 1,
    surface: 1,
    message: `HAI KAK \n${msg.sender.name}!\nR-BOT BY RAMA`,
    orderTitle: 'R-BOT BY RAMA👾', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})	        
  }
);
