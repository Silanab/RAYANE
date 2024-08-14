import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Number :*\nwa.me/212649515064
*instagram1:*\ninstagram.com/rz1_lh_05

*instagram2:*\ninstagram.com/nawfal_the_ghost

*WhatsApp:*\nhttps://www.instagram.com/rz1_lh_05?igsh=YTQwZjQ0NmI0OA==

*script bot :*\nhttps://github.com/Silanab/RAYANE

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
