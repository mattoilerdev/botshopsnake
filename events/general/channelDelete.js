module.exports = {
    name: "channelDelete",
    execute(member) {
        const LogChannel = member.guild.channels.cache.get('1091377199828975636');
        const MsgDelete = new Discord.MessageEmbed()
        .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
          .setColor('#000001')
          .setDescription(`L'utente ${member.toString} ha **eliminato** un canale`)
          .setFooter(foottego)
      
        return LogChannel.send({
          embeds: [MsgDelete]
        });
    }
}