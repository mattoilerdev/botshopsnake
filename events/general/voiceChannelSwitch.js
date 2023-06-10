module.exports = {
    name: "voiceChannelSwitch",
    execute(member, oldChannel, newChannel) {
        const LogChannel = member.guild.channels.cache.get('1091377199828975636');
  const VCJoined = new Discord.MessageEmbed()
    .setTitle('**__Canale Vocale Cambiato__**')
    .setColor('#000001')
    .setDescription(`L'utente ${member.toString()} ha **cambiato canale vocale,** da: \n${oldChannel} a \n${newChannel}`)
    .setFooter(foottego)

  return LogChannel.send({
    embeds: [VCJoined]
  }); 
    }
}