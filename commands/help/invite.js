const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "help",
  description: "INVITE Automodv12 beta BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`HERE INVITE LINK OF BOT`)
    .setDescription(`[CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=744597377406599188&permissions=8&scope=bot) OR [support server ](https://discord.gg/RJ2SRN2cVu)`)
    .setColor("RANDOM")
    .setFooter(`BOT MADE BY Bunny`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}