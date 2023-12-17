// Buat Lu Yang Jual Sc Ini Gw Tonjok 



const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://wa.me/6287775704633?text=bang+aku+mau+donasi+i+love+yuuu'
global.ig = 'https://instagram/@RanggaHalal' // ubah aja
global.ofc = 'https://chat.whatsapp.com/Dvp1AjdfojrDvHulh4r3YR'
global.okta = 'https://taaofc-panel.my.id'
global.gh = 'https://github.com/RanggaKing'
global.saluran = '-'
global.email = 'Malaz@gmail.com' //serah
global.region = 'Jepang' // serah
global.dana = '-'
global.gopay = '-'
global.pulsa = '-'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = '𝚁𝚊𝚗𝚐𝚐𝚊' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6287775704633'] // ubah aja pake nomor lu
global.premium = ['6287775704633']
//==========================BY Hw Mods=======================//
global.lolkey = 'a8e86232771f9bc1826742c1'
global.zenz = 'zenzkey_41b4fe7a5d' // https://api.zahwazein.xyz
global.keyopenai = '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'
//====================BY Hw Mods=============================//
global.botname = 'MalazBot' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'Rangga' // ubah aja ini nama sticker
global.ta = '•' //cuma simbol
global.author = '𝘽𝙮 𝙍𝙖𝙣𝙜𝙜𝙖' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'oka' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//


//imgnya disini
global.thum = fs.readFileSync("./baseoka/image/thum.jpeg") 
global.good = fs.readFileSync("./baseoka/image/good.jpeg") 
global.vidmenu = fs.readFileSync("./baseoka/video/mainmenu.mp4")

global.mess = {
    done: 'Done Kak 😁',
    admin: 'Fitur ini buat _*Admin Group*_ loo',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Fitur ini buat _*owner*_ loo',
    group: 'Fitur ini buat _*Group Chat*_ loo',
    private: 'Fitur ini buat _*Admin Group*_ loo',
    wait: 'Lu olang tunggu bentar loo',
    daftar: 'Lu olang belum dafta lo, ketik regmail / register untuk daftar',
    error: '*Fitur Error!!!*',
    prem : 'Fitur ini buat _*Member Premium*_ loo'
}
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}

//rpg
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})