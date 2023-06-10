module.exports = {
    name: "guildMemberRemove",
    execute(member) {
const counter = member.guild.channels.cache.get("1091384326085681322")
counter.setName(`| 👤 | Utenti : ${member.guild.memberCount}`)
    }
}