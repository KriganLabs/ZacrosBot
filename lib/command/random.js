cmd.on('katagalau',['katagalau'],['random'],async(msg,{query,client})=> {
 let anu = (await functions.axios.get(botinfo.linkApi.zacros+ `/randomtext/katagalau`)).data.result
return client.sendText(msg.from,anu)
});

 cmd.on('quotes',['quotes','motivasi'],['random'],async(msg,{query,client})=> {
let anu = (await functions.axios.get(botinfo.linkApi.zacros+ `/randomtext/quotes`)).data.result
return client.sendText(msg.from,`Author : ${anu.author}\n\n*${anu.quotes}*`,msg)
});

 cmd.on('meme',['meme'],['random'],async(msg,{client})=> {
return client.sendImage(msg.from, botinfo.linkApi.zacros+`https://zacros.herokuapp.com/randomimg/meme`)
});

cmd.on("fml", ["fmylife","fml"], ["random"], async(msg, { command, client }) => {
  let a = await functions.axios.get(botinfo.linkApi.zacros+"/randomtext/fml")
  client.sendMessage(msg.from, a.data.result.replace(/FML/gi, ""), "conversation", {
    quoted: msg
  })
}, {})

cmd.on("lolivid", ["lolivid"], ["asupan"], async(msg, { command, client }) => {
  return client.sendVideo(msg.from, botinfo.linkApi.zacros+"/asupan/loli")
}, { wait: true });
