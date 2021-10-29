cmd.on("add", ["add"], ["group"], async (msg, {
  client, query
}) => {
  let intNumber = query.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
  if (query.replace(/[^0-9]/g, '').startsWith('0')) return client.reply(msg, '*REJECTED* | Masukan Nomor Valid Dengan Kode Negara Contoh +62 / 62')
  let checkNumber = await client.isOnWhatsApp(intNumber);
  if (!checkNumber) return client.reply(msg, "*REJECTED* | Nomor Yang Anda Masukan Tidak Terdaftar Di Whatsapp");
  let groupInvite = await client.groupAdd(msg.from, [intNumber]);
  let statusInt = groupInvite[intNumber.replace("@s.whatsapp.net", "@c.us")];
  let inviteId = await client.groupInviteCode(msg.from);
  if (statusInt == 409) return client.reply(msg, "*FAILED* | Member Telah Ada Disini");
  else if (statusInt == 403) {
    client.reply(msg, `*FAILED* | @${intNumber.split('@')[0]} Tidak Bisa Di Invite Karena Di Private!, Mengirim Link Grub....`, {
      contextInfo: {
        mentionedJid: [intNumber]}});
    return client.sendMessage(intNumber, 'https://chat.whatsapp.com/' + inviteId + `\n Kamu Di Invite Oleh @${msg.sender.jid.split('@')[0]}`, 'conversation', {
      contextInfo: {
        mentionedJid: [msg.sender.jid]}})
  }
  return client.reply(msg, `Berhasil Memasukan User!`);
}, {
  param: functions.needed('No Hp'),
  query: "Harap ketikkan nomor whatsapp untuk memasukkan ke dalam group!",
  admin: true,
  clientAdmin: true,
  group: true
});

cmd.on("kick", ["kick"], ["group"], async (msg, {
  client, query, prefix
}) => {
  if (!msg.mentionedJid && !query) return client.reply(msg, `*REJECTED* | Tag Seseorang Atau Masukan No Yang Akan Di Kick`)
  if (!msg.mentionedJid && query) {
    if (query.replace(/[^0-9]/g, '').startsWith('0')) return client.reply(msg, '*REJECTED* | Masukan Nomor Valid Dengan Kode Negara Contoh +62 / 62')
    msg.mentionedJid = [query.replace(/[^0-9]/g, '') + "@s.whatsapp.net"]
  }
  for (let a of msg.mentionedJid) {
    await functions.delay(2000)
    let checkNumber = await client.isOnWhatsApp(a);
    if (!checkNumber) return client.reply(msg, "*REJECTED* | Nomor Yang Anda Masukan Tidak Terdaftar Di Whatsapp");
    let find = msg.groupData.groupAdmins.find(tr => tr.jid == a);
    if (find && find.isAdmin) {
      if (query.endsWith('--force')) {
        return client.groupRemove(msg.from, [a]);
      }
      await client.sendMessageFromContent(msg.from, {
        buttonsMessage: {
          footerText: `Jika Tidak Bisa Tekan Tombol, Ketik ${prefix[0]}kick @Tag Orang --force`, contentText: '*WARNING* | Yang Di Kick Adalah Admin Apakah Anda Yakin?', buttons: [{
            buttonId: `${prefix[0]}kick ${a.split('@')[0]} --force`, buttonText: {
              displayText: 'Ya'
            }, type: 1
          }], headerType: "EMPTY"
        }}, {
        contextInfo: {
          mentionedJid: [a]}})
      continue
    }
    await client.groupRemove(msg.from, [a])
  }
}, {
  param: functions.needed('tag'),
  wait: true,
  admin: true,
  clientAdmin: true,
  group: true
});

cmd.on("demote", ["demote"], ["group"], async (msg, {
  client
}) => {
  try {
    let demoteGroup = await client.groupDemoteAdmin(msg.from, msg.mentionedJid);
    client.reply(msg, "Suksess menurunkan jabatannya!");
  } catch (err) {
    client.reply(msg, functions.util.format(err));
  }
}, {
  param: functions.needed('tag'),
  mention: true,
  admin: true,
  clientAdmin: true,
  group: true
});

cmd.on("promote", ["promote"], ["group"], async (msg, res) => {
  try {
    let promoteGroup = await client.groupMakeAdmin(msg.from, msg.mentionedJid);
    client.reply(msg, "Suksess menaikkan jabatannya!");
  } catch (err) {
    client.reply(msg, functions.util.format(err));
  }
}, {
  param: functions.needed('tag'),
  mention: true,
  admin: true,
  clientAdmin: true,
  group: true
});

cmd.on("set-subject", ["setnamegroup"], ["group"], async (msg, res) => {
  try {
    let nameInt = res.query;
    let groupSubject = await client.groupUpdateSubject(msg.from, nameInt);
    if (groupSubject.status !== 200) return client.reply(msg, "some error when trying changing group subject");
    client.reply(msg, "Success change group Name" + `\n\nFrom: ${res.group.subject}` + `\nTo: ${nameInt}`);
  } catch (err) {
    client.reply(msg, functions.util.format(err));
  }
}, {
  param: functions.needed('text'),
  query: "Harap ketikkan nama grup",
  admin: true,
  clientAdmin: true,
  group: true
});

cmd.on("set-desc", ["setdescgroup"], ["group"], async (msg, res) => {
  try {
    let nameInt = res.query;
    let groupDesc = await client.groupUpdateDescription(msg.from, nameInt);
    if (groupDesc.status !== 200) return client.reply(msg, "some error when trying changing group subject");
    client.reply(msg, "Success change group Description\n\nFrom: " + res.group.desc + "\nTo: " + nameInt);
  } catch (err) {
    client.reply(msg, functions.util.format(err));
  }
}, {
  param: functions.needed('text'),
  query: "Harap ketikkan group deskripsi",
  admin: true,
  clientAdmin: true,
  group: true
});

cmd.on("leave", ["leave"], ["group"], async (msg, res) => {
  client.groupLeave(msg.from)
  .then(response => {
    client.sendMessage(msg.sender.jid, "Success Keluar dari group " + res.group.subject, "conversation");
  })
  .catch(err => client.reply(msg, functions.util.format(err)));
}, {
  admin: true,
  group: true
});

cmd.on("create-group", ["create-group"], ["group", "owner"], async (msg, res) => {
  let arrInt = [msg.sender.jid,
    ...msg.mentionedJid];
  let groupName = res.query.split(/ @/)[0];
  client.groupCreate(groupName, arrInt)
  .then((response) => {
    client.reply(msg, "groupId: " + response.gid + "\nParticipants: " + response.participants + "\n\nSuccess membuat group dengan nama " + groupName);
  })
  .catch(err => client.reply(msg, functions.util.format(err)));
}, {
  param: `${functions.needed('text')}|${functions.needed('tag')}`,
  query: "Harap ketikkan nama group!",
  mention: true,
  owner: true,
  group: true
});

cmd.on("group-link", ["group-link"], ["group"], async (msg, res) => {
  try {
    let inviteId = await client.groupInviteCode(msg.from);
    let groupCode = "https://chat.whatsapp.com/" + inviteId;
    client.reply(msg, "Link Group: " + groupCode);
  } catch (err) {
    client.reply(msg, functions.util.format(err));
  }
}, {
  admin: true,
  clientAdmin: true,
  group: true
});

cmd.on("group-revoke", ["group-revoke"], ["group"], async (msg, res) => {
  try {
    let revokeResponse = await client.revokeInvite(msg.from);
    client.reply(msg, "Link Group baru: https://chat.whatsapp.com/" + revokeResponse.code);
  } catch (err) {
    client.reply(msg, functions.util.format(err));
  }
}, {
  admin: true,
  clientAdmin: true,
  group: true
});

cmd.on("group-join", ["group-join"], ["group", "owner"], async (msg, res) => {
  try {
    if (res.query.match("chat.whatsapp.com")) {
      let codeId = res.query.split("chat.whatsapp.com/")[1];
      let acceptInvite = await client.acceptInvite(codeId);
      client.reply(msg, "groupId: " + acceptInvite.gid + "\ngroupCode: " + codeId + "\n\n Suksess memasukkan bot kedalam group");
    } else {
      client.reply(msg, "Invalid link group");
    }
  } catch (err) {
    client.reply(msg, functions.util.format(err));
  }
}, {
  param: functions.needed('link WA'),
  url: 'whatsapp',
  owner: true
});

cmd.on("group-close", ["group-close"], ["group"], async (msg, res) => {
  let response = await client.groupSettingChange(msg.from, "announcement", true);
  client.reply(msg, "Success mengubah group kedalam mode admin!\nSekarang hanya admin dapat mengirimkan pesan");
}, {
  group: true,
  admin: true
});

cmd.on("group-open", ["group-open"], ["group"], async (msg, res) => {
  let response = await client.groupSettingChange(msg.from, "announcement", false);
  client.reply(msg, "Success mengubah group kedalam mode publik!\nSekarang semua member bisa mengirimkan pesan");
}, {
  group: true,
  admin: true
});

cmd.on("group-locked", ["group-locked"], ["group"], async (msg, res) => {
  let response = await client.groupSettingChange(msg.from, "locked", true);
  client.reply(msg, "Success mengubah group info hanya dalam mode admin!");
}, {
  group: true,
  admin: true
});

cmd.on("group-unlock", ["group-unlock"], ["group"], async (msg, res) => {
  let response = await client.groupSettingChange(msg.from, "locked", false);
  client.reply(msg, "Success mengubah group info ke semua member!");
}, {
  group: true,
  admin: true
});

cmd.on("set-profile", ["set-profile"], ["group"], async (msg, res) => {
  let isValidUrl = res.query.match(new RegExp(/(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/, "i"));
  if (isValidUrl) {
    let buffer = (await client.getBuffer(res.query)).buffer;
    let groupProfile = await client.updateProfilePicture(msg.from, buffer);
    client.sendImage(msg.from, res.query, "Success update Group Profile Picture!", msg);
  } else {
    client.reply(msg, "Invalid Image Url");
  }
}, {
  param: functions.needed("Url"),
  group: true,
  query: "Harap ketikkan Link Gambar dari source code mana saja!",
  admin: true,
  clientAdmin: true
});

cmd.on('hidetag', ['hidetag', 'everyone'], ['group'], async(msg, {
  query, client
})=> {
  return client.reply(msg,query,{contextInfo:{mentionedJid:msg.groupData.participants.map(tr => tr.jid)}})
}, {
  query: 'Masukkan query',
  param: functions.needed('query'),
  admin: true,
  clientAdmin: true,
  group: true
});
cmd.on("welkom", ['welkom', 'welcome', 'welcom'], ['group', 'useless'], async(msg, {
  client, query, prefix
}) => {
  if (!query || !["nyala", "nyalain", "on", "mati", "matiin", "off"].includes(query)) {
    let buttons = [{
      buttonId: `${prefix[0]}welcome nyala`,
      buttonText: {
        displayText: 'Nyalakan'
      },
      type: 1
    },
      {
        buttonId: `${prefix[0]}welcome mati`,
        buttonText: {
          displayText: 'Matikan'
        },
        type: 1
      }]
    return client.sendMessageFromContent(msg.from, {
      buttonsMessage: {
        footerText: `Jika Tidak Bisa Menekan Tombol, Ketik ${prefix[0]}welcome nyala atau ${prefix[0]}welcome mati`, contentText: 'Pilih Kak Nyalain Atau Matiin Welcome', buttons, headerType: "EMPTY"
      }})
  }
  let mode = query.toLowerCase().trim()
  if (["nyala", "nyalain", "on"].includes(mode)) {
    if (groupDb[msg.from]?.welcome) return client.reply(msg, `*REJECTED* | Sudah Nyala Dari Tadi`)
    groupDb[msg.from].welcome = {
      add: `Selamat Datang di %group_name berikut desc nya %group_desc`,
      promote: `Jadi Atmin di %group_name %user_name`,
      demote: `Kasian si @%user_tag`,
      remove: `Dadah %user_name`
    }
    return client.reply(msg, `*SUCCESS* | Sukses Memasukan Ke Database Welkom!`)
  } else if (["mati", "matiin", "off"].includes(mode)) {
    if (!groupDb[msg.from]?.welcome) return client.reply(msg, `*REJECTED* | Sudah Mati Dari Tadi`)
    delete groupDb[msg.from].welcome
    return client.reply(msg, `*SUCCESS* | Sukses Menghapus Database Welkom!`)
  }
}, {
  group: true,
  admin: true,
  param: functions.optional(`nyalain|matiin`)})

cmd.on('welkom', ['setwelcome', 'setwelkom', 'setwelcom'], ['group', 'useless'], (msg, {
  query, prefix, client
}) => {
  if (!groupDb[msg.from]?.welcome) return client.reply(msg, `*REJECTED* | Welkom Nya Mati`)
  if (!query.includes('|')) return client.reply(msg, `*REJECTED* | Format Salah Harusnya ${prefix[0]}setwelcome type|isinya contoh ${prefix[0]}setwelcome promote|cie di promote %user_tag`)
  let type = query.split('|')[0].toLowerCase().trim()
  let isinya = query.split('|')[1]
  if (!Object.keys(groupDb[msg.from].welcome).includes(type)) return client.reply(msg, `*REJECTED* | Type Yang Anda Masukan Tidak Valid, Berikut Type Type Nya ${Object.keys(groupDb[msg.from].welcome)}`)
  groupDb[msg.from].welcome[type] = isinya
  return client.reply(msg, `*SUCCESS* | Sukses Mengubah Data Welcome ${type} Ke ${isinya}`)
}, {
  group: true,
  admin: true,
  query: `*REJECTED* | Masukan Input Query`,
  param: functions.needed(`type`)+`|`+functions.needed(`isi`)})
