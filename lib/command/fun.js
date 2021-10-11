
cmd.on('dare',['dare'],['fun'],async(msg, {
  command, client}) => {
 res = await functions.axios.get(`https://exneph-api.herokuapp.com/api/random/dare?apikey=ZYY`)
anu = res.data.result
return client.sendText(msg.from,`Dare\n\n${anu}`,msg)
},{usedPrefix:true});

cmd.on('truth',['truth'],['fun'],async(msg, {
  command, client}) => {
 res = await functions.axios.get(`https://exneph-api.herokuapp.com/api/random/truth?apikey=ZYY`)
anu = res.data.result
return client.sendText(msg.from,`Truth\n\n${anu}`,msg)
},{usedPrefix:true});

cmd.on('bisakah',['bisakah'],['kerang Ajaib'],async(msg,{query,client})=> {
let a = ['Tidak Bisa','Bisa','Ya Gatau','Mungkin Saja','Coba Ulangi']
let b = functions.randomize(a)
return client.sendText(msg.from,`Bisakah ${query}\n\nJawaban : ${b}`)
},{query:'Masukkan Query',param:functions.needed('query')});

cmd.on('kapankah',['kapankah'],['kerang ajaib'],async(msg,{query,client})=> {
let a = ['Hari','Minggu','Abad','Detik','Menit','Jam','Hari','Tahun','Dekade']
let anu = ['1','2','3','4','5','6','7','8','9','10','11','12','13','20','15','92','23','100']
let b = functions.randomize(a)
let c = functions.randomize(anu)
return client.sendText(msg.from,`Kapankah ${query}\n\nJawaban : ${c} ${b} Lagi`)
},{query:'Masukkan Query',param:functions.needed('query')});

