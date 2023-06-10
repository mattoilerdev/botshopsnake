module.exports = {
    name: "voiceChannelJoin",
    execute(member, channel) {
        const LogChannel = member.guild.channels.cache.get('1091377199828975636');
  const VCJoined = new Discord.MessageEmbed()
    .setTitle('**__Entrato in Vocale__**')
    .setColor('#000001')
    .setDescription(`L'utente ${member.toString()} è **entrato nel canale vocale:** ${channel.toString()}`)
    .setFooter(foottego)

  return LogChannel.send({
    embeds: [VCJoined]
  }); 
    }
}