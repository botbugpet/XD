import fetch from 'node-fetch'
let handler = async (m, { conn, args, command }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Teks'
  m.reply(md)
  let res = `https://api.violetics.pw/api/ephoto360/${command}?apikey=1290-0463-b5e6&text=${response[0]}`
    conn.sendFile(m.chat, res, 'logo.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['1917', '3d-crack-text-effect-online', '3d-underwater', '3d-wood', '3damerican-flag', '3dglue-realistic', '3dgradient', '3dgradient2', '3dmetal-effect', '3dmetal-text-', '3dmulticolor-papercut', '3dpig-gif', '3druby-stone', '3dsand-engraved', '3dshiny-metallic', '3dsparkle-christmas', '3dsub-zombie', '3dtext-effect', '3dtext-effect2', '3dtext-effect3', '3dtext-pig', '3dvalentine-cards', '3dxmas-cards', '3dxmas-cards2', '83day-card', '83day-card2', '83day-card3', '83day-card4', 'advanced-glow', 'ahri-league-of-legends', 'alice-league-of-kings', 'amily-arena-of-valor', 'angels-wings', 'anonymous-neon', 'art-shader', 'zzenka-league-of-kings', 'balloon-noel', 'bats-halloween', 'bear2', 'bee', 'birthday-cake', 'birthday-cake10', 'birthday-cake2', 'birthday-cake3', 'birthday-cake4', 'birthday-cake5', 'birthday-cake6', 'birthday-cake7', 'birthday-cake8', 'birthday-cake9', 'birthday-cards', 'birthdayfoil-balloon', 'blackpink', 'blackskin-snake', 'blood-frosted', 'blood-steel', 'blood-text', 'blood-text2', 'blood-wall', 'blue-effect', 'blue-neon', 'bokeh-text', 'boom-comic', 'broken-glass', 'bulb-effect', 'cake-text', 'cake-text2', 'cake-text3', 'candy-text', 'card-christmas', 'card-christmas2', 'cartoon-graffiti', 'christmas-snow', 'christmas-tree', 'christmasball-ornaments', 'circle-mascot-team', 'cloth-effect', 'cloud-sky', 'clouds-sky', 'color-fireworks', 'colorful-angelwing', 'cool-metal', 'cute-girl-gamer', 'cute-typography', 'dance-effect', 'dancing-santaclaus', 'darkgreen-typography', 'darth-vader', 'decorated-cookie', 'decorated-cookie', 'deluxe-silver', 'dinamo-effect', 'double-exposure', 'dragon-fire', 'equalizer-effect', 'equalizer-blue', 'eraser-effect', 'evelynn-league-of-legends', 'fabric-effect', 'fabric-effect2', 'facebook-gold-play-button', 'facebook-silver-play-button', 'firework-effect', 'firework-effect2', 'flower-card', 'flower-effect', 'football-club2', 'fps-game', 'fun-certify', 'fun-certify2', 'galaxy-angel', 'galaxy-angelwings', 'galaxy-effect', 'galaxy-effect2', 'galaxy-text', 'galaxy-text2', 'galaxy-text3', 'galaxy-text4', 'galaxy-text5', 'galaxyangel-wings', 'gankk-league-of-kings', 'gemstone-effect', 'glitter-gold', 'glossy-carbon', 'glowing-effect', 'gold-effect', 'gold-effect2', 'gold-effect3', 'gold-text', 'gold-text2', 'golden-text', 'graffiti-text', 'graffiti-text2', 'graffiti-text3', 'graffiti-text4'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(1917|3d-crack-text-effect-online|3d-underwater|3d-wood|3damerican-flag|3dglue-realistic|3dgradient|3dgradient2|3dmetal-effect|3dmetal-text-|3dmulticolor-papercut|3dpig-gif|3druby-stone|3dsand-engraved|3dshiny-metallic|3dsparkle-christmas|3dsub-zombie|3dtext-effect|3dtext-effect2|3dtext-effect3|3dtext-pig|3dvalentine-cards|3dxmas-cards|3dxmas-cards2|83day-card|83day-card2|83day-card3|83day-card4|advanced-glow|ahri-league-of-legends|alice-league-of-kings|amily-arena-of-valor|angels-wings|anonymous-neon|art-shader|zzenka-league-of-kings|balloon-noel|bats-halloween|bear2|bee|birthday-cake|birthday-cake10|birthday-cake2|birthday-cake3|birthday-cake4|birthday-cake5|birthday-cake6|birthday-cake7|birthday-cake8|birthday-cake9|birthday-cards|birthdayfoil-balloon|blackpink|blackskin-snake|blood-frosted|blood-steel|blood-text|blood-text2|blood-wall|blue-effect|blue-neon|bokeh-text|boom-comic|broken-glass|bulb-effect|cake-text|cake-text2|cake-text3|candy-text|card-christmas|card-christmas2|cartoon-graffiti|christmas-snow|christmas-tree|christmasball-ornaments|circle-mascot-team|cloth-effect|cloud-sky|clouds-sky|color-fireworks|colorful-angelwing|cool-metal|cute-girl-gamer|cute-typography|dance-effect|dancing-santaclaus|darkgreen-typography|darth-vader|decorated-cookie|decorated-cookie|deluxe-silver|dinamo-effect|double-exposure|dragon-fire|equalizer-effect|equalizer-blue|eraser-effect|evelynn-league-of-legends|fabric-effect|fabric-effect2|facebook-gold-play-button|facebook-silver-play-button|firework-effect|firework-effect2|flower-card|flower-effect|football-club2|fps-game|fun-certify|fun-certify2|galaxy-angel|galaxy-angelwings|galaxy-effect|galaxy-effect2|galaxy-text|galaxy-text2|galaxy-text3|galaxy-text4|galaxy-text5|galaxyangel-wings|gankk-league-of-kings|gemstone-effect|glitter-gold|glossy-carbon|glowing-effect|gold-effect|gold-effect2|gold-effect3|gold-text|gold-text2|golden-text|graffiti-text|graffiti-text2|graffiti-text3|graffiti-text4)$/i

export default handler
