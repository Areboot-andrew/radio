// ========================================
// Video Clips & Music Data
// ========================================

const PODCASTS = [
  {
    id: 'vid-w1omlx1',
    title: '3ABN Praise Him Music Network',
    author: 'Music Clips',
    type: 'video',
    url: 'https://3abn.bozztv.com/3abn1/PraiseHim/smil:PraiseHim.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/iBcqT8L.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-vtjqvin',
    title: '4 Fun TV (576i) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream.4fun.tv:8888/hls/4f_high/index.m3u8',
    cover: 'https://i.imgur.com/rI1wo2l.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-rzarcpn',
    title: '4 Kurd',
    author: 'Music Clips',
    type: 'video',
    url: 'https://4kuhls.persiana.live/hls/stream.m3u8',
    cover: 'https://www.aparatchi.com/images/chanells-logo/4kurd.svg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-njobrvz',
    title: '7 RadioVisione (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream10.xdevel.com/video1s976543-1932/stream/playlist.m3u8',
    cover: 'https://radio7note.com/img/favicon/android-icon-192x192.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-svzqpzw',
    title: '7S Music (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://mumt03.tangotv.in/Dsly5z3H7SMUSIC/index.m3u8',
    cover: 'https://i.imgur.com/zDiIhdN.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-jztjrdy',
    title: '7 YOU & ME (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream10.xdevel.com/video0s977798-2239/stream/playlist.m3u8',
    cover: 'https://i.imgur.com/Rte2K3x.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-dvviib5',
    title: '8XM (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://115.42.65.142:9981/stream/channelid/582886861',
    cover: 'https://i.imgur.com/KLrfKRn.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-vb2jwsd',
    title: '9X Jalwa (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://b.jsrdn.com/strm/channels/9xjalwa/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_9X_JALWA/images/LOGO_HD/image.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-rbyylhy',
    title: '9X Jhakaas (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://9xjio.wiseplayout.com/9X_Jhakaas/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s90012_ld_h15_aa.png?lock=720x540',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-pec18mz',
    title: '9X Tashan (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://9xjio.wiseplayout.com/9X_Tashan/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_9X_TASHAN/images/LOGO_HD/image.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-io54a0s',
    title: '9XM (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://9xjio.wiseplayout.com/9XM/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_9XM/images/LOGO_HD/image.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-hyqxmrk',
    title: '13 Festival (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://origin.dpsgo.com/ssai/event/Nftd0fM2SXasfDlRphvUsg/master.m3u8',
    cover: 'https://i.imgur.com/Ymk6j5o.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-wq24m8r',
    title: '15+ Music (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live.15plusmg.ru/memfs/ce3366b1-bf25-4e24-96bb-1adf0d44bd3d.m3u8',
    cover: 'https://i.imgur.com/kj21hwd.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-n8d1z2o',
    title: '30A Music (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://30a-tv.com/music.m3u8',
    cover: 'https://i.imgur.com/gNWg9tl.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-aehasiw',
    title: '51 Radio TV (480p) [Geo-blocked]',
    author: 'Music Clips',
    type: 'video',
    url: 'http://wms.shared.streamshow.it/canale51/canale51/playlist.m3u8',
    cover: 'https://www.51news.it/images/loghi/logo_tv_radio_51news.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-4y3f377',
    title: '70-80 TV (1080P)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://585b674743bbb.streamlock.net/9050/9050/playlist.m3u8',
    cover: 'https://i.imgur.com/y4kNV3Q.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-2k41jcq',
    title: '88 Stereo (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'http://k3.usastreams.com/CableLatino/88stereo/playlist.m3u8',
    cover: 'https://i.imgur.com/i3YwORV.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-cz9xbcz',
    title: '98.1 Pearl FM (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live2.tensila.com/pearl-v-1.pearlfm/hls/live/mystream.m3u8',
    cover: 'https://i.imgur.com/GY750xh.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-hrle5fb',
    title: 'A2i Music (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream.sen-gt.com/A2iMusic/myStream/playlist.m3u8',
    cover: 'https://i.imgur.com/Fykhzxh.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-t0uf9is',
    title: 'Aaryaa TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream.ottlive.co.in/aryatvtamil/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/aryatvtamil.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-7y73ndq',
    title: 'Abdulmajeed Abdullah (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d2hng5r56zpsbw.cloudfront.net/out/v1/9c4c990f44bb4767bb46271f326dd574/index.m3u8',
    cover: 'https://assets.mbcmood.com/channels/1720184087Abdullah%20Majeed%20Abdullah%20banner.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-amaud9m',
    title: 'Activa TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streamtv.mediasector.es/hls/activatv/index.m3u8',
    cover: 'https://i.imgur.com/VCUZKiw.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-xv1775d',
    title: 'ACW UG TV (480p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live.acwugtv.com/hls/stream.m3u8',
    cover: 'https://i.imgur.com/8pzEmcJ.jpeg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-tu6en5w',
    title: 'AE Radio TV (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://tls-cl.cdnz.cl/aeradio/live/playlist.m3u8',
    cover: 'https://i.imgur.com/425dj2i.jpeg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-49kmizz',
    title: 'AFN TV',
    author: 'Music Clips',
    type: 'video',
    url: 'https://bozztv.com/1gbw5/tintv2/tintv2/playlist.m3u8',
    cover: 'https://i.imgur.com/LctanF8.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-mg08jx1',
    title: 'Afrobeats (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream.ecable.tv/afrobeats/index.m3u8',
    cover: 'https://i.imgur.com/232ndRK.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-21r9bp6',
    title: 'Aghani Aghani TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn.streamlane.tv/hls/aghanitv/index.m3u8',
    cover: 'https://i.imgur.com/o6HSfNg.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-kplbgdq',
    title: 'AlbKanale Music TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://albportal.net/albkanalemusic.m3u8',
    cover: 'https://i.imgur.com/JdKxscs.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-d5njpc9',
    title: 'Alcance FM PLAY TV',
    author: 'Music Clips',
    type: 'video',
    url: 'https://video.wilohosting.com:19360/alcancefmtv/alcancefmtv.m3u8',
    cover: 'https://i.imgur.com/ymcWecA.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-z07nqbg',
    title: 'Alterna TV (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://tv.alterna.ar/stream/hls/live.m3u8',
    cover: 'https://tv.alterna.ar/alternatv.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-7mhaqbf',
    title: 'AMC (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://amchls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/yj8RNnG.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-pltv5pw',
    title: 'Amedia 1 (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://31.148.48.15/A1/index.m3u8',
    cover: 'https://i.imgur.com/2pAHdAi.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-pmgo8dq',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",AMusic Channel (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d3s7x6kmqcnb6b.cloudfront.net/d/distro001a/LVP8DMYRYH6F6Y5UUO8J/hls3/now,-1m/m.m3u8?ads.vf=McCy6HuluFe',
    cover: 'https://i.imgur.com/06zuf64.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-i4bdt5m',
    title: 'Andy Haryana (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://mumt03.tangotv.in/Dsly5z3HANDYHARYANA/index.m3u8',
    cover: 'https://i.imgur.com/rmCBD3e.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-dl1sxc1',
    title: 'Antenne Kaernten (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://60efd7a2b4d02.streamlock.net/a_kaernten/ngrp:livestream_all/playlist.m3u8',
    cover: 'https://i.imgur.com/nUKFDsb.jpeg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-uz0ppb4',
    title: 'Antenne Steiermark (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://60efd7a2b4d02.streamlock.net/a_steiermark/ngrp:livestream_all/playlist.m3u8',
    cover: 'https://i.imgur.com/qnappvd.jpeg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-zf893ee',
    title: 'Antenne Vorarlberg (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://5857db5306b83.streamlock.net/antennevorarlberg-live/_definst_/mp4:livestream/playlist.m3u8',
    cover: 'https://i.imgur.com/GW750Zc.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-qiek78x',
    title: 'Arabica TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://istream.binarywaves.com:8081/hls/arabica/playlist.m3u8',
    cover: 'https://i.imgur.com/sTOoDy1.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-5sir34w',
    title: 'ARY Musik (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://arymusik.aryzap.com/3fd38b2c62d0c3bbd74aedabb533c03a/6459fa78/v1/01847ac7a4930b8ed5aa6ed04aba/01847ac8f5f70b8ed5aa6ed04abd/main.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/en/b/bb/ARY_Musik_logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-hd1mfkr',
    title: 'ATN Music (360p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/atnmusic.stream/playlist.m3u8',
    cover: 'https://www.jagobd.com/wp-content/uploads/2015/12/atnmusic.jpg?x50681',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-plx1rsq',
    title: 'Atomic Academy TV (480p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://atomic.streamnet.ro/academia.m3u8',
    cover: 'https://i.imgur.com/ZbrDIbZ.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-jepjdnd',
    title: 'Atomic TV (360p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://atomic.streamnet.ro/atomictv.m3u8',
    cover: 'https://i.imgur.com/O4uI0Uy.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-bx4cxus',
    title: 'Avang TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://hls.avang.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/3I1n7fO.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-oq8tzgx',
    title: 'Azahares Radio Multimedia (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streamyes.alsolnet.com/azaharesfm/live/playlist.m3u8',
    cover: 'https://i.imgur.com/g1BFoSs.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-t8q51h4',
    title: 'B4U Hitz (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://115.42.65.142:9981/stream/channelid/1099703605',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ykbbkep',
    title: 'B4U Music (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn-2.pishow.tv/live/415/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s158141_ld_h15_aa.png?lock=720x540',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ohhumfq',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",Balle Balle (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/balle-balle/index.m3u8?ads.vf=b8WZfP1_RIy',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Balle_Balle_TV.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-vb69q5v',
    title: 'Baraza TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://eco.streams.ovh:8081/barazatv/tracks-v1a1/mono.m3u8',
    cover: 'https://i.imgur.com/TZ1unwF.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-zotlkks',
    title: 'Baraza TV Deep House (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://rtmp.streams.ovh:1936/barazarelax/barazazararelax/barazarelax/playlist.m3u8',
    cover: 'https://i.imgur.com/TZ1unwF.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-8p1dlmt',
    title: 'Baraza TV Relaxing (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://rtmp.streams.ovh:1936/barazarelax/barazarelax/playlist.m3u8',
    cover: 'https://i.imgur.com/TZ1unwF.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ryf4pv5',
    title: 'Barbud Music (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://raw.githubusercontent.com/taodicakhia/IPTV_Exception/master/channels/af/tolomusic.m3u8',
    cover: 'https://i.imgur.com/jbbxu0g.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-rhejvu3',
    title: 'BE@TTV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://tv.beatfm.nl/live.m3u8',
    cover: 'https://i.imgur.com/egK33Dj.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-v3v3pf5',
    title: 'Beats Radio (480p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://videostream.shockmedia.com.ar:19360/beatsradio/beatsradio.m3u8',
    cover: 'https://i.imgur.com/zkNUO5p.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-4wwt1kn',
    title: 'Bel RTL (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://bel-live-hls.akamaized.net/hls/live/2038650/BEL-Live-HLS/master.m3u8',
    cover: 'https://i.imgur.com/0DUprIW.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-rjbd2x7',
    title: 'Best of Dance TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://m1b2.worldcast.tv/dancetelevisionone/dancetelevisionone.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-tdomvwe',
    title: 'Bibel TV Musik (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://bibeltv03.iptv-playoutcenter.de/bibeltv03/bibeltv03.stream_1/playlist.m3u8',
    cover: 'https://i.imgur.com/yIqOcP5.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-p2y971z',
    title: 'BIZ Music (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://fl.biztv.media/music_720_QAKpGmVUjaPApCNjpsgBxrdqNihAkl/index.m3u8',
    cover: 'https://i.ibb.co/DfsCJwk/Uz-biz-music-5462.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-7ksbeow',
    title: 'BOKTV (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://livestream2.bokradio.co.za/hls/Bok5c.m3u8',
    cover: 'https://i.imgur.com/mcNjuuO.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-pugeb74',
    title: 'BPX TV Radio',
    author: 'Music Clips',
    type: 'video',
    url: 'https://video1.getstreamhosting.com:1936/8212/8212/playlist.m3u8',
    cover: 'https://i.imgur.com/86VXni8.jpeg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-6qg1bpg',
    title: 'Bravo! TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streaming.social3.hr/bravoTVkdjd7djd/XAbSERW5p3/2.m3u8',
    cover: 'https://i.imgur.com/FN2J9hv.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-qw9h62l',
    title: 'BRIDGE (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://31.148.48.15/Bridge_TV/index.m3u8',
    cover: 'https://i.imgur.com/qYObfrG.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-8c1hih2',
    title: 'BRIDGE Classic (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://31.148.48.15/Bridge_TV_Classic/index.m3u8',
    cover: 'https://i.imgur.com/JJTQq81.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-halua4a',
    title: 'BRIDGE Deluxe (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://31.148.48.15/Bridge_TV_HD/index.m3u8',
    cover: 'https://i.imgur.com/EazL8w7.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-x47wu1i',
    title: 'BRIDGE Hits (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://31.148.48.15/Bridge_TV_Dance/index.m3u8',
    cover: 'https://i.imgur.com/sIW9oR4.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-wfntyxs',
    title: 'BTA TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cloud.fastchannel.es/manifiest/hls/prog9/btatv.m3u8',
    cover: 'https://i.imgur.com/vygOosC.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-7gtl35n',
    title: 'Busuioc TV (540p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://busuioctv.iforward.eu/hls/busuioc.m3u8',
    cover: 'https://i.imgur.com/CQtfBPu.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-xh541dv',
    title: 'Cadena Elite (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8004/index.m3u8',
    cover: 'https://i.imgur.com/3yeGDTP.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-smzpud9',
    title: 'Canal 3 KMK TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live20.bozztv.com/giatv/giatv-KMKTV/KMKTV/chunks.m3u8',
    cover: 'https://i.imgur.com/sgRDRBK.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-z5ipm9b',
    title: 'Canal Clave (480p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://tv.picta.cu/clave/clave_0.m3u8',
    cover: 'https://i.imgur.com/7tMkA4Z.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-94zfrww',
    title: 'CCTV-11 (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://74.91.26.218:82/live/cctv11hd.m3u8',
    cover: 'https://i.imgur.com/CjOWx7L.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-xv3kg6g',
    title: 'CCTV-15 (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://xykt-fix.github.io/play/a02e/index.m3u8',
    cover: 'https://i.imgur.com/CCV0eRG.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-wa0qmii',
    title: 'CCTV-Storm Music (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://38.75.136.137:98/gslb/dsdqpub/fyyy.m3u8?auth=testpub',
    cover: 'https://i.imgur.com/IiiRmrf.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ubxu9sl',
    title: 'CEACOM TV [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/ceacom/index.m3u8',
    cover: 'https://i.imgur.com/hutdRfk.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-yv4pm51',
    title: 'Channel C (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://mini.allinonereborn.fun/tata.php?id=11588',
    cover: 'https://i.imgur.com/CnFdLaf.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-kgu2zq9',
    title: 'City TV (576p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://tv.city.bg/play/tshls/citytv/index.m3u8',
    cover: 'https://i.imgur.com/mFL452f.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-t7o8e5l',
    title: 'Clubbing TV France',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d1j2csarxnwazk.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-uze1m6xh4fiyr-ssai-prd/master.m3u8',
    cover: 'https://i.imgur.com/MyiA92q.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-8yykygl',
    title: 'CMC (California Music Channel) (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cmc-ono.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/L38mC6H.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-41kg5yy',
    title: 'CMC TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream.cmctv.hr:49998/cmc/live.m3u8',
    cover: 'https://i.imgur.com/FCb7Ag2.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-p1uoryo',
    title: 'Company TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://5929b138b139d.streamlock.net/CompanyTV/smil:CompanyTV.smil/master.m3u8',
    cover: 'https://i.imgur.com/ccdwsWj.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-mtj79o1',
    title: 'Conecta TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream8.mexiserver.com:19360/conectatvx/conectatvx.m3u8',
    cover: 'https://i.imgur.com/qEk0QGa.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-aufdyzm',
    title: 'Cool FM 98.9 (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live2.tensila.com/cool-v-1.arubara/hls/master.m3u8',
    cover: 'https://i.imgur.com/uGE6lZ2.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-dwews33',
    title: 'Couleur 3 (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://rtsc3video.akamaized.net/hls/live/2042837/c3video/3/playlist.m3u8',
    cover: 'https://i.imgur.com/VOIwYYd.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-sohpln2',
    title: 'Cumbia Mix (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cloud.tvomix.com/CUMBIAMIX/index.m3u8',
    cover: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6901dfd41a05195b77301d7b/b306e57e4_Logo-TV-C.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-y9mdw2g',
    title: 'D3 TV (480p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live20.bozztv.com/akamaissh101/ssh101/d3tvnet/playlist.m3u8',
    cover: 'https://i.imgur.com/uFEIBtB.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-a5bz3s0',
    title: 'D Music (1280p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'http://43.252.18.195:5080/live/streams/WCVNews.playlist.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-y6t5ke3',
    title: 'Dance FM (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://5eaccbab48461.streamlock.net:1936/dancefm_1/dancefm_1/playlist.m3u8',
    cover: 'https://i2.paste.pics/ff3e1e1045a1968dcdbcda3824a94eb3.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-e48ohgh',
    title: 'Dance Television (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://m1b2.worldcast.tv/dancetelevisionone/2/dancetelevisionone.m3u8',
    cover: 'https://pbs.twimg.com/profile_images/1268129322730127364/OJlQBZpS_400x400.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-zy0re0m',
    title: 'like Gecko Chrome/144.0.0.0 Safari/537.36" group-title="Music",Dance TV [Geo-blocked]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://op-group1-swiftservehd-1.dens.tv/h/h250/index.m3u8',
    cover: 'https://i.imgur.com/UKMR625.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-uhvhnan',
    title: 'DanceHits80',
    author: 'Music Clips',
    type: 'video',
    url: 'http://dancehits80.denvs.ru:8080/index.m3u8',
    cover: 'https://i.imgur.com/uMw3kks.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-6en3xzs',
    title: 'DanceTV Algorhythm (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://m2b2.worldcast.tv:7443/dancetelevisionfour/dancetelevisionfour.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-diq8s5y',
    title: 'DanceTV Deep House District (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://m1b2.worldcast.tv/dancetelevisiontwo/dancetelevisiontwo.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-bamfe8y',
    title: 'DanceTV EDM Mainstage (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://mbit1.worldcast.tv/dancetelevisionseven/multibit.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-5vi1ksb',
    title: 'DanceTV House Floor (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://m2b2.worldcast.tv:7443/dancetelevisionfive/dancetelevisionfive.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ouskavk',
    title: 'DanceTV Minimal Tech (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://mbit1.worldcast.tv/dancetelevisionsix/multibit.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-8cm455h',
    title: 'DanceTV Techno Warehouse (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://m2b2.worldcast.tv:7443/dancetelevisionthree/dancetelevisionthree.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-jmb4tz2',
    title: 'DASDING 90.8 (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://swrdasdingvr-hls.akamaized.net/hls/live/2018681/dasdingvr/master.m3u8',
    cover: 'https://i.imgur.com/BmklHs8.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-avcz26r',
    title: 'DBM TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://dbmtv.vedge.infomaniak.com/livecast/dbmtv/playlist.m3u8',
    cover: 'https://i.imgur.com/ab6p2SW.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-k3s3ts4',
    title: 'DeepHouse District (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://eu-nl-012.worldcast.tv/dancetelevisiontwo/dancetelevisiontwo.m3u8',
    cover: 'https://i.imgur.com/IV2Qvc0.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-nq3gc8i',
    title: 'Dega TV (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://59d39900ebfb8.streamlock.net/saintlouisltv/saintlouisltv/playlist.m3u8',
    cover: 'https://i.ibb.co/ZTYvHyR/DEGA-TV-TELEPACK.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-l8cwf7d',
    title: 'Deluxe Dance (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://sdn-global-live-streaming-packager-cache.3qsdn.com/64733/64733_264_live.m3u8',
    cover: 'https://i.imgur.com/Qu7t15Y.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-3zftanh',
    title: 'Deluxe Lounge (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://jmp2.uk/stvp-CHAJ0500413A',
    cover: 'https://i.imgur.com/pgCA35z.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-qpp5dvg',
    title: 'Deluxe Music (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://sdn-global-live-streaming-packager-cache.3qsdn.com/13456/13456_264_live.m3u8',
    cover: 'https://i.imgur.com/HimuPPb.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-eadvufp',
    title: 'Deluxe Rap (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://sdn-global-live-streaming-packager-cache.3qsdn.com/65183/65183_264_live.m3u8',
    cover: 'https://i.imgur.com/s3h67hx.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-tmwoqkm',
    title: 'Dhamaal (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/1291/master.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Dhamaal_TV.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-9jsu4ux',
    title: 'Dhoom Music (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/1456/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_DHOOM_MUSIC/images/LOGO_HD/image.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-gso3ubz',
    title: 'Dismar Radio TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://rds3.desdeparaguay.net/dismartv/dismartv/playlist.m3u8',
    cover: 'https://i.imgur.com/KOuxdMD.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-rzni3s7',
    title: 'DM Sat (576p) [Geo-Blocked]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://viamotionhsi.netplus.ch/live/eds/dmsat/browser-dash/dmsat.mpd',
    cover: 'https://i.imgur.com/LdeA1Cn.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-vuwqj93',
    title: 'DMF (1080p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d-m-f.iptv-playoutcenter.de/dmf/dmf1/playlist.m3u8',
    cover: 'https://i.imgur.com/sJaBU7X.jpeg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-l08cjkt',
    title: 'Dream Türk (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live.duhnet.tv/S2/HLS_LIVE/dreamturknp/playlist.m3u8',
    cover: 'https://i.imgur.com/vJ8VaZi.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-cc46lov',
    title: 'DSTV (614p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'http://46.249.95.140:8081/hls/data.m3u8',
    cover: 'https://i.imgur.com/YMgzzkf.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-x142e3i',
    title: 'DTR Music 1 (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://kino-stream.online/hls/DTRMUSIC1.m3u8',
    cover: 'https://i.imgur.com/3picWDA.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-72qno8e',
    title: 'E40 (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://copacotf.desdeparaguay.net/e40tv/e40tv_py_alta/playlist.m3u8?admin=tvaccion',
    cover: 'https://i.imgur.com/0RypDUY.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-vi7k5g1',
    title: 'EBS Musika (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://rpn.bozztv.com/ebstv/ebsmusika/index.m3u8',
    cover: 'https://i.imgur.com/lSpplhD.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-5sg0vx2',
    title: 'EcuaMundo Radio TV (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://pacific.direcnode.com:3353/live/ecuamundotvlive.m3u8',
    cover: 'https://i.imgur.com/EMe5oWn.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-yifv5oq',
    title: 'El Radio 9090 FM (480p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://9090video.mobtada.com/hls/stream.m3u8',
    cover: 'https://www.9090.fm/images/logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-l5fgnsq',
    title: 'El Sol Network TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://tv.wracanal10.com:3025/live/elsoltvlive.m3u8',
    cover: 'https://i.imgur.com/TIH3zlP.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-bbitq7j',
    title: 'Ellinikos FM (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://rtmp.win:3603/live/ellinikosfmlive.m3u8',
    cover: 'https://i.ibb.co/y0ydCNB/unnamed-4.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-7j9timj',
    title: 'EnerGeek Radio (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://backend.energeek.cl/webtv/egradioweb/index.m3u8?token=ZZDemoIPTVGH',
    cover: 'https://cdn.energeek.cl/logos/EG-Radio-2025_pfp.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ehhj9w3',
    title: 'Epic Music (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://103.213.31.109:90/ShowBox/playlist.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SHOWBOX/images/LOGO_HD/image.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-icyj3sk',
    title: 'ETV Music (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cc-szivnms4rlah6.akamaized.net/WWBI/Amagi/ETV_Music_IN/playlist.m3u8',
    cover: 'https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN4900002RV_20250811T033455SQUARE.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-3pm8pnx',
    title: 'EU Music (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://iptv.prosto.tv/ch134/tracks-v2a1/1.m3u8?21yo=1&live=1&ip=104.28.156.59&id=742347&secret=vu2y5m72&ses=ca0cfbf5db9d8003&uid=vu2y5m72&cs_track=false&e=1782900912&st=j-Ja2visdxrjH_8haQZjNg',
    cover: 'https://i.imgur.com/fJdvyrG.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-l2az8v1',
    title: 'Euro Indie Music Chart TV (360p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://178.33.224.197:1935/euroindiemusic/euroindiemusic/playlist.m3u8',
    cover: 'https://i.imgur.com/lF0iofX.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ahj67cl',
    title: 'Europa Plus TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://31.148.48.15/Europa_Plus_HD/index.m3u8',
    cover: 'https://i.imgur.com/GLc4qrc.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-m8jou00',
    title: 'Exclusiv TV',
    author: 'Music Clips',
    type: 'video',
    url: 'https://ythls.armelin.one/channel/UCXxTnMoETkhNTmsqZc0JMhQ.m3u8',
    cover: 'https://i.imgur.com/xw1IWoO.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-l3ixo7y',
    title: 'Extra TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streaming.social3.hr/ExtraTVudzdhr5/uUankWqpXD/1.m3u8',
    cover: 'https://i.imgur.com/5edYPBO.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-oylhg6j',
    title: 'Fabulosa Estéreo 100.5 FM (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://www.streaming507.net:19360/videofabulosa/videofabulosa.m3u8',
    cover: 'https://i.imgur.com/YFmzkOp.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-7idpu6m',
    title: 'Fairuz (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx029/playlist.m3u8',
    cover: 'https://shahid.mbc.net/mediaObject/f809d51c-e83d-43c9-8236-78731c2216ad?type=png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-yyevk02',
    title: 'Falastini TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://rp.tactivemedia.com/palestiniantv_source/live/playlist.m3u8',
    cover: 'https://i.imgur.com/6B3Cims.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-axx3sms',
    title: 'Famatv (1080p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://tv2.fastcast4u.com:3310/live/famatvlive.m3u8',
    cover: 'https://i.ibb.co/tMmRp18/Fama-TV-cor-whitebg-hotizontal.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ts0b0wc',
    title: 'Fame95 FM (480p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://rjr-fame.akamaized.net/hls/live/2033820/RJR_FAME/master.m3u8',
    cover: 'https://i.imgur.com/n3PUxes.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-7y2q3f7',
    title: 'Farra Play (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'http://159.203.148.226/live/farra.m3u8',
    cover: 'https://i.imgur.com/bXWzstH.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-xw2s1if',
    title: 'Finest TV (288p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://media.finest.tv/hls/live.m3u8',
    cover: 'https://i.imgur.com/1uoP10V.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-v2dqsc4',
    title: 'Flex Studio Radio TV [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live20.bozztv.com/akamaissh101/ssh101/fsradiotv/playlist.m3u8',
    cover: 'https://i.imgur.com/tZjqtxd.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-skucvb6',
    title: 'FM ITALIA (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream2.xdevel.com/video0s975817-1183/stream/playlist.m3u8',
    cover: 'https://i.imgur.com/54CO2u9.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-z4hx4za',
    title: 'FM Mundo (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://video2.makrodigital.com/fmmundo/fmmundo/playlist.m3u8',
    cover: 'https://i.imgur.com/1nNnYQO.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-5sev2bw',
    title: 'Folk Klub (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://tv1.intv.mk:1935/live2/folkklub/index.m3u8',
    cover: 'https://i.imgur.com/Seq7Od7.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-qe0v5sk',
    title: 'Folk TV (1080p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream.nasatv.com.mk/folktv/hls/folktv_live.m3u8',
    cover: 'https://i.imgur.com/4b9aZ9P.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-1xuh0r7',
    title: 'FOLX Music (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdne.folxplay.tv/folx-trz/streams/ch-4/master.m3u8',
    cover: 'https://i.imgur.com/ze04puX.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-o9oiaze',
    title: 'Folx Slovenija (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdne.folxplay.tv/folx-trz/streams/ch-5/master.m3u8',
    cover: 'https://i.imgur.com/RK1IASU.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-z06z4pw',
    title: 'FomixTV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream.fomixmedia.nl/FomixTV/video.m3u8',
    cover: 'https://i.imgur.com/7SLYEMG.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-u7ve2pp',
    title: 'FON Music (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn-01.bonus-tv.ru/tntmusic/playlist.m3u8',
    cover: 'https://i.imgur.com/tXABQDE.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-v44fpez',
    title: 'Frecuencia Musical TV [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://s2.tvdatta.com:3307/hybrid/play.m3u8',
    cover: 'https://i.imgur.com/vPxvbVv.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-1minc5h',
    title: 'FTV (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream8.cinerama.uz/1018/playlist.m3u8',
    cover: 'https://i.imgur.com/7lpISyN.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-tcn9c1p',
    title: 'Fuego TV [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streamunoapp.com:3553/live/cromtvlive.m3u8',
    cover: 'https://i.imgur.com/T9vWjeB.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ok2e5ne',
    title: 'Fun Radio',
    author: 'Music Clips',
    type: 'video',
    url: 'https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/funradiofr.m3u8',
    cover: 'https://i.imgur.com/wgxuYsQ.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ayqcfiv',
    title: 'FUSION TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://edge20.vedge.infomaniak.com/livecast/ik:fusiontv/manifest.m3u8',
    cover: 'https://i.imgur.com/WMrYEgH.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-9l25wxt',
    title: 'Galaxy TV (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream.castr.com/6463248048d6cd3e143655b2/live_43351ad0f3b411ed81c78fcc31887c54/index.fmp4.m3u8',
    cover: 'https://i.imgur.com/P5OABe5.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-hqhksfv',
    title: 'GEM 24B',
    author: 'Music Clips',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gem24b/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/8LgdPst.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-9xngvxx',
    title: 'GEM Mifa',
    author: 'Music Clips',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemmifa/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/qlI7o7V.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-mxq9432',
    title: 'GEM Mifa Plus',
    author: 'Music Clips',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemmifaplus/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/8FIAqR5.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-js3we2t',
    title: 'Gex TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live20.bozztv.com/akamaissh101/ssh101/gextvaccess/playlist.m3u8',
    cover: 'https://gextv.com/LOGO-WHITE.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-o9qf2az',
    title: 'Gigant FM (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://video.uitzending.tv:19360/gigantfm/gigantfm.m3u8',
    cover: 'https://i.imgur.com/LwEHfjD.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ifn9zy4',
    title: 'GMTV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://livechannel.mdc.akamaized.net/stitch/livechannel/1341/master1400000.m3u8;session=live_stream_1341',
    cover: 'https://i.imgur.com/GJYb8c8.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-bqrd99q',
    title: 'GO TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://rds3.desdeparaguay.net/gotv/gotv/playlist.m3u8',
    cover: 'https://i.ibb.co/jkvYVyz/Captura.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-bnj7qv2',
    title: 'GugakTV 국악방송 (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://mgugaklive.nowcdn.co.kr/gugakvideo/gugakvideo.stream/playlist.m3u8',
    cover: 'https://i.imgur.com/Ey7Htm8.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ncuz1g1',
    title: 'H!T Music Channel (480p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://hitmusic.hu/hitmusic.m3u8',
    cover: 'https://i.imgur.com/sqC2hqV.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-59tuuc9',
    title: 'Hayat (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://158.180.39.89:5033/hayat.m3u8',
    cover: 'https://i.imgur.com/JugiLHM.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-akxns2x',
    title: 'Hayat Folk (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://158.180.39.89:5033/folk.m3u8',
    cover: 'https://i.imgur.com/LteJva4.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-4t89h2n',
    title: 'Hayat Music (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://158.180.39.89:5033/music.m3u8',
    cover: 'https://i.imgur.com/9p8q1yX.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-7w4fz35',
    title: 'Hayat Plus (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://158.180.39.89:5033/hayatplus.m3u8',
    cover: 'https://i.imgur.com/NThsVzJ.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-msczadh',
    title: 'Hayatovci (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://158.180.39.89:5033/hayatovci.m3u8',
    cover: 'https://i.imgur.com/eqd3kvW.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-tf6raxc',
    title: 'HEi Now (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://copacogen.desdeparaguay.net/heitv/heitv_py_alta/playlist.m3u8?admin=nacion',
    cover: 'https://i.imgur.com/oMHiGRN.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-d6tlp4i',
    title: 'High Vision (1080p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streamer1.connectto.com/HIGHVISION_WEB_1205/index.m3u8',
    cover: 'https://i.imgur.com/zhCgoru.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-4br4s7t',
    title: 'Hitradio O3 (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://studiocam-oe3.mdn.ors.at/orf/studiocam_oe3/q6a/manifest.mpd',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Hitradio_%C3%963.svg/960px-Hitradio_%C3%963.svg.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-xotw5vt',
    title: 'Hits 360 TV (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'http://cm.hostlagarto.com:8081/hits360tv/hits360HD.myStream/playlist.m3u8',
    cover: 'https://i.imgur.com/Cx5V233.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-pl0sqkd',
    title: 'Hitz TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streamer2.nexgen.bz/13-HITZ/index.m3u8',
    cover: 'https://i.imgur.com/SbZgsDh.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-79ndcc5',
    title: 'HMI PROMZ NEWS (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://video1.getstreamhosting.com:1936/8326/8326/playlist.m3u8',
    cover: 'https://i.imgur.com/gwPaw3v.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-3wtgczw',
    title: 'Hype Visual Radio (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streammix.alsolnet.com/hyperadio/live/playlist.m3u8',
    cover: 'https://cdn.onlineradiobox.com/img/fblogo/1/97371.v21.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-spoixts',
    title: 'Identité Télé Caraïbes (548p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://vdo2.pro-fhi.net:3769/stream/play.m3u8',
    cover: 'https://i.imgur.com/Atsf6Cd.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ynf90qx',
    title: 'Impact TV Dance (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://online.tvimpact.live/hls/dancetv.m3u8',
    cover: 'https://i.imgur.com/G5mNdpE.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-1y47xor',
    title: 'Impact TV Manele (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://online.tvimpact.live/hls/impact_tv.m3u8',
    cover: 'https://i.imgur.com/G5mNdpE.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-6g55apj',
    title: 'Infinita TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://s2.tvdatta.com:3753/hybrid/play.m3u8',
    cover: 'https://i.imgur.com/1nHxdkR.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-1b3pa7u',
    title: 'Insync (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://mumt04.tangotv.in/INSYNC/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Insync.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-nvwdg6m',
    title: 'INTV Australia (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://tv1.intv.mk:1935/live/intv/index.m3u8',
    cover: 'https://i.imgur.com/1nJl0Pv.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ddd8104',
    title: 'IQ Channel (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://rtmp.info/iqtv/envivo/playlist.m3u8',
    cover: 'https://i.imgur.com/hwuaomt.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-45l0184',
    title: 'Isai Aruvi (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://ptuf.ridsys.in/riptv/live/KALAIGNAR_ISAI_ARUVI/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ISAI_ARUVI/images/LOGO_HD/image.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-4jh98mj',
    title: 'Isango TV (480p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'http://80.241.215.175:1935/isangostar/isangostar/playlist.m3u8',
    cover: 'https://i.imgur.com/EfsHaMQ.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-tzpem94',
    title: 'Italianissimo (360p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://vcp.myplaytv.com/italianissimo/italianissimo/playlist.m3u8',
    cover: 'https://i.imgur.com/JCpbUZB.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-6h3r3tn',
    title: 'iTV Afrobeats Music',
    author: 'Music Clips',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/afrobeats/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-6xnw3jg',
    title: 'iTV Arabic Music',
    author: 'Music Clips',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/arabic/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-zafmlxb',
    title: 'iTV Indian Music',
    author: 'Music Clips',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/indian/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-w9bekdw',
    title: 'iTV Latin Music',
    author: 'Music Clips',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/latin/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-sxey8ap',
    title: 'ITV Persian Music (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/persian/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-gtqghsx',
    title: 'iTV Turkish Music',
    author: 'Music Clips',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/turkish/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-v069f8e',
    title: 'iTV Urban Music',
    author: 'Music Clips',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/love2/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-v8wismr',
    title: 'Ivoire Channel (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://video1.getstreamhosting.com:1936/8244/8244/playlist.m3u8',
    cover: 'https://i.imgur.com/gKbNqQv.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ojviiqy',
    title: 'J Music TV (480p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://maxotts.maxdigitaltv.com/x-media/C180/master.m3u8',
    cover: 'https://i.imgur.com/57dVOP5.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-l68yzbl',
    title: 'Jawhara TV (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'http://streaming.toutech.net:1935/live/mp4:jawharafm.sdp/playlist.m3u8',
    cover: 'https://i.imgur.com/mRSQ5bP.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-a9xsu6s',
    title: 'Jazz TV (1080p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream.nasatv.com.mk/jazztv/hls/jazztv_live.m3u8',
    cover: 'https://i.imgur.com/CbQlSFX.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-nln7ue0',
    title: 'Jeddah Radio (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live.kwikmotion.com/sbrksajeddahradiolive/srpksajeddahradio/chunks.m3u8',
    cover: 'https://aloula.faulio.com/storage/mediagallery/bd/f5/fullhd_527bf54a5adb56ac17f572ac2cd0801304db3baf.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-c5dkgxr',
    title: 'Joe FM (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://dpp-streamlive-plain.medialaancdn.be/joe_kijklive/plain/hls_hd.m3u8',
    cover: 'https://i.ibb.co/k9KJWzN/320px-Joe-radio-logo-2016-svg.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-e74hn47',
    title: 'JooMusic (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://livecdn.live247stream.com/joomusic/tv/playlist.m3u8',
    cover: 'https://i.imgur.com/KHuKQQL.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-jjq6l2f',
    title: 'Jordan Songs (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://playlist.fasttvcdn.com/pl/cc0blorawy1ibohhrupraa/Song/playlist.m3u8',
    cover: 'https://i.imgur.com/1DE7Gmw.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-usw4web',
    title: 'JRTV Järviradio (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streamer.radiotaajuus.fi/memfs/47f113bf-04ea-493b-a9d4-52945fd9db31.m3u8',
    cover: 'https://jarviradio.fi/jrtv2/wp-content/uploads/2022/01/jrtv1.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-xfupgct',
    title: 'Juice TV (1080p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://juicex.nz/hls/mystream.m3u8',
    cover: 'https://i.imgur.com/WaaaW0w.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-e2eqhwv',
    title: 'Kalika TV (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://server.applelive.in/kalikatv/kalikatv.m3u8',
    cover: 'https://i.imgur.com/XWXFoJA.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-3au0mkb',
    title: 'KandelaTV (480p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streamtv.intervenhosting.net:3718/live/kandelamedioslive.m3u8',
    cover: 'https://i.imgur.com/cCFxyIp.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-anxk1r7',
    title: 'Karibena [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live-player.egostreaming.pe/karibenatv_685a-pe-a5676-584412/index.fmp4.m3u8',
    cover: 'https://i.imgur.com/cgHjg1e.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-lt6co59',
    title: 'Kayhan TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://playout395.livestreamingcdn.com/live/Stream1/playlist.m3u8',
    cover: 'https://i.imgur.com/2MDjU7x.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-0q0tt06',
    title: 'Kayo Pops (544p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs13',
    cover: 'https://yt3.googleusercontent.com/ytc/AIdro_m1AFOxZHFBvf-eLgADxBaFKa54T5oDOvxEaQfz9VMCU_c=s512-c-k-c0x00ffffff-no-rj',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-mfqywsx',
    title: 'Kiss Kiss Napoli TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://58f12ffd2447a.streamlock.net/KKTVNapoli/livestream/playlist.m3u8',
    cover: 'https://i.imgur.com/RsGiBwE.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-p88u1gs',
    title: 'Kiss Kiss TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://58f12ffd2447a.streamlock.net/KKMulti/livestream/playlist.m3u8',
    cover: 'https://i.imgur.com/ja6c2YZ.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-2ous84i',
    title: 'Kiss TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://tv.broadcasting.ro/kisstv/a629c031-2170-4ee9-a36d-87a891aa3131.m3u8',
    cover: 'https://i.imgur.com/NKfVymH.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-hmm90fh',
    title: 'Klape i Tambure TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream.cmctv.hr:49998/kit/live.m3u8',
    cover: 'https://i.imgur.com/sKj3dgc.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-tfob3ub',
    title: 'KpopTV Play (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://giatv.bozztv.com/giatv/giatv-kpoptvplay/kpoptvplay/playlist.m3u8',
    cover: 'https://i.imgur.com/Tf0vweF.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-qbjmo6s',
    title: 'KRAL Pop TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://dogus-live.daioncdn.net/kralpoptv/playlist.m3u8',
    cover: 'https://i.imgur.com/ch365lh.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-m98761y',
    title: 'Kronehit (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://bitcdn-kronehit.bitmovin.com/v2/hls/playlist.m3u8',
    cover: 'https://i.imgur.com/dQJQv1X.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-jpoaomq',
    title: 'KurdMax Music (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://6476e46b58f91.streamlock.net/music/MUSIC2402/playlist.m3u8',
    cover: 'https://i.imgur.com/otnIdEu.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-tmn0ord',
    title: 'Kuriakos Music (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://195.23.211.179:1935/kmusic/smil:kmusic.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/Zl40NYi.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-vl8foci',
    title: 'La 98.1 TV (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://6019dcac4147f.streamlock.net:9443/la98/Invosa/playlist.m3u8',
    cover: 'https://i.imgur.com/7380kTN.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-vr7cf3b',
    title: 'La Cantina Memorias (480p) [Geo-blocked]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://video.xtrematv.com:3208/live/memoriaslacantinalive.m3u8',
    cover: 'https://imgs1.e-droid.net/srv/imgs/seccs/34751741_ico.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ynxcq1d',
    title: 'La Fabulosa Radio y TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8004/index.m3u8',
    cover: 'https://i.imgur.com/GjME5H0.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ynw01tl',
    title: 'La Hermandad Salsera (1080p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streamlov.alsolnet.com/hermandadsalsera/live/playlist.m3u8',
    cover: 'https://i.imgur.com/7Wlt6bc.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-zcvxt88',
    title: 'La Kalle (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://mdstrm.com/live-stream-playlist/58d191f07290fbb058025843.m3u8',
    cover: 'https://www.tdtparatodos.tv/sites/default/files/la_kalle.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-9xsa8t2',
    title: 'La Mega Mundial',
    author: 'Music Clips',
    type: 'video',
    url: 'https://server40.servistreaming.com:3477/stream/play.m3u8',
    cover: 'https://i.imgur.com/UdMsgkt.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-7gk6o3w',
    title: 'LA MIA TV (720p) [Geo-blocked]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://ss2.tvrdomi.com:1936/lamiatv/lamiatv/playlist.m3u8',
    cover: 'https://i.imgur.com/XIwTM1h.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-qnwhoek',
    title: 'La Morada Radio TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://movil.ejeserver.com/live/lamoradatv.m3u8',
    cover: 'https://i.imgur.com/E3wDEX5.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-4ghnb7a',
    title: 'La Perla Radio TV (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8068/index.m3u8',
    cover: 'https://i.imgur.com/8wDMgmB.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-96vru69',
    title: 'La Que Buena Atlanta',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streamyes.alsolnet.com/quebuenaatlanta/live/index.m3u8',
    cover: 'https://iili.io/JysD2a4.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-7axxfop',
    title: 'La Top 102.9 (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://59d39900ebfb8.streamlock.net/top102/top102/playlist.m3u8',
    cover: 'https://i.imgur.com/ZqwLPag.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-53q9fhy',
    title: 'La Top 107.7 (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://59d39900ebfb8.streamlock.net/top107/top107/playlist.m3u8',
    cover: 'https://i.imgur.com/vgHhh1W.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-e8qo6ea',
    title: 'La Urban TV (1080p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://urbanrevolution.es:8443/live/TV/playlist.m3u8',
    cover: 'https://i.imgur.com/hythjEn.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-bleiy1o',
    title: 'La Voz del Tropico (480p) [Geo-blocked]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://ss2.tvrdomi.com:1936/lavozdeltropico/lavozdeltropico/playlist.m3u8',
    cover: 'https://i.imgur.com/DKDFpHt.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-jj0ek5k',
    title: 'La-X (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream.eleden.com/livelax/ngrp:livelax_all/playlist.m3u8',
    cover: 'https://i.imgur.com/i2GnQTq.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-vtzgd4k',
    title: 'Latin Zone TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn.streamingcpanel.com:3784/live/latinzonetvlive.m3u8',
    cover: 'https://i.imgur.com/duEDsne.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-afue7je',
    title: 'Lausitzwelle (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://h056.video-stream-hosting.de/easycast11-live/_definst_/mp4:livestreamhd2/playlist.m3u8?ref=',
    cover: 'https://i.imgur.com/4kYF4bK.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-fmhj5q5',
    title: 'LaXitosa Panamá (360p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stmvideo2.livecastv.com/lax953/lax953/playlist.m3u8',
    cover: 'https://i.imgur.com/Pt4F9Xz.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-5a5xrpz',
    title: 'Lingkar TV',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lingkartv.my.id/hls/lingkartv.m3u8',
    cover: 'https://lingkartv.com/assets/img/logo-square.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-rxoyykr',
    title: 'LiraTV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cloud2.streaminglivehd.com:1936/liratv/liratv/playlist.m3u8',
    cover: 'https://i.imgur.com/hBswXYZ.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-jyokszv',
    title: 'Littoral FM (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live.creacast.com/littoralfm-ch1/stream/playlist.m3u8',
    cover: 'https://i.imgur.com/DCZKAQ1.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-2warxk1',
    title: 'Live99FM (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://media.streambrothers.com:1936/8014/8014/playlist.m3u8',
    cover: 'https://i.imgur.com/U43UrQT.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-osnunug',
    title: 'LiveXLive (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://livestream.liveone.com/lc1/p1.m3u8',
    cover: 'https://i.imgur.com/KFzEoed.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-74ra0zt',
    title: 'Lobo TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://5ca3e84a76d30.streamlock.net/tvlobo/videotvlobo/playlist.m3u8',
    cover: 'https://i.imgur.com/3fA50RJ.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-b2ihh7m',
    title: 'Look Thoong TV (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://livefta.malimarcdn.com/ftaedge00/lookthoongtv.sdp/playlist.m3u8',
    cover: 'https://i.imgur.com/eT7iE34.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-0zllxmh',
    title: 'Love TV (1080p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream.nasatv.com.mk/lovetv/hls/lovetv_live.m3u8',
    cover: 'https://i.imgur.com/B8iaejQ.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-shshqba',
    title: 'LRT Klasika (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream-live.lrt.lt/klasika/master.m3u8',
    cover: 'https://i.imgur.com/Fa8Vhu0.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-2iuhys1',
    title: 'LRT Opus (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream-live.lrt.lt/opus/master.m3u8',
    cover: 'https://i.imgur.com/oLuZTMH.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-50cgesy',
    title: 'Luna Estéreo 106.4 FM (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://servervideo.intermediacolombia.com:19360/kychbbfhdz/kychbbfhdz.m3u8',
    cover: 'https://i.imgur.com/cESeD6R.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-1p4nsxc',
    title: 'M2 (540p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live.m2.tv/hls3/stream.m3u8',
    cover: 'https://i.imgur.com/AfcBWCg.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-zoq12w9',
    title: 'm2o TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S62628868/uhdWBlkC1AoO/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Radio_m2o_-_Logo_2019.svg/500px-Radio_m2o_-_Logo_2019.svg.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-g4mif39',
    title: 'M6 Music',
    author: 'Music Clips',
    type: 'video',
    url: 'https://test.946985.filegear-sg.me/proxy/803c517b325bfafc',
    cover: 'https://upload.wikimedia.org/wikipedia/en/c/c9/M6_Music_%282012%29.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-hzvwtl8',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",M+ (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/m-plus/master.m3u8?ads.vf=99_BajuDhjC',
    cover: 'https://i.imgur.com/Ho8N310.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-zf9mhjf',
    title: 'M-1 (480p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://m-1.data.lt/m-1/smil:m-1.smil/playlist.m3u8',
    cover: 'https://i.ibb.co/gb4NmNHT/M1-2025.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-r3le3v7',
    title: 'Madras FM TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://edge12.vedge.infomaniak.com/livecast/ik:madrasfmtv/manifest.m3u8',
    cover: 'https://i.imgur.com/spGg1CZ.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-fp3i325',
    title: 'Magenta Musik 360 (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streaming.magentamusik.de/csm/573870/magentamusik1/index.m3u8',
    cover: 'https://i.imgur.com/R74gG7U.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-9apr8xy',
    title: 'Magic TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://bss1.neterra.tv/magictv/magictv.m3u8',
    cover: 'https://i.imgur.com/n7bcrrp.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-4ek67mk',
    title: 'Magic TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://tv.broadcasting.ro/magictv/925f90db-5c88-4190-a53d-5163cdffe6f4.m3u8',
    cover: 'https://i.imgur.com/9izrr4d.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-xrj6iif',
    title: 'Maimon TV Canal 3 (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://tele-stream.telecasa.net/live/st3/maimontv-hd/index.m3u8',
    cover: 'https://i.imgur.com/twldaaC.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-i4uidfg',
    title: 'Majid Al Mohandis (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx019/playlist.m3u8',
    cover: 'https://i.discogs.com/Fk9Bm8gTYJYeVXIJKX-EOGmYQ90sVQPtkIW5ZK4fydo/rs:fit/g:sm/q:90/h:372/w:412/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9MLTE2OTY4/MzMtMTU2ODk0NjI5/MC01Njk2LmpwZWc.jpeg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-sd6s8th',
    title: 'Makao TV (360p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live.obslivestream.com/makaomux/tracks-v2a1/playlist.m3u8',
    cover: 'https://i.imgur.com/asD5y7i.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-uzyqcqp',
    title: 'Marina TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://ffs.gulfsat.com/Marina-TV-HD/index.m3u8',
    cover: 'https://i.imgur.com/F2PzEaw.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-j5ru6mv',
    title: 'Más FM 95.9 (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://vivo.solumedia.com:19360/masfm/masfm.m3u8',
    cover: 'https://i.imgur.com/TJ4gWQM.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-7umxter',
    title: 'MasMusica FM (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://movil.ejeserver.com/live/masmusica.m3u8',
    cover: 'https://i.imgur.com/tCg7owd.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ij182ib',
    title: 'Mastiii (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://mumt02.tangotv.in/MASTIII/index.m3u8',
    cover: 'https://i.imgur.com/lxgXHx4.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-2wmwh3w',
    title: 'Max Music (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live.maxtn.in/maxmusic/maxmusic/index.m3u8',
    cover: 'https://livetv.ashokadigital.net/upload/logo/1732168750_WhatsApp%20Image%202024-11-21%20at%2011.05.55%20AM%20(1).jpeg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-oamtx9u',
    title: 'Max TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streamer2.nexgen.bz/14-MAX/index.m3u8',
    cover: 'https://i.imgur.com/TF4snV6.jpeg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-phv02gj',
    title: 'MBC America (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn-us-east-prod-ingest-infra-dacast-com.akamaized.net/624ff8f9-db18-da92-4d42-896fa2ff3eb3/source/index.m3u8',
    cover: 'https://i.imgur.com/RRc23ra.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-jfs5bw8',
    title: 'MBC FM (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://dbbv9umqcd7cs.cloudfront.net/out/v1/db15b75c3cc0400c91961468d6a232ac/index.m3u8',
    cover: 'https://i.imgur.com/lF8UxvR.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-znrbuxu',
    title: 'MBC Mood (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-mood/78367bf48ccdba501d0d014a10c21031/index.m3u8',
    cover: 'https://shahid.mbc.net/mediaObject/c2b6a882-458b-446e-b0fe-f97f7992149a?height=auto&width=144&croppingPoint=&version=1&type=png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-9ncfyqn',
    title: 'MBC Mood (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://shd-gcp-live.edgenextcdn.net/live/bitmovin-wanasah/13e82ea6232fa647c43b26e8a41f173d/index.m3u8',
    cover: 'https://shahid.mbc.net/mediaObject/c2b6a882-458b-446e-b0fe-f97f7992149a?height=auto&width=144&croppingPoint=&version=1&type=png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ek4upso',
    title: 'MCN6 Music Channel (1080p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d18fcxaqfnwjhj.cloudfront.net/CDN_Ingest/MCN6_MUSIC.smil/Playlist.m3u8',
    cover: 'https://i.imgur.com/j6IiysJ.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-2ii64sk',
    title: 'Med Muzik (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://54.36.110.140/live3/live3.m3u8',
    cover: 'https://i.imgur.com/gtUFmCD.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-aip579d',
    title: 'MegaBox (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://hdbox.chunklistv.com/live?stream=megabox',
    cover: 'https://i.imgur.com/JqaW7Ei.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-3wb6jo8',
    title: 'Melody (288p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/radiokaraoke.m3u8',
    cover: 'https://i.imgur.com/9GVyQ6x.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-mlzof7s',
    title: 'Melody FM Jordan (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn3.wowza.com/1/OVRrOWxXUEswS2Yv/eGVxSWZy/hls/live/playlist.m3u8',
    cover: 'https://i.imgur.com/J8omcNz.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-56srrvm',
    title: 'Memorias del Corazon (480p) [Geo-blocked]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://video.xtrematv.com:3401/live/grupomemoriaslive.m3u8',
    cover: 'https://i.imgur.com/sVLDzzM.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-7te4gjl',
    title: 'Memorias FM Pop Latino (480p) [Geo-blocked]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://video.xtrematv.com:3891/live/memoriaspoplatinolive.m3u8',
    cover: 'https://imgs1.e-droid.net/srv/imgs/seccs/34751581_ico.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-wdromnh',
    title: 'Memorias TV Classic (480p) [Geo-blocked]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://video.xtrematv.com:3576/live/memoriasclassiclive.m3u8',
    cover: 'https://i.imgur.com/tLTQLnv.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-c3tir8j',
    title: 'Memorias TV Tropical (480p) [Geo-blocked]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://video.xtrematv.com:3361/live/memoriastropicallive.m3u8',
    cover: 'https://i.imgur.com/Y9GFDcV.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-didaavl',
    title: 'Metaleitor TV',
    author: 'Music Clips',
    type: 'video',
    url: 'https://vs20.live.opencaster.com/metaleitortv_423d3342/index.m3u8',
    cover: 'https://new.opencaster.com/uploads/logos/logo_14_1752798826.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-r995pyi',
    title: 'Metropoli Medios TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8214/index.m3u8',
    cover: 'https://i.imgur.com/yID5T2S.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-3onluq5',
    title: 'Mezzo (1080p) [Geo-Blocked]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://viamotionhsi.netplus.ch/live/eds/mezzo/browser-HLS8/mezzo.m3u8',
    cover: 'https://i.imgur.com/auNdGeW.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-vx1lu36',
    title: 'Mezzo Live',
    author: 'Music Clips',
    type: 'video',
    url: 'https://test.946985.filegear-sg.me/proxy/749755700e4ed9c6',
    cover: 'https://i.imgur.com/H9ytKPN.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-6lri43d',
    title: 'mfm (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://hms.pfs.gdn/hms/v1/broadcast/hlmvmp2hfriode891/playlist.m3u8',
    cover: 'https://www.mtv.com.lb/images/header/mfm-logo.svg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-1tp8dyd',
    title: 'Mh 1 Music (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://mumt04.tangotv.in/MHONE/index.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143539_ld_h15_aa.png?lock=720x540',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ddq692g',
    title: 'Mi Gente TV (720p) [Geo-blocked]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://byecableiptvnew3.ddns.net/ENVIVOMIGENTE/video.m3u8',
    cover: 'https://i.imgur.com/CSbmQlu.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-aj966qk',
    title: 'Miel TV (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://7.innovatestream.pe:19360/mieltv/mieltv.m3u8',
    cover: 'https://i.imgur.com/dPSFrCs.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-u3n1xvc',
    title: 'MNM (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live-radio-cf-vrt.akamaized.net/groupa/live/bac277a1-306d-44a0-8e2e-e5b9c07fa270/live.isml/.m3u8',
    cover: 'https://i.imgur.com/L4cD18H.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-5guwp60',
    title: 'Mohammed Abdo (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d2ow8h651gs7dx.cloudfront.net/out/v1/371fb663da604e659a2fb99bf89d92d4/index.m3u8',
    cover: 'https://assets.mbcmood.com/channels/1720184012Mohammed%20Abdo%20banner.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-0ihbsyy',
    title: 'Molahits TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://ventdelnord.tv:8080/mola/directe.m3u8',
    cover: 'https://i.imgur.com/FYcLtqT.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-80ofe3n',
    title: 'Mooz Dance',
    author: 'Music Clips',
    type: 'video',
    url: 'https://rtmp.digitalbroadcast.ro/moozdance/moozdance.m3u8',
    cover: 'https://i.imgur.com/aX70RD2.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-37e7wsf',
    title: 'Mooz Hits',
    author: 'Music Clips',
    type: 'video',
    url: 'https://rtmp.digitalbroadcast.ro/moozhits/moozhits.m3u8',
    cover: 'https://i.imgur.com/GwATd3Y.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-cci0tzj',
    title: 'Mooz Ro!',
    author: 'Music Clips',
    type: 'video',
    url: 'https://rtmp.digitalbroadcast.ro/moozro/moozro.m3u8',
    cover: 'https://i.imgur.com/Ft24x5T.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-4qdcpm3',
    title: 'Mosaique FM (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://webcam.mosaiquefm.net/mosatv/_definst_/studio/playlist.m3u8?DVR',
    cover: 'https://i.imgur.com/GDUykah.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-hv6id2h',
    title: 'Mouv\' TV (288p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/mouv.m3u8',
    cover: 'https://i.imgur.com/64nzKEu.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-pznrnsw',
    title: 'Music Box Polska [Geo-blocked]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://vs2133.vcdn.biz/0f0f85e2ea3607b5c396ef68d55c3168_megogo/live/hls/b/4000/u_sid/0/o/156751011/rsid/062147ff-ed0c-4d9c-a131-2bf42026e640/u_uid/0/u_vod/1/u_device/embed_all/u_devicekey/_embed_web/lip/57.128.235.172*asn/type.live/playlist.m3u8',
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyN14NgigtUnImvVp9DqgbKY5c9Nsl-EqLkPX7PzYcl924yK77GycmSj2E&s=10',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-gqr5efp',
    title: 'Music India (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn-2.pishow.tv/live/226/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143563_ld_h15_aa.png?lock=720x540',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-y27lmwb',
    title: 'Music Information Channel (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://mic.siar.us/mic/live/mic.m3u8',
    cover: 'https://i.imgur.com/OUPGCWG.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-14873r1',
    title: 'Music Japan TV (544p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs06',
    cover: 'https://i.imgur.com/DkF8YZq.jpeg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-zbb7iuh',
    title: 'Music TV Granada (1080p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8032/index.m3u8',
    cover: 'https://i.ibb.co/Swd9NP7n/music-tv-granada.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-1h6y59j',
    title: 'MusicTop (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream-gtlc.telecentro.net.ar/hls/musictophls/0/playlist.m3u8',
    cover: 'https://cdn.mitvstatic.com/channels/ar_musictop_m.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-tuw0tql',
    title: 'Muzangala TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://5cf4a2c2512a2.streamlock.net/tvmuzangala/tvmuzangala/playlist.m3u8',
    cover: 'https://i.imgur.com/fBeaJoS.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-qlmdnsh',
    title: 'Muzvar (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn15.live-tv.cloud/ua_infinitas_tv/muzvar-abr/playlist.m3u8',
    cover: 'https://i.imgur.com/Klu5k9U.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-nnw3duw',
    title: 'MuzzOne',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streams.adapto.kz/hls/live/muzzone/main_stream.m3u8',
    cover: 'https://i.imgur.com/nHVABXh.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-wrz3std',
    title: 'My Gospel TV',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streamtv.cmediahosthosting.net:3046/live/mygospeltvlive.m3u8',
    cover: 'https://mygospeltv.fr/wp-content/uploads/2022/05/MY-GODPEL-TV-e1652783900988.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-0zhdpym',
    title: 'Nande Portetepe TV',
    author: 'Music Clips',
    type: 'video',
    url: 'https://video.hostingcaaguazu.com:19360/nandeportetepe/nandeportetepe.m3u8',
    cover: 'https://i.imgur.com/3taT6JK.jpeg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-j2lahqg',
    title: 'Navahang TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://hls.navahang.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/YteKXJy.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-6958mx6',
    title: 'NEW KPOP (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://ads.its-newid.net/api/manifest.m3u8?tp=samsung_tvplus&channel_id=newid_086&ads.service_id=GB17000088V',
    cover: 'https://i.imgur.com/B7ILXMc.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-4502xyp',
    title: 'Next HD (480p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live.enhdtv.com:19360/nexthd/nexthd.m3u8',
    cover: 'https://i.imgur.com/c2rF3SS.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-wqu6404',
    title: 'Nidae AlIslam Radio (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live.kwikmotion.com/sbrksanedaradiolive/srpksanedaradio/playlist.m3u8',
    cover: 'https://aloula.faulio.com/storage/mediagallery/0f/c5/fullhd_5da380cdfc304fd7d4672a83aeb6c62bc1d3d3e8.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-yjuqkr5',
    title: 'NogoumFMTV (672p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://nogoumtv.nrpstream.com/hls/stream.m3u8',
    cover: 'https://i.imgur.com/krp3kgv.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-08e7ajo',
    title: 'Noroc TV (576p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live.noroc.tv/noroc/noroc.m3u8',
    cover: 'https://i.imgur.com/XvYqpqG.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-4bw4972',
    title: 'NOW 70s (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lightning-now70s-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-lightning-now70s-rakuten/CDN/playlist.m3u8',
    cover: 'https://i.imgur.com/qiCCX5X.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-80waiom',
    title: 'Now 70s (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lightningnow70-samsungau.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/qiCCX5X.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-3ebf1lk',
    title: 'NOW 80s (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lightning-now80s-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-lightning-now80s-rakuten/CDN/playlist.m3u8',
    cover: 'https://i.imgur.com/YyPnMeB.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-djjlib5',
    title: 'Now 80s (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lightningnow80-samsungau.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/YyPnMeB.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-cf89r4m',
    title: 'NOW 90s00s (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://amg01076-amg01076c19-rakuten-gb-8653.playouts.now.amagi.tv/playlist/amg01076-lightning-now90s00s-rakutengb/playlist.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-jgrgnx1',
    title: 'NOW Rock (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lightning-now90s-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-lightning-now90s-rakuten/CDN/playlist.m3u8',
    cover: 'https://i.imgur.com/GuM4GnX.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-jzk62nd',
    title: 'NOW Rock (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lightning-now90s-samsungnz.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/GuM4GnX.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-1x28rah',
    title: 'Now TV 102.3FM Edmonton (CKNO-FM) (616p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://videostream.jpbgdigital.com/NOWTV.m3u8',
    cover: 'https://i.imgur.com/sF2g7KE.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-llbhg6q',
    title: 'NPC Rádio e TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stmv5.samcast.com.br/nasciparacantartv/nasciparacantartv/playlist.m3u8',
    cover: 'https://i.imgur.com/mw1lYWE.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-bvmk0va',
    title: 'NRG 91 (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'http://tv.nrg91.gr:1935/onweb/live/master.m3u8',
    cover: 'https://i.imgur.com/1Zl1OJ5.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-urmh2ay',
    title: 'NRJ Hits',
    author: 'Music Clips',
    type: 'video',
    url: 'https://test.946985.filegear-sg.me/proxy/a23981548880f405',
    cover: 'https://i.imgur.com/2xDVwOh.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-gbyk8et',
    title: 'Nueva Vida TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream.nuevavidafm.net:3937/live/nuevavidalive.m3u8',
    cover: 'https://i.ibb.co/3mbZWyN/nav-Bar-title-Image-iphone6plus.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-z66yp3o',
    title: 'Number 1 Ask (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e18f9cea15_1/playlist.m3u8',
    cover: 'https://i.imgur.com/slwbux7.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-gkxwd2t',
    title: 'Number 1 Damar (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e198784bdc_1/playlist.m3u8',
    cover: 'https://i.imgur.com/rYtbAGZ.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-axapg1p',
    title: 'Number 1 Dance (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e2aa8acf44_1/playlist.m3u8',
    cover: 'https://i.imgur.com/ZM4PSyq.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-gtjbsjf',
    title: 'Number 1 Türk (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://mn-nl.mncdn.com/blutv_nr1turk2/live.m3u8',
    cover: 'https://i.imgur.com/18zjk3q.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-h3nw6p3',
    title: 'Number 1 TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/broadcast_5c9e17cd59e8b.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/02cDIBi.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-b93ite5',
    title: 'Nuta TV',
    author: 'Music Clips',
    type: 'video',
    url: 'http://78.130.250.2:8023/play/a03r/index.m3u8',
    cover: 'https://i.imgur.com/JHFUxDu.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-1hdqb9r',
    title: 'Óčko (540p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://ocko-live-dash.ssl.cdn.cra.cz/cra_live2/ocko.stream.1.smil/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/%C3%93%C4%8Dko_logo_2012.png/960px-%C3%93%C4%8Dko_logo_2012.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-e691jor',
    title: 'Óčko Expres (540p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://ocko-live.ssl.cdn.cra.cz/channels/ocko_expres/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/%C3%93%C4%8Dko_Expres_logo.png/960px-%C3%93%C4%8Dko_Expres_logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-hbwbl3e',
    title: 'Óčko Gold (540p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://ocko-live.ssl.cdn.cra.cz/channels/ocko_gold/playlist.m3u8',
    cover: 'https://i.imgur.com/nrWNyLc.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-j7u0lae',
    title: 'ON FM (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://5ce9406b73c33.streamlock.net/ONFM/livestream/playlist.m3u8',
    cover: 'https://onfmwordpressfiles.ams3.digitaloceanspaces.com/wp-content/uploads/2023/03/17130121/logo-on-fm.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-tzod835',
    title: 'Onda 15 TV (224p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8034/index.m3u8',
    cover: 'https://i.imgur.com/mUrZz9O.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-832sjz7',
    title: 'Onda Valencia (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8116/index.m3u8',
    cover: 'https://i.imgur.com/6HxLUQd.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-azeub8d',
    title: 'Ondambiental TV (360p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stmv4.voxtvhd.com.br/ondastereo/ondastereo/playlist.m3u8',
    cover: 'https://i.imgur.com/u5804Au.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-3bk7fwp',
    title: 'ONE1 Music (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdne.folxplay.tv/folx-trz/streams/ch-3/master.m3u8',
    cover: 'https://i.imgur.com/dLgoKJ0.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-fjk7rpw',
    title: 'One Adria (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdne.folxplay.tv/folx-trz/streams/ch-6/master.m3u8',
    cover: 'https://i.imgur.com/NYkMamU.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-15tjf2s',
    title: 'One TV (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://hms.pfs.gdn/v1/broadcast/one/playlist.m3u8',
    cover: 'https://i.imgur.com/O4DuR9G.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-if78ss9',
    title: 'OneFM (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://hms.pfs.gdn/v1/broadcast/onefm/playlist.m3u8',
    cover: 'https://i.ibb.co/Vp2G9wTz/onefmlb.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-mrfs129',
    title: 'Online TV Nusantara (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://5bf7b725107e5.streamlock.net/onlinetvnusantara/onlinetvnusantara/playlist.m3u8',
    cover: 'https://i.imgur.com/E9CCIpP.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-9321jm7',
    title: 'Orange Bangla TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn-4.pishow.tv/live/1499/master.m3u8',
    cover: 'https://i.imgur.com/wjSaHj5.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-w2gnbbs',
    title: 'Orbita Chile TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://orbitachiletv.org/hls/0/stream.m3u8',
    cover: 'https://i.imgur.com/gbNh79Z.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-w5w3rud',
    title: 'Oxigeno TV (360p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://vcp.myplaytv.com/oxigenotv/oxigenotv/playlist.m3u8',
    cover: 'https://i.imgur.com/n3PweBQ.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-n1a7wyi',
    title: 'P2M TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://vdo2.pro-fhi.net:3207/stream/play.m3u8',
    cover: 'https://i.imgur.com/TrecSeG.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-accfogr',
    title: 'Pamir TV (1080p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'http://live.stream.cdn.pamirtv.com/ptv/d0dbe915091d400bd8ee7f27f0791303.sdp/index.m3u8',
    cover: 'https://i.imgur.com/sCBbBOj.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-mbauas3',
    title: 'Panik TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://livetv.streams.ovh:1936/paniktv/paniktv/playlist.m3u8',
    cover: 'https://i.imgur.com/13C3CPr.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-gjagha9',
    title: 'Panorama FM (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d6izdil55uftn.cloudfront.net/out/v1/0a06d1d6377c47edbd48721ed724bd08/index.m3u8',
    cover: 'https://i.imgur.com/JkDD3bK.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-afbu5kf',
    title: 'Parranda Vallenata (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://backupmaxmedia.hvmultiplay.com/hls/stream3/parrandavallenata.m3u8',
    cover: 'https://i.imgur.com/BzBX7Qx.jpeg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-y6s8fk6',
    title: 'Peppers TV (751p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn-2.pishow.tv/live/1383/master.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Peppers_TV.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-wy3p841',
    title: 'Pequeradio (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://canadaremar2.todostreaming.es/live/peque-pequetv.m3u8',
    cover: 'https://i.imgur.com/BNqZwxS.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ss04x8l',
    title: 'Persiana Folk',
    author: 'Music Clips',
    type: 'video',
    url: 'https://sonhls.persiana.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-trgiruk',
    title: 'Persiana Music',
    author: 'Music Clips',
    type: 'video',
    url: 'https://musichls.persiana.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-9tdalmp',
    title: 'Persiana Nostalgia',
    author: 'Music Clips',
    type: 'video',
    url: 'https://noshls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/SWO9CKA.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-v81jaux',
    title: 'Persiana Vibe',
    author: 'Music Clips',
    type: 'video',
    url: 'https://raphls.persiana.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-31aa21t',
    title: 'PJ Digital Radio TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://vdo1.panelstreaming.live:3363/hybrid/play.m3u8',
    cover: 'https://i.imgur.com/m92oDuB.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-daxssma',
    title: 'Planet 100.9 FM (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streamlov.alsolnet.com/planet1009fm/live/playlist.m3u8',
    cover: 'https://i.imgur.com/8ZIBs8l.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-9d47dpe',
    title: 'Play TV (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'http://connectiktv.ddns.net:5000/playtv/@playtv/playlist.m3u8',
    cover: 'https://i.imgur.com/1dmBqpf.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-onvusbk',
    title: 'Play TV (480p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'http://web.onair-radio.eu:1935/Alpha-Host/Alpha-Host/playlist.m3u8',
    cover: 'https://i.imgur.com/JWFOYuD.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-rren3cd',
    title: 'PMC',
    author: 'Music Clips',
    type: 'video',
    url: 'https://pmchls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/AbrHI7K.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-qne9jmh',
    title: 'PMC Royale (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://pmcrohls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-dt04pdz',
    title: 'POP World TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://janus.xpbroadcasting.com:8443/hls/popworld.m3u8',
    cover: 'https://i.imgur.com/LQB6G3s.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-mjoykpg',
    title: 'Power 101.7 FM (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://vcp11.myplaytv.com/powerfm/powerfm/playlist.m3u8',
    cover: 'https://i.imgur.com/bkQrXjB.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-eolz7uc',
    title: 'Power Dance (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://livetv.powerapp.com.tr/dance/dance.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/QpPteBO.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-bxl4v1f',
    title: 'Power Hit Radio (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdnlb.tvplayhome.lt/live/eds/PWR_LTU_Live/GO3_LIVE_HLS/PWR_LTU_Live.m3u8?cdntoken=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDczNDU2NjEsInBhdGgiOiIvbGl2ZS9lZHMvUFdSX0xUVV9MaXZlL0dPM19MSVZFX0hMUy8iLCJzaXAiOiI3Mi4xMS4xNTcuMTEyIiwiZGV2aWNlX2lkIjoiMCIsInNlc3Npb25faWQiOiIwIiwiY2xpZW50X2lkIjoiMCJ9.oHc5wUgwNPQ-4P7wJy_WvWQh0muFg9Lprhc4STS3cUHi0FI4tAKGdZOOeE-dOhVBHKFUYETmoXSMrrVHOeLC3g',
    cover: 'https://i.imgur.com/GOlQbfC.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-7kn3xos',
    title: 'Power Love (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://livetv.powerapp.com.tr/plove/love.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/0RzUswR.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-tui8z8m',
    title: 'Power Türk Akustik (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://livetv.powerapp.com.tr/pturkakustik/akustik.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/driabBO.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-bl5jb0a',
    title: 'Power Türk Slow (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://livetv.powerapp.com.tr/pturkslow/slow.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/tQSoQXW.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-s9yo8ww',
    title: 'Power Türk Taptaze (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://livetv.powerapp.com.tr/pturktaptaze/taptaze.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/a5nW3HU.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-dleokt9',
    title: 'Prambors',
    author: 'Music Clips',
    type: 'video',
    url: 'https://indihuy.streamized.net/atm/DASH/pramborstv/manifest.mpd',
    cover: 'https://images.maxstream.tv/sites/default/files/entry/0_e59etfmm/landscape_carousel_xxhdpi.webp',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-y5oe4ja',
    title: 'Prattel TV',
    author: 'Music Clips',
    type: 'video',
    url: 'https://vs20.live.opencaster.com/prattelpe_a2b8d350/index.m3u8',
    cover: 'https://new.opencaster.com/uploads/logos/logo_244_1761928734.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-k8pbzn6',
    title: 'PRIDEtv LATAM (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://backend.energeek.cl/webtv/pridetvweb/index.m3u8?token=ZZDemoIPTVGH',
    cover: 'https://neotv.cl/img/pridetv-512.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-5doayzg',
    title: 'PTC Chakde (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/449/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PTC_CHAKDE/images/LOGO_HD/image.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-koza7ct',
    title: 'PTC Music (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d2lk5u59tns74c.cloudfront.net/out/v1/f913cf893c594f73b114216e74a2efbc/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PTC_MUSIC/images/LOGO_HD/image.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-y76h3sr',
    title: 'Public Music (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn-3.pishow.tv/live/441/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PUBLIC_MUSIC/images/LOGO_HD/image.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-m819mry',
    title: 'Punjabi Hits (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream.ottlive.co.in/punjabihits/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PUNJABI_HITS/images/LOGO_HD/image.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-mk154ou',
    title: 'Q-Music (Belgium) (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live-video.dpgmedia.net/e087512ad0c32643/out/v1/82d59bbe343b4d0896f829c59da82dc0/index.m3u8',
    cover: 'https://i.imgur.com/VX5e9Xt.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-tl267oj',
    title: 'Qello Concerts by Stingray (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883052',
    cover: 'https://i.imgur.com/IRyFTWq.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-vfxvxcj',
    title: 'Qello Concerts by Stingray (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/qello-qello001-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/IRyFTWq.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-r3i1h7l',
    title: 'Qmusic (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream.qmusic.nl/qmusic/videohls.m3u8',
    cover: 'https://i.imgur.com/fMTuqDu.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-pdlxzds',
    title: 'Qwest TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://qwestjazz-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-qwestjazz-rakuten/CDN/master.m3u8',
    cover: 'https://i.imgur.com/DjgNNHK.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-k9zq89j',
    title: 'Qwest TV Jazz & Beyond (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://samsungau-qwestjazz-samsungtv-zw2jc.amagi.tv/playlist/samsungau-qwestjazz-samsungtv/playlist.m3u8',
    cover: 'https://i.imgur.com/89yWH5L.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-32l5orm',
    title: 'Rabeh Saqer (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx004/playlist.m3u8',
    cover: 'https://shahid.mbc.net/mediaObject/b98b0635-c8ed-4a7c-9efa-5856e278f54b?type=png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-njaebzx',
    title: 'Radio 21 TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live.creacast.com/radio21/smil:radio21.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/u8OhwI1.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ofr4duu',
    title: 'Radio Alegria 98.5 FM (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://video.compuwebecuador.com:3880/stream/play.m3u8',
    cover: 'https://i.imgur.com/N00aS3x.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-k84bm8t',
    title: 'Radio Bonita 106.7 (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8154/index.m3u8',
    cover: 'https://i.imgur.com/IvZtqyz.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-8z3m3wb',
    title: 'Radio Capital TiVu (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S35394734/Z6U2wGoDYANk/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/it/3/38/Radio_Capital_logo_%282020%29.svg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-v1toua4',
    title: 'Radio Carnaval TV (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8116/index.m3u8',
    cover: 'https://i.imgur.com/cdpbkSo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-14j68bs',
    title: 'Radio Ciudad 98.9 FM TV',
    author: 'Music Clips',
    type: 'video',
    url: 'https://video.wilohosting.com:19360/radiociudadtv/radiociudadtv.m3u8',
    cover: 'https://i.imgur.com/LaSLZwR.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-r74wujm',
    title: 'Radio Conexion Web TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://tuvideoonline.com.ar:3391/live/radioconexionlive.m3u8',
    cover: 'https://i.imgur.com/pXS38zo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-nhcmcyp',
    title: 'Radio Contact (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://contact-live-hls.akamaized.net/hls/live/2038650/CONTACT-Live-HLS/master.m3u8',
    cover: 'https://i.imgur.com/32mmGvB.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-qohycwv',
    title: 'Radio Cuenca Estéreo (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8074/index.m3u8',
    cover: 'https://i.imgur.com/qZzSOeU.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-1u4oojk',
    title: 'RADIO DISCOunt TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://585b674743bbb.streamlock.net/9030/9030/playlist.m3u8',
    cover: 'https://i.imgur.com/ScNYMmx.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-98ee8ll',
    title: 'Radio Fantástica 98.9 FM (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://190.107.232.9:8082/livestream/stream.m3u8',
    cover: 'https://i.imgur.com/mpcIbrH.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ulo275g',
    title: 'Radio Freccia TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S3160845/0tuSetc8UFkF/playlist_video.m3u8',
    cover: 'https://i.imgur.com/RxeRlar.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-34lp3ss',
    title: 'Radio Fx Net (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streamlov.alsolnet.com/radiofxnet/live/playlist.m3u8',
    cover: 'https://radiofxnet.ro/wp-content/uploads/2021/03/cropped-cropped-cropped-cropped-Radio_FX_Net_logo-1-1.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-58ae0d0',
    title: 'Radio Hit FM TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://peer2.tdiradio.com/static/streaming-playlists/hls/bab99862-ec1c-474f-9a02-4f8c8677d565/0.m3u8',
    cover: 'https://i.imgur.com/gP2OT4S.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-1rcp95i',
    title: 'Radio Ideal 104.7 FM (La Esperanza) (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://www.idealfm104-7.com/hls/0/stream.m3u8',
    cover: 'https://i.imgur.com/chPfoOs.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-4n5bj4s',
    title: 'Radio Imagen 105.1 FM (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streaming.imagenfm105-1.com/hls/stream.m3u8',
    cover: 'https://i.ibb.co/C9zjz9p/343159606-190989583743350-3489987129696505785-n.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-wv036j9',
    title: 'Radio Italia Trend (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://amg00745-radioitailaspa-radioitalia-rakuten-sucsc.amagi.tv/hls/amagi_hls_data_rakutenAA-radioitalia-rakuten/CDN/master.m3u8',
    cover: 'https://i.imgur.com/HNrKqGM.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-uvb7g7j',
    title: 'Radio Javan TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://rjtvhls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/a1zuW2C.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-drkvo2s',
    title: 'Radio JND (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://radiojnd.cdn.hostin.cc/radiojnd/playlist.m3u8',
    cover: 'https://i.imgur.com/nyVlZeL.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-nh82wsk',
    title: 'Radio Karaoke (288p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/radiokaraoke-2.m3u8',
    cover: 'https://i.imgur.com/9uRggjD.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-u2iqrkj',
    title: 'Radio Karolina TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://peer2.tdiradio.com/static/streaming-playlists/hls/4207de1d-52e8-4591-ad9e-218069b864d1/0.m3u8',
    cover: 'https://i.imgur.com/g2HpLX1.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-22vrk0n',
    title: 'Radio Lola (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://peer2.tdiradio.com/static/streaming-playlists/hls/7c3ea8d3-49dc-4e1b-8b1e-dc6fab71f5cf/0.m3u8',
    cover: 'https://i.imgur.com/41eE8fl.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ap0n3xy',
    title: 'Radio Master (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://videoserver.tmcreativos.com:19360/radiomaster/radiomaster.m3u8',
    cover: 'https://i.imgur.com/AUoxyzP.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-kpaeko3',
    title: 'Radio Monumental TV (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cloud37.ecuatel.com/monumentaltv/live/manifest.m3u8',
    cover: 'https://i.imgur.com/a97MaV2.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-9vi5yy1',
    title: 'Radio Piter Pan TV (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://58d921499d3d3.streamlock.net/RadioPiterpanTV/livestream/playlist.m3u8',
    cover: 'https://i.imgur.com/hbqVWV4.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-9njxqr1',
    title: 'Radio RAM (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://1888165924.rsc.cdn77.org/live/RadioRAM/playlist.m3u8',
    cover: 'https://i.ibb.co/LXbchP5q/logo-1.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-savv3by',
    title: 'Radio Realpolitik (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://vivo.solumedia.com:19360/realpolitik/realpolitik.m3u8',
    cover: 'https://i.imgur.com/L9KCdTX.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-v24dgbl',
    title: 'Radio San Cristobal 88.7 FM',
    author: 'Music Clips',
    type: 'video',
    url: 'https://video.wilohosting.com:19360/sancristobalfm/sancristobalfm.m3u8',
    cover: 'https://i.imgur.com/zaJhBdj.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-qzt5gdr',
    title: 'Radio Stad den Haag (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://rsdh.cloud-streams.com/rsdh/rsdh/playlist.m3u8',
    cover: 'https://i.imgur.com/ANK36EQ.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ww0yfm2',
    title: 'Radio Suyai TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://signal.suyaitv.cl/live/26/playlist.m3u8?password=9PcdCnFxUe&username=ZZDemoIPTVGH',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-s3lrszp',
    title: 'Radio SWH TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://00ff00.latnet.media/edge/swh_tv.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/cFrNsXn.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-cowjrdw',
    title: 'Radio Télé Hit (480p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://59d39900ebfb8.streamlock.net/RadioTelehit/RadioTelehit/playlist.m3u8',
    cover: 'https://i.ibb.co/Gt2QDgf/cropped-transparent2-103x70.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-oz3bv30',
    title: 'Radio Télé Kajou (480p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://59d39900ebfb8.streamlock.net/RadioTelekAJOU/RadioTelekAJOU/playlist.m3u8',
    cover: 'https://i.ibb.co/1MhvJ3B/logork.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-j210ve0',
    title: 'Radio Tropical Tarapoto (480p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://videoserver.tmcreativos.com:19360/raditropical/raditropical.m3u8',
    cover: 'https://i.imgur.com/TBPVOBI.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-c1snrpv',
    title: 'Radio TV Sal One (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lon.rtsp.me/r3ZnG6WN2HIRxPARhAirIQ/1713628621/hls/9QdykDAy.m3u8',
    cover: 'https://i.imgur.com/pCz7ifY.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-tsay7vr',
    title: 'Radio TV Tendencias (1080p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://s1.tvdatta.com:3950/multi_web/play.m3u8',
    cover: 'https://i.imgur.com/tsdrrV9.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-kp2hi6s',
    title: 'Radio U TV (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://1826200335.rsc.cdn77.org/1826200335/index.m3u8',
    cover: 'https://i.imgur.com/HjZpC1V.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-8o9lqw9',
    title: 'Radio Weser TV Bremen (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://5857499ee635b.streamlock.net/radiowesertv-live/_definst_/mp4:livestreamTV/playlist.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-tt7k8ml',
    title: 'Radio Zeta TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S9346184/XEx1LqlYbNic/playlist_video.m3u8',
    cover: 'https://i.imgur.com/K2xLMin.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-mcyz4z9',
    title: 'RadioNL TV (1080p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream.radionl.tv/radionltv/radionltv/playlist.m3u8',
    cover: 'https://i.imgur.com/TVaMJYB.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-lqgiwri',
    title: 'Raj Musix Kannada (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://mumt01.tangotv.in/RAJMUSIXKANDA/index.m3u8',
    cover: 'https://i.imgur.com/z7fhhyX.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-tmkkelo',
    title: 'Raj Musix Malayalam (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://mumt04.tangotv.in/RAJMUSIXMALAYALAM/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_RAJ_MUSIX_MALAYALAM/images/LOGO_HD/image.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-55ttprf',
    title: 'Raj Musix Tamil (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://livestream.rajtv.tv/hlslive/Admin/px08241087/live/Raj_Musix/master_1.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_RAJ_MUSIX_TAMIL/images/LOGO_HD/image.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-lkwpil8',
    title: 'Raj Musix Telugu (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/1213/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_RAJ_MUSIX_TELUGU/images/LOGO_HD/image.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-soydse4',
    title: 'Rararadio (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://58c04fb1d143f.streamlock.net/rararadio/rararadio/playlist.m3u8',
    cover: 'https://i.imgur.com/vTpfxUG.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-mi2cvy8',
    title: 'Rashid AlMajed (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://dphwv2ufgnfsq.cloudfront.net/out/v1/59cd80dfe93a479eb8b4d79bc6f225ca/index.m3u8',
    cover: 'https://assets.mbcmood.com/channels/1720177618Rashid%20AlMajed.webp',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-0g5npcr',
    title: 'RC Music (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://view.rcserver.in/tmp_hls2/stream/index.m3u8',
    cover: 'https://rctv.in/logo_s.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-i9bfg35',
    title: 'RedMusic (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://fr.crystalweb.net:1936/redmusic/redmusic/playlist.m3u8',
    cover: 'https://i.ibb.co/1Lk8P1x/1-150x150.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-bvuq68e',
    title: 'Retro Music Television (360p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream.mediawork.cz/retrotv/retrotvHQ1/playlist.m3u8',
    cover: 'https://i.imgur.com/pyOjdZs.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-j88dbuq',
    title: 'Retro Plus 2 (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://tls-cl.cdnz.cl/retroplustvuno/live/playlist.m3u8',
    cover: 'https://i.imgur.com/5G5kian.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-7v5iodz',
    title: 'Reyali (614p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8090/index.m3u8',
    cover: 'https://i.imgur.com/YmFjnsF.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-7n3ktsn',
    title: 'RFPtv (360p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://video03.logicahost.com.br/rfptv/rfptv/playlist.m3u8',
    cover: 'https://i.imgur.com/I60nQuR.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-8ah3qho',
    title: 'RHT Guadeloupe (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://edge12.vedge.infomaniak.com/livecast/ik:livehautetension/manifest.m3u8',
    cover: 'https://i.imgur.com/hQ0Q6nE.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-17hzsdj',
    title: 'Rock TV (1080p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream.nasatv.com.mk/rocktv/hls/rocktv_live.m3u8',
    cover: 'https://i.imgur.com/Y9miDQo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-nqmnk1j',
    title: 'Rock TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://tv.broadcasting.ro/rocktv/85c83a80-4f71-4f2d-a8d6-43f676896bcb.m3u8',
    cover: 'https://i.imgur.com/VB88A5V.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-y3frib5',
    title: 'Rotana Khalijia (1080p) [Geo-blocked]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://rotana.hibridcdn.net/rotananet/khaleejiya_net-7Y83PP5adWixDF93/playlist.m3u8',
    cover: 'https://i.imgur.com/6HMluzv.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-om28wsl',
    title: 'Rotana Music (1080p) [Geo-blocked]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://rotana.hibridcdn.net/rotananet/music_net-7Y83PP5adWixDF93/playlist.m3u8',
    cover: 'https://i.imgur.com/2zFQbQi.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-7f363c6',
    title: 'RQP Paraguay (1080i)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://alba-py-rqp-rqp.stream.mediatiquestream.com/index.m3u8',
    cover: 'https://i.imgur.com/0cUc4Nt.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-r2bfnqk',
    title: 'RTI La 3 (1080p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'http://69.64.57.208/la3/index.m3u8',
    cover: 'https://i.imgur.com/HdNshgF.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-eqz5gr9',
    title: 'RTL2',
    author: 'Music Clips',
    type: 'video',
    url: 'https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/rtl2.m3u8',
    cover: 'https://i.imgur.com/deC4z34.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-n1h82x1',
    title: 'RTL 102.5 Best (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S76960628/OEPHRUIctA0M/playlist_video.m3u8',
    cover: 'https://i.imgur.com/9PNlbaq.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-aq6llmu',
    title: 'RTL 102.5 Bro&Sis (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S75007890/MUGHuxc9dQ3b/playlist_video.m3u8',
    cover: 'https://i.imgur.com/EWbK4XZ.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-g2bd9hv',
    title: 'RTL 102.5 Caliente (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S8448465/zTYa1Z5Op9ue/playlist_video.m3u8',
    cover: 'https://i.imgur.com/P0zsi6I.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-kgooyzz',
    title: 'RTL 102.5 Disco (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S51100361/0Fb4R3k82b5Z/playlist_video.m3u8',
    cover: 'https://i.imgur.com/JA1OPrz.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-yti6p6z',
    title: 'RTL 102.5 Napulè (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S27134503/0f9AhuwKlhnZ/playlist_video.m3u8',
    cover: 'https://i.imgur.com/HFPw1YW.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-1e8lq1a',
    title: 'RTL 102.5 Traffic (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S38122967/2lyQRIAAGgRR/playlist_video.m3u8',
    cover: 'https://i.imgur.com/EBftMcB.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-x0wva86',
    title: 'RTL 102.5 TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S97044836/tbbP8T1ZRPBL/playlist_video.m3u8',
    cover: 'https://i.imgur.com/75qUdR7.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-cem4z4r',
    title: 'RTL Gold (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream.rtl.lu/data/live/tele/rtlgold/playlist.m3u8',
    cover: 'https://i.imgur.com/LzHQoUv.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-hmlf61k',
    title: 'RTL Today Radio (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream.rtl.lu/data/live/tele/rtltodayradio/playlist.m3u8',
    cover: 'https://i.imgur.com/O1c6wpt.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-49ea9qu',
    title: 'RTV Glas Drine (404p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'http://glasdrine.cutuk.net:8081/433ssdsw/GlasDrineSD/playlist.m3u8',
    cover: 'https://i.imgur.com/9NgxOdb.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-e2j60ns',
    title: 'RTV Vida (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://vidartv2.todostreaming.es/live/radiovida-emisiontvhd.m3u8',
    cover: 'https://i.imgur.com/EqUfEAh.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-g1bba6x',
    title: 'RU.TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://bl.rutube.ru/livestream/b1eb8e90d7e636677b3eb73b4fcbb717/index.m3u8?s=d-E-bxKy2v3EEJ94RQX9CA&e=2069285076&scheme=https',
    cover: 'https://i.imgur.com/Z7HUU7V.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-2t6232f',
    title: 'Salsa Gorda Television (1080p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live20.bozztv.com/akamaissh101/ssh101/qMUAZEy/playlist.m3u8',
    cover: 'https://i.imgur.com/3IhYd7G.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-vsi3wh3',
    title: 'Salto Brasa Music (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://salto-streams.nl/hls/sotv1.m3u8',
    cover: 'https://i.vimeocdn.com/portrait/31947989_640x640',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-xvajo0m',
    title: 'Sana Plus (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://mumbai-edge.smartplaytv.in/SanaPlusHD/index.m3u8',
    cover: 'https://i.imgur.com/N6tKUZv.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-2qkha5t',
    title: 'Sangeet Bangla (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn-4.pishow.tv/live/1143/master.m3u8',
    cover: 'https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/transparentImages/Sangeet%20Bangla.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-awx42tb',
    title: 'Sangeet Bhojpuri (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://103.213.31.109:90/SangeetBhojpuri/playlist.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143757_ld_h15_aa.png?lock=720x540',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-usethzz',
    title: 'Sangeet Marathi (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn-3.pishow.tv/live/1229/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SANGEET_MARATHI/images/LOGO_HD/image.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-6dwezwl',
    title: 'Shemaroo Filmi Gaane (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://103.213.31.109:90/ShemarooFilmiGaane/playlist.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/channel/0d5b07555b2d4415aa9f145273095ed7.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-wj5s4qu',
    title: 'Siembra TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streamunoapp.com:3809/live/siembratvlive.m3u8',
    cover: 'https://www.vivalivetv.com/public/files/shows/0/1/3226-294x165-FFFFFF.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-5u5rdhp',
    title: 'Sky Folk TV (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://eu.live.skyfolk.mk/live.m3u8',
    cover: 'https://i.imgur.com/ya5xpUL.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ucbwb5u',
    title: 'SL48 TV (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://media.velcom.it:1935/sl48/sl48/playlist.m3u8',
    cover: 'https://i.imgur.com/0iPU3JE.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-nei2z81',
    title: 'Slager Muzika',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream-23.mazana.tv/slagrmuzika.m3u8s',
    cover: 'https://i.imgur.com/hKdXwrW.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-lz4z7qu',
    title: 'Slager Original',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream-13.mazana.tv/slagroriginal.m3u8s',
    cover: 'https://i.imgur.com/0YjeWcq.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-lf28t6j',
    title: 'Sol Música (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d2glyu450vvghm.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-21u4g5cjglv02/sm.m3u8',
    cover: 'https://i.imgur.com/rbJrmPw.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-mpo2c6r',
    title: 'SoloBáilalo (480p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://5ff3d9babae13.streamlock.net/8000/8000/playlist.m3u8',
    cover: 'https://i.imgur.com/SImJE7c.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-dt7q2bl',
    title: 'Songdew TV (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/1411.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s142920_ld_h9_aa.png?lock=720x540',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-bgzwejh',
    title: 'SONGTV Russia',
    author: 'Music Clips',
    type: 'video',
    url: 'https://songtv.hls.iptvdc.com/web-russia/playlist.m3u8',
    cover: 'https://i.imgur.com/nM7LbmV.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-2dy2uwb',
    title: 'SOY Plancha TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://59ef525c24caa.streamlock.net/vmtv/soyplancha/playlist.m3u8',
    cover: 'https://i.ibb.co/P4kpMgk/1689344714578.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-c92qcmc',
    title: 'Space Shower TV (544p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs26',
    cover: 'https://static.wikia.nocookie.net/logopedia/images/2/24/Space_Shower_-_1999.svg/revision/latest/scale-to-width-down/512',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-muvo07d',
    title: 'SpektraTV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8026/tracks-v1a1/index.m3u8',
    cover: 'https://i.imgur.com/0zCt8e4.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-g1gkzvo',
    title: 'Spirit TV (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdnlive.myspirit.tv/LS-ATL-43240-2/index.m3u8',
    cover: 'https://i.imgur.com/yCp6vXz.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-qdzqpr0',
    title: 'Star 101 FM (KNUT Guam) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live2.tensila.com/knut-v-1.choice/hls/master.m3u8',
    cover: 'https://star101.gu/images/fb_icon.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-qun0992',
    title: 'Star Plus Music (1080p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live.muzickatv.mk/live/StarMusic2.m3u8',
    cover: 'https://i.imgur.com/01yz22a.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-i1p9zpm',
    title: 'Steelbird Music (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn2.in/SteelbirdMusicTVhls/live.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Steelbird_Music.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-iddaot9',
    title: 'Stingray Classic Rock (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-101ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/FBgu8yB.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-7wpvfdu',
    title: 'Stingray Classica (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/classica-cla008-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/nh1k5RC.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-6lzpsok',
    title: 'Stingray CMusic (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/cmusic-cme004-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/3UppN5P.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-0wgguvc',
    title: 'Stingray DJAZZ (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/djazz-djaads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Stingray_Djazz.png/960px-Stingray_Djazz.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-exe3z1v',
    title: 'Stingray Easy Listening (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-137ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Stingray_Music_logo.svg/960px-Stingray_Music_logo.svg.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-fgbweli',
    title: 'Stingray Euro Hits (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-214ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/FyhO9U5.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-2ybetka',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",Stingray Éxitos del Momento (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/stingray-xitos-del-momento/master.m3u8?ads.vf=--_m-LmFeCi',
    cover: 'https://i.imgur.com/wiasHUR.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-5m8c2y4',
    title: 'Stingray Flashback 70s (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-115ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/jf5C9QF.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-pvxrcjj',
    title: 'Stingray Greatest Hits (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883053',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ds1xw7f',
    title: 'Stingray Greatest Hits (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-155ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-jsbmotn',
    title: 'Stingray Greatest Holiday Hits',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/manifest/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/54947915-6504-4548-aaef-eabd451f8607/1.m3u8',
    cover: 'https://i.imgur.com/Hz2d6og.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-9a6t8b5',
    title: 'Stingray Hit List (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-107ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/lgpIwId.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-m9wt1fd',
    title: 'Stingray Hitlist (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883054',
    cover: 'https://i.imgur.com/lgpIwId.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-n4vc4hs',
    title: 'Stingray Holidayscapes (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://plextv.ott-channels.stingray.com/holidayscapes/master.m3u8',
    cover: 'https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fprovider-static.plex.tv%2Fepg%2Fcms%2Fproduction%2F9cb4b15c-8244-4499-ae2c-9a92d4cdff6d%2F13895_SHS_Plex_Logos_Holidays_1500x1000_Dark-Background.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-441fmi7',
    title: 'Stingray Hot Country (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-108ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/PZhxyIT.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-6218f68',
    title: 'Stingray Jukebox Oldies (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-021ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Stingray_Music_logo.svg/960px-Stingray_Music_logo.svg.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-dpw5075',
    title: 'Stingray Karaoke (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/karaoke-kar000-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/9TLTLS3.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-nk53jd4',
    title: 'Stingray Naturescape (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883056',
    cover: 'https://i.imgur.com/882kd90.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-7m3081c',
    title: 'Stingray Naturescape (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/naturescape-a003-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/882kd90.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-sw4iuqh',
    title: 'Stingray Nothin\' But 90s (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-142ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/Tq3I0po.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-u4ejo9g',
    title: 'Stingray Remember the 80s (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-128ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/6E3wYrb.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-uvregds',
    title: 'Stingray Remember the 80s (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883071',
    cover: 'https://i.imgur.com/duwc8E8.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-dvy02iv',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",Stingray Remember the 80s (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/stingray-remember-the-80s/master.m3u8?ads.vf=Fq0bVWh7hy0',
    cover: 'https://i.imgur.com/duwc8E8.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-pzztrsn',
    title: 'Stingray Rock Alternative (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-102ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/mt8ulVX.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-jhjvxx1',
    title: 'Stingray Romance Latino (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-202ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Stingray_Music_logo.svg/960px-Stingray_Music_logo.svg.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-d23ffro',
    title: 'Stingray Smooth Jazz (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-140ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/h1DsOzH.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-bn09z8s',
    title: 'Stingray Soul Storm (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-134ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/dU1KC3f.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-eu7kr1z',
    title: 'Stingray The Spa (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-122ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/ywAN923.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ulhan4l',
    title: 'Stingray Today\'s KPOP (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-317ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/mMbntB5.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-u6f1xf7',
    title: 'Stingray Today\'s Latin Pop (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-190ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/Os3kRRP.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ct4sptm',
    title: 'Stingray Urban Beat (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-133ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/Os3kRRP.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-0ykp1q5',
    title: 'Stryk TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://fffffff110156200.tvustream.com:8298/ryfy.m3u8',
    cover: 'https://i.imgur.com/rKkHhkX.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-y0u543p',
    title: 'STZ Telebista (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/stztelebista/index.m3u8',
    cover: 'https://i.imgur.com/rFQuAEv.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-w253nos',
    title: 'Súper Q Panamá (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://vcp8.myplaytv.com:1936/superq/superq/playlist.m3u8',
    cover: 'https://i.imgur.com/ocTnqi7.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-5xp1t4q',
    title: 'Super TV (1080i) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live.supertv.ro/live/supertv/playlist.m3u8',
    cover: 'https://i.imgur.com/pzxUE0O.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-o52k0tc',
    title: 'Supermúsica TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://backupmaxmedia.hvmultiplay.com/hls/stream4/supermusica.m3u8',
    cover: 'https://i.imgur.com/MiVs42N.jpeg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-4e6gqmf',
    title: 'T2 TV',
    author: 'Music Clips',
    type: 'video',
    url: 'https://t2hls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/Wu8MBb7.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ifmgvqk',
    title: 'Tabbar Hits (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://vglivessai.akamaized.net/sg/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/e11b0319-52e8-4190-ab03-3931cc68eac9/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_TABBAR_HITS/images/LOGO_HD/image.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-x30wuk4',
    title: 'Tarab (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://shd-amg-fast-btpls.shahid.net/tx002/playlist.m3u8',
    cover: 'https://assets.mbcmood.com/channels/1738059679TARAB_Logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-dgwu1wy',
    title: 'Tarang Music (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://livetv.tarangplus.in/tarangmusic-origin/live/playlist.m3u8',
    cover: 'https://i.imgur.com/oSm8zFD.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-totg7al',
    title: 'TDI Radio TV',
    author: 'Music Clips',
    type: 'video',
    url: 'https://peer2.tdiradio.com/static/streaming-playlists/hls/8f5d84ce-e8ac-4109-9975-9665f5605557/master.m3u8',
    cover: 'https://i.imgur.com/POdTmaD.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ffbhm1t',
    title: 'Tele7music',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live.tele7music.ro/hls/stream/index.m3u8',
    cover: 'https://i.imgur.com/11b5W8u.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-zesb1f6',
    title: 'Tele Dominicana TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://vdopanel.jlahozconsulting.com/p/3417/hybrid/play.m3u8',
    cover: 'https://dominicanchannels.com/wp-content/uploads/teledominicana.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-bwvt9ho',
    title: 'Tele Zoukla',
    author: 'Music Clips',
    type: 'video',
    url: 'https://vdo.pro-fhi.net:3228/stream/play.m3u8',
    cover: 'https://i.imgur.com/lWYKgPC.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-e1kjytm',
    title: 'Telehit Musica',
    author: 'Music Clips',
    type: 'video',
    url: 'http://190.61.55.34:2401/play/a06t/index.m3u8',
    cover: 'https://i.imgur.com/CofYjWh.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-n5dsw8x',
    title: 'TeleMusik Senegal (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://58c04fb1d143f.streamlock.net/rezopropartner_1_live/rezopropartner_1_live/playlist.m3u8',
    cover: 'https://i.imgur.com/dPAPLsd.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-1almog2',
    title: 'Telerumba TV (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://inliveserver.com:1936/18506/18506/playlist.m3u8',
    cover: 'https://www.vivalivetv.com/public/files/shows/0/1/3649-294x165-FFFFFF.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-4eudxcu',
    title: 'Tezaur TV (576i)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://tezaurtv.md/stream/index.m3u8',
    cover: 'https://i.imgur.com/eAagwLW.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-4qqsmin',
    title: 'That\'s 70s (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://92.114.85.72:8000/play/a0lc',
    cover: 'https://i.imgur.com/j2q53JQ.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-cc09p84',
    title: 'The Country Network (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://amg00600-amg00600c1-thecountrynetwork-us-5497.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/en/d/dd/The_Country_Network_Logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-qau2ryb',
    title: 'The Voice TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://bss1.neterra.tv/thevoice/thevoice.m3u8',
    cover: 'https://i.imgur.com/OoJSmoj.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-gt0dokc',
    title: 'Tiankov Folk (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streamer103.neterra.tv/tiankov-folk/live.m3u8',
    cover: 'https://i.imgur.com/VKY4q64.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-3plvgrt',
    title: 'Tiankov Orient Folk (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streamer103.neterra.tv/tiankov-orient/live.m3u8',
    cover: 'https://i.imgur.com/33LexyP.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-5xkz97w',
    title: 'TikTok Radio Brasil (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d1bl6tskrpq9ze.cloudfront.net/hls/master.m3u8?ads.xumo_channelId=99992529',
    cover: 'https://static.wikia.nocookie.net/logopedia/images/f/f4/TikTok_Radio.svg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-uk0xirf',
    title: 'TMA (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://hls.tmacaraibes.com/live/index.m3u8',
    cover: 'https://i.imgur.com/1iOAl2j.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-lu080bn',
    title: 'Top TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://82.165.71.58:8081/TopTV/live/playlist.m3u8',
    cover: 'https://i.imgur.com/UJqbKEC.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-xvlso6i',
    title: 'TopEstrada TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://live.topestrada.com/live/topestrada/playlist.m3u8',
    cover: 'https://i.imgur.com/0Dh1FJZ.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-9mya6q6',
    title: 'Topical Moon RD (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://sistemastr.tropicalmoonmedia.com/live/56BE17DB16EB76C9F2DDB8346F4DFA4E/30.m3u8',
    cover: 'https://www.vivalivetv.com/public/files/shows/0/1/3900-294x165-FFFFFF.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-nxte5ya',
    title: 'Totalmusic (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn.global.elektamedia.com/live/c7eds/Totalmusic/SA_LIVE_hls_enc/master.m3u8',
    cover: 'https://static.elektamedia.com/ch/tmc_main.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-oxek8in',
    title: 'Totalmusic 80s (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_80s/SA_LIVE_hls_enc/master.m3u8',
    cover: 'https://static.elektamedia.com/ch/tmc_80s.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-0oaxjsy',
    title: 'Totalmusic 2000s (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_00s/SA_LIVE_hls_enc/master.m3u8',
    cover: 'https://static.elektamedia.com/ch/tmc_00s.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-tw3e8eh',
    title: 'Totalmusic Concerts (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_Concerts/SA_LIVE_hls_enc/master.m3u8',
    cover: 'https://static.elektamedia.com/ch/tmc_concerts.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-08zeam0',
    title: 'Totalmusic Dance (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_Dance/SA_LIVE_hls_enc/master.m3u8',
    cover: 'https://static.elektamedia.com/ch/tmc_dance.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-cp3tvkq',
    title: 'Trace Brasil (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01131-tracetv-tracebrazuca-samsungbr/playlist.m3u8',
    cover: 'https://i.imgur.com/DFBocPu.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-26sbtwo',
    title: 'TRACE Brazuca (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://amg01131-tracetv-amg01131c4-stirr-us-4390.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/DFBocPu.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-1erbgxt',
    title: 'Trace Gospel (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://channels.trace.plus/Traceprod/GOSPEL_FR/.m3u8',
    cover: 'https://i.imgur.com/X0UmU3K.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-zlug3rj',
    title: 'Trace Latina (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://amg01131-tracetv-tracelatina-glewed-vtnk7.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/CUVAi4u.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-0w708xy',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",TRACE Latina (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/trace-latina/encrypted.m3u8?ads.vf=8rE20DsHHI0',
    cover: 'https://i.imgur.com/CUVAi4u.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-r62kiqb',
    title: 'Trace UK (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d2l4tng0wskzvn.cloudfront.net/Trace_GB.m3u8',
    cover: 'https://a.jsrdn.com/hls/23073/trace-uk/logo_20240627_183320_70.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-u3xg81x',
    title: 'Trace Urban (Australia) (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://lightning-traceurban-samsungau.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/DLIbUMx.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-yjp1isq',
    title: 'Traditional TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://83.103.149.75:8085/udp/239.30.0.9:4000',
    cover: 'https://i.ibb.co/G5bNH48/Traditional-TV-HD.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-8th5hj5',
    title: 'Tropi Q 99.7 FM (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://www.streaming507.net:19360/videotropiq/videotropiq.m3u8',
    cover: 'https://i.imgur.com/5rPdHhb.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-tdoc21n',
    title: 'Tropical Moon Cumbia TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://srv2.tropicalmoonmedia.com/cumbiatv/cumbiatv/playlist.m3u8',
    cover: 'https://i.imgur.com/jL1kLyS.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-imxbztg',
    title: 'Tropical Music TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://59a564764e2b6.streamlock.net/vallenato/tropical/playlist.m3u8',
    cover: 'https://i.imgur.com/h48pwLn.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-84duo7y',
    title: 'Tropicalia 93.9 FM (1280p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://45.184.109.10/live/69393EAE6ADBC65A68F942022362A202/67.m3u8',
    cover: 'https://i.imgur.com/oMML5Ue.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-vmpajp0',
    title: 'TRT Müzik (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://tv-trtmuzik.medya.trt.com.tr/master.m3u8',
    cover: 'https://i.imgur.com/JgUzRH8.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-nf6q0cl',
    title: 'Tu Musica HD (1080p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://edge.essastream.com/tumusicahd/tracks-v1a1/mono.m3u8',
    cover: 'https://i.imgur.com/HnjUjog.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-lkynokv',
    title: 'Tunes 6 (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream.d6-pro.com/tunes6music/live/video.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Tunes_6.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-fvc2lk8',
    title: 'Turbo Mix Radio TV (360p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://7.innovatestream.pe:19360/turbomixoficial/turbomixoficial.m3u8',
    cover: 'https://i.imgur.com/AsdBQa3.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-faq445a',
    title: 'Türkmen Owazy (406p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://alpha.tv.online.tm/hls/ch005.m3u8',
    cover: 'https://i.imgur.com/Ap7l2jC.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-1eapjdt',
    title: 'TV Arbëria 4 Muzikë (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://ssh101.bozztv.com/ssh101/rtvarberia4/playlist.m3u8',
    cover: 'https://i.imgur.com/zLRzyVS.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-2vp5gub',
    title: 'TV Arbëria Retro Hits (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://ssh101.bozztv.com/ssh101/rtvarberiaretro/playlist.m3u8',
    cover: 'https://i.imgur.com/zLRzyVS.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-k0movq3',
    title: 'TV Duga Plus (480p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'http://109.92.29.10:1935/tvduga/tvduga/playlist.m3u8',
    cover: 'https://i.imgur.com/qZV3JW5.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-19vgrqe',
    title: 'TV Éxitos (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streaming.grupomediosdelnorte.com:19360/tvexitos/tvexitos.m3u8',
    cover: 'https://i.imgur.com/ahz7X7u.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-8l65o3t',
    title: 'TVOMIX (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cloud.tvomix.com/TVOMIX/index.m3u8',
    cover: 'https://ugc.production.linktr.ee/7ef61237-c46d-456b-afe3-a42ef49a979e_Mejorado2.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-voxew68',
    title: 'TVONE Nicaragua (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://hdbox.chunklistv.com/live?stream=tvone',
    cover: 'https://i.imgur.com/FNk6rdz.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-db1jbz1',
    title: 'TVR Folclor',
    author: 'Music Clips',
    type: 'video',
    url: 'https://tvr-folclor.lg.mncdn.com/tvrfolclor/smil:tvrfolclor.smil/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/TVR_Folclor_Logo_2023.svg/960px-TVR_Folclor_Logo_2023.svg.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-23p56st',
    title: 'TVS Music Network (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://rpn.bozztv.com/gusa/gusa-tvsmusic/index.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-mptd7om',
    title: 'TVUNO (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streamtv.onliv3.online:1936/karibtv/karibtv/playlist.m3u8',
    cover: 'https://i.imgur.com/dht94P4.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-t463tbr',
    title: 'TZiK [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://54627d4fc5996.streamlock.net/tzik/tzik/chunklist.m3u8',
    cover: 'https://i.imgur.com/TAagRkn.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-okp8xyh',
    title: 'Ultimate TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream.ottlive.co.in/utvtamil/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/utvtamil.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-nuy0i0r',
    title: 'Urbano TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://59ef525c24caa.streamlock.net/tvurbano/tvurbano/playlist.m3u8',
    cover: 'https://i.imgur.com/KVVU9PI.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-d1x7yyn',
    title: 'V2BEAT (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://abr.de1se01.v2beat.live/playlist.m3u8',
    cover: 'https://i.imgur.com/PXGqyLn.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-42lf2bj',
    title: 'V Classic TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://5eaccbab48461.streamlock.net:1936/8112/8112/playlist.m3u8',
    cover: 'https://i.imgur.com/WIACJSy.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-mqdlmee',
    title: 'Vaanavil TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://6n3yope4d9ok-hls-live.5centscdn.com/vaanavil/TV.stream/playlist.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Vaanavil_TV.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-vrg7opb',
    title: 'Vallenato Internacional (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://59a564764e2b6.streamlock.net/vallenato/vallenatom/playlist.m3u8',
    cover: 'https://i.imgur.com/rVKroNW.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-g5b55mh',
    title: 'VAM Vid\'s & More (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://sincerecloud.stream/loadbalancer/public/J9EmQQGf.m3u8',
    cover: 'https://i.imgur.com/CD1PffA.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-y95x0ys',
    title: 'Vantage Dance (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://hls.vantagetv.ee/vdance_stream/main_stream.m3u8',
    cover: 'https://vantagetv.ee/vantage_dance.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-3xc2pqg',
    title: 'Vantage Music (720p) [Geo-blocked]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://hls.vantagetv.ee/vmusic_stream/main_stream.m3u8',
    cover: 'https://vantagetv.ee/vantage_music.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-bvi68qq',
    title: 'Vantage Music UK (1080p) [Geo-blocked]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://hls.vantagetv.co.uk/vmusicuk_stream/index.m3u8',
    cover: 'https://vantagetv.ee/vantage_music.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-l74v9ku',
    title: 'Vantage Rock (720p) [Geo-blocked]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://hls.vantagetv.ee/vrock_stream/index.m3u8',
    cover: 'https://vantagetv.ee/vantage_rock.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-6pbdq2h',
    title: 'Venus Media (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://tigocloud.desdeparaguay.net/venusmedia/venusmedia/playlist.m3u8',
    cover: 'https://i.imgur.com/XwmUbfp.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-axz6a16',
    title: 'Vevo 2K (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d1s6jz7jeei17.cloudfront.net/playlist/amg00056-vevotv-vevo2kau-samsungau/playlist.m3u8',
    cover: 'https://images.pluto.tv/channels/5fd7bca3e0a4ee0007a38e8c/featuredImage.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-q7zy1df',
    title: 'Vevo 70s (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://amg00056-vevotv-vevo70saunz-samsungau-xzszd.amagi.tv/playlist/amg00056-vevotv-vevo70saunz-samsungau/playlist.m3u8',
    cover: 'https://images.pluto.tv/channels/5f32f26bcd8aea00071240e5/featuredImage.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-whqgnbr',
    title: 'Vevo 80s (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://amg00056-vevotv-vevo80saunz-samsungau-rp5e3.amagi.tv/playlist/amg00056-vevotv-vevo80saunz-samsungau/playlist.m3u8',
    cover: 'https://images.pluto.tv/channels/5fd7b8bf927e090007685853/featuredImage.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-nbne12p',
    title: 'Vevo 90s (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://amg00056-vevotv-vevo90saunz-samsungau-n6a0d.amagi.tv/playlist/amg00056-vevotv-vevo90saunz-samsungau/playlist.m3u8',
    cover: 'https://images.pluto.tv/channels/5fd7bb1f86d94a000796e2c2/featuredImage.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-j1lnrab',
    title: 'Vevo Country (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://amg00056-vevotv-vevocountryau-samsungau-ktmqm.amagi.tv/playlist/amg00056-vevotv-vevocountryau-samsungau/playlist.m3u8',
    cover: 'https://images.pluto.tv/channels/5da0d75e84830900098a1ea0/featuredImage.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-lpbhmcl',
    title: 'Vevo Hip Hop (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d3vgs3ro3x6v8a.cloudfront.net/Vevo_Hip_Hop.m3u8',
    cover: 'https://i.imgur.com/Lbc9cYw.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-is76qmd',
    title: 'Vevo Latino (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://amg00056-amg00056c13-rakuten-es-3246.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/D7SwmuB.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-d3r1f9u',
    title: 'Vevo Pop (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d128y56w6v2kax.cloudfront.net/playlist/amg00056-vevotv-vevopopau-samsungau/playlist.m3u8',
    cover: 'https://i.imgur.com/dZHktKR.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-v8pp8bw',
    title: 'Vevo R&B (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d1hf773q57zx9s.cloudfront.net/Vevo_R_B.m3u8',
    cover: 'https://images.pluto.tv/channels/5da0d83f66c9700009b96d0e/featuredImage.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-47tj8sq',
    title: 'Vevo Retro Rock (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d2lyea6if8kkz9.cloudfront.net/playlist/amg00056-vevotv-vevoretrorockau-samsungau/playlist.m3u8',
    cover: 'https://i.imgur.com/H1Aap4E.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-05ihm0j',
    title: 'Video Rola (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d3b2epqdk0p7vd.cloudfront.net/out/v1/8a448b5e16384af4a3c8146a7b049c32/index.m3u8',
    cover: 'https://i.imgur.com/9w54eVy.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-lazzgcc',
    title: 'Video Tour Channel (480p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'http://k4.usastreams.com/videotour/videotour/playlist.m3u8',
    cover: 'https://i.imgur.com/zEi8eMC.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-hru08ta',
    title: 'Vijay Takkar APAC (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://tglmp01.akamaized.net/out/v1/c1071012b73f4f189b202e1529e8f802/manifest.mpd',
    cover: 'https://dtil.tmsimg.com/assets/s144078_ld_h15_aa.png?lock=720x540',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-mjq1rz0',
    title: 'Vĩnh Long TV5 (1080p) [Geo-blocked]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live.fptplay53.net/epzsd1/vinhlong5_vhls.smil/chunklist.m3u8',
    cover: 'https://i.imgur.com/F12VdKO.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-72h1k08',
    title: 'Vintage Music (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://59ef525c24caa.streamlock.net/vmtv/tvvintage/playlist.m3u8',
    cover: 'https://i.imgur.com/KImqYnN.jpeg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-33wthjw',
    title: 'VIP TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://ed5ov1.live.opencaster.com/bkyqeDgfaukC/index.m3u8',
    cover: 'https://i.imgur.com/6N0qITv.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-99obtme',
    title: 'Visión Televisión (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8016/index.m3u8',
    cover: 'https://i.imgur.com/HV5tgcM.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-6wc3vpf',
    title: 'VIVA Russia (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live20.bozztv.com/akamaissh101/ssh101/vivarussia/chunks.m3u8',
    cover: 'https://i.imgur.com/OFhQQCD.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-qeljh40',
    title: 'VM Latino (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://59ef525c24caa.streamlock.net/vmtv/vmlatino/playlist.m3u8',
    cover: 'https://i.imgur.com/Dvo1b82.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-2snig3j',
    title: 'VoiceOver Radio TV (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8198/index.m3u8',
    cover: 'https://i.imgur.com/HzGs1Eh.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-v6or5mt',
    title: 'Volksmusik TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://vmtv.iptv-playoutcenter.de/vmtv/vmtv1/playlist.m3u8',
    cover: 'https://i.imgur.com/EsWuCJ3.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-qf2sibz',
    title: 'Vos y TV (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cloud37.ecuatel.com/vostv/live/manifest.m3u8',
    cover: 'https://i.imgur.com/294FDCB.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-0so3l1x',
    title: 'VRT Radio Klara (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live-radio-cf-vrt.akamaized.net/groupb/live/eee20dc8-158a-4194-8d92-0c5a73ffcd3b/live.isml/.m3u8',
    cover: 'https://i.ibb.co/YdDkSJW/VRT-Klara-2020-svg.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-857fw7a',
    title: 'VRT Radio StuBru (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://live-radio-cf-vrt.akamaized.net/groupb/live/0f394a26-c87d-475e-8590-e9c6e79b28d9/live.isml/.m3u8',
    cover: 'https://i.ibb.co/y0TcsXw/512px-VRT-Stu-Bru-logo-svg.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-bzi8ttb',
    title: 'WAVE TV (480p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://streamer2.nexgen.bz/08-WAVE/index.m3u8',
    cover: 'https://i.imgur.com/V8Hfgis.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-4hfi22s',
    title: 'Wavez FM',
    author: 'Music Clips',
    type: 'video',
    url: 'https://vs20.live.opencaster.com/wavezfm1075aruba_37766c9d/index.m3u8',
    cover: 'https://i.imgur.com/uyROZSS.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-164z8vs',
    title: 'WVCU-LP Concord University Radio The Cure 97.7 (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://video1.getstreamhosting.com:1936/8152/8152/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/en/0/0f/WVCU-LP_2015.PNG',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-8zsciqw',
    title: 'WZNT (Zeta 93) (1080p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://livestream.lamusica.com/nacionz/ngrp:nacionz_all/playlist.m3u8',
    cover: 'https://i.ibb.co/KzqWLZR/images-57.jpg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-lwnxy5q',
    title: 'X 102.7 FM (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream.castr.com/65dee3aad6beacddbd6cd1af/live_21e811c0d60d11eeaa1a471c2c967e4a/index.m3u8',
    cover: 'https://i.imgur.com/28b810Y.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ra72s8r',
    title: 'X Level Media (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://tuvideoonline.com.ar:3332/live/xlevelmedialive.m3u8',
    cover: 'https://i.imgur.com/BGwQdQW.jpeg',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-xhpqyzk',
    title: 'XITE (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://xite-rakuten.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/jxuwGRi.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-aqkqy0p',
    title: 'XITE 90\'s Throwback (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d284aawtm5vi48.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-fjdfi2br1jtq7/XITE_90s_Throwback.m3u8',
    cover: 'https://i.imgur.com/vwpOzuz.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-3zs8isp',
    title: 'XITE Classic Country (1080p) [Geo-blocked]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://pb-wgi5ljoabjgdm.akamaized.net/XITE_Countrys_Finest.m3u8',
    cover: 'https://i.imgur.com/XQrMCkT.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-zxwlvjc',
    title: 'XITE Hits (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d726x48n2pd5h.cloudfront.net/XITE_Hits.m3u8',
    cover: 'https://i.imgur.com/N51Rp7E.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-m6ysrqx',
    title: 'XITE Hits Germany (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d726x48n2pd5h.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-skxr1pazhltvp/XITE_Hits.m3u8',
    cover: 'https://i.imgur.com/N51Rp7E.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-02rbb5d',
    title: 'XITE Hits UK (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://amg01243-xitenetworksint-hitsuk-samsunguk-mvovq.amagi.tv/playlist/amg01243-xitenetworksint-hitsuk-samsunguk/playlist.m3u8',
    cover: 'https://i.imgur.com/N51Rp7E.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-roazzxj',
    title: 'XITE Just Chill (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://dvnftgdlbnemm.cloudfront.net/XITE_Just_Chill.m3u8',
    cover: 'https://provider-static.plex.tv/epg/cms/production/927dd614-017d-49dd-9eb9-0ed79d09084e/xitejustchill_logo_light_-_Arlette_FiranRDX.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-010u8z4',
    title: 'XITE Nuevo Latino (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d3bsgqzbpkrvbb.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-w288eaw03izg1/XITE_Nuevo_Latino.m3u8',
    cover: 'https://i.imgur.com/2qyl2y3.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-xinc846',
    title: 'XITE Reggae Vibes (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://dw2m7yrngfg8c.cloudfront.net/XITE_Reggae_Vibes.m3u8',
    cover: 'https://provider-static.plex.tv/epg/cms/production/c7506335-967f-46a9-917a-2a35475cd96c/xitereggaevibes_logo_light_-_Arlette_FiranRDX.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-cz9ud6d',
    title: 'XITE Rock x Metal (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d198ro05q94rc4.cloudfront.net/XITE_Rock_On.m3u8',
    cover: 'https://i.imgur.com/uIIUIuN.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-x9tsdeg',
    title: 'XITE Siempre Latino (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d1xc25jm9e0l4b.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-xplkt8i7m24dc/XITE_Siempre_Latino.m3u8',
    cover: 'https://i.imgur.com/bwmIEgG.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-6khh01d',
    title: 'XPTV1 (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://janus.xpbroadcasting.com:8443/hls/xptv1.m3u8',
    cover: 'https://i.imgur.com/Ty7GkoN.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-2zl3moh',
    title: 'YleX Studio Live (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://ylestudiolive.akamaized.net/hls/live/2007826/ylestudiolive-YleX/master.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/YleX.svg/960px-YleX.svg.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-p696lt4',
    title: 'YRF Music (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01412-xiaomiasia-yrfmusic-xiaomi/playlist.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/YRF_Music.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-4ttfks5',
    title: 'ZB Music (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://server.zillarbarta.com/zbmusic/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/zbmusic.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-m8y7l0m',
    title: 'ZFM Zoetermeer (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://zfmzoetermeer.nl/live/master.m3u8',
    cover: 'https://i.imgur.com/vrjACvy.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-5350ma8',
    title: 'Zing! (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/585.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/GNLZZGG0025L26R.png?lock=720x540',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-6uqysdt',
    title: 'Zo\'r TV (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://stream8.cinerama.uz/1016/tracks-v1a1/mono.m3u8',
    cover: 'https://i.imgur.com/NuzyhVM.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-utyvu2w',
    title: 'Zona Music TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://acceso.radiosportstv.online:3022/stream/play.m3u8',
    cover: 'https://i.imgur.com/TJ5l9iI.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-nh8cykb',
    title: 'Zoom (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://dai.google.com/linear/hls/event/JCAm25qkRXiKcK1AJMlvKQ/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZOOM/images/LOGO_HD/image.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-o3f7i52',
    title: 'Zoom Global (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://d14c63magvk61v.cloudfront.net/strm/channels/zoom/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZOOM/images/LOGO_HD/image.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-2lx2b2o',
    title: 'ZU TV (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://hls.rundletv.eu.org/LIVE$RadioZU/6.m3u8/Level/300720051?end=END&start=LIVE',
    cover: 'https://i.imgur.com/1gtkGhB.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-qtqlnj0',
    title: 'ZWEI2 Music (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cdne.folxplay.tv/folx-trz/streams/ch-2/master.m3u8',
    cover: 'https://i.imgur.com/RbdpCNf.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-onxfpob',
    title: 'Жара TV (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://31.148.48.15/Zhara/index.m3u8',
    cover: 'https://i.imgur.com/41K9Y2s.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-wfb731w',
    title: 'Матур ТВ (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://public.streaming.matur-tv.ru/hls/h264_aac/stream.m3u8',
    cover: 'https://i.imgur.com/Pg7K7eV.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-25gsafq',
    title: 'Муз союз (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'https://hls-tvsoyuz.cdnvideo.ru/tvsoyuz2/muzsoyuz.6fw0-58xp-acts-esy0/playlist.m3u8',
    cover: 'https://i.imgur.com/Puk1Bhx.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-3a9lvf9',
    title: 'Муз ТВ (450p) [Geo-blocked]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://zabava-htlive.cdn.ngenix.net/hls/CH_MUZTV/variant.m3u8',
    cover: 'https://i.imgur.com/BtqrHmz.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-zcea9xu',
    title: 'Музыка 1 International [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://kino-1.catcast.tv/content/37745/index.m3u8',
    cover: 'https://i.imgur.com/DIKe5vA.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-go9l5an',
    title: 'Музыка Live (576p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://31.148.48.15/La-Minor_TV/index.m3u8',
    cover: 'https://i.imgur.com/RH6hTWG.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-m5bjvo1',
    title: 'Музыка Кино International [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://kino-1.catcast.tv/content/37739/index.m3u8',
    cover: 'https://i.imgur.com/2SG0Swa.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-6es43dy',
    title: 'Музыка Первого (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://31.148.48.15/Muzika_Pervogo/index.m3u8',
    cover: 'https://i.imgur.com/U0vKj3P.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-0unl5hm',
    title: 'о2тв (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://31.148.48.15/O2_HD/index.m3u8',
    cover: 'https://i.imgur.com/CM6z7fA.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-e95cjms',
    title: 'Первый Музыкальный Канал HD (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://rtmp.one.by:1300',
    cover: 'https://i.imgur.com/YdyFJrl.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-9izg6c0',
    title: 'Первый Музыкальный Канал Россия HD (1080p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://rtmp.one.by:2300',
    cover: 'https://i.imgur.com/rEo7nR1.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-8k5a1p6',
    title: 'Радио Хит (Орск) (720p)',
    author: 'Music Clips',
    type: 'video',
    url: 'http://lova.me/hls/hithd.m3u8',
    cover: 'https://i.imgur.com/5xKqV1s.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-ntmaz2v',
    title: 'Радио Шансон (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'http://chanson-video.hostingradio.ru:8080/hls/chansonabr/live.m3u8',
    cover: 'https://i.imgur.com/lbqM3K2.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-o5vzl82',
    title: 'Сити Эдем Meditation Music [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/47410/index.m3u8',
    cover: 'https://i.imgur.com/HPWevWb.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-tu87vui',
    title: 'Сити Эдем Play Христианский Музыкальный [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/34100/index.m3u8',
    cover: 'https://i.imgur.com/ozEqob9.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-alehpen',
    title: 'Сити Эдем Бирма Play [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/34364/index.m3u8',
    cover: 'https://i.imgur.com/38Q5L5W.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-czr32uq',
    title: 'Сити Эдем Классическая Музыка [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/47400/index.m3u8',
    cover: 'https://i.imgur.com/l7BE8l6.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-k29uacl',
    title: 'Сити Эдем Сиртаки ТВ [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/46421/index.m3u8',
    cover: 'https://i.imgur.com/V3MTfyc.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-b19vfgm',
    title: 'Страна FM (720p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'http://live.stranafm.cdnvideo.ru/stranafm/stranafm_hd.sdp/playlist.m3u8',
    cover: 'https://i.imgur.com/WsPlKJJ.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-uozi0df',
    title: 'УТРК Музыка (480p) [Not 24/7]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://st2.mediabay.tv/KG_KTRK-Muzika/index.m3u8',
    cover: 'https://www.utrk.kg/img/stream/45.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-iri3m58',
    title: 'Шансон ТВ (576p) [Geo-blocked]',
    author: 'Music Clips',
    type: 'video',
    url: 'https://uiptv.do.am/1ufc/602079679/playlist.m3u8',
    cover: 'https://i.imgur.com/Fk4sd8t.png',
    description: '24/7 Music Clips Stream',
    category: 'Music Clips'
  },
  {
    id: 'vid-gf4ihys',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Movies",24 Hour Free Movies (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://d1b5mlajbmvkjv.cloudfront.net/v1/master/9d062541f2ff39b5c0f48b743c6411d25f62fc25/UDU-DistroTV/145.m3u8?ads.vf=7FhdsxqVxOi',
    cover: 'https://i.imgur.com/iSVnzR1.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-k0uldwx',
    title: '27 TwentySeven [Geo-blocked]',
    author: 'Cinema',
    type: 'video',
    url: 'https://live2.msf.cdn.mediaset.net/content/hls_h0_cls_vos/live/channel(ts)/index.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Twentyseven_logo.svg/960px-Twentyseven_logo.svg.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-hm5c23x',
    title: '30A TV Classic Movies (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://30a-tv.com/feeds/pzaz/30atvmovies.m3u8',
    cover: 'https://babaktv.com/wp-content/uploads/2023/09/30A-Classi-Movies.jpeg',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-u023zd7',
    title: '312 Кино (406p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://176.126.166.43:1935/live/312kino/playlist.m3u8',
    cover: 'https://i.ibb.co/3m9LrLj/k7gIibH.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-ud7na2a',
    title: '&flix HD (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/1322.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SYMANDFLIX/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-7qm9i8a',
    title: '&pictures HD (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/185.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/GNLZZGG0022J67R.png?lock=720x540',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-9cuxx9j',
    title: '&TV (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.229.254.25:7001/play/a09v/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SYMANDTV/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-5l2ze51',
    title: '&TV International (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://amg01117-amg01117c1-amgplt0029.playout.now3.amagi.tv/playlist/amg01117-amg01117c1-amgplt0029/playlist.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SYMANDTV/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-s139xz7',
    title: '&xplor HD (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a001/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SYMANDXPLOR_HD/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-rvu8dd7',
    title: 'ABN Bible Movies (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://mediaserver.abnvideos.com/streams/abnbiblemovies.m3u8',
    cover: 'https://i.imgur.com/NCqZdaL.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-jmvvkzi',
    title: 'Action 24 (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://actionlive.siliconweb.com/actionabr/actiontv/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Action24-logo-small.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-qhadfqj',
    title: 'Afghan Nobel Movies (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://live.relentlessinnovations.net:1936/afghannobel/afghannobel/playlist.m3u8',
    cover: 'https://i.ibb.co/zfdbVSm/logo-1.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-cxfj7vl',
    title: 'Aflam (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx001/playlist.m3u8',
    cover: 'https://i.imgur.com/cTLj7Yt.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-jim0pnx',
    title: 'Afra Film',
    author: 'Cinema',
    type: 'video',
    url: 'https://afrafhls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-i2jc67h',
    title: 'Afriwood Blockbuster (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://streamdot.broadpeak.io/cff02a74da64d145c102a2d012758398/afxpstr/AfriwoodBlockbuster/index.m3u8',
    cover: 'https://i.imgur.com/aESdqiB.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-t6soqfh',
    title: 'Alankar TV (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://livetv.tarangplus.in/alankar-origin/live/playlist.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ALANKAR/images/LOGO_HD/image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-dru20g9',
    title: 'Alien Nation by DUST (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://dqi7ayt2o24fn.cloudfront.net/playlist.m3u8',
    cover: 'https://i.imgur.com/FxYhME9.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-b92mi6w',
    title: 'All Time Movies (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://mumt03.tangotv.in/ALLTIMEMOVIES/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ALL_TIME_MOVIES/images/LOGO_HD/image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-0321wnn',
    title: 'alpha Cinema (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://live.15plusmg.ru/memfs/b389173a-df4e-4171-8904-e249893e71eb.m3u8',
    cover: 'https://i.imgur.com/146OgfU.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-mccdhrf',
    title: 'alpha Moretime (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://live.15plusmg.ru/memfs/3546fc09-2eba-459d-9a1f-9a2fc39e50bd.m3u8',
    cover: 'https://i.imgur.com/ibQfUr7.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-9oozo0e',
    title: 'Alterna TV (720p) [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://tv.alterna.ar/stream/hls/live.m3u8',
    cover: 'https://tv.alterna.ar/alternatv.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-hztfgnw',
    title: 'Amedia Hit (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://31.148.48.15/Amedia_HIT_HD/index.m3u8',
    cover: 'https://i.imgur.com/a8ZBGBw.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-1bi8oiz',
    title: 'Amedia Premium (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://31.148.48.15/Amedia_Premium_HD/index.m3u8',
    cover: 'https://i.imgur.com/UUjehw9.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-427n07d',
    title: 'American Horrors (480p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://107.167.7.162:8081/playlist/amhor/playlist.m3u8',
    cover: 'https://image.roku.com/developer_channels/prod/16f5571a82819e8992a748c70b256cbe63105f4b546b73d129668dc2cb701d91.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-e9xpito',
    title: 'like Gecko) Chrome/147.0.0.0 Safari/537.36" group-title="Movies",Anmol Cinema (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.175.73.12:8080/live/271/271_0.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/GNLZZGG00260YG8.png?lock=720x540',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-5ut9m49',
    title: 'like Gecko) Chrome/147.0.0.0 Safari/537.36" group-title="Movies",Anmol Cinema 2 (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.175.73.12:8080/live/257/257_0.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZEE_ANMOL_CINEMA_2/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-ohggtt8',
    title: 'Artflix Movie Classics (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://amogonetworx-artflix-1-nl.samsung.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/5pOZQB4.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-hbb43sn',
    title: 'Asianet Movies (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://anet.keralive.workers.dev/v1/master/a0d007312bfd99c47f76b77ae26b1ccdaae76cb1/asianetmovies_live_https/index.m3u8',
    cover: 'https://i.imgur.com/cps67hs.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-7zoghtf',
    title: 'Asianet Movies HD (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a06e/index.m3u8',
    cover: 'https://i.imgur.com/cps67hs.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-j8ecuvh',
    title: 'Atrescine (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://181.114.57.246:4000/play/KgkA9tT2SpLYm86J/index.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Atrescine_logo.svg/960px-Atrescine_logo.svg.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-zc10f2b',
    title: 'Aurora Media Films (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://cdn.streamhispanatv.net:3417/live/auroramflive.m3u8',
    cover: 'https://i.imgur.com/DVC5w6H.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-bqis1cq',
    title: 'AXN Asia Indonesia (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://indihuy.streamized.net/atm/DASH/axn/manifest.mpd',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/AXN_logo_%282015%29.svg/960px-AXN_logo_%282015%29.svg.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-ar5l3dw',
    title: 'B4U Bhojpuri (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://cdnb4u.wiseplayout.com/B4U_Bhojpuri/master.m3u8',
    cover: 'https://i.imgur.com/NwOQUDp.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-k2j094j',
    title: 'B4U Kadak (1080p) [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://cdnb4u.wiseplayout.com/B4U_Kadak/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s142695_ld_h15_aa.png?lock=720x540',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-jr9tjrq',
    title: 'B4U Movies (1080p) [Geo-blocked]',
    author: 'Cinema',
    type: 'video',
    url: 'https://amg00877-b4unew-amg00877c2-lg-in-5260.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/M9kMFJl.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-iebatmq',
    title: 'Bhojpuri Cinema (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://live-bhojpuri.akamaized.net/liveabr/playlist.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_BHOJPURI_CINEMA/images/LOGO_HD/image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-c6udqm9',
    title: 'BIZ Cinema (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://fl.biztv.media/cinema_720_EMfSyXgoRdiIHgldXTZICucKTIeCKO/index.m3u8',
    cover: 'https://biztv.uz/static/media/biz-cinema.286b83dc.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-45hko2w',
    title: 'Bollywood Classic (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.213.31.109:90/BollywoodClassic/playlist.m3u8',
    cover: 'https://i.imgur.com/ugPo6ca.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-xyvb8z4',
    title: 'Bollywood HD (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.213.31.109:90/BollywoodHD/playlist.m3u8',
    cover: 'https://i.imgur.com/scDKOLS.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-rrqerrq',
    title: 'Bollywood HD Russia (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://xykt-fix.github.io/cinerama_edge01/hls/BOLLYWOOD_RU/Movie009.m3u8',
    cover: 'https://i.imgur.com/scDKOLS.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-ea7dahe',
    title: 'Bom Cine (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://92.176.119.180:2095/play/a17f',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Logo-bom.svg/960px-Logo-bom.svg.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-x1xs851',
    title: 'Boreal (720p) [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://edge.essastream.com/borealtelevision/tracks-v1a1/mono.m3u8',
    cover: 'https://i.imgur.com/KSquHTG.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-u594m5e',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Movies",Box Cinema (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://d3s7x6kmqcnb6b.cloudfront.net/d/distro001a/QK2TKFREGRYXDI8IJGHW/hls3/now,-1m/m.m3u8?ads.vf=l_Bw4LbbQO8',
    cover: 'https://i.imgur.com/LGJlmtp.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-5nq2em7',
    title: 'Bravo Farsi TV (360p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://bravoohls.wns.live/hls/stream.m3u8',
    cover: 'https://i.ibb.co/yynxRTS/Bravo-Farsi.jpg',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-vji50sa',
    title: 'Cafe Film',
    author: 'Cinema',
    type: 'video',
    url: 'https://cafefhls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-aqpd5rp',
    title: 'CCTV-6 (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://198.204.240.250:82/live/cctv6.m3u8',
    cover: 'https://i.imgur.com/rFiaef7.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-05etn92',
    title: 'CCTV-Storm Theater (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://38.75.136.137:98/gslb/dsdqpub/fyjc.m3u8?auth=testpub',
    cover: 'https://i.imgur.com/rEttkKm.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-dn6glt0',
    title: 'CCTV-The First Theater (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://38.75.136.137:98/gslb/dsdqpub/dyjc.m3u8?auth=testpub',
    cover: 'https://i.imgur.com/eFxD3hq.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-8g6x49a',
    title: 'Celestial Movies (576i)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.58.160.157:8278/720-CELESTIALMOVIES/playlist.m3u8',
    cover: 'https://i.imgur.com/Mb5ssnu.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-x877npi',
    title: 'Charge! (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://fast-channels.sinclairstoryline.com/CHARGE/index.m3u8',
    cover: 'https://i.imgur.com/1rxmu2u.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-tylaeto',
    title: 'CINDIE TV (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://d20xuwbyc4yoag.cloudfront.net/v1/master/9d062541f2ff39b5c0f48b743c6411d25f62fc25/DistroTV-MuxIP-CINDIE/387.m3u8?ads.vf=grWTpG3NQNi',
    cover: 'https://a.jsrdn.com/hls/23208/cindie-tv/logo_20250225_222520_68.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-uimgnxx',
    title: 'Cine 34 [Geo-blocked]',
    author: 'Cinema',
    type: 'video',
    url: 'https://live3-mediaset-it.akamaized.net/Content/hls_h0_clr_vos/live/channel(b6)/index.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cine34_logo.svg/960px-Cine34_logo.svg.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-xcxl7p6',
    title: 'Cine Romantico (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://d1si3n1st4nkgb.cloudfront.net/10502/88886011/hls/master.m3u8?ads.xumo_channelId=88886011',
    cover: 'https://i.imgur.com/FUrrDrb.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-7nd3b44',
    title: 'Cine Sony (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://a-cdn.klowdtv.com/live1/cine_720p/playlist.m3u8',
    cover: 'https://i.imgur.com/bZWoDTg.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-aaujsl5',
    title: 'like Gecko) Chrome/144.0.0.0 Safari/537.36" group-title="Movies",Cinema (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://cdn4.skygo.mn/live/disk1/CinemaTV/DASH-FTA/CinemaTV.mpd',
    cover: 'https://i.imgur.com/yib6dM2.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-1vgjp3f',
    title: 'Cinema',
    author: 'Cinema',
    type: 'video',
    url: 'http://catchup.videoline.ru/cinema/playlist.m3u8',
    cover: 'https://i.imgur.com/b5e9qUA.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-uw9gjtu',
    title: 'Cinema Hausa (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://streamdot.broadpeak.io/cff02a74da64d1459eeb779df71f0511/afxpstr/CinemaHausa/index.m3u8',
    cover: 'https://i.imgur.com/uV5cHDW.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-nzmbyso',
    title: 'CinemaWorld (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.58.160.157:8278/720-CINEMAWORLD/playlist.m3u8',
    cover: 'https://i.imgur.com/D2qNVZ7.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-on37m3v',
    title: 'Cinevault 80s (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://aegis-cloudfront-1.tubi.video/ea1ab5d1-f554-4f6b-b03f-2611fcd94257/playlist.m3u8',
    cover: 'https://i.imgur.com/xaCyyDd.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-4jpvcb0',
    title: 'Classic Cinema (240p) [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://rpn.bozztv.com/gusa/gusa-classiccinema/index.m3u8',
    cover: 'https://i.imgur.com/FJoPnTb.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-x7ev8vq',
    title: 'Classique TV (360p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://stmv1.srvif.com/classique/classique/playlist.m3u8',
    cover: 'https://i.imgur.com/rHxcraT.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-erebvz1',
    title: 'Colors Bangla Cinema (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/1657.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_COLORS_BANGLA_CINEMA/images/LOGO_HD/image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-i8bereq',
    title: 'Colors Cineplex (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.122.249.134:8000/play/a058',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_COLORS_CINEPLEX/images/LOGO_HD/image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-fyuylwu',
    title: 'Colors Cineplex Bollywood (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/1763.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_COLORS_CINEPLEX_BOLLYWOOD/images/LOGO_HD/image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-w0oqj3y',
    title: 'Colors Cineplex HD (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a00b/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_COLORS_CINEPLEX_HD/images/LOGO_HD/image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-xowefff',
    title: 'Colors Cineplex Superhits (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/1450.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_COLORS_CINEPLEX_SUPERHITS/images/LOGO_HD/image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-u0hmr31',
    title: 'Colors Gujarati Cinema (360p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/1324.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_COLORS_GUJARATI_CINEMA/images/LOGO_HD/image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-a6ad3pf',
    title: 'Colors Kannada Cinema (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/1632.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_COLORS_KANNADA_CINEMA/images/LOGO_HD/image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-u7pmljv',
    title: 'CTB Perth Movies (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://movies.ctbperth.net.au/hls/stream.m3u8',
    cover: 'https://i.imgur.com/VB8gtCy.jpeg',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-ti73azw',
    title: 'De Pelicula Latin America',
    author: 'Cinema',
    type: 'video',
    url: 'http://181.119.93.83:8000/play/a1jw/index.m3u8',
    cover: 'https://i.imgur.com/aksM8pa.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-mc9fqdy',
    title: 'Dhamaka Movies B4U (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/235/master.m3u8',
    cover: 'https://static.wikia.nocookie.net/logopedia/images/8/8c/Dhamaka_Movies.jpg',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-siycfkf',
    title: 'DiscoverFilm (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://discoverfilm-discoverfilm-1-gb.samsung.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/oMnpsQ5.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-4odm0j0',
    title: 'Dunia Sinema (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://unifi-live05.secureswiftcontent.com/UnifiHD/live27-1080FHD.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-si7lv94',
    title: 'Ebony TV by Lionsgate (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://aegis-cloudfront-1.tubi.video/a0ad4b53-ab3a-48dd-be12-bc7f533c372c/playlist.m3u8',
    cover: 'https://provider-static.plex.tv/epg/cms/production/234d5377-ab07-41bf-acd6-34c17c1c051a/EbonyTV_Plex_Logo_Light_1500x1000.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-j5uffzs',
    title: 'EBS Cinema (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://rpn.bozztv.com/ebstv/ebscinema/index.m3u8',
    cover: 'https://i.imgur.com/fewPTFE.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-tt8qwid',
    title: 'Eisei Gekijo (544p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs22',
    cover: 'https://yt3.googleusercontent.com/d5yMuTHpdKEjTqXDEnS-iYo_AaKwuwYtHRs3gbLB9Hg8j_XtXyUXOeKxetptLhz85SciuA5i=s512-c-k-c0x00ffffff-no-rj',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-5yfbpyk',
    title: 'Ekran Movies',
    author: 'Cinema',
    type: 'video',
    url: 'https://ca-rt.onetv.app/EkranMovies/index-0.m3u8?token=onetv202',
    cover: 'https://i.ibb.co/WNyssx28/Screenshot-2025-05-18-211143.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-pmcup44',
    title: 'Epic Bhojpuri (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/3384.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/GNLZZGG0032BVJ8.png?lock=720x540',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-2eq32tc',
    title: 'ETV Cinema HD (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://d27zlkxhgwrfgo.cloudfront.net/v1/master/9d43eacaed199f8d5883927e7aef514a8a08e108/ETV_CINEMA_H264_cloud_in/index.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143026_ld_h15_aa.png?lock=720x540',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-cgfq3bs',
    title: 'FAN (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://31.148.48.15/Fan/index.m3u8',
    cover: 'https://i.imgur.com/mDeTbaF.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-68cwmpj',
    title: 'Film4 (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://80.194.62.172:50002/stream/channelid/1764271106',
    cover: 'https://i.imgur.com/MTSgoGI.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-lg4xn0g',
    title: 'Film4 HD (1080p) [Geo-Blocked]',
    author: 'Cinema',
    type: 'video',
    url: 'https://viamotionhsi.netplus.ch/live/eds/film4/browser-HLS8/film4.m3u8',
    cover: 'https://i.imgur.com/MTSgoGI.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-d36nq6b',
    title: 'Filmax (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://s3.ideationtec.live/Filmax/Filmax.m3u8',
    cover: 'https://i.imgur.com/eLmdZ6k.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-00ybjq5',
    title: 'Filmazia (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.250.28.74:8000/play/a02k/index.m3u8',
    cover: 'https://i.imgur.com/hpTCANa.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-qhrvxod',
    title: 'Filmex (Xumo) (1080p) [Geo-blocked]',
    author: 'Cinema',
    type: 'video',
    url: 'https://filmex-filmex-xumo.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/Hiz2OyC.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-34ch5io',
    title: 'Filmex Clásico (1080p) [Geo-blocked]',
    author: 'Cinema',
    type: 'video',
    url: 'https://filmex-filmexclasico-xumo.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/D3dj4mv.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-dshxaut',
    title: 'FilmRise Westerns (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://dz05z8iljgvbe.cloudfront.net/master.m3u8',
    cover: 'https://i.imgur.com/8j2npVc.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-lasv17c',
    title: 'Forensic Files (720p) [Geo-blocked]',
    author: 'Cinema',
    type: 'video',
    url: 'https://pb-x9qsxrudiq9d2.akamaized.net/webvtt/v1/18584c3f3a2a4df8/88886014/master.m3u8',
    cover: 'https://i.imgur.com/8j2npVc.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-ygiupix',
    title: 'FX Movie Channel (720p) [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://tvpass.org/live/FXMovieChannel/hd',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/FXM_Logo.svg/960px-FXM_Logo.svg.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-p2anvhl',
    title: 'GEM Bollywood',
    author: 'Cinema',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gembollywood/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/2XASeBk.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-is2qlav',
    title: 'GEM Drama',
    author: 'Cinema',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemdrama/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/k2pGyRH.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-r5s1u8z',
    title: 'GEM Drama Plus',
    author: 'Cinema',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemdramaplus/index-0.m3u8?token=onetv202',
    cover: 'https://gemgroup.tv/assets/images/channels/icon_7.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-phyqlrg',
    title: 'GEM Film',
    author: 'Cinema',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemfilm/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/nrFz3LU.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-dllvou0',
    title: 'GEM Onyx',
    author: 'Cinema',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemonyx/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/gXRIAw4.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-q7din9a',
    title: 'GEM Pixel',
    author: 'Cinema',
    type: 'video',
    url: 'https://glserver1.tamashaland.com/live/aBCH96886YznRbGOiqTnnQ__/stream_0.m3u8',
    cover: 'https://i.ibb.co/Q3tkbPrn/icon-27.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-9k7s9q9',
    title: 'GEM Rubix',
    author: 'Cinema',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemrubix/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/cDjOj58.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-p7ara6g',
    title: 'GEM Rubix Plus',
    author: 'Cinema',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemrubixplus/index-0.m3u8?token=onetv202',
    cover: 'https://gemgroup.tv/assets/images/channels/icon_31.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-n6hh98w',
    title: 'GEM TV',
    author: 'Cinema',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gem/index-0.m3u8?token=onetv202',
    cover: 'https://gemgroup.tv/assets/images/channels/icon_16.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-2yb9ehy',
    title: 'GEM TV Plus',
    author: 'Cinema',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemtvplus/index-0.m3u8?token=onetv202',
    cover: 'https://gemgroup.tv/assets/images/channels/icon_17.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-yapi9d9',
    title: 'Ghost TV (712p) [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://stmv.video.expressolider.com.br/ghostv/ghostv/playlist.m3u8',
    cover: 'https://i.imgur.com/ZVO8GVI.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-mdwfi4b',
    title: 'Gold Star',
    author: 'Cinema',
    type: 'video',
    url: 'https://moviethls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-mv8ligh',
    title: 'Goldmines (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://cdn-2.pishow.tv/live/1459/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_GOLDMINES/images/LOGO_HD/image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-t75jage',
    title: 'Goldmines 2 (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://cdn-2.pishow.tv/live/1460/master.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-9bqksml',
    title: 'Goldmines Movies (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.213.31.109:90/GoldminesMovies/playlist.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s142881_ld_h15_aa.png?lock=720x540',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-e0cx0s8',
    title: 'Grand Cinema',
    author: 'Cinema',
    type: 'video',
    url: 'https://gcinemahls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-01dvunz',
    title: 'Gravitas Movies (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://d6dg3ebeih71x.cloudfront.net/Gravitas_Movies.m3u8',
    cover: 'https://i.imgur.com/H2hD4vT.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-87iug0q',
    title: 'GREAT! movies (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://amg01753-narrativeuk-amg01753c3-lg-gb-1833.playouts.now.amagi.tv/playlist/amg01753-narrativeuk-greatmovies-lggb/playlist.m3u8',
    cover: 'https://d2n0069hmnqmmx.cloudfront.net/epgdata/1.0/newchanlogos/512/512/skychb3709.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-izk0x62',
    title: 'GREAT! romance (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://amg01753-narrativeuk-amg01753c2-lg-gb-1832.playouts.now.amagi.tv/playlist/amg01753-narrativeuk-greatchristmas-lggb/playlist.m3u8',
    cover: 'https://d2n0069hmnqmmx.cloudfront.net/epgdata/1.0/newchanlogos/512/512/skychb3643.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-cacysk2',
    title: 'Grjngo Western Movies (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://amogonetworx-grjngo-3-dk.samsung.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/wFqhK3p.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-0esi6p6',
    title: 'Groovy TV (360p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://web.onair-radio.eu:1935/groovytv/groovytv/playlist.m3u8',
    cover: 'https://i.imgur.com/ZYNQuf1.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-mgjam8x',
    title: 'Hallmark Movies & More (1080p) [Geo-blocked]',
    author: 'Cinema',
    type: 'video',
    url: 'https://pb-clwlfvkqpn19r.akamaized.net/Hallmark_Movies_&_More.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-jjskrtm',
    title: 'Hallmark Movies & Mysteries East (1080p) [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://tvpass.org/live/HallmarkMoviesMysteriesEast/hd',
    cover: 'https://i.imgur.com/GPRGA9C.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-e9sl46p',
    title: 'Harbin Movie Channel',
    author: 'Cinema',
    type: 'video',
    url: 'https://stream.hrbtv.net/yspd/playlist.m3u8',
    cover: 'https://www.tvchinese.net/uploads/tv/haerbin.jpg',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-a40jmgf',
    title: 'Hero (720p) [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://live-fi.tvkaista.net/hero/live.m3u8?hd=true',
    cover: 'https://i.imgur.com/4t5JQLY.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-niktrsv',
    title: 'HITS Movies HD (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://cdn10jtedge.indihometv.com/atm/DASH/hitsmovie/manifest.mpd',
    cover: 'https://i.imgur.com/kyE3vXf.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-odamttc',
    title: 'Hollywood HD (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://31.148.48.15/MGM_HD/index.m3u8',
    cover: 'https://i.imgur.com/1j7cT2I.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-dmi0ntn',
    title: 'Home Plus',
    author: 'Cinema',
    type: 'video',
    url: 'https://homeplushls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-zrfxqcs',
    title: 'ICC Plus (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://icchls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-5xhj014',
    title: 'IFC East (720p) [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://tvpass.org/live/IFCEast/hd',
    cover: 'https://i.imgur.com/bQdkyF9.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-xuvdhk4',
    title: 'iFilm 2',
    author: 'Cinema',
    type: 'video',
    url: 'https://live.presstv.ir/hls/ifilm2.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/fa/c/ce/Ifilm2logo.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-dnmaylm',
    title: 'iFilm Arabic',
    author: 'Cinema',
    type: 'video',
    url: 'https://live.presstv.ir/hls/ifilmar.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/IFILM.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-67rtmzi',
    title: 'iFilm English',
    author: 'Cinema',
    type: 'video',
    url: 'https://live.presstv.ir/hls/ifilmen.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/IFILM.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-skue2f8',
    title: 'iFilm Persian',
    author: 'Cinema',
    type: 'video',
    url: 'https://live.presstv.ir/hls/ifilmfa.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/IFILM.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-mhpcgmn',
    title: 'Indywood TV (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://43wrzjnpqoxe-hls-live.wmncdn.net/indywood/indywoodtv/index.m3u8',
    cover: 'https://i.ibb.co/jT3NCPp/logo-tv.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-4co4gte',
    title: 'Itage TV (480p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://viewmedia7219.bozztv.com/wmedia/viewmedia100/web_011/Stream/playlist.m3u8',
    cover: 'https://i.imgur.com/FP1aUPw.jpg',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-5xhdl5c',
    title: 'J Movie (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/417.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_J_MOVIES/images/LOGO_HD/image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-qoge15k',
    title: 'Jalsha Movies HD (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.229.254.25:7001/play/a0dt/index.m3u8',
    cover: 'https://i.imgur.com/25eWjX2.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-uvfgo15',
    title: 'Jiangxi Movie Channel',
    author: 'Cinema',
    type: 'video',
    url: 'https://play-live-hls.jxtvcn.com.cn/live-city/tv_jxtv4.m3u8',
    cover: 'https://www.tvchinese.net/uploads/tv/jiangxi.jpg',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-tshgmgo',
    title: 'Jilin Movie Channel',
    author: 'Cinema',
    type: 'video',
    url: 'https://lsfb.avap.jilintv.cn/zqvk7vpj/channel/906341e6f19b4c4bacdc89941eb85d12/index.m3u8',
    cover: 'https://www.tvchinese.net/uploads/tv/jlyspd.jpg',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-b18gwkp',
    title: 'Kairali We (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://cdn-3.pishow.tv/live/1530/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_KAIRALI_WE/images/LOGO_HD/image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-l7syom3',
    title: 'KCM (1080p) [Geo-blocked]',
    author: 'Cinema',
    type: 'video',
    url: 'https://amg02159-amg02159c7-samsung-in-4001.playouts.now.amagi.tv/playlist/amg02159-kcglobal-kcm-samsungin/playlist.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/KCM.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-19jxy7l',
    title: 'KidsFlix (1080p) [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=50',
    cover: 'https://i.imgur.com/4Pn0ADQ.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-e974r3j',
    title: 'Kino 24 (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://sirius.greenhosting.ru/Kino24Ru/video.m3u8',
    cover: 'https://i.imgur.com/QAdDARF.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-dbxukyw',
    title: 'Kino Barrandov (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://83.167.253.107/hdmi1_ext',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Kino_Barrandov_logo.png/960px-Kino_Barrandov_logo.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-6twqv0p',
    title: 'Kinoteatr (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://stream8.cinerama.uz/1009/tracks-v1a1/playlist.m3u8',
    cover: 'https://i.imgur.com/emH1BgC.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-r7p8slo',
    title: 'Klasik TV (576p) [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://178.253.194.105/klasiktv/playlist.m3u8',
    cover: 'https://i.imgur.com/C90BYlb.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-jyxm6o1',
    title: 'Komsan TV [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'http://tv.cootel.com.kh:8077/streams/d/Komsan/playlist.m3u8',
    cover: 'https://i.imgur.com/SNTf2r3.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-ceconx3',
    title: 'Kuriakos Cine (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://w2.manasat.com/kcine/smil:kcine.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/CZViCwB.jpg',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-cx6vak8',
    title: 'Lifetime Movies East (720p) [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://tvpass.org/live/LifetimeMoviesEast/hd',
    cover: 'https://i.imgur.com/BWmqYTO.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-fjorlhw',
    title: 'Maah TV (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://hls.maahtv.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/FkyueH6.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-jezz3hd',
    title: 'Made in Hollywood',
    author: 'Cinema',
    type: 'video',
    url: 'https://connection3-ent-nz.samsung.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/p16HNIM.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-ropt5ko',
    title: 'Maha Movie (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://cdn-6.pishow.tv/live/10007/master.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Maha_Movies.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-adim6pb',
    title: 'Manoranjan Grand (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/1011/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143302_ld_h15_aa.png?lock=720x540',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-ao3ilo4',
    title: 'Manoranjan Movies (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.213.31.109:90/ManoranjanMovies/playlist.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143303_ld_h15_aa.png?lock=720x540',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-akdmgtg',
    title: 'Maverick Black Cinema (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://maverick-maverick-black-cinema-3-us.roku.wurl.tv/playlist.m3u8',
    cover: 'https://images.fubo.tv/station_logos/maverick_black_cinema_c.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-djrn255',
    title: 'MAX4 (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://146.59.85.40:89/max4/index.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Max4_logo.png/960px-Max4_logo.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-mg6q39t',
    title: 'Max Movies (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://live.maxtn.in/maxmovies/maxmovies/index.m3u8',
    cover: 'https://livetv.ashokadigital.net/upload/logo/1732168422_WhatsApp%20Image%202024-11-21%20at%2010.18.47%20AM.jpeg',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-kidil96',
    title: 'MAX Reels',
    author: 'Cinema',
    type: 'video',
    url: 'https://indihuy.streamized.net/atm/DASH/useeprime/manifest.mpd',
    cover: 'https://images.maxstream.tv/sites/default/files/entry/0_psqdb637/landscape_carousel_xxhdpi.webp',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-3erwhbl',
    title: 'MBC Bollywood (1080p) [Geo-blocked]',
    author: 'Cinema',
    type: 'video',
    url: 'https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-bollywood/546eb40d7dcf9a209255dd2496903764/index.m3u8',
    cover: 'https://i.imgur.com/TTAGFHG.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-a1i5drs',
    title: 'MBC+ Drama (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-plus-drama/e37251ec2aac8f6c98f75cd0fa37cd28/index.m3u8',
    cover: 'https://i.imgur.com/lxWdjXG.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-anld4j1',
    title: 'MCI Televisión (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://video.ejeserver.com/live/mcitelevision.m3u8',
    cover: 'https://pbs.twimg.com/profile_images/1836009952420274177/FfYonU6r_400x400.jpg',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-du8arih',
    title: 'Mega Cine TV (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://cnn.hostlagarto.com/megacinetv/playlist.m3u8',
    cover: 'https://www.vivalivetv.com/public/files/shows/0/1/2893-294x165-FFFFFF.jpg',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-9xqcskw',
    title: 'Memorias TV Film (720p) [Geo-blocked]',
    author: 'Cinema',
    type: 'video',
    url: 'https://video.xtrematv.com:3725/live/memoriasfilmlive.m3u8',
    cover: 'https://i.imgur.com/vNfjW6Y.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-o2vd8qt',
    title: 'Meta Film TV',
    author: 'Cinema',
    type: 'video',
    url: 'https://metafilmhls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-5scx48n',
    title: 'MH One Movies (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://mumt03.tangotv.in/MHONEMOVIE/index.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-cd0v2kg',
    title: 'Mix Hollywood (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://ml-pull-hwc.myco.io/MixTV/hls/index.m3u8',
    cover: 'https://i.imgur.com/1ENdbZn.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-bp9asuc',
    title: 'like Gecko) Chrome/146.0.0.0 Safari/537.36" group-title="Movies",MN+',
    author: 'Cinema',
    type: 'video',
    url: 'https://cdn4.skygo.mn/live/disk1/MNplus91/HLSv3-FTA/MNplus91.m3u8',
    cover: 'https://new.skytel.mn/uploads/channel/mn-676145a957d06.jpeg',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-qfj411n',
    title: 'MNX HD (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a05u/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_MNX_HD/images/LOGO_HD/image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-c1r2kpy',
    title: 'Movie Bangla',
    author: 'Cinema',
    type: 'video',
    url: 'http://alvetv.com/moviebanglatv/8080/index.m3u8',
    cover: 'https://www.jagobd.com/wp-content/uploads/2016/02/moviebangla.jpg?x50681',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-huhiur1',
    title: 'like Gecko) Chrome/144.0.0.0 Safari/537.36" group-title="Movies",MovieBox (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://cdn4.skygo.mn/live/disk1/Moviebox/DASH-FTA/Moviebox.mpd',
    cover: 'https://i.imgur.com/xeO1Zb4.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-919xcji',
    title: 'Movieplex (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://mumt04.tangotv.in/MOVIEPLEX/index.m3u8',
    cover: 'https://i.imgur.com/THJEAqJ.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-nv4hbot',
    title: 'Movies Action (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx011/playlist.m3u8',
    cover: 'https://i.imgur.com/NIVhISa.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-v18py2f',
    title: 'Movies Now + (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a05t/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_MNSYMPLUS/images/LOGO_HD/image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-d2qgip7',
    title: 'Movies Now HD (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.161.153.165:8000/play/mnh/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_MOVIES_NOW/images/LOGO_HD/image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-phik005',
    title: 'Movies Thriller (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx012/playlist.m3u8',
    cover: 'https://i.imgur.com/JWihdcl.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-pj6r2os',
    title: 'Movies! (480p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://bozztv.com/dvrfl03/hdirect/hdirect-ovair1-movies!/index.m3u8',
    cover: 'https://i.imgur.com/gAGn3mK.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-catj5gk',
    title: 'MovieSmart Turk (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://playhdnewjj.xyz:8080/recc121412/KVqfhtdJ2nQ7/174',
    cover: 'https://i.imgur.com/DWN9ulT.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-cp2dumt',
    title: 'MovieSphere (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://amg00353-lionsgatestudio-moviesphere-xumo-zh5u0.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/h1ejU90.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-pcnfe4l',
    title: 'MovieSphere AU (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://amg00353-lionsgatefilmsi-moviesphereaus-samsungau-7qzhf.amagi.tv/playlist/amg00353-lionsgatefilmsi-moviesphereaus-samsungau/playlist.m3u8',
    cover: 'https://i.imgur.com/h1ejU90.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-1tc1h86',
    title: 'MovieSphere UK (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://moviesphereuk-samsunguk.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/h1ejU90.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-0mvp6x0',
    title: 'Movify Kino (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://void.greenhosting.ru/MovifyKino_Mpeg4/index.m3u8',
    cover: 'https://i.imgur.com/XIk5EJN.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-3tjg27m',
    title: 'like Gecko Chrome/144.0.0.0 Safari/537.36" group-title="Movies",My Cinema [Geo-blocked]',
    author: 'Cinema',
    type: 'video',
    url: 'https://op-group1-swiftservehd-1.dens.tv/h/h192/index.m3u8',
    cover: 'https://i.imgur.com/BTmcTQO.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-rev7axz',
    title: 'like Gecko Chrome/144.0.0.0 Safari/537.36" group-title="Movies",My Cinema Europe [Geo-blocked]',
    author: 'Cinema',
    type: 'video',
    url: 'https://op-group1-swiftservehd-1.dens.tv/h/h18/index.m3u8',
    cover: 'https://i.imgur.com/jz0d8tH.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-2uxim8o',
    title: 'MyTime Movie Network (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://appletree-mytimeuk-rakuten.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/pw4NZK1.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-qymho6m',
    title: 'MyTime Movie Network (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://appletree-mytimeau-samsung.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/HYgxPVQ.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-8ajip8g',
    title: 'MyTime Movie Network Brazil (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://appletree-mytime-samsungbrazil.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/aiGQtzI.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-opt53ci',
    title: 'MyTime Movie Network Mexico (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://appletree-mytime-samsungmexico.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/pw4NZK1.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-rsr33a4',
    title: 'MyTime movie network Spain (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://appletree-mytimespain-rakuten.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/pw4NZK1.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-rl8sl83',
    title: 'NETV Toronto (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://eu1.vectromdigital.com:1936/netvtoronto/netvtoronto/playlist.m3u8',
    cover: 'https://i.imgur.com/WXRBuOW.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-h9zr2xd',
    title: 'NEW KMOVIES (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://ads.its-newid.net/api/manifest.m3u8?tp=samsung_tvplus&channel_id=newid_343&ads.service_id=GB1700007PK',
    cover: 'https://i.imgur.com/wCgirjc.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-4zdt4sj',
    title: 'Newflix',
    author: 'Cinema',
    type: 'video',
    url: 'https://newfhls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-kz1ff7w',
    title: 'Next HD (480p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://live.enhdtv.com:19360/nexthd/nexthd.m3u8',
    cover: 'https://i.imgur.com/c2rF3SS.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-u1ew7lo',
    title: 'Nihon Eiga Senmon (544p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs23',
    cover: 'https://i.imgur.com/B2wzA67.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-z0a1bur',
    title: 'Nolly Africa HD (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://amg02784-amg02784c2-amgplt0002.playout.now3.amagi.tv/ts-eu-w1-n2/playlist/amg02784-amg02784c2-amgplt0002/playlist.m3u8',
    cover: 'https://i.imgur.com/IxtGpti.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-muo087e',
    title: 'One TV Cinema 2 (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://43.252.18.195:5080/live/streams/ChineseDrama.playlist.m3u8',
    cover: 'https://i.imgur.com/H8PiAbA.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-rkc60ro',
    title: 'Orbita Chile TV (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://orbitachiletv.org/hls/0/stream.m3u8',
    cover: 'https://i.imgur.com/gbNh79Z.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-qaw7jco',
    title: 'Oscar Movies Bhojpuri (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://cdn-4.pishow.tv/live/233/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143638_ld_h9_ab.png?lock=720x540',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-qb6d9o2',
    title: 'OSN Movies Action (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://116.90.120.151:8000/play/a0ax/index.m3u8',
    cover: 'https://i.imgur.com/uOzyKup.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-ced6qgu',
    title: 'OuterSphere (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://d3o593mz1glx8d.cloudfront.net/OuterSphere_US.m3u8',
    cover: 'https://provider-static.plex.tv/epg/cms/production/f162df8b-6532-43fe-9202-83a658090651/OuterSphere_1500x1000_Logo_Dark_-_Chris_Connors__1_.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-945dzrw',
    title: 'Pantalla Clásica EC (512p) [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://live21.bozztv.com/akamaissh101/ssh101/pantallaclasics/playlist.m3u8',
    cover: 'https://i.imgur.com/mhbERF9.jpg',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-o40my2j',
    title: 'Persiana Cinema',
    author: 'Cinema',
    type: 'video',
    url: 'https://cinehls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/hgIro9r.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-tc4s84i',
    title: 'Persiana Family',
    author: 'Cinema',
    type: 'video',
    url: 'https://familyhls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/lMZsuWi.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-fbfang7',
    title: 'Persiana Iranian',
    author: 'Cinema',
    type: 'video',
    url: 'https://irhls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/vqrrpBi.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-0xeye1u',
    title: 'Persiana Korea',
    author: 'Cinema',
    type: 'video',
    url: 'https://korhls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/si2ZnIA.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-9p7wat3',
    title: 'Persiana Latino',
    author: 'Cinema',
    type: 'video',
    url: 'https://latinohls.persiana.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-es88lvr',
    title: 'Persiana Plus',
    author: 'Cinema',
    type: 'video',
    url: 'https://euhls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/0xttibX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-trr6m3a',
    title: 'Pitaara (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://vg-pitaaratvlive.akamaized.net/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/vglive-sk-583798/playlist.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PITAARA/images/LOGO_HD/image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-jyyfk5x',
    title: 'Pravah Picture HD (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a06f/index.m3u8',
    cover: 'https://i.imgur.com/T76S4x3.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-3dru1xq',
    title: 'Pro100TV (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://sirius.greenhosting.ru/Pro100tvRu/video.m3u8',
    cover: 'https://i.imgur.com/YfQEflM.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-tizkutw',
    title: 'Public Movies (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://mumt04.tangotv.in/PUBLICMOVIES/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PUBLIC_MOVIES/images/LOGO_HD/image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-ucreqs3',
    title: 'QTV-3',
    author: 'Cinema',
    type: 'video',
    url: 'http://video10.qtv.com.cn/drm/qtv3at/manifest.m3u8',
    cover: 'https://www.tvchinese.net/uploads/tv/qdtv3.jpg',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-kcfxjse',
    title: 'Rai Movie (576p) [Geo-blocked]',
    author: 'Cinema',
    type: 'video',
    url: 'https://mediapolis.rai.it/relinker/relinkerServlet.htm?cont=747002',
    cover: 'https://i.imgur.com/0FjxXU9.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-kbzwr08',
    title: 'Raj Digital Plus (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://livestream.rajtv.tv/hlslive/Admin/px08241087/live/RajTV_Digital_plus/master_1.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_RAJ_DIGITAL_PLUS/images/LOGO_HD/image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-xeqfnmw',
    title: 'Rakuten Top Movies UK (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://0145451975a64b35866170fd2e8fa486.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-5987/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-h2xg29b',
    title: 'Rakuten TV Action Movies Austria (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://0f846627524f4dd2995e93581379db82.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenActionMovies-1/playlist.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-mryn04i',
    title: 'Rakuten TV Action Movies Finland (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://bca5a421a70c46ad911efd0a4767c4bf.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6075/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-9p3i09s',
    title: 'Rakuten TV Action Movies Germany (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://284824cf70404fdfb6ddf9349009c710.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6066/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-xujs06q',
    title: 'Rakuten TV Action Movies Italy (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://87f2e2e5e7624e3bad85da1ca2ed31a7.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6067/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-1h3k5xj',
    title: 'Rakuten TV Action Movies Spain (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://a9c57ec7ec5e4b7daeacc6316a0bb404.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6069/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-wmzmj3d',
    title: 'Rakuten TV Action Movies UK (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://54045f0c40fd442c8b06df076aaf1e85.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6065/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-z7ax2lg',
    title: 'Rakuten TV Comedy Movies Austria (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://7ed752b220a441b7b22bdf697c6c4df8.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenComedyMovies-1/playlist.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-wgsj8xz',
    title: 'Rakuten TV Comedy Movies Finland (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://a300af98e00746e2acf2346f43e47bd1.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6191/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-39rlcnx',
    title: 'Rakuten TV Comedy Movies Germany (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://ecac08c9e2214375b907d6825aaf9a01.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6182/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-6mu4364',
    title: 'Rakuten TV Comedy Movies Italy (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://b8bc6c4b9be64bd6aeb3b92aa8521ed4.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6184/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-yr45ybh',
    title: 'Rakuten TV Comedy Movies Spain (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://71db867f03ce4d71a29e92155f07ab87.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6180/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-47zgprj',
    title: 'Rakuten TV Comedy Movies UK (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://9be783d652cd4b099cf63e1dc134c4a3.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6181/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-njv90i7',
    title: 'Rakuten TV Drama Movies Austria (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://df1aa472ff5b4780a8d91fe319778b4d.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenTVShows-1/playlist.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-wobxjgf',
    title: 'Rakuten TV Drama Movies Finland (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://d7e8ee3c924d4305a0c1840fe94c5d36.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6102/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-5w23uoj',
    title: 'Rakuten TV Drama Movies Germany (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://968754c2483045c1a9a7f677caec35b6.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6096/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-9k8p37x',
    title: 'Rakuten TV Drama Movies Italy (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://f84e0b1628464fab846160df957f269e.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6094/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-p4rihlk',
    title: 'Rakuten TV Drama Movies Spain (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://a7089c89d85f453d850c4a1518b43076.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6092/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-nsphjke',
    title: 'Rakuten TV Drama Movies UK (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://fee09fd665814f51b939b6d106cf5f66.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6093/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-72fwyhe',
    title: 'Rakuten TV Family Movies Austria (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://9fa8baba055e4a52b0a8d1ae7d78bed8.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenFamily-1/playlist.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-r4w784r',
    title: 'Rakuten TV Family Movies Finland (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://758ee983d61e400381dea6fa8154f4e0.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6227/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-bkk37xr',
    title: 'Rakuten TV Family Movies Germany (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://af230031eeac45f3b78d4f8a13265105.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6209/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-lidz5io',
    title: 'Rakuten TV Family Movies Italy (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://3315fc3e7276420f895e19cf807dbee1.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6215/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-glfvfz6',
    title: 'Rakuten TV Family Movies Spain (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://b0d59c8c98974e708e5ccb9a27cdfdfc.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6205/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-1zcf296',
    title: 'Rakuten TV Family Movies UK (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://e3207568b726401995c25670faaf32e4.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6203/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-hrgcb9l',
    title: 'Rakuten TV Family Switzerland (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://a24daf1125344b9cab66eed2fcff8821.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-ch_RakutenFamily-1/playlist.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-f0cj29r',
    title: 'Rakuten TV Nordic Films (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://4aa9ef08b70d4b0c8f3519c5950b1930.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6303/master.m3u8',
    cover: 'https://images-3.rakuten.tv/storage/global-live-channel/translation/artwork/ff79e878-3eea-45fc-b0cd-55d6acce9b18-width200-quality90.jpeg',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-id05xcx',
    title: 'Rakuten TV Top Movies Finland (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://1d1b0d4cb6ae4c31985d13221795695b.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6057/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-3ztwtyy',
    title: 'Rakuten TV Top Movies Germany (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://cbb622b29f5d43b598991f3fa19de291.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-5985/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-vxtvmy3',
    title: 'Rakuten TV Top Movies Italy (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://d4a4999341764c67a67e9ec9eb3790ab.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-5984/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-cuj0ma2',
    title: 'Rakuten TV Top Movies Spain (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://ff335120300e4742a2b135ee9a9e7df8.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-5983/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-3pjxquv',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Movies",Revry Her (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/revry-her/playlist.m3u8?ads.vf=j5eHovd50EC',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/DISTROTV/LIVECHANNEL/66698907bac4421ebc533646/images/logo_20231219_221435_68.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-jcr17tp',
    title: 'Roja Movies (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://stream.rojatv.cloud/rojatv/rojatv/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/rojamovies.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-okbgvqi',
    title: 'Romedy Now (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.157.248.140:8000/play/a015/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ROMEDY_NOW/images/LOGO_HD/image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-xilfvej',
    title: 'Rotana Cinema Egypt (1080p) [Geo-blocked]',
    author: 'Cinema',
    type: 'video',
    url: 'https://rotana.hibridcdn.net/rotananet/cinemamasr_net-7Y83PP5adWixDF93/playlist.m3u8',
    cover: 'https://i.imgur.com/dGlKoLW.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-8kue57o',
    title: 'Rotana Cinema KSA (1080p) [Geo-blocked]',
    author: 'Cinema',
    type: 'video',
    url: 'https://rotana.hibridcdn.net/rotananet/cinema_net-7Y83PP5adWixDF93/playlist.m3u8',
    cover: 'https://i.imgur.com/pGgp38I.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-yjnnioz',
    title: 'RTSH Shqip (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://178.33.11.6:8696/live/rtshshqip/playlist.m3u8',
    cover: 'https://i.imgur.com/88kRsW3.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-np3ggww',
    title: 'Runtime Espanol (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://run-rt-uh-roku.otteravision.com/run/rt_uh/rt_uh.m3u8',
    cover: 'https://i.imgur.com/OMQq19N.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-71qody0',
    title: 'ServusTV (1080p) [Geo-blocked]',
    author: 'Cinema',
    type: 'video',
    url: 'https://stv-live.akamaized.net/hls/live/2031011/lingeoSTVATwebPri/master.m3u8',
    cover: 'https://i.imgur.com/6W637Gn.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-pijgaky',
    title: 'Shemaroo Filmi Gaane (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.213.31.109:90/ShemarooFilmiGaane/playlist.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/channel/0d5b07555b2d4415aa9f145273095ed7.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-3n0r8oc',
    title: 'Shemaroo Josh (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://airtelapp.shemaroo.com/shemarooChumbakTV/smil:shemarooChumbakTVadp.smil/playlist.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/GNLZZGG00297P3E.png?lock=720x540',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-gg77ls7',
    title: 'Shubh Cinema TV (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://d393sxaxig6bax.cloudfront.net/out/v1/589cf2cf44bf42bb941e817a2240d62e/index.m3u8',
    cover: 'https://i.imgur.com/RQhorAG.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-nz4dekr',
    title: 'SL 1',
    author: 'Cinema',
    type: 'video',
    url: 'https://slonehls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/n9cuM2W.jpg',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-zam0bf2',
    title: 'SL 2',
    author: 'Cinema',
    type: 'video',
    url: 'https://sltwohls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/BVuUx5R.jpg',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-m6h0b60',
    title: 'Sony Canal Novelas',
    author: 'Cinema',
    type: 'video',
    url: 'https://a89829b8dca2471ab52ea9a57bc28a35.mediatailor.us-east-1.amazonaws.com/v1/master/0fb304b2320b25f067414d481a779b77db81760d/CanelaTV_SonyCanalNovelas/playlist.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-0za11l2',
    title: 'Sony Max 2 (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a00z/index.m3u8',
    cover: 'https://i.imgur.com/gqUYk6C.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-8o94vnq',
    title: 'Sony One Favoris (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://49d735318d6b4c30a24a7997ea594e1b.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-820-FR-SONYONEFAVORIS-LG_FR/playlist.m3u8',
    cover: 'https://i.imgur.com/RO4AM4b.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-002l7q8',
    title: 'Sony One Hits Action (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://5098a8b860504a3690fd2e7c0a18d68f.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-817-FR-SONYONEHITSACTION-LG_FR/playlist.m3u8',
    cover: 'https://i.imgur.com/pXsZEsR.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-phficaf',
    title: 'Sony One Hits Comedie (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://7aa9671895264ec9a384dfed1b992171.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-818-FR-SONYONEHITSCOMDIE-LG_FR/playlist.m3u8',
    cover: 'https://i.imgur.com/8sHuxxS.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-a5vbef0',
    title: 'Sony Pix HD (1080p) [Geo-blocked]',
    author: 'Cinema',
    type: 'video',
    url: 'https://sl.vodep39240327.workers.dev/channel/SONY%20PIX%20HD.m3u8',
    cover: 'https://i.postimg.cc/Z5G8j67L/PIX-HD-WHITE.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-krub10j',
    title: 'Sony Wah (1080p) [Geo-blocked]',
    author: 'Cinema',
    type: 'video',
    url: 'https://sl.vodep39240327.workers.dev/channel/SONY%20WAH.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SONY_WAH/images/LOGO_HD/image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-ab08tq8',
    title: 'South Station (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://cc-yw7ztecy8do3q.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-yw7ztecy8do3q/SS_IN.m3u8',
    cover: 'https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN3800008CX_20260325T012316SQUARE.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-x7ax92f',
    title: 'Squirrel (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://92.176.119.180:2095/play/a1ey',
    cover: 'https://i.imgur.com/9y8VcBr.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-90x64jf',
    title: 'Star 2 (544p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs27',
    cover: 'https://i.imgur.com/QOriZy5.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-rxkrd2r',
    title: 'Star 3 (544p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs28',
    cover: 'https://i.imgur.com/Z1x8ecY.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-caxzfeh',
    title: 'Star Gold 2 (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.253.18.58:8000/play/a00r',
    cover: 'https://i.imgur.com/G0ZfzZr.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-ejb64ol',
    title: 'Star Gold Romance (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.253.18.58:8000/play/a017',
    cover: 'https://i.imgur.com/gSWv9U3.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-4dglsw1',
    title: 'Star Gold Select HD (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.253.18.58:8000/play/a02u',
    cover: 'https://i.imgur.com/U7eiuqv.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-krqy6tu',
    title: 'Star Gold Thrills (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.253.18.58:8000/play/a00o',
    cover: 'https://i.imgur.com/azqtpYh.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-6dawi6g',
    title: 'Star Maa Movies HD (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://anet.keralive.workers.dev/v1/master/a0d007312bfd99c47f76b77ae26b1ccdaae76cb1/maamovies_live_https/index.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143826_ld_h15_aa.png?lock=720x540',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-yzvkni3',
    title: 'Star Movies HD (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a01f/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_STAR_MOVIES/images/LOGO_HD/image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-lw2glpj',
    title: 'Star Movies Select HD (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a01g/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_STAR_MOVIES_SELECT_HD/images/LOGO_HD/image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-1j6eqk5',
    title: 'Star Tamil Television (360p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://edge4-moblive.yuppcdn.net/trans1sd/smil:strtml19.smil/playlist.m3u8?dvr=',
    cover: 'https://i.imgur.com/fjHcr9z.jpg',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-4q2h4rq',
    title: 'Star Utsav Movies (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a059/index.m3u8',
    cover: 'https://i.imgur.com/k5QHfH2.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-o0lfpdr',
    title: 'START Air',
    author: 'Cinema',
    type: 'video',
    url: 'https://livetv.mylifeisgood.net.ru/channels/strwc.m3u8',
    cover: 'https://i.imgur.com/4bACa7x.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-amkjkc7',
    title: 'START World',
    author: 'Cinema',
    type: 'video',
    url: 'https://livetv.mylifeisgood.net.ru/channels/strvf.m3u8',
    cover: 'https://i.imgur.com/TXtY5eM.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-dt2fvpk',
    title: 'Studio One + (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/276/master.m3u8',
    cover: 'https://i.imgur.com/yOPB7JB.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-fqu5m8g',
    title: 'Suriyan TV (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://stream.sscloud7.com/live/suriyantv/index.m3u8',
    cover: 'https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/transparentImages/Suriyan-tv-logo_2000_X_1125_Transpharent.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-c6v3rrr',
    title: 'T2 Movies',
    author: 'Cinema',
    type: 'video',
    url: 'https://ca-rt.onetv.app/T2Movies/index-0.m3u8?token=onetv202',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-khxp6z6',
    title: 'Tamasha',
    author: 'Cinema',
    type: 'video',
    url: 'https://ncdn.telewebion.ir/hdtest/live/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/fa/thumb/f/f2/IRIB_tamashaTV.svg/960px-IRIB_tamashaTV.svg.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-opd5oxs',
    title: 'TF1 Series Films (1080p) [Geo-Blocked]',
    author: 'Cinema',
    type: 'video',
    url: 'https://viamotionhsi.netplus.ch/live/eds/hd1/browser-HLS8/hd1.m3u8',
    cover: 'https://i.imgur.com/4CJIDKQ.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-s2r0myn',
    title: 'Thalaa TV (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://streams2.sofast.tv/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/2069c593-3c07-4d62-9d44-746be5c3a5d6/manifest.m3u8',
    cover: 'https://d229kpbsb5jevy.cloudfront.net/yuppfast/content/common/channel/logos/thalaa-tv.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-nnoqvw1',
    title: 'The Film Detective (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://cinedigm-entertainment-corp-thefilmdetective-1-us.ono.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/yfOwmsP.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-e4tmrpr',
    title: 'The Movie Club (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://sis-global.prod.samsungtv.plus/v1/tvpprd/sc-mp2ar4ca425xo.m3u8',
    cover: 'https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN38000072R_20260325T012318SQUARE.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-a1dp5dn',
    title: 'The Movie Club +2 (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://d3gnyty2vddhsg.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/pb-ytipwjqub3kf8/TMC2_IN.m3u8?ads.ads_cdn=cf&ads.cdn=cf',
    cover: 'https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN40000100Y_20260204T004058SQUARE.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-xkucrdu',
    title: 'Thrill (540p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://cdn10jtedge.indihometv.com/atm/DASH/thrill/manifest.mpd',
    cover: 'https://i.imgur.com/Y282owj.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-qz677h1',
    title: 'Tolly TV (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://streams2.sofast.tv/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/13b5735d-52c3-4be0-853d-e0ec0127e708/manifest.m3u8',
    cover: 'https://d229kpbsb5jevy.cloudfront.net/yuppfast/content/common/channel/logos/aumnrs.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-rj3ffd3',
    title: 'TVCARiB Cinema (720p) [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://cdn.mycloudstream.io/hls/live/broadcast/l3vslw4i/index.m3u8',
    cover: 'https://i.imgur.com/fvGlwKo.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-ek197ut',
    title: 'TVS Drive In Movie (360p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://rpn.bozztv.com/gusa/gusa-tvsdriveinmovie/index.m3u8',
    cover: 'https://i.imgur.com/OR9APjb.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-6k88esc',
    title: 'TVS Film Noir Network (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://rpn.bozztv.com/trn01/gusa-TVSFilmNoir/index.m3u8',
    cover: 'https://i.imgur.com/A4yWhQw.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-zw29l57',
    title: 'Universal Cinema (480p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://190.2.212.209:8050/play/a0q3',
    cover: 'https://i.imgur.com/XxfET68.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-mne4dbe',
    title: 'Universal Comedy (480p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://190.2.212.209:8050/play/a0q4',
    cover: 'https://i.imgur.com/avBL8pQ.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-qnn6be1',
    title: 'USA Network East (1080p) [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://tvpass.org/live/USANetworkEast/hd',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/USA_Network_logo_%282016%29.svg/960px-USA_Network_logo_%282016%29.svg.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-bjqxz0i',
    title: 'Veo7 (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://92.176.119.180:2095/play/a1f1',
    cover: 'https://i.imgur.com/kklTIMm.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-a1kngd1',
    title: 'Viasat Kino (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://89.254.128.5:22280/viasat_kino/index.m3u8',
    cover: 'https://i.imgur.com/io0WAkA.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-ep5xldc',
    title: 'Viasat Kino Action (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://89.254.128.5:22280/viasat_kino_action/index.m3u8',
    cover: 'https://i.imgur.com/HwsNIDK.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-jx3zy55',
    title: 'Victor Valley Movies (1080p) [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://2-fss-2.streamhoster.com/pl_138/201950-5317556-1/playlist.m3u8',
    cover: 'https://i.imgur.com/zgiuNNj.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-hiky251',
    title: 'Vijay Super (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://202.70.146.135:8000/play/a008/index.m3u8',
    cover: 'https://i.imgur.com/3MWm9nD.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-nkb0gkx',
    title: 'viju TV1000 Русское',
    author: 'Cinema',
    type: 'video',
    url: 'http://31.148.48.15/TV1000_Russkoe_kino/index.m3u8',
    cover: 'https://i.imgur.com/Meak2y4.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-5h7woh7',
    title: 'Whiplash Cinema (480p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://cdn.whiplash.cc/whiplash-cinema/index.m3u8',
    cover: 'https://whiplash.cc/assets/img/channels/whiplashcinema.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-q2b16yb',
    title: 'Wildside TV (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://versatile-wildsidetv-1-fr.samsung.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/cQkfRhH.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-z30nvbs',
    title: 'WOWOW Cinema (544p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs07',
    cover: 'https://i.imgur.com/Wx9fkCW.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-niqiogy',
    title: 'Wu Tang Collection (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://dbrb49pjoymg4.cloudfront.net/10001/99991745/hls/master.m3u8?ads.xumo_channelId=99991745',
    cover: 'https://i.imgur.com/sz55sBl.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-5bsmul1',
    title: 'Xtrema Accion',
    author: 'Cinema',
    type: 'video',
    url: 'https://stmv6.voxtvhd.com.br/cineaccion/cineaccion/playlist.m3u8',
    cover: 'https://i.imgur.com/z5NwizH.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-9zaexq2',
    title: 'Xtrema Cine Clasico',
    author: 'Cinema',
    type: 'video',
    url: 'https://stmv6.voxtvhd.com.br/cineclasico/cineclasico/playlist.m3u8',
    cover: 'https://i.imgur.com/j91M4Yf.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-wvr5fog',
    title: 'Xtrema Terror',
    author: 'Cinema',
    type: 'video',
    url: 'https://stmv6.voxtvhd.com.br/cineterror/cineterror/playlist.m3u8',
    cover: 'https://i.imgur.com/FcaTUym.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-2brrstv',
    title: 'ZB Cinema (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://server.zillarbarta.com/ZBCINEMA/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/ZBCINEMA.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-7pppayn',
    title: 'Zee Action (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/488.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/GNLZZGG0022K5ZV.png?lock=720x540',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-4akhzdw',
    title: 'Zee Biskope (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.154.3.101:5001/live/559.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZEE_BISKOPE/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-nz99jst',
    title: 'Zee Bollymovies (1080p) [Geo-blocked]',
    author: 'Cinema',
    type: 'video',
    url: 'https://amg17931-zee-amg17931c8-samsung-th-6526.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://framerusercontent.com/images/mqfJ18x4jYe0GbZUbxSHsbnWU.png?scale-down-to=512',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-grogkfz',
    title: 'Zee Bollymovies Australia (1080p) [Geo-blocked]',
    author: 'Cinema',
    type: 'video',
    url: 'https://amg17931-zee-amg17931c8-samsung-au-8871.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://framerusercontent.com/images/mqfJ18x4jYe0GbZUbxSHsbnWU.png?scale-down-to=512',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-bnkelrq',
    title: 'Zee Bollywood (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a01q/index.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/GNLZZGG0022T6DM.png?lock=720x540',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-fc84267',
    title: 'Zee Cinema APAC (1080p) [Geo-blocked]',
    author: 'Cinema',
    type: 'video',
    url: 'https://amg17931-zee-amg17931c5-samsung-au-8873.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZEE_CINEMA/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-42ster3',
    title: 'Zee Cinema HD (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/165.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZEE_CINEMA/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-wd4d7jh',
    title: 'Zee Cinemalu (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/413.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/GNLZZGG0022ZNDZ.png?lock=720x540',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-1ysjvfw',
    title: 'Zee Cinemalu HD (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://mumbai-edge.smartplaytv.in/ZeeCinemaluHD/index.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/GNLZZGG0022ZEQ9.png?lock=720x540',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-3ohq995',
    title: 'Zee South Flix (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://amg00862-amg00862c9-amgplt0173.playout.now3.amagi.tv/playlist/amg00862-amg00862c9-amgplt0173/playlist.m3u8',
    cover: 'https://d3bd0tgyk368z1.cloudfront.net/zeelg/LG%20logo%20artwork/400x200/zsouthflix.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-tlia8jw',
    title: 'Zee Talkies HD (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/1358.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZEE_TALKIES/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-vract3s',
    title: 'Zee Thirai HD (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a06d/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZEE_THIRAI/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-bqc40lp',
    title: 'Zylo Cine Friki (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://d2mr4fu91mjx9m.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-rb0tx75ojbc5u/CineFriki_ES.m3u8',
    cover: 'https://i.imgur.com/b3Ospym.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-0tqbn0h',
    title: 'Zylo Ciné Nanar (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://zylo-cinenanar-rakuten.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/YnUZd3W.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-ymovkoj',
    title: 'Zylo Cine Western (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://d2nq34q0i1r3la.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-awohw8g217ho8/CineWestern_ES.m3u8',
    cover: 'https://i.imgur.com/2UROzSc.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-oa1zpeu',
    title: 'Zylo Ciné Western (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://amg00711-zylo-amg00711c8-rakuten-uk-2686.playouts.now.amagi.tv/playlist/amg00711-zylofast-cinewestern-rakutenuk/playlist.m3u8',
    cover: 'https://i.imgur.com/tteOFkL.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-qn3k4fd',
    title: 'Zylo Emotion\' L (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://rakutenaa-zylo-emotional-rakuten-r1zkm.amagi.tv/playlist/rakutenAA-zylo-emotional-rakuten/playlist.m3u8',
    cover: 'https://i.imgur.com/MP34aaj.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-s7o5ekl',
    title: 'Zylo ScreamIN (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://rakutenaa-zylo-screamin-rakuten-p11ej.amagi.tv/playlist/rakutenAA-zylo-screamin-rakuten/playlist.m3u8',
    cover: 'https://i.imgur.com/tGmKbil.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-sb4ftu7',
    title: 'Детское кино International [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://autopilot.catcast.tv/content/38720/index.m3u8',
    cover: 'https://i.imgur.com/dJqFRhQ.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-weqhfjc',
    title: 'Дом Кино',
    author: 'Cinema',
    type: 'video',
    url: 'https://streaming.thestream.cyou/live/44.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%B0_%D0%94%D0%BE%D0%BC_%D0%9A%D0%B8%D0%BD%D0%BE.png/960px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%B0_%D0%94%D0%BE%D0%BC_%D0%9A%D0%B8%D0%BD%D0%BE.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-8p6d6zr',
    title: 'Дом Кино Премиум HD (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://31.148.48.15/Dom_Kino_Premium_HD/index.m3u8',
    cover: 'https://i.imgur.com/rJpQtvK.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-krw62nc',
    title: 'Еврокино (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://31.148.48.15/Evrokino/index.m3u8',
    cover: 'https://i.imgur.com/8LPtPf6.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-e7j8he6',
    title: 'Иллюзион+ (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://31.148.48.15/Illusion_plus/index.m3u8',
    cover: 'https://i.imgur.com/9GvuHQ5.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-2pc1nma',
    title: 'Кинеко (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://31.148.48.15/Kineko_HD/index.m3u8',
    cover: 'https://i.imgur.com/Otfvlmf.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-5fwem5z',
    title: 'Кино 1 International [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'http://kino-1.catcast.tv/content/38617/index.m3u8',
    cover: 'https://i.imgur.com/zsCPLs4.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-1525v7d',
    title: 'КИНО ТВ (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://31.148.48.15/Kino_TV_HD/index.m3u8',
    cover: 'https://i.imgur.com/sMpamNO.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-7kpl90s',
    title: 'Кинопоказ (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://31.148.48.15/Kinopokaz/index.m3u8',
    cover: 'https://i.imgur.com/nNjMyAq.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-savviw4',
    title: 'КИНОСАТ (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://31.148.48.15/Kineko/index.m3u8',
    cover: 'https://i.imgur.com/7KsNvBz.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-g3lsc4r',
    title: 'Новый Русский (720p)',
    author: 'Cinema',
    type: 'video',
    url: 'https://live.15plusmg.ru/memfs/f983b507-a170-41a9-85a9-d9afc6cba9c1.m3u8',
    cover: 'https://i.imgur.com/iuRSScH.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-qk6t3f1',
    title: 'Патриот (576i)',
    author: 'Cinema',
    type: 'video',
    url: 'http://catchup.videoline.ru/asvtv/index.m3u8',
    cover: 'https://patriotkanal.ru/assets/cached/2025/02/resize/264_112_q100_patriot-only-logo.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-slxm360',
    title: 'Родное Кино (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://31.148.48.15/Rodnoe_kino/index.m3u8',
    cover: 'https://i.imgur.com/H70LxoZ.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-mt4v1k6',
    title: 'Русский Бестселлер (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://31.148.48.15/Russkiy_Bestseller/index.m3u8',
    cover: 'https://i.imgur.com/w0ZE9QJ.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-yzh34g3',
    title: 'Русский Детектив (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://31.148.48.15/Russkiy_Detektiv/index.m3u8',
    cover: 'https://i.imgur.com/H3qhN8S.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-7603esq',
    title: 'Русский Иллюзион (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://31.148.48.15/Russkiy_illusion/index.m3u8',
    cover: 'https://i.imgur.com/RlsqFN8.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-af5pha3',
    title: 'Русский Роман (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://31.148.48.15/Russkiy_Roman_HD/index.m3u8',
    cover: 'https://i.imgur.com/cQN0P2B.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-y8q70se',
    title: 'Сити Эдем КиноАзия [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/34393/index.m3u8',
    cover: 'https://i.imgur.com/gaket4B.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-q2r2786',
    title: 'Сити Эдем КиноАрт [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/38398/index.m3u8',
    cover: 'https://i.imgur.com/67CWCtz.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-st0h4wy',
    title: 'Сити Эдем КиноДетектив [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/41327/index.m3u8',
    cover: 'https://i.imgur.com/9rKHwBV.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-9c4rz7y',
    title: 'Сити Эдем КиноДрама [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/45269/index.m3u8',
    cover: 'https://i.imgur.com/29ddffh.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-u1bnh0n',
    title: 'Сити Эдем КиноКлассика [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/34185/index.m3u8',
    cover: 'https://i.imgur.com/0qGCS1S.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-kw6qp27',
    title: 'Сити Эдем КиноКомедия [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/41331/index.m3u8',
    cover: 'https://i.imgur.com/Aga2XVA.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-gnnayqi',
    title: 'Сити Эдем КиноМистика [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/40783/index.m3u8',
    cover: 'https://i.imgur.com/s1Pid0K.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-io7xvtc',
    title: 'Сити Эдем КиноСемья [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://v2.catcast.tv/content/38128/index.m3u8',
    cover: 'https://i.imgur.com/YoWOZMx.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-m3oc5dn',
    title: 'Сити Эдем КиноФантастика [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/45268/index.m3u8',
    cover: 'https://i.imgur.com/I64FeIO.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-0fmro68',
    title: 'Сити Эдем КиноЭкшен [Not 24/7]',
    author: 'Cinema',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/41333/index.m3u8',
    cover: 'https://i.imgur.com/uuzuvD0.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-15byj7o',
    title: 'Смотрим 100% Классика',
    author: 'Cinema',
    type: 'video',
    url: 'https://player.smotrim.ru/iframe/stream/live_id/78a66c7c-df38-4091-b2e1-9eeeb4c96338',
    cover: 'https://i.imgur.com/aASNpKq.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-qyp51do',
    title: 'Феникс плюс Кино (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://31.148.48.15/Feniks_plus_kino/index.m3u8',
    cover: 'https://i.imgur.com/S9OPMLE.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-7kesw5b',
    title: '动作电影 (1080p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://39.134.19.68/dbiptv.sn.chinamobile.com/PLTV/88888888/224/3221226465/index.m3u8',
    cover: 'https://i.imgur.com/AuiVcyh.png',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
  {
    id: 'vid-pzs5hyc',
    title: '江苏影视 (576p)',
    author: 'Cinema',
    type: 'video',
    url: 'http://223.110.243.134/PLTV/4/224/3221225937/index.m3u8',
    cover: 'https://www.tvchinese.net/uploads/tv/jsys.jpg',
    description: '24/7 Cinema Stream',
    category: 'Cinema'
  },
];

export function getPodcasts() {
  return PODCASTS;
}
