module.exports = {
    name: "role",
    execute(message) {
        let ruolo = message.mentions.roles.first()
        if (!ruolo) {
            return message.channel.send({embeds: [norole]})
        }

            let memberCount = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == ruolo)).size;
            let permessiRuolo = new Discord.Permissions(ruolo.permissions.bitfield);
            let elencoPermessi = "";
            if (permessiRuolo.has("ADMINISTRATOR")) {
                elencoPermessi = "ADMINISTRATOR";

            }
                else {
                    let permessi = ["CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "VIEW_AUDIT_LOG", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "VIEW_GUILD_INSIGHTS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS"]
                    for (let i = 0; i < permessi.length; i++) {
                        if (permessiRuolo.has(permessi[i])) {
                            elencoPermessi += `- ${permessi[i]}\n`
                        }
                    }
                }

                let jeans = new Discord.MessageEmbed()
                .setAuthor("Snake Shop", `https://media.discordapp.net/attachments/1092203250679296030/1117090463086821396/A74DB69A-3148-4667-86F0-6355B1DFC016.png?width=671&height=671`)
                .setDescription("**Ecco tutte le informazioni su questo ruolo!")
                .setColor("#000001")
                .setFooter(foottego)
                .addField('💾 • Nome Ruolo', ruolo.name, true)
                .addField("💾 • ID Ruolo", ruolo.id, true)
                .addField("🎨 • Color", ruolo.hexColor, true)
                .addField("📅 • Ruolo Creato", ruolo.createdAt.toDateString(), true)
                .addField("🔐 • Permessi", elencoPermessi, true)
                .addField("👤 • Membri", memberCount, true)
            message.channel.send({ embeds: [jeans] })


        


    }
}