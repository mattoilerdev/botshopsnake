module.exports = {
    name: "guildMemberRemove",
    execute(member) {
        let welcome = new Discord.MessageEmbed()
        .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
        .setDescription(`<:CHIUSODA:1084465888109023262> ・ ${member} addio dallo **Snake Shop**, ora siamo ${member.guild.memberCount -1}`)
        .setColor("#000001")
        .setFooter(foottego)
        member.guild.channels.cache.get("1091376799688163389").send({embeds: [welcome]})
    }
}