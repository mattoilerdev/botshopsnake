module.exports = {
    name: "server",
    async execute(message) {
        const owner = await message.guild.fetchOwner()
        let server = message.guild;
        let embed = new Discord.MessageEmbed()
            .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
            .setDescription("**Ecco tutte le info sul server!**")
            .setImage(server.iconURL())
            .setColor("#000001")
            .setFooter(foottego)
            .addField("👑 • Owner", owner.toString(), true)
            .addField("💾 • Nome Server", server.name, true)
            .addField("💾 • ID Server", server.id, true)
            .addField("👤 • Membri", server.memberCount.toString())
            .addField("✏️ • Canali", server.channels.cache.size.toString())
            .addField("📅 • Server creato", server.createdAt.toDateString(), true)
            .addField("<a:CGE_Boost:1083791523222671461> • Boost ", server.premiumSubscriptionCount + " Boost, " + (server.premiumTier != "NONE" ? server.premiumTier : 0) , true)
        message.channel.send({ embeds: [embed] })
    }
}
