module.exports = {
    name: "guildMemberAdd",
    execute(member) {
        let welcome = new Discord.MessageEmbed()
        .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1091029706465366046/1116786785419276380/64977070-A9ED-48BE-B1B5-AE49344A0D1B.png?width=671&height=671`)
        .setDescription(`<:Check_Verde:1083801386560532501> ・ Ciao ${member} e benvenuto nello **Snake Shop**, sei il ${member.guild.memberCount}`)
        .setColor("#000001")
        .setFooter(foottego)
        member.guild.channels.cache.get("1091376799688163389").send({embeds: [welcome]})
    }
}