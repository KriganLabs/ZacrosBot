client.on("group-participants-update", async (group_update) => {
  if (!groupDb[group_update.jid]?.welcome) return;
  let groupData = await client.groupMetadata(group_update.jid);
  let pp_user = await client
    .getProfilePicture(group_update.participants[0])
    .catch(
      async () =>
        await client
          .getProfilePicture(group_update.jid)
          .catch(
            () =>
              `https://i.pinimg.com/200x150/14/11/f1/1411f1484bcdafaad19ef411dc601831.jpg`
          )
    );
  let buffer = (await client.getBuffer(pp_user)).buffer;
  let locationMessage = {
    jpegThumbnail: buffer,
  };
  let buttons = [
    {
      buttonId: `.menu`,
      buttonText: {
        displayText: `Menu Bot`,
      },
      type: 1,
    },
  ];
  let user_number = ``;
  let user_name = ``;
  let user_tag = ``;
  let user_link = ``;
  for (let a of group_update.participants) {
    user_number = a.split("@")[0] + ` `;
    user_link = `https://wa.me/` + a.split("@")[0];
    user_tag = `@` + a.split("@")[0] + ` `;
    user_name = client.contacts[a]
      ? client.contacts[a].name ||
        client.contacts[a].vname ||
        client.contacts[a].notify ||
        client.contacts[a].short ||
        "Unknown"
      : "Unknown" + ` `;
  }
  user_number = user_number.trim();
  user_name = user_name.trim();
  user_tag = user_tag.trim();
  user_link = user_link.trim();
  let content = groupDb[group_update.jid].welcome[group_update.action]
    .replace(/%user_number/gi, user_number)
    .replace(/%user_name/gi, user_name)
    .replace(/%user_link/gi, user_link)
    .replace(/%user_tag/gi, user_tag)
    .replace(/%group_name/gi, groupData.subject)
    .replace(/%group_desc/, groupData.desc);
  let buttonsMessage = {
    locationMessage,
    footerText: `${
      group_update.action[0].toUpperCase() + group_update.action.slice(1)
    } Message...`,
    contentText: content,
    buttons,
    headerType: "LOCATION",
    contextInfo: {
      mentionedJid: group_update.participants,
    },
  };
  client.sendMessageFromContent(group_update.jid, {
    buttonsMessage,
  });
});
