const { Discord } = require("discord.js");
const client = new Discord.Client();
const { Client } = require('discord.js');
const { CronJob } = require('cron');
const burc = require('burc-api');

const settings = {
    TOKEN: '',
    STATUS: '',
    CHANNEL: ''
};
const client = new Client({
    presence: {
        activity: {
            name: settings.STATUS,
            type: 'LISTENING'
        }
    }
});

client.on('ready', () => {
    const channel = client.channels.cache.get(settings.CHANNEL);
    if (!channel || channel.type !== 'text') throw new Error('Can not find channel!');

    const schedule = new CronJob('00 00 00 * * 1', async function() {
        const horoscopeArray = [
            await burc.yengec(), 
            await burc.boga(), 
            await burc.koc(), 
            await burc.kova(),
            await burc.aslan(), 
            await burc.balik(), 
            await burc.basak(),
            await burc.terazi(),
            await burc.yay(),
            await burc.oglak(),
            await burc.ikizler()
        ];
        horoscopeArray.forEach((horoscope) => channel.send(horoscope));
    }, null, true, 'Europe/Istanbul');
    schedule.start();

    console.log(`Hi guys! I'm ${client.user.username}.`);
});

client.login(settings.TOKEN);
