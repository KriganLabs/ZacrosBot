const fs = require('fs')
const fetch = require('node-fetch');
const util = require('util');
const cheerio = require('cheerio') ;
const ytSearch = require('yt-search');
const googleSearch = require('google-it')
const FileType = require('file-type');
const spin = require('spinnies');
const axios = require('axios');
const jimp = require('jimp')
const moment = require('moment-timezone');
const chalk = require('chalk');
const ffmpeg = require('fluent-ffmpeg');
const googleImage = require('g-i-s');
const Crypto = require('crypto');
const fakeUa = require('fake-useragent');
const baileys = require('@adiwajshing/baileys');
const qrcode = require('qrcode');
const cookie = require('cookie');
const FormData = require('form-data')
const { exec, spawn, execSync } = require('child_process');

function uploadEphoto(buper){
return new Promise(async(resolve, reject) => {
let formna = new FormData
		formna.append('myfile', buper, {filename: 'test.png'})
		//formna.append('type', 'video_url') 
		axios(`https://e1.yotools.net/upload`, {
						method: "POST",
						headers:{
							"host": "e1.yotools.net",
							//"accept-encoding": "gzip, deflate, br",
							...formna.getHeaders(),
							"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"		
						},
						data: formna,
						//responseType: 'arraybuffer'
					})
					.then(async (gaya) => {
						//console.log(gaya)
						const hasil = gaya.data				
						//console.log(phpses)
						const formna2 = {
							icon: hasil.icon_file,
							image: hasil.uploaded_file,
							server: 'https://e1.yotools.net',
							thumb: hasil.thumb_file
						}
						axios(`https://ephoto360.com/effect/save-recent-image`, {
						method: "POST",
						headers:{
							//"host": "e1.yotools.net",
							//"accept-encoding": "gzip, deflate, br",
							accept: '*/*',
							  'accept-language': "en-US,en;q=0.9",
							  'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
							  'content-type': "application/x-www-formna-urlencoded; charset=UTF-8",
							  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
							  'referer': 'https://e1.yotools.net',
						},
						data: new URLSearchParams(Object.entries(formna2)),
						//responseType: 'arraybuffer'
					}).then(async hasilne => {	
						resolve(hasil)
					})
					})
					.catch(reject)
				})
			}

function fznspost(url, formdata = {}, headers = {}) {
  //console.log(formdata)
  let e = encodeURIComponent
  let body = Object.keys(formdata).map(key => {
     let out = []
    if (typeof formdata[key] === 'object'){
      for (kiys in formdata[key]) out.push(`${key}[${kiys}]=${formdata[key][kiys]}`)
    } else {
    let vals = formdata[key]
    let isArray = Array.isArray(vals)
    let keyq = e(key + (isArray ? '[]' : ''))
    if (!isArray) vals = [vals]
    for (let valq of vals) out.push(e(key) + '=' + e(valq))
    }
    return out.join('&')
  }).join('&')
  //console.log(body)
  return axios(url, {
    method: 'POST',
    headers: {
      accept: '*/*',
      'accept-language': "en-US,en;q=0.9",
      'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
      // ...form.getHeaders(),
      ...headers
    },
    data: body
  })
}

async function ephoto(url, texts = ['text'], gambar) {
  if (!/^https:\/\/ephoto360\.com\/.+\.html$/.test(url)) throw new Error('Invalid URL')
  let res = await axios.get(url,{
    method: 'GET',
    headers: {
      accept: '*/*',
      'accept-language': "en-US,en;q=0.9",
      'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
    }})
  let html = res.data
  //console.log(res.headers['set-cookie'])
  // const cfuid = res.headers['set-cookie'][0].split(',').map(v => cookie.parse(v)).reduce((a, c) => { return {...a, ...c} }, {})
  const phpses = res.headers['set-cookie'][0].split(',').map(v => cookie.parse(v)).reduce((a, c) => { return {...a, ...c} }, {})
  cookies = {
    // __cfduid: cfuid.__cfduid,
    PHPSESSID: phpses.PHPSESSID,
  }
  let forms = {
    submit: 'Create a photo',
    token: /name="token".*value="(.+?)"/.exec(html)[1],
    build_server: 'https://s1.ephoto360.com',
    build_server_id: 1,
  }
  let form = new FormData
  if (typeof texts === 'string') texts = [texts]
  for (let text of texts) form.append('text[]', text)
  for (let key in forms) form.append(key, forms[key])
  form.append('file_image_input', '')
  form.append('image[]', gambar)

  cookies = Object.entries(cookies).map(([ name, value ]) => cookie.serialize(name, value)).join('; ')
  //console.log(cookies)
  let res2 = await axios(url, {
    method: 'POST',
    headers: {
      accept: '*/*',
      'accept-language': "en-US,en;q=0.9",
      ...form.getHeaders(),
      cookie: cookies,
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
    },
    data: form.getBuffer()
  })
  let html2 = res2.data
 let form_value = /name="form_value_input".*value="(.+?)"/.exec(html2)
  let tokenval = form_value[1].split('&quot;').join('"')
  //console.log(JSON.parse(tokenval))
  let res3 = await fznspost('https://ephoto360.com/effect/create-image', JSON.parse(tokenval), {
    cookie: cookies
  })
  return await res3.data
}

exports.Functions = class Functions {
constructor(){
this.qrcode = qrcode;
this.ffmpeg = ffmpeg;
this.fakeUa = fakeUa;
this.exec = exec;
this.spins = spin;
this.spawn = spawn;
this.baileys = baileys;
this.cheerio = cheerio;
this.moment = moment;
this.util = util;
this.fs = fs;
this.fetch = fetch;
this.axios = axios;
this.util = util;
this.FileType = FileType;
this.ytSearch = ytSearch;
this.chalk = chalk;
this.animate = new spin();
}

readmore(length){
return String.fromCharCode(8206).repeat(length)
}

pad(num) {
return (num < 10 ? '0' : '') + num;
}

needed(str){
return botinfo.unicode.needed[0]+str+botinfo.unicode.needed[1]
}

optional(str){
return botinfo.unicode.optional[0]+str+botinfo.unicode.optional[1]
}

logLoading(teks){
if (!Object.keys(this.animate.spinners).includes("Loading")){
this.animate.add('Loading',{text:teks});
} else {
this.animate.update('Loading',{text:teks});
}
return;
}

logColor(text,color){
return chalk.keyword(color)(text);
}

parseResult(json, options = {}) {
  let {list,head,upper,down,line} = botinfo.unicode
    let opts = {
      unicode: true,
      ignoreVal: [null, undefined],
      ignoreKey: [],
      title: botinfo.botname,
      headers: `${head}${line.repeat(4)}${list} _*%title*_\n`,
      body: `${list} *%key*: _%value_`,
      footer: head+line+line+line+list+'\n',
      ...options,
    };
    let { unicode, ignoreKey, title, headers, ignoreVal, body, footer } = opts;

    let obj = Object.entries(json);
    let tmp = [];
    for (let [_key, val] of obj) {
      if (ignoreVal.indexOf(val) !== -1) continue;
      let key = _key[0].toUpperCase() + _key.slice(1);
      let type = typeof val;
      if (ignoreKey && ignoreKey.includes(_key)) continue;
      switch (type) {
        case 'boolean':
          tmp.push([key, val ? 'Ya' : 'Tidak']);
          break;
        case 'object':
          if (Array.isArray(val)) {
            tmp.push([key, val.join(', ')]);
          } else {
            tmp.push([
              key,
              this.parseResult(val, { ignoreKey, unicode: false }),
            ]);
          }
          break;
        default:
          tmp.push([key, val]);
          break;
      }
    }
    if (unicode) {
      let text = [
        headers.replace(/%title/g, title),
        tmp
          .map((v) => {
            return body.replace(/%key/g, v[0]).replace(/%value/g, v[1]);
          })
          .join('\n'),
        footer,
      ];
      return text.join('\n').trim();
    }
    return tmp;
}

createExif(packname, authorname, filename) {
if (!filename) filename = 'data';
let json = {
'sticker-pack-id': 'CreateByAqul-RemasteredByZbin',
'sticker-pack-name': packname,
'sticker-pack-publisher': authorname,
};
let stringify = JSON.stringify(json).length;
let f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00]);
let code = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00];
if (stringify > 256) {
stringify = stringify - 256;
code.unshift(0x01);
} else {
code.unshift(0x00);
 }
let fff = Buffer.from(code);
const ffff = Buffer.from(JSON.stringify(json));
if (stringify < 16) {
stringify = stringify.toString(16);
stringify = '0' + stringify;
} else {
stringify = stringify.toString(16);
}
const ff = Buffer.from(stringify, 'hex');
const buffer = Buffer.concat([f, ff, fff, ffff]);
if (!fs.existsSync('tmp')) fs.mkdirSync('tmp');
fs.writeFileSync(`./tmp/${filename}.exif`, buffer);
return `./tmp/${filename}.exif`;
}
  
  
randomize(obj){
if (obj instanceof Array) return obj[Math.floor(Math.random()*obj.length)]
if (typeof obj == 'number') return Math.floor(Math.random()*obj)
}


getTime(format,date) {
if (date){
return moment(date).locale('id').format(format);
} else {
return moment.tz('Asia/Jakarta').locale('id').format(format);
}
}

sizeName(number) {
let tags = ["", "K", "M", "G", "T", "P", "E"];
let tier = Math.log10(Math.abs(number)) / 3 | 0;
if (tier == 0) return number;
let tag = tags[tier];
let scale = Math.pow(10, tier * 3);
let scaled = number / scale;
let formatted = scaled.toFixed(1);
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2);
return formatted + tag + 'b';
}

isUrl(url) {
	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'));
}

parseRegex(string) {
return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
}

count(sec) {
let hours = this.pad(Math.floor(sec / (60*60)));
let minutes = this.pad(Math.floor(sec % (60*60) / 60));
let seconds = this.pad(Math.floor(sec % 60));
return {hours,minutes,seconds};
}
	
async photooxy(kode, text){
return new Promise(async(resolve, reject) => {
  
let datanegs = []

if(typeof text === 'string') text = [text]	

for(let i=0;i<text.length;i++) datanegs.push(`text_${i+1}=${text[i]}`)

let url = `https://photooxy.com/api/index/index/id/${kode}?[object%20Object]`

let opt = {method:'POST',headers: {'Content-Type': 'application/x-www-form-urlencoded','User-Agent':fakeUa()}}

let hayu00 = await (await fetch(url,{...opt,body:datanegs.join('&')})).json()

if(hayu00.status === 'ERROR') {
if(text.length === 1){
hayu00 = await(await fetch(url,{...opt,body:`text_1=` + text[0]+'&'+`text_2=` + undefined})).json()
if(hayu00.status === 'ERROR') {
hayu00 = await (await fetch(url,{...opt,body:`text_1=` + text[0]+'&'+`text_2=` + undefined+'&'+`text_3=` + undefined})).json()
if(hayu00.status === 'ERROR') {
reject(hayu00)
}else{
resolve({...hayu00,link:"https://photooxy.com"+hayu00.image})
}
}else{ 
resolve({...hayu00,link:"https://photooxy.com"+hayu00.image})
}
} else if(text.length > 1){
gas = await (await fetch(url,{...opt,body:`text_1=` + text[0]+'&'+`text_2=` + text[1]+'&'+`text_3=` + undefined})).json()
if(hayu00.status === 'ERROR'){
reject(hayu00)
} else {
resolve({...hayu00,link:"https://photooxy.com"+hayu00.image})
}
}
}else{
resolve({...hayu00,link:"https://photooxy.com"+hayu00.image})
}
})
}
	
async ephotoImage(url, file, lebar, tinggi, teks=['']) {
const hasil = await uploadEphoto(file)
const result = await ephoto(url, teks, JSON.stringify({"image": hasil.uploaded_file,"image_thumb": hasil.thumb_file,"icon_file":hasil.icon_file,"x":0,"y":0,"width":lebar,"height":tinggi,"rotate":0,"scaleX":1,"scaleY":1,"thumb_width":lebar}))
return "https://e1.yotools.net"+result.image
}	

async metadataMsg(client,msg) {
let chatMeta = async(mess) => {
mess = JSON.parse(JSON.stringify(mess))
mess.message = {...mess?.message}
mess.key = {...mess?.key}
mess.sender = {}
mess.realType = Object.keys(mess.message)[0]
mess.message = mess.realType == 'ephemeralMessage'?mess.message.ephemeralMessage.message:mess.message
mess.message = mess.realType == 'viewOnceMessage'? mess.message[mess.realType].message : mess.message
mess.type = Object.keys(mess.message)[0]
mess.data = typeof mess.message[mess.type]== "object" ? Object.keys(mess.message[mess.type]).includes("contextInfo") ? Object.keys(mess.message[mess.type]).concat(Object.keys(mess.message[mess.type].contextInfo)) : Object.keys(mess.message[mess.type]) : Object.keys(mess.message)
mess.string = (mess.type === baileys.MessageType.text) ? mess.message.conversation : (mess.data.includes('caption')) ? mess.message[mess.type].caption : (mess.type == baileys.MessageType.extendedText) ? mess.message[mess.type].text : (mess.type == 'buttonsResponseMessage') ? mess.message[mess.type].selectedButtonId : (mess.type == 'listResponseMessage') ? mess.message[mess.type].singleSelectReply.selectedRowId :''
mess.body = mess.message[mess.type]
mess.from = mess.key.remoteJid
mess.isGroup = mess.from.endsWith('g.us')
mess.sender.jid= mess.isGroup ? mess.participant ? mess.participant : client.user.jid : mess.key.remoteJid
mess.sender.name = client.contacts[mess.sender.jid] ? client.contacts[mess.sender.jid].name || client.contacts[mess.sender.jid].vname || client.contacts[mess.sender.jid].notify || client.contacts[mess.sender.jid].short || 'Unknown' : 'Unknown';
mess.client = {};
mess.client.name = client.user.name;
mess.client.jid = client.user.jid;
mess.mentionedJid = mess.data.includes('contextInfo') && mess.data.includes('mentionedJid')? mess.message[mess.type].contextInfo.mentionedJid : false;
mess.isText = mess.type == 'conversation' || mess.type == 'extendedTextMessage'
mess.isMedia = !mess.isText
mess.id = mess.key.id
mess.fromMe = mess.key.fromMe
mess.quotedMsg = mess.data.includes('contextInfo') && mess.data.includes('quotedMessage')?{key:{remoteJid:mess.from,fromMe:mess.message[mess.type].contextInfo.participant == client.user.jid,id:mess.message[mess.type].contextInfo.stanzaId},message:mess.message[mess.type].contextInfo.quotedMessage,participant: mess.message[mess.type].contextInfo.participant}:false
mess.isOwner = botinfo.ownerNumber.includes(mess.sender.jid.split('@')[0]) || mess.key.fromMe
mess.groupData = mess.isGroup ? client.chats.get(mess.from) : false
mess.groupData = mess.groupData ? {...mess.groupData,...mess.groupData?.metadata} : false;
delete mess.groupData.metadata;
delete mess.groupData.messages;
var x = await this.ambilSender(client, mess) || {}
mess.groupData = mess.groupData ? {...mess?.groupData,...x} : false
mess.sender = {...x?.sender,...mess?.sender}
mess.client = {...x?.client,...mess?.client}


//function
mess.downloadMsg = async(save,auto_ext = true) => {
if (mess.isText) return;
let buffer = await client.downloadMediaMessage(mess);
let anu = await FileType.fromBuffer(buffer) || {ext:'bin',mime:'application/octet-stream'}
if (save){
save = auto_ext?save+'.'+anu.ext:save
fs.writeFileSync(save,buffer);
return {buffer,filename:save,...anu};
} else {
return {buffer,...anu};
}
};
mess.deleteMsg = async(forAll) => {
if (forAll) return await client.deleteMessage(mess.key.remoteJid,mess.key);
return await client.clearMessage(mess.key);
};
mess.loadQuotedMsg = async() => {
if (!mess.quotedMsg) return;
return await chatMeta(await client.loadMessage(mess.from,mess.quotedMsg.key.id))
};
mess.reloadMsg = async() => {
return await chatMeta(await client.loadMessage(mess.from,mess.key.id))
};
mess.resendMsg = async(jid,opt) => {
return await client.sendMessageFromContent(jid,mess.message,opt);
};
mess.forwardMsg= async(jid,force,opt) => {
let message = await client.generateForwardMessageContent(mess,force)
return client.sendMessageFromContent(jid,message,opt)
}
mess.modifyMsg = async(object) => {
return {...mess,...object}
}
mess.groupMetadata = async() => {
if(!mess.isGroup) return;
let groupMetadata = mess.groupData?.participants ? {...mess.groupData}: await client.groupMetadata(mess.from);
groupMetadata.groupAdmins = groupMetadata.participants.filter(res => res.isAdmin);
groupMetadata.client = (groupMetadata.participants.find(res => res.jid == client.user.jid));
groupMetadata.client.isAdmin = groupMetadata?.client?.isAdmin || groupMetadata?.client?.isSuperAdmin;
groupMetadata.sender = (groupMetadata.participants.find(ros => ros.jid == mess.sender.jid));
groupMetadata.sender.isAdmin = groupMetadata?.sender?.isAdmin || groupMetadata?.sender?.isSuperAdmin;
mess.sender = {...groupMetadata.sender,...mess?.sender}
mess.client = {...groupMetadata.client,...mess?.client}
return await groupMetadata;
}
mess.quotedMsg = mess.quotedMsg ? await chatMeta(mess.quotedMsg) : false
return mess;
};
return await chatMeta(msg)
}

async ambilSender(client, mess) {
if(!mess.isGroup) return;
let groupMetadata =  mess.groupData?.participants ? mess.groupData : await client.groupMetadata(mess.from);
groupMetadata.client = (groupMetadata.participants.find(res => res.jid == client.user.jid)) || {isAdmin:false,isSuperAdmin:false,jid:client.user.jid}
groupMetadata.client.isAdmin = groupMetadata?.client?.isAdmin || groupMetadata?.client?.isSuperAdmin
groupMetadata.sender = (groupMetadata.participants.find(ros => ros.jid == mess.sender.jid)) || {isAdmin:false,isSuperAdmin:false,jid:mess.sender.jid}
groupMetadata.sender.isAdmin = groupMetadata?.sender?.isAdmin || groupMetadata?.sender?.isSuperAdmin 
groupMetadata.groupAdmins = groupMetadata.participants.filter(tr => tr.isAdmin || tr.isSuperAdmin) || []
groupMetadata.groupMembers = groupMetadata.participants.filter(tr => !tr.isAdmin || !tr.isSuperAdmin) || []
mess.sender = {...groupMetadata.sender,...mess?.sender}
mess.client = {...groupMetadata.client,...mess?.client}
return {
	...groupMetadata
}
}

async searchImage(query) {
return new Promise(async (resolve,reject) => {
await googleImage(query,resultImage)
function resultImage(error,result) {
if (error) reject(error)
if (result) resolve(result)
}
})
}

async delay(ms) {
 return new Promise(resolve => setTimeout(resolve, ms))
}

async start (){
console.clear()
let kali = fs.readFileSync('./src/kali.cat').toString()
console.log(this.logColor(kali,'silver'))
console.log(this.logColor(`Starting Running Bot......`,'silver'))
await this.delay(3000)
console.clear()
console.log(this.logColor(` _____   __    _             ____        __ 
/__  /  / /_  (_)___        / __ )____  / /_
  / /  / __ \\/ / __ \\______/ __  / __ \\/ __/
 / /__/ /_/ / / / / /_____/ /_/ / /_/ / /_  
/____/_.___/_/_/ /_/     /_____/\\____/\\__/  
                                            
`,'silver'))
await this.delay(1)
}


async googleSearch(query) {
return googleSearch({query})
}

}
exports.WAConnection = class WAConnection extends baileys.WAConnection {
		 async reply(mess, text, opt) {
		  return await this.sendMessage(mess.key.remoteJid, util.format(text), baileys.MessageType.extendedText, { quoted:mess, ...opt})
		  } 
     async getBuffer(path,save,auto_ext=true){
       let buffer = Buffer.isBuffer(path) ? path : /^data:.?\/.?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path, { headers: { 'User-Agent': fakeUa()}})).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : typeof path === 'string' ? path : Buffer.alloc(0);
       let anu = await FileType.fromBuffer(buffer) || {ext:'bin',mime:'application/octet-stream'}
       if (save) {
       save = auto_ext?save+'.'+anu.ext:save
       fs.writeFileSync(save,buffer)
       return {filename: save,buffer,...anu}
       } else {
        return {buffer}
       }
      }
     async sendMessageFromContent(jid,obj,opt={}){
     let prepare = await this.prepareMessageFromContent(jid,obj,opt)
    await this.relayWAMessage(prepare)
    return prepare
     }
     async fakeReply(jid,message,type,opt,fakeJid,participant,fakeMessage){
     return await this.sendMessage(jid,message,type,{
  quoted: { key: {fromMe: jid == this.user.jid, participant,remoteJid: fakeJid },
"message": fakeMessage}, 
...opt
})
     }
	getMentionedJidList(text){
		try{
			return text.match(/@(\d*)/g).map(x => x.replace('@', '')+'@s.whatsapp.net')||[];
		} catch(e){
			return []
		}
  	}
	async prepareMessage(id, message, type, options = {}) {
			const ambilBuffer = async (url) => {
			 return new Promise(async (resolve, reject) => {
				const gaes = got(url,{headers: {'User-Agent':'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.585 Mobile Safari/534.11+'}})
				var stream = gaes.buffer()
				stream.then(async (result) => {
				resolve(result)
					 })
				.catch((err) => {
				    reject(err)
				})
				})
			};
				const content = await this.prepareMessageContent(message, type, options);
				if(type === 'imageMessage'){
				var buffna = Buffer.isBuffer(message) ? message : /^data:.*?\/.*?;base64,/i.test(message) ? Buffer.from(message.split`,`[1], 'base64') : /^https?:\/\//.test(message) ? await ambilBuffer(message) : fs.existsSync(message) ? fs.readFileSync(message) : typeof message === 'string' ? message : Buffer.alloc(0)
				if(typeof message !== 'string'){
					if(message.hasOwnProperty('url')){
					buffna = Buffer.isBuffer(message.url) ? message.url : /^data:.*?\/.*?;base64,/i.test(message.url) ? Buffer.from(message.url.split`,`[1], 'base64') : /^https?:\/\//.test(message.url) ? await ambilBuffer(message.url) : fs.existsSync(message.url) ? fs.readFileSync(message.url) : typeof message.url === 'string' ? message.url : Buffer.alloc(0)
					}
				}
				const baper = await jimp.read(buffna);
				const hasil = await baper.resize(48, 48).getBufferAsync(jimp.MIME_JPEG)
				var preparedMessage = this.prepareMessageFromContent(id, content, {thumbnail: hasil, ...options});
				}else{
				preparedMessage = this.prepareMessageFromContent(id, content, options);
				}
				return preparedMessage
		}
     async prepareSticker(path,exifFile){
       let getBuf = (await this.getBuffer(path))
       let {ext,mime} = getBuf 
       let buf = getBuf.buffer
       if (!fs.existsSync("./tmp")) fs.mkdirSync('tmp')
       let fileName = `./tmp/${Date.now()}.${ext}`
       let output = fileName.replace(ext,'webp')
       fs.writeFileSync(fileName,buf)
       if (ext == 'webp'){
         if (exifFile){
         return new Promise((resolve,reject) => {
         exec(`webpmux -set exif ${exifFile} ${output} -o ${output}`,(err) => { 
           if (err) throw err 
        let result = fs.readFileSync(output)
       fs.unlinkSync(output)
       resolve(result)
         })
         })
         } else {
       let result = fs.readFileSync(output)
       fs.unlinkSync(output)
       return result
         }
       }
       return new Promise(async(resolve,reject) => {
         await ffmpeg(fileName).input(fileName).on('error', function (err) { 
           fs.unlinkSync(fileName)
           reject(err)
}).on('end', function () {
if (exifFile) {
exec(`webpmux -set exif ${exifFile} ${output} -o ${output}`,(err) => { 
if (err) return err
let result = fs.readFileSync(output)
fs.unlinkSync(fileName)
fs.unlinkSync(output)
resolve(result)
})
} else {
let result = fs.readFileSync(output)
fs.unlinkSync(fileName)
fs.unlinkSync(output)
resolve(result)
}
}).addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`]).toFormat('webp').save(output)
       })
     }
     async sendImage(jid,path,caption,quoted,opt){
     let buff = (await this.getBuffer(path)).buffer
     return await this.sendMessage(jid,buff,'imageMessage',{quoted,caption,thumbnail: buff,...opt})
     }
     async sendVideo(jid,path,caption,quoted,opt){
     let buff = (await this.getBuffer(path)).buffer
     return await this.sendMessage(jid,buff,'videoMessage',{quoted,caption,...opt})
     }
     async sendLocation(jid,property,opt){
     return await this.sendMessageFromContent(jid,{locationMessage: property},opt)
     }
     async sendLiveLocation(jid,property,opt){
     return await this.sendMessageFromContent(jid,{liveLocationMessage:property},opt)
     }
     async sendProduct(jid,property,opt){
      return await this.sendMessageFromContent(jid,{productMessage:property},opt)
     }
	async sendFileFromUrl(id, url, qu, caption="", filename="file",opt={}){
        const buffers = await axios(url, {headers: {'User-Agent':'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.585 Mobile Safari/534.11+'},responseType: "arraybuffer", ...opt.headers}).catch(e =>{throw e})
	var mimtype = buffers.headers["content-type"]
	mimtype = mimtype == 'image/gif' ? 'video/gif' : mimtype == 'image/jpg' ? 'image/jpeg' : mimtype
	const msgtype = mimtype && mimtype.includes('image') ? 'imageMessage' : mimtype && mimtype.includes('audio') ? 'audioMessage' : mimtype && mimtype.includes('video') || mimtype && mimtype.includes('gif')  ? 'videoMessage' : 'documentMessage'
	filename = mimtype == 'image/jpeg' ? null : filename
	mimtype = mimtype == 'image/jpeg' ? null : mimtype
	return await this.sendMessage(id, buffers.data, msgtype, {quoted: qu, mimetype: mimtype, filename:filename,caption:caption, contextInfo:{"mentionedJid": this.getMentionedJidList(caption)}, ...opt})
      } 
      async sendSticker(jid,path,opt,exifFile){
       let prepare;
       if (exifFile){
         prepare = await this.prepareSticker(path,exifFile)
       } else {
       prepare = await this.prepareSticker(path)
       }
       return await this.sendMessage(jid,prepare,baileys.MessageType.sticker,opt)
     }
    }
