module.exports = {
    name: "voiceChannelLeave",
    execute(member, channel) {
        const LogChannel = member.guild.channels.cache.get('1091377199828975636');
  const VCJoined = new Discord.MessageEmbed()
    .setTitle('**__Uscito in Vocale__**')
    .setColor('#000001')
    .setDescription(`L'utente ${member.toString()} è **uscito dal canale vocale** ${channel.toString()}`)
    .setFooter(foottego)

  return LogChannel.send({
    embeds: [VCJoined]
  }); 
    }
}