module.exports = {
    name: "guildMemberUnboost",
    execute(member) {
        const LogChannel = member.guild.channels.cache.get('1091377199828975636');
        const MemberBoost = new Discord.MessageEmbed()
          .setTitle('**__Boost Rimosso__**')
          .setColor('#000001')
          .setDescription(`L'utente ${member.toString()} **ha smesso di boostare il server**`)
          .setFooter(foottego)
        return LogChannel.send({
          embeds: [MemberBoost]
        });
    }
}