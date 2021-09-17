function baseURL(routes) {
  return "https://dhnjing.xyz/news/" + routes;
}
const newsRoute = ["kumparan", "inews", "metro", "tribun", "daily", "detik", "okezone", "cnbc", "fajar", "sindo", "kompas", "indozone", "antara", "republika", "bbc", "viva", "kontan", "merdeka", "tempo", "cnn", "idn"];

cmd.on("news", newsRoute, ["news"], async (req, res) => {
  try {
    let {
      data
    } = await functions.axios.get(baseURL(res.command));
    console.log(data);
    let txt = "";
    for (let i = 0; i < data.result.length; i++) {
      txt += functions.parseResult(data.result[i]) + "\n";
    }
    txt += "";
    client.reply(req, txt);
  } catch (err) {
    console.log(err);
    client.reply(req, "Terjadi kesalahan saat mengirim data");
  }
}, {
  wait: true
});
