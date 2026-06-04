// ========================================
// Video Clips & Music Data
// ========================================

const PODCASTS = [
  {
    id: 'vid-qjmk3z4',
    title: '3ABN Praise Him Music Network',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://3abn.bozztv.com/3abn1/PraiseHim/smil:PraiseHim.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/iBcqT8L.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8q9kckj',
    title: '4 Fun TV (576i) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.4fun.tv:8888/hls/4f_high/index.m3u8',
    cover: 'https://i.imgur.com/rI1wo2l.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-r046f6q',
    title: '4 Kurd',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://4kuhls.persiana.live/hls/stream.m3u8',
    cover: 'https://www.aparatchi.com/images/chanells-logo/4kurd.svg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-c3p200l',
    title: '7 RadioVisione (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream10.xdevel.com/video1s976543-1932/stream/playlist.m3u8',
    cover: 'https://radio7note.com/img/favicon/android-icon-192x192.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nfe4ncn',
    title: '7S Music (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumt03.tangotv.in/Dsly5z3H7SMUSIC/index.m3u8',
    cover: 'https://i.imgur.com/zDiIhdN.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dwzf0ln',
    title: '7 YOU & ME (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream10.xdevel.com/video0s977798-2239/stream/playlist.m3u8',
    cover: 'https://i.imgur.com/Rte2K3x.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-c33bp80',
    title: '8XM (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://115.42.65.142:9981/stream/channelid/582886861',
    cover: 'https://i.imgur.com/KLrfKRn.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-my31fd5',
    title: '9X Jalwa (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://b.jsrdn.com/strm/channels/9xjalwa/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_9X_JALWA/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5m4wfja',
    title: '9X Jhakaas (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://9xjio.wiseplayout.com/9X_Jhakaas/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s90012_ld_h15_aa.png?lock=720x540',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7kvj0b8',
    title: '9X Tashan (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://9xjio.wiseplayout.com/9X_Tashan/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_9X_TASHAN/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-a7bf6sp',
    title: '9XM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://9xjio.wiseplayout.com/9XM/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_9XM/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ye16z4u',
    title: '13 Festival (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://origin.dpsgo.com/ssai/event/Nftd0fM2SXasfDlRphvUsg/master.m3u8',
    cover: 'https://i.imgur.com/Ymk6j5o.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-h8qlpg7',
    title: '15+ Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.15plusmg.ru/memfs/ce3366b1-bf25-4e24-96bb-1adf0d44bd3d.m3u8',
    cover: 'https://i.imgur.com/kj21hwd.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3se4vve',
    title: '30A Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://30a-tv.com/music.m3u8',
    cover: 'https://i.imgur.com/gNWg9tl.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-k3ui1ym',
    title: '51 Radio TV (480p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://wms.shared.streamshow.it/canale51/canale51/playlist.m3u8',
    cover: 'https://www.51news.it/images/loghi/logo_tv_radio_51news.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qpg207a',
    title: '70-80 TV (1080P)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://585b674743bbb.streamlock.net/9050/9050/playlist.m3u8',
    cover: 'https://i.imgur.com/y4kNV3Q.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-13jg8l3',
    title: '88 Stereo (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://k3.usastreams.com/CableLatino/88stereo/playlist.m3u8',
    cover: 'https://i.imgur.com/i3YwORV.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xqwxqqk',
    title: '98.1 Pearl FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live2.tensila.com/pearl-v-1.pearlfm/hls/live/mystream.m3u8',
    cover: 'https://i.imgur.com/GY750xh.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5e0vrt1',
    title: 'A2i Music (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.sen-gt.com/A2iMusic/myStream/playlist.m3u8',
    cover: 'https://i.imgur.com/Fykhzxh.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-jte88sh',
    title: 'Aaryaa TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.ottlive.co.in/aryatvtamil/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/aryatvtamil.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-sj582yw',
    title: 'Abdulmajeed Abdullah (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d2hng5r56zpsbw.cloudfront.net/out/v1/9c4c990f44bb4767bb46271f326dd574/index.m3u8',
    cover: 'https://assets.mbcmood.com/channels/1720184087Abdullah%20Majeed%20Abdullah%20banner.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ro8ax5c',
    title: 'Activa TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamtv.mediasector.es/hls/activatv/index.m3u8',
    cover: 'https://i.imgur.com/VCUZKiw.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ze82yms',
    title: 'ACW UG TV (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.acwugtv.com/hls/stream.m3u8',
    cover: 'https://i.imgur.com/8pzEmcJ.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8nu8fdw',
    title: 'AE Radio TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tls-cl.cdnz.cl/aeradio/live/playlist.m3u8',
    cover: 'https://i.imgur.com/425dj2i.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ebk9c9q',
    title: 'AFN TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://bozztv.com/1gbw5/tintv2/tintv2/playlist.m3u8',
    cover: 'https://i.imgur.com/LctanF8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-smvxzqr',
    title: 'Afrobeats (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.ecable.tv/afrobeats/index.m3u8',
    cover: 'https://i.imgur.com/232ndRK.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-72v6o0r',
    title: 'Aghani Aghani TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn.streamlane.tv/hls/aghanitv/index.m3u8',
    cover: 'https://i.imgur.com/o6HSfNg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mqy8r43',
    title: 'AlbKanale Music TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://albportal.net/albkanalemusic.m3u8',
    cover: 'https://i.imgur.com/JdKxscs.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-699mmo5',
    title: 'Alcance FM PLAY TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.wilohosting.com:19360/alcancefmtv/alcancefmtv.m3u8',
    cover: 'https://i.imgur.com/ymcWecA.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-df7lhkd',
    title: 'Alterna TV (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://tv.alterna.ar/stream/hls/live.m3u8',
    cover: 'https://tv.alterna.ar/alternatv.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-2qbssxq',
    title: 'AMC (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amchls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/yj8RNnG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2p7tza4',
    title: 'Amedia 1 (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://31.148.48.15/A1/index.m3u8',
    cover: 'https://i.imgur.com/2pAHdAi.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-n61oofn',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",AMusic Channel (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d3s7x6kmqcnb6b.cloudfront.net/d/distro001a/LVP8DMYRYH6F6Y5UUO8J/hls3/now,-1m/m.m3u8?ads.vf=McCy6HuluFe',
    cover: 'https://i.imgur.com/06zuf64.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9nfd8ev',
    title: 'Andy Haryana (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumt03.tangotv.in/Dsly5z3HANDYHARYANA/index.m3u8',
    cover: 'https://i.imgur.com/rmCBD3e.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-p71lpu7',
    title: 'Antenne Kaernten (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://60efd7a2b4d02.streamlock.net/a_kaernten/ngrp:livestream_all/playlist.m3u8',
    cover: 'https://i.imgur.com/nUKFDsb.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3ozd647',
    title: 'Antenne Steiermark (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://60efd7a2b4d02.streamlock.net/a_steiermark/ngrp:livestream_all/playlist.m3u8',
    cover: 'https://i.imgur.com/qnappvd.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-c68ll3q',
    title: 'Antenne Vorarlberg (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5857db5306b83.streamlock.net/antennevorarlberg-live/_definst_/mp4:livestream/playlist.m3u8',
    cover: 'https://i.imgur.com/GW750Zc.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-n259u2u',
    title: 'Arabica TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://istream.binarywaves.com:8081/hls/arabica/playlist.m3u8',
    cover: 'https://i.imgur.com/sTOoDy1.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-r4h1s46',
    title: 'ARY Musik (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://arymusik.aryzap.com/3fd38b2c62d0c3bbd74aedabb533c03a/6459fa78/v1/01847ac7a4930b8ed5aa6ed04aba/01847ac8f5f70b8ed5aa6ed04abd/main.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/en/b/bb/ARY_Musik_logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-exz3zbh',
    title: 'ATN Music (360p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/atnmusic.stream/playlist.m3u8',
    cover: 'https://www.jagobd.com/wp-content/uploads/2015/12/atnmusic.jpg?x50681',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-tckzxld',
    title: 'Atomic Academy TV (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://atomic.streamnet.ro/academia.m3u8',
    cover: 'https://i.imgur.com/ZbrDIbZ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-x33nbwa',
    title: 'Atomic TV (360p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://atomic.streamnet.ro/atomictv.m3u8',
    cover: 'https://i.imgur.com/O4uI0Uy.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-x37g6mk',
    title: 'Avang TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls.avang.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/3I1n7fO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ywj4au9',
    title: 'Azahares Radio Multimedia (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamyes.alsolnet.com/azaharesfm/live/playlist.m3u8',
    cover: 'https://i.imgur.com/g1BFoSs.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ub6prst',
    title: 'B4U Hitz (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://115.42.65.142:9981/stream/channelid/1099703605',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wrx32qz',
    title: 'B4U Music (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-2.pishow.tv/live/415/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s158141_ld_h15_aa.png?lock=720x540',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kt0uek1',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",Balle Balle (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/balle-balle/index.m3u8?ads.vf=b8WZfP1_RIy',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Balle_Balle_TV.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2cxrfsw',
    title: 'Baraza TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eco.streams.ovh:8081/barazatv/tracks-v1a1/mono.m3u8',
    cover: 'https://i.imgur.com/TZ1unwF.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bjvenm0',
    title: 'Baraza TV Deep House (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtmp.streams.ovh:1936/barazarelax/barazazararelax/barazarelax/playlist.m3u8',
    cover: 'https://i.imgur.com/TZ1unwF.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-yastoj9',
    title: 'Baraza TV Relaxing (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtmp.streams.ovh:1936/barazarelax/barazarelax/playlist.m3u8',
    cover: 'https://i.imgur.com/TZ1unwF.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xmqufy5',
    title: 'Barbud Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://raw.githubusercontent.com/taodicakhia/IPTV_Exception/master/channels/af/tolomusic.m3u8',
    cover: 'https://i.imgur.com/jbbxu0g.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-a3n5f2g',
    title: 'BE@TTV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv.beatfm.nl/live.m3u8',
    cover: 'https://i.imgur.com/egK33Dj.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-f5d8qcy',
    title: 'Beats Radio (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://videostream.shockmedia.com.ar:19360/beatsradio/beatsradio.m3u8',
    cover: 'https://i.imgur.com/zkNUO5p.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ti9my0u',
    title: 'Bel RTL (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://bel-live-hls.akamaized.net/hls/live/2038650/BEL-Live-HLS/master.m3u8',
    cover: 'https://i.imgur.com/0DUprIW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-39vy1ys',
    title: 'Best of Dance TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://m1b2.worldcast.tv/dancetelevisionone/dancetelevisionone.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0fsfu25',
    title: 'Bibel TV Musik (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://bibeltv03.iptv-playoutcenter.de/bibeltv03/bibeltv03.stream_1/playlist.m3u8',
    cover: 'https://i.imgur.com/yIqOcP5.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fr5qieo',
    title: 'BIZ Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://fl.biztv.media/music_720_QAKpGmVUjaPApCNjpsgBxrdqNihAkl/index.m3u8',
    cover: 'https://i.ibb.co/DfsCJwk/Uz-biz-music-5462.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-b63blhn',
    title: 'BOKTV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livestream2.bokradio.co.za/hls/Bok5c.m3u8',
    cover: 'https://i.imgur.com/mcNjuuO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mxg4aw7',
    title: 'BPX TV Radio',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video1.getstreamhosting.com:1936/8212/8212/playlist.m3u8',
    cover: 'https://i.imgur.com/86VXni8.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lauceu8',
    title: 'Bravo! TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streaming.social3.hr/bravoTVkdjd7djd/XAbSERW5p3/2.m3u8',
    cover: 'https://i.imgur.com/FN2J9hv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4atgc2x',
    title: 'BRIDGE (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://31.148.48.15/Bridge_TV/index.m3u8',
    cover: 'https://i.imgur.com/qYObfrG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ns519pi',
    title: 'BRIDGE Classic (576p)',
    author: 'Ретро / Класика',
    type: 'video',
    url: 'http://31.148.48.15/Bridge_TV_Classic/index.m3u8',
    cover: 'https://i.imgur.com/JJTQq81.png',
    description: '24/7 Ретро / Класика Stream',
    category: 'Ретро / Класика'
  },
  {
    id: 'vid-y1rwlrs',
    title: 'BRIDGE Deluxe (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://31.148.48.15/Bridge_TV_HD/index.m3u8',
    cover: 'https://i.imgur.com/EazL8w7.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-azt26g6',
    title: 'BRIDGE Hits (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://31.148.48.15/Bridge_TV_Dance/index.m3u8',
    cover: 'https://i.imgur.com/sIW9oR4.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-38ykh4h',
    title: 'BTA TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloud.fastchannel.es/manifiest/hls/prog9/btatv.m3u8',
    cover: 'https://i.imgur.com/vygOosC.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-d1crki2',
    title: 'Busuioc TV (540p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://busuioctv.iforward.eu/hls/busuioc.m3u8',
    cover: 'https://i.imgur.com/CQtfBPu.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ah88t29',
    title: 'Cadena Elite (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8004/index.m3u8',
    cover: 'https://i.imgur.com/3yeGDTP.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lgj0xs1',
    title: 'Canal 3 KMK TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live20.bozztv.com/giatv/giatv-KMKTV/KMKTV/chunks.m3u8',
    cover: 'https://i.imgur.com/sgRDRBK.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gqvd5v9',
    title: 'Canal Clave (480p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv.picta.cu/clave/clave_0.m3u8',
    cover: 'https://i.imgur.com/7tMkA4Z.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-g62lcr3',
    title: 'CCTV-11 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://74.91.26.218:82/live/cctv11hd.m3u8',
    cover: 'https://i.imgur.com/CjOWx7L.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-agclzfi',
    title: 'CCTV-15 (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://xykt-fix.github.io/play/a02e/index.m3u8',
    cover: 'https://i.imgur.com/CCV0eRG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-abxhjsn',
    title: 'CCTV-Storm Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://38.75.136.137:98/gslb/dsdqpub/fyyy.m3u8?auth=testpub',
    cover: 'https://i.imgur.com/IiiRmrf.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1gxt6u9',
    title: 'CEACOM TV [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/ceacom/index.m3u8',
    cover: 'https://i.imgur.com/hutdRfk.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-pkmboti',
    title: 'Channel C (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mini.allinonereborn.fun/tata.php?id=11588',
    cover: 'https://i.imgur.com/CnFdLaf.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qw2bg45',
    title: 'City TV (576p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv.city.bg/play/tshls/citytv/index.m3u8',
    cover: 'https://i.imgur.com/mFL452f.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nf65f68',
    title: 'Clubbing TV France',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d1j2csarxnwazk.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-uze1m6xh4fiyr-ssai-prd/master.m3u8',
    cover: 'https://i.imgur.com/MyiA92q.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hky6a13',
    title: 'CMC (California Music Channel) (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cmc-ono.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/L38mC6H.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gsqkwca',
    title: 'CMC TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.cmctv.hr:49998/cmc/live.m3u8',
    cover: 'https://i.imgur.com/FCb7Ag2.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hszi8m1',
    title: 'Company TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5929b138b139d.streamlock.net/CompanyTV/smil:CompanyTV.smil/master.m3u8',
    cover: 'https://i.imgur.com/ccdwsWj.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6bwqrqu',
    title: 'Conecta TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream8.mexiserver.com:19360/conectatvx/conectatvx.m3u8',
    cover: 'https://i.imgur.com/qEk0QGa.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-74vzrzk',
    title: 'Cool FM 98.9 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live2.tensila.com/cool-v-1.arubara/hls/master.m3u8',
    cover: 'https://i.imgur.com/uGE6lZ2.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-j9su2dy',
    title: 'Couleur 3 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtsc3video.akamaized.net/hls/live/2042837/c3video/3/playlist.m3u8',
    cover: 'https://i.imgur.com/VOIwYYd.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5cmdom7',
    title: 'Cumbia Mix (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloud.tvomix.com/CUMBIAMIX/index.m3u8',
    cover: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6901dfd41a05195b77301d7b/b306e57e4_Logo-TV-C.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-omz5iog',
    title: 'D3 TV (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live20.bozztv.com/akamaissh101/ssh101/d3tvnet/playlist.m3u8',
    cover: 'https://i.imgur.com/uFEIBtB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5jl22pe',
    title: 'D Music (1280p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://43.252.18.195:5080/live/streams/WCVNews.playlist.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-r144op0',
    title: 'Dance FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5eaccbab48461.streamlock.net:1936/dancefm_1/dancefm_1/playlist.m3u8',
    cover: 'https://i2.paste.pics/ff3e1e1045a1968dcdbcda3824a94eb3.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hts411z',
    title: 'Dance Television (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://m1b2.worldcast.tv/dancetelevisionone/2/dancetelevisionone.m3u8',
    cover: 'https://pbs.twimg.com/profile_images/1268129322730127364/OJlQBZpS_400x400.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-yz9yrx6',
    title: 'like Gecko Chrome/144.0.0.0 Safari/537.36" group-title="Music",Dance TV [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://op-group1-swiftservehd-1.dens.tv/h/h250/index.m3u8',
    cover: 'https://i.imgur.com/UKMR625.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-12c957k',
    title: 'DanceHits80',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://dancehits80.denvs.ru:8080/index.m3u8',
    cover: 'https://i.imgur.com/uMw3kks.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nrpbh16',
    title: 'DanceTV Algorhythm (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://m2b2.worldcast.tv:7443/dancetelevisionfour/dancetelevisionfour.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9z20f98',
    title: 'DanceTV Deep House District (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://m1b2.worldcast.tv/dancetelevisiontwo/dancetelevisiontwo.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bzxnx1c',
    title: 'DanceTV EDM Mainstage (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mbit1.worldcast.tv/dancetelevisionseven/multibit.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zeoy1b8',
    title: 'DanceTV House Floor (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://m2b2.worldcast.tv:7443/dancetelevisionfive/dancetelevisionfive.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-oxrwxfj',
    title: 'DanceTV Minimal Tech (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mbit1.worldcast.tv/dancetelevisionsix/multibit.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vxwp6pd',
    title: 'DanceTV Techno Warehouse (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://m2b2.worldcast.tv:7443/dancetelevisionthree/dancetelevisionthree.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vu880fs',
    title: 'DASDING 90.8 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://swrdasdingvr-hls.akamaized.net/hls/live/2018681/dasdingvr/master.m3u8',
    cover: 'https://i.imgur.com/BmklHs8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fx7rz2b',
    title: 'DBM TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dbmtv.vedge.infomaniak.com/livecast/dbmtv/playlist.m3u8',
    cover: 'https://i.imgur.com/ab6p2SW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xxfh2pl',
    title: 'DeepHouse District (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu-nl-012.worldcast.tv/dancetelevisiontwo/dancetelevisiontwo.m3u8',
    cover: 'https://i.imgur.com/IV2Qvc0.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dkp0bbs',
    title: 'Dega TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59d39900ebfb8.streamlock.net/saintlouisltv/saintlouisltv/playlist.m3u8',
    cover: 'https://i.ibb.co/ZTYvHyR/DEGA-TV-TELEPACK.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-piihn9a',
    title: 'Deluxe Dance (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://sdn-global-live-streaming-packager-cache.3qsdn.com/64733/64733_264_live.m3u8',
    cover: 'https://i.imgur.com/Qu7t15Y.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gxr083a',
    title: 'Deluxe Lounge (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://jmp2.uk/stvp-CHAJ0500413A',
    cover: 'https://i.imgur.com/pgCA35z.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5d4phl3',
    title: 'Deluxe Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://sdn-global-live-streaming-packager-cache.3qsdn.com/13456/13456_264_live.m3u8',
    cover: 'https://i.imgur.com/HimuPPb.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8vds4kh',
    title: 'Deluxe Rap (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://sdn-global-live-streaming-packager-cache.3qsdn.com/65183/65183_264_live.m3u8',
    cover: 'https://i.imgur.com/s3h67hx.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ebubbgt',
    title: 'Dhamaal (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/1291/master.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Dhamaal_TV.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9gtt0n7',
    title: 'Dhoom Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/1456/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_DHOOM_MUSIC/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-l0kdu1v',
    title: 'Dismar Radio TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rds3.desdeparaguay.net/dismartv/dismartv/playlist.m3u8',
    cover: 'https://i.imgur.com/KOuxdMD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bsau489',
    title: 'DM Sat (576p) [Geo-Blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://viamotionhsi.netplus.ch/live/eds/dmsat/browser-dash/dmsat.mpd',
    cover: 'https://i.imgur.com/LdeA1Cn.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-oimg1d0',
    title: 'DMF (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d-m-f.iptv-playoutcenter.de/dmf/dmf1/playlist.m3u8',
    cover: 'https://i.imgur.com/sJaBU7X.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-73g5k4o',
    title: 'Dream Türk (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.duhnet.tv/S2/HLS_LIVE/dreamturknp/playlist.m3u8',
    cover: 'https://i.imgur.com/vJ8VaZi.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-23sj3p7',
    title: 'DSTV (614p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://46.249.95.140:8081/hls/data.m3u8',
    cover: 'https://i.imgur.com/YMgzzkf.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-g1f0os8',
    title: 'DTR Music 1 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://kino-stream.online/hls/DTRMUSIC1.m3u8',
    cover: 'https://i.imgur.com/3picWDA.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2rbroc3',
    title: 'E40 (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://copacotf.desdeparaguay.net/e40tv/e40tv_py_alta/playlist.m3u8?admin=tvaccion',
    cover: 'https://i.imgur.com/0RypDUY.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hxei87g',
    title: 'EBS Musika (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rpn.bozztv.com/ebstv/ebsmusika/index.m3u8',
    cover: 'https://i.imgur.com/lSpplhD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-k4kgi07',
    title: 'EcuaMundo Radio TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://pacific.direcnode.com:3353/live/ecuamundotvlive.m3u8',
    cover: 'https://i.imgur.com/EMe5oWn.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-o6ibx3q',
    title: 'El Radio 9090 FM (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://9090video.mobtada.com/hls/stream.m3u8',
    cover: 'https://www.9090.fm/images/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-31ttdld',
    title: 'El Sol Network TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv.wracanal10.com:3025/live/elsoltvlive.m3u8',
    cover: 'https://i.imgur.com/TIH3zlP.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-y61g8t9',
    title: 'Ellinikos FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtmp.win:3603/live/ellinikosfmlive.m3u8',
    cover: 'https://i.ibb.co/y0ydCNB/unnamed-4.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-tg46n72',
    title: 'EnerGeek Radio (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://backend.energeek.cl/webtv/egradioweb/index.m3u8?token=ZZDemoIPTVGH',
    cover: 'https://cdn.energeek.cl/logos/EG-Radio-2025_pfp.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-x63kszt',
    title: 'Epic Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://103.213.31.109:90/ShowBox/playlist.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SHOWBOX/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fl9ha3i',
    title: 'ETV Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cc-szivnms4rlah6.akamaized.net/WWBI/Amagi/ETV_Music_IN/playlist.m3u8',
    cover: 'https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN4900002RV_20250811T033455SQUARE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-uyyzutj',
    title: 'EU Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://iptv.prosto.tv/ch134/tracks-v2a1/1.m3u8?21yo=1&live=1&ip=104.28.156.59&id=742347&secret=vu2y5m72&ses=ca0cfbf5db9d8003&uid=vu2y5m72&cs_track=false&e=1782900912&st=j-Ja2visdxrjH_8haQZjNg',
    cover: 'https://i.imgur.com/fJdvyrG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-yo15c4v',
    title: 'Euro Indie Music Chart TV (360p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://178.33.224.197:1935/euroindiemusic/euroindiemusic/playlist.m3u8',
    cover: 'https://i.imgur.com/lF0iofX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3cd2zip',
    title: 'Europa Plus TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://31.148.48.15/Europa_Plus_HD/index.m3u8',
    cover: 'https://i.imgur.com/GLc4qrc.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5arot19',
    title: 'Exclusiv TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ythls.armelin.one/channel/UCXxTnMoETkhNTmsqZc0JMhQ.m3u8',
    cover: 'https://i.imgur.com/xw1IWoO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-d8bry1j',
    title: 'Extra TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streaming.social3.hr/ExtraTVudzdhr5/uUankWqpXD/1.m3u8',
    cover: 'https://i.imgur.com/5edYPBO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-aa7d6eu',
    title: 'Fabulosa Estéreo 100.5 FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://www.streaming507.net:19360/videofabulosa/videofabulosa.m3u8',
    cover: 'https://i.imgur.com/YFmzkOp.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wb995lr',
    title: 'Fairuz (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx029/playlist.m3u8',
    cover: 'https://shahid.mbc.net/mediaObject/f809d51c-e83d-43c9-8236-78731c2216ad?type=png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dnrqsni',
    title: 'Falastini TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rp.tactivemedia.com/palestiniantv_source/live/playlist.m3u8',
    cover: 'https://i.imgur.com/6B3Cims.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-091ts3k',
    title: 'Famatv (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv2.fastcast4u.com:3310/live/famatvlive.m3u8',
    cover: 'https://i.ibb.co/tMmRp18/Fama-TV-cor-whitebg-hotizontal.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-l3q2ji1',
    title: 'Fame95 FM (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rjr-fame.akamaized.net/hls/live/2033820/RJR_FAME/master.m3u8',
    cover: 'https://i.imgur.com/n3PUxes.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-l2o9dka',
    title: 'Farra Play (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://159.203.148.226/live/farra.m3u8',
    cover: 'https://i.imgur.com/bXWzstH.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-alr12mb',
    title: 'Finest TV (288p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://media.finest.tv/hls/live.m3u8',
    cover: 'https://i.imgur.com/1uoP10V.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ffez7gm',
    title: 'Flex Studio Radio TV [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live20.bozztv.com/akamaissh101/ssh101/fsradiotv/playlist.m3u8',
    cover: 'https://i.imgur.com/tZjqtxd.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ap0poeh',
    title: 'FM ITALIA (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream2.xdevel.com/video0s975817-1183/stream/playlist.m3u8',
    cover: 'https://i.imgur.com/54CO2u9.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-14k9xas',
    title: 'FM Mundo (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video2.makrodigital.com/fmmundo/fmmundo/playlist.m3u8',
    cover: 'https://i.imgur.com/1nNnYQO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xcgsvzh',
    title: 'Folk Klub (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://tv1.intv.mk:1935/live2/folkklub/index.m3u8',
    cover: 'https://i.imgur.com/Seq7Od7.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gafn4j6',
    title: 'Folk TV (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.nasatv.com.mk/folktv/hls/folktv_live.m3u8',
    cover: 'https://i.imgur.com/4b9aZ9P.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lovu8t5',
    title: 'FOLX Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdne.folxplay.tv/folx-trz/streams/ch-4/master.m3u8',
    cover: 'https://i.imgur.com/ze04puX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-39lpwij',
    title: 'Folx Slovenija (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdne.folxplay.tv/folx-trz/streams/ch-5/master.m3u8',
    cover: 'https://i.imgur.com/RK1IASU.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wtujtiy',
    title: 'FomixTV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.fomixmedia.nl/FomixTV/video.m3u8',
    cover: 'https://i.imgur.com/7SLYEMG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-x9lckj9',
    title: 'FON Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-01.bonus-tv.ru/tntmusic/playlist.m3u8',
    cover: 'https://i.imgur.com/tXABQDE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ipaggvb',
    title: 'Frecuencia Musical TV [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://s2.tvdatta.com:3307/hybrid/play.m3u8',
    cover: 'https://i.imgur.com/vPxvbVv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kmkbmg8',
    title: 'FTV (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream8.cinerama.uz/1018/playlist.m3u8',
    cover: 'https://i.imgur.com/7lpISyN.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-l3sgwot',
    title: 'Fuego TV [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamunoapp.com:3553/live/cromtvlive.m3u8',
    cover: 'https://i.imgur.com/T9vWjeB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-p3pgx0s',
    title: 'Fun Radio',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/funradiofr.m3u8',
    cover: 'https://i.imgur.com/wgxuYsQ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nw2caif',
    title: 'FUSION TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://edge20.vedge.infomaniak.com/livecast/ik:fusiontv/manifest.m3u8',
    cover: 'https://i.imgur.com/WMrYEgH.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-x5mpr2z',
    title: 'Galaxy TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.castr.com/6463248048d6cd3e143655b2/live_43351ad0f3b411ed81c78fcc31887c54/index.fmp4.m3u8',
    cover: 'https://i.imgur.com/P5OABe5.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-veoz38v',
    title: 'GEM 24B',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gem24b/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/8LgdPst.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kodhsyz',
    title: 'GEM Mifa',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemmifa/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/qlI7o7V.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-d3de8c0',
    title: 'GEM Mifa Plus',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemmifaplus/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/8FIAqR5.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-w76j1i8',
    title: 'Gex TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live20.bozztv.com/akamaissh101/ssh101/gextvaccess/playlist.m3u8',
    cover: 'https://gextv.com/LOGO-WHITE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ngutkoi',
    title: 'Gigant FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.uitzending.tv:19360/gigantfm/gigantfm.m3u8',
    cover: 'https://i.imgur.com/LwEHfjD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wd71bsj',
    title: 'GMTV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livechannel.mdc.akamaized.net/stitch/livechannel/1341/master1400000.m3u8;session=live_stream_1341',
    cover: 'https://i.imgur.com/GJYb8c8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0ioj5r9',
    title: 'GO TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rds3.desdeparaguay.net/gotv/gotv/playlist.m3u8',
    cover: 'https://i.ibb.co/jkvYVyz/Captura.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1su7cxo',
    title: 'GugakTV 국악방송 (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mgugaklive.nowcdn.co.kr/gugakvideo/gugakvideo.stream/playlist.m3u8',
    cover: 'https://i.imgur.com/Ey7Htm8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-krw8qqm',
    title: 'H!T Music Channel (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://hitmusic.hu/hitmusic.m3u8',
    cover: 'https://i.imgur.com/sqC2hqV.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8wdbf30',
    title: 'Hayat (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://158.180.39.89:5033/hayat.m3u8',
    cover: 'https://i.imgur.com/JugiLHM.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bmtst77',
    title: 'Hayat Folk (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://158.180.39.89:5033/folk.m3u8',
    cover: 'https://i.imgur.com/LteJva4.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9zllgyd',
    title: 'Hayat Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://158.180.39.89:5033/music.m3u8',
    cover: 'https://i.imgur.com/9p8q1yX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4f24pjw',
    title: 'Hayat Plus (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://158.180.39.89:5033/hayatplus.m3u8',
    cover: 'https://i.imgur.com/NThsVzJ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qkkcf0e',
    title: 'Hayatovci (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://158.180.39.89:5033/hayatovci.m3u8',
    cover: 'https://i.imgur.com/eqd3kvW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ypwfvs2',
    title: 'HEi Now (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://copacogen.desdeparaguay.net/heitv/heitv_py_alta/playlist.m3u8?admin=nacion',
    cover: 'https://i.imgur.com/oMHiGRN.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-a8ro1hx',
    title: 'High Vision (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamer1.connectto.com/HIGHVISION_WEB_1205/index.m3u8',
    cover: 'https://i.imgur.com/zhCgoru.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6y210ya',
    title: 'Hitradio O3 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://studiocam-oe3.mdn.ors.at/orf/studiocam_oe3/q6a/manifest.mpd',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Hitradio_%C3%963.svg/960px-Hitradio_%C3%963.svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-12ek8h7',
    title: 'Hits 360 TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://cm.hostlagarto.com:8081/hits360tv/hits360HD.myStream/playlist.m3u8',
    cover: 'https://i.imgur.com/Cx5V233.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hhs9u03',
    title: 'Hitz TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamer2.nexgen.bz/13-HITZ/index.m3u8',
    cover: 'https://i.imgur.com/SbZgsDh.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5v5fpjr',
    title: 'HMI PROMZ NEWS (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video1.getstreamhosting.com:1936/8326/8326/playlist.m3u8',
    cover: 'https://i.imgur.com/gwPaw3v.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-iy3gejx',
    title: 'Hype Visual Radio (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streammix.alsolnet.com/hyperadio/live/playlist.m3u8',
    cover: 'https://cdn.onlineradiobox.com/img/fblogo/1/97371.v21.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ncu3oiv',
    title: 'Identité Télé Caraïbes (548p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vdo2.pro-fhi.net:3769/stream/play.m3u8',
    cover: 'https://i.imgur.com/Atsf6Cd.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4eksnb3',
    title: 'Impact TV Dance (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://online.tvimpact.live/hls/dancetv.m3u8',
    cover: 'https://i.imgur.com/G5mNdpE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-a1oyp28',
    title: 'Impact TV Manele (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://online.tvimpact.live/hls/impact_tv.m3u8',
    cover: 'https://i.imgur.com/G5mNdpE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-n1en5wv',
    title: 'Infinita TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://s2.tvdatta.com:3753/hybrid/play.m3u8',
    cover: 'https://i.imgur.com/1nHxdkR.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vb1dgw2',
    title: 'Insync (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumt04.tangotv.in/INSYNC/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Insync.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-n5kdtfo',
    title: 'INTV Australia (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://tv1.intv.mk:1935/live/intv/index.m3u8',
    cover: 'https://i.imgur.com/1nJl0Pv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-40hohj5',
    title: 'IQ Channel (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtmp.info/iqtv/envivo/playlist.m3u8',
    cover: 'https://i.imgur.com/hwuaomt.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-etharm8',
    title: 'Isai Aruvi (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://ptuf.ridsys.in/riptv/live/KALAIGNAR_ISAI_ARUVI/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ISAI_ARUVI/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-13kkqct',
    title: 'Isango TV (480p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://80.241.215.175:1935/isangostar/isangostar/playlist.m3u8',
    cover: 'https://i.imgur.com/EfsHaMQ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ip3l2l2',
    title: 'Italianissimo (360p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vcp.myplaytv.com/italianissimo/italianissimo/playlist.m3u8',
    cover: 'https://i.imgur.com/JCpbUZB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-cawa5s5',
    title: 'iTV Afrobeats Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/afrobeats/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-e1nsvkq',
    title: 'iTV Arabic Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/arabic/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wylcnfq',
    title: 'iTV Indian Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/indian/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vdlgfhl',
    title: 'iTV Latin Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/latin/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-65vdc84',
    title: 'ITV Persian Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/persian/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9z7zto6',
    title: 'iTV Turkish Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/turkish/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-befnlad',
    title: 'iTV Urban Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/love2/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-a2i8qz2',
    title: 'Ivoire Channel (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video1.getstreamhosting.com:1936/8244/8244/playlist.m3u8',
    cover: 'https://i.imgur.com/gKbNqQv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-u4y2g3x',
    title: 'J Music TV (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://maxotts.maxdigitaltv.com/x-media/C180/master.m3u8',
    cover: 'https://i.imgur.com/57dVOP5.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-r6trfwi',
    title: 'Jawhara TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://streaming.toutech.net:1935/live/mp4:jawharafm.sdp/playlist.m3u8',
    cover: 'https://i.imgur.com/mRSQ5bP.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-walpzzz',
    title: 'Jazz TV (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.nasatv.com.mk/jazztv/hls/jazztv_live.m3u8',
    cover: 'https://i.imgur.com/CbQlSFX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hpfe0k0',
    title: 'Jeddah Radio (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.kwikmotion.com/sbrksajeddahradiolive/srpksajeddahradio/chunks.m3u8',
    cover: 'https://aloula.faulio.com/storage/mediagallery/bd/f5/fullhd_527bf54a5adb56ac17f572ac2cd0801304db3baf.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bndjklt',
    title: 'Joe FM (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dpp-streamlive-plain.medialaancdn.be/joe_kijklive/plain/hls_hd.m3u8',
    cover: 'https://i.ibb.co/k9KJWzN/320px-Joe-radio-logo-2016-svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-sk8x73p',
    title: 'JooMusic (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livecdn.live247stream.com/joomusic/tv/playlist.m3u8',
    cover: 'https://i.imgur.com/KHuKQQL.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rcdm9yh',
    title: 'Jordan Songs (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://playlist.fasttvcdn.com/pl/cc0blorawy1ibohhrupraa/Song/playlist.m3u8',
    cover: 'https://i.imgur.com/1DE7Gmw.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-y4lkcfa',
    title: 'JRTV Järviradio (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamer.radiotaajuus.fi/memfs/47f113bf-04ea-493b-a9d4-52945fd9db31.m3u8',
    cover: 'https://jarviradio.fi/jrtv2/wp-content/uploads/2022/01/jrtv1.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vfkz94q',
    title: 'Juice TV (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://juicex.nz/hls/mystream.m3u8',
    cover: 'https://i.imgur.com/WaaaW0w.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-idq67a8',
    title: 'Kalika TV (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://server.applelive.in/kalikatv/kalikatv.m3u8',
    cover: 'https://i.imgur.com/XWXFoJA.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6xitmaq',
    title: 'KandelaTV (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamtv.intervenhosting.net:3718/live/kandelamedioslive.m3u8',
    cover: 'https://i.imgur.com/cCFxyIp.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-q411vil',
    title: 'Karibena [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live-player.egostreaming.pe/karibenatv_685a-pe-a5676-584412/index.fmp4.m3u8',
    cover: 'https://i.imgur.com/cgHjg1e.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ambjeg8',
    title: 'Kayhan TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://playout395.livestreamingcdn.com/live/Stream1/playlist.m3u8',
    cover: 'https://i.imgur.com/2MDjU7x.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-x1jg7cn',
    title: 'Kayo Pops (544p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs13',
    cover: 'https://yt3.googleusercontent.com/ytc/AIdro_m1AFOxZHFBvf-eLgADxBaFKa54T5oDOvxEaQfz9VMCU_c=s512-c-k-c0x00ffffff-no-rj',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ecip60c',
    title: 'Kiss Kiss Napoli TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://58f12ffd2447a.streamlock.net/KKTVNapoli/livestream/playlist.m3u8',
    cover: 'https://i.imgur.com/RsGiBwE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-l3ltk4d',
    title: 'Kiss Kiss TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://58f12ffd2447a.streamlock.net/KKMulti/livestream/playlist.m3u8',
    cover: 'https://i.imgur.com/ja6c2YZ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-jp29ydc',
    title: 'Kiss TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv.broadcasting.ro/kisstv/a629c031-2170-4ee9-a36d-87a891aa3131.m3u8',
    cover: 'https://i.imgur.com/NKfVymH.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dcc8zb5',
    title: 'Klape i Tambure TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.cmctv.hr:49998/kit/live.m3u8',
    cover: 'https://i.imgur.com/sKj3dgc.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-q43hner',
    title: 'KpopTV Play (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://giatv.bozztv.com/giatv/giatv-kpoptvplay/kpoptvplay/playlist.m3u8',
    cover: 'https://i.imgur.com/Tf0vweF.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-w57tc8n',
    title: 'KRAL Pop TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dogus-live.daioncdn.net/kralpoptv/playlist.m3u8',
    cover: 'https://i.imgur.com/ch365lh.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-j07ppeo',
    title: 'Kronehit (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://bitcdn-kronehit.bitmovin.com/v2/hls/playlist.m3u8',
    cover: 'https://i.imgur.com/dQJQv1X.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-eyl0vd3',
    title: 'KurdMax Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://6476e46b58f91.streamlock.net/music/MUSIC2402/playlist.m3u8',
    cover: 'https://i.imgur.com/otnIdEu.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-au4ll3j',
    title: 'Kuriakos Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://195.23.211.179:1935/kmusic/smil:kmusic.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/Zl40NYi.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-jfkcpk1',
    title: 'La 98.1 TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://6019dcac4147f.streamlock.net:9443/la98/Invosa/playlist.m3u8',
    cover: 'https://i.imgur.com/7380kTN.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6goi3kr',
    title: 'La Cantina Memorias (480p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.xtrematv.com:3208/live/memoriaslacantinalive.m3u8',
    cover: 'https://imgs1.e-droid.net/srv/imgs/seccs/34751741_ico.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-brwi7zl',
    title: 'La Fabulosa Radio y TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8004/index.m3u8',
    cover: 'https://i.imgur.com/GjME5H0.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gmykiuk',
    title: 'La Hermandad Salsera (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamlov.alsolnet.com/hermandadsalsera/live/playlist.m3u8',
    cover: 'https://i.imgur.com/7Wlt6bc.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-tsl10on',
    title: 'La Kalle (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mdstrm.com/live-stream-playlist/58d191f07290fbb058025843.m3u8',
    cover: 'https://www.tdtparatodos.tv/sites/default/files/la_kalle.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3t2fi5p',
    title: 'La Mega Mundial',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://server40.servistreaming.com:3477/stream/play.m3u8',
    cover: 'https://i.imgur.com/UdMsgkt.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-msjhhpk',
    title: 'LA MIA TV (720p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ss2.tvrdomi.com:1936/lamiatv/lamiatv/playlist.m3u8',
    cover: 'https://i.imgur.com/XIwTM1h.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-q20tc1l',
    title: 'La Morada Radio TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://movil.ejeserver.com/live/lamoradatv.m3u8',
    cover: 'https://i.imgur.com/E3wDEX5.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vkq2z94',
    title: 'La Perla Radio TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8068/index.m3u8',
    cover: 'https://i.imgur.com/8wDMgmB.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ml9rz67',
    title: 'La Que Buena Atlanta',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamyes.alsolnet.com/quebuenaatlanta/live/index.m3u8',
    cover: 'https://iili.io/JysD2a4.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zixx0ha',
    title: 'La Top 102.9 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59d39900ebfb8.streamlock.net/top102/top102/playlist.m3u8',
    cover: 'https://i.imgur.com/ZqwLPag.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-murfuqg',
    title: 'La Top 107.7 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59d39900ebfb8.streamlock.net/top107/top107/playlist.m3u8',
    cover: 'https://i.imgur.com/vgHhh1W.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xa17jes',
    title: 'La Urban TV (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://urbanrevolution.es:8443/live/TV/playlist.m3u8',
    cover: 'https://i.imgur.com/hythjEn.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qdc59jv',
    title: 'La Voz del Tropico (480p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ss2.tvrdomi.com:1936/lavozdeltropico/lavozdeltropico/playlist.m3u8',
    cover: 'https://i.imgur.com/DKDFpHt.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-cig41li',
    title: 'La-X (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.eleden.com/livelax/ngrp:livelax_all/playlist.m3u8',
    cover: 'https://i.imgur.com/i2GnQTq.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-tvgxosj',
    title: 'Latin Zone TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn.streamingcpanel.com:3784/live/latinzonetvlive.m3u8',
    cover: 'https://i.imgur.com/duEDsne.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-oz9pjag',
    title: 'Lausitzwelle (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://h056.video-stream-hosting.de/easycast11-live/_definst_/mp4:livestreamhd2/playlist.m3u8?ref=',
    cover: 'https://i.imgur.com/4kYF4bK.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xmswknc',
    title: 'LaXitosa Panamá (360p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stmvideo2.livecastv.com/lax953/lax953/playlist.m3u8',
    cover: 'https://i.imgur.com/Pt4F9Xz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nrthkgq',
    title: 'Lingkar TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lingkartv.my.id/hls/lingkartv.m3u8',
    cover: 'https://lingkartv.com/assets/img/logo-square.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9asye9d',
    title: 'LiraTV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloud2.streaminglivehd.com:1936/liratv/liratv/playlist.m3u8',
    cover: 'https://i.imgur.com/hBswXYZ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hpg6p1z',
    title: 'Littoral FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.creacast.com/littoralfm-ch1/stream/playlist.m3u8',
    cover: 'https://i.imgur.com/DCZKAQ1.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-47i32y9',
    title: 'Live99FM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://media.streambrothers.com:1936/8014/8014/playlist.m3u8',
    cover: 'https://i.imgur.com/U43UrQT.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3ftkac1',
    title: 'LiveXLive (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livestream.liveone.com/lc1/p1.m3u8',
    cover: 'https://i.imgur.com/KFzEoed.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-e5tg3ac',
    title: 'Lobo TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5ca3e84a76d30.streamlock.net/tvlobo/videotvlobo/playlist.m3u8',
    cover: 'https://i.imgur.com/3fA50RJ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-e7b40h9',
    title: 'Look Thoong TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livefta.malimarcdn.com/ftaedge00/lookthoongtv.sdp/playlist.m3u8',
    cover: 'https://i.imgur.com/eT7iE34.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8sq5m81',
    title: 'Love TV (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.nasatv.com.mk/lovetv/hls/lovetv_live.m3u8',
    cover: 'https://i.imgur.com/B8iaejQ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2ryh62l',
    title: 'LRT Klasika (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream-live.lrt.lt/klasika/master.m3u8',
    cover: 'https://i.imgur.com/Fa8Vhu0.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ehq0vi4',
    title: 'LRT Opus (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream-live.lrt.lt/opus/master.m3u8',
    cover: 'https://i.imgur.com/oLuZTMH.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-y19gb11',
    title: 'Luna Estéreo 106.4 FM (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://servervideo.intermediacolombia.com:19360/kychbbfhdz/kychbbfhdz.m3u8',
    cover: 'https://i.imgur.com/cESeD6R.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qjn0imz',
    title: 'M2 (540p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.m2.tv/hls3/stream.m3u8',
    cover: 'https://i.imgur.com/AfcBWCg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-i22gdug',
    title: 'm2o TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S62628868/uhdWBlkC1AoO/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Radio_m2o_-_Logo_2019.svg/500px-Radio_m2o_-_Logo_2019.svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-va8yuid',
    title: 'M6 Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://test.946985.filegear-sg.me/proxy/803c517b325bfafc',
    cover: 'https://upload.wikimedia.org/wikipedia/en/c/c9/M6_Music_%282012%29.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6kdzto3',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",M+ (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/m-plus/master.m3u8?ads.vf=99_BajuDhjC',
    cover: 'https://i.imgur.com/Ho8N310.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7b23o7i',
    title: 'M-1 (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://m-1.data.lt/m-1/smil:m-1.smil/playlist.m3u8',
    cover: 'https://i.ibb.co/gb4NmNHT/M1-2025.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ms5gl6m',
    title: 'Madras FM TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://edge12.vedge.infomaniak.com/livecast/ik:madrasfmtv/manifest.m3u8',
    cover: 'https://i.imgur.com/spGg1CZ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-c2vff3j',
    title: 'Magenta Musik 360 (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streaming.magentamusik.de/csm/573870/magentamusik1/index.m3u8',
    cover: 'https://i.imgur.com/R74gG7U.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6b2zpdt',
    title: 'Magic TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://bss1.neterra.tv/magictv/magictv.m3u8',
    cover: 'https://i.imgur.com/n7bcrrp.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0fh4pt7',
    title: 'Magic TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv.broadcasting.ro/magictv/925f90db-5c88-4190-a53d-5163cdffe6f4.m3u8',
    cover: 'https://i.imgur.com/9izrr4d.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-afntlf4',
    title: 'Maimon TV Canal 3 (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tele-stream.telecasa.net/live/st3/maimontv-hd/index.m3u8',
    cover: 'https://i.imgur.com/twldaaC.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-sm36esq',
    title: 'Majid Al Mohandis (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx019/playlist.m3u8',
    cover: 'https://i.discogs.com/Fk9Bm8gTYJYeVXIJKX-EOGmYQ90sVQPtkIW5ZK4fydo/rs:fit/g:sm/q:90/h:372/w:412/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9MLTE2OTY4/MzMtMTU2ODk0NjI5/MC01Njk2LmpwZWc.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-te1c860',
    title: 'Makao TV (360p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.obslivestream.com/makaomux/tracks-v2a1/playlist.m3u8',
    cover: 'https://i.imgur.com/asD5y7i.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ljahd7v',
    title: 'Marina TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ffs.gulfsat.com/Marina-TV-HD/index.m3u8',
    cover: 'https://i.imgur.com/F2PzEaw.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kdrx5eq',
    title: 'Más FM 95.9 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vivo.solumedia.com:19360/masfm/masfm.m3u8',
    cover: 'https://i.imgur.com/TJ4gWQM.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2ww9jwg',
    title: 'MasMusica FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://movil.ejeserver.com/live/masmusica.m3u8',
    cover: 'https://i.imgur.com/tCg7owd.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4214rzo',
    title: 'Mastiii (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumt02.tangotv.in/MASTIII/index.m3u8',
    cover: 'https://i.imgur.com/lxgXHx4.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hvfh7o9',
    title: 'Max Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.maxtn.in/maxmusic/maxmusic/index.m3u8',
    cover: 'https://livetv.ashokadigital.net/upload/logo/1732168750_WhatsApp%20Image%202024-11-21%20at%2011.05.55%20AM%20(1).jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qz4l3gy',
    title: 'Max TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamer2.nexgen.bz/14-MAX/index.m3u8',
    cover: 'https://i.imgur.com/TF4snV6.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-juf7tgs',
    title: 'MBC America (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-us-east-prod-ingest-infra-dacast-com.akamaized.net/624ff8f9-db18-da92-4d42-896fa2ff3eb3/source/index.m3u8',
    cover: 'https://i.imgur.com/RRc23ra.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qhxk32c',
    title: 'MBC FM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dbbv9umqcd7cs.cloudfront.net/out/v1/db15b75c3cc0400c91961468d6a232ac/index.m3u8',
    cover: 'https://i.imgur.com/lF8UxvR.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0d5mgyx',
    title: 'MBC Mood (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-mood/78367bf48ccdba501d0d014a10c21031/index.m3u8',
    cover: 'https://shahid.mbc.net/mediaObject/c2b6a882-458b-446e-b0fe-f97f7992149a?height=auto&width=144&croppingPoint=&version=1&type=png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mzn7tcg',
    title: 'MBC Mood (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://shd-gcp-live.edgenextcdn.net/live/bitmovin-wanasah/13e82ea6232fa647c43b26e8a41f173d/index.m3u8',
    cover: 'https://shahid.mbc.net/mediaObject/c2b6a882-458b-446e-b0fe-f97f7992149a?height=auto&width=144&croppingPoint=&version=1&type=png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8qyfazr',
    title: 'MCN6 Music Channel (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d18fcxaqfnwjhj.cloudfront.net/CDN_Ingest/MCN6_MUSIC.smil/Playlist.m3u8',
    cover: 'https://i.imgur.com/j6IiysJ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-doa4s1m',
    title: 'Med Muzik (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://54.36.110.140/live3/live3.m3u8',
    cover: 'https://i.imgur.com/gtUFmCD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-eqcfv4q',
    title: 'MegaBox (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hdbox.chunklistv.com/live?stream=megabox',
    cover: 'https://i.imgur.com/JqaW7Ei.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-76b8ttv',
    title: 'Melody (288p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/radiokaraoke.m3u8',
    cover: 'https://i.imgur.com/9GVyQ6x.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-63fimwz',
    title: 'Melody FM Jordan (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn3.wowza.com/1/OVRrOWxXUEswS2Yv/eGVxSWZy/hls/live/playlist.m3u8',
    cover: 'https://i.imgur.com/J8omcNz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rhlfagi',
    title: 'Memorias del Corazon (480p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.xtrematv.com:3401/live/grupomemoriaslive.m3u8',
    cover: 'https://i.imgur.com/sVLDzzM.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ai613sc',
    title: 'Memorias FM Pop Latino (480p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.xtrematv.com:3891/live/memoriaspoplatinolive.m3u8',
    cover: 'https://imgs1.e-droid.net/srv/imgs/seccs/34751581_ico.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-orkma5z',
    title: 'Memorias TV Classic (480p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.xtrematv.com:3576/live/memoriasclassiclive.m3u8',
    cover: 'https://i.imgur.com/tLTQLnv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-75i1cpq',
    title: 'Memorias TV Tropical (480p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.xtrematv.com:3361/live/memoriastropicallive.m3u8',
    cover: 'https://i.imgur.com/Y9GFDcV.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-es95lft',
    title: 'Metaleitor TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vs20.live.opencaster.com/metaleitortv_423d3342/index.m3u8',
    cover: 'https://new.opencaster.com/uploads/logos/logo_14_1752798826.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4rzjw77',
    title: 'Metropoli Medios TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8214/index.m3u8',
    cover: 'https://i.imgur.com/yID5T2S.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wn1wj7q',
    title: 'Mezzo (1080p) [Geo-Blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://viamotionhsi.netplus.ch/live/eds/mezzo/browser-HLS8/mezzo.m3u8',
    cover: 'https://i.imgur.com/auNdGeW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-blszn0g',
    title: 'Mezzo Live',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://test.946985.filegear-sg.me/proxy/749755700e4ed9c6',
    cover: 'https://i.imgur.com/H9ytKPN.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5k3smer',
    title: 'mfm (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hms.pfs.gdn/hms/v1/broadcast/hlmvmp2hfriode891/playlist.m3u8',
    cover: 'https://www.mtv.com.lb/images/header/mfm-logo.svg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8pml3f6',
    title: 'Mh 1 Music (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumt04.tangotv.in/MHONE/index.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143539_ld_h15_aa.png?lock=720x540',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-70gguwe',
    title: 'Mi Gente TV (720p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://byecableiptvnew3.ddns.net/ENVIVOMIGENTE/video.m3u8',
    cover: 'https://i.imgur.com/CSbmQlu.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-e9d934s',
    title: 'Miel TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://7.innovatestream.pe:19360/mieltv/mieltv.m3u8',
    cover: 'https://i.imgur.com/dPSFrCs.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gs1xe1s',
    title: 'MNM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live-radio-cf-vrt.akamaized.net/groupa/live/bac277a1-306d-44a0-8e2e-e5b9c07fa270/live.isml/.m3u8',
    cover: 'https://i.imgur.com/L4cD18H.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fcxgxkb',
    title: 'Mohammed Abdo (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d2ow8h651gs7dx.cloudfront.net/out/v1/371fb663da604e659a2fb99bf89d92d4/index.m3u8',
    cover: 'https://assets.mbcmood.com/channels/1720184012Mohammed%20Abdo%20banner.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-113dn6l',
    title: 'Molahits TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://ventdelnord.tv:8080/mola/directe.m3u8',
    cover: 'https://i.imgur.com/FYcLtqT.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-v8kr5zh',
    title: 'Mooz Dance',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtmp.digitalbroadcast.ro/moozdance/moozdance.m3u8',
    cover: 'https://i.imgur.com/aX70RD2.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lx40iod',
    title: 'Mooz Hits',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtmp.digitalbroadcast.ro/moozhits/moozhits.m3u8',
    cover: 'https://i.imgur.com/GwATd3Y.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zsyr9hx',
    title: 'Mooz Ro!',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtmp.digitalbroadcast.ro/moozro/moozro.m3u8',
    cover: 'https://i.imgur.com/Ft24x5T.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kjf2tm9',
    title: 'Mosaique FM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://webcam.mosaiquefm.net/mosatv/_definst_/studio/playlist.m3u8?DVR',
    cover: 'https://i.imgur.com/GDUykah.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-h2r9miq',
    title: 'Mouv\' TV (288p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/mouv.m3u8',
    cover: 'https://i.imgur.com/64nzKEu.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fvpi7cg',
    title: 'Music Box Polska [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vs2133.vcdn.biz/0f0f85e2ea3607b5c396ef68d55c3168_megogo/live/hls/b/4000/u_sid/0/o/156751011/rsid/062147ff-ed0c-4d9c-a131-2bf42026e640/u_uid/0/u_vod/1/u_device/embed_all/u_devicekey/_embed_web/lip/57.128.235.172*asn/type.live/playlist.m3u8',
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyN14NgigtUnImvVp9DqgbKY5c9Nsl-EqLkPX7PzYcl924yK77GycmSj2E&s=10',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-oihqhuf',
    title: 'Music India (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-2.pishow.tv/live/226/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143563_ld_h15_aa.png?lock=720x540',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zcgkmcv',
    title: 'Music Information Channel (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mic.siar.us/mic/live/mic.m3u8',
    cover: 'https://i.imgur.com/OUPGCWG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-unht4b1',
    title: 'Music Japan TV (544p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs06',
    cover: 'https://i.imgur.com/DkF8YZq.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vcedt6p',
    title: 'Music TV Granada (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8032/index.m3u8',
    cover: 'https://i.ibb.co/Swd9NP7n/music-tv-granada.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mncmju6',
    title: 'MusicTop (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream-gtlc.telecentro.net.ar/hls/musictophls/0/playlist.m3u8',
    cover: 'https://cdn.mitvstatic.com/channels/ar_musictop_m.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5nvi2tp',
    title: 'Muzangala TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5cf4a2c2512a2.streamlock.net/tvmuzangala/tvmuzangala/playlist.m3u8',
    cover: 'https://i.imgur.com/fBeaJoS.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-tv5yvfm',
    title: 'Muzvar (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn15.live-tv.cloud/ua_infinitas_tv/muzvar-abr/playlist.m3u8',
    cover: 'https://i.imgur.com/Klu5k9U.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nawcifa',
    title: 'MuzzOne',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streams.adapto.kz/hls/live/muzzone/main_stream.m3u8',
    cover: 'https://i.imgur.com/nHVABXh.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mg7byku',
    title: 'My Gospel TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamtv.cmediahosthosting.net:3046/live/mygospeltvlive.m3u8',
    cover: 'https://mygospeltv.fr/wp-content/uploads/2022/05/MY-GODPEL-TV-e1652783900988.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-b4ordz8',
    title: 'Nande Portetepe TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.hostingcaaguazu.com:19360/nandeportetepe/nandeportetepe.m3u8',
    cover: 'https://i.imgur.com/3taT6JK.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2iz2xir',
    title: 'Navahang TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls.navahang.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/YteKXJy.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0wlq4k8',
    title: 'NEW KPOP (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ads.its-newid.net/api/manifest.m3u8?tp=samsung_tvplus&channel_id=newid_086&ads.service_id=GB17000088V',
    cover: 'https://i.imgur.com/B7ILXMc.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ix2sv3u',
    title: 'Next HD (480p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.enhdtv.com:19360/nexthd/nexthd.m3u8',
    cover: 'https://i.imgur.com/c2rF3SS.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-v2d27q5',
    title: 'Nidae AlIslam Radio (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.kwikmotion.com/sbrksanedaradiolive/srpksanedaradio/playlist.m3u8',
    cover: 'https://aloula.faulio.com/storage/mediagallery/0f/c5/fullhd_5da380cdfc304fd7d4672a83aeb6c62bc1d3d3e8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-tgbc78o',
    title: 'NogoumFMTV (672p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://nogoumtv.nrpstream.com/hls/stream.m3u8',
    cover: 'https://i.imgur.com/krp3kgv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-epniacx',
    title: 'Noroc TV (576p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.noroc.tv/noroc/noroc.m3u8',
    cover: 'https://i.imgur.com/XvYqpqG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1mvgea7',
    title: 'NOW 70s (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lightning-now70s-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-lightning-now70s-rakuten/CDN/playlist.m3u8',
    cover: 'https://i.imgur.com/qiCCX5X.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0e80nzi',
    title: 'Now 70s (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lightningnow70-samsungau.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/qiCCX5X.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-n59j54x',
    title: 'NOW 80s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lightning-now80s-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-lightning-now80s-rakuten/CDN/playlist.m3u8',
    cover: 'https://i.imgur.com/YyPnMeB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-u920sji',
    title: 'Now 80s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lightningnow80-samsungau.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/YyPnMeB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-56yrrf1',
    title: 'NOW 90s00s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg01076-amg01076c19-rakuten-gb-8653.playouts.now.amagi.tv/playlist/amg01076-lightning-now90s00s-rakutengb/playlist.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bcratkd',
    title: 'NOW Rock (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lightning-now90s-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-lightning-now90s-rakuten/CDN/playlist.m3u8',
    cover: 'https://i.imgur.com/GuM4GnX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-t7zj2d7',
    title: 'NOW Rock (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lightning-now90s-samsungnz.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/GuM4GnX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-cv50xqy',
    title: 'Now TV 102.3FM Edmonton (CKNO-FM) (616p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://videostream.jpbgdigital.com/NOWTV.m3u8',
    cover: 'https://i.imgur.com/sF2g7KE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7dvjypv',
    title: 'NPC Rádio e TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stmv5.samcast.com.br/nasciparacantartv/nasciparacantartv/playlist.m3u8',
    cover: 'https://i.imgur.com/mw1lYWE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-d2ujw4z',
    title: 'NRG 91 (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://tv.nrg91.gr:1935/onweb/live/master.m3u8',
    cover: 'https://i.imgur.com/1Zl1OJ5.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-jan4jy2',
    title: 'NRJ Hits',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://test.946985.filegear-sg.me/proxy/a23981548880f405',
    cover: 'https://i.imgur.com/2xDVwOh.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-q1nk2x8',
    title: 'Nueva Vida TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.nuevavidafm.net:3937/live/nuevavidalive.m3u8',
    cover: 'https://i.ibb.co/3mbZWyN/nav-Bar-title-Image-iphone6plus.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rcady9o',
    title: 'Number 1 Ask (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e18f9cea15_1/playlist.m3u8',
    cover: 'https://i.imgur.com/slwbux7.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xwa0mfz',
    title: 'Number 1 Damar (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e198784bdc_1/playlist.m3u8',
    cover: 'https://i.imgur.com/rYtbAGZ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bc4hn8p',
    title: 'Number 1 Dance (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e2aa8acf44_1/playlist.m3u8',
    cover: 'https://i.imgur.com/ZM4PSyq.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nufesm9',
    title: 'Number 1 Türk (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mn-nl.mncdn.com/blutv_nr1turk2/live.m3u8',
    cover: 'https://i.imgur.com/18zjk3q.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-avshu0k',
    title: 'Number 1 TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/broadcast_5c9e17cd59e8b.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/02cDIBi.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-e7kr358',
    title: 'Nuta TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://78.130.250.2:8023/play/a03r/index.m3u8',
    cover: 'https://i.imgur.com/JHFUxDu.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-b3wctam',
    title: 'Óčko (540p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ocko-live-dash.ssl.cdn.cra.cz/cra_live2/ocko.stream.1.smil/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/%C3%93%C4%8Dko_logo_2012.png/960px-%C3%93%C4%8Dko_logo_2012.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-whgmwk7',
    title: 'Óčko Expres (540p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ocko-live.ssl.cdn.cra.cz/channels/ocko_expres/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/%C3%93%C4%8Dko_Expres_logo.png/960px-%C3%93%C4%8Dko_Expres_logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ot5udpe',
    title: 'Óčko Gold (540p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ocko-live.ssl.cdn.cra.cz/channels/ocko_gold/playlist.m3u8',
    cover: 'https://i.imgur.com/nrWNyLc.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dv1gi50',
    title: 'ON FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5ce9406b73c33.streamlock.net/ONFM/livestream/playlist.m3u8',
    cover: 'https://onfmwordpressfiles.ams3.digitaloceanspaces.com/wp-content/uploads/2023/03/17130121/logo-on-fm.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-i0flaq0',
    title: 'Onda 15 TV (224p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8034/index.m3u8',
    cover: 'https://i.imgur.com/mUrZz9O.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-k8zm2ih',
    title: 'Onda Valencia (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8116/index.m3u8',
    cover: 'https://i.imgur.com/6HxLUQd.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-tk5g2n8',
    title: 'Ondambiental TV (360p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stmv4.voxtvhd.com.br/ondastereo/ondastereo/playlist.m3u8',
    cover: 'https://i.imgur.com/u5804Au.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4dohxs3',
    title: 'ONE1 Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdne.folxplay.tv/folx-trz/streams/ch-3/master.m3u8',
    cover: 'https://i.imgur.com/dLgoKJ0.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-z5u7ct7',
    title: 'One Adria (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdne.folxplay.tv/folx-trz/streams/ch-6/master.m3u8',
    cover: 'https://i.imgur.com/NYkMamU.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-sdpghrm',
    title: 'One TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hms.pfs.gdn/v1/broadcast/one/playlist.m3u8',
    cover: 'https://i.imgur.com/O4DuR9G.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9blog4l',
    title: 'OneFM (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hms.pfs.gdn/v1/broadcast/onefm/playlist.m3u8',
    cover: 'https://i.ibb.co/Vp2G9wTz/onefmlb.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-drgkt7z',
    title: 'Online TV Nusantara (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5bf7b725107e5.streamlock.net/onlinetvnusantara/onlinetvnusantara/playlist.m3u8',
    cover: 'https://i.imgur.com/E9CCIpP.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ejzh6e7',
    title: 'Orange Bangla TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-4.pishow.tv/live/1499/master.m3u8',
    cover: 'https://i.imgur.com/wjSaHj5.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-l8jrod1',
    title: 'Orbita Chile TV (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://orbitachiletv.org/hls/0/stream.m3u8',
    cover: 'https://i.imgur.com/gbNh79Z.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-fe0aj6h',
    title: 'Oxigeno TV (360p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vcp.myplaytv.com/oxigenotv/oxigenotv/playlist.m3u8',
    cover: 'https://i.imgur.com/n3PweBQ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5lvvh37',
    title: 'P2M TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vdo2.pro-fhi.net:3207/stream/play.m3u8',
    cover: 'https://i.imgur.com/TrecSeG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xvhnic3',
    title: 'Pamir TV (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://live.stream.cdn.pamirtv.com/ptv/d0dbe915091d400bd8ee7f27f0791303.sdp/index.m3u8',
    cover: 'https://i.imgur.com/sCBbBOj.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5b9grib',
    title: 'Panik TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livetv.streams.ovh:1936/paniktv/paniktv/playlist.m3u8',
    cover: 'https://i.imgur.com/13C3CPr.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-pqk823l',
    title: 'Panorama FM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d6izdil55uftn.cloudfront.net/out/v1/0a06d1d6377c47edbd48721ed724bd08/index.m3u8',
    cover: 'https://i.imgur.com/JkDD3bK.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lla3ky2',
    title: 'Parranda Vallenata (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://backupmaxmedia.hvmultiplay.com/hls/stream3/parrandavallenata.m3u8',
    cover: 'https://i.imgur.com/BzBX7Qx.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wo63zux',
    title: 'Peppers TV (751p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-2.pishow.tv/live/1383/master.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Peppers_TV.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-yytsyzk',
    title: 'Pequeradio (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://canadaremar2.todostreaming.es/live/peque-pequetv.m3u8',
    cover: 'https://i.imgur.com/BNqZwxS.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-79iiw2k',
    title: 'Persiana Folk',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://sonhls.persiana.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7hr4pdx',
    title: 'Persiana Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://musichls.persiana.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nhjwhtn',
    title: 'Persiana Nostalgia',
    author: 'Ретро / Класика',
    type: 'video',
    url: 'https://noshls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/SWO9CKA.png',
    description: '24/7 Ретро / Класика Stream',
    category: 'Ретро / Класика'
  },
  {
    id: 'vid-abx3m6z',
    title: 'Persiana Vibe',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://raphls.persiana.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xpmpllp',
    title: 'PJ Digital Radio TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vdo1.panelstreaming.live:3363/hybrid/play.m3u8',
    cover: 'https://i.imgur.com/m92oDuB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ec4lla4',
    title: 'Planet 100.9 FM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamlov.alsolnet.com/planet1009fm/live/playlist.m3u8',
    cover: 'https://i.imgur.com/8ZIBs8l.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-h5qjya8',
    title: 'Play TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://connectiktv.ddns.net:5000/playtv/@playtv/playlist.m3u8',
    cover: 'https://i.imgur.com/1dmBqpf.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qekdeb2',
    title: 'Play TV (480p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://web.onair-radio.eu:1935/Alpha-Host/Alpha-Host/playlist.m3u8',
    cover: 'https://i.imgur.com/JWFOYuD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2m71gbo',
    title: 'PMC',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://pmchls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/AbrHI7K.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wz07byp',
    title: 'PMC Royale (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://pmcrohls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-m5yka35',
    title: 'POP World TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://janus.xpbroadcasting.com:8443/hls/popworld.m3u8',
    cover: 'https://i.imgur.com/LQB6G3s.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-o2w4j7r',
    title: 'Power 101.7 FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vcp11.myplaytv.com/powerfm/powerfm/playlist.m3u8',
    cover: 'https://i.imgur.com/bkQrXjB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-55hvk5d',
    title: 'Power Dance (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livetv.powerapp.com.tr/dance/dance.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/QpPteBO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hlsh7x3',
    title: 'Power Hit Radio (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdnlb.tvplayhome.lt/live/eds/PWR_LTU_Live/GO3_LIVE_HLS/PWR_LTU_Live.m3u8?cdntoken=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDczNDU2NjEsInBhdGgiOiIvbGl2ZS9lZHMvUFdSX0xUVV9MaXZlL0dPM19MSVZFX0hMUy8iLCJzaXAiOiI3Mi4xMS4xNTcuMTEyIiwiZGV2aWNlX2lkIjoiMCIsInNlc3Npb25faWQiOiIwIiwiY2xpZW50X2lkIjoiMCJ9.oHc5wUgwNPQ-4P7wJy_WvWQh0muFg9Lprhc4STS3cUHi0FI4tAKGdZOOeE-dOhVBHKFUYETmoXSMrrVHOeLC3g',
    cover: 'https://i.imgur.com/GOlQbfC.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6vf0jeb',
    title: 'Power Love (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livetv.powerapp.com.tr/plove/love.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/0RzUswR.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rrlnupg',
    title: 'Power Türk Akustik (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livetv.powerapp.com.tr/pturkakustik/akustik.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/driabBO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-akpq90j',
    title: 'Power Türk Slow (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livetv.powerapp.com.tr/pturkslow/slow.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/tQSoQXW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-o03nb64',
    title: 'Power Türk Taptaze (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livetv.powerapp.com.tr/pturktaptaze/taptaze.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/a5nW3HU.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-12enx5e',
    title: 'Prambors',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://indihuy.streamized.net/atm/DASH/pramborstv/manifest.mpd',
    cover: 'https://images.maxstream.tv/sites/default/files/entry/0_e59etfmm/landscape_carousel_xxhdpi.webp',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ehesx5b',
    title: 'Prattel TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vs20.live.opencaster.com/prattelpe_a2b8d350/index.m3u8',
    cover: 'https://new.opencaster.com/uploads/logos/logo_244_1761928734.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-59g1yza',
    title: 'PRIDEtv LATAM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://backend.energeek.cl/webtv/pridetvweb/index.m3u8?token=ZZDemoIPTVGH',
    cover: 'https://neotv.cl/img/pridetv-512.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xy3vq9f',
    title: 'PTC Chakde (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/449/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PTC_CHAKDE/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-y8l6xv5',
    title: 'PTC Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d2lk5u59tns74c.cloudfront.net/out/v1/f913cf893c594f73b114216e74a2efbc/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PTC_MUSIC/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-r4gn9wm',
    title: 'Public Music (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-3.pishow.tv/live/441/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PUBLIC_MUSIC/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-q9jh14l',
    title: 'Punjabi Hits (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.ottlive.co.in/punjabihits/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PUNJABI_HITS/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wc1y206',
    title: 'Q-Music (Belgium) (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live-video.dpgmedia.net/e087512ad0c32643/out/v1/82d59bbe343b4d0896f829c59da82dc0/index.m3u8',
    cover: 'https://i.imgur.com/VX5e9Xt.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-02u57zy',
    title: 'Qello Concerts by Stingray (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883052',
    cover: 'https://i.imgur.com/IRyFTWq.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2dhvkbp',
    title: 'Qello Concerts by Stingray (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/qello-qello001-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/IRyFTWq.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-i3p7pzw',
    title: 'Qmusic (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.qmusic.nl/qmusic/videohls.m3u8',
    cover: 'https://i.imgur.com/fMTuqDu.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-m1c1ne6',
    title: 'Qwest TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://qwestjazz-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-qwestjazz-rakuten/CDN/master.m3u8',
    cover: 'https://i.imgur.com/DjgNNHK.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kqvemx7',
    title: 'Qwest TV Jazz & Beyond (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://samsungau-qwestjazz-samsungtv-zw2jc.amagi.tv/playlist/samsungau-qwestjazz-samsungtv/playlist.m3u8',
    cover: 'https://i.imgur.com/89yWH5L.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0aac1p8',
    title: 'Rabeh Saqer (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx004/playlist.m3u8',
    cover: 'https://shahid.mbc.net/mediaObject/b98b0635-c8ed-4a7c-9efa-5856e278f54b?type=png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9rtfmm3',
    title: 'Radio 21 TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.creacast.com/radio21/smil:radio21.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/u8OhwI1.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rxhh1q8',
    title: 'Radio Alegria 98.5 FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.compuwebecuador.com:3880/stream/play.m3u8',
    cover: 'https://i.imgur.com/N00aS3x.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-c4h5dkj',
    title: 'Radio Bonita 106.7 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8154/index.m3u8',
    cover: 'https://i.imgur.com/IvZtqyz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0ypb8sb',
    title: 'Radio Capital TiVu (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S35394734/Z6U2wGoDYANk/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/it/3/38/Radio_Capital_logo_%282020%29.svg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-g7zyobt',
    title: 'Radio Carnaval TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8116/index.m3u8',
    cover: 'https://i.imgur.com/cdpbkSo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-b4butgs',
    title: 'Radio Ciudad 98.9 FM TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.wilohosting.com:19360/radiociudadtv/radiociudadtv.m3u8',
    cover: 'https://i.imgur.com/LaSLZwR.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7v9cuw9',
    title: 'Radio Conexion Web TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tuvideoonline.com.ar:3391/live/radioconexionlive.m3u8',
    cover: 'https://i.imgur.com/pXS38zo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-npel7jk',
    title: 'Radio Contact (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://contact-live-hls.akamaized.net/hls/live/2038650/CONTACT-Live-HLS/master.m3u8',
    cover: 'https://i.imgur.com/32mmGvB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-e3q15dr',
    title: 'Radio Cuenca Estéreo (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8074/index.m3u8',
    cover: 'https://i.imgur.com/qZzSOeU.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-alacuf0',
    title: 'RADIO DISCOunt TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://585b674743bbb.streamlock.net/9030/9030/playlist.m3u8',
    cover: 'https://i.imgur.com/ScNYMmx.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-n8pnyou',
    title: 'Radio Fantástica 98.9 FM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://190.107.232.9:8082/livestream/stream.m3u8',
    cover: 'https://i.imgur.com/mpcIbrH.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4em5saj',
    title: 'Radio Freccia TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S3160845/0tuSetc8UFkF/playlist_video.m3u8',
    cover: 'https://i.imgur.com/RxeRlar.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5dy884a',
    title: 'Radio Fx Net (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamlov.alsolnet.com/radiofxnet/live/playlist.m3u8',
    cover: 'https://radiofxnet.ro/wp-content/uploads/2021/03/cropped-cropped-cropped-cropped-Radio_FX_Net_logo-1-1.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zxgkfxi',
    title: 'Radio Hit FM TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://peer2.tdiradio.com/static/streaming-playlists/hls/bab99862-ec1c-474f-9a02-4f8c8677d565/0.m3u8',
    cover: 'https://i.imgur.com/gP2OT4S.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6jy4ood',
    title: 'Radio Ideal 104.7 FM (La Esperanza) (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://www.idealfm104-7.com/hls/0/stream.m3u8',
    cover: 'https://i.imgur.com/chPfoOs.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-r43sews',
    title: 'Radio Imagen 105.1 FM (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streaming.imagenfm105-1.com/hls/stream.m3u8',
    cover: 'https://i.ibb.co/C9zjz9p/343159606-190989583743350-3489987129696505785-n.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-alv8ikm',
    title: 'Radio Italia Trend (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg00745-radioitailaspa-radioitalia-rakuten-sucsc.amagi.tv/hls/amagi_hls_data_rakutenAA-radioitalia-rakuten/CDN/master.m3u8',
    cover: 'https://i.imgur.com/HNrKqGM.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-z3t6fq3',
    title: 'Radio Javan TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rjtvhls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/a1zuW2C.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-eqzmxls',
    title: 'Radio JND (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://radiojnd.cdn.hostin.cc/radiojnd/playlist.m3u8',
    cover: 'https://i.imgur.com/nyVlZeL.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dvvcgrq',
    title: 'Radio Karaoke (288p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/radiokaraoke-2.m3u8',
    cover: 'https://i.imgur.com/9uRggjD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0yivob0',
    title: 'Radio Karolina TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://peer2.tdiradio.com/static/streaming-playlists/hls/4207de1d-52e8-4591-ad9e-218069b864d1/0.m3u8',
    cover: 'https://i.imgur.com/g2HpLX1.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-cxe3ixd',
    title: 'Radio Lola (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://peer2.tdiradio.com/static/streaming-playlists/hls/7c3ea8d3-49dc-4e1b-8b1e-dc6fab71f5cf/0.m3u8',
    cover: 'https://i.imgur.com/41eE8fl.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kzwka7o',
    title: 'Radio Master (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://videoserver.tmcreativos.com:19360/radiomaster/radiomaster.m3u8',
    cover: 'https://i.imgur.com/AUoxyzP.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gwi5ery',
    title: 'Radio Monumental TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloud37.ecuatel.com/monumentaltv/live/manifest.m3u8',
    cover: 'https://i.imgur.com/a97MaV2.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-o1zw3v7',
    title: 'Radio Piter Pan TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://58d921499d3d3.streamlock.net/RadioPiterpanTV/livestream/playlist.m3u8',
    cover: 'https://i.imgur.com/hbqVWV4.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-p59tjf4',
    title: 'Radio RAM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://1888165924.rsc.cdn77.org/live/RadioRAM/playlist.m3u8',
    cover: 'https://i.ibb.co/LXbchP5q/logo-1.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-00hvy2k',
    title: 'Radio Realpolitik (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vivo.solumedia.com:19360/realpolitik/realpolitik.m3u8',
    cover: 'https://i.imgur.com/L9KCdTX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wrtvgnc',
    title: 'Radio San Cristobal 88.7 FM',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.wilohosting.com:19360/sancristobalfm/sancristobalfm.m3u8',
    cover: 'https://i.imgur.com/zaJhBdj.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ya81x5d',
    title: 'Radio Stad den Haag (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rsdh.cloud-streams.com/rsdh/rsdh/playlist.m3u8',
    cover: 'https://i.imgur.com/ANK36EQ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-131g37k',
    title: 'Radio Suyai TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://signal.suyaitv.cl/live/26/playlist.m3u8?password=9PcdCnFxUe&username=ZZDemoIPTVGH',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-jzp03d5',
    title: 'Radio SWH TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://00ff00.latnet.media/edge/swh_tv.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/cFrNsXn.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-b85qq5c',
    title: 'Radio Télé Hit (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59d39900ebfb8.streamlock.net/RadioTelehit/RadioTelehit/playlist.m3u8',
    cover: 'https://i.ibb.co/Gt2QDgf/cropped-transparent2-103x70.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-z1rum4m',
    title: 'Radio Télé Kajou (480p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59d39900ebfb8.streamlock.net/RadioTelekAJOU/RadioTelekAJOU/playlist.m3u8',
    cover: 'https://i.ibb.co/1MhvJ3B/logork.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rrvjmyg',
    title: 'Radio Tropical Tarapoto (480p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://videoserver.tmcreativos.com:19360/raditropical/raditropical.m3u8',
    cover: 'https://i.imgur.com/TBPVOBI.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-uprawcu',
    title: 'Radio TV Sal One (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lon.rtsp.me/r3ZnG6WN2HIRxPARhAirIQ/1713628621/hls/9QdykDAy.m3u8',
    cover: 'https://i.imgur.com/pCz7ifY.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-v3zuojv',
    title: 'Radio TV Tendencias (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://s1.tvdatta.com:3950/multi_web/play.m3u8',
    cover: 'https://i.imgur.com/tsdrrV9.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bs305sj',
    title: 'Radio U TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://1826200335.rsc.cdn77.org/1826200335/index.m3u8',
    cover: 'https://i.imgur.com/HjZpC1V.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-eoat7mg',
    title: 'Radio Weser TV Bremen (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5857499ee635b.streamlock.net/radiowesertv-live/_definst_/mp4:livestreamTV/playlist.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nyovc0i',
    title: 'Radio Zeta TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S9346184/XEx1LqlYbNic/playlist_video.m3u8',
    cover: 'https://i.imgur.com/K2xLMin.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-w6p9c5b',
    title: 'RadioNL TV (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.radionl.tv/radionltv/radionltv/playlist.m3u8',
    cover: 'https://i.imgur.com/TVaMJYB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ywbxcvq',
    title: 'Raj Musix Kannada (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumt01.tangotv.in/RAJMUSIXKANDA/index.m3u8',
    cover: 'https://i.imgur.com/z7fhhyX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-68i6sxj',
    title: 'Raj Musix Malayalam (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumt04.tangotv.in/RAJMUSIXMALAYALAM/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_RAJ_MUSIX_MALAYALAM/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lxake7t',
    title: 'Raj Musix Tamil (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livestream.rajtv.tv/hlslive/Admin/px08241087/live/Raj_Musix/master_1.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_RAJ_MUSIX_TAMIL/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ulexnle',
    title: 'Raj Musix Telugu (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/1213/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_RAJ_MUSIX_TELUGU/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7z8hctu',
    title: 'Rararadio (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://58c04fb1d143f.streamlock.net/rararadio/rararadio/playlist.m3u8',
    cover: 'https://i.imgur.com/vTpfxUG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-td3dmfh',
    title: 'Rashid AlMajed (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dphwv2ufgnfsq.cloudfront.net/out/v1/59cd80dfe93a479eb8b4d79bc6f225ca/index.m3u8',
    cover: 'https://assets.mbcmood.com/channels/1720177618Rashid%20AlMajed.webp',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4ssaxa8',
    title: 'RC Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://view.rcserver.in/tmp_hls2/stream/index.m3u8',
    cover: 'https://rctv.in/logo_s.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ql4uj7b',
    title: 'RedMusic (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://fr.crystalweb.net:1936/redmusic/redmusic/playlist.m3u8',
    cover: 'https://i.ibb.co/1Lk8P1x/1-150x150.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fz6ojuv',
    title: 'Retro Music Television (360p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.mediawork.cz/retrotv/retrotvHQ1/playlist.m3u8',
    cover: 'https://i.imgur.com/pyOjdZs.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4uhi1db',
    title: 'Retro Plus 2 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tls-cl.cdnz.cl/retroplustvuno/live/playlist.m3u8',
    cover: 'https://i.imgur.com/5G5kian.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-k2k55po',
    title: 'Reyali (614p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8090/index.m3u8',
    cover: 'https://i.imgur.com/YmFjnsF.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ohrbp00',
    title: 'RFPtv (360p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video03.logicahost.com.br/rfptv/rfptv/playlist.m3u8',
    cover: 'https://i.imgur.com/I60nQuR.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-avj5ed8',
    title: 'RHT Guadeloupe (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://edge12.vedge.infomaniak.com/livecast/ik:livehautetension/manifest.m3u8',
    cover: 'https://i.imgur.com/hQ0Q6nE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wg4iab2',
    title: 'Rock TV (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.nasatv.com.mk/rocktv/hls/rocktv_live.m3u8',
    cover: 'https://i.imgur.com/Y9miDQo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vbei1qp',
    title: 'Rock TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv.broadcasting.ro/rocktv/85c83a80-4f71-4f2d-a8d6-43f676896bcb.m3u8',
    cover: 'https://i.imgur.com/VB88A5V.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4lut55k',
    title: 'Rotana Khalijia (1080p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rotana.hibridcdn.net/rotananet/khaleejiya_net-7Y83PP5adWixDF93/playlist.m3u8',
    cover: 'https://i.imgur.com/6HMluzv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mdatvyn',
    title: 'Rotana Music (1080p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rotana.hibridcdn.net/rotananet/music_net-7Y83PP5adWixDF93/playlist.m3u8',
    cover: 'https://i.imgur.com/2zFQbQi.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bww3pgh',
    title: 'RQP Paraguay (1080i)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://alba-py-rqp-rqp.stream.mediatiquestream.com/index.m3u8',
    cover: 'https://i.imgur.com/0cUc4Nt.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5otmz2c',
    title: 'RTI La 3 (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://69.64.57.208/la3/index.m3u8',
    cover: 'https://i.imgur.com/HdNshgF.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-62g3dn4',
    title: 'RTL2',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/rtl2.m3u8',
    cover: 'https://i.imgur.com/deC4z34.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-r10ug5j',
    title: 'RTL 102.5 Best (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S76960628/OEPHRUIctA0M/playlist_video.m3u8',
    cover: 'https://i.imgur.com/9PNlbaq.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1o1mcfa',
    title: 'RTL 102.5 Bro&Sis (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S75007890/MUGHuxc9dQ3b/playlist_video.m3u8',
    cover: 'https://i.imgur.com/EWbK4XZ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-sgusv0w',
    title: 'RTL 102.5 Caliente (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S8448465/zTYa1Z5Op9ue/playlist_video.m3u8',
    cover: 'https://i.imgur.com/P0zsi6I.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5xxpp8z',
    title: 'RTL 102.5 Disco (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S51100361/0Fb4R3k82b5Z/playlist_video.m3u8',
    cover: 'https://i.imgur.com/JA1OPrz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-d8i42eh',
    title: 'RTL 102.5 Napulè (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S27134503/0f9AhuwKlhnZ/playlist_video.m3u8',
    cover: 'https://i.imgur.com/HFPw1YW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ggdk3eu',
    title: 'RTL 102.5 Traffic (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S38122967/2lyQRIAAGgRR/playlist_video.m3u8',
    cover: 'https://i.imgur.com/EBftMcB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2kblsm5',
    title: 'RTL 102.5 TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S97044836/tbbP8T1ZRPBL/playlist_video.m3u8',
    cover: 'https://i.imgur.com/75qUdR7.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-54nkd87',
    title: 'RTL Gold (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.rtl.lu/data/live/tele/rtlgold/playlist.m3u8',
    cover: 'https://i.imgur.com/LzHQoUv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9cnf6kl',
    title: 'RTL Today Radio (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.rtl.lu/data/live/tele/rtltodayradio/playlist.m3u8',
    cover: 'https://i.imgur.com/O1c6wpt.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7mhfa7r',
    title: 'RTV Glas Drine (404p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://glasdrine.cutuk.net:8081/433ssdsw/GlasDrineSD/playlist.m3u8',
    cover: 'https://i.imgur.com/9NgxOdb.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-owhcd7n',
    title: 'RTV Vida (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vidartv2.todostreaming.es/live/radiovida-emisiontvhd.m3u8',
    cover: 'https://i.imgur.com/EqUfEAh.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wzvz97b',
    title: 'RU.TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://bl.rutube.ru/livestream/b1eb8e90d7e636677b3eb73b4fcbb717/index.m3u8?s=d-E-bxKy2v3EEJ94RQX9CA&e=2069285076&scheme=https',
    cover: 'https://i.imgur.com/Z7HUU7V.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zrgpnhs',
    title: 'Salsa Gorda Television (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live20.bozztv.com/akamaissh101/ssh101/qMUAZEy/playlist.m3u8',
    cover: 'https://i.imgur.com/3IhYd7G.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5bgu7m2',
    title: 'Salto Brasa Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://salto-streams.nl/hls/sotv1.m3u8',
    cover: 'https://i.vimeocdn.com/portrait/31947989_640x640',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2ukfp9n',
    title: 'Sana Plus (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumbai-edge.smartplaytv.in/SanaPlusHD/index.m3u8',
    cover: 'https://i.imgur.com/N6tKUZv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dvoeuwt',
    title: 'Sangeet Bangla (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-4.pishow.tv/live/1143/master.m3u8',
    cover: 'https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/transparentImages/Sangeet%20Bangla.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7hdq0jj',
    title: 'Sangeet Bhojpuri (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://103.213.31.109:90/SangeetBhojpuri/playlist.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143757_ld_h15_aa.png?lock=720x540',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wbua5q4',
    title: 'Sangeet Marathi (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-3.pishow.tv/live/1229/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SANGEET_MARATHI/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-f2148yj',
    title: 'Shemaroo Filmi Gaane (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.213.31.109:90/ShemarooFilmiGaane/playlist.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/channel/0d5b07555b2d4415aa9f145273095ed7.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-l732fx9',
    title: 'Siembra TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamunoapp.com:3809/live/siembratvlive.m3u8',
    cover: 'https://www.vivalivetv.com/public/files/shows/0/1/3226-294x165-FFFFFF.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zdoodxp',
    title: 'Sky Folk TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu.live.skyfolk.mk/live.m3u8',
    cover: 'https://i.imgur.com/ya5xpUL.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gykd3j6',
    title: 'SL48 TV (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://media.velcom.it:1935/sl48/sl48/playlist.m3u8',
    cover: 'https://i.imgur.com/0iPU3JE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ccvend3',
    title: 'Slager Muzika',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream-23.mazana.tv/slagrmuzika.m3u8s',
    cover: 'https://i.imgur.com/hKdXwrW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-17sp1tl',
    title: 'Slager Original',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream-13.mazana.tv/slagroriginal.m3u8s',
    cover: 'https://i.imgur.com/0YjeWcq.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0tdasty',
    title: 'Sol Música (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d2glyu450vvghm.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-21u4g5cjglv02/sm.m3u8',
    cover: 'https://i.imgur.com/rbJrmPw.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-s8k3aay',
    title: 'SoloBáilalo (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5ff3d9babae13.streamlock.net/8000/8000/playlist.m3u8',
    cover: 'https://i.imgur.com/SImJE7c.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9bpemet',
    title: 'Songdew TV (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/1411.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s142920_ld_h9_aa.png?lock=720x540',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-p8bdyga',
    title: 'SONGTV Russia',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://songtv.hls.iptvdc.com/web-russia/playlist.m3u8',
    cover: 'https://i.imgur.com/nM7LbmV.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-m1ihsc6',
    title: 'SOY Plancha TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59ef525c24caa.streamlock.net/vmtv/soyplancha/playlist.m3u8',
    cover: 'https://i.ibb.co/P4kpMgk/1689344714578.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-a6b2x8r',
    title: 'Space Shower TV (544p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs26',
    cover: 'https://static.wikia.nocookie.net/logopedia/images/2/24/Space_Shower_-_1999.svg/revision/latest/scale-to-width-down/512',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-i9amgbp',
    title: 'SpektraTV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8026/tracks-v1a1/index.m3u8',
    cover: 'https://i.imgur.com/0zCt8e4.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-safjgyg',
    title: 'Spirit TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdnlive.myspirit.tv/LS-ATL-43240-2/index.m3u8',
    cover: 'https://i.imgur.com/yCp6vXz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-n50tmyq',
    title: 'Star 101 FM (KNUT Guam) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live2.tensila.com/knut-v-1.choice/hls/master.m3u8',
    cover: 'https://star101.gu/images/fb_icon.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6zkq09a',
    title: 'Star Plus Music (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.muzickatv.mk/live/StarMusic2.m3u8',
    cover: 'https://i.imgur.com/01yz22a.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3znaoht',
    title: 'Steelbird Music (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn2.in/SteelbirdMusicTVhls/live.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Steelbird_Music.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-l4zkpdc',
    title: 'Stingray Classic Rock (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-101ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/FBgu8yB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-m8a0ekr',
    title: 'Stingray Classica (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/classica-cla008-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/nh1k5RC.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dijww1k',
    title: 'Stingray CMusic (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/cmusic-cme004-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/3UppN5P.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-47ft52o',
    title: 'Stingray DJAZZ (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/djazz-djaads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Stingray_Djazz.png/960px-Stingray_Djazz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4uae8ju',
    title: 'Stingray Easy Listening (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-137ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Stingray_Music_logo.svg/960px-Stingray_Music_logo.svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-76t0ppg',
    title: 'Stingray Euro Hits (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-214ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/FyhO9U5.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-42dndkt',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",Stingray Éxitos del Momento (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/stingray-xitos-del-momento/master.m3u8?ads.vf=--_m-LmFeCi',
    cover: 'https://i.imgur.com/wiasHUR.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2phqjzo',
    title: 'Stingray Flashback 70s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-115ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/jf5C9QF.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9xncfwv',
    title: 'Stingray Greatest Hits (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883053',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-o0omj68',
    title: 'Stingray Greatest Hits (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-155ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gisqcpc',
    title: 'Stingray Greatest Holiday Hits',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/manifest/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/54947915-6504-4548-aaef-eabd451f8607/1.m3u8',
    cover: 'https://i.imgur.com/Hz2d6og.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qqqnxwe',
    title: 'Stingray Hit List (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-107ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/lgpIwId.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-x2lxz17',
    title: 'Stingray Hitlist (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883054',
    cover: 'https://i.imgur.com/lgpIwId.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rujwdhm',
    title: 'Stingray Holidayscapes (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://plextv.ott-channels.stingray.com/holidayscapes/master.m3u8',
    cover: 'https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fprovider-static.plex.tv%2Fepg%2Fcms%2Fproduction%2F9cb4b15c-8244-4499-ae2c-9a92d4cdff6d%2F13895_SHS_Plex_Logos_Holidays_1500x1000_Dark-Background.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-03lhw66',
    title: 'Stingray Hot Country (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-108ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/PZhxyIT.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-iuz2xd3',
    title: 'Stingray Jukebox Oldies (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-021ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Stingray_Music_logo.svg/960px-Stingray_Music_logo.svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0p5s2vb',
    title: 'Stingray Karaoke (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/karaoke-kar000-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/9TLTLS3.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2m2x17s',
    title: 'Stingray Naturescape (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883056',
    cover: 'https://i.imgur.com/882kd90.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ddcxo9h',
    title: 'Stingray Naturescape (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/naturescape-a003-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/882kd90.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-59bh7q7',
    title: 'Stingray Nothin\' But 90s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-142ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/Tq3I0po.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-evjscgk',
    title: 'Stingray Remember the 80s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-128ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/6E3wYrb.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wzgietb',
    title: 'Stingray Remember the 80s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883071',
    cover: 'https://i.imgur.com/duwc8E8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vpuqcut',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",Stingray Remember the 80s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/stingray-remember-the-80s/master.m3u8?ads.vf=Fq0bVWh7hy0',
    cover: 'https://i.imgur.com/duwc8E8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lhxr7a0',
    title: 'Stingray Rock Alternative (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-102ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/mt8ulVX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zhilaas',
    title: 'Stingray Romance Latino (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-202ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Stingray_Music_logo.svg/960px-Stingray_Music_logo.svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zl9vzud',
    title: 'Stingray Smooth Jazz (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-140ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/h1DsOzH.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-22p8lrv',
    title: 'Stingray Soul Storm (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-134ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/dU1KC3f.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-afyuwpf',
    title: 'Stingray The Spa (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-122ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/ywAN923.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gsx9vit',
    title: 'Stingray Today\'s KPOP (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-317ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/mMbntB5.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9tj0988',
    title: 'Stingray Today\'s Latin Pop (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-190ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/Os3kRRP.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-25f07l3',
    title: 'Stingray Urban Beat (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-133ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/Os3kRRP.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xf0m7ql',
    title: 'Stryk TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://fffffff110156200.tvustream.com:8298/ryfy.m3u8',
    cover: 'https://i.imgur.com/rKkHhkX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-sj0suxa',
    title: 'STZ Telebista (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/stztelebista/index.m3u8',
    cover: 'https://i.imgur.com/rFQuAEv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nyy6wp9',
    title: 'Súper Q Panamá (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vcp8.myplaytv.com:1936/superq/superq/playlist.m3u8',
    cover: 'https://i.imgur.com/ocTnqi7.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-h066g45',
    title: 'Super TV (1080i) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.supertv.ro/live/supertv/playlist.m3u8',
    cover: 'https://i.imgur.com/pzxUE0O.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dudj10m',
    title: 'Supermúsica TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://backupmaxmedia.hvmultiplay.com/hls/stream4/supermusica.m3u8',
    cover: 'https://i.imgur.com/MiVs42N.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wjd10eq',
    title: 'T2 TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://t2hls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/Wu8MBb7.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fhoxz96',
    title: 'Tabbar Hits (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vglivessai.akamaized.net/sg/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/e11b0319-52e8-4190-ab03-3931cc68eac9/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_TABBAR_HITS/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7ypb0r0',
    title: 'Tarab (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://shd-amg-fast-btpls.shahid.net/tx002/playlist.m3u8',
    cover: 'https://assets.mbcmood.com/channels/1738059679TARAB_Logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4ipdq1d',
    title: 'Tarang Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livetv.tarangplus.in/tarangmusic-origin/live/playlist.m3u8',
    cover: 'https://i.imgur.com/oSm8zFD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2aolgtn',
    title: 'TDI Radio TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://peer2.tdiradio.com/static/streaming-playlists/hls/8f5d84ce-e8ac-4109-9975-9665f5605557/master.m3u8',
    cover: 'https://i.imgur.com/POdTmaD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-h9ku720',
    title: 'Tele7music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.tele7music.ro/hls/stream/index.m3u8',
    cover: 'https://i.imgur.com/11b5W8u.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6xpsvbx',
    title: 'Tele Dominicana TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vdopanel.jlahozconsulting.com/p/3417/hybrid/play.m3u8',
    cover: 'https://dominicanchannels.com/wp-content/uploads/teledominicana.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-slks29g',
    title: 'Tele Zoukla',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vdo.pro-fhi.net:3228/stream/play.m3u8',
    cover: 'https://i.imgur.com/lWYKgPC.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3cdpy7l',
    title: 'Telehit Musica',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://190.61.55.34:2401/play/a06t/index.m3u8',
    cover: 'https://i.imgur.com/CofYjWh.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vhp55tr',
    title: 'TeleMusik Senegal (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://58c04fb1d143f.streamlock.net/rezopropartner_1_live/rezopropartner_1_live/playlist.m3u8',
    cover: 'https://i.imgur.com/dPAPLsd.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-w4i8qee',
    title: 'Telerumba TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://inliveserver.com:1936/18506/18506/playlist.m3u8',
    cover: 'https://www.vivalivetv.com/public/files/shows/0/1/3649-294x165-FFFFFF.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-cb7wy94',
    title: 'Tezaur TV (576i)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tezaurtv.md/stream/index.m3u8',
    cover: 'https://i.imgur.com/eAagwLW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-06r0en3',
    title: 'That\'s 70s (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://92.114.85.72:8000/play/a0lc',
    cover: 'https://i.imgur.com/j2q53JQ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6mb3u5d',
    title: 'The Country Network (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg00600-amg00600c1-thecountrynetwork-us-5497.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/en/d/dd/The_Country_Network_Logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kds5xtl',
    title: 'The Voice TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://bss1.neterra.tv/thevoice/thevoice.m3u8',
    cover: 'https://i.imgur.com/OoJSmoj.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-cjq9337',
    title: 'Tiankov Folk (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamer103.neterra.tv/tiankov-folk/live.m3u8',
    cover: 'https://i.imgur.com/VKY4q64.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-cihplz1',
    title: 'Tiankov Orient Folk (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamer103.neterra.tv/tiankov-orient/live.m3u8',
    cover: 'https://i.imgur.com/33LexyP.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ta30jqf',
    title: 'TikTok Radio Brasil (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d1bl6tskrpq9ze.cloudfront.net/hls/master.m3u8?ads.xumo_channelId=99992529',
    cover: 'https://static.wikia.nocookie.net/logopedia/images/f/f4/TikTok_Radio.svg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-a72iwnk',
    title: 'TMA (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://hls.tmacaraibes.com/live/index.m3u8',
    cover: 'https://i.imgur.com/1iOAl2j.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zk9rabv',
    title: 'Top TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://82.165.71.58:8081/TopTV/live/playlist.m3u8',
    cover: 'https://i.imgur.com/UJqbKEC.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-owocaug',
    title: 'TopEstrada TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://live.topestrada.com/live/topestrada/playlist.m3u8',
    cover: 'https://i.imgur.com/0Dh1FJZ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-an0wheo',
    title: 'Topical Moon RD (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://sistemastr.tropicalmoonmedia.com/live/56BE17DB16EB76C9F2DDB8346F4DFA4E/30.m3u8',
    cover: 'https://www.vivalivetv.com/public/files/shows/0/1/3900-294x165-FFFFFF.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-h57p3nn',
    title: 'Totalmusic (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn.global.elektamedia.com/live/c7eds/Totalmusic/SA_LIVE_hls_enc/master.m3u8',
    cover: 'https://static.elektamedia.com/ch/tmc_main.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vquwbax',
    title: 'Totalmusic 80s (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_80s/SA_LIVE_hls_enc/master.m3u8',
    cover: 'https://static.elektamedia.com/ch/tmc_80s.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ct42rw8',
    title: 'Totalmusic 2000s (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_00s/SA_LIVE_hls_enc/master.m3u8',
    cover: 'https://static.elektamedia.com/ch/tmc_00s.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ggh0e9d',
    title: 'Totalmusic Concerts (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_Concerts/SA_LIVE_hls_enc/master.m3u8',
    cover: 'https://static.elektamedia.com/ch/tmc_concerts.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hqxwtlo',
    title: 'Totalmusic Dance (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_Dance/SA_LIVE_hls_enc/master.m3u8',
    cover: 'https://static.elektamedia.com/ch/tmc_dance.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gysvben',
    title: 'Trace Brasil (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01131-tracetv-tracebrazuca-samsungbr/playlist.m3u8',
    cover: 'https://i.imgur.com/DFBocPu.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vj71xf5',
    title: 'TRACE Brazuca (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg01131-tracetv-amg01131c4-stirr-us-4390.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/DFBocPu.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1c8cm5j',
    title: 'Trace Gospel (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://channels.trace.plus/Traceprod/GOSPEL_FR/.m3u8',
    cover: 'https://i.imgur.com/X0UmU3K.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hg5caru',
    title: 'Trace Latina (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg01131-tracetv-tracelatina-glewed-vtnk7.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/CUVAi4u.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3lk92i9',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",TRACE Latina (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/trace-latina/encrypted.m3u8?ads.vf=8rE20DsHHI0',
    cover: 'https://i.imgur.com/CUVAi4u.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mi095xd',
    title: 'Trace UK (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d2l4tng0wskzvn.cloudfront.net/Trace_GB.m3u8',
    cover: 'https://a.jsrdn.com/hls/23073/trace-uk/logo_20240627_183320_70.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mg3tgm0',
    title: 'Trace Urban (Australia) (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lightning-traceurban-samsungau.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/DLIbUMx.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7idh806',
    title: 'Traditional TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://83.103.149.75:8085/udp/239.30.0.9:4000',
    cover: 'https://i.ibb.co/G5bNH48/Traditional-TV-HD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ja61igm',
    title: 'Tropi Q 99.7 FM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://www.streaming507.net:19360/videotropiq/videotropiq.m3u8',
    cover: 'https://i.imgur.com/5rPdHhb.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-krvjtv2',
    title: 'Tropical Moon Cumbia TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://srv2.tropicalmoonmedia.com/cumbiatv/cumbiatv/playlist.m3u8',
    cover: 'https://i.imgur.com/jL1kLyS.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dxx15u1',
    title: 'Tropical Music TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59a564764e2b6.streamlock.net/vallenato/tropical/playlist.m3u8',
    cover: 'https://i.imgur.com/h48pwLn.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-jup4lbx',
    title: 'Tropicalia 93.9 FM (1280p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://45.184.109.10/live/69393EAE6ADBC65A68F942022362A202/67.m3u8',
    cover: 'https://i.imgur.com/oMML5Ue.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7yhlxqc',
    title: 'TRT Müzik (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv-trtmuzik.medya.trt.com.tr/master.m3u8',
    cover: 'https://i.imgur.com/JgUzRH8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-yznxqy0',
    title: 'Tu Musica HD (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://edge.essastream.com/tumusicahd/tracks-v1a1/mono.m3u8',
    cover: 'https://i.imgur.com/HnjUjog.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7d89hfm',
    title: 'Tunes 6 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.d6-pro.com/tunes6music/live/video.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Tunes_6.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-oy2wg4v',
    title: 'Turbo Mix Radio TV (360p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://7.innovatestream.pe:19360/turbomixoficial/turbomixoficial.m3u8',
    cover: 'https://i.imgur.com/AsdBQa3.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-se5ak7l',
    title: 'Türkmen Owazy (406p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://alpha.tv.online.tm/hls/ch005.m3u8',
    cover: 'https://i.imgur.com/Ap7l2jC.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ck00j0k',
    title: 'TV Arbëria 4 Muzikë (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ssh101.bozztv.com/ssh101/rtvarberia4/playlist.m3u8',
    cover: 'https://i.imgur.com/zLRzyVS.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ftyaagt',
    title: 'TV Arbëria Retro Hits (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ssh101.bozztv.com/ssh101/rtvarberiaretro/playlist.m3u8',
    cover: 'https://i.imgur.com/zLRzyVS.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-k8xa7wh',
    title: 'TV Duga Plus (480p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://109.92.29.10:1935/tvduga/tvduga/playlist.m3u8',
    cover: 'https://i.imgur.com/qZV3JW5.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-d7r85iw',
    title: 'TV Éxitos (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streaming.grupomediosdelnorte.com:19360/tvexitos/tvexitos.m3u8',
    cover: 'https://i.imgur.com/ahz7X7u.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-08eu9f9',
    title: 'TVOMIX (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloud.tvomix.com/TVOMIX/index.m3u8',
    cover: 'https://ugc.production.linktr.ee/7ef61237-c46d-456b-afe3-a42ef49a979e_Mejorado2.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7ygu7sy',
    title: 'TVONE Nicaragua (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hdbox.chunklistv.com/live?stream=tvone',
    cover: 'https://i.imgur.com/FNk6rdz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dc6tdya',
    title: 'TVR Folclor',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tvr-folclor.lg.mncdn.com/tvrfolclor/smil:tvrfolclor.smil/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/TVR_Folclor_Logo_2023.svg/960px-TVR_Folclor_Logo_2023.svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7nojfmy',
    title: 'TVS Music Network (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rpn.bozztv.com/gusa/gusa-tvsmusic/index.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rox7yql',
    title: 'TVUNO (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamtv.onliv3.online:1936/karibtv/karibtv/playlist.m3u8',
    cover: 'https://i.imgur.com/dht94P4.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-s6rs600',
    title: 'TZiK [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://54627d4fc5996.streamlock.net/tzik/tzik/chunklist.m3u8',
    cover: 'https://i.imgur.com/TAagRkn.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fjat0sr',
    title: 'Ultimate TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.ottlive.co.in/utvtamil/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/utvtamil.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-47wt73b',
    title: 'Urbano TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59ef525c24caa.streamlock.net/tvurbano/tvurbano/playlist.m3u8',
    cover: 'https://i.imgur.com/KVVU9PI.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lnqocp7',
    title: 'V2BEAT (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://abr.de1se01.v2beat.live/playlist.m3u8',
    cover: 'https://i.imgur.com/PXGqyLn.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bkqjbnu',
    title: 'V Classic TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5eaccbab48461.streamlock.net:1936/8112/8112/playlist.m3u8',
    cover: 'https://i.imgur.com/WIACJSy.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-th7z8kd',
    title: 'Vaanavil TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://6n3yope4d9ok-hls-live.5centscdn.com/vaanavil/TV.stream/playlist.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Vaanavil_TV.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-i66k1ef',
    title: 'Vallenato Internacional (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59a564764e2b6.streamlock.net/vallenato/vallenatom/playlist.m3u8',
    cover: 'https://i.imgur.com/rVKroNW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8ognf52',
    title: 'VAM Vid\'s & More (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://sincerecloud.stream/loadbalancer/public/J9EmQQGf.m3u8',
    cover: 'https://i.imgur.com/CD1PffA.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mmak3ip',
    title: 'Vantage Dance (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls.vantagetv.ee/vdance_stream/main_stream.m3u8',
    cover: 'https://vantagetv.ee/vantage_dance.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bod80v7',
    title: 'Vantage Music (720p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls.vantagetv.ee/vmusic_stream/main_stream.m3u8',
    cover: 'https://vantagetv.ee/vantage_music.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2l9zq0r',
    title: 'Vantage Music UK (1080p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls.vantagetv.co.uk/vmusicuk_stream/index.m3u8',
    cover: 'https://vantagetv.ee/vantage_music.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-oou6ts7',
    title: 'Vantage Rock (720p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls.vantagetv.ee/vrock_stream/index.m3u8',
    cover: 'https://vantagetv.ee/vantage_rock.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zz5nmb1',
    title: 'Venus Media (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tigocloud.desdeparaguay.net/venusmedia/venusmedia/playlist.m3u8',
    cover: 'https://i.imgur.com/XwmUbfp.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-y048gc0',
    title: 'Vevo 2K (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d1s6jz7jeei17.cloudfront.net/playlist/amg00056-vevotv-vevo2kau-samsungau/playlist.m3u8',
    cover: 'https://images.pluto.tv/channels/5fd7bca3e0a4ee0007a38e8c/featuredImage.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9re8i4q',
    title: 'Vevo 70s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg00056-vevotv-vevo70saunz-samsungau-xzszd.amagi.tv/playlist/amg00056-vevotv-vevo70saunz-samsungau/playlist.m3u8',
    cover: 'https://images.pluto.tv/channels/5f32f26bcd8aea00071240e5/featuredImage.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-tc3m0d4',
    title: 'Vevo 80s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg00056-vevotv-vevo80saunz-samsungau-rp5e3.amagi.tv/playlist/amg00056-vevotv-vevo80saunz-samsungau/playlist.m3u8',
    cover: 'https://images.pluto.tv/channels/5fd7b8bf927e090007685853/featuredImage.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1to3sa0',
    title: 'Vevo 90s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg00056-vevotv-vevo90saunz-samsungau-n6a0d.amagi.tv/playlist/amg00056-vevotv-vevo90saunz-samsungau/playlist.m3u8',
    cover: 'https://images.pluto.tv/channels/5fd7bb1f86d94a000796e2c2/featuredImage.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7kdzrv0',
    title: 'Vevo Country (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg00056-vevotv-vevocountryau-samsungau-ktmqm.amagi.tv/playlist/amg00056-vevotv-vevocountryau-samsungau/playlist.m3u8',
    cover: 'https://images.pluto.tv/channels/5da0d75e84830900098a1ea0/featuredImage.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9fh8irk',
    title: 'Vevo Hip Hop (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d3vgs3ro3x6v8a.cloudfront.net/Vevo_Hip_Hop.m3u8',
    cover: 'https://i.imgur.com/Lbc9cYw.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-y49zieq',
    title: 'Vevo Latino (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg00056-amg00056c13-rakuten-es-3246.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/D7SwmuB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8vmfwwm',
    title: 'Vevo Pop (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d128y56w6v2kax.cloudfront.net/playlist/amg00056-vevotv-vevopopau-samsungau/playlist.m3u8',
    cover: 'https://i.imgur.com/dZHktKR.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lj1zdwg',
    title: 'Vevo R&B (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d1hf773q57zx9s.cloudfront.net/Vevo_R_B.m3u8',
    cover: 'https://images.pluto.tv/channels/5da0d83f66c9700009b96d0e/featuredImage.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qbio1ck',
    title: 'Vevo Retro Rock (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d2lyea6if8kkz9.cloudfront.net/playlist/amg00056-vevotv-vevoretrorockau-samsungau/playlist.m3u8',
    cover: 'https://i.imgur.com/H1Aap4E.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-e49tt8d',
    title: 'Video Rola (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d3b2epqdk0p7vd.cloudfront.net/out/v1/8a448b5e16384af4a3c8146a7b049c32/index.m3u8',
    cover: 'https://i.imgur.com/9w54eVy.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fes2vl4',
    title: 'Video Tour Channel (480p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://k4.usastreams.com/videotour/videotour/playlist.m3u8',
    cover: 'https://i.imgur.com/zEi8eMC.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-krzp2wy',
    title: 'Vijay Takkar APAC (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tglmp01.akamaized.net/out/v1/c1071012b73f4f189b202e1529e8f802/manifest.mpd',
    cover: 'https://dtil.tmsimg.com/assets/s144078_ld_h15_aa.png?lock=720x540',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fdhl5xk',
    title: 'Vĩnh Long TV5 (1080p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.fptplay53.net/epzsd1/vinhlong5_vhls.smil/chunklist.m3u8',
    cover: 'https://i.imgur.com/F12VdKO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0wuxfbj',
    title: 'Vintage Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59ef525c24caa.streamlock.net/vmtv/tvvintage/playlist.m3u8',
    cover: 'https://i.imgur.com/KImqYnN.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6ojsgzr',
    title: 'VIP TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ed5ov1.live.opencaster.com/bkyqeDgfaukC/index.m3u8',
    cover: 'https://i.imgur.com/6N0qITv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6hguo8d',
    title: 'Visión Televisión (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8016/index.m3u8',
    cover: 'https://i.imgur.com/HV5tgcM.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-uh8z1sv',
    title: 'VIVA Russia (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live20.bozztv.com/akamaissh101/ssh101/vivarussia/chunks.m3u8',
    cover: 'https://i.imgur.com/OFhQQCD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-oe2ysfg',
    title: 'VM Latino (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59ef525c24caa.streamlock.net/vmtv/vmlatino/playlist.m3u8',
    cover: 'https://i.imgur.com/Dvo1b82.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-yivwgn1',
    title: 'VoiceOver Radio TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8198/index.m3u8',
    cover: 'https://i.imgur.com/HzGs1Eh.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-w643lf3',
    title: 'Volksmusik TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vmtv.iptv-playoutcenter.de/vmtv/vmtv1/playlist.m3u8',
    cover: 'https://i.imgur.com/EsWuCJ3.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-cs1lbh5',
    title: 'Vos y TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloud37.ecuatel.com/vostv/live/manifest.m3u8',
    cover: 'https://i.imgur.com/294FDCB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-sljutdz',
    title: 'VRT Radio Klara (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live-radio-cf-vrt.akamaized.net/groupb/live/eee20dc8-158a-4194-8d92-0c5a73ffcd3b/live.isml/.m3u8',
    cover: 'https://i.ibb.co/YdDkSJW/VRT-Klara-2020-svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7ti17h5',
    title: 'VRT Radio StuBru (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live-radio-cf-vrt.akamaized.net/groupb/live/0f394a26-c87d-475e-8590-e9c6e79b28d9/live.isml/.m3u8',
    cover: 'https://i.ibb.co/y0TcsXw/512px-VRT-Stu-Bru-logo-svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9kwlpau',
    title: 'WAVE TV (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamer2.nexgen.bz/08-WAVE/index.m3u8',
    cover: 'https://i.imgur.com/V8Hfgis.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-djdun14',
    title: 'Wavez FM',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vs20.live.opencaster.com/wavezfm1075aruba_37766c9d/index.m3u8',
    cover: 'https://i.imgur.com/uyROZSS.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-yzdb88p',
    title: 'WVCU-LP Concord University Radio The Cure 97.7 (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video1.getstreamhosting.com:1936/8152/8152/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/en/0/0f/WVCU-LP_2015.PNG',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bzc3uuz',
    title: 'WZNT (Zeta 93) (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livestream.lamusica.com/nacionz/ngrp:nacionz_all/playlist.m3u8',
    cover: 'https://i.ibb.co/KzqWLZR/images-57.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-521wtms',
    title: 'X 102.7 FM (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.castr.com/65dee3aad6beacddbd6cd1af/live_21e811c0d60d11eeaa1a471c2c967e4a/index.m3u8',
    cover: 'https://i.imgur.com/28b810Y.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-a6ok1e2',
    title: 'X Level Media (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tuvideoonline.com.ar:3332/live/xlevelmedialive.m3u8',
    cover: 'https://i.imgur.com/BGwQdQW.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hgo65yc',
    title: 'XITE (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://xite-rakuten.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/jxuwGRi.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-o4eti8t',
    title: 'XITE 90\'s Throwback (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d284aawtm5vi48.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-fjdfi2br1jtq7/XITE_90s_Throwback.m3u8',
    cover: 'https://i.imgur.com/vwpOzuz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dp89idk',
    title: 'XITE Classic Country (1080p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://pb-wgi5ljoabjgdm.akamaized.net/XITE_Countrys_Finest.m3u8',
    cover: 'https://i.imgur.com/XQrMCkT.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-e1mw18g',
    title: 'XITE Hits (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d726x48n2pd5h.cloudfront.net/XITE_Hits.m3u8',
    cover: 'https://i.imgur.com/N51Rp7E.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ezsybtv',
    title: 'XITE Hits Germany (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d726x48n2pd5h.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-skxr1pazhltvp/XITE_Hits.m3u8',
    cover: 'https://i.imgur.com/N51Rp7E.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5uld983',
    title: 'XITE Hits UK (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg01243-xitenetworksint-hitsuk-samsunguk-mvovq.amagi.tv/playlist/amg01243-xitenetworksint-hitsuk-samsunguk/playlist.m3u8',
    cover: 'https://i.imgur.com/N51Rp7E.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-62kidco',
    title: 'XITE Just Chill (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dvnftgdlbnemm.cloudfront.net/XITE_Just_Chill.m3u8',
    cover: 'https://provider-static.plex.tv/epg/cms/production/927dd614-017d-49dd-9eb9-0ed79d09084e/xitejustchill_logo_light_-_Arlette_FiranRDX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-b7fprw6',
    title: 'XITE Nuevo Latino (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d3bsgqzbpkrvbb.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-w288eaw03izg1/XITE_Nuevo_Latino.m3u8',
    cover: 'https://i.imgur.com/2qyl2y3.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-v1u2456',
    title: 'XITE Reggae Vibes (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dw2m7yrngfg8c.cloudfront.net/XITE_Reggae_Vibes.m3u8',
    cover: 'https://provider-static.plex.tv/epg/cms/production/c7506335-967f-46a9-917a-2a35475cd96c/xitereggaevibes_logo_light_-_Arlette_FiranRDX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-z6xv06t',
    title: 'XITE Rock x Metal (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d198ro05q94rc4.cloudfront.net/XITE_Rock_On.m3u8',
    cover: 'https://i.imgur.com/uIIUIuN.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-in85h6p',
    title: 'XITE Siempre Latino (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d1xc25jm9e0l4b.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-xplkt8i7m24dc/XITE_Siempre_Latino.m3u8',
    cover: 'https://i.imgur.com/bwmIEgG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-47sfybk',
    title: 'XPTV1 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://janus.xpbroadcasting.com:8443/hls/xptv1.m3u8',
    cover: 'https://i.imgur.com/Ty7GkoN.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zcfs1aj',
    title: 'YleX Studio Live (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ylestudiolive.akamaized.net/hls/live/2007826/ylestudiolive-YleX/master.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/YleX.svg/960px-YleX.svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-id951v9',
    title: 'YRF Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01412-xiaomiasia-yrfmusic-xiaomi/playlist.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/YRF_Music.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9tnv07p',
    title: 'ZB Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://server.zillarbarta.com/zbmusic/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/zbmusic.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gfoqfc9',
    title: 'ZFM Zoetermeer (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://zfmzoetermeer.nl/live/master.m3u8',
    cover: 'https://i.imgur.com/vrjACvy.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-krmpk62',
    title: 'Zing! (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/585.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/GNLZZGG0025L26R.png?lock=720x540',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ojezrtb',
    title: 'Zo\'r TV (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream8.cinerama.uz/1016/tracks-v1a1/mono.m3u8',
    cover: 'https://i.imgur.com/NuzyhVM.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hzr034m',
    title: 'Zona Music TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://acceso.radiosportstv.online:3022/stream/play.m3u8',
    cover: 'https://i.imgur.com/TJ5l9iI.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6ouh1ug',
    title: 'Zoom (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dai.google.com/linear/hls/event/JCAm25qkRXiKcK1AJMlvKQ/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZOOM/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-agth0yw',
    title: 'Zoom Global (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d14c63magvk61v.cloudfront.net/strm/channels/zoom/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZOOM/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qprklxn',
    title: 'ZU TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls.rundletv.eu.org/LIVE$RadioZU/6.m3u8/Level/300720051?end=END&start=LIVE',
    cover: 'https://i.imgur.com/1gtkGhB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-oj0r7gg',
    title: 'ZWEI2 Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdne.folxplay.tv/folx-trz/streams/ch-2/master.m3u8',
    cover: 'https://i.imgur.com/RbdpCNf.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-etys0c6',
    title: 'Жара TV (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://31.148.48.15/Zhara/index.m3u8',
    cover: 'https://i.imgur.com/41K9Y2s.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8576z75',
    title: 'Матур ТВ (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://public.streaming.matur-tv.ru/hls/h264_aac/stream.m3u8',
    cover: 'https://i.imgur.com/Pg7K7eV.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vmv9gci',
    title: 'Муз союз (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls-tvsoyuz.cdnvideo.ru/tvsoyuz2/muzsoyuz.6fw0-58xp-acts-esy0/playlist.m3u8',
    cover: 'https://i.imgur.com/Puk1Bhx.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-cpws1kd',
    title: 'Муз ТВ (450p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://zabava-htlive.cdn.ngenix.net/hls/CH_MUZTV/variant.m3u8',
    cover: 'https://i.imgur.com/BtqrHmz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-v5t425x',
    title: 'Музыка 1 International [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://kino-1.catcast.tv/content/37745/index.m3u8',
    cover: 'https://i.imgur.com/DIKe5vA.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gb3ysb2',
    title: 'Музыка Live (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://31.148.48.15/La-Minor_TV/index.m3u8',
    cover: 'https://i.imgur.com/RH6hTWG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-tzsmnw1',
    title: 'Музыка Кино International [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://kino-1.catcast.tv/content/37739/index.m3u8',
    cover: 'https://i.imgur.com/2SG0Swa.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zyuc6f1',
    title: 'Музыка Первого (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://31.148.48.15/Muzika_Pervogo/index.m3u8',
    cover: 'https://i.imgur.com/U0vKj3P.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-khyp8yw',
    title: 'о2тв (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://31.148.48.15/O2_HD/index.m3u8',
    cover: 'https://i.imgur.com/CM6z7fA.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-stutshn',
    title: 'Первый Музыкальный Канал HD (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://rtmp.one.by:1300',
    cover: 'https://i.imgur.com/YdyFJrl.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vqmnymx',
    title: 'Первый Музыкальный Канал Россия HD (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://rtmp.one.by:2300',
    cover: 'https://i.imgur.com/rEo7nR1.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qwu5w5r',
    title: 'Радио Хит (Орск) (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://lova.me/hls/hithd.m3u8',
    cover: 'https://i.imgur.com/5xKqV1s.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-efd5tcr',
    title: 'Радио Шансон (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://chanson-video.hostingradio.ru:8080/hls/chansonabr/live.m3u8',
    cover: 'https://i.imgur.com/lbqM3K2.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1bzlicd',
    title: 'Сити Эдем Meditation Music [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/47410/index.m3u8',
    cover: 'https://i.imgur.com/HPWevWb.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-y8x4b4w',
    title: 'Сити Эдем Play Христианский Музыкальный [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/34100/index.m3u8',
    cover: 'https://i.imgur.com/ozEqob9.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4fw3kmg',
    title: 'Сити Эдем Бирма Play [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/34364/index.m3u8',
    cover: 'https://i.imgur.com/38Q5L5W.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gg4u24g',
    title: 'Сити Эдем Классическая Музыка [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/47400/index.m3u8',
    cover: 'https://i.imgur.com/l7BE8l6.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9163xyz',
    title: 'Сити Эдем Сиртаки ТВ [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/46421/index.m3u8',
    cover: 'https://i.imgur.com/V3MTfyc.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ict2v3l',
    title: 'Страна FM (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'http://live.stranafm.cdnvideo.ru/stranafm/stranafm_hd.sdp/playlist.m3u8',
    cover: 'https://i.imgur.com/WsPlKJJ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-yh5mvkt',
    title: 'УТРК Музыка (480p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://st2.mediabay.tv/KG_KTRK-Muzika/index.m3u8',
    cover: 'https://www.utrk.kg/img/stream/45.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ri9m8q6',
    title: 'Шансон ТВ (576p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://uiptv.do.am/1ufc/602079679/playlist.m3u8',
    cover: 'https://i.imgur.com/Fk4sd8t.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ivol90c',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Movies",24 Hour Free Movies (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d1b5mlajbmvkjv.cloudfront.net/v1/master/9d062541f2ff39b5c0f48b743c6411d25f62fc25/UDU-DistroTV/145.m3u8?ads.vf=7FhdsxqVxOi',
    cover: 'https://i.imgur.com/iSVnzR1.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-oj3p1g9',
    title: '27 TwentySeven [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live2.msf.cdn.mediaset.net/content/hls_h0_cls_vos/live/channel(ts)/index.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Twentyseven_logo.svg/960px-Twentyseven_logo.svg.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-pjguqhq',
    title: '30A TV Classic Movies (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://30a-tv.com/feeds/pzaz/30atvmovies.m3u8',
    cover: 'https://babaktv.com/wp-content/uploads/2023/09/30A-Classi-Movies.jpeg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-8bvjd2f',
    title: '312 Кино (406p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://176.126.166.43:1935/live/312kino/playlist.m3u8',
    cover: 'https://i.ibb.co/3m9LrLj/k7gIibH.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wh3dz9i',
    title: '&flix HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/1322.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SYMANDFLIX/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-69ylhd0',
    title: '&pictures HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/185.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/GNLZZGG0022J67R.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-g6yanvo',
    title: '&TV (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.229.254.25:7001/play/a09v/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SYMANDTV/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-csyn06k',
    title: '&TV International (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg01117-amg01117c1-amgplt0029.playout.now3.amagi.tv/playlist/amg01117-amg01117c1-amgplt0029/playlist.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SYMANDTV/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-u0k6omq',
    title: '&xplor HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a001/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SYMANDXPLOR_HD/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-xv8qp89',
    title: 'ABN Bible Movies (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://mediaserver.abnvideos.com/streams/abnbiblemovies.m3u8',
    cover: 'https://i.imgur.com/NCqZdaL.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-bue2yg2',
    title: 'Action 24 (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://actionlive.siliconweb.com/actionabr/actiontv/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Action24-logo-small.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-sd2zmqg',
    title: 'Afghan Nobel Movies (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.relentlessinnovations.net:1936/afghannobel/afghannobel/playlist.m3u8',
    cover: 'https://i.ibb.co/zfdbVSm/logo-1.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-if7e1sm',
    title: 'Aflam (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx001/playlist.m3u8',
    cover: 'https://i.imgur.com/cTLj7Yt.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-1u6fzp8',
    title: 'Afra Film',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://afrafhls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-626wnze',
    title: 'Afriwood Blockbuster (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://streamdot.broadpeak.io/cff02a74da64d145c102a2d012758398/afxpstr/AfriwoodBlockbuster/index.m3u8',
    cover: 'https://i.imgur.com/aESdqiB.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wa7jdxx',
    title: 'Alankar TV (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://livetv.tarangplus.in/alankar-origin/live/playlist.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ALANKAR/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-4j5g2hv',
    title: 'Alien Nation by DUST (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://dqi7ayt2o24fn.cloudfront.net/playlist.m3u8',
    cover: 'https://i.imgur.com/FxYhME9.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-mw8rp8m',
    title: 'All Time Movies (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://mumt03.tangotv.in/ALLTIMEMOVIES/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ALL_TIME_MOVIES/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-8kb7m6e',
    title: 'alpha Cinema (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.15plusmg.ru/memfs/b389173a-df4e-4171-8904-e249893e71eb.m3u8',
    cover: 'https://i.imgur.com/146OgfU.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7ury9wj',
    title: 'alpha Moretime (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.15plusmg.ru/memfs/3546fc09-2eba-459d-9a1f-9a2fc39e50bd.m3u8',
    cover: 'https://i.imgur.com/ibQfUr7.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-q0l0yy5',
    title: 'Alterna TV (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://tv.alterna.ar/stream/hls/live.m3u8',
    cover: 'https://tv.alterna.ar/alternatv.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-anilcms',
    title: 'Amedia Hit (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://31.148.48.15/Amedia_HIT_HD/index.m3u8',
    cover: 'https://i.imgur.com/a8ZBGBw.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-b8x0trq',
    title: 'Amedia Premium (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://31.148.48.15/Amedia_Premium_HD/index.m3u8',
    cover: 'https://i.imgur.com/UUjehw9.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-paknr6y',
    title: 'American Horrors (480p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://107.167.7.162:8081/playlist/amhor/playlist.m3u8',
    cover: 'https://image.roku.com/developer_channels/prod/16f5571a82819e8992a748c70b256cbe63105f4b546b73d129668dc2cb701d91.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-x5ux46j',
    title: 'like Gecko) Chrome/147.0.0.0 Safari/537.36" group-title="Movies",Anmol Cinema (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.175.73.12:8080/live/271/271_0.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/GNLZZGG00260YG8.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ir22x9m',
    title: 'like Gecko) Chrome/147.0.0.0 Safari/537.36" group-title="Movies",Anmol Cinema 2 (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.175.73.12:8080/live/257/257_0.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZEE_ANMOL_CINEMA_2/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-9yx72tf',
    title: 'Artflix Movie Classics (720p)',
    author: 'Ретро / Класика',
    type: 'video',
    url: 'https://amogonetworx-artflix-1-nl.samsung.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/5pOZQB4.png',
    description: '24/7 Ретро / Класика Stream',
    category: 'Ретро / Класика'
  },
  {
    id: 'vid-9gazc0s',
    title: 'Asianet Movies (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://anet.keralive.workers.dev/v1/master/a0d007312bfd99c47f76b77ae26b1ccdaae76cb1/asianetmovies_live_https/index.m3u8',
    cover: 'https://i.imgur.com/cps67hs.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-tw9vl19',
    title: 'Asianet Movies HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a06e/index.m3u8',
    cover: 'https://i.imgur.com/cps67hs.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-jsxuqvo',
    title: 'Atrescine (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://181.114.57.246:4000/play/KgkA9tT2SpLYm86J/index.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Atrescine_logo.svg/960px-Atrescine_logo.svg.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-31qbuwe',
    title: 'Aurora Media Films (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn.streamhispanatv.net:3417/live/auroramflive.m3u8',
    cover: 'https://i.imgur.com/DVC5w6H.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-hd5g6es',
    title: 'AXN Asia Indonesia (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://indihuy.streamized.net/atm/DASH/axn/manifest.mpd',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/AXN_logo_%282015%29.svg/960px-AXN_logo_%282015%29.svg.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-axhhsp8',
    title: 'B4U Bhojpuri (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdnb4u.wiseplayout.com/B4U_Bhojpuri/master.m3u8',
    cover: 'https://i.imgur.com/NwOQUDp.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-u69ut8z',
    title: 'B4U Kadak (1080p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdnb4u.wiseplayout.com/B4U_Kadak/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s142695_ld_h15_aa.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-otjqcwy',
    title: 'B4U Movies (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg00877-b4unew-amg00877c2-lg-in-5260.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/M9kMFJl.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ek42wuq',
    title: 'Bhojpuri Cinema (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live-bhojpuri.akamaized.net/liveabr/playlist.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_BHOJPURI_CINEMA/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-m7qknpi',
    title: 'BIZ Cinema (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://fl.biztv.media/cinema_720_EMfSyXgoRdiIHgldXTZICucKTIeCKO/index.m3u8',
    cover: 'https://biztv.uz/static/media/biz-cinema.286b83dc.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-cd9ddva',
    title: 'Bollywood Classic (1080p)',
    author: 'Ретро / Класика',
    type: 'video',
    url: 'http://103.213.31.109:90/BollywoodClassic/playlist.m3u8',
    cover: 'https://i.imgur.com/ugPo6ca.png',
    description: '24/7 Ретро / Класика Stream',
    category: 'Ретро / Класика'
  },
  {
    id: 'vid-qp0btt2',
    title: 'Bollywood HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.213.31.109:90/BollywoodHD/playlist.m3u8',
    cover: 'https://i.imgur.com/scDKOLS.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-p4ie7v8',
    title: 'Bollywood HD Russia (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://xykt-fix.github.io/cinerama_edge01/hls/BOLLYWOOD_RU/Movie009.m3u8',
    cover: 'https://i.imgur.com/scDKOLS.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ubijo1y',
    title: 'Bom Cine (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://92.176.119.180:2095/play/a17f',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Logo-bom.svg/960px-Logo-bom.svg.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-5e5y2hy',
    title: 'Boreal (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://edge.essastream.com/borealtelevision/tracks-v1a1/mono.m3u8',
    cover: 'https://i.imgur.com/KSquHTG.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-3mm0asa',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Movies",Box Cinema (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d3s7x6kmqcnb6b.cloudfront.net/d/distro001a/QK2TKFREGRYXDI8IJGHW/hls3/now,-1m/m.m3u8?ads.vf=l_Bw4LbbQO8',
    cover: 'https://i.imgur.com/LGJlmtp.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-a6auxdj',
    title: 'Bravo Farsi TV (360p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://bravoohls.wns.live/hls/stream.m3u8',
    cover: 'https://i.ibb.co/yynxRTS/Bravo-Farsi.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-zcbbwty',
    title: 'Cafe Film',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cafefhls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-awjnslw',
    title: 'CCTV-6 (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://198.204.240.250:82/live/cctv6.m3u8',
    cover: 'https://i.imgur.com/rFiaef7.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-q9mluzg',
    title: 'CCTV-Storm Theater (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://38.75.136.137:98/gslb/dsdqpub/fyjc.m3u8?auth=testpub',
    cover: 'https://i.imgur.com/rEttkKm.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ez9863o',
    title: 'CCTV-The First Theater (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://38.75.136.137:98/gslb/dsdqpub/dyjc.m3u8?auth=testpub',
    cover: 'https://i.imgur.com/eFxD3hq.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-71nr5pk',
    title: 'Celestial Movies (576i)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.58.160.157:8278/720-CELESTIALMOVIES/playlist.m3u8',
    cover: 'https://i.imgur.com/Mb5ssnu.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wu3quq1',
    title: 'Charge! (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://fast-channels.sinclairstoryline.com/CHARGE/index.m3u8',
    cover: 'https://i.imgur.com/1rxmu2u.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-j4c5muv',
    title: 'CINDIE TV (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d20xuwbyc4yoag.cloudfront.net/v1/master/9d062541f2ff39b5c0f48b743c6411d25f62fc25/DistroTV-MuxIP-CINDIE/387.m3u8?ads.vf=grWTpG3NQNi',
    cover: 'https://a.jsrdn.com/hls/23208/cindie-tv/logo_20250225_222520_68.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-nzjh7sc',
    title: 'Cine 34 [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live3-mediaset-it.akamaized.net/Content/hls_h0_clr_vos/live/channel(b6)/index.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cine34_logo.svg/960px-Cine34_logo.svg.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-svjxbir',
    title: 'Cine Romantico (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d1si3n1st4nkgb.cloudfront.net/10502/88886011/hls/master.m3u8?ads.xumo_channelId=88886011',
    cover: 'https://i.imgur.com/FUrrDrb.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-aou7rj6',
    title: 'Cine Sony (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://a-cdn.klowdtv.com/live1/cine_720p/playlist.m3u8',
    cover: 'https://i.imgur.com/bZWoDTg.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-tipjgei',
    title: 'like Gecko) Chrome/144.0.0.0 Safari/537.36" group-title="Movies",Cinema (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn4.skygo.mn/live/disk1/CinemaTV/DASH-FTA/CinemaTV.mpd',
    cover: 'https://i.imgur.com/yib6dM2.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-vcd0err',
    title: 'Cinema',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://catchup.videoline.ru/cinema/playlist.m3u8',
    cover: 'https://i.imgur.com/b5e9qUA.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-60o9qxt',
    title: 'Cinema Hausa (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://streamdot.broadpeak.io/cff02a74da64d1459eeb779df71f0511/afxpstr/CinemaHausa/index.m3u8',
    cover: 'https://i.imgur.com/uV5cHDW.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ib9egzw',
    title: 'CinemaWorld (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.58.160.157:8278/720-CINEMAWORLD/playlist.m3u8',
    cover: 'https://i.imgur.com/D2qNVZ7.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-w1u8bd4',
    title: 'Cinevault 80s (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://aegis-cloudfront-1.tubi.video/ea1ab5d1-f554-4f6b-b03f-2611fcd94257/playlist.m3u8',
    cover: 'https://i.imgur.com/xaCyyDd.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-41zkait',
    title: 'Classic Cinema (240p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rpn.bozztv.com/gusa/gusa-classiccinema/index.m3u8',
    cover: 'https://i.imgur.com/FJoPnTb.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-y0hevgz',
    title: 'Classique TV (360p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stmv1.srvif.com/classique/classique/playlist.m3u8',
    cover: 'https://i.imgur.com/rHxcraT.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-o1mw6id',
    title: 'Colors Bangla Cinema (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/1657.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_COLORS_BANGLA_CINEMA/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-zgthoyo',
    title: 'Colors Cineplex (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.122.249.134:8000/play/a058',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_COLORS_CINEPLEX/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7xk7hzf',
    title: 'Colors Cineplex Bollywood (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/1763.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_COLORS_CINEPLEX_BOLLYWOOD/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-jetnjuz',
    title: 'Colors Cineplex HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a00b/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_COLORS_CINEPLEX_HD/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-6gdlsq9',
    title: 'Colors Cineplex Superhits (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/1450.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_COLORS_CINEPLEX_SUPERHITS/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-5uyohcz',
    title: 'Colors Gujarati Cinema (360p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/1324.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_COLORS_GUJARATI_CINEMA/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wyb91wc',
    title: 'Colors Kannada Cinema (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/1632.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_COLORS_KANNADA_CINEMA/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-znncztb',
    title: 'CTB Perth Movies (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://movies.ctbperth.net.au/hls/stream.m3u8',
    cover: 'https://i.imgur.com/VB8gtCy.jpeg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-saoceh4',
    title: 'De Pelicula Latin America',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://181.119.93.83:8000/play/a1jw/index.m3u8',
    cover: 'https://i.imgur.com/aksM8pa.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-qvk0m2q',
    title: 'Dhamaka Movies B4U (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/235/master.m3u8',
    cover: 'https://static.wikia.nocookie.net/logopedia/images/8/8c/Dhamaka_Movies.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-obibbrq',
    title: 'DiscoverFilm (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://discoverfilm-discoverfilm-1-gb.samsung.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/oMnpsQ5.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-4eyqz22',
    title: 'Dunia Sinema (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://unifi-live05.secureswiftcontent.com/UnifiHD/live27-1080FHD.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-jmd9d1q',
    title: 'Ebony TV by Lionsgate (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://aegis-cloudfront-1.tubi.video/a0ad4b53-ab3a-48dd-be12-bc7f533c372c/playlist.m3u8',
    cover: 'https://provider-static.plex.tv/epg/cms/production/234d5377-ab07-41bf-acd6-34c17c1c051a/EbonyTV_Plex_Logo_Light_1500x1000.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-csbvmzb',
    title: 'EBS Cinema (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rpn.bozztv.com/ebstv/ebscinema/index.m3u8',
    cover: 'https://i.imgur.com/fewPTFE.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wc0m48p',
    title: 'Eisei Gekijo (544p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs22',
    cover: 'https://yt3.googleusercontent.com/d5yMuTHpdKEjTqXDEnS-iYo_AaKwuwYtHRs3gbLB9Hg8j_XtXyUXOeKxetptLhz85SciuA5i=s512-c-k-c0x00ffffff-no-rj',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7uqqee4',
    title: 'Ekran Movies',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/EkranMovies/index-0.m3u8?token=onetv202',
    cover: 'https://i.ibb.co/WNyssx28/Screenshot-2025-05-18-211143.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-0iq74zk',
    title: 'Epic Bhojpuri (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/3384.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/GNLZZGG0032BVJ8.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-itx9vob',
    title: 'ETV Cinema HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d27zlkxhgwrfgo.cloudfront.net/v1/master/9d43eacaed199f8d5883927e7aef514a8a08e108/ETV_CINEMA_H264_cloud_in/index.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143026_ld_h15_aa.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-o2xm99f',
    title: 'FAN (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://31.148.48.15/Fan/index.m3u8',
    cover: 'https://i.imgur.com/mDeTbaF.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-aptlfzw',
    title: 'Film4 (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://80.194.62.172:50002/stream/channelid/1764271106',
    cover: 'https://i.imgur.com/MTSgoGI.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-k184pvh',
    title: 'Film4 HD (1080p) [Geo-Blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://viamotionhsi.netplus.ch/live/eds/film4/browser-HLS8/film4.m3u8',
    cover: 'https://i.imgur.com/MTSgoGI.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ewkg91a',
    title: 'Filmax (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://s3.ideationtec.live/Filmax/Filmax.m3u8',
    cover: 'https://i.imgur.com/eLmdZ6k.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-pefkx0x',
    title: 'Filmazia (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.250.28.74:8000/play/a02k/index.m3u8',
    cover: 'https://i.imgur.com/hpTCANa.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-aaexd0l',
    title: 'Filmex (Xumo) (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://filmex-filmex-xumo.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/Hiz2OyC.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-c9cc212',
    title: 'Filmex Clásico (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://filmex-filmexclasico-xumo.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/D3dj4mv.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-pinrd5h',
    title: 'FilmRise Westerns (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://dz05z8iljgvbe.cloudfront.net/master.m3u8',
    cover: 'https://i.imgur.com/8j2npVc.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-927nczj',
    title: 'Forensic Files (720p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://pb-x9qsxrudiq9d2.akamaized.net/webvtt/v1/18584c3f3a2a4df8/88886014/master.m3u8',
    cover: 'https://i.imgur.com/8j2npVc.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-cvo1w5n',
    title: 'FX Movie Channel (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://tvpass.org/live/FXMovieChannel/hd',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/FXM_Logo.svg/960px-FXM_Logo.svg.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-uq7947z',
    title: 'GEM Bollywood',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gembollywood/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/2XASeBk.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-lxf0j8m',
    title: 'GEM Drama',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemdrama/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/k2pGyRH.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-jbhrz98',
    title: 'GEM Drama Plus',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemdramaplus/index-0.m3u8?token=onetv202',
    cover: 'https://gemgroup.tv/assets/images/channels/icon_7.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ir3542a',
    title: 'GEM Film',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemfilm/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/nrFz3LU.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-b1mvoqq',
    title: 'GEM Onyx',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemonyx/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/gXRIAw4.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-l6i8904',
    title: 'GEM Pixel',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://glserver1.tamashaland.com/live/aBCH96886YznRbGOiqTnnQ__/stream_0.m3u8',
    cover: 'https://i.ibb.co/Q3tkbPrn/icon-27.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-8iboqpn',
    title: 'GEM Rubix',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemrubix/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/cDjOj58.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-a0ssdk0',
    title: 'GEM Rubix Plus',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemrubixplus/index-0.m3u8?token=onetv202',
    cover: 'https://gemgroup.tv/assets/images/channels/icon_31.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-j9yvdsv',
    title: 'GEM TV',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gem/index-0.m3u8?token=onetv202',
    cover: 'https://gemgroup.tv/assets/images/channels/icon_16.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-plkql5y',
    title: 'GEM TV Plus',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemtvplus/index-0.m3u8?token=onetv202',
    cover: 'https://gemgroup.tv/assets/images/channels/icon_17.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-tn1vixx',
    title: 'Ghost TV (712p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stmv.video.expressolider.com.br/ghostv/ghostv/playlist.m3u8',
    cover: 'https://i.imgur.com/ZVO8GVI.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-xmltab5',
    title: 'Gold Star',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://moviethls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-xok573g',
    title: 'Goldmines (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-2.pishow.tv/live/1459/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_GOLDMINES/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-q8oz8bs',
    title: 'Goldmines 2 (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-2.pishow.tv/live/1460/master.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-nj13pul',
    title: 'Goldmines Movies (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.213.31.109:90/GoldminesMovies/playlist.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s142881_ld_h15_aa.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ar67lry',
    title: 'Grand Cinema',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://gcinemahls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-25wvnzq',
    title: 'Gravitas Movies (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d6dg3ebeih71x.cloudfront.net/Gravitas_Movies.m3u8',
    cover: 'https://i.imgur.com/H2hD4vT.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-rzqqqze',
    title: 'GREAT! movies (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg01753-narrativeuk-amg01753c3-lg-gb-1833.playouts.now.amagi.tv/playlist/amg01753-narrativeuk-greatmovies-lggb/playlist.m3u8',
    cover: 'https://d2n0069hmnqmmx.cloudfront.net/epgdata/1.0/newchanlogos/512/512/skychb3709.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-5vg622h',
    title: 'GREAT! romance (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg01753-narrativeuk-amg01753c2-lg-gb-1832.playouts.now.amagi.tv/playlist/amg01753-narrativeuk-greatchristmas-lggb/playlist.m3u8',
    cover: 'https://d2n0069hmnqmmx.cloudfront.net/epgdata/1.0/newchanlogos/512/512/skychb3643.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-axa6eem',
    title: 'Grjngo Western Movies (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amogonetworx-grjngo-3-dk.samsung.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/wFqhK3p.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-2dw1fsv',
    title: 'Groovy TV (360p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://web.onair-radio.eu:1935/groovytv/groovytv/playlist.m3u8',
    cover: 'https://i.imgur.com/ZYNQuf1.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-414re8i',
    title: 'Hallmark Movies & More (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://pb-clwlfvkqpn19r.akamaized.net/Hallmark_Movies_&_More.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7z34vuk',
    title: 'Hallmark Movies & Mysteries East (1080p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://tvpass.org/live/HallmarkMoviesMysteriesEast/hd',
    cover: 'https://i.imgur.com/GPRGA9C.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-n67tp70',
    title: 'Harbin Movie Channel',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stream.hrbtv.net/yspd/playlist.m3u8',
    cover: 'https://www.tvchinese.net/uploads/tv/haerbin.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-r58g4hk',
    title: 'Hero (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live-fi.tvkaista.net/hero/live.m3u8?hd=true',
    cover: 'https://i.imgur.com/4t5JQLY.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-xcyv731',
    title: 'HITS Movies HD (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn10jtedge.indihometv.com/atm/DASH/hitsmovie/manifest.mpd',
    cover: 'https://i.imgur.com/kyE3vXf.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-952hp0v',
    title: 'Hollywood HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://31.148.48.15/MGM_HD/index.m3u8',
    cover: 'https://i.imgur.com/1j7cT2I.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-f3jev1u',
    title: 'Home Plus',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://homeplushls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-qupa67c',
    title: 'ICC Plus (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://icchls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-bcee2n5',
    title: 'IFC East (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://tvpass.org/live/IFCEast/hd',
    cover: 'https://i.imgur.com/bQdkyF9.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-sjj1sp5',
    title: 'iFilm 2',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.presstv.ir/hls/ifilm2.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/fa/c/ce/Ifilm2logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-nwyk4l2',
    title: 'iFilm Arabic',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.presstv.ir/hls/ifilmar.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/IFILM.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-xj3433d',
    title: 'iFilm English',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.presstv.ir/hls/ifilmen.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/IFILM.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-zeq6vmd',
    title: 'iFilm Persian',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.presstv.ir/hls/ifilmfa.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/IFILM.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-vzyx9cm',
    title: 'Indywood TV (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://43wrzjnpqoxe-hls-live.wmncdn.net/indywood/indywoodtv/index.m3u8',
    cover: 'https://i.ibb.co/jT3NCPp/logo-tv.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-93tafyx',
    title: 'Itage TV (480p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://viewmedia7219.bozztv.com/wmedia/viewmedia100/web_011/Stream/playlist.m3u8',
    cover: 'https://i.imgur.com/FP1aUPw.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-by5z6gj',
    title: 'J Movie (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/417.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_J_MOVIES/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-tkl6w79',
    title: 'Jalsha Movies HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.229.254.25:7001/play/a0dt/index.m3u8',
    cover: 'https://i.imgur.com/25eWjX2.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-3e04uyy',
    title: 'Jiangxi Movie Channel',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://play-live-hls.jxtvcn.com.cn/live-city/tv_jxtv4.m3u8',
    cover: 'https://www.tvchinese.net/uploads/tv/jiangxi.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-5a1o6m0',
    title: 'Jilin Movie Channel',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://lsfb.avap.jilintv.cn/zqvk7vpj/channel/906341e6f19b4c4bacdc89941eb85d12/index.m3u8',
    cover: 'https://www.tvchinese.net/uploads/tv/jlyspd.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-odjyuy6',
    title: 'Kairali We (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-3.pishow.tv/live/1530/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_KAIRALI_WE/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-feen65y',
    title: 'KCM (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg02159-amg02159c7-samsung-in-4001.playouts.now.amagi.tv/playlist/amg02159-kcglobal-kcm-samsungin/playlist.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/KCM.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-yum157v',
    title: 'KidsFlix (1080p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=50',
    cover: 'https://i.imgur.com/4Pn0ADQ.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-nwhb89p',
    title: 'Kino 24 (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://sirius.greenhosting.ru/Kino24Ru/video.m3u8',
    cover: 'https://i.imgur.com/QAdDARF.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-fhxnl4j',
    title: 'Kino Barrandov (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://83.167.253.107/hdmi1_ext',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Kino_Barrandov_logo.png/960px-Kino_Barrandov_logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7d4vcgi',
    title: 'Kinoteatr (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stream8.cinerama.uz/1009/tracks-v1a1/playlist.m3u8',
    cover: 'https://i.imgur.com/emH1BgC.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-2gq3r1q',
    title: 'Klasik TV (576p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://178.253.194.105/klasiktv/playlist.m3u8',
    cover: 'https://i.imgur.com/C90BYlb.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-pv333wu',
    title: 'Komsan TV [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://tv.cootel.com.kh:8077/streams/d/Komsan/playlist.m3u8',
    cover: 'https://i.imgur.com/SNTf2r3.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-hn7topk',
    title: 'Kuriakos Cine (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://w2.manasat.com/kcine/smil:kcine.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/CZViCwB.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-t8ad5vm',
    title: 'Lifetime Movies East (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://tvpass.org/live/LifetimeMoviesEast/hd',
    cover: 'https://i.imgur.com/BWmqYTO.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-meswyo5',
    title: 'Maah TV (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://hls.maahtv.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/FkyueH6.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wbuwl4c',
    title: 'Made in Hollywood',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://connection3-ent-nz.samsung.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/p16HNIM.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-3trnnm5',
    title: 'Maha Movie (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-6.pishow.tv/live/10007/master.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Maha_Movies.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-rom787u',
    title: 'Manoranjan Grand (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/1011/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143302_ld_h15_aa.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-2y0mq6v',
    title: 'Manoranjan Movies (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.213.31.109:90/ManoranjanMovies/playlist.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143303_ld_h15_aa.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-dsfll8g',
    title: 'Maverick Black Cinema (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://maverick-maverick-black-cinema-3-us.roku.wurl.tv/playlist.m3u8',
    cover: 'https://images.fubo.tv/station_logos/maverick_black_cinema_c.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-a21fn4s',
    title: 'MAX4 (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://146.59.85.40:89/max4/index.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Max4_logo.png/960px-Max4_logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-tazjwb1',
    title: 'Max Movies (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.maxtn.in/maxmovies/maxmovies/index.m3u8',
    cover: 'https://livetv.ashokadigital.net/upload/logo/1732168422_WhatsApp%20Image%202024-11-21%20at%2010.18.47%20AM.jpeg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-lvlp9re',
    title: 'MAX Reels',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://indihuy.streamized.net/atm/DASH/useeprime/manifest.mpd',
    cover: 'https://images.maxstream.tv/sites/default/files/entry/0_psqdb637/landscape_carousel_xxhdpi.webp',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-f7nfcip',
    title: 'MBC Bollywood (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-bollywood/546eb40d7dcf9a209255dd2496903764/index.m3u8',
    cover: 'https://i.imgur.com/TTAGFHG.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ickxa5x',
    title: 'MBC+ Drama (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-plus-drama/e37251ec2aac8f6c98f75cd0fa37cd28/index.m3u8',
    cover: 'https://i.imgur.com/lxWdjXG.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-g8719a5',
    title: 'MCI Televisión (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://video.ejeserver.com/live/mcitelevision.m3u8',
    cover: 'https://pbs.twimg.com/profile_images/1836009952420274177/FfYonU6r_400x400.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-27wvt6t',
    title: 'Mega Cine TV (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cnn.hostlagarto.com/megacinetv/playlist.m3u8',
    cover: 'https://www.vivalivetv.com/public/files/shows/0/1/2893-294x165-FFFFFF.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-p9lijo6',
    title: 'Memorias TV Film (720p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://video.xtrematv.com:3725/live/memoriasfilmlive.m3u8',
    cover: 'https://i.imgur.com/vNfjW6Y.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-yw84bas',
    title: 'Meta Film TV',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://metafilmhls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-c7rrndb',
    title: 'MH One Movies (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://mumt03.tangotv.in/MHONEMOVIE/index.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-1eby3o8',
    title: 'Mix Hollywood (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ml-pull-hwc.myco.io/MixTV/hls/index.m3u8',
    cover: 'https://i.imgur.com/1ENdbZn.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-yunu3v0',
    title: 'like Gecko) Chrome/146.0.0.0 Safari/537.36" group-title="Movies",MN+',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn4.skygo.mn/live/disk1/MNplus91/HLSv3-FTA/MNplus91.m3u8',
    cover: 'https://new.skytel.mn/uploads/channel/mn-676145a957d06.jpeg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-xbh8q6d',
    title: 'MNX HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a05u/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_MNX_HD/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-953hiqu',
    title: 'Movie Bangla',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://alvetv.com/moviebanglatv/8080/index.m3u8',
    cover: 'https://www.jagobd.com/wp-content/uploads/2016/02/moviebangla.jpg?x50681',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-8j9d8sy',
    title: 'like Gecko) Chrome/144.0.0.0 Safari/537.36" group-title="Movies",MovieBox (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn4.skygo.mn/live/disk1/Moviebox/DASH-FTA/Moviebox.mpd',
    cover: 'https://i.imgur.com/xeO1Zb4.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-f0jpcnu',
    title: 'Movieplex (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://mumt04.tangotv.in/MOVIEPLEX/index.m3u8',
    cover: 'https://i.imgur.com/THJEAqJ.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-hkopnd4',
    title: 'Movies Action (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx011/playlist.m3u8',
    cover: 'https://i.imgur.com/NIVhISa.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-9hxkogq',
    title: 'Movies Now + (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a05t/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_MNSYMPLUS/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ogzzw9i',
    title: 'Movies Now HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.161.153.165:8000/play/mnh/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_MOVIES_NOW/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-29gcv1j',
    title: 'Movies Thriller (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx012/playlist.m3u8',
    cover: 'https://i.imgur.com/JWihdcl.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-1fplq84',
    title: 'Movies! (480p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://bozztv.com/dvrfl03/hdirect/hdirect-ovair1-movies!/index.m3u8',
    cover: 'https://i.imgur.com/gAGn3mK.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-4stjuzs',
    title: 'MovieSmart Turk (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://playhdnewjj.xyz:8080/recc121412/KVqfhtdJ2nQ7/174',
    cover: 'https://i.imgur.com/DWN9ulT.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-9414koo',
    title: 'MovieSphere (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg00353-lionsgatestudio-moviesphere-xumo-zh5u0.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/h1ejU90.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-jrwbdy0',
    title: 'MovieSphere AU (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg00353-lionsgatefilmsi-moviesphereaus-samsungau-7qzhf.amagi.tv/playlist/amg00353-lionsgatefilmsi-moviesphereaus-samsungau/playlist.m3u8',
    cover: 'https://i.imgur.com/h1ejU90.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-m400ee7',
    title: 'MovieSphere UK (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://moviesphereuk-samsunguk.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/h1ejU90.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-43350eu',
    title: 'Movify Kino (576p)',
    author: 'Ретро / Класика',
    type: 'video',
    url: 'https://void.greenhosting.ru/MovifyKino_Mpeg4/index.m3u8',
    cover: 'https://i.imgur.com/XIk5EJN.png',
    description: '24/7 Ретро / Класика Stream',
    category: 'Ретро / Класика'
  },
  {
    id: 'vid-1i5j9l4',
    title: 'like Gecko Chrome/144.0.0.0 Safari/537.36" group-title="Movies",My Cinema [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://op-group1-swiftservehd-1.dens.tv/h/h192/index.m3u8',
    cover: 'https://i.imgur.com/BTmcTQO.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-cj3g1gx',
    title: 'like Gecko Chrome/144.0.0.0 Safari/537.36" group-title="Movies",My Cinema Europe [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://op-group1-swiftservehd-1.dens.tv/h/h18/index.m3u8',
    cover: 'https://i.imgur.com/jz0d8tH.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-nz1r4yu',
    title: 'MyTime Movie Network (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://appletree-mytimeuk-rakuten.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/pw4NZK1.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-0dl0g05',
    title: 'MyTime Movie Network (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://appletree-mytimeau-samsung.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/HYgxPVQ.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-sttl3cs',
    title: 'MyTime Movie Network Brazil (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://appletree-mytime-samsungbrazil.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/aiGQtzI.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-gsq2vxz',
    title: 'MyTime Movie Network Mexico (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://appletree-mytime-samsungmexico.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/pw4NZK1.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wc6l6zf',
    title: 'MyTime movie network Spain (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://appletree-mytimespain-rakuten.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/pw4NZK1.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-20py7xz',
    title: 'NETV Toronto (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://eu1.vectromdigital.com:1936/netvtoronto/netvtoronto/playlist.m3u8',
    cover: 'https://i.imgur.com/WXRBuOW.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-gj0725m',
    title: 'NEW KMOVIES (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ads.its-newid.net/api/manifest.m3u8?tp=samsung_tvplus&channel_id=newid_343&ads.service_id=GB1700007PK',
    cover: 'https://i.imgur.com/wCgirjc.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-elwhqye',
    title: 'Newflix',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://newfhls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-tjsl4m6',
    title: 'Next HD (480p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.enhdtv.com:19360/nexthd/nexthd.m3u8',
    cover: 'https://i.imgur.com/c2rF3SS.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-vjycq1n',
    title: 'Nihon Eiga Senmon (544p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs23',
    cover: 'https://i.imgur.com/B2wzA67.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-hu7v7iq',
    title: 'Nolly Africa HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg02784-amg02784c2-amgplt0002.playout.now3.amagi.tv/ts-eu-w1-n2/playlist/amg02784-amg02784c2-amgplt0002/playlist.m3u8',
    cover: 'https://i.imgur.com/IxtGpti.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-y3h7ivq',
    title: 'One TV Cinema 2 (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://43.252.18.195:5080/live/streams/ChineseDrama.playlist.m3u8',
    cover: 'https://i.imgur.com/H8PiAbA.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-vf2w25v',
    title: 'Orbita Chile TV (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://orbitachiletv.org/hls/0/stream.m3u8',
    cover: 'https://i.imgur.com/gbNh79Z.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ibwkhbv',
    title: 'Oscar Movies Bhojpuri (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-4.pishow.tv/live/233/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143638_ld_h9_ab.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ukgook0',
    title: 'OSN Movies Action (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://116.90.120.151:8000/play/a0ax/index.m3u8',
    cover: 'https://i.imgur.com/uOzyKup.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-bppc816',
    title: 'OuterSphere (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d3o593mz1glx8d.cloudfront.net/OuterSphere_US.m3u8',
    cover: 'https://provider-static.plex.tv/epg/cms/production/f162df8b-6532-43fe-9202-83a658090651/OuterSphere_1500x1000_Logo_Dark_-_Chris_Connors__1_.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-3t4pymo',
    title: 'Pantalla Clásica EC (512p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live21.bozztv.com/akamaissh101/ssh101/pantallaclasics/playlist.m3u8',
    cover: 'https://i.imgur.com/mhbERF9.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ou34i8c',
    title: 'Persiana Cinema',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cinehls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/hgIro9r.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-yzd5ijo',
    title: 'Persiana Family',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://familyhls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/lMZsuWi.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wzzkud8',
    title: 'Persiana Iranian',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://irhls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/vqrrpBi.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-78ukim7',
    title: 'Persiana Korea',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://korhls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/si2ZnIA.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-bfij89e',
    title: 'Persiana Latino',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://latinohls.persiana.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ekumskn',
    title: 'Persiana Plus',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://euhls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/0xttibX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-qs3cqys',
    title: 'Pitaara (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://vg-pitaaratvlive.akamaized.net/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/vglive-sk-583798/playlist.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PITAARA/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-dzjylt0',
    title: 'Pravah Picture HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a06f/index.m3u8',
    cover: 'https://i.imgur.com/T76S4x3.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-q15tcqk',
    title: 'Pro100TV (576p)',
    author: 'Ретро / Класика',
    type: 'video',
    url: 'https://sirius.greenhosting.ru/Pro100tvRu/video.m3u8',
    cover: 'https://i.imgur.com/YfQEflM.png',
    description: '24/7 Ретро / Класика Stream',
    category: 'Ретро / Класика'
  },
  {
    id: 'vid-ktxu2i5',
    title: 'Public Movies (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://mumt04.tangotv.in/PUBLICMOVIES/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PUBLIC_MOVIES/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-jl79jkf',
    title: 'QTV-3',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://video10.qtv.com.cn/drm/qtv3at/manifest.m3u8',
    cover: 'https://www.tvchinese.net/uploads/tv/qdtv3.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-gln19p9',
    title: 'Rai Movie (576p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://mediapolis.rai.it/relinker/relinkerServlet.htm?cont=747002',
    cover: 'https://i.imgur.com/0FjxXU9.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-uciu06y',
    title: 'Raj Digital Plus (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://livestream.rajtv.tv/hlslive/Admin/px08241087/live/RajTV_Digital_plus/master_1.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_RAJ_DIGITAL_PLUS/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-muawdwh',
    title: 'Rakuten Top Movies UK (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://0145451975a64b35866170fd2e8fa486.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-5987/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-vsywcp2',
    title: 'Rakuten TV Action Movies Austria (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://0f846627524f4dd2995e93581379db82.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenActionMovies-1/playlist.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-bdiq7xk',
    title: 'Rakuten TV Action Movies Finland (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://bca5a421a70c46ad911efd0a4767c4bf.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6075/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-6mje79y',
    title: 'Rakuten TV Action Movies Germany (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://284824cf70404fdfb6ddf9349009c710.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6066/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-uheftzl',
    title: 'Rakuten TV Action Movies Italy (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://87f2e2e5e7624e3bad85da1ca2ed31a7.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6067/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-szt60fw',
    title: 'Rakuten TV Action Movies Spain (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://a9c57ec7ec5e4b7daeacc6316a0bb404.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6069/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-tah5ihc',
    title: 'Rakuten TV Action Movies UK (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://54045f0c40fd442c8b06df076aaf1e85.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6065/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wgnyv6q',
    title: 'Rakuten TV Comedy Movies Austria (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://7ed752b220a441b7b22bdf697c6c4df8.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenComedyMovies-1/playlist.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-rrs0lev',
    title: 'Rakuten TV Comedy Movies Finland (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://a300af98e00746e2acf2346f43e47bd1.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6191/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-fe37e0h',
    title: 'Rakuten TV Comedy Movies Germany (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ecac08c9e2214375b907d6825aaf9a01.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6182/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wpjqb0g',
    title: 'Rakuten TV Comedy Movies Italy (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://b8bc6c4b9be64bd6aeb3b92aa8521ed4.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6184/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-r3gzj1m',
    title: 'Rakuten TV Comedy Movies Spain (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://71db867f03ce4d71a29e92155f07ab87.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6180/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-rlxnuiq',
    title: 'Rakuten TV Comedy Movies UK (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://9be783d652cd4b099cf63e1dc134c4a3.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6181/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-s2zvr6q',
    title: 'Rakuten TV Drama Movies Austria (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://df1aa472ff5b4780a8d91fe319778b4d.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenTVShows-1/playlist.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-da7ea2d',
    title: 'Rakuten TV Drama Movies Finland (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d7e8ee3c924d4305a0c1840fe94c5d36.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6102/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-1hbsv66',
    title: 'Rakuten TV Drama Movies Germany (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://968754c2483045c1a9a7f677caec35b6.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6096/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-n61342u',
    title: 'Rakuten TV Drama Movies Italy (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://f84e0b1628464fab846160df957f269e.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6094/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-rugcead',
    title: 'Rakuten TV Drama Movies Spain (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://a7089c89d85f453d850c4a1518b43076.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6092/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-tj1jtj4',
    title: 'Rakuten TV Drama Movies UK (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://fee09fd665814f51b939b6d106cf5f66.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6093/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-98q10ne',
    title: 'Rakuten TV Family Movies Austria (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://9fa8baba055e4a52b0a8d1ae7d78bed8.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenFamily-1/playlist.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-c3fc121',
    title: 'Rakuten TV Family Movies Finland (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://758ee983d61e400381dea6fa8154f4e0.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6227/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-09xkjaq',
    title: 'Rakuten TV Family Movies Germany (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://af230031eeac45f3b78d4f8a13265105.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6209/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-4uy4f1r',
    title: 'Rakuten TV Family Movies Italy (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://3315fc3e7276420f895e19cf807dbee1.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6215/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-3m3fer4',
    title: 'Rakuten TV Family Movies Spain (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://b0d59c8c98974e708e5ccb9a27cdfdfc.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6205/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-rttu00q',
    title: 'Rakuten TV Family Movies UK (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://e3207568b726401995c25670faaf32e4.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6203/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-c6vt8jg',
    title: 'Rakuten TV Family Switzerland (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://a24daf1125344b9cab66eed2fcff8821.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-ch_RakutenFamily-1/playlist.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-89yi9lx',
    title: 'Rakuten TV Nordic Films (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://4aa9ef08b70d4b0c8f3519c5950b1930.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6303/master.m3u8',
    cover: 'https://images-3.rakuten.tv/storage/global-live-channel/translation/artwork/ff79e878-3eea-45fc-b0cd-55d6acce9b18-width200-quality90.jpeg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ju7xz0q',
    title: 'Rakuten TV Top Movies Finland (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://1d1b0d4cb6ae4c31985d13221795695b.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6057/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-c1goze0',
    title: 'Rakuten TV Top Movies Germany (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cbb622b29f5d43b598991f3fa19de291.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-5985/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-5fcfc8s',
    title: 'Rakuten TV Top Movies Italy (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d4a4999341764c67a67e9ec9eb3790ab.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-5984/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-lku7ie9',
    title: 'Rakuten TV Top Movies Spain (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ff335120300e4742a2b135ee9a9e7df8.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-5983/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-uy77jaz',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Movies",Revry Her (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/revry-her/playlist.m3u8?ads.vf=j5eHovd50EC',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/DISTROTV/LIVECHANNEL/66698907bac4421ebc533646/images/logo_20231219_221435_68.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-p37910h',
    title: 'Roja Movies (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stream.rojatv.cloud/rojatv/rojatv/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/rojamovies.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-diia5j0',
    title: 'Romedy Now (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.157.248.140:8000/play/a015/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ROMEDY_NOW/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-8hkr97u',
    title: 'Rotana Cinema Egypt (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rotana.hibridcdn.net/rotananet/cinemamasr_net-7Y83PP5adWixDF93/playlist.m3u8',
    cover: 'https://i.imgur.com/dGlKoLW.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-b3fj9wd',
    title: 'Rotana Cinema KSA (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rotana.hibridcdn.net/rotananet/cinema_net-7Y83PP5adWixDF93/playlist.m3u8',
    cover: 'https://i.imgur.com/pGgp38I.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-3z99w20',
    title: 'RTSH Shqip (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://178.33.11.6:8696/live/rtshshqip/playlist.m3u8',
    cover: 'https://i.imgur.com/88kRsW3.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-soqj3mj',
    title: 'Runtime Espanol (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://run-rt-uh-roku.otteravision.com/run/rt_uh/rt_uh.m3u8',
    cover: 'https://i.imgur.com/OMQq19N.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-cg74ut9',
    title: 'ServusTV (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stv-live.akamaized.net/hls/live/2031011/lingeoSTVATwebPri/master.m3u8',
    cover: 'https://i.imgur.com/6W637Gn.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-nxf1lqk',
    title: 'Shemaroo Filmi Gaane (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.213.31.109:90/ShemarooFilmiGaane/playlist.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/channel/0d5b07555b2d4415aa9f145273095ed7.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-rg6qweu',
    title: 'Shemaroo Josh (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://airtelapp.shemaroo.com/shemarooChumbakTV/smil:shemarooChumbakTVadp.smil/playlist.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/GNLZZGG00297P3E.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-hc0xyym',
    title: 'Shubh Cinema TV (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d393sxaxig6bax.cloudfront.net/out/v1/589cf2cf44bf42bb941e817a2240d62e/index.m3u8',
    cover: 'https://i.imgur.com/RQhorAG.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-x2purs1',
    title: 'SL 1',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://slonehls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/n9cuM2W.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-hii90ji',
    title: 'SL 2',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://sltwohls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/BVuUx5R.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-dwrhz09',
    title: 'Sony Canal Novelas',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://a89829b8dca2471ab52ea9a57bc28a35.mediatailor.us-east-1.amazonaws.com/v1/master/0fb304b2320b25f067414d481a779b77db81760d/CanelaTV_SonyCanalNovelas/playlist.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-s8ch6up',
    title: 'Sony Max 2 (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a00z/index.m3u8',
    cover: 'https://i.imgur.com/gqUYk6C.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-lr13np5',
    title: 'Sony One Favoris (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://49d735318d6b4c30a24a7997ea594e1b.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-820-FR-SONYONEFAVORIS-LG_FR/playlist.m3u8',
    cover: 'https://i.imgur.com/RO4AM4b.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-lo1ni3u',
    title: 'Sony One Hits Action (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://5098a8b860504a3690fd2e7c0a18d68f.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-817-FR-SONYONEHITSACTION-LG_FR/playlist.m3u8',
    cover: 'https://i.imgur.com/pXsZEsR.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-buwsw7c',
    title: 'Sony One Hits Comedie (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://7aa9671895264ec9a384dfed1b992171.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-818-FR-SONYONEHITSCOMDIE-LG_FR/playlist.m3u8',
    cover: 'https://i.imgur.com/8sHuxxS.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-svminhp',
    title: 'Sony Pix HD (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://sl.vodep39240327.workers.dev/channel/SONY%20PIX%20HD.m3u8',
    cover: 'https://i.postimg.cc/Z5G8j67L/PIX-HD-WHITE.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-vgn6o8g',
    title: 'Sony Wah (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://sl.vodep39240327.workers.dev/channel/SONY%20WAH.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SONY_WAH/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-fvyepy0',
    title: 'South Station (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cc-yw7ztecy8do3q.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-yw7ztecy8do3q/SS_IN.m3u8',
    cover: 'https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN3800008CX_20260325T012316SQUARE.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-i4jshk4',
    title: 'Squirrel (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://92.176.119.180:2095/play/a1ey',
    cover: 'https://i.imgur.com/9y8VcBr.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-h1pj6ln',
    title: 'Star 2 (544p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs27',
    cover: 'https://i.imgur.com/QOriZy5.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-disao3b',
    title: 'Star 3 (544p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs28',
    cover: 'https://i.imgur.com/Z1x8ecY.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-yv9ynrr',
    title: 'Star Gold 2 (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.253.18.58:8000/play/a00r',
    cover: 'https://i.imgur.com/G0ZfzZr.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wxf0nmn',
    title: 'Star Gold Romance (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.253.18.58:8000/play/a017',
    cover: 'https://i.imgur.com/gSWv9U3.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-00b7a0h',
    title: 'Star Gold Select HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.253.18.58:8000/play/a02u',
    cover: 'https://i.imgur.com/U7eiuqv.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-p29347d',
    title: 'Star Gold Thrills (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.253.18.58:8000/play/a00o',
    cover: 'https://i.imgur.com/azqtpYh.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-mb8zd88',
    title: 'Star Maa Movies HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://anet.keralive.workers.dev/v1/master/a0d007312bfd99c47f76b77ae26b1ccdaae76cb1/maamovies_live_https/index.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143826_ld_h15_aa.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-j0d1hhq',
    title: 'Star Movies HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a01f/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_STAR_MOVIES/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-gqgfwx4',
    title: 'Star Movies Select HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a01g/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_STAR_MOVIES_SELECT_HD/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-vgca0fs',
    title: 'Star Tamil Television (360p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://edge4-moblive.yuppcdn.net/trans1sd/smil:strtml19.smil/playlist.m3u8?dvr=',
    cover: 'https://i.imgur.com/fjHcr9z.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-41uqqms',
    title: 'Star Utsav Movies (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a059/index.m3u8',
    cover: 'https://i.imgur.com/k5QHfH2.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-zsqdmit',
    title: 'START Air',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://livetv.mylifeisgood.net.ru/channels/strwc.m3u8',
    cover: 'https://i.imgur.com/4bACa7x.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-3ulkl7i',
    title: 'START World',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://livetv.mylifeisgood.net.ru/channels/strvf.m3u8',
    cover: 'https://i.imgur.com/TXtY5eM.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-jaie2ke',
    title: 'Studio One + (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/276/master.m3u8',
    cover: 'https://i.imgur.com/yOPB7JB.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-5i09rwa',
    title: 'Suriyan TV (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stream.sscloud7.com/live/suriyantv/index.m3u8',
    cover: 'https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/transparentImages/Suriyan-tv-logo_2000_X_1125_Transpharent.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-tdkdz23',
    title: 'T2 Movies',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/T2Movies/index-0.m3u8?token=onetv202',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-3h6hd6k',
    title: 'Tamasha',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ncdn.telewebion.ir/hdtest/live/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/fa/thumb/f/f2/IRIB_tamashaTV.svg/960px-IRIB_tamashaTV.svg.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-pmbdh2k',
    title: 'TF1 Series Films (1080p) [Geo-Blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://viamotionhsi.netplus.ch/live/eds/hd1/browser-HLS8/hd1.m3u8',
    cover: 'https://i.imgur.com/4CJIDKQ.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-cgw1qxe',
    title: 'Thalaa TV (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://streams2.sofast.tv/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/2069c593-3c07-4d62-9d44-746be5c3a5d6/manifest.m3u8',
    cover: 'https://d229kpbsb5jevy.cloudfront.net/yuppfast/content/common/channel/logos/thalaa-tv.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-iid7byw',
    title: 'The Film Detective (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cinedigm-entertainment-corp-thefilmdetective-1-us.ono.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/yfOwmsP.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-4x7o148',
    title: 'The Movie Club (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://sis-global.prod.samsungtv.plus/v1/tvpprd/sc-mp2ar4ca425xo.m3u8',
    cover: 'https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN38000072R_20260325T012318SQUARE.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7mn0kd8',
    title: 'The Movie Club +2 (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d3gnyty2vddhsg.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/pb-ytipwjqub3kf8/TMC2_IN.m3u8?ads.ads_cdn=cf&ads.cdn=cf',
    cover: 'https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN40000100Y_20260204T004058SQUARE.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-mj0u8ji',
    title: 'Thrill (540p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn10jtedge.indihometv.com/atm/DASH/thrill/manifest.mpd',
    cover: 'https://i.imgur.com/Y282owj.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-awnnj25',
    title: 'Tolly TV (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://streams2.sofast.tv/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/13b5735d-52c3-4be0-853d-e0ec0127e708/manifest.m3u8',
    cover: 'https://d229kpbsb5jevy.cloudfront.net/yuppfast/content/common/channel/logos/aumnrs.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-fcycywn',
    title: 'TVCARiB Cinema (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn.mycloudstream.io/hls/live/broadcast/l3vslw4i/index.m3u8',
    cover: 'https://i.imgur.com/fvGlwKo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ijvk6js',
    title: 'TVS Drive In Movie (360p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rpn.bozztv.com/gusa/gusa-tvsdriveinmovie/index.m3u8',
    cover: 'https://i.imgur.com/OR9APjb.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-etc3p5b',
    title: 'TVS Film Noir Network (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rpn.bozztv.com/trn01/gusa-TVSFilmNoir/index.m3u8',
    cover: 'https://i.imgur.com/A4yWhQw.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-kyjx92j',
    title: 'Universal Cinema (480p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://190.2.212.209:8050/play/a0q3',
    cover: 'https://i.imgur.com/XxfET68.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-xczzjrd',
    title: 'Universal Comedy (480p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://190.2.212.209:8050/play/a0q4',
    cover: 'https://i.imgur.com/avBL8pQ.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-arnt3hc',
    title: 'USA Network East (1080p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://tvpass.org/live/USANetworkEast/hd',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/USA_Network_logo_%282016%29.svg/960px-USA_Network_logo_%282016%29.svg.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-5bekhgo',
    title: 'Veo7 (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://92.176.119.180:2095/play/a1f1',
    cover: 'https://i.imgur.com/kklTIMm.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-714lh3z',
    title: 'Viasat Kino (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://89.254.128.5:22280/viasat_kino/index.m3u8',
    cover: 'https://i.imgur.com/io0WAkA.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-vb1h6o3',
    title: 'Viasat Kino Action (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://89.254.128.5:22280/viasat_kino_action/index.m3u8',
    cover: 'https://i.imgur.com/HwsNIDK.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-y44j7kd',
    title: 'Victor Valley Movies (1080p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://2-fss-2.streamhoster.com/pl_138/201950-5317556-1/playlist.m3u8',
    cover: 'https://i.imgur.com/zgiuNNj.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-jc06we8',
    title: 'Vijay Super (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://202.70.146.135:8000/play/a008/index.m3u8',
    cover: 'https://i.imgur.com/3MWm9nD.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-to6bpqg',
    title: 'viju TV1000 Русское',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://31.148.48.15/TV1000_Russkoe_kino/index.m3u8',
    cover: 'https://i.imgur.com/Meak2y4.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-jrgebm8',
    title: 'Whiplash Cinema (480p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn.whiplash.cc/whiplash-cinema/index.m3u8',
    cover: 'https://whiplash.cc/assets/img/channels/whiplashcinema.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-308a9f7',
    title: 'Wildside TV (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://versatile-wildsidetv-1-fr.samsung.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/cQkfRhH.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-9zg1sb2',
    title: 'WOWOW Cinema (544p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs07',
    cover: 'https://i.imgur.com/Wx9fkCW.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-518y0w7',
    title: 'Wu Tang Collection (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://dbrb49pjoymg4.cloudfront.net/10001/99991745/hls/master.m3u8?ads.xumo_channelId=99991745',
    cover: 'https://i.imgur.com/sz55sBl.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-0hn9h3j',
    title: 'Xtrema Accion',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stmv6.voxtvhd.com.br/cineaccion/cineaccion/playlist.m3u8',
    cover: 'https://i.imgur.com/z5NwizH.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-b97gzox',
    title: 'Xtrema Cine Clasico',
    author: 'Ретро / Класика',
    type: 'video',
    url: 'https://stmv6.voxtvhd.com.br/cineclasico/cineclasico/playlist.m3u8',
    cover: 'https://i.imgur.com/j91M4Yf.png',
    description: '24/7 Ретро / Класика Stream',
    category: 'Ретро / Класика'
  },
  {
    id: 'vid-wy6n0vb',
    title: 'Xtrema Terror',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stmv6.voxtvhd.com.br/cineterror/cineterror/playlist.m3u8',
    cover: 'https://i.imgur.com/FcaTUym.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-0y2yrlt',
    title: 'ZB Cinema (720p)',
    author: 'Ретро / Класика',
    type: 'video',
    url: 'https://server.zillarbarta.com/ZBCINEMA/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/ZBCINEMA.png',
    description: '24/7 Ретро / Класика Stream',
    category: 'Ретро / Класика'
  },
  {
    id: 'vid-usmsd1u',
    title: 'Zee Action (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/488.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/GNLZZGG0022K5ZV.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-9r81wvn',
    title: 'Zee Biskope (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.154.3.101:5001/live/559.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZEE_BISKOPE/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-nh6igwv',
    title: 'Zee Bollymovies (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg17931-zee-amg17931c8-samsung-th-6526.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://framerusercontent.com/images/mqfJ18x4jYe0GbZUbxSHsbnWU.png?scale-down-to=512',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ob9oo1b',
    title: 'Zee Bollymovies Australia (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg17931-zee-amg17931c8-samsung-au-8871.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://framerusercontent.com/images/mqfJ18x4jYe0GbZUbxSHsbnWU.png?scale-down-to=512',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-cof2f7q',
    title: 'Zee Bollywood (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a01q/index.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/GNLZZGG0022T6DM.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-8gtlq4x',
    title: 'Zee Cinema APAC (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg17931-zee-amg17931c5-samsung-au-8873.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZEE_CINEMA/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-jqcrbtg',
    title: 'Zee Cinema HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/165.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZEE_CINEMA/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-4zf3ksa',
    title: 'Zee Cinemalu (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/413.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/GNLZZGG0022ZNDZ.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-tvk3vck',
    title: 'Zee Cinemalu HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://mumbai-edge.smartplaytv.in/ZeeCinemaluHD/index.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/GNLZZGG0022ZEQ9.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-jtksjx9',
    title: 'Zee South Flix (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg00862-amg00862c9-amgplt0173.playout.now3.amagi.tv/playlist/amg00862-amg00862c9-amgplt0173/playlist.m3u8',
    cover: 'https://d3bd0tgyk368z1.cloudfront.net/zeelg/LG%20logo%20artwork/400x200/zsouthflix.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-9ymr8vf',
    title: 'Zee Talkies HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://103.72.101.252:8080/live/1358.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZEE_TALKIES/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-a356btb',
    title: 'Zee Thirai HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://149.71.34.166:8000/play/a06d/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZEE_THIRAI/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-8cuvm8e',
    title: 'Zylo Cine Friki (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d2mr4fu91mjx9m.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-rb0tx75ojbc5u/CineFriki_ES.m3u8',
    cover: 'https://i.imgur.com/b3Ospym.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-hwf0d6l',
    title: 'Zylo Ciné Nanar (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://zylo-cinenanar-rakuten.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/YnUZd3W.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-zibe6yj',
    title: 'Zylo Cine Western (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d2nq34q0i1r3la.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-awohw8g217ho8/CineWestern_ES.m3u8',
    cover: 'https://i.imgur.com/2UROzSc.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-3vyqwrm',
    title: 'Zylo Ciné Western (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg00711-zylo-amg00711c8-rakuten-uk-2686.playouts.now.amagi.tv/playlist/amg00711-zylofast-cinewestern-rakutenuk/playlist.m3u8',
    cover: 'https://i.imgur.com/tteOFkL.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-e70wol9',
    title: 'Zylo Emotion\' L (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rakutenaa-zylo-emotional-rakuten-r1zkm.amagi.tv/playlist/rakutenAA-zylo-emotional-rakuten/playlist.m3u8',
    cover: 'https://i.imgur.com/MP34aaj.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-1mfh3lg',
    title: 'Zylo ScreamIN (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rakutenaa-zylo-screamin-rakuten-p11ej.amagi.tv/playlist/rakutenAA-zylo-screamin-rakuten/playlist.m3u8',
    cover: 'https://i.imgur.com/tGmKbil.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ze4tycy',
    title: 'Детское кино International [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://autopilot.catcast.tv/content/38720/index.m3u8',
    cover: 'https://i.imgur.com/dJqFRhQ.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-5mmocwx',
    title: 'Дом Кино',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://streaming.thestream.cyou/live/44.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%B0_%D0%94%D0%BE%D0%BC_%D0%9A%D0%B8%D0%BD%D0%BE.png/960px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%B0_%D0%94%D0%BE%D0%BC_%D0%9A%D0%B8%D0%BD%D0%BE.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-27h2jhy',
    title: 'Дом Кино Премиум HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://31.148.48.15/Dom_Kino_Premium_HD/index.m3u8',
    cover: 'https://i.imgur.com/rJpQtvK.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-tqv33oo',
    title: 'Еврокино (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://31.148.48.15/Evrokino/index.m3u8',
    cover: 'https://i.imgur.com/8LPtPf6.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-c57p724',
    title: 'Иллюзион+ (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://31.148.48.15/Illusion_plus/index.m3u8',
    cover: 'https://i.imgur.com/9GvuHQ5.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ebp7l72',
    title: 'Кинеко (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://31.148.48.15/Kineko_HD/index.m3u8',
    cover: 'https://i.imgur.com/Otfvlmf.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-cu6rob3',
    title: 'Кино 1 International [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://kino-1.catcast.tv/content/38617/index.m3u8',
    cover: 'https://i.imgur.com/zsCPLs4.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-keoe8i9',
    title: 'КИНО ТВ (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://31.148.48.15/Kino_TV_HD/index.m3u8',
    cover: 'https://i.imgur.com/sMpamNO.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-aels2ne',
    title: 'Кинопоказ (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://31.148.48.15/Kinopokaz/index.m3u8',
    cover: 'https://i.imgur.com/nNjMyAq.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-00o75gu',
    title: 'КИНОСАТ (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://31.148.48.15/Kineko/index.m3u8',
    cover: 'https://i.imgur.com/7KsNvBz.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-kj29a01',
    title: 'Новый Русский (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.15plusmg.ru/memfs/f983b507-a170-41a9-85a9-d9afc6cba9c1.m3u8',
    cover: 'https://i.imgur.com/iuRSScH.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-8ycf47s',
    title: 'Патриот (576i)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://catchup.videoline.ru/asvtv/index.m3u8',
    cover: 'https://patriotkanal.ru/assets/cached/2025/02/resize/264_112_q100_patriot-only-logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-w5s00jn',
    title: 'Родное Кино (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://31.148.48.15/Rodnoe_kino/index.m3u8',
    cover: 'https://i.imgur.com/H70LxoZ.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-680z25p',
    title: 'Русский Бестселлер (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://31.148.48.15/Russkiy_Bestseller/index.m3u8',
    cover: 'https://i.imgur.com/w0ZE9QJ.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-6woaaft',
    title: 'Русский Детектив (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://31.148.48.15/Russkiy_Detektiv/index.m3u8',
    cover: 'https://i.imgur.com/H3qhN8S.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-1gt3t5h',
    title: 'Русский Иллюзион (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://31.148.48.15/Russkiy_illusion/index.m3u8',
    cover: 'https://i.imgur.com/RlsqFN8.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-g7p024s',
    title: 'Русский Роман (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://31.148.48.15/Russkiy_Roman_HD/index.m3u8',
    cover: 'https://i.imgur.com/cQN0P2B.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-e7c1gch',
    title: 'Сити Эдем КиноАзия [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/34393/index.m3u8',
    cover: 'https://i.imgur.com/gaket4B.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-m69lk3j',
    title: 'Сити Эдем КиноАрт [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/38398/index.m3u8',
    cover: 'https://i.imgur.com/67CWCtz.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-9c35m4t',
    title: 'Сити Эдем КиноДетектив [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/41327/index.m3u8',
    cover: 'https://i.imgur.com/9rKHwBV.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-6ucooqq',
    title: 'Сити Эдем КиноДрама [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/45269/index.m3u8',
    cover: 'https://i.imgur.com/29ddffh.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-q2d8lir',
    title: 'Сити Эдем КиноКлассика [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/34185/index.m3u8',
    cover: 'https://i.imgur.com/0qGCS1S.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-k51ktlw',
    title: 'Сити Эдем КиноКомедия [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/41331/index.m3u8',
    cover: 'https://i.imgur.com/Aga2XVA.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-tvs5vmz',
    title: 'Сити Эдем КиноМистика [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/40783/index.m3u8',
    cover: 'https://i.imgur.com/s1Pid0K.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-o2xztp8',
    title: 'Сити Эдем КиноСемья [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://v2.catcast.tv/content/38128/index.m3u8',
    cover: 'https://i.imgur.com/YoWOZMx.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7fafkay',
    title: 'Сити Эдем КиноФантастика [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/45268/index.m3u8',
    cover: 'https://i.imgur.com/I64FeIO.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-gsh3ykn',
    title: 'Сити Эдем КиноЭкшен [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/41333/index.m3u8',
    cover: 'https://i.imgur.com/uuzuvD0.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-a0bo3l2',
    title: 'Смотрим 100% Классика',
    author: 'Ретро / Класика',
    type: 'video',
    url: 'https://player.smotrim.ru/iframe/stream/live_id/78a66c7c-df38-4091-b2e1-9eeeb4c96338',
    cover: 'https://i.imgur.com/aASNpKq.png',
    description: '24/7 Ретро / Класика Stream',
    category: 'Ретро / Класика'
  },
  {
    id: 'vid-svw88pu',
    title: 'Феникс плюс Кино (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://31.148.48.15/Feniks_plus_kino/index.m3u8',
    cover: 'https://i.imgur.com/S9OPMLE.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-y50cklz',
    title: '动作电影 (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://39.134.19.68/dbiptv.sn.chinamobile.com/PLTV/88888888/224/3221226465/index.m3u8',
    cover: 'https://i.imgur.com/AuiVcyh.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-fq2uilq',
    title: '江苏影视 (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'http://223.110.243.134/PLTV/4/224/3221225937/index.m3u8',
    cover: 'https://www.tvchinese.net/uploads/tv/jsys.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
];

export function getPodcasts() {
  return PODCASTS;
}
