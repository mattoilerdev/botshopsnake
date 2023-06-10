module.exports = {
    name: "guildMemberRoleRemove",
    execute(member, role) {
        const LogChannel = member.guild.channels.cache.get('1091377199828975636');
        const MemberRoleAdd = new Discord.MessageEmbed()
          .setTitle('**__Rimosso Ruolo Utente__**')
          .setColor('#000001')
          .setDescription(`L'utente ${member.toString()} ha **perso il ruolo** ${role.toString()}`)
          .setFooter(foottego)
      
        return LogChannel.send({
          embeds: [MemberRoleAdd]
        });
      
    }
}