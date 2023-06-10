module.exports = {
    name: "guildMemberKickAdd",
    execute(member) {
      const LogChannel = member.guild.channels.cache.get('1091377199828975636'); 
        const MsgDelete = new Discord.MessageEmbed()
        .setTitle('**__Utente Kickato__**')
        .setColor('#000001')
        .setDescription(`L'utente ${member.user.username} è stato **kickato**`)
        .setFooter(foottego)
    
      return LogChannel.send({
        embeds: [MsgDelete]
      });
    }
}