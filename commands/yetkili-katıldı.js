const Discord = require('discord.js');

exports.run = async (client, message, args) => { 
const guild = message.member.guild

if (!message.member.roles.cache.has("KULLANACAK YETKİLİ ROL İD") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().addField("Yetersiz Yetki",`Bu Komutu Kullanabilmeniz için Yeterli Yetkiniz Yok`).setColor("RANDOM")).then(m => m.delete({timeout: 7000}));

if(!message.member.voice || message.member.voice.channelID != "YÖNETİM KANALI İD") return; 
let üyeler = message.guild.members.cache.filter(member => member.roles.cache.has("KATILDI ROL İD") && member.voice.channelID != "YÖNETİM KANALI İD");
üyeler.array().forEach((member, index) => {
  setTimeout(() => {
    member.roles.remove("KATILDI ROL İD").catch();
  }, index * 1250)
});

let katıldıverildi = message.member.voice.channel.members.filter(member => !member.roles.cache.has("KATILDI ROL İD") && !member.user.bot)
katıldıverildi.array().forEach((member, index) => {
  setTimeout(() => {
    member.roles.add("KATILDI ROL İD").catch();
  }, index * 1250)
});
message.channel.send(new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`Katıldı Rolü Veriliyor \n\nRol Verilecek: ${katıldıverildi.size} \nRol Alınacak: ${üyeler.size}`)).catch();

  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yetkili-katıldı", "katıldı", "katıldı-ver"],
  permLevel: 0
}
exports.help = {
  name: "yetkili-katıldı",
  description: "Katıldı ❤ Salvo Code"
}