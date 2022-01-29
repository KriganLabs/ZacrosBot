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
      return client.sendMessageFromContent(msg.from, {
        listMessage: {
          title: `*Hai ${msg.sender.name}!*`,
          description: `\n┌❑➤─|⬕•R-BOT•⬔|─➤°࿐\n║➢ *JOIN MY GRUP CHATS*\n║➢ [BOT WA]\n║➢ https://cutt.ly/4OpAVNf\n║➢ [R-BOT OFFICIAL GRUP]\n║➢ https://cutt.ly/pOpAZbR\n╚❑➤─|⬕•R-BOT•⬔|─➤°࿐\n`,          
          buttonText: "CLICK HERE",
          listType: "SINGLE_SELECT",
          footerText: `Ketik .infopenggunaan Untuk info lebih lanjut`,
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
          displayText: "Information",
        },
        type: 1,
      },
      {
        buttonId: prefix[0] + `snk`,
        buttonText: {
          displayText: "Syarat Dan Ketentuan",
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
    const fs = require("fs")
    thumbnail = fs.readFileSync('./bot.jpg')
    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumbnail, surface: 200, message: `HAI KAK ${msg.sender.name}!\nR-BOT By Rama`, orderTitle: '?', sellerJid: '0@s.whatsapp.net'}},sendEphemeral: true}
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
    message: 'HAI KAK ${msg.sender.name}️',
    orderTitle: 'R-BOT BY RAMA👾', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})	        
  }
);
