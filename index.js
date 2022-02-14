const { Discord } = require("discord.js");
const client = new Discord.Client();
const burc = require('burc-api');

const yengec = await burc.yengec();
const boga = await burc.boga();
const koc = await burc.koc();
const kova = await burc.kova();
const aslan = await burc.aslan();
const balik = await burc.balik();
const basak = await burc.basak();
const terazi = await burc.terazi();
const yay = await burc.yay();
const oglak = await burc.oglak();
const ikizler = await burc.ikizler();


let settings = [{
    "BOT_TOKEN":"",
    "BOT_STATUS":"",
    "BOT_VOICE_CHANNEL":"",
    "BURC_CHANNEL":""
}]



client.on("ready", async () =>{
    client.user.setActivity(settings.BOT_STATUS, { type: "LISTENING", status: "online"});
    client.channels.cache.get(settings.BOT_VOICE_CHANNEL).join().catch(err => console.error("Ses Bağlanırken Sorun Oluştu."));

    mesaj(yengec);
    mesaj(boga);
    mesaj(koc);
    mesaj(kova);
    mesaj(aslan);
    mesaj(balik);
    mesaj(basak);
    mesaj(terazi);
    mesaj(yay);
    mesaj(oglak);
    mesaj(ikizler);
    console.log("Burçlar Başarıyla Kanala Gönderildi.")
})



function mesaj(burc) {
    client.channels.cache.get(settings.BURC_CHANNEL).send(burc)
    console.log(burc);
    console.log("Burçlar Başarıyla Kanala Gönderildi.")
}


client.login(settings.BOT_TOKEN).then((e => console.log(`[${client.user.tag}] bot is online!`))).catch((e => console.log(`[${client.user.tag}] bot is ofline! Error: ${e}`)))

