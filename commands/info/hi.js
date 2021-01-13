const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "hi",
  usage: "hi",
  description: "Hello",
  category: "moderation",
  run: (client, message, args) => {
    if (!args.length) {
      return message.channel.send("Please Give the Hi");
    }

    let embed = new MessageEmbed()
      .setAuthor("" + message.author.tag, message.author.avatarURL({ dynamic: true, size: 2048 }))
      .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
      .setColor("RANDOM")
      .setDescription(args.join(" "))
      .setTimestamp();

    return message.channel.send(embed).then(m => {
      m.react("✅");
      m.react("❌");
    });
    
    message.delete()
    
  }
};
