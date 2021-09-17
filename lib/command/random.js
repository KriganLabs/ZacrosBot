 cmd.on('quotes',['quotes'],['random'],async(req,res) => {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/randomquote?apikey=ZYY`)

  return res.client.reply(req,`Author : ${anu.data.result.author}\n\n*${anu.data.result.quotes}*`)

},{usedPrefix:true});

 cmd.on('islamiquotes',['islamiquotes'],['random'],async(req,res) => {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/randomquote/muslim?apikey=ZYY`)

  return res.client.reply(req,`*${anu.data.result.text_id}*`)

},{usedPrefix:true});

 cmd.on('kanyequotes',['kanyequotes'],['random'],async(req,res) => {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/quotes/kanye?apikey=ZYY`)

  return res.client.reply(req,`Author : ${anu.data.result.author}\n\n*Id : ${anu.data.result.text_id}*\n\nEn : *${anu.data.result.text_en}*`)

},{usedPrefix:true});

 cmd.on('meme',['meme'],['random'],async(msg,{client})=> {

let anu = await functions.axios.get(`https://exneph-api.herokuapp.com/api/random/meme?apikey=ZYY`)

let anu2 = anu.data.result

await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')

return client.sendMessage(msg.from,(await client.getBuffer(anu2.url)).buffer,'imageMessage',{caption:`Post Link : ${anu2.post_link}\nTitle : ${anu2.title}\nAuthor : ${anu2.author}`,quoted:msg})

});


cmd.on("randomtag", ["jadian", "ganteng", "cantik", "pdkt", "jelek", "burik", "sholeh", "fanatik", "kurus", "gemuk"], ["random","group"], async (msg, res) => {
  let groupMembers1 = msg.groupData.participants[Math.floor(Math.random() * msg.groupData.participants.length)].jid;
  let groupMembers2 = msg.groupData.participants[Math.floor(Math.random() * msg.groupData.participants.length)].jid;
  if (res.command === "jadian") {
    client.sendMessage(msg.from, "Ciee yang lagi jadian @" + groupMembers1.split("@")[0] + " <3 @" + groupMembers2.split("@")[0], "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers2, groupMembers1]
      }
    });
  } else if (res.command === "pdkt") {
    client.sendMessage(msg.from, "Ciee yang lagi pdkt @" + groupMembers1.split("@")[0] + " <3 @" + groupMembers2.split("@")[0], "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers2, groupMembers1]
      }
    });
  } else if (res.command === "ganteng") {
    client.sendMessage(msg.from, "yang ganteng disini adalah @" + groupMembers2.split("@")[0], "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers2]
      }
    });
  } else if (res.command === "jelek") {
    client.sendMessage(msg.from, "yang jelek disini adalah @" + groupMembers2.split("@")[0], "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers2]
      }
    });
  } else if (res.command === "cantik") {
    client.sendMessage(msg.from, "yang cantik disini adalah @" + groupMembers2.split("@")[0], "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers2]
      }
    });
  } else if (res.command === "burik") {
    client.sendMessage(msg.from, "yang burik disini adalah @" + groupMembers2.split("@")[0], "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers2]
      }
    });
  } else if (res.command === "sholeh") {
    client.sendMessage(msg.from, "yang sholeh disini adalah @" + groupMembers2.split("@")[0], "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers2]
      }
    });
  } else if (res.command === "fanatik") {
    client.sendMessage(msg.from, "yang fanatik disini adalah @" + groupMembers2.split("@")[0], "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers2]
      }
    });
  } else if (res.command === "kurus") {
    client.sendMessage(msg.from, "yang kurus disini adalah @" + groupMembers2.split("@")[0], "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers2]
      }
    });
  } else if (res.command === "gemuk") {
    client.sendMessage(msg.from, "yang gemuk disini adalah @" + groupMembers2.split("@")[0], "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers2]
      }
    });
  }
})

cmd.on("random", ["pantunv1", "pantunv2"], ["random"], async (req, res) => {
  if (res.command.match("pantunv1")) {
    let {
      data
    } = await functions.axios.get("https://dhnjing.xyz/random/pantun/v1");
    client.reply(req, data.result.join("\n"));
  } else if (res.command.match("pantunv2")) {
    let {
      data
    } = await functions.axios.get("https://dhnjing.xyz/random/fakta/v2");
    client.reply(req, data.result.join("\n"));
  }
});

cmd.on("random", ["katabijakv1", "katabijakv2", "katabijakv3"], ["random"], async (req, res) => {
  if (res.command.match("katabijakv1")) {
    let {
      data
    } = await functions.axios.get("https://dhnjing.xyz/random/katabijak/v1");
    client.reply(req, data.result);
  } else if (res.command.match("katabijakv2")) {
    let {
      data
    } = await functions.axios.get("https://dhnjing.xyz/random/katabijak/v2");
    client.reply(req, data.result);
  } else if (res.command.match("katabijakv3")) {
    let {
      data
    } = await functions.axios.get("https://dhnjing.xyz/random/katabijak/v3");
    client.reply(req, data.result);
  }
})

cmd.on("random", ["asupanv2", "asupanv3"], ["random"], async (msg, res) => {
  if (res.command.match("asupanv3")) {
    let url = "https://dhnjing.xyz/random/asupan/v1";
    await client.sendMessage(msg.from, (await client.getBuffer(url)).buffer, "videoMessage", {
      quoted: msg, caption: "Nih"
    });
  } else if (res.command.match("asupanv2")) {
    let url = "https://dhnjing.xyz/random/asupan/v2";
    await client.sendMessage(msg.from, (await client.getBuffer(url)).buffer, "videoMessage", {
      quoted: msg, caption: "Nih"
    });
  }
}, {
  wait: true
});