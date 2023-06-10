const client = new Discord.Client({ intents: 3276799 })
module.exports = {
    name: "guildMemberOnline",
    execute(member) {
        const LogChannel = member.guild.channels.cache.get('1091377199828975636'); // Replace with your channel id
        const MemberOffline = new Discord.MessageEmbed()
          .setTitle('**__Membro Online__**') 
          .setColor('#000001')
          .setDescription(`L'utente ${member.toString()} **è andato offline**`)
          .setFooter(foottego)
      
        return LogChannel.send({
          embeds: [MemberOffline]
        });
    }
}