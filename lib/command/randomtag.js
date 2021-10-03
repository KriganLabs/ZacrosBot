cmd.on("randomtag", ["furry","gay","stress","jadian", "ganteng", "cantik", "pdkt", "jelek", "burik", "sholeh", "fanatik", "kurus", "gemuk"], ["random tag"], async (msg, res) => {
  let groupMembers1 = msg.groupData.participants[Math.floor(Math.random() * msg.groupData.participants.length)].jid;
  let groupMembers2 = msg.groupData.participants[Math.floor(Math.random() * msg.groupData.participants.length)].jid;
  if (res.command === "jadian") {
    client.sendMessage(msg.from, "Ciee yang lagi jadian @" + groupMembers1.split("@")[0] + " <3 @" + groupMembers2.split("@")[0], "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers2, groupMembers1]
      }
    });
  } else if (res.command === "lord") {
    client.sendMessage(msg.from, "NJIRRRR ADA LORDDD @" + groupMembers1.split("@")[0] , "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers1]
      }
     });
  } else if (res.command === "furry") {
    client.sendMessage(msg.from, "Aowkaowkaow furry lo ange sama hewan @" + groupMembers1.split("@")[0] , "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers1]
      }
     });
  } else if (res.command === "gay") {
    client.sendMessage(msg.from, "Bang lu berdua kok gay? @" + groupMembers1.split("@")[0] + " & @" + groupMembers2.split("@")[0], "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers1, groupMembers2]
      }
     });
  } else if (res.command === "stress") {
    client.sendMessage(msg.from, "ANJG STRESSSSSS @" + groupMembers1.split("@")[0] , "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers1]
      }
      });
  } else if (res.command === "pdkt") {
    client.sendMessage(msg.from, "Wih ada yang pdkt nih @" + groupMembers1.split("@")[0] + " <3 @" + groupMembers2.split("@")[0], "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers2, groupMembers1]
      }
    });
  } else if (res.command === "ganteng") {
    client.sendMessage(msg.from, "Hai ganteng @" + groupMembers2.split("@")[0], "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers2]
      }
    });
  } else if (res.command === "jelek") {
    client.sendMessage(msg.from, "Yang jelek disini @" + groupMembers2.split("@")[0] + "kok lu jelek?", "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers2]
      }
    });
  } else if (res.command === "cantik") {
    client.sendMessage(msg.from, "yang cantik disini @" + groupMembers2.split("@")[0] + "hay cantik >\\<", "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers2]
      }
    });
  } else if (res.command === "burik") {
    client.sendMessage(msg.from, "yang burik disini @" + groupMembers2.split("@")[0] + "cih burik, pergi lu", "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers2]
      }
    });
  } else if (res.command === "sholeh") {
    client.sendMessage(msg.from, "yang sholeh disini @" + groupMembers2.split("@")[0] + "masyaallah brother", "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers2]
      }
    });
  } else if (res.command === "fanatik") {
    client.sendMessage(msg.from, "yang fanatik disini @" + groupMembers2.split("@")[0] + "tch fanatik", "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers2]
      }
    });
  } else if (res.command === "kurus") {
    client.sendMessage(msg.from, "yang kurus disini @" + groupMembers2.split("@")[0] + "akwoakwoa krempeng", "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers2]
      }
    });
  } else if (res.command === "gemuk") {
    client.sendMessage(msg.from, "yang gemuk disini @" + groupMembers2.split("@")[0] + "akwoakw u fat boi", "conversation", {
      contextInfo: {
        mentionedJid: [groupMembers2]
      }
    });
  }
})
