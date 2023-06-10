module.exports = {
    name: "ready",
    execute(client) {
console.log("BOT ON")
const counter = client.channels.cache.get("1091384326085681322")
counter.setName(`| 👤 | Utenti : ${client.guilds.cache.get("960106570451128320").memberCount}`)
  }
}