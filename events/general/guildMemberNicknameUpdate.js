module.exports = {
    name: "guildMemberNicknameUpdate",
    execute(member, oldNickname, newNickname) {
      const LogChannel = member.guild.channels.cache.get('1091377199828975636'); 
        const MemberNicknameUpdate = new Discord.MessageEmbed()
    .setTitle('**__Nickname Aggiornato__**')
    .setColor('#000001')
    .setDescription(`L'utente ${member.toString()} ha **cambiato nickname**, da \n${oldNickname} a ${newNickname}`)
    .setFooter(foottego)

  return LogChannel.send({
    embeds: [MemberNicknameUpdate]
  });
    }
}