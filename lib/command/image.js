
cmd.on("randomanime", ["kirito", "mikasa", "draken", "tsunade", "mikey", "kagura", "kirito", "aori", "asuna", "sisuka"], ["image"], async (req, res) => {
  let {
    data
  } = await functions.axios.get("https://dhnjing.xyz/search/pinterest/image?query=" + res.command + "&apikey=DehanApi");
  let buffer = (await client.getBuffer(data.result[Math.floor(Math.random() * 6)].orig.url)).buffer;
  client.sendMessage(req.from, buffer, "imageMessage", {
    quoted: req, caption: "Nih"
  });
}, {
  wait: true
});