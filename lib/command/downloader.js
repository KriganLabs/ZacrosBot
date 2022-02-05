cmd.on(
  "yt",
  ["ytmp3", "ytmp4"],
  ["downloader"],
  async (msg, { client, query, prefix, isUrl, command }) => {
    if (!isUrl)
      return client.reply(msg, `Link Yang Anda Masukan Bukan Dari Url`);
    let info = (await functions.axios.get(botinfo.linkApi.zacros + "/downloader/youtube?link="+ isUrl[0])).data 
    let type =
      command.endsWith("3") ||
      command.endsWith("audio") ||
      command.endsWith("aud")
        ? (await functions.axios.get(botinfo.linkApi.zacros + "/downloader/youtube?link="+ isUrl[0])).data.medias[4]
        : (await functions.axios.get(botinfo.linkApi.zacros + "/downloader/youtube?link="+ isUrl[0])).data.medias[1]
    let data =
      command.endsWith("3") ||
      command.endsWith("audio") ||
      command.endsWith("aud")
        ? {
            type: "document",
            mimetype: "audio/mpeg",
            filename: info.title + ".mp3",
            quoted: msg,
          }
        : {
            type: "video",
            mimetype: "video/mp4",
            filename: info.title + ".mp4",
            quoted: msg,
          };
    let thumbnail = (await client.getBuffer(info.thumbnail)).buffer;
    client.sendMessage(msg.from, thumbnail, "imageMessage", {
      quoted: msg,
      caption: info.title,
    });
    client.sendMessage(
      msg.from,
      (await client.getBuffer(type.url)).buffer,
      data.type + "Message",
      {
        ...data,
        contextInfo: {
          externalAdReply: {
            title: type.title,
            description: `Zacros`,
            mediaType: "VIDEO",
            thumbnail,
            mediaUrl: isUrl[0],
            thumbnailUrl: type.thumb,
          },
        },
      }
    );
  },
  {
    query: `Masukan Link Youtube`,
    param: functions.needed("Link Youtube/Video"),
  }
);

cmd.on(
  "play",
  ["play", "playvid", "playaud"],
  ["downloader"],
  async (msg, { query, client, prefix }) => {
    let res = await functions.ytSearch(query);
    let data = res.videos[0];
    let buttons = [
      {
        buttonId: `${prefix[0]}ytmp4 ${data.url}`,
        buttonText: { displayText: "Video" },
        type: 1,
      },
      {
        buttonId: `${prefix[0]}ytmp3 ${data.url}`,
        buttonText: { displayText: "Audio" },
        type: 1,
      },
    ];
    let buffer_thumb = (await client.getBuffer(data.thumbnail)).buffer;
    let imageMessage = (
      await client.prepareMessageMedia(buffer_thumb, "imageMessage", {
        thumbnail: Buffer.alloc(0),
      })
    ).imageMessage;
    let buttonsMessage = {
      footerText:
        `Jika Tidak Bisa Menekan Tombol, Ketik ${prefix[0]}ytmp3/4 ` + data.url,
      contentText: functions.parseResult(data, { title: "Youtube Play" }),
      buttons,
      imageMessage,
      headerType: "IMAGE",
    };
    return client.sendMessageFromContent(
      msg.from,
      { buttonsMessage },
      { quoted: msg }
    );
  },
  {
    query:
      "Masukan Link Atau Judul Lagu \nContoh : /play https://www.youtube.com/watch?v=eVTXPUF4Oz4 \n/play Linkin Park - In The End",
    param: functions.needed("query"),
  }
);

cmd.on(
  "tiktok",
  ["tiktok"],
  ["downloader"],
  async (msg, { query, client }) => {
    return client.sendVideo(
      msg.from,
      botinfo.linkApi.zacros + "/downloader/tiktoknowm?link=" + query
    );
  },
  {
    query:
      "Masukan Link TIKTOK \nContoh : /tiktok https://www.tiktok.com/@yourrkayesss/video/7040534981671701786",
    param: functions.needed("link video"),
  }
);

cmd.on(
  "fbdl",
  ["facebookdl", "fb", "facebook"],
  ["downloader"],
  async (msg, { query, client }) => {
    let res = await functions.axios.get(
      botinfo.linkApi.zacros + "/downloader/fbdl?link=" + query
    );
    let video = res.data.medias[0];
    return client.sendVideo(msg.from, video.url);
  },
  {
    query:
      "Masukan Link FB \nContoh : /fb https://www.facebook.com/onickayessfansbase/posts/227884412849835",
    param: functions.needed("link"),
  }
);

cmd.on(
  "ig",
  ["igvideo", "instagram", "ig"],
  ["downloader"],
  async (msg, { query, client }) => {
    let result = (
      await functions.axios.get(
        botinfo.linkApi.zacros + "/downloader/igdl?link=" + query
      )
    ).data;
    for (let i = 0; i < result.length; i++) {
      client.sendVideo(msg.from, result);
    }
  },
  {
    query:
      "Masukan Link IG \nContoh : /instagram https://www.instagram.com/p/CXvv2lVpaju",
    param: functions.needed("link video"),
  }
);

cmd.on(
  "yts",
  ["ytsearch"],
  ["search", "downloader"],
  async (msg, { query, client }) => {
    let a = (await functions.ytSearch(query)).all;
    let b = ``;
    for (let c of a)
      b +=
        functions.parseResult(c, {
          title: "Youtube Search",
          ignoreKey: ["duration"],
        }) + "\n";
    return client.sendText(msg.from, b.trim());
  },
  {
    query: "Isi Dengan Kata Kunci \nContoh : /ytsearch Linkin Park",
    param: functions.needed("query"),
  }
);

cmd.on(
  "soundcloud",
  ["soundcloud"],
  ["downloader"],
  async (msg, { query, client }) => {
    let res = (
      await functions.axios.get(
        botinfo.linkApi.zacros + "/downloader/scdl?link=" + query
      )
    ).data;
    await client.sendImage(msg.from, res.thumb, res.title);
    client.sendAudio(msg.from, res.link);
  },
  {
    wait: true,
    query:
      "Isi Link SOUNDCLOUD \nContoh : /soundcloud https://soundcloud.com/linkin_park/in-the-end",
    param: functions.needed("link"),
  }
);
