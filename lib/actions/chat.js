const { Presence } = require("@adiwajshing/baileys")

const from = msg.key.remoteJid
autocomposing = true


client.on('chat-update',async(chat) => {
    try {
    if (!chat.hasNewMessage) return;
    if (!Object.keys(chat.messages.array[0]).includes('message') || !Object.keys(chat.messages.array[0]).includes('key')) return;
    const msg = await functions.metadataMsg(client, chat.messages.array[0]);
    if (msg.key.id.length < 20 || msg.key.remoteJid == 'status@broadcast') return;
    cmd.execute(msg)
    cmd.handlerB(msg)
    client.chatRead(msg.from)
    if (autocomposing) {
    client.updatePresence(from, Presence.composing)
    }

    } catch(e) {
    if (!String(e).includes('this.isZero')){  
        console.log(e);
    await client.sendMessage(botinfo.ownerNumber[0] + `@s.whatsapp.net`, 'Info Error!', 'conversation');
    await client.sendMessage(botinfo.ownerNumber[0] + `@s.whatsapp.net`, functions.util.format(e), 'conversation');
    return 1;    
    }
    }
    });
    
