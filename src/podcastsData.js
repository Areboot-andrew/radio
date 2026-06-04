// ========================================
// Video Clips & Music Data
// ========================================

const PODCASTS = [
  {
    id: 'vid-o4mhvta',
    title: '3ABN Praise Him Music Network',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://3abn.bozztv.com/3abn1/PraiseHim/smil:PraiseHim.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/iBcqT8L.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ylnrdan',
    title: '4 Fun TV (576i) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.4fun.tv:8888/hls/4f_high/index.m3u8',
    cover: 'https://i.imgur.com/rI1wo2l.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ct3rtcd',
    title: '4 Kurd',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://4kuhls.persiana.live/hls/stream.m3u8',
    cover: 'https://www.aparatchi.com/images/chanells-logo/4kurd.svg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3yy4hma',
    title: '7 RadioVisione (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream10.xdevel.com/video1s976543-1932/stream/playlist.m3u8',
    cover: 'https://radio7note.com/img/favicon/android-icon-192x192.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wvy1jkj',
    title: '7S Music (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumt03.tangotv.in/Dsly5z3H7SMUSIC/index.m3u8',
    cover: 'https://i.imgur.com/zDiIhdN.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-m5cwei4',
    title: '7 YOU & ME (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream10.xdevel.com/video0s977798-2239/stream/playlist.m3u8',
    cover: 'https://i.imgur.com/Rte2K3x.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-iz4gdwj',
    title: '9X Jalwa (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://b.jsrdn.com/strm/channels/9xjalwa/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_9X_JALWA/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2l3s1bm',
    title: '9X Jhakaas (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://9xjio.wiseplayout.com/9X_Jhakaas/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s90012_ld_h15_aa.png?lock=720x540',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-y0bvx0t',
    title: '9X Tashan (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://9xjio.wiseplayout.com/9X_Tashan/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_9X_TASHAN/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-cct1xer',
    title: '9XM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://9xjio.wiseplayout.com/9XM/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_9XM/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-p2tioys',
    title: '13 Festival (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://origin.dpsgo.com/ssai/event/Nftd0fM2SXasfDlRphvUsg/master.m3u8',
    cover: 'https://i.imgur.com/Ymk6j5o.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-iyf0l3i',
    title: '15+ Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.15plusmg.ru/memfs/ce3366b1-bf25-4e24-96bb-1adf0d44bd3d.m3u8',
    cover: 'https://i.imgur.com/kj21hwd.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-k5dunu9',
    title: '30A Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://30a-tv.com/music.m3u8',
    cover: 'https://i.imgur.com/gNWg9tl.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wkgtq1e',
    title: '70-80 TV (1080P)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://585b674743bbb.streamlock.net/9050/9050/playlist.m3u8',
    cover: 'https://i.imgur.com/y4kNV3Q.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gfayip2',
    title: '98.1 Pearl FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live2.tensila.com/pearl-v-1.pearlfm/hls/live/mystream.m3u8',
    cover: 'https://i.imgur.com/GY750xh.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dyeuoha',
    title: 'A2i Music (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.sen-gt.com/A2iMusic/myStream/playlist.m3u8',
    cover: 'https://i.imgur.com/Fykhzxh.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-oq8x1lc',
    title: 'Aaryaa TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.ottlive.co.in/aryatvtamil/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/aryatvtamil.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bvkfb1a',
    title: 'Abdulmajeed Abdullah (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d2hng5r56zpsbw.cloudfront.net/out/v1/9c4c990f44bb4767bb46271f326dd574/index.m3u8',
    cover: 'https://assets.mbcmood.com/channels/1720184087Abdullah%20Majeed%20Abdullah%20banner.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8iz59rt',
    title: 'Activa TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamtv.mediasector.es/hls/activatv/index.m3u8',
    cover: 'https://i.imgur.com/VCUZKiw.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9p1wnl1',
    title: 'ACW UG TV (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.acwugtv.com/hls/stream.m3u8',
    cover: 'https://i.imgur.com/8pzEmcJ.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8x6k4x6',
    title: 'AE Radio TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tls-cl.cdnz.cl/aeradio/live/playlist.m3u8',
    cover: 'https://i.imgur.com/425dj2i.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4oep1d8',
    title: 'AFN TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://bozztv.com/1gbw5/tintv2/tintv2/playlist.m3u8',
    cover: 'https://i.imgur.com/LctanF8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1plvv97',
    title: 'Afrobeats (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.ecable.tv/afrobeats/index.m3u8',
    cover: 'https://i.imgur.com/232ndRK.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xdebv8p',
    title: 'Aghani Aghani TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn.streamlane.tv/hls/aghanitv/index.m3u8',
    cover: 'https://i.imgur.com/o6HSfNg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ocnp3g9',
    title: 'AlbKanale Music TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://albportal.net/albkanalemusic.m3u8',
    cover: 'https://i.imgur.com/JdKxscs.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-deg0tt6',
    title: 'Alcance FM PLAY TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.wilohosting.com:19360/alcancefmtv/alcancefmtv.m3u8',
    cover: 'https://i.imgur.com/ymcWecA.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zrf52h1',
    title: 'Alterna TV (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://tv.alterna.ar/stream/hls/live.m3u8',
    cover: 'https://tv.alterna.ar/alternatv.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-5n9xfvq',
    title: 'AMC (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amchls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/yj8RNnG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-f03be7k',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",AMusic Channel (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d3s7x6kmqcnb6b.cloudfront.net/d/distro001a/LVP8DMYRYH6F6Y5UUO8J/hls3/now,-1m/m.m3u8?ads.vf=McCy6HuluFe',
    cover: 'https://i.imgur.com/06zuf64.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6uapysf',
    title: 'Andy Haryana (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumt03.tangotv.in/Dsly5z3HANDYHARYANA/index.m3u8',
    cover: 'https://i.imgur.com/rmCBD3e.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-b8w1nmy',
    title: 'Antenne Kaernten (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://60efd7a2b4d02.streamlock.net/a_kaernten/ngrp:livestream_all/playlist.m3u8',
    cover: 'https://i.imgur.com/nUKFDsb.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-e2j91cp',
    title: 'Antenne Steiermark (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://60efd7a2b4d02.streamlock.net/a_steiermark/ngrp:livestream_all/playlist.m3u8',
    cover: 'https://i.imgur.com/qnappvd.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lzga8cf',
    title: 'Antenne Vorarlberg (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5857db5306b83.streamlock.net/antennevorarlberg-live/_definst_/mp4:livestream/playlist.m3u8',
    cover: 'https://i.imgur.com/GW750Zc.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4usq9ep',
    title: 'ARY Musik (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://arymusik.aryzap.com/3fd38b2c62d0c3bbd74aedabb533c03a/6459fa78/v1/01847ac7a4930b8ed5aa6ed04aba/01847ac8f5f70b8ed5aa6ed04abd/main.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/en/b/bb/ARY_Musik_logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lvs6vku',
    title: 'ATN Music (360p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/atnmusic.stream/playlist.m3u8',
    cover: 'https://www.jagobd.com/wp-content/uploads/2015/12/atnmusic.jpg?x50681',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5pieijr',
    title: 'Atomic Academy TV (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://atomic.streamnet.ro/academia.m3u8',
    cover: 'https://i.imgur.com/ZbrDIbZ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qyrisy0',
    title: 'Atomic TV (360p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://atomic.streamnet.ro/atomictv.m3u8',
    cover: 'https://i.imgur.com/O4uI0Uy.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rroobzb',
    title: 'Avang TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls.avang.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/3I1n7fO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3uuafak',
    title: 'Azahares Radio Multimedia (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamyes.alsolnet.com/azaharesfm/live/playlist.m3u8',
    cover: 'https://i.imgur.com/g1BFoSs.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ey79twa',
    title: 'B4U Music (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-2.pishow.tv/live/415/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s158141_ld_h15_aa.png?lock=720x540',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-e4qdsxn',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",Balle Balle (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/balle-balle/index.m3u8?ads.vf=b8WZfP1_RIy',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Balle_Balle_TV.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-241eqze',
    title: 'Baraza TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eco.streams.ovh:8081/barazatv/tracks-v1a1/mono.m3u8',
    cover: 'https://i.imgur.com/TZ1unwF.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1i7zj84',
    title: 'Baraza TV Deep House (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtmp.streams.ovh:1936/barazarelax/barazazararelax/barazarelax/playlist.m3u8',
    cover: 'https://i.imgur.com/TZ1unwF.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-v3vqqcs',
    title: 'Baraza TV Relaxing (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtmp.streams.ovh:1936/barazarelax/barazarelax/playlist.m3u8',
    cover: 'https://i.imgur.com/TZ1unwF.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-q18oh7z',
    title: 'Barbud Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://raw.githubusercontent.com/taodicakhia/IPTV_Exception/master/channels/af/tolomusic.m3u8',
    cover: 'https://i.imgur.com/jbbxu0g.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-790pep1',
    title: 'BE@TTV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv.beatfm.nl/live.m3u8',
    cover: 'https://i.imgur.com/egK33Dj.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-o4rmxf5',
    title: 'Beats Radio (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://videostream.shockmedia.com.ar:19360/beatsradio/beatsradio.m3u8',
    cover: 'https://i.imgur.com/zkNUO5p.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4jfuul3',
    title: 'Bel RTL (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://bel-live-hls.akamaized.net/hls/live/2038650/BEL-Live-HLS/master.m3u8',
    cover: 'https://i.imgur.com/0DUprIW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kosli8d',
    title: 'Best of Dance TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://m1b2.worldcast.tv/dancetelevisionone/dancetelevisionone.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nkkadvv',
    title: 'Bibel TV Musik (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://bibeltv03.iptv-playoutcenter.de/bibeltv03/bibeltv03.stream_1/playlist.m3u8',
    cover: 'https://i.imgur.com/yIqOcP5.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-h7qfqth',
    title: 'BIZ Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://fl.biztv.media/music_720_QAKpGmVUjaPApCNjpsgBxrdqNihAkl/index.m3u8',
    cover: 'https://i.ibb.co/DfsCJwk/Uz-biz-music-5462.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-b4so64n',
    title: 'BOKTV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livestream2.bokradio.co.za/hls/Bok5c.m3u8',
    cover: 'https://i.imgur.com/mcNjuuO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wlgiuc9',
    title: 'BPX TV Radio',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video1.getstreamhosting.com:1936/8212/8212/playlist.m3u8',
    cover: 'https://i.imgur.com/86VXni8.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-poy08p0',
    title: 'Bravo! TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streaming.social3.hr/bravoTVkdjd7djd/XAbSERW5p3/2.m3u8',
    cover: 'https://i.imgur.com/FN2J9hv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6s93sep',
    title: 'BTA TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloud.fastchannel.es/manifiest/hls/prog9/btatv.m3u8',
    cover: 'https://i.imgur.com/vygOosC.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-sxo99vd',
    title: 'Busuioc TV (540p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://busuioctv.iforward.eu/hls/busuioc.m3u8',
    cover: 'https://i.imgur.com/CQtfBPu.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-oo2tsl6',
    title: 'Cadena Elite (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8004/index.m3u8',
    cover: 'https://i.imgur.com/3yeGDTP.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fwymj2n',
    title: 'Canal 3 KMK TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live20.bozztv.com/giatv/giatv-KMKTV/KMKTV/chunks.m3u8',
    cover: 'https://i.imgur.com/sgRDRBK.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-h2jftk6',
    title: 'Canal Clave (480p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv.picta.cu/clave/clave_0.m3u8',
    cover: 'https://i.imgur.com/7tMkA4Z.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-x8e7os3',
    title: 'CCTV-15 (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://xykt-fix.github.io/play/a02e/index.m3u8',
    cover: 'https://i.imgur.com/CCV0eRG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-abdlgui',
    title: 'CEACOM TV [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/ceacom/index.m3u8',
    cover: 'https://i.imgur.com/hutdRfk.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ss0774l',
    title: 'Channel C (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mini.allinonereborn.fun/tata.php?id=11588',
    cover: 'https://i.imgur.com/CnFdLaf.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-f22zrjf',
    title: 'City TV (576p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv.city.bg/play/tshls/citytv/index.m3u8',
    cover: 'https://i.imgur.com/mFL452f.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ei4djt9',
    title: 'Clubbing TV France',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d1j2csarxnwazk.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-uze1m6xh4fiyr-ssai-prd/master.m3u8',
    cover: 'https://i.imgur.com/MyiA92q.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-r04p5es',
    title: 'CMC (California Music Channel) (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cmc-ono.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/L38mC6H.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kb8u4in',
    title: 'CMC TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.cmctv.hr:49998/cmc/live.m3u8',
    cover: 'https://i.imgur.com/FCb7Ag2.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9eyvaln',
    title: 'Company TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5929b138b139d.streamlock.net/CompanyTV/smil:CompanyTV.smil/master.m3u8',
    cover: 'https://i.imgur.com/ccdwsWj.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ibo2x47',
    title: 'Conecta TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream8.mexiserver.com:19360/conectatvx/conectatvx.m3u8',
    cover: 'https://i.imgur.com/qEk0QGa.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-isrf3g0',
    title: 'Cool FM 98.9 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live2.tensila.com/cool-v-1.arubara/hls/master.m3u8',
    cover: 'https://i.imgur.com/uGE6lZ2.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-x05oqzk',
    title: 'Couleur 3 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtsc3video.akamaized.net/hls/live/2042837/c3video/3/playlist.m3u8',
    cover: 'https://i.imgur.com/VOIwYYd.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rdveevc',
    title: 'Cumbia Mix (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloud.tvomix.com/CUMBIAMIX/index.m3u8',
    cover: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6901dfd41a05195b77301d7b/b306e57e4_Logo-TV-C.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qio2kyr',
    title: 'D3 TV (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live20.bozztv.com/akamaissh101/ssh101/d3tvnet/playlist.m3u8',
    cover: 'https://i.imgur.com/uFEIBtB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-m3v6wxk',
    title: 'Dance FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5eaccbab48461.streamlock.net:1936/dancefm_1/dancefm_1/playlist.m3u8',
    cover: 'https://i2.paste.pics/ff3e1e1045a1968dcdbcda3824a94eb3.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-l3igzqq',
    title: 'Dance Television (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://m1b2.worldcast.tv/dancetelevisionone/2/dancetelevisionone.m3u8',
    cover: 'https://pbs.twimg.com/profile_images/1268129322730127364/OJlQBZpS_400x400.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-exu891s',
    title: 'like Gecko Chrome/144.0.0.0 Safari/537.36" group-title="Music",Dance TV [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://op-group1-swiftservehd-1.dens.tv/h/h250/index.m3u8',
    cover: 'https://i.imgur.com/UKMR625.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-csfzyn4',
    title: 'DanceTV Algorhythm (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://m2b2.worldcast.tv:7443/dancetelevisionfour/dancetelevisionfour.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-y2vlknj',
    title: 'DanceTV Deep House District (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://m1b2.worldcast.tv/dancetelevisiontwo/dancetelevisiontwo.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-cmmyy1z',
    title: 'DanceTV EDM Mainstage (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mbit1.worldcast.tv/dancetelevisionseven/multibit.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8wva50x',
    title: 'DanceTV House Floor (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://m2b2.worldcast.tv:7443/dancetelevisionfive/dancetelevisionfive.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mvuism9',
    title: 'DanceTV Minimal Tech (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mbit1.worldcast.tv/dancetelevisionsix/multibit.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-s6uoazc',
    title: 'DanceTV Techno Warehouse (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://m2b2.worldcast.tv:7443/dancetelevisionthree/dancetelevisionthree.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-pcjpo52',
    title: 'DASDING 90.8 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://swrdasdingvr-hls.akamaized.net/hls/live/2018681/dasdingvr/master.m3u8',
    cover: 'https://i.imgur.com/BmklHs8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nyeodfu',
    title: 'DBM TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dbmtv.vedge.infomaniak.com/livecast/dbmtv/playlist.m3u8',
    cover: 'https://i.imgur.com/ab6p2SW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-oci1ch1',
    title: 'DeepHouse District (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu-nl-012.worldcast.tv/dancetelevisiontwo/dancetelevisiontwo.m3u8',
    cover: 'https://i.imgur.com/IV2Qvc0.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dwi4ogy',
    title: 'Dega TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59d39900ebfb8.streamlock.net/saintlouisltv/saintlouisltv/playlist.m3u8',
    cover: 'https://i.ibb.co/ZTYvHyR/DEGA-TV-TELEPACK.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wu08lp6',
    title: 'Deluxe Dance (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://sdn-global-live-streaming-packager-cache.3qsdn.com/64733/64733_264_live.m3u8',
    cover: 'https://i.imgur.com/Qu7t15Y.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lhpnkmi',
    title: 'Deluxe Lounge (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://jmp2.uk/stvp-CHAJ0500413A',
    cover: 'https://i.imgur.com/pgCA35z.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nquoj53',
    title: 'Deluxe Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://sdn-global-live-streaming-packager-cache.3qsdn.com/13456/13456_264_live.m3u8',
    cover: 'https://i.imgur.com/HimuPPb.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-tbknjcl',
    title: 'Deluxe Rap (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://sdn-global-live-streaming-packager-cache.3qsdn.com/65183/65183_264_live.m3u8',
    cover: 'https://i.imgur.com/s3h67hx.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mzepf1d',
    title: 'Dhamaal (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/1291/master.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Dhamaal_TV.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dbls35l',
    title: 'Dhoom Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/1456/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_DHOOM_MUSIC/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4l2bga3',
    title: 'Dismar Radio TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rds3.desdeparaguay.net/dismartv/dismartv/playlist.m3u8',
    cover: 'https://i.imgur.com/KOuxdMD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-klfcy5x',
    title: 'DM Sat (576p) [Geo-Blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://viamotionhsi.netplus.ch/live/eds/dmsat/browser-dash/dmsat.mpd',
    cover: 'https://i.imgur.com/LdeA1Cn.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-x5ta3md',
    title: 'DMF (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d-m-f.iptv-playoutcenter.de/dmf/dmf1/playlist.m3u8',
    cover: 'https://i.imgur.com/sJaBU7X.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-je6w5jn',
    title: 'Dream Türk (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.duhnet.tv/S2/HLS_LIVE/dreamturknp/playlist.m3u8',
    cover: 'https://i.imgur.com/vJ8VaZi.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6yk4dad',
    title: 'DTR Music 1 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://kino-stream.online/hls/DTRMUSIC1.m3u8',
    cover: 'https://i.imgur.com/3picWDA.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-63xc497',
    title: 'E40 (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://copacotf.desdeparaguay.net/e40tv/e40tv_py_alta/playlist.m3u8?admin=tvaccion',
    cover: 'https://i.imgur.com/0RypDUY.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-yxs2wqz',
    title: 'EBS Musika (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rpn.bozztv.com/ebstv/ebsmusika/index.m3u8',
    cover: 'https://i.imgur.com/lSpplhD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wv6u5c1',
    title: 'EcuaMundo Radio TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://pacific.direcnode.com:3353/live/ecuamundotvlive.m3u8',
    cover: 'https://i.imgur.com/EMe5oWn.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-iqsy3gv',
    title: 'El Radio 9090 FM (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://9090video.mobtada.com/hls/stream.m3u8',
    cover: 'https://www.9090.fm/images/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9lod484',
    title: 'El Sol Network TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv.wracanal10.com:3025/live/elsoltvlive.m3u8',
    cover: 'https://i.imgur.com/TIH3zlP.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rzwhvul',
    title: 'Ellinikos FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtmp.win:3603/live/ellinikosfmlive.m3u8',
    cover: 'https://i.ibb.co/y0ydCNB/unnamed-4.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7v5t1np',
    title: 'EnerGeek Radio (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://backend.energeek.cl/webtv/egradioweb/index.m3u8?token=ZZDemoIPTVGH',
    cover: 'https://cdn.energeek.cl/logos/EG-Radio-2025_pfp.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-w0zz2g6',
    title: 'ETV Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cc-szivnms4rlah6.akamaized.net/WWBI/Amagi/ETV_Music_IN/playlist.m3u8',
    cover: 'https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN4900002RV_20250811T033455SQUARE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-p8s4e2d',
    title: 'EU Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://iptv.prosto.tv/ch134/tracks-v2a1/1.m3u8?21yo=1&live=1&ip=104.28.156.59&id=742347&secret=vu2y5m72&ses=ca0cfbf5db9d8003&uid=vu2y5m72&cs_track=false&e=1782900912&st=j-Ja2visdxrjH_8haQZjNg',
    cover: 'https://i.imgur.com/fJdvyrG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9y8wboe',
    title: 'Exclusiv TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ythls.armelin.one/channel/UCXxTnMoETkhNTmsqZc0JMhQ.m3u8',
    cover: 'https://i.imgur.com/xw1IWoO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-b6amhx6',
    title: 'Extra TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streaming.social3.hr/ExtraTVudzdhr5/uUankWqpXD/1.m3u8',
    cover: 'https://i.imgur.com/5edYPBO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vil3n0k',
    title: 'Fabulosa Estéreo 100.5 FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://www.streaming507.net:19360/videofabulosa/videofabulosa.m3u8',
    cover: 'https://i.imgur.com/YFmzkOp.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rvw23i8',
    title: 'Fairuz (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx029/playlist.m3u8',
    cover: 'https://shahid.mbc.net/mediaObject/f809d51c-e83d-43c9-8236-78731c2216ad?type=png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mcbbmt9',
    title: 'Falastini TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rp.tactivemedia.com/palestiniantv_source/live/playlist.m3u8',
    cover: 'https://i.imgur.com/6B3Cims.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-pelie89',
    title: 'Famatv (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv2.fastcast4u.com:3310/live/famatvlive.m3u8',
    cover: 'https://i.ibb.co/tMmRp18/Fama-TV-cor-whitebg-hotizontal.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-cv2cg06',
    title: 'Fame95 FM (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rjr-fame.akamaized.net/hls/live/2033820/RJR_FAME/master.m3u8',
    cover: 'https://i.imgur.com/n3PUxes.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7004dte',
    title: 'Finest TV (288p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://media.finest.tv/hls/live.m3u8',
    cover: 'https://i.imgur.com/1uoP10V.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-sp14pwp',
    title: 'Flex Studio Radio TV [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live20.bozztv.com/akamaissh101/ssh101/fsradiotv/playlist.m3u8',
    cover: 'https://i.imgur.com/tZjqtxd.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-equ9ntb',
    title: 'FM ITALIA (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream2.xdevel.com/video0s975817-1183/stream/playlist.m3u8',
    cover: 'https://i.imgur.com/54CO2u9.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ojfxczr',
    title: 'FM Mundo (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video2.makrodigital.com/fmmundo/fmmundo/playlist.m3u8',
    cover: 'https://i.imgur.com/1nNnYQO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-suqyiie',
    title: 'Folk TV (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.nasatv.com.mk/folktv/hls/folktv_live.m3u8',
    cover: 'https://i.imgur.com/4b9aZ9P.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-a9u92uw',
    title: 'FOLX Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdne.folxplay.tv/folx-trz/streams/ch-4/master.m3u8',
    cover: 'https://i.imgur.com/ze04puX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ocnw9y8',
    title: 'Folx Slovenija (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdne.folxplay.tv/folx-trz/streams/ch-5/master.m3u8',
    cover: 'https://i.imgur.com/RK1IASU.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-celqk6b',
    title: 'FomixTV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.fomixmedia.nl/FomixTV/video.m3u8',
    cover: 'https://i.imgur.com/7SLYEMG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fenfo23',
    title: 'FON Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-01.bonus-tv.ru/tntmusic/playlist.m3u8',
    cover: 'https://i.imgur.com/tXABQDE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qgst8qm',
    title: 'Frecuencia Musical TV [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://s2.tvdatta.com:3307/hybrid/play.m3u8',
    cover: 'https://i.imgur.com/vPxvbVv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xip2ifx',
    title: 'FTV (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream8.cinerama.uz/1018/playlist.m3u8',
    cover: 'https://i.imgur.com/7lpISyN.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5mdxxdi',
    title: 'Fuego TV [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamunoapp.com:3553/live/cromtvlive.m3u8',
    cover: 'https://i.imgur.com/T9vWjeB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-y2bilcr',
    title: 'Fun Radio',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/funradiofr.m3u8',
    cover: 'https://i.imgur.com/wgxuYsQ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-40e5tk7',
    title: 'FUSION TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://edge20.vedge.infomaniak.com/livecast/ik:fusiontv/manifest.m3u8',
    cover: 'https://i.imgur.com/WMrYEgH.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7lcbbmu',
    title: 'Galaxy TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.castr.com/6463248048d6cd3e143655b2/live_43351ad0f3b411ed81c78fcc31887c54/index.fmp4.m3u8',
    cover: 'https://i.imgur.com/P5OABe5.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rp3s2yn',
    title: 'GEM 24B',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gem24b/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/8LgdPst.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-js3rsvb',
    title: 'GEM Mifa',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemmifa/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/qlI7o7V.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-jdi6iic',
    title: 'GEM Mifa Plus',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemmifaplus/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/8FIAqR5.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rafplzu',
    title: 'Gex TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live20.bozztv.com/akamaissh101/ssh101/gextvaccess/playlist.m3u8',
    cover: 'https://gextv.com/LOGO-WHITE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3wwam65',
    title: 'Gigant FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.uitzending.tv:19360/gigantfm/gigantfm.m3u8',
    cover: 'https://i.imgur.com/LwEHfjD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xe8360i',
    title: 'GMTV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livechannel.mdc.akamaized.net/stitch/livechannel/1341/master1400000.m3u8;session=live_stream_1341',
    cover: 'https://i.imgur.com/GJYb8c8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-h0l8yat',
    title: 'GO TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rds3.desdeparaguay.net/gotv/gotv/playlist.m3u8',
    cover: 'https://i.ibb.co/jkvYVyz/Captura.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9ee0efg',
    title: 'GugakTV 국악방송 (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mgugaklive.nowcdn.co.kr/gugakvideo/gugakvideo.stream/playlist.m3u8',
    cover: 'https://i.imgur.com/Ey7Htm8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-594t0sj',
    title: 'HEi Now (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://copacogen.desdeparaguay.net/heitv/heitv_py_alta/playlist.m3u8?admin=nacion',
    cover: 'https://i.imgur.com/oMHiGRN.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kab1wjv',
    title: 'High Vision (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamer1.connectto.com/HIGHVISION_WEB_1205/index.m3u8',
    cover: 'https://i.imgur.com/zhCgoru.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kyscbhg',
    title: 'Hitradio O3 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://studiocam-oe3.mdn.ors.at/orf/studiocam_oe3/q6a/manifest.mpd',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Hitradio_%C3%963.svg/960px-Hitradio_%C3%963.svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rg21r99',
    title: 'Hitz TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamer2.nexgen.bz/13-HITZ/index.m3u8',
    cover: 'https://i.imgur.com/SbZgsDh.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-btmqw88',
    title: 'HMI PROMZ NEWS (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video1.getstreamhosting.com:1936/8326/8326/playlist.m3u8',
    cover: 'https://i.imgur.com/gwPaw3v.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-38400vl',
    title: 'Hype Visual Radio (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streammix.alsolnet.com/hyperadio/live/playlist.m3u8',
    cover: 'https://cdn.onlineradiobox.com/img/fblogo/1/97371.v21.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9zf6zas',
    title: 'Identité Télé Caraïbes (548p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vdo2.pro-fhi.net:3769/stream/play.m3u8',
    cover: 'https://i.imgur.com/Atsf6Cd.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-22lzj8v',
    title: 'Impact TV Dance (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://online.tvimpact.live/hls/dancetv.m3u8',
    cover: 'https://i.imgur.com/G5mNdpE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5uillem',
    title: 'Impact TV Manele (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://online.tvimpact.live/hls/impact_tv.m3u8',
    cover: 'https://i.imgur.com/G5mNdpE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1vrzi6p',
    title: 'Infinita TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://s2.tvdatta.com:3753/hybrid/play.m3u8',
    cover: 'https://i.imgur.com/1nHxdkR.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-j9b4kav',
    title: 'Insync (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumt04.tangotv.in/INSYNC/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Insync.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7iljito',
    title: 'IQ Channel (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtmp.info/iqtv/envivo/playlist.m3u8',
    cover: 'https://i.imgur.com/hwuaomt.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-tpx3b0m',
    title: 'Italianissimo (360p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vcp.myplaytv.com/italianissimo/italianissimo/playlist.m3u8',
    cover: 'https://i.imgur.com/JCpbUZB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5fg401j',
    title: 'iTV Afrobeats Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/afrobeats/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4kklxd9',
    title: 'iTV Arabic Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/arabic/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-e1gfpwt',
    title: 'iTV Indian Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/indian/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1g1gixy',
    title: 'iTV Latin Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/latin/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-l6kh2fr',
    title: 'ITV Persian Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/persian/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8zpubc7',
    title: 'iTV Turkish Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/turkish/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-e8dp4ck',
    title: 'iTV Urban Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/love2/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vi2t25m',
    title: 'Ivoire Channel (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video1.getstreamhosting.com:1936/8244/8244/playlist.m3u8',
    cover: 'https://i.imgur.com/gKbNqQv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7hzok4z',
    title: 'Jazz TV (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.nasatv.com.mk/jazztv/hls/jazztv_live.m3u8',
    cover: 'https://i.imgur.com/CbQlSFX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0kqxm4b',
    title: 'Jeddah Radio (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.kwikmotion.com/sbrksajeddahradiolive/srpksajeddahradio/chunks.m3u8',
    cover: 'https://aloula.faulio.com/storage/mediagallery/bd/f5/fullhd_527bf54a5adb56ac17f572ac2cd0801304db3baf.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4uc8uph',
    title: 'Joe FM (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dpp-streamlive-plain.medialaancdn.be/joe_kijklive/plain/hls_hd.m3u8',
    cover: 'https://i.ibb.co/k9KJWzN/320px-Joe-radio-logo-2016-svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-uvnujox',
    title: 'JooMusic (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livecdn.live247stream.com/joomusic/tv/playlist.m3u8',
    cover: 'https://i.imgur.com/KHuKQQL.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rnt9051',
    title: 'Jordan Songs (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://playlist.fasttvcdn.com/pl/cc0blorawy1ibohhrupraa/Song/playlist.m3u8',
    cover: 'https://i.imgur.com/1DE7Gmw.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4ldy8dn',
    title: 'JRTV Järviradio (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamer.radiotaajuus.fi/memfs/47f113bf-04ea-493b-a9d4-52945fd9db31.m3u8',
    cover: 'https://jarviradio.fi/jrtv2/wp-content/uploads/2022/01/jrtv1.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-16ngxhn',
    title: 'Juice TV (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://juicex.nz/hls/mystream.m3u8',
    cover: 'https://i.imgur.com/WaaaW0w.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6lrgesn',
    title: 'KandelaTV (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamtv.intervenhosting.net:3718/live/kandelamedioslive.m3u8',
    cover: 'https://i.imgur.com/cCFxyIp.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-cbge0pc',
    title: 'Karibena [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live-player.egostreaming.pe/karibenatv_685a-pe-a5676-584412/index.fmp4.m3u8',
    cover: 'https://i.imgur.com/cgHjg1e.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-52dmv03',
    title: 'Kayhan TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://playout395.livestreamingcdn.com/live/Stream1/playlist.m3u8',
    cover: 'https://i.imgur.com/2MDjU7x.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6eo3qeu',
    title: 'Kiss Kiss Napoli TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://58f12ffd2447a.streamlock.net/KKTVNapoli/livestream/playlist.m3u8',
    cover: 'https://i.imgur.com/RsGiBwE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-36zzalc',
    title: 'Kiss Kiss TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://58f12ffd2447a.streamlock.net/KKMulti/livestream/playlist.m3u8',
    cover: 'https://i.imgur.com/ja6c2YZ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-15rpp2e',
    title: 'Kiss TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv.broadcasting.ro/kisstv/a629c031-2170-4ee9-a36d-87a891aa3131.m3u8',
    cover: 'https://i.imgur.com/NKfVymH.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0iesc1f',
    title: 'Klape i Tambure TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.cmctv.hr:49998/kit/live.m3u8',
    cover: 'https://i.imgur.com/sKj3dgc.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4lwwjz6',
    title: 'KpopTV Play (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://giatv.bozztv.com/giatv/giatv-kpoptvplay/kpoptvplay/playlist.m3u8',
    cover: 'https://i.imgur.com/Tf0vweF.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-g6oueb9',
    title: 'KRAL Pop TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dogus-live.daioncdn.net/kralpoptv/playlist.m3u8',
    cover: 'https://i.imgur.com/ch365lh.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-q3zz7g7',
    title: 'Kronehit (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://bitcdn-kronehit.bitmovin.com/v2/hls/playlist.m3u8',
    cover: 'https://i.imgur.com/dQJQv1X.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nfp8jnw',
    title: 'KurdMax Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://6476e46b58f91.streamlock.net/music/MUSIC2402/playlist.m3u8',
    cover: 'https://i.imgur.com/otnIdEu.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3ae1npk',
    title: 'La 98.1 TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://6019dcac4147f.streamlock.net:9443/la98/Invosa/playlist.m3u8',
    cover: 'https://i.imgur.com/7380kTN.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6nr0ykc',
    title: 'La Cantina Memorias (480p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.xtrematv.com:3208/live/memoriaslacantinalive.m3u8',
    cover: 'https://imgs1.e-droid.net/srv/imgs/seccs/34751741_ico.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-q7hl84u',
    title: 'La Fabulosa Radio y TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8004/index.m3u8',
    cover: 'https://i.imgur.com/GjME5H0.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zj92lnm',
    title: 'La Hermandad Salsera (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamlov.alsolnet.com/hermandadsalsera/live/playlist.m3u8',
    cover: 'https://i.imgur.com/7Wlt6bc.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-pbkw2m5',
    title: 'La Kalle (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mdstrm.com/live-stream-playlist/58d191f07290fbb058025843.m3u8',
    cover: 'https://www.tdtparatodos.tv/sites/default/files/la_kalle.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7l1vtqt',
    title: 'La Mega Mundial',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://server40.servistreaming.com:3477/stream/play.m3u8',
    cover: 'https://i.imgur.com/UdMsgkt.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-anvvhsf',
    title: 'LA MIA TV (720p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ss2.tvrdomi.com:1936/lamiatv/lamiatv/playlist.m3u8',
    cover: 'https://i.imgur.com/XIwTM1h.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wrs1muh',
    title: 'La Morada Radio TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://movil.ejeserver.com/live/lamoradatv.m3u8',
    cover: 'https://i.imgur.com/E3wDEX5.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3y7q87v',
    title: 'La Perla Radio TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8068/index.m3u8',
    cover: 'https://i.imgur.com/8wDMgmB.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-r3d2k30',
    title: 'La Que Buena Atlanta',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamyes.alsolnet.com/quebuenaatlanta/live/index.m3u8',
    cover: 'https://iili.io/JysD2a4.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hkvh7t0',
    title: 'La Top 102.9 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59d39900ebfb8.streamlock.net/top102/top102/playlist.m3u8',
    cover: 'https://i.imgur.com/ZqwLPag.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-drh5mh7',
    title: 'La Top 107.7 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59d39900ebfb8.streamlock.net/top107/top107/playlist.m3u8',
    cover: 'https://i.imgur.com/vgHhh1W.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-jtojpzb',
    title: 'La Urban TV (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://urbanrevolution.es:8443/live/TV/playlist.m3u8',
    cover: 'https://i.imgur.com/hythjEn.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-96psr3e',
    title: 'La Voz del Tropico (480p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ss2.tvrdomi.com:1936/lavozdeltropico/lavozdeltropico/playlist.m3u8',
    cover: 'https://i.imgur.com/DKDFpHt.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-425elfp',
    title: 'La-X (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.eleden.com/livelax/ngrp:livelax_all/playlist.m3u8',
    cover: 'https://i.imgur.com/i2GnQTq.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3wux5hk',
    title: 'Latin Zone TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn.streamingcpanel.com:3784/live/latinzonetvlive.m3u8',
    cover: 'https://i.imgur.com/duEDsne.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dhdnd12',
    title: 'Lausitzwelle (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://h056.video-stream-hosting.de/easycast11-live/_definst_/mp4:livestreamhd2/playlist.m3u8?ref=',
    cover: 'https://i.imgur.com/4kYF4bK.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-u1axvwt',
    title: 'LaXitosa Panamá (360p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stmvideo2.livecastv.com/lax953/lax953/playlist.m3u8',
    cover: 'https://i.imgur.com/Pt4F9Xz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-l82w3lx',
    title: 'Lingkar TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lingkartv.my.id/hls/lingkartv.m3u8',
    cover: 'https://lingkartv.com/assets/img/logo-square.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ji3kfow',
    title: 'LiraTV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloud2.streaminglivehd.com:1936/liratv/liratv/playlist.m3u8',
    cover: 'https://i.imgur.com/hBswXYZ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-woq6g2g',
    title: 'Littoral FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.creacast.com/littoralfm-ch1/stream/playlist.m3u8',
    cover: 'https://i.imgur.com/DCZKAQ1.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-erzi88d',
    title: 'Live99FM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://media.streambrothers.com:1936/8014/8014/playlist.m3u8',
    cover: 'https://i.imgur.com/U43UrQT.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lpl3acf',
    title: 'LiveXLive (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livestream.liveone.com/lc1/p1.m3u8',
    cover: 'https://i.imgur.com/KFzEoed.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-080opm1',
    title: 'Lobo TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5ca3e84a76d30.streamlock.net/tvlobo/videotvlobo/playlist.m3u8',
    cover: 'https://i.imgur.com/3fA50RJ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-34moqu7',
    title: 'Look Thoong TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livefta.malimarcdn.com/ftaedge00/lookthoongtv.sdp/playlist.m3u8',
    cover: 'https://i.imgur.com/eT7iE34.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fsfxsfw',
    title: 'Love TV (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.nasatv.com.mk/lovetv/hls/lovetv_live.m3u8',
    cover: 'https://i.imgur.com/B8iaejQ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-aa4qgvl',
    title: 'LRT Klasika (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream-live.lrt.lt/klasika/master.m3u8',
    cover: 'https://i.imgur.com/Fa8Vhu0.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rw2qhhc',
    title: 'LRT Opus (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream-live.lrt.lt/opus/master.m3u8',
    cover: 'https://i.imgur.com/oLuZTMH.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lajti9s',
    title: 'Luna Estéreo 106.4 FM (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://servervideo.intermediacolombia.com:19360/kychbbfhdz/kychbbfhdz.m3u8',
    cover: 'https://i.imgur.com/cESeD6R.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-45sxmre',
    title: 'M2 (540p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.m2.tv/hls3/stream.m3u8',
    cover: 'https://i.imgur.com/AfcBWCg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-oak5srn',
    title: 'm2o TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S62628868/uhdWBlkC1AoO/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Radio_m2o_-_Logo_2019.svg/500px-Radio_m2o_-_Logo_2019.svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qzj24g9',
    title: 'M6 Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://test.946985.filegear-sg.me/proxy/803c517b325bfafc',
    cover: 'https://upload.wikimedia.org/wikipedia/en/c/c9/M6_Music_%282012%29.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3sv1nty',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",M+ (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/m-plus/master.m3u8?ads.vf=99_BajuDhjC',
    cover: 'https://i.imgur.com/Ho8N310.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-phlu3si',
    title: 'M-1 (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://m-1.data.lt/m-1/smil:m-1.smil/playlist.m3u8',
    cover: 'https://i.ibb.co/gb4NmNHT/M1-2025.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-pjz1df9',
    title: 'Madras FM TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://edge12.vedge.infomaniak.com/livecast/ik:madrasfmtv/manifest.m3u8',
    cover: 'https://i.imgur.com/spGg1CZ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-tx9b0wk',
    title: 'Magenta Musik 360 (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streaming.magentamusik.de/csm/573870/magentamusik1/index.m3u8',
    cover: 'https://i.imgur.com/R74gG7U.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-suoczx8',
    title: 'Magic TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://bss1.neterra.tv/magictv/magictv.m3u8',
    cover: 'https://i.imgur.com/n7bcrrp.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-iu1rn8n',
    title: 'Magic TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv.broadcasting.ro/magictv/925f90db-5c88-4190-a53d-5163cdffe6f4.m3u8',
    cover: 'https://i.imgur.com/9izrr4d.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-tf8tnd1',
    title: 'Maimon TV Canal 3 (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tele-stream.telecasa.net/live/st3/maimontv-hd/index.m3u8',
    cover: 'https://i.imgur.com/twldaaC.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2ooyzus',
    title: 'Majid Al Mohandis (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx019/playlist.m3u8',
    cover: 'https://i.discogs.com/Fk9Bm8gTYJYeVXIJKX-EOGmYQ90sVQPtkIW5ZK4fydo/rs:fit/g:sm/q:90/h:372/w:412/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9MLTE2OTY4/MzMtMTU2ODk0NjI5/MC01Njk2LmpwZWc.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-spas0id',
    title: 'Makao TV (360p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.obslivestream.com/makaomux/tracks-v2a1/playlist.m3u8',
    cover: 'https://i.imgur.com/asD5y7i.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-s4bfr3x',
    title: 'Marina TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ffs.gulfsat.com/Marina-TV-HD/index.m3u8',
    cover: 'https://i.imgur.com/F2PzEaw.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ya1cf62',
    title: 'Más FM 95.9 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vivo.solumedia.com:19360/masfm/masfm.m3u8',
    cover: 'https://i.imgur.com/TJ4gWQM.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-g5kjcq1',
    title: 'MasMusica FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://movil.ejeserver.com/live/masmusica.m3u8',
    cover: 'https://i.imgur.com/tCg7owd.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0bc0gw4',
    title: 'Mastiii (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumt02.tangotv.in/MASTIII/index.m3u8',
    cover: 'https://i.imgur.com/lxgXHx4.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-08bvv54',
    title: 'Max Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.maxtn.in/maxmusic/maxmusic/index.m3u8',
    cover: 'https://livetv.ashokadigital.net/upload/logo/1732168750_WhatsApp%20Image%202024-11-21%20at%2011.05.55%20AM%20(1).jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7to9660',
    title: 'Max TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamer2.nexgen.bz/14-MAX/index.m3u8',
    cover: 'https://i.imgur.com/TF4snV6.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-p26jyem',
    title: 'MBC America (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-us-east-prod-ingest-infra-dacast-com.akamaized.net/624ff8f9-db18-da92-4d42-896fa2ff3eb3/source/index.m3u8',
    cover: 'https://i.imgur.com/RRc23ra.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rtuefs6',
    title: 'MBC FM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dbbv9umqcd7cs.cloudfront.net/out/v1/db15b75c3cc0400c91961468d6a232ac/index.m3u8',
    cover: 'https://i.imgur.com/lF8UxvR.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mggabhx',
    title: 'MBC Mood (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-mood/78367bf48ccdba501d0d014a10c21031/index.m3u8',
    cover: 'https://shahid.mbc.net/mediaObject/c2b6a882-458b-446e-b0fe-f97f7992149a?height=auto&width=144&croppingPoint=&version=1&type=png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-o9kxbxi',
    title: 'MBC Mood (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://shd-gcp-live.edgenextcdn.net/live/bitmovin-wanasah/13e82ea6232fa647c43b26e8a41f173d/index.m3u8',
    cover: 'https://shahid.mbc.net/mediaObject/c2b6a882-458b-446e-b0fe-f97f7992149a?height=auto&width=144&croppingPoint=&version=1&type=png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-z798jit',
    title: 'MCN6 Music Channel (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d18fcxaqfnwjhj.cloudfront.net/CDN_Ingest/MCN6_MUSIC.smil/Playlist.m3u8',
    cover: 'https://i.imgur.com/j6IiysJ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-n39aupg',
    title: 'MegaBox (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hdbox.chunklistv.com/live?stream=megabox',
    cover: 'https://i.imgur.com/JqaW7Ei.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vbj2w6o',
    title: 'Melody (288p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/radiokaraoke.m3u8',
    cover: 'https://i.imgur.com/9GVyQ6x.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4tc9n9s',
    title: 'Melody FM Jordan (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn3.wowza.com/1/OVRrOWxXUEswS2Yv/eGVxSWZy/hls/live/playlist.m3u8',
    cover: 'https://i.imgur.com/J8omcNz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8hd5b7w',
    title: 'Memorias del Corazon (480p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.xtrematv.com:3401/live/grupomemoriaslive.m3u8',
    cover: 'https://i.imgur.com/sVLDzzM.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-atl8c7a',
    title: 'Memorias FM Pop Latino (480p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.xtrematv.com:3891/live/memoriaspoplatinolive.m3u8',
    cover: 'https://imgs1.e-droid.net/srv/imgs/seccs/34751581_ico.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-imxmii8',
    title: 'Memorias TV Classic (480p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.xtrematv.com:3576/live/memoriasclassiclive.m3u8',
    cover: 'https://i.imgur.com/tLTQLnv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bb6aapl',
    title: 'Memorias TV Tropical (480p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.xtrematv.com:3361/live/memoriastropicallive.m3u8',
    cover: 'https://i.imgur.com/Y9GFDcV.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mnqrvyl',
    title: 'Metaleitor TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vs20.live.opencaster.com/metaleitortv_423d3342/index.m3u8',
    cover: 'https://new.opencaster.com/uploads/logos/logo_14_1752798826.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xc5zqmh',
    title: 'Metropoli Medios TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8214/index.m3u8',
    cover: 'https://i.imgur.com/yID5T2S.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zs3y079',
    title: 'Mezzo (1080p) [Geo-Blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://viamotionhsi.netplus.ch/live/eds/mezzo/browser-HLS8/mezzo.m3u8',
    cover: 'https://i.imgur.com/auNdGeW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-l1nosn0',
    title: 'Mezzo Live',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://test.946985.filegear-sg.me/proxy/749755700e4ed9c6',
    cover: 'https://i.imgur.com/H9ytKPN.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-df38scv',
    title: 'mfm (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hms.pfs.gdn/hms/v1/broadcast/hlmvmp2hfriode891/playlist.m3u8',
    cover: 'https://www.mtv.com.lb/images/header/mfm-logo.svg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bjdshvm',
    title: 'Mh 1 Music (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumt04.tangotv.in/MHONE/index.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143539_ld_h15_aa.png?lock=720x540',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ryu5vrp',
    title: 'Mi Gente TV (720p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://byecableiptvnew3.ddns.net/ENVIVOMIGENTE/video.m3u8',
    cover: 'https://i.imgur.com/CSbmQlu.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-p81bqfk',
    title: 'Miel TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://7.innovatestream.pe:19360/mieltv/mieltv.m3u8',
    cover: 'https://i.imgur.com/dPSFrCs.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kftyd5m',
    title: 'MNM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live-radio-cf-vrt.akamaized.net/groupa/live/bac277a1-306d-44a0-8e2e-e5b9c07fa270/live.isml/.m3u8',
    cover: 'https://i.imgur.com/L4cD18H.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-z2bdxnp',
    title: 'Mohammed Abdo (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d2ow8h651gs7dx.cloudfront.net/out/v1/371fb663da604e659a2fb99bf89d92d4/index.m3u8',
    cover: 'https://assets.mbcmood.com/channels/1720184012Mohammed%20Abdo%20banner.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6ckeflv',
    title: 'Mooz Dance',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtmp.digitalbroadcast.ro/moozdance/moozdance.m3u8',
    cover: 'https://i.imgur.com/aX70RD2.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-04ys4sb',
    title: 'Mooz Hits',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtmp.digitalbroadcast.ro/moozhits/moozhits.m3u8',
    cover: 'https://i.imgur.com/GwATd3Y.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-j3r6fz6',
    title: 'Mooz Ro!',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtmp.digitalbroadcast.ro/moozro/moozro.m3u8',
    cover: 'https://i.imgur.com/Ft24x5T.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-t532j86',
    title: 'Mosaique FM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://webcam.mosaiquefm.net/mosatv/_definst_/studio/playlist.m3u8?DVR',
    cover: 'https://i.imgur.com/GDUykah.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ltn6ypc',
    title: 'Mouv\' TV (288p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/mouv.m3u8',
    cover: 'https://i.imgur.com/64nzKEu.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8zxa69i',
    title: 'Music Box Polska [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vs2133.vcdn.biz/0f0f85e2ea3607b5c396ef68d55c3168_megogo/live/hls/b/4000/u_sid/0/o/156751011/rsid/062147ff-ed0c-4d9c-a131-2bf42026e640/u_uid/0/u_vod/1/u_device/embed_all/u_devicekey/_embed_web/lip/57.128.235.172*asn/type.live/playlist.m3u8',
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyN14NgigtUnImvVp9DqgbKY5c9Nsl-EqLkPX7PzYcl924yK77GycmSj2E&s=10',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0gfq5o0',
    title: 'Music India (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-2.pishow.tv/live/226/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143563_ld_h15_aa.png?lock=720x540',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-yqqhzuf',
    title: 'Music Information Channel (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mic.siar.us/mic/live/mic.m3u8',
    cover: 'https://i.imgur.com/OUPGCWG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-75jud4m',
    title: 'Music TV Granada (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8032/index.m3u8',
    cover: 'https://i.ibb.co/Swd9NP7n/music-tv-granada.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-i3y0dl7',
    title: 'MusicTop (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream-gtlc.telecentro.net.ar/hls/musictophls/0/playlist.m3u8',
    cover: 'https://cdn.mitvstatic.com/channels/ar_musictop_m.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5v156xv',
    title: 'Muzangala TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5cf4a2c2512a2.streamlock.net/tvmuzangala/tvmuzangala/playlist.m3u8',
    cover: 'https://i.imgur.com/fBeaJoS.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rvh9wh0',
    title: 'Muzvar (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn15.live-tv.cloud/ua_infinitas_tv/muzvar-abr/playlist.m3u8',
    cover: 'https://i.imgur.com/Klu5k9U.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bcb1s73',
    title: 'MuzzOne',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streams.adapto.kz/hls/live/muzzone/main_stream.m3u8',
    cover: 'https://i.imgur.com/nHVABXh.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-yyuwlfi',
    title: 'My Gospel TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamtv.cmediahosthosting.net:3046/live/mygospeltvlive.m3u8',
    cover: 'https://mygospeltv.fr/wp-content/uploads/2022/05/MY-GODPEL-TV-e1652783900988.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vthjg68',
    title: 'Nande Portetepe TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.hostingcaaguazu.com:19360/nandeportetepe/nandeportetepe.m3u8',
    cover: 'https://i.imgur.com/3taT6JK.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-z694al8',
    title: 'Navahang TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls.navahang.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/YteKXJy.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-t5zpyz9',
    title: 'NEW KPOP (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ads.its-newid.net/api/manifest.m3u8?tp=samsung_tvplus&channel_id=newid_086&ads.service_id=GB17000088V',
    cover: 'https://i.imgur.com/B7ILXMc.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4x9mxnh',
    title: 'Next HD (480p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.enhdtv.com:19360/nexthd/nexthd.m3u8',
    cover: 'https://i.imgur.com/c2rF3SS.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ov6f6hd',
    title: 'Nidae AlIslam Radio (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.kwikmotion.com/sbrksanedaradiolive/srpksanedaradio/playlist.m3u8',
    cover: 'https://aloula.faulio.com/storage/mediagallery/0f/c5/fullhd_5da380cdfc304fd7d4672a83aeb6c62bc1d3d3e8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-76a6ny0',
    title: 'NogoumFMTV (672p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://nogoumtv.nrpstream.com/hls/stream.m3u8',
    cover: 'https://i.imgur.com/krp3kgv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-syhu3ts',
    title: 'Noroc TV (576p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.noroc.tv/noroc/noroc.m3u8',
    cover: 'https://i.imgur.com/XvYqpqG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-95j1fji',
    title: 'NOW 70s (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lightning-now70s-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-lightning-now70s-rakuten/CDN/playlist.m3u8',
    cover: 'https://i.imgur.com/qiCCX5X.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ehjfqfd',
    title: 'Now 70s (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lightningnow70-samsungau.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/qiCCX5X.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-x50tfox',
    title: 'NOW 80s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lightning-now80s-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-lightning-now80s-rakuten/CDN/playlist.m3u8',
    cover: 'https://i.imgur.com/YyPnMeB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-s9j4lvq',
    title: 'Now 80s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lightningnow80-samsungau.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/YyPnMeB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qc7a4sd',
    title: 'NOW 90s00s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg01076-amg01076c19-rakuten-gb-8653.playouts.now.amagi.tv/playlist/amg01076-lightning-now90s00s-rakutengb/playlist.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-o04n3ad',
    title: 'NOW Rock (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lightning-now90s-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-lightning-now90s-rakuten/CDN/playlist.m3u8',
    cover: 'https://i.imgur.com/GuM4GnX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5xngy4f',
    title: 'NOW Rock (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lightning-now90s-samsungnz.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/GuM4GnX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ilmf7kr',
    title: 'Now TV 102.3FM Edmonton (CKNO-FM) (616p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://videostream.jpbgdigital.com/NOWTV.m3u8',
    cover: 'https://i.imgur.com/sF2g7KE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ie4dvkv',
    title: 'NPC Rádio e TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stmv5.samcast.com.br/nasciparacantartv/nasciparacantartv/playlist.m3u8',
    cover: 'https://i.imgur.com/mw1lYWE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-443z6cz',
    title: 'NRJ Hits',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://test.946985.filegear-sg.me/proxy/a23981548880f405',
    cover: 'https://i.imgur.com/2xDVwOh.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-acf8x2q',
    title: 'Nueva Vida TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.nuevavidafm.net:3937/live/nuevavidalive.m3u8',
    cover: 'https://i.ibb.co/3mbZWyN/nav-Bar-title-Image-iphone6plus.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ift5a09',
    title: 'Number 1 Ask (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e18f9cea15_1/playlist.m3u8',
    cover: 'https://i.imgur.com/slwbux7.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8fbcjwt',
    title: 'Number 1 Damar (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e198784bdc_1/playlist.m3u8',
    cover: 'https://i.imgur.com/rYtbAGZ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-njw8f0y',
    title: 'Number 1 Dance (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e2aa8acf44_1/playlist.m3u8',
    cover: 'https://i.imgur.com/ZM4PSyq.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7y1u21w',
    title: 'Number 1 Türk (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mn-nl.mncdn.com/blutv_nr1turk2/live.m3u8',
    cover: 'https://i.imgur.com/18zjk3q.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qfwf1qc',
    title: 'Number 1 TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/broadcast_5c9e17cd59e8b.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/02cDIBi.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9uhprsh',
    title: 'Óčko (540p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ocko-live-dash.ssl.cdn.cra.cz/cra_live2/ocko.stream.1.smil/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/%C3%93%C4%8Dko_logo_2012.png/960px-%C3%93%C4%8Dko_logo_2012.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-75oc4ah',
    title: 'Óčko Expres (540p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ocko-live.ssl.cdn.cra.cz/channels/ocko_expres/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/%C3%93%C4%8Dko_Expres_logo.png/960px-%C3%93%C4%8Dko_Expres_logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-evlo4l3',
    title: 'Óčko Gold (540p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ocko-live.ssl.cdn.cra.cz/channels/ocko_gold/playlist.m3u8',
    cover: 'https://i.imgur.com/nrWNyLc.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-84z1xb6',
    title: 'ON FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5ce9406b73c33.streamlock.net/ONFM/livestream/playlist.m3u8',
    cover: 'https://onfmwordpressfiles.ams3.digitaloceanspaces.com/wp-content/uploads/2023/03/17130121/logo-on-fm.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-pgi1nks',
    title: 'Onda 15 TV (224p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8034/index.m3u8',
    cover: 'https://i.imgur.com/mUrZz9O.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-v8zyb2a',
    title: 'Onda Valencia (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8116/index.m3u8',
    cover: 'https://i.imgur.com/6HxLUQd.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-btbud4t',
    title: 'Ondambiental TV (360p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stmv4.voxtvhd.com.br/ondastereo/ondastereo/playlist.m3u8',
    cover: 'https://i.imgur.com/u5804Au.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-asayr18',
    title: 'ONE1 Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdne.folxplay.tv/folx-trz/streams/ch-3/master.m3u8',
    cover: 'https://i.imgur.com/dLgoKJ0.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9jkb2h6',
    title: 'One Adria (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdne.folxplay.tv/folx-trz/streams/ch-6/master.m3u8',
    cover: 'https://i.imgur.com/NYkMamU.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-f3sp5tv',
    title: 'One TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hms.pfs.gdn/v1/broadcast/one/playlist.m3u8',
    cover: 'https://i.imgur.com/O4DuR9G.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ja44j77',
    title: 'OneFM (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hms.pfs.gdn/v1/broadcast/onefm/playlist.m3u8',
    cover: 'https://i.ibb.co/Vp2G9wTz/onefmlb.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qd1xxfj',
    title: 'Online TV Nusantara (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5bf7b725107e5.streamlock.net/onlinetvnusantara/onlinetvnusantara/playlist.m3u8',
    cover: 'https://i.imgur.com/E9CCIpP.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-goe9o4n',
    title: 'Orange Bangla TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-4.pishow.tv/live/1499/master.m3u8',
    cover: 'https://i.imgur.com/wjSaHj5.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7drivc9',
    title: 'Orbita Chile TV (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://orbitachiletv.org/hls/0/stream.m3u8',
    cover: 'https://i.imgur.com/gbNh79Z.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-3gy4b62',
    title: 'Oxigeno TV (360p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vcp.myplaytv.com/oxigenotv/oxigenotv/playlist.m3u8',
    cover: 'https://i.imgur.com/n3PweBQ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vg55vjs',
    title: 'P2M TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vdo2.pro-fhi.net:3207/stream/play.m3u8',
    cover: 'https://i.imgur.com/TrecSeG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fvaz77g',
    title: 'Panik TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livetv.streams.ovh:1936/paniktv/paniktv/playlist.m3u8',
    cover: 'https://i.imgur.com/13C3CPr.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-i57tzt4',
    title: 'Panorama FM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d6izdil55uftn.cloudfront.net/out/v1/0a06d1d6377c47edbd48721ed724bd08/index.m3u8',
    cover: 'https://i.imgur.com/JkDD3bK.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0e1kbfn',
    title: 'Parranda Vallenata (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://backupmaxmedia.hvmultiplay.com/hls/stream3/parrandavallenata.m3u8',
    cover: 'https://i.imgur.com/BzBX7Qx.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-yvnr4ow',
    title: 'Peppers TV (751p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-2.pishow.tv/live/1383/master.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Peppers_TV.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-w6ppqyy',
    title: 'Pequeradio (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://canadaremar2.todostreaming.es/live/peque-pequetv.m3u8',
    cover: 'https://i.imgur.com/BNqZwxS.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1hetagl',
    title: 'Persiana Folk',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://sonhls.persiana.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0ea5glw',
    title: 'Persiana Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://musichls.persiana.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vcxcr23',
    title: 'Persiana Nostalgia',
    author: 'Ретро / Класика',
    type: 'video',
    url: 'https://noshls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/SWO9CKA.png',
    description: '24/7 Ретро / Класика Stream',
    category: 'Ретро / Класика'
  },
  {
    id: 'vid-1olpr58',
    title: 'Persiana Vibe',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://raphls.persiana.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2m2p2fy',
    title: 'PJ Digital Radio TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vdo1.panelstreaming.live:3363/hybrid/play.m3u8',
    cover: 'https://i.imgur.com/m92oDuB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-sybp5u0',
    title: 'Planet 100.9 FM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamlov.alsolnet.com/planet1009fm/live/playlist.m3u8',
    cover: 'https://i.imgur.com/8ZIBs8l.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7z6acv0',
    title: 'PMC',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://pmchls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/AbrHI7K.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3go0yg6',
    title: 'PMC Royale (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://pmcrohls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-quwg2ka',
    title: 'POP World TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://janus.xpbroadcasting.com:8443/hls/popworld.m3u8',
    cover: 'https://i.imgur.com/LQB6G3s.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-okfcebp',
    title: 'Power 101.7 FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vcp11.myplaytv.com/powerfm/powerfm/playlist.m3u8',
    cover: 'https://i.imgur.com/bkQrXjB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-jxkq0v7',
    title: 'Power Dance (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livetv.powerapp.com.tr/dance/dance.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/QpPteBO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lfhgg4d',
    title: 'Power Hit Radio (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdnlb.tvplayhome.lt/live/eds/PWR_LTU_Live/GO3_LIVE_HLS/PWR_LTU_Live.m3u8?cdntoken=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDczNDU2NjEsInBhdGgiOiIvbGl2ZS9lZHMvUFdSX0xUVV9MaXZlL0dPM19MSVZFX0hMUy8iLCJzaXAiOiI3Mi4xMS4xNTcuMTEyIiwiZGV2aWNlX2lkIjoiMCIsInNlc3Npb25faWQiOiIwIiwiY2xpZW50X2lkIjoiMCJ9.oHc5wUgwNPQ-4P7wJy_WvWQh0muFg9Lprhc4STS3cUHi0FI4tAKGdZOOeE-dOhVBHKFUYETmoXSMrrVHOeLC3g',
    cover: 'https://i.imgur.com/GOlQbfC.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ktdc9zx',
    title: 'Power Love (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livetv.powerapp.com.tr/plove/love.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/0RzUswR.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qetr6yz',
    title: 'Power Türk Akustik (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livetv.powerapp.com.tr/pturkakustik/akustik.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/driabBO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ck3gc11',
    title: 'Power Türk Slow (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livetv.powerapp.com.tr/pturkslow/slow.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/tQSoQXW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-b5r1dx6',
    title: 'Power Türk Taptaze (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livetv.powerapp.com.tr/pturktaptaze/taptaze.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/a5nW3HU.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-pzeiubn',
    title: 'Prambors',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://indihuy.streamized.net/atm/DASH/pramborstv/manifest.mpd',
    cover: 'https://images.maxstream.tv/sites/default/files/entry/0_e59etfmm/landscape_carousel_xxhdpi.webp',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vn331ut',
    title: 'Prattel TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vs20.live.opencaster.com/prattelpe_a2b8d350/index.m3u8',
    cover: 'https://new.opencaster.com/uploads/logos/logo_244_1761928734.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-27irpf8',
    title: 'PRIDEtv LATAM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://backend.energeek.cl/webtv/pridetvweb/index.m3u8?token=ZZDemoIPTVGH',
    cover: 'https://neotv.cl/img/pridetv-512.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-t08wtyb',
    title: 'PTC Chakde (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/449/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PTC_CHAKDE/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-s5tpqth',
    title: 'PTC Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d2lk5u59tns74c.cloudfront.net/out/v1/f913cf893c594f73b114216e74a2efbc/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PTC_MUSIC/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gejahqf',
    title: 'Public Music (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-3.pishow.tv/live/441/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PUBLIC_MUSIC/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ke87vm6',
    title: 'Punjabi Hits (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.ottlive.co.in/punjabihits/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PUNJABI_HITS/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zggrgry',
    title: 'Q-Music (Belgium) (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live-video.dpgmedia.net/e087512ad0c32643/out/v1/82d59bbe343b4d0896f829c59da82dc0/index.m3u8',
    cover: 'https://i.imgur.com/VX5e9Xt.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fh8ij45',
    title: 'Qello Concerts by Stingray (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883052',
    cover: 'https://i.imgur.com/IRyFTWq.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ezgcq9z',
    title: 'Qello Concerts by Stingray (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/qello-qello001-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/IRyFTWq.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-o4goe6v',
    title: 'Qmusic (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.qmusic.nl/qmusic/videohls.m3u8',
    cover: 'https://i.imgur.com/fMTuqDu.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-k1m3nys',
    title: 'Qwest TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://qwestjazz-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-qwestjazz-rakuten/CDN/master.m3u8',
    cover: 'https://i.imgur.com/DjgNNHK.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kgwcvxj',
    title: 'Qwest TV Jazz & Beyond (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://samsungau-qwestjazz-samsungtv-zw2jc.amagi.tv/playlist/samsungau-qwestjazz-samsungtv/playlist.m3u8',
    cover: 'https://i.imgur.com/89yWH5L.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-q7p4rce',
    title: 'Rabeh Saqer (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx004/playlist.m3u8',
    cover: 'https://shahid.mbc.net/mediaObject/b98b0635-c8ed-4a7c-9efa-5856e278f54b?type=png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-un1xr5e',
    title: 'Radio 21 TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.creacast.com/radio21/smil:radio21.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/u8OhwI1.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-859pr1y',
    title: 'Radio Alegria 98.5 FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.compuwebecuador.com:3880/stream/play.m3u8',
    cover: 'https://i.imgur.com/N00aS3x.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4fz68qh',
    title: 'Radio Bonita 106.7 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8154/index.m3u8',
    cover: 'https://i.imgur.com/IvZtqyz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hva4z0t',
    title: 'Radio Capital TiVu (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S35394734/Z6U2wGoDYANk/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/it/3/38/Radio_Capital_logo_%282020%29.svg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-herzssq',
    title: 'Radio Carnaval TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8116/index.m3u8',
    cover: 'https://i.imgur.com/cdpbkSo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dvem9xt',
    title: 'Radio Ciudad 98.9 FM TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.wilohosting.com:19360/radiociudadtv/radiociudadtv.m3u8',
    cover: 'https://i.imgur.com/LaSLZwR.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ze6pw42',
    title: 'Radio Conexion Web TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tuvideoonline.com.ar:3391/live/radioconexionlive.m3u8',
    cover: 'https://i.imgur.com/pXS38zo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6lfrtan',
    title: 'Radio Contact (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://contact-live-hls.akamaized.net/hls/live/2038650/CONTACT-Live-HLS/master.m3u8',
    cover: 'https://i.imgur.com/32mmGvB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ult2r4r',
    title: 'Radio Cuenca Estéreo (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8074/index.m3u8',
    cover: 'https://i.imgur.com/qZzSOeU.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ecx1i93',
    title: 'RADIO DISCOunt TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://585b674743bbb.streamlock.net/9030/9030/playlist.m3u8',
    cover: 'https://i.imgur.com/ScNYMmx.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vio7t4r',
    title: 'Radio Freccia TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S3160845/0tuSetc8UFkF/playlist_video.m3u8',
    cover: 'https://i.imgur.com/RxeRlar.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-o4cq86z',
    title: 'Radio Fx Net (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamlov.alsolnet.com/radiofxnet/live/playlist.m3u8',
    cover: 'https://radiofxnet.ro/wp-content/uploads/2021/03/cropped-cropped-cropped-cropped-Radio_FX_Net_logo-1-1.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-e6rfmrh',
    title: 'Radio Hit FM TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://peer2.tdiradio.com/static/streaming-playlists/hls/bab99862-ec1c-474f-9a02-4f8c8677d565/0.m3u8',
    cover: 'https://i.imgur.com/gP2OT4S.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2205bps',
    title: 'Radio Ideal 104.7 FM (La Esperanza) (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://www.idealfm104-7.com/hls/0/stream.m3u8',
    cover: 'https://i.imgur.com/chPfoOs.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2mvikr4',
    title: 'Radio Imagen 105.1 FM (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streaming.imagenfm105-1.com/hls/stream.m3u8',
    cover: 'https://i.ibb.co/C9zjz9p/343159606-190989583743350-3489987129696505785-n.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-plzgtp4',
    title: 'Radio Italia Trend (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg00745-radioitailaspa-radioitalia-rakuten-sucsc.amagi.tv/hls/amagi_hls_data_rakutenAA-radioitalia-rakuten/CDN/master.m3u8',
    cover: 'https://i.imgur.com/HNrKqGM.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-tf8mt9e',
    title: 'Radio Javan TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rjtvhls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/a1zuW2C.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bp8zske',
    title: 'Radio JND (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://radiojnd.cdn.hostin.cc/radiojnd/playlist.m3u8',
    cover: 'https://i.imgur.com/nyVlZeL.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-g0xaapt',
    title: 'Radio Karaoke (288p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/radiokaraoke-2.m3u8',
    cover: 'https://i.imgur.com/9uRggjD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ybew7gg',
    title: 'Radio Karolina TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://peer2.tdiradio.com/static/streaming-playlists/hls/4207de1d-52e8-4591-ad9e-218069b864d1/0.m3u8',
    cover: 'https://i.imgur.com/g2HpLX1.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-498kii8',
    title: 'Radio Lola (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://peer2.tdiradio.com/static/streaming-playlists/hls/7c3ea8d3-49dc-4e1b-8b1e-dc6fab71f5cf/0.m3u8',
    cover: 'https://i.imgur.com/41eE8fl.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ys4qhyo',
    title: 'Radio Master (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://videoserver.tmcreativos.com:19360/radiomaster/radiomaster.m3u8',
    cover: 'https://i.imgur.com/AUoxyzP.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-j8s2by8',
    title: 'Radio Monumental TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloud37.ecuatel.com/monumentaltv/live/manifest.m3u8',
    cover: 'https://i.imgur.com/a97MaV2.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-od44o1y',
    title: 'Radio Piter Pan TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://58d921499d3d3.streamlock.net/RadioPiterpanTV/livestream/playlist.m3u8',
    cover: 'https://i.imgur.com/hbqVWV4.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-oqa194u',
    title: 'Radio RAM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://1888165924.rsc.cdn77.org/live/RadioRAM/playlist.m3u8',
    cover: 'https://i.ibb.co/LXbchP5q/logo-1.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gnjvvgt',
    title: 'Radio Realpolitik (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vivo.solumedia.com:19360/realpolitik/realpolitik.m3u8',
    cover: 'https://i.imgur.com/L9KCdTX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hr9y6gt',
    title: 'Radio San Cristobal 88.7 FM',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.wilohosting.com:19360/sancristobalfm/sancristobalfm.m3u8',
    cover: 'https://i.imgur.com/zaJhBdj.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-29l2oaa',
    title: 'Radio Stad den Haag (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rsdh.cloud-streams.com/rsdh/rsdh/playlist.m3u8',
    cover: 'https://i.imgur.com/ANK36EQ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ttj2cr4',
    title: 'Radio Suyai TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://signal.suyaitv.cl/live/26/playlist.m3u8?password=9PcdCnFxUe&username=ZZDemoIPTVGH',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2ykcxlh',
    title: 'Radio SWH TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://00ff00.latnet.media/edge/swh_tv.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/cFrNsXn.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zhn07j5',
    title: 'Radio Télé Hit (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59d39900ebfb8.streamlock.net/RadioTelehit/RadioTelehit/playlist.m3u8',
    cover: 'https://i.ibb.co/Gt2QDgf/cropped-transparent2-103x70.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-keb5uta',
    title: 'Radio Télé Kajou (480p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59d39900ebfb8.streamlock.net/RadioTelekAJOU/RadioTelekAJOU/playlist.m3u8',
    cover: 'https://i.ibb.co/1MhvJ3B/logork.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2gbtt4w',
    title: 'Radio Tropical Tarapoto (480p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://videoserver.tmcreativos.com:19360/raditropical/raditropical.m3u8',
    cover: 'https://i.imgur.com/TBPVOBI.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5kgwk9y',
    title: 'Radio TV Sal One (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lon.rtsp.me/r3ZnG6WN2HIRxPARhAirIQ/1713628621/hls/9QdykDAy.m3u8',
    cover: 'https://i.imgur.com/pCz7ifY.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-u708om9',
    title: 'Radio TV Tendencias (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://s1.tvdatta.com:3950/multi_web/play.m3u8',
    cover: 'https://i.imgur.com/tsdrrV9.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7agdl8t',
    title: 'Radio U TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://1826200335.rsc.cdn77.org/1826200335/index.m3u8',
    cover: 'https://i.imgur.com/HjZpC1V.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9wlozeo',
    title: 'Radio Weser TV Bremen (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5857499ee635b.streamlock.net/radiowesertv-live/_definst_/mp4:livestreamTV/playlist.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-35n6lem',
    title: 'Radio Zeta TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S9346184/XEx1LqlYbNic/playlist_video.m3u8',
    cover: 'https://i.imgur.com/K2xLMin.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9j6319t',
    title: 'RadioNL TV (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.radionl.tv/radionltv/radionltv/playlist.m3u8',
    cover: 'https://i.imgur.com/TVaMJYB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7plmgcy',
    title: 'Raj Musix Kannada (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumt01.tangotv.in/RAJMUSIXKANDA/index.m3u8',
    cover: 'https://i.imgur.com/z7fhhyX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-de9dkeq',
    title: 'Raj Musix Malayalam (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumt04.tangotv.in/RAJMUSIXMALAYALAM/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_RAJ_MUSIX_MALAYALAM/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ip1fzjj',
    title: 'Raj Musix Tamil (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livestream.rajtv.tv/hlslive/Admin/px08241087/live/Raj_Musix/master_1.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_RAJ_MUSIX_TAMIL/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-b1kcg5q',
    title: 'Raj Musix Telugu (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/1213/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_RAJ_MUSIX_TELUGU/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-30mzdgu',
    title: 'Rararadio (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://58c04fb1d143f.streamlock.net/rararadio/rararadio/playlist.m3u8',
    cover: 'https://i.imgur.com/vTpfxUG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bwmaqjb',
    title: 'Rashid AlMajed (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dphwv2ufgnfsq.cloudfront.net/out/v1/59cd80dfe93a479eb8b4d79bc6f225ca/index.m3u8',
    cover: 'https://assets.mbcmood.com/channels/1720177618Rashid%20AlMajed.webp',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1k8kgo6',
    title: 'RC Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://view.rcserver.in/tmp_hls2/stream/index.m3u8',
    cover: 'https://rctv.in/logo_s.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-w60q99d',
    title: 'RedMusic (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://fr.crystalweb.net:1936/redmusic/redmusic/playlist.m3u8',
    cover: 'https://i.ibb.co/1Lk8P1x/1-150x150.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fqhy60s',
    title: 'Retro Music Television (360p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.mediawork.cz/retrotv/retrotvHQ1/playlist.m3u8',
    cover: 'https://i.imgur.com/pyOjdZs.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-im0cl0s',
    title: 'Retro Plus 2 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tls-cl.cdnz.cl/retroplustvuno/live/playlist.m3u8',
    cover: 'https://i.imgur.com/5G5kian.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4nyc9el',
    title: 'Reyali (614p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8090/index.m3u8',
    cover: 'https://i.imgur.com/YmFjnsF.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-e1esxg3',
    title: 'RFPtv (360p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video03.logicahost.com.br/rfptv/rfptv/playlist.m3u8',
    cover: 'https://i.imgur.com/I60nQuR.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-v2prs5r',
    title: 'RHT Guadeloupe (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://edge12.vedge.infomaniak.com/livecast/ik:livehautetension/manifest.m3u8',
    cover: 'https://i.imgur.com/hQ0Q6nE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qgpg01a',
    title: 'Rock TV (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.nasatv.com.mk/rocktv/hls/rocktv_live.m3u8',
    cover: 'https://i.imgur.com/Y9miDQo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-95rqv0s',
    title: 'Rock TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv.broadcasting.ro/rocktv/85c83a80-4f71-4f2d-a8d6-43f676896bcb.m3u8',
    cover: 'https://i.imgur.com/VB88A5V.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-45519jz',
    title: 'Rotana Khalijia (1080p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rotana.hibridcdn.net/rotananet/khaleejiya_net-7Y83PP5adWixDF93/playlist.m3u8',
    cover: 'https://i.imgur.com/6HMluzv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ae2dnio',
    title: 'Rotana Music (1080p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rotana.hibridcdn.net/rotananet/music_net-7Y83PP5adWixDF93/playlist.m3u8',
    cover: 'https://i.imgur.com/2zFQbQi.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-sapwewz',
    title: 'RQP Paraguay (1080i)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://alba-py-rqp-rqp.stream.mediatiquestream.com/index.m3u8',
    cover: 'https://i.imgur.com/0cUc4Nt.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qgdt87m',
    title: 'RTL2',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/rtl2.m3u8',
    cover: 'https://i.imgur.com/deC4z34.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hf4lq86',
    title: 'RTL 102.5 Best (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S76960628/OEPHRUIctA0M/playlist_video.m3u8',
    cover: 'https://i.imgur.com/9PNlbaq.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nromgpj',
    title: 'RTL 102.5 Bro&Sis (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S75007890/MUGHuxc9dQ3b/playlist_video.m3u8',
    cover: 'https://i.imgur.com/EWbK4XZ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xzfaqqd',
    title: 'RTL 102.5 Caliente (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S8448465/zTYa1Z5Op9ue/playlist_video.m3u8',
    cover: 'https://i.imgur.com/P0zsi6I.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-h2hzghf',
    title: 'RTL 102.5 Disco (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S51100361/0Fb4R3k82b5Z/playlist_video.m3u8',
    cover: 'https://i.imgur.com/JA1OPrz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-o4rdbhm',
    title: 'RTL 102.5 Napulè (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S27134503/0f9AhuwKlhnZ/playlist_video.m3u8',
    cover: 'https://i.imgur.com/HFPw1YW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-b2s7u32',
    title: 'RTL 102.5 Traffic (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S38122967/2lyQRIAAGgRR/playlist_video.m3u8',
    cover: 'https://i.imgur.com/EBftMcB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-z08gjlm',
    title: 'RTL 102.5 TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S97044836/tbbP8T1ZRPBL/playlist_video.m3u8',
    cover: 'https://i.imgur.com/75qUdR7.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-e596yh5',
    title: 'RTL Gold (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.rtl.lu/data/live/tele/rtlgold/playlist.m3u8',
    cover: 'https://i.imgur.com/LzHQoUv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-jg64oc9',
    title: 'RTL Today Radio (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.rtl.lu/data/live/tele/rtltodayradio/playlist.m3u8',
    cover: 'https://i.imgur.com/O1c6wpt.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ur5cg00',
    title: 'RTV Vida (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vidartv2.todostreaming.es/live/radiovida-emisiontvhd.m3u8',
    cover: 'https://i.imgur.com/EqUfEAh.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-eeu3ih6',
    title: 'RU.TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://bl.rutube.ru/livestream/b1eb8e90d7e636677b3eb73b4fcbb717/index.m3u8?s=d-E-bxKy2v3EEJ94RQX9CA&e=2069285076&scheme=https',
    cover: 'https://i.imgur.com/Z7HUU7V.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4pbatb6',
    title: 'Salsa Gorda Television (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live20.bozztv.com/akamaissh101/ssh101/qMUAZEy/playlist.m3u8',
    cover: 'https://i.imgur.com/3IhYd7G.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0uk1ds3',
    title: 'Salto Brasa Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://salto-streams.nl/hls/sotv1.m3u8',
    cover: 'https://i.vimeocdn.com/portrait/31947989_640x640',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nktu8xh',
    title: 'Sana Plus (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumbai-edge.smartplaytv.in/SanaPlusHD/index.m3u8',
    cover: 'https://i.imgur.com/N6tKUZv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ekuhjdm',
    title: 'Sangeet Bangla (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-4.pishow.tv/live/1143/master.m3u8',
    cover: 'https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/transparentImages/Sangeet%20Bangla.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8avt16e',
    title: 'Sangeet Marathi (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-3.pishow.tv/live/1229/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SANGEET_MARATHI/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-i6pj4r5',
    title: 'Siembra TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamunoapp.com:3809/live/siembratvlive.m3u8',
    cover: 'https://www.vivalivetv.com/public/files/shows/0/1/3226-294x165-FFFFFF.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-t91gx24',
    title: 'Sky Folk TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu.live.skyfolk.mk/live.m3u8',
    cover: 'https://i.imgur.com/ya5xpUL.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-a64hfgc',
    title: 'Slager Muzika',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream-23.mazana.tv/slagrmuzika.m3u8s',
    cover: 'https://i.imgur.com/hKdXwrW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-84on5r6',
    title: 'Slager Original',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream-13.mazana.tv/slagroriginal.m3u8s',
    cover: 'https://i.imgur.com/0YjeWcq.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-l8ygxul',
    title: 'Sol Música (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d2glyu450vvghm.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-21u4g5cjglv02/sm.m3u8',
    cover: 'https://i.imgur.com/rbJrmPw.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6r2rfpb',
    title: 'SoloBáilalo (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5ff3d9babae13.streamlock.net/8000/8000/playlist.m3u8',
    cover: 'https://i.imgur.com/SImJE7c.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-olmd1hu',
    title: 'SONGTV Russia',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://songtv.hls.iptvdc.com/web-russia/playlist.m3u8',
    cover: 'https://i.imgur.com/nM7LbmV.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-sg3l1z5',
    title: 'SOY Plancha TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59ef525c24caa.streamlock.net/vmtv/soyplancha/playlist.m3u8',
    cover: 'https://i.ibb.co/P4kpMgk/1689344714578.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vgdn58a',
    title: 'SpektraTV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8026/tracks-v1a1/index.m3u8',
    cover: 'https://i.imgur.com/0zCt8e4.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0ghirr5',
    title: 'Spirit TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdnlive.myspirit.tv/LS-ATL-43240-2/index.m3u8',
    cover: 'https://i.imgur.com/yCp6vXz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-yqaktmh',
    title: 'Star 101 FM (KNUT Guam) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live2.tensila.com/knut-v-1.choice/hls/master.m3u8',
    cover: 'https://star101.gu/images/fb_icon.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-oe64459',
    title: 'Star Plus Music (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.muzickatv.mk/live/StarMusic2.m3u8',
    cover: 'https://i.imgur.com/01yz22a.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-73uuobf',
    title: 'Steelbird Music (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn2.in/SteelbirdMusicTVhls/live.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Steelbird_Music.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qmgou9d',
    title: 'Stingray Classic Rock (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-101ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/FBgu8yB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-cc09l55',
    title: 'Stingray Classica (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/classica-cla008-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/nh1k5RC.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-32kofg4',
    title: 'Stingray CMusic (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/cmusic-cme004-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/3UppN5P.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-b7wr0m1',
    title: 'Stingray DJAZZ (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/djazz-djaads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Stingray_Djazz.png/960px-Stingray_Djazz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xkqle05',
    title: 'Stingray Easy Listening (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-137ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Stingray_Music_logo.svg/960px-Stingray_Music_logo.svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qgzdtp5',
    title: 'Stingray Euro Hits (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-214ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/FyhO9U5.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nw6njwd',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",Stingray Éxitos del Momento (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/stingray-xitos-del-momento/master.m3u8?ads.vf=--_m-LmFeCi',
    cover: 'https://i.imgur.com/wiasHUR.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-yg44vxk',
    title: 'Stingray Flashback 70s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-115ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/jf5C9QF.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-aq42t0y',
    title: 'Stingray Greatest Hits (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883053',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1q9p5uf',
    title: 'Stingray Greatest Hits (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-155ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-16zeoq7',
    title: 'Stingray Greatest Holiday Hits',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/manifest/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/54947915-6504-4548-aaef-eabd451f8607/1.m3u8',
    cover: 'https://i.imgur.com/Hz2d6og.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ecy240g',
    title: 'Stingray Hit List (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-107ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/lgpIwId.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2rpynw0',
    title: 'Stingray Hitlist (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883054',
    cover: 'https://i.imgur.com/lgpIwId.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-uexi0yy',
    title: 'Stingray Holidayscapes (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://plextv.ott-channels.stingray.com/holidayscapes/master.m3u8',
    cover: 'https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fprovider-static.plex.tv%2Fepg%2Fcms%2Fproduction%2F9cb4b15c-8244-4499-ae2c-9a92d4cdff6d%2F13895_SHS_Plex_Logos_Holidays_1500x1000_Dark-Background.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ybwxmdp',
    title: 'Stingray Hot Country (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-108ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/PZhxyIT.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8wpnt5s',
    title: 'Stingray Jukebox Oldies (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-021ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Stingray_Music_logo.svg/960px-Stingray_Music_logo.svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kbeaz43',
    title: 'Stingray Karaoke (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/karaoke-kar000-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/9TLTLS3.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7yitjbz',
    title: 'Stingray Naturescape (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883056',
    cover: 'https://i.imgur.com/882kd90.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-p9seooz',
    title: 'Stingray Naturescape (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/naturescape-a003-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/882kd90.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-h58rtyn',
    title: 'Stingray Nothin\' But 90s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-142ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/Tq3I0po.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vm0vp4g',
    title: 'Stingray Remember the 80s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-128ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/6E3wYrb.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9ow5mg0',
    title: 'Stingray Remember the 80s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883071',
    cover: 'https://i.imgur.com/duwc8E8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-p6taqev',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",Stingray Remember the 80s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/stingray-remember-the-80s/master.m3u8?ads.vf=Fq0bVWh7hy0',
    cover: 'https://i.imgur.com/duwc8E8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kd99wjp',
    title: 'Stingray Rock Alternative (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-102ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/mt8ulVX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xhkxe5q',
    title: 'Stingray Romance Latino (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-202ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Stingray_Music_logo.svg/960px-Stingray_Music_logo.svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-f1krgc2',
    title: 'Stingray Smooth Jazz (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-140ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/h1DsOzH.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xvtdqax',
    title: 'Stingray Soul Storm (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-134ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/dU1KC3f.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bwug7u3',
    title: 'Stingray The Spa (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-122ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/ywAN923.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-li42zoa',
    title: 'Stingray Today\'s KPOP (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-317ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/mMbntB5.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qqkhi55',
    title: 'Stingray Today\'s Latin Pop (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-190ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/Os3kRRP.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qc8le24',
    title: 'Stingray Urban Beat (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-133ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/Os3kRRP.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-pieglad',
    title: 'Stryk TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://fffffff110156200.tvustream.com:8298/ryfy.m3u8',
    cover: 'https://i.imgur.com/rKkHhkX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-82w995g',
    title: 'STZ Telebista (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/stztelebista/index.m3u8',
    cover: 'https://i.imgur.com/rFQuAEv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hfjp3hx',
    title: 'Súper Q Panamá (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vcp8.myplaytv.com:1936/superq/superq/playlist.m3u8',
    cover: 'https://i.imgur.com/ocTnqi7.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-t03opch',
    title: 'Super TV (1080i) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.supertv.ro/live/supertv/playlist.m3u8',
    cover: 'https://i.imgur.com/pzxUE0O.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8ixxdgg',
    title: 'Supermúsica TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://backupmaxmedia.hvmultiplay.com/hls/stream4/supermusica.m3u8',
    cover: 'https://i.imgur.com/MiVs42N.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qg4h0av',
    title: 'T2 TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://t2hls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/Wu8MBb7.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vuw1inz',
    title: 'Tabbar Hits (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vglivessai.akamaized.net/sg/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/e11b0319-52e8-4190-ab03-3931cc68eac9/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_TABBAR_HITS/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-85aal2g',
    title: 'Tarab (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://shd-amg-fast-btpls.shahid.net/tx002/playlist.m3u8',
    cover: 'https://assets.mbcmood.com/channels/1738059679TARAB_Logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-19kzlea',
    title: 'Tarang Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livetv.tarangplus.in/tarangmusic-origin/live/playlist.m3u8',
    cover: 'https://i.imgur.com/oSm8zFD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6f6hcfi',
    title: 'TDI Radio TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://peer2.tdiradio.com/static/streaming-playlists/hls/8f5d84ce-e8ac-4109-9975-9665f5605557/master.m3u8',
    cover: 'https://i.imgur.com/POdTmaD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-o08udzx',
    title: 'Tele7music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.tele7music.ro/hls/stream/index.m3u8',
    cover: 'https://i.imgur.com/11b5W8u.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7kf78vi',
    title: 'Tele Dominicana TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vdopanel.jlahozconsulting.com/p/3417/hybrid/play.m3u8',
    cover: 'https://dominicanchannels.com/wp-content/uploads/teledominicana.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-f9j1gaj',
    title: 'Tele Zoukla',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vdo.pro-fhi.net:3228/stream/play.m3u8',
    cover: 'https://i.imgur.com/lWYKgPC.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zbdsld6',
    title: 'TeleMusik Senegal (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://58c04fb1d143f.streamlock.net/rezopropartner_1_live/rezopropartner_1_live/playlist.m3u8',
    cover: 'https://i.imgur.com/dPAPLsd.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-b99bcoc',
    title: 'Telerumba TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://inliveserver.com:1936/18506/18506/playlist.m3u8',
    cover: 'https://www.vivalivetv.com/public/files/shows/0/1/3649-294x165-FFFFFF.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lzu1oup',
    title: 'Tezaur TV (576i)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tezaurtv.md/stream/index.m3u8',
    cover: 'https://i.imgur.com/eAagwLW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-cf19mzi',
    title: 'The Country Network (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg00600-amg00600c1-thecountrynetwork-us-5497.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/en/d/dd/The_Country_Network_Logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5vxdn1z',
    title: 'The Voice TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://bss1.neterra.tv/thevoice/thevoice.m3u8',
    cover: 'https://i.imgur.com/OoJSmoj.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-iau98i4',
    title: 'Tiankov Folk (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamer103.neterra.tv/tiankov-folk/live.m3u8',
    cover: 'https://i.imgur.com/VKY4q64.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-anvip36',
    title: 'Tiankov Orient Folk (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamer103.neterra.tv/tiankov-orient/live.m3u8',
    cover: 'https://i.imgur.com/33LexyP.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-io90wp4',
    title: 'TikTok Radio Brasil (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d1bl6tskrpq9ze.cloudfront.net/hls/master.m3u8?ads.xumo_channelId=99992529',
    cover: 'https://static.wikia.nocookie.net/logopedia/images/f/f4/TikTok_Radio.svg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4qdf6mn',
    title: 'Topical Moon RD (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://sistemastr.tropicalmoonmedia.com/live/56BE17DB16EB76C9F2DDB8346F4DFA4E/30.m3u8',
    cover: 'https://www.vivalivetv.com/public/files/shows/0/1/3900-294x165-FFFFFF.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-d1qq6h7',
    title: 'Totalmusic (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn.global.elektamedia.com/live/c7eds/Totalmusic/SA_LIVE_hls_enc/master.m3u8',
    cover: 'https://static.elektamedia.com/ch/tmc_main.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1f1a3d5',
    title: 'Totalmusic 80s (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_80s/SA_LIVE_hls_enc/master.m3u8',
    cover: 'https://static.elektamedia.com/ch/tmc_80s.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xputo7u',
    title: 'Totalmusic 2000s (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_00s/SA_LIVE_hls_enc/master.m3u8',
    cover: 'https://static.elektamedia.com/ch/tmc_00s.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zvimva6',
    title: 'Totalmusic Concerts (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_Concerts/SA_LIVE_hls_enc/master.m3u8',
    cover: 'https://static.elektamedia.com/ch/tmc_concerts.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8qpq2as',
    title: 'Totalmusic Dance (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_Dance/SA_LIVE_hls_enc/master.m3u8',
    cover: 'https://static.elektamedia.com/ch/tmc_dance.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ew4isva',
    title: 'Trace Brasil (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01131-tracetv-tracebrazuca-samsungbr/playlist.m3u8',
    cover: 'https://i.imgur.com/DFBocPu.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mnilgfp',
    title: 'TRACE Brazuca (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg01131-tracetv-amg01131c4-stirr-us-4390.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/DFBocPu.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6ug5fnr',
    title: 'Trace Gospel (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://channels.trace.plus/Traceprod/GOSPEL_FR/.m3u8',
    cover: 'https://i.imgur.com/X0UmU3K.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dnnrntl',
    title: 'Trace Latina (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg01131-tracetv-tracelatina-glewed-vtnk7.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/CUVAi4u.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-k3hhwxa',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",TRACE Latina (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/trace-latina/encrypted.m3u8?ads.vf=8rE20DsHHI0',
    cover: 'https://i.imgur.com/CUVAi4u.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-a76dfzb',
    title: 'Trace UK (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d2l4tng0wskzvn.cloudfront.net/Trace_GB.m3u8',
    cover: 'https://a.jsrdn.com/hls/23073/trace-uk/logo_20240627_183320_70.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-n3bqne6',
    title: 'Trace Urban (Australia) (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lightning-traceurban-samsungau.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/DLIbUMx.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6gcnd59',
    title: 'Tropi Q 99.7 FM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://www.streaming507.net:19360/videotropiq/videotropiq.m3u8',
    cover: 'https://i.imgur.com/5rPdHhb.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hr2dfsf',
    title: 'Tropical Moon Cumbia TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://srv2.tropicalmoonmedia.com/cumbiatv/cumbiatv/playlist.m3u8',
    cover: 'https://i.imgur.com/jL1kLyS.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hq3kd2t',
    title: 'Tropical Music TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59a564764e2b6.streamlock.net/vallenato/tropical/playlist.m3u8',
    cover: 'https://i.imgur.com/h48pwLn.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-92gzvb0',
    title: 'TRT Müzik (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv-trtmuzik.medya.trt.com.tr/master.m3u8',
    cover: 'https://i.imgur.com/JgUzRH8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-817yk9u',
    title: 'Tu Musica HD (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://edge.essastream.com/tumusicahd/tracks-v1a1/mono.m3u8',
    cover: 'https://i.imgur.com/HnjUjog.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zlrhhrn',
    title: 'Tunes 6 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.d6-pro.com/tunes6music/live/video.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Tunes_6.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5j21y0k',
    title: 'Turbo Mix Radio TV (360p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://7.innovatestream.pe:19360/turbomixoficial/turbomixoficial.m3u8',
    cover: 'https://i.imgur.com/AsdBQa3.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ha1webj',
    title: 'Türkmen Owazy (406p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://alpha.tv.online.tm/hls/ch005.m3u8',
    cover: 'https://i.imgur.com/Ap7l2jC.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wyru30k',
    title: 'TV Arbëria 4 Muzikë (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ssh101.bozztv.com/ssh101/rtvarberia4/playlist.m3u8',
    cover: 'https://i.imgur.com/zLRzyVS.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ud8qh9f',
    title: 'TV Arbëria Retro Hits (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ssh101.bozztv.com/ssh101/rtvarberiaretro/playlist.m3u8',
    cover: 'https://i.imgur.com/zLRzyVS.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wg7zdiz',
    title: 'TV Éxitos (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streaming.grupomediosdelnorte.com:19360/tvexitos/tvexitos.m3u8',
    cover: 'https://i.imgur.com/ahz7X7u.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-x6wqts6',
    title: 'TVOMIX (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloud.tvomix.com/TVOMIX/index.m3u8',
    cover: 'https://ugc.production.linktr.ee/7ef61237-c46d-456b-afe3-a42ef49a979e_Mejorado2.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-a1riv1h',
    title: 'TVONE Nicaragua (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hdbox.chunklistv.com/live?stream=tvone',
    cover: 'https://i.imgur.com/FNk6rdz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-q156v4j',
    title: 'TVR Folclor',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tvr-folclor.lg.mncdn.com/tvrfolclor/smil:tvrfolclor.smil/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/TVR_Folclor_Logo_2023.svg/960px-TVR_Folclor_Logo_2023.svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kolj330',
    title: 'TVS Music Network (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rpn.bozztv.com/gusa/gusa-tvsmusic/index.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vygyu0o',
    title: 'TVUNO (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamtv.onliv3.online:1936/karibtv/karibtv/playlist.m3u8',
    cover: 'https://i.imgur.com/dht94P4.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-o4g7t6e',
    title: 'TZiK [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://54627d4fc5996.streamlock.net/tzik/tzik/chunklist.m3u8',
    cover: 'https://i.imgur.com/TAagRkn.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3egmo3h',
    title: 'Ultimate TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.ottlive.co.in/utvtamil/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/utvtamil.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6rrttz9',
    title: 'Urbano TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59ef525c24caa.streamlock.net/tvurbano/tvurbano/playlist.m3u8',
    cover: 'https://i.imgur.com/KVVU9PI.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-613vcrh',
    title: 'V2BEAT (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://abr.de1se01.v2beat.live/playlist.m3u8',
    cover: 'https://i.imgur.com/PXGqyLn.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-k3ranj8',
    title: 'V Classic TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5eaccbab48461.streamlock.net:1936/8112/8112/playlist.m3u8',
    cover: 'https://i.imgur.com/WIACJSy.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4lckss9',
    title: 'Vaanavil TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://6n3yope4d9ok-hls-live.5centscdn.com/vaanavil/TV.stream/playlist.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Vaanavil_TV.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mwjoo8j',
    title: 'Vallenato Internacional (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59a564764e2b6.streamlock.net/vallenato/vallenatom/playlist.m3u8',
    cover: 'https://i.imgur.com/rVKroNW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-uqimp3z',
    title: 'VAM Vid\'s & More (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://sincerecloud.stream/loadbalancer/public/J9EmQQGf.m3u8',
    cover: 'https://i.imgur.com/CD1PffA.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ny23giy',
    title: 'Vantage Dance (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls.vantagetv.ee/vdance_stream/main_stream.m3u8',
    cover: 'https://vantagetv.ee/vantage_dance.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vay1fa2',
    title: 'Vantage Music (720p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls.vantagetv.ee/vmusic_stream/main_stream.m3u8',
    cover: 'https://vantagetv.ee/vantage_music.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6lgqs2u',
    title: 'Vantage Music UK (1080p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls.vantagetv.co.uk/vmusicuk_stream/index.m3u8',
    cover: 'https://vantagetv.ee/vantage_music.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ii5ef5j',
    title: 'Vantage Rock (720p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls.vantagetv.ee/vrock_stream/index.m3u8',
    cover: 'https://vantagetv.ee/vantage_rock.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-08mk57o',
    title: 'Venus Media (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tigocloud.desdeparaguay.net/venusmedia/venusmedia/playlist.m3u8',
    cover: 'https://i.imgur.com/XwmUbfp.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wu1fwld',
    title: 'Vevo 2K (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d1s6jz7jeei17.cloudfront.net/playlist/amg00056-vevotv-vevo2kau-samsungau/playlist.m3u8',
    cover: 'https://images.pluto.tv/channels/5fd7bca3e0a4ee0007a38e8c/featuredImage.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9stv2r3',
    title: 'Vevo 70s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg00056-vevotv-vevo70saunz-samsungau-xzszd.amagi.tv/playlist/amg00056-vevotv-vevo70saunz-samsungau/playlist.m3u8',
    cover: 'https://images.pluto.tv/channels/5f32f26bcd8aea00071240e5/featuredImage.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-u17a4a1',
    title: 'Vevo 80s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg00056-vevotv-vevo80saunz-samsungau-rp5e3.amagi.tv/playlist/amg00056-vevotv-vevo80saunz-samsungau/playlist.m3u8',
    cover: 'https://images.pluto.tv/channels/5fd7b8bf927e090007685853/featuredImage.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2agqbre',
    title: 'Vevo 90s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg00056-vevotv-vevo90saunz-samsungau-n6a0d.amagi.tv/playlist/amg00056-vevotv-vevo90saunz-samsungau/playlist.m3u8',
    cover: 'https://images.pluto.tv/channels/5fd7bb1f86d94a000796e2c2/featuredImage.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dmxf3tb',
    title: 'Vevo Country (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg00056-vevotv-vevocountryau-samsungau-ktmqm.amagi.tv/playlist/amg00056-vevotv-vevocountryau-samsungau/playlist.m3u8',
    cover: 'https://images.pluto.tv/channels/5da0d75e84830900098a1ea0/featuredImage.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qlgh3qa',
    title: 'Vevo Hip Hop (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d3vgs3ro3x6v8a.cloudfront.net/Vevo_Hip_Hop.m3u8',
    cover: 'https://i.imgur.com/Lbc9cYw.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-tl8doyh',
    title: 'Vevo Latino (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg00056-amg00056c13-rakuten-es-3246.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/D7SwmuB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4hs5dam',
    title: 'Vevo Pop (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d128y56w6v2kax.cloudfront.net/playlist/amg00056-vevotv-vevopopau-samsungau/playlist.m3u8',
    cover: 'https://i.imgur.com/dZHktKR.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vgnmg73',
    title: 'Vevo R&B (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d1hf773q57zx9s.cloudfront.net/Vevo_R_B.m3u8',
    cover: 'https://images.pluto.tv/channels/5da0d83f66c9700009b96d0e/featuredImage.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-sdoyg1e',
    title: 'Vevo Retro Rock (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d2lyea6if8kkz9.cloudfront.net/playlist/amg00056-vevotv-vevoretrorockau-samsungau/playlist.m3u8',
    cover: 'https://i.imgur.com/H1Aap4E.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-o2jk75s',
    title: 'Video Rola (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d3b2epqdk0p7vd.cloudfront.net/out/v1/8a448b5e16384af4a3c8146a7b049c32/index.m3u8',
    cover: 'https://i.imgur.com/9w54eVy.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-49b54ss',
    title: 'Vijay Takkar APAC (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tglmp01.akamaized.net/out/v1/c1071012b73f4f189b202e1529e8f802/manifest.mpd',
    cover: 'https://dtil.tmsimg.com/assets/s144078_ld_h15_aa.png?lock=720x540',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4ps2asg',
    title: 'Vĩnh Long TV5 (1080p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.fptplay53.net/epzsd1/vinhlong5_vhls.smil/chunklist.m3u8',
    cover: 'https://i.imgur.com/F12VdKO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zx44xll',
    title: 'Vintage Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59ef525c24caa.streamlock.net/vmtv/tvvintage/playlist.m3u8',
    cover: 'https://i.imgur.com/KImqYnN.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nv0cqcz',
    title: 'VIP TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ed5ov1.live.opencaster.com/bkyqeDgfaukC/index.m3u8',
    cover: 'https://i.imgur.com/6N0qITv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-trbshsb',
    title: 'Visión Televisión (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8016/index.m3u8',
    cover: 'https://i.imgur.com/HV5tgcM.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qzh26oh',
    title: 'VIVA Russia (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live20.bozztv.com/akamaissh101/ssh101/vivarussia/chunks.m3u8',
    cover: 'https://i.imgur.com/OFhQQCD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6m1ness',
    title: 'VM Latino (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59ef525c24caa.streamlock.net/vmtv/vmlatino/playlist.m3u8',
    cover: 'https://i.imgur.com/Dvo1b82.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zvxjjgp',
    title: 'VoiceOver Radio TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8198/index.m3u8',
    cover: 'https://i.imgur.com/HzGs1Eh.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-z9wy3rm',
    title: 'Volksmusik TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vmtv.iptv-playoutcenter.de/vmtv/vmtv1/playlist.m3u8',
    cover: 'https://i.imgur.com/EsWuCJ3.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-y2o9224',
    title: 'Vos y TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloud37.ecuatel.com/vostv/live/manifest.m3u8',
    cover: 'https://i.imgur.com/294FDCB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-h03f7d6',
    title: 'VRT Radio Klara (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live-radio-cf-vrt.akamaized.net/groupb/live/eee20dc8-158a-4194-8d92-0c5a73ffcd3b/live.isml/.m3u8',
    cover: 'https://i.ibb.co/YdDkSJW/VRT-Klara-2020-svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fvki2p1',
    title: 'VRT Radio StuBru (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live-radio-cf-vrt.akamaized.net/groupb/live/0f394a26-c87d-475e-8590-e9c6e79b28d9/live.isml/.m3u8',
    cover: 'https://i.ibb.co/y0TcsXw/512px-VRT-Stu-Bru-logo-svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4o5m13g',
    title: 'WAVE TV (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamer2.nexgen.bz/08-WAVE/index.m3u8',
    cover: 'https://i.imgur.com/V8Hfgis.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-y4n32ff',
    title: 'Wavez FM',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vs20.live.opencaster.com/wavezfm1075aruba_37766c9d/index.m3u8',
    cover: 'https://i.imgur.com/uyROZSS.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kh4abi3',
    title: 'WVCU-LP Concord University Radio The Cure 97.7 (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video1.getstreamhosting.com:1936/8152/8152/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/en/0/0f/WVCU-LP_2015.PNG',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-011ae3d',
    title: 'WZNT (Zeta 93) (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livestream.lamusica.com/nacionz/ngrp:nacionz_all/playlist.m3u8',
    cover: 'https://i.ibb.co/KzqWLZR/images-57.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2cj69iw',
    title: 'X 102.7 FM (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.castr.com/65dee3aad6beacddbd6cd1af/live_21e811c0d60d11eeaa1a471c2c967e4a/index.m3u8',
    cover: 'https://i.imgur.com/28b810Y.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3mtlu0z',
    title: 'X Level Media (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tuvideoonline.com.ar:3332/live/xlevelmedialive.m3u8',
    cover: 'https://i.imgur.com/BGwQdQW.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-yvm25it',
    title: 'XITE (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://xite-rakuten.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/jxuwGRi.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-96bnrpb',
    title: 'XITE 90\'s Throwback (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d284aawtm5vi48.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-fjdfi2br1jtq7/XITE_90s_Throwback.m3u8',
    cover: 'https://i.imgur.com/vwpOzuz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vw707xs',
    title: 'XITE Classic Country (1080p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://pb-wgi5ljoabjgdm.akamaized.net/XITE_Countrys_Finest.m3u8',
    cover: 'https://i.imgur.com/XQrMCkT.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lj19xqs',
    title: 'XITE Hits (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d726x48n2pd5h.cloudfront.net/XITE_Hits.m3u8',
    cover: 'https://i.imgur.com/N51Rp7E.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3ee6s9f',
    title: 'XITE Hits Germany (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d726x48n2pd5h.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-skxr1pazhltvp/XITE_Hits.m3u8',
    cover: 'https://i.imgur.com/N51Rp7E.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2qwk33e',
    title: 'XITE Hits UK (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg01243-xitenetworksint-hitsuk-samsunguk-mvovq.amagi.tv/playlist/amg01243-xitenetworksint-hitsuk-samsunguk/playlist.m3u8',
    cover: 'https://i.imgur.com/N51Rp7E.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-sjbomc4',
    title: 'XITE Just Chill (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dvnftgdlbnemm.cloudfront.net/XITE_Just_Chill.m3u8',
    cover: 'https://provider-static.plex.tv/epg/cms/production/927dd614-017d-49dd-9eb9-0ed79d09084e/xitejustchill_logo_light_-_Arlette_FiranRDX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6bb6ghn',
    title: 'XITE Nuevo Latino (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d3bsgqzbpkrvbb.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-w288eaw03izg1/XITE_Nuevo_Latino.m3u8',
    cover: 'https://i.imgur.com/2qyl2y3.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-c9awlq0',
    title: 'XITE Reggae Vibes (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dw2m7yrngfg8c.cloudfront.net/XITE_Reggae_Vibes.m3u8',
    cover: 'https://provider-static.plex.tv/epg/cms/production/c7506335-967f-46a9-917a-2a35475cd96c/xitereggaevibes_logo_light_-_Arlette_FiranRDX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-br8q3hk',
    title: 'XITE Rock x Metal (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d198ro05q94rc4.cloudfront.net/XITE_Rock_On.m3u8',
    cover: 'https://i.imgur.com/uIIUIuN.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-brwxil1',
    title: 'XITE Siempre Latino (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d1xc25jm9e0l4b.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-xplkt8i7m24dc/XITE_Siempre_Latino.m3u8',
    cover: 'https://i.imgur.com/bwmIEgG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-i0md0aj',
    title: 'XPTV1 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://janus.xpbroadcasting.com:8443/hls/xptv1.m3u8',
    cover: 'https://i.imgur.com/Ty7GkoN.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ie4ybua',
    title: 'YleX Studio Live (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ylestudiolive.akamaized.net/hls/live/2007826/ylestudiolive-YleX/master.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/YleX.svg/960px-YleX.svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-e6q5f8e',
    title: 'YRF Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01412-xiaomiasia-yrfmusic-xiaomi/playlist.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/YRF_Music.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-jkq77es',
    title: 'ZB Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://server.zillarbarta.com/zbmusic/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/zbmusic.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lv5mas8',
    title: 'ZFM Zoetermeer (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://zfmzoetermeer.nl/live/master.m3u8',
    cover: 'https://i.imgur.com/vrjACvy.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-su70mzl',
    title: 'Zo\'r TV (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream8.cinerama.uz/1016/tracks-v1a1/mono.m3u8',
    cover: 'https://i.imgur.com/NuzyhVM.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5qv5qyf',
    title: 'Zona Music TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://acceso.radiosportstv.online:3022/stream/play.m3u8',
    cover: 'https://i.imgur.com/TJ5l9iI.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ap432ay',
    title: 'Zoom (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dai.google.com/linear/hls/event/JCAm25qkRXiKcK1AJMlvKQ/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZOOM/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3iizg1j',
    title: 'Zoom Global (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d14c63magvk61v.cloudfront.net/strm/channels/zoom/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZOOM/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3e6v2i4',
    title: 'ZU TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls.rundletv.eu.org/LIVE$RadioZU/6.m3u8/Level/300720051?end=END&start=LIVE',
    cover: 'https://i.imgur.com/1gtkGhB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-eggi8yd',
    title: 'ZWEI2 Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdne.folxplay.tv/folx-trz/streams/ch-2/master.m3u8',
    cover: 'https://i.imgur.com/RbdpCNf.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mjuwyv1',
    title: 'Матур ТВ (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://public.streaming.matur-tv.ru/hls/h264_aac/stream.m3u8',
    cover: 'https://i.imgur.com/Pg7K7eV.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-oq8bs75',
    title: 'Муз союз (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls-tvsoyuz.cdnvideo.ru/tvsoyuz2/muzsoyuz.6fw0-58xp-acts-esy0/playlist.m3u8',
    cover: 'https://i.imgur.com/Puk1Bhx.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3t7vlc7',
    title: 'Муз ТВ (450p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://zabava-htlive.cdn.ngenix.net/hls/CH_MUZTV/variant.m3u8',
    cover: 'https://i.imgur.com/BtqrHmz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-s0o8aoi',
    title: 'Музыка 1 International [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://kino-1.catcast.tv/content/37745/index.m3u8',
    cover: 'https://i.imgur.com/DIKe5vA.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-yzbyogx',
    title: 'Музыка Кино International [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://kino-1.catcast.tv/content/37739/index.m3u8',
    cover: 'https://i.imgur.com/2SG0Swa.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-odgqtqd',
    title: 'Сити Эдем Meditation Music [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/47410/index.m3u8',
    cover: 'https://i.imgur.com/HPWevWb.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-oc4takc',
    title: 'Сити Эдем Play Христианский Музыкальный [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/34100/index.m3u8',
    cover: 'https://i.imgur.com/ozEqob9.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2jpi4r8',
    title: 'Сити Эдем Бирма Play [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/34364/index.m3u8',
    cover: 'https://i.imgur.com/38Q5L5W.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-uov4ovt',
    title: 'Сити Эдем Классическая Музыка [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/47400/index.m3u8',
    cover: 'https://i.imgur.com/l7BE8l6.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2o9s3e5',
    title: 'Сити Эдем Сиртаки ТВ [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/46421/index.m3u8',
    cover: 'https://i.imgur.com/V3MTfyc.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1zil27n',
    title: 'УТРК Музыка (480p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://st2.mediabay.tv/KG_KTRK-Muzika/index.m3u8',
    cover: 'https://www.utrk.kg/img/stream/45.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-forahzs',
    title: 'Шансон ТВ (576p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://uiptv.do.am/1ufc/602079679/playlist.m3u8',
    cover: 'https://i.imgur.com/Fk4sd8t.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-pujuzbv',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Movies",24 Hour Free Movies (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d1b5mlajbmvkjv.cloudfront.net/v1/master/9d062541f2ff39b5c0f48b743c6411d25f62fc25/UDU-DistroTV/145.m3u8?ads.vf=7FhdsxqVxOi',
    cover: 'https://i.imgur.com/iSVnzR1.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ib7nns3',
    title: '27 TwentySeven [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live2.msf.cdn.mediaset.net/content/hls_h0_cls_vos/live/channel(ts)/index.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Twentyseven_logo.svg/960px-Twentyseven_logo.svg.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-473cadd',
    title: '30A TV Classic Movies (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://30a-tv.com/feeds/pzaz/30atvmovies.m3u8',
    cover: 'https://babaktv.com/wp-content/uploads/2023/09/30A-Classi-Movies.jpeg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-zh9u6jn',
    title: '&TV International (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg01117-amg01117c1-amgplt0029.playout.now3.amagi.tv/playlist/amg01117-amg01117c1-amgplt0029/playlist.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SYMANDTV/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-i8oe6mc',
    title: 'ABN Bible Movies (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://mediaserver.abnvideos.com/streams/abnbiblemovies.m3u8',
    cover: 'https://i.imgur.com/NCqZdaL.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wzri3pv',
    title: 'Afghan Nobel Movies (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.relentlessinnovations.net:1936/afghannobel/afghannobel/playlist.m3u8',
    cover: 'https://i.ibb.co/zfdbVSm/logo-1.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-od71rse',
    title: 'Aflam (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx001/playlist.m3u8',
    cover: 'https://i.imgur.com/cTLj7Yt.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-c8sjqdo',
    title: 'Afra Film',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://afrafhls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-dp8zx2n',
    title: 'Afriwood Blockbuster (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://streamdot.broadpeak.io/cff02a74da64d145c102a2d012758398/afxpstr/AfriwoodBlockbuster/index.m3u8',
    cover: 'https://i.imgur.com/aESdqiB.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-jaerdz9',
    title: 'Alankar TV (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://livetv.tarangplus.in/alankar-origin/live/playlist.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ALANKAR/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-egf8ffk',
    title: 'Alien Nation by DUST (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://dqi7ayt2o24fn.cloudfront.net/playlist.m3u8',
    cover: 'https://i.imgur.com/FxYhME9.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-cbh8sft',
    title: 'All Time Movies (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://mumt03.tangotv.in/ALLTIMEMOVIES/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ALL_TIME_MOVIES/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-1zk21oh',
    title: 'alpha Cinema (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.15plusmg.ru/memfs/b389173a-df4e-4171-8904-e249893e71eb.m3u8',
    cover: 'https://i.imgur.com/146OgfU.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-gno7lg1',
    title: 'alpha Moretime (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.15plusmg.ru/memfs/3546fc09-2eba-459d-9a1f-9a2fc39e50bd.m3u8',
    cover: 'https://i.imgur.com/ibQfUr7.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-zjoi1rj',
    title: 'Alterna TV (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://tv.alterna.ar/stream/hls/live.m3u8',
    cover: 'https://tv.alterna.ar/alternatv.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-vxrv34v',
    title: 'Artflix Movie Classics (720p)',
    author: 'Ретро / Класика',
    type: 'video',
    url: 'https://amogonetworx-artflix-1-nl.samsung.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/5pOZQB4.png',
    description: '24/7 Ретро / Класика Stream',
    category: 'Ретро / Класика'
  },
  {
    id: 'vid-opi8wf5',
    title: 'Asianet Movies (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://anet.keralive.workers.dev/v1/master/a0d007312bfd99c47f76b77ae26b1ccdaae76cb1/asianetmovies_live_https/index.m3u8',
    cover: 'https://i.imgur.com/cps67hs.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-i73vb9z',
    title: 'Aurora Media Films (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn.streamhispanatv.net:3417/live/auroramflive.m3u8',
    cover: 'https://i.imgur.com/DVC5w6H.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-38ea3ac',
    title: 'AXN Asia Indonesia (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://indihuy.streamized.net/atm/DASH/axn/manifest.mpd',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/AXN_logo_%282015%29.svg/960px-AXN_logo_%282015%29.svg.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ytm2pth',
    title: 'B4U Bhojpuri (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdnb4u.wiseplayout.com/B4U_Bhojpuri/master.m3u8',
    cover: 'https://i.imgur.com/NwOQUDp.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-m5k3plv',
    title: 'B4U Kadak (1080p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdnb4u.wiseplayout.com/B4U_Kadak/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s142695_ld_h15_aa.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-hvjr3yi',
    title: 'B4U Movies (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg00877-b4unew-amg00877c2-lg-in-5260.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/M9kMFJl.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-e1dufp1',
    title: 'Bhojpuri Cinema (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live-bhojpuri.akamaized.net/liveabr/playlist.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_BHOJPURI_CINEMA/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-3rstiaq',
    title: 'BIZ Cinema (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://fl.biztv.media/cinema_720_EMfSyXgoRdiIHgldXTZICucKTIeCKO/index.m3u8',
    cover: 'https://biztv.uz/static/media/biz-cinema.286b83dc.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-cvuzd60',
    title: 'Bollywood HD Russia (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://xykt-fix.github.io/cinerama_edge01/hls/BOLLYWOOD_RU/Movie009.m3u8',
    cover: 'https://i.imgur.com/scDKOLS.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-q46z31d',
    title: 'Boreal (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://edge.essastream.com/borealtelevision/tracks-v1a1/mono.m3u8',
    cover: 'https://i.imgur.com/KSquHTG.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-eqc2yyl',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Movies",Box Cinema (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d3s7x6kmqcnb6b.cloudfront.net/d/distro001a/QK2TKFREGRYXDI8IJGHW/hls3/now,-1m/m.m3u8?ads.vf=l_Bw4LbbQO8',
    cover: 'https://i.imgur.com/LGJlmtp.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-yjb9tc4',
    title: 'Bravo Farsi TV (360p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://bravoohls.wns.live/hls/stream.m3u8',
    cover: 'https://i.ibb.co/yynxRTS/Bravo-Farsi.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-n0odr0b',
    title: 'Cafe Film',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cafefhls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ze6ykuj',
    title: 'Charge! (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://fast-channels.sinclairstoryline.com/CHARGE/index.m3u8',
    cover: 'https://i.imgur.com/1rxmu2u.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-92rz4k2',
    title: 'CINDIE TV (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d20xuwbyc4yoag.cloudfront.net/v1/master/9d062541f2ff39b5c0f48b743c6411d25f62fc25/DistroTV-MuxIP-CINDIE/387.m3u8?ads.vf=grWTpG3NQNi',
    cover: 'https://a.jsrdn.com/hls/23208/cindie-tv/logo_20250225_222520_68.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-gbfp8f7',
    title: 'Cine 34 [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live3-mediaset-it.akamaized.net/Content/hls_h0_clr_vos/live/channel(b6)/index.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cine34_logo.svg/960px-Cine34_logo.svg.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7rqj3op',
    title: 'Cine Romantico (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d1si3n1st4nkgb.cloudfront.net/10502/88886011/hls/master.m3u8?ads.xumo_channelId=88886011',
    cover: 'https://i.imgur.com/FUrrDrb.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-lzdq5pt',
    title: 'Cine Sony (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://a-cdn.klowdtv.com/live1/cine_720p/playlist.m3u8',
    cover: 'https://i.imgur.com/bZWoDTg.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wb0d9lf',
    title: 'like Gecko) Chrome/144.0.0.0 Safari/537.36" group-title="Movies",Cinema (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn4.skygo.mn/live/disk1/CinemaTV/DASH-FTA/CinemaTV.mpd',
    cover: 'https://i.imgur.com/yib6dM2.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-y1qkpr5',
    title: 'Cinema Hausa (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://streamdot.broadpeak.io/cff02a74da64d1459eeb779df71f0511/afxpstr/CinemaHausa/index.m3u8',
    cover: 'https://i.imgur.com/uV5cHDW.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-nqzpzmw',
    title: 'Cinevault 80s (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://aegis-cloudfront-1.tubi.video/ea1ab5d1-f554-4f6b-b03f-2611fcd94257/playlist.m3u8',
    cover: 'https://i.imgur.com/xaCyyDd.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-kymjsph',
    title: 'Classic Cinema (240p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rpn.bozztv.com/gusa/gusa-classiccinema/index.m3u8',
    cover: 'https://i.imgur.com/FJoPnTb.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-sgq1uzx',
    title: 'Classique TV (360p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stmv1.srvif.com/classique/classique/playlist.m3u8',
    cover: 'https://i.imgur.com/rHxcraT.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ill0qw5',
    title: 'CTB Perth Movies (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://movies.ctbperth.net.au/hls/stream.m3u8',
    cover: 'https://i.imgur.com/VB8gtCy.jpeg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-drs4i6o',
    title: 'Dhamaka Movies B4U (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/235/master.m3u8',
    cover: 'https://static.wikia.nocookie.net/logopedia/images/8/8c/Dhamaka_Movies.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-50paoa1',
    title: 'DiscoverFilm (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://discoverfilm-discoverfilm-1-gb.samsung.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/oMnpsQ5.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-d7kwe72',
    title: 'Dunia Sinema (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://unifi-live05.secureswiftcontent.com/UnifiHD/live27-1080FHD.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-jq32521',
    title: 'Ebony TV by Lionsgate (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://aegis-cloudfront-1.tubi.video/a0ad4b53-ab3a-48dd-be12-bc7f533c372c/playlist.m3u8',
    cover: 'https://provider-static.plex.tv/epg/cms/production/234d5377-ab07-41bf-acd6-34c17c1c051a/EbonyTV_Plex_Logo_Light_1500x1000.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-jjhb63b',
    title: 'EBS Cinema (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rpn.bozztv.com/ebstv/ebscinema/index.m3u8',
    cover: 'https://i.imgur.com/fewPTFE.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-zl41epk',
    title: 'Ekran Movies',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/EkranMovies/index-0.m3u8?token=onetv202',
    cover: 'https://i.ibb.co/WNyssx28/Screenshot-2025-05-18-211143.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ch3adfw',
    title: 'ETV Cinema HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d27zlkxhgwrfgo.cloudfront.net/v1/master/9d43eacaed199f8d5883927e7aef514a8a08e108/ETV_CINEMA_H264_cloud_in/index.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143026_ld_h15_aa.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-c0zxg10',
    title: 'Film4 HD (1080p) [Geo-Blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://viamotionhsi.netplus.ch/live/eds/film4/browser-HLS8/film4.m3u8',
    cover: 'https://i.imgur.com/MTSgoGI.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-4bmpp9b',
    title: 'Filmax (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://s3.ideationtec.live/Filmax/Filmax.m3u8',
    cover: 'https://i.imgur.com/eLmdZ6k.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-sfpluvl',
    title: 'Filmex (Xumo) (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://filmex-filmex-xumo.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/Hiz2OyC.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-kl2blnz',
    title: 'Filmex Clásico (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://filmex-filmexclasico-xumo.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/D3dj4mv.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-xzg62zr',
    title: 'FilmRise Westerns (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://dz05z8iljgvbe.cloudfront.net/master.m3u8',
    cover: 'https://i.imgur.com/8j2npVc.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-f5ka2kw',
    title: 'Forensic Files (720p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://pb-x9qsxrudiq9d2.akamaized.net/webvtt/v1/18584c3f3a2a4df8/88886014/master.m3u8',
    cover: 'https://i.imgur.com/8j2npVc.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-cx6fiks',
    title: 'FX Movie Channel (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://tvpass.org/live/FXMovieChannel/hd',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/FXM_Logo.svg/960px-FXM_Logo.svg.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-m4ycv6m',
    title: 'GEM Bollywood',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gembollywood/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/2XASeBk.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-c8boqxa',
    title: 'GEM Drama',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemdrama/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/k2pGyRH.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-4cyi730',
    title: 'GEM Drama Plus',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemdramaplus/index-0.m3u8?token=onetv202',
    cover: 'https://gemgroup.tv/assets/images/channels/icon_7.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-plg1awm',
    title: 'GEM Film',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemfilm/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/nrFz3LU.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-oez1tob',
    title: 'GEM Onyx',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemonyx/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/gXRIAw4.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-hmz1n0e',
    title: 'GEM Pixel',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://glserver1.tamashaland.com/live/aBCH96886YznRbGOiqTnnQ__/stream_0.m3u8',
    cover: 'https://i.ibb.co/Q3tkbPrn/icon-27.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-n63kima',
    title: 'GEM Rubix',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemrubix/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/cDjOj58.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-v9990y0',
    title: 'GEM Rubix Plus',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemrubixplus/index-0.m3u8?token=onetv202',
    cover: 'https://gemgroup.tv/assets/images/channels/icon_31.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ophg5gg',
    title: 'GEM TV',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gem/index-0.m3u8?token=onetv202',
    cover: 'https://gemgroup.tv/assets/images/channels/icon_16.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-w88c9ct',
    title: 'GEM TV Plus',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemtvplus/index-0.m3u8?token=onetv202',
    cover: 'https://gemgroup.tv/assets/images/channels/icon_17.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-p64dhww',
    title: 'Ghost TV (712p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stmv.video.expressolider.com.br/ghostv/ghostv/playlist.m3u8',
    cover: 'https://i.imgur.com/ZVO8GVI.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-zivniaa',
    title: 'Gold Star',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://moviethls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-fblwxg8',
    title: 'Goldmines (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-2.pishow.tv/live/1459/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_GOLDMINES/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-bu9tuk1',
    title: 'Goldmines 2 (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-2.pishow.tv/live/1460/master.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-jqhrf36',
    title: 'Grand Cinema',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://gcinemahls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ws92dzj',
    title: 'Gravitas Movies (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d6dg3ebeih71x.cloudfront.net/Gravitas_Movies.m3u8',
    cover: 'https://i.imgur.com/H2hD4vT.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-qtm61fg',
    title: 'GREAT! movies (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg01753-narrativeuk-amg01753c3-lg-gb-1833.playouts.now.amagi.tv/playlist/amg01753-narrativeuk-greatmovies-lggb/playlist.m3u8',
    cover: 'https://d2n0069hmnqmmx.cloudfront.net/epgdata/1.0/newchanlogos/512/512/skychb3709.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ibw0jnk',
    title: 'GREAT! romance (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg01753-narrativeuk-amg01753c2-lg-gb-1832.playouts.now.amagi.tv/playlist/amg01753-narrativeuk-greatchristmas-lggb/playlist.m3u8',
    cover: 'https://d2n0069hmnqmmx.cloudfront.net/epgdata/1.0/newchanlogos/512/512/skychb3643.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-k67rgxj',
    title: 'Grjngo Western Movies (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amogonetworx-grjngo-3-dk.samsung.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/wFqhK3p.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-tjry2l9',
    title: 'Hallmark Movies & More (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://pb-clwlfvkqpn19r.akamaized.net/Hallmark_Movies_&_More.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-yb2oit0',
    title: 'Hallmark Movies & Mysteries East (1080p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://tvpass.org/live/HallmarkMoviesMysteriesEast/hd',
    cover: 'https://i.imgur.com/GPRGA9C.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-1gy00vr',
    title: 'Harbin Movie Channel',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stream.hrbtv.net/yspd/playlist.m3u8',
    cover: 'https://www.tvchinese.net/uploads/tv/haerbin.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-0m4wjzw',
    title: 'Hero (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live-fi.tvkaista.net/hero/live.m3u8?hd=true',
    cover: 'https://i.imgur.com/4t5JQLY.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-8gqt3cm',
    title: 'HITS Movies HD (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn10jtedge.indihometv.com/atm/DASH/hitsmovie/manifest.mpd',
    cover: 'https://i.imgur.com/kyE3vXf.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-setuq5u',
    title: 'Home Plus',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://homeplushls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-pl2jagl',
    title: 'ICC Plus (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://icchls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wt38r0u',
    title: 'IFC East (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://tvpass.org/live/IFCEast/hd',
    cover: 'https://i.imgur.com/bQdkyF9.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-evjfge4',
    title: 'iFilm 2',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.presstv.ir/hls/ifilm2.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/fa/c/ce/Ifilm2logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-upvqrpp',
    title: 'iFilm Arabic',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.presstv.ir/hls/ifilmar.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/IFILM.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7310fk2',
    title: 'iFilm English',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.presstv.ir/hls/ifilmen.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/IFILM.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ozzefsq',
    title: 'iFilm Persian',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.presstv.ir/hls/ifilmfa.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/IFILM.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-2vxqn9a',
    title: 'Indywood TV (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://43wrzjnpqoxe-hls-live.wmncdn.net/indywood/indywoodtv/index.m3u8',
    cover: 'https://i.ibb.co/jT3NCPp/logo-tv.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7o0xsgm',
    title: 'Itage TV (480p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://viewmedia7219.bozztv.com/wmedia/viewmedia100/web_011/Stream/playlist.m3u8',
    cover: 'https://i.imgur.com/FP1aUPw.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-y1hollq',
    title: 'Jiangxi Movie Channel',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://play-live-hls.jxtvcn.com.cn/live-city/tv_jxtv4.m3u8',
    cover: 'https://www.tvchinese.net/uploads/tv/jiangxi.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-isrkxio',
    title: 'Jilin Movie Channel',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://lsfb.avap.jilintv.cn/zqvk7vpj/channel/906341e6f19b4c4bacdc89941eb85d12/index.m3u8',
    cover: 'https://www.tvchinese.net/uploads/tv/jlyspd.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-2z1wrcc',
    title: 'Kairali We (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-3.pishow.tv/live/1530/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_KAIRALI_WE/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-dgqwbwi',
    title: 'KCM (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg02159-amg02159c7-samsung-in-4001.playouts.now.amagi.tv/playlist/amg02159-kcglobal-kcm-samsungin/playlist.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/KCM.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-lvydqmp',
    title: 'KidsFlix (1080p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=50',
    cover: 'https://i.imgur.com/4Pn0ADQ.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-fsv11yq',
    title: 'Kinoteatr (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stream8.cinerama.uz/1009/tracks-v1a1/playlist.m3u8',
    cover: 'https://i.imgur.com/emH1BgC.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-t0isfor',
    title: 'Klasik TV (576p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://178.253.194.105/klasiktv/playlist.m3u8',
    cover: 'https://i.imgur.com/C90BYlb.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-j63pqj9',
    title: 'Kuriakos Cine (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://w2.manasat.com/kcine/smil:kcine.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/CZViCwB.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-w35tpex',
    title: 'Lifetime Movies East (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://tvpass.org/live/LifetimeMoviesEast/hd',
    cover: 'https://i.imgur.com/BWmqYTO.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-sw24ly9',
    title: 'Maah TV (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://hls.maahtv.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/FkyueH6.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-se19ww9',
    title: 'Made in Hollywood',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://connection3-ent-nz.samsung.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/p16HNIM.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-rug1gdv',
    title: 'Maha Movie (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-6.pishow.tv/live/10007/master.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Maha_Movies.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-3jx6051',
    title: 'Manoranjan Grand (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/1011/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143302_ld_h15_aa.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-vrjdnvo',
    title: 'Maverick Black Cinema (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://maverick-maverick-black-cinema-3-us.roku.wurl.tv/playlist.m3u8',
    cover: 'https://images.fubo.tv/station_logos/maverick_black_cinema_c.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ad64j80',
    title: 'Max Movies (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.maxtn.in/maxmovies/maxmovies/index.m3u8',
    cover: 'https://livetv.ashokadigital.net/upload/logo/1732168422_WhatsApp%20Image%202024-11-21%20at%2010.18.47%20AM.jpeg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-gcawpi8',
    title: 'MAX Reels',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://indihuy.streamized.net/atm/DASH/useeprime/manifest.mpd',
    cover: 'https://images.maxstream.tv/sites/default/files/entry/0_psqdb637/landscape_carousel_xxhdpi.webp',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-mf21mi5',
    title: 'MBC Bollywood (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-bollywood/546eb40d7dcf9a209255dd2496903764/index.m3u8',
    cover: 'https://i.imgur.com/TTAGFHG.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wmqh5a7',
    title: 'MBC+ Drama (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-plus-drama/e37251ec2aac8f6c98f75cd0fa37cd28/index.m3u8',
    cover: 'https://i.imgur.com/lxWdjXG.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-c9c1c3q',
    title: 'MCI Televisión (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://video.ejeserver.com/live/mcitelevision.m3u8',
    cover: 'https://pbs.twimg.com/profile_images/1836009952420274177/FfYonU6r_400x400.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-2qo6d5y',
    title: 'Mega Cine TV (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cnn.hostlagarto.com/megacinetv/playlist.m3u8',
    cover: 'https://www.vivalivetv.com/public/files/shows/0/1/2893-294x165-FFFFFF.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-kphrh63',
    title: 'Memorias TV Film (720p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://video.xtrematv.com:3725/live/memoriasfilmlive.m3u8',
    cover: 'https://i.imgur.com/vNfjW6Y.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-s6ziagv',
    title: 'Meta Film TV',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://metafilmhls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-pnkqswp',
    title: 'MH One Movies (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://mumt03.tangotv.in/MHONEMOVIE/index.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wbledpf',
    title: 'Mix Hollywood (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ml-pull-hwc.myco.io/MixTV/hls/index.m3u8',
    cover: 'https://i.imgur.com/1ENdbZn.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-cjf62aj',
    title: 'like Gecko) Chrome/146.0.0.0 Safari/537.36" group-title="Movies",MN+',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn4.skygo.mn/live/disk1/MNplus91/HLSv3-FTA/MNplus91.m3u8',
    cover: 'https://new.skytel.mn/uploads/channel/mn-676145a957d06.jpeg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ygkwi49',
    title: 'like Gecko) Chrome/144.0.0.0 Safari/537.36" group-title="Movies",MovieBox (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn4.skygo.mn/live/disk1/Moviebox/DASH-FTA/Moviebox.mpd',
    cover: 'https://i.imgur.com/xeO1Zb4.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7hng41a',
    title: 'Movieplex (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://mumt04.tangotv.in/MOVIEPLEX/index.m3u8',
    cover: 'https://i.imgur.com/THJEAqJ.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-vloe792',
    title: 'Movies Action (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx011/playlist.m3u8',
    cover: 'https://i.imgur.com/NIVhISa.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-yh1tyid',
    title: 'Movies Thriller (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx012/playlist.m3u8',
    cover: 'https://i.imgur.com/JWihdcl.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-lz9n06z',
    title: 'Movies! (480p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://bozztv.com/dvrfl03/hdirect/hdirect-ovair1-movies!/index.m3u8',
    cover: 'https://i.imgur.com/gAGn3mK.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-gwsz8xv',
    title: 'MovieSphere (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg00353-lionsgatestudio-moviesphere-xumo-zh5u0.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/h1ejU90.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-6bfo1vv',
    title: 'MovieSphere AU (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg00353-lionsgatefilmsi-moviesphereaus-samsungau-7qzhf.amagi.tv/playlist/amg00353-lionsgatefilmsi-moviesphereaus-samsungau/playlist.m3u8',
    cover: 'https://i.imgur.com/h1ejU90.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-hb18cdy',
    title: 'MovieSphere UK (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://moviesphereuk-samsunguk.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/h1ejU90.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wdq746i',
    title: 'Movify Kino (576p)',
    author: 'Ретро / Класика',
    type: 'video',
    url: 'https://void.greenhosting.ru/MovifyKino_Mpeg4/index.m3u8',
    cover: 'https://i.imgur.com/XIk5EJN.png',
    description: '24/7 Ретро / Класика Stream',
    category: 'Ретро / Класика'
  },
  {
    id: 'vid-21ltphe',
    title: 'like Gecko Chrome/144.0.0.0 Safari/537.36" group-title="Movies",My Cinema [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://op-group1-swiftservehd-1.dens.tv/h/h192/index.m3u8',
    cover: 'https://i.imgur.com/BTmcTQO.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-1ajjeqm',
    title: 'like Gecko Chrome/144.0.0.0 Safari/537.36" group-title="Movies",My Cinema Europe [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://op-group1-swiftservehd-1.dens.tv/h/h18/index.m3u8',
    cover: 'https://i.imgur.com/jz0d8tH.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ahxm3hb',
    title: 'MyTime Movie Network (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://appletree-mytimeuk-rakuten.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/pw4NZK1.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-5r529mg',
    title: 'MyTime Movie Network (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://appletree-mytimeau-samsung.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/HYgxPVQ.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-j1d7ssb',
    title: 'MyTime Movie Network Brazil (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://appletree-mytime-samsungbrazil.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/aiGQtzI.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-j9j4zhg',
    title: 'MyTime Movie Network Mexico (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://appletree-mytime-samsungmexico.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/pw4NZK1.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-48f87q9',
    title: 'MyTime movie network Spain (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://appletree-mytimespain-rakuten.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/pw4NZK1.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-2nwx3qu',
    title: 'NETV Toronto (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://eu1.vectromdigital.com:1936/netvtoronto/netvtoronto/playlist.m3u8',
    cover: 'https://i.imgur.com/WXRBuOW.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-yubgo34',
    title: 'NEW KMOVIES (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ads.its-newid.net/api/manifest.m3u8?tp=samsung_tvplus&channel_id=newid_343&ads.service_id=GB1700007PK',
    cover: 'https://i.imgur.com/wCgirjc.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-hycbwbs',
    title: 'Newflix',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://newfhls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-zao8gvc',
    title: 'Next HD (480p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.enhdtv.com:19360/nexthd/nexthd.m3u8',
    cover: 'https://i.imgur.com/c2rF3SS.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-amzsdch',
    title: 'Nolly Africa HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg02784-amg02784c2-amgplt0002.playout.now3.amagi.tv/ts-eu-w1-n2/playlist/amg02784-amg02784c2-amgplt0002/playlist.m3u8',
    cover: 'https://i.imgur.com/IxtGpti.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-o5ansfx',
    title: 'Orbita Chile TV (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://orbitachiletv.org/hls/0/stream.m3u8',
    cover: 'https://i.imgur.com/gbNh79Z.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-3q31kyc',
    title: 'Oscar Movies Bhojpuri (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-4.pishow.tv/live/233/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143638_ld_h9_ab.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-rsnpudc',
    title: 'OuterSphere (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d3o593mz1glx8d.cloudfront.net/OuterSphere_US.m3u8',
    cover: 'https://provider-static.plex.tv/epg/cms/production/f162df8b-6532-43fe-9202-83a658090651/OuterSphere_1500x1000_Logo_Dark_-_Chris_Connors__1_.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-gcjt1a5',
    title: 'Pantalla Clásica EC (512p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live21.bozztv.com/akamaissh101/ssh101/pantallaclasics/playlist.m3u8',
    cover: 'https://i.imgur.com/mhbERF9.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-boebvv0',
    title: 'Persiana Cinema',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cinehls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/hgIro9r.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-b7batf8',
    title: 'Persiana Family',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://familyhls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/lMZsuWi.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-i3hpmjn',
    title: 'Persiana Iranian',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://irhls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/vqrrpBi.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wytbtvn',
    title: 'Persiana Korea',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://korhls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/si2ZnIA.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-0z8rsub',
    title: 'Persiana Latino',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://latinohls.persiana.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-822l68p',
    title: 'Persiana Plus',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://euhls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/0xttibX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-iae6jhk',
    title: 'Pitaara (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://vg-pitaaratvlive.akamaized.net/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/vglive-sk-583798/playlist.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PITAARA/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-1fmbwvn',
    title: 'Pro100TV (576p)',
    author: 'Ретро / Класика',
    type: 'video',
    url: 'https://sirius.greenhosting.ru/Pro100tvRu/video.m3u8',
    cover: 'https://i.imgur.com/YfQEflM.png',
    description: '24/7 Ретро / Класика Stream',
    category: 'Ретро / Класика'
  },
  {
    id: 'vid-mpu2qha',
    title: 'Public Movies (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://mumt04.tangotv.in/PUBLICMOVIES/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PUBLIC_MOVIES/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-tqy9hp1',
    title: 'Rai Movie (576p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://mediapolis.rai.it/relinker/relinkerServlet.htm?cont=747002',
    cover: 'https://i.imgur.com/0FjxXU9.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-z7f3ue6',
    title: 'Raj Digital Plus (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://livestream.rajtv.tv/hlslive/Admin/px08241087/live/RajTV_Digital_plus/master_1.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_RAJ_DIGITAL_PLUS/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-rddc4lt',
    title: 'Rakuten Top Movies UK (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://0145451975a64b35866170fd2e8fa486.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-5987/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-iilnxqi',
    title: 'Rakuten TV Action Movies Austria (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://0f846627524f4dd2995e93581379db82.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenActionMovies-1/playlist.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-4fi20s9',
    title: 'Rakuten TV Action Movies Finland (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://bca5a421a70c46ad911efd0a4767c4bf.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6075/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-l1e6wu8',
    title: 'Rakuten TV Action Movies Germany (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://284824cf70404fdfb6ddf9349009c710.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6066/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-bbvlks3',
    title: 'Rakuten TV Action Movies Italy (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://87f2e2e5e7624e3bad85da1ca2ed31a7.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6067/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-2b2ut0q',
    title: 'Rakuten TV Action Movies Spain (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://a9c57ec7ec5e4b7daeacc6316a0bb404.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6069/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-k7ojmv3',
    title: 'Rakuten TV Action Movies UK (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://54045f0c40fd442c8b06df076aaf1e85.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6065/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-43l4u1i',
    title: 'Rakuten TV Comedy Movies Austria (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://7ed752b220a441b7b22bdf697c6c4df8.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenComedyMovies-1/playlist.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-fchqldy',
    title: 'Rakuten TV Comedy Movies Finland (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://a300af98e00746e2acf2346f43e47bd1.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6191/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-cn46hll',
    title: 'Rakuten TV Comedy Movies Germany (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ecac08c9e2214375b907d6825aaf9a01.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6182/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-s7zri4s',
    title: 'Rakuten TV Comedy Movies Italy (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://b8bc6c4b9be64bd6aeb3b92aa8521ed4.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6184/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-gi9gffv',
    title: 'Rakuten TV Comedy Movies Spain (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://71db867f03ce4d71a29e92155f07ab87.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6180/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-y7sw800',
    title: 'Rakuten TV Comedy Movies UK (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://9be783d652cd4b099cf63e1dc134c4a3.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6181/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-5e922gn',
    title: 'Rakuten TV Drama Movies Austria (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://df1aa472ff5b4780a8d91fe319778b4d.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenTVShows-1/playlist.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wi37laz',
    title: 'Rakuten TV Drama Movies Finland (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d7e8ee3c924d4305a0c1840fe94c5d36.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6102/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-3td5k7p',
    title: 'Rakuten TV Drama Movies Germany (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://968754c2483045c1a9a7f677caec35b6.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6096/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-30t00yh',
    title: 'Rakuten TV Drama Movies Italy (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://f84e0b1628464fab846160df957f269e.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6094/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-3qbm5qq',
    title: 'Rakuten TV Drama Movies Spain (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://a7089c89d85f453d850c4a1518b43076.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6092/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-s07xp8y',
    title: 'Rakuten TV Drama Movies UK (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://fee09fd665814f51b939b6d106cf5f66.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6093/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-p78rmoj',
    title: 'Rakuten TV Family Movies Austria (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://9fa8baba055e4a52b0a8d1ae7d78bed8.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenFamily-1/playlist.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-i3f2zli',
    title: 'Rakuten TV Family Movies Finland (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://758ee983d61e400381dea6fa8154f4e0.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6227/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-yiraj35',
    title: 'Rakuten TV Family Movies Germany (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://af230031eeac45f3b78d4f8a13265105.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6209/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7hl4ww1',
    title: 'Rakuten TV Family Movies Italy (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://3315fc3e7276420f895e19cf807dbee1.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6215/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-83wl2x0',
    title: 'Rakuten TV Family Movies Spain (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://b0d59c8c98974e708e5ccb9a27cdfdfc.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6205/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ief9zub',
    title: 'Rakuten TV Family Movies UK (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://e3207568b726401995c25670faaf32e4.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6203/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-2iq6yaa',
    title: 'Rakuten TV Family Switzerland (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://a24daf1125344b9cab66eed2fcff8821.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-ch_RakutenFamily-1/playlist.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-mb5ilov',
    title: 'Rakuten TV Nordic Films (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://4aa9ef08b70d4b0c8f3519c5950b1930.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6303/master.m3u8',
    cover: 'https://images-3.rakuten.tv/storage/global-live-channel/translation/artwork/ff79e878-3eea-45fc-b0cd-55d6acce9b18-width200-quality90.jpeg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-omc57ju',
    title: 'Rakuten TV Top Movies Finland (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://1d1b0d4cb6ae4c31985d13221795695b.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6057/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-bxlbmjy',
    title: 'Rakuten TV Top Movies Germany (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cbb622b29f5d43b598991f3fa19de291.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-5985/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-f0xqtem',
    title: 'Rakuten TV Top Movies Italy (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d4a4999341764c67a67e9ec9eb3790ab.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-5984/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-3l6n2a9',
    title: 'Rakuten TV Top Movies Spain (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ff335120300e4742a2b135ee9a9e7df8.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-5983/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-itkptnt',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Movies",Revry Her (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/revry-her/playlist.m3u8?ads.vf=j5eHovd50EC',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/DISTROTV/LIVECHANNEL/66698907bac4421ebc533646/images/logo_20231219_221435_68.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-rmz11sh',
    title: 'Roja Movies (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stream.rojatv.cloud/rojatv/rojatv/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/rojamovies.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-9dw4rdv',
    title: 'Rotana Cinema Egypt (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rotana.hibridcdn.net/rotananet/cinemamasr_net-7Y83PP5adWixDF93/playlist.m3u8',
    cover: 'https://i.imgur.com/dGlKoLW.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-z4r8fbn',
    title: 'Rotana Cinema KSA (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rotana.hibridcdn.net/rotananet/cinema_net-7Y83PP5adWixDF93/playlist.m3u8',
    cover: 'https://i.imgur.com/pGgp38I.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-s3kxsxw',
    title: 'Runtime Espanol (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://run-rt-uh-roku.otteravision.com/run/rt_uh/rt_uh.m3u8',
    cover: 'https://i.imgur.com/OMQq19N.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-phcsx24',
    title: 'ServusTV (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stv-live.akamaized.net/hls/live/2031011/lingeoSTVATwebPri/master.m3u8',
    cover: 'https://i.imgur.com/6W637Gn.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-bif5fj6',
    title: 'Shemaroo Josh (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://airtelapp.shemaroo.com/shemarooChumbakTV/smil:shemarooChumbakTVadp.smil/playlist.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/GNLZZGG00297P3E.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-p4d3zqm',
    title: 'Shubh Cinema TV (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d393sxaxig6bax.cloudfront.net/out/v1/589cf2cf44bf42bb941e817a2240d62e/index.m3u8',
    cover: 'https://i.imgur.com/RQhorAG.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-y0sex98',
    title: 'SL 1',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://slonehls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/n9cuM2W.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-y6lkjf8',
    title: 'SL 2',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://sltwohls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/BVuUx5R.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-gvyhkcw',
    title: 'Sony Canal Novelas',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://a89829b8dca2471ab52ea9a57bc28a35.mediatailor.us-east-1.amazonaws.com/v1/master/0fb304b2320b25f067414d481a779b77db81760d/CanelaTV_SonyCanalNovelas/playlist.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-90hvyxp',
    title: 'Sony One Favoris (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://49d735318d6b4c30a24a7997ea594e1b.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-820-FR-SONYONEFAVORIS-LG_FR/playlist.m3u8',
    cover: 'https://i.imgur.com/RO4AM4b.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-rvvqyg0',
    title: 'Sony One Hits Action (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://5098a8b860504a3690fd2e7c0a18d68f.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-817-FR-SONYONEHITSACTION-LG_FR/playlist.m3u8',
    cover: 'https://i.imgur.com/pXsZEsR.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-67y6opv',
    title: 'Sony One Hits Comedie (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://7aa9671895264ec9a384dfed1b992171.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-818-FR-SONYONEHITSCOMDIE-LG_FR/playlist.m3u8',
    cover: 'https://i.imgur.com/8sHuxxS.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-vnblseb',
    title: 'Sony Pix HD (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://sl.vodep39240327.workers.dev/channel/SONY%20PIX%20HD.m3u8',
    cover: 'https://i.postimg.cc/Z5G8j67L/PIX-HD-WHITE.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-1a0gm0h',
    title: 'Sony Wah (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://sl.vodep39240327.workers.dev/channel/SONY%20WAH.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SONY_WAH/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-lck1ir9',
    title: 'South Station (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cc-yw7ztecy8do3q.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-yw7ztecy8do3q/SS_IN.m3u8',
    cover: 'https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN3800008CX_20260325T012316SQUARE.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-32obls5',
    title: 'Star Maa Movies HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://anet.keralive.workers.dev/v1/master/a0d007312bfd99c47f76b77ae26b1ccdaae76cb1/maamovies_live_https/index.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143826_ld_h15_aa.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-y3rvn8p',
    title: 'Star Tamil Television (360p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://edge4-moblive.yuppcdn.net/trans1sd/smil:strtml19.smil/playlist.m3u8?dvr=',
    cover: 'https://i.imgur.com/fjHcr9z.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-xne34rh',
    title: 'START Air',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://livetv.mylifeisgood.net.ru/channels/strwc.m3u8',
    cover: 'https://i.imgur.com/4bACa7x.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-khuf0fm',
    title: 'START World',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://livetv.mylifeisgood.net.ru/channels/strvf.m3u8',
    cover: 'https://i.imgur.com/TXtY5eM.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-19e11fb',
    title: 'Studio One + (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/276/master.m3u8',
    cover: 'https://i.imgur.com/yOPB7JB.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-dj579n3',
    title: 'Suriyan TV (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stream.sscloud7.com/live/suriyantv/index.m3u8',
    cover: 'https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/transparentImages/Suriyan-tv-logo_2000_X_1125_Transpharent.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-425hxcf',
    title: 'T2 Movies',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/T2Movies/index-0.m3u8?token=onetv202',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-d3j3vjo',
    title: 'Tamasha',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ncdn.telewebion.ir/hdtest/live/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/fa/thumb/f/f2/IRIB_tamashaTV.svg/960px-IRIB_tamashaTV.svg.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-5lcksq6',
    title: 'TF1 Series Films (1080p) [Geo-Blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://viamotionhsi.netplus.ch/live/eds/hd1/browser-HLS8/hd1.m3u8',
    cover: 'https://i.imgur.com/4CJIDKQ.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-j28loy2',
    title: 'Thalaa TV (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://streams2.sofast.tv/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/2069c593-3c07-4d62-9d44-746be5c3a5d6/manifest.m3u8',
    cover: 'https://d229kpbsb5jevy.cloudfront.net/yuppfast/content/common/channel/logos/thalaa-tv.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-jrjkpvf',
    title: 'The Film Detective (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cinedigm-entertainment-corp-thefilmdetective-1-us.ono.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/yfOwmsP.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-v4syogd',
    title: 'The Movie Club (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://sis-global.prod.samsungtv.plus/v1/tvpprd/sc-mp2ar4ca425xo.m3u8',
    cover: 'https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN38000072R_20260325T012318SQUARE.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-sw0eqif',
    title: 'The Movie Club +2 (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d3gnyty2vddhsg.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/pb-ytipwjqub3kf8/TMC2_IN.m3u8?ads.ads_cdn=cf&ads.cdn=cf',
    cover: 'https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN40000100Y_20260204T004058SQUARE.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wo4ps0f',
    title: 'Thrill (540p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn10jtedge.indihometv.com/atm/DASH/thrill/manifest.mpd',
    cover: 'https://i.imgur.com/Y282owj.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-iboytnd',
    title: 'Tolly TV (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://streams2.sofast.tv/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/13b5735d-52c3-4be0-853d-e0ec0127e708/manifest.m3u8',
    cover: 'https://d229kpbsb5jevy.cloudfront.net/yuppfast/content/common/channel/logos/aumnrs.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-j294auu',
    title: 'TVCARiB Cinema (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn.mycloudstream.io/hls/live/broadcast/l3vslw4i/index.m3u8',
    cover: 'https://i.imgur.com/fvGlwKo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-6xe0zbb',
    title: 'TVS Drive In Movie (360p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rpn.bozztv.com/gusa/gusa-tvsdriveinmovie/index.m3u8',
    cover: 'https://i.imgur.com/OR9APjb.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-8c19a33',
    title: 'TVS Film Noir Network (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rpn.bozztv.com/trn01/gusa-TVSFilmNoir/index.m3u8',
    cover: 'https://i.imgur.com/A4yWhQw.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-4l1xa12',
    title: 'USA Network East (1080p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://tvpass.org/live/USANetworkEast/hd',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/USA_Network_logo_%282016%29.svg/960px-USA_Network_logo_%282016%29.svg.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ei48183',
    title: 'Victor Valley Movies (1080p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://2-fss-2.streamhoster.com/pl_138/201950-5317556-1/playlist.m3u8',
    cover: 'https://i.imgur.com/zgiuNNj.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-pq9n3kw',
    title: 'Whiplash Cinema (480p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn.whiplash.cc/whiplash-cinema/index.m3u8',
    cover: 'https://whiplash.cc/assets/img/channels/whiplashcinema.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-yu4wc7k',
    title: 'Wildside TV (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://versatile-wildsidetv-1-fr.samsung.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/cQkfRhH.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ol3eotl',
    title: 'Wu Tang Collection (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://dbrb49pjoymg4.cloudfront.net/10001/99991745/hls/master.m3u8?ads.xumo_channelId=99991745',
    cover: 'https://i.imgur.com/sz55sBl.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-o0bx67j',
    title: 'Xtrema Accion',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stmv6.voxtvhd.com.br/cineaccion/cineaccion/playlist.m3u8',
    cover: 'https://i.imgur.com/z5NwizH.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-02pqrt9',
    title: 'Xtrema Cine Clasico',
    author: 'Ретро / Класика',
    type: 'video',
    url: 'https://stmv6.voxtvhd.com.br/cineclasico/cineclasico/playlist.m3u8',
    cover: 'https://i.imgur.com/j91M4Yf.png',
    description: '24/7 Ретро / Класика Stream',
    category: 'Ретро / Класика'
  },
  {
    id: 'vid-1q5gz99',
    title: 'Xtrema Terror',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stmv6.voxtvhd.com.br/cineterror/cineterror/playlist.m3u8',
    cover: 'https://i.imgur.com/FcaTUym.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-alw8olx',
    title: 'ZB Cinema (720p)',
    author: 'Ретро / Класика',
    type: 'video',
    url: 'https://server.zillarbarta.com/ZBCINEMA/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/ZBCINEMA.png',
    description: '24/7 Ретро / Класика Stream',
    category: 'Ретро / Класика'
  },
  {
    id: 'vid-uvpmtny',
    title: 'Zee Bollymovies (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg17931-zee-amg17931c8-samsung-th-6526.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://framerusercontent.com/images/mqfJ18x4jYe0GbZUbxSHsbnWU.png?scale-down-to=512',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-f1ctino',
    title: 'Zee Bollymovies Australia (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg17931-zee-amg17931c8-samsung-au-8871.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://framerusercontent.com/images/mqfJ18x4jYe0GbZUbxSHsbnWU.png?scale-down-to=512',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-196laao',
    title: 'Zee Cinema APAC (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg17931-zee-amg17931c5-samsung-au-8873.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZEE_CINEMA/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-97mgvd9',
    title: 'Zee Cinemalu HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://mumbai-edge.smartplaytv.in/ZeeCinemaluHD/index.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/GNLZZGG0022ZEQ9.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-4bxsjw6',
    title: 'Zee South Flix (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg00862-amg00862c9-amgplt0173.playout.now3.amagi.tv/playlist/amg00862-amg00862c9-amgplt0173/playlist.m3u8',
    cover: 'https://d3bd0tgyk368z1.cloudfront.net/zeelg/LG%20logo%20artwork/400x200/zsouthflix.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-dcbwp3n',
    title: 'Zylo Cine Friki (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d2mr4fu91mjx9m.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-rb0tx75ojbc5u/CineFriki_ES.m3u8',
    cover: 'https://i.imgur.com/b3Ospym.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-w4zipic',
    title: 'Zylo Ciné Nanar (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://zylo-cinenanar-rakuten.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/YnUZd3W.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7c12pws',
    title: 'Zylo Cine Western (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d2nq34q0i1r3la.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-awohw8g217ho8/CineWestern_ES.m3u8',
    cover: 'https://i.imgur.com/2UROzSc.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-e8tky4t',
    title: 'Zylo Ciné Western (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg00711-zylo-amg00711c8-rakuten-uk-2686.playouts.now.amagi.tv/playlist/amg00711-zylofast-cinewestern-rakutenuk/playlist.m3u8',
    cover: 'https://i.imgur.com/tteOFkL.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-kxtc86c',
    title: 'Zylo Emotion\' L (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rakutenaa-zylo-emotional-rakuten-r1zkm.amagi.tv/playlist/rakutenAA-zylo-emotional-rakuten/playlist.m3u8',
    cover: 'https://i.imgur.com/MP34aaj.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-nd9eypo',
    title: 'Zylo ScreamIN (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rakutenaa-zylo-screamin-rakuten-p11ej.amagi.tv/playlist/rakutenAA-zylo-screamin-rakuten/playlist.m3u8',
    cover: 'https://i.imgur.com/tGmKbil.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-r865qfa',
    title: 'Детское кино International [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://autopilot.catcast.tv/content/38720/index.m3u8',
    cover: 'https://i.imgur.com/dJqFRhQ.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-kv0sdp8',
    title: 'Дом Кино',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://streaming.thestream.cyou/live/44.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%B0_%D0%94%D0%BE%D0%BC_%D0%9A%D0%B8%D0%BD%D0%BE.png/960px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%B0_%D0%94%D0%BE%D0%BC_%D0%9A%D0%B8%D0%BD%D0%BE.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7z15pmh',
    title: 'Новый Русский (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.15plusmg.ru/memfs/f983b507-a170-41a9-85a9-d9afc6cba9c1.m3u8',
    cover: 'https://i.imgur.com/iuRSScH.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-1hfs8ou',
    title: 'Сити Эдем КиноАзия [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/34393/index.m3u8',
    cover: 'https://i.imgur.com/gaket4B.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-hyoppk0',
    title: 'Сити Эдем КиноАрт [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/38398/index.m3u8',
    cover: 'https://i.imgur.com/67CWCtz.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ctq6r7u',
    title: 'Сити Эдем КиноДетектив [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/41327/index.m3u8',
    cover: 'https://i.imgur.com/9rKHwBV.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-2tcwlh2',
    title: 'Сити Эдем КиноДрама [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/45269/index.m3u8',
    cover: 'https://i.imgur.com/29ddffh.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-q1mrr86',
    title: 'Сити Эдем КиноКлассика [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/34185/index.m3u8',
    cover: 'https://i.imgur.com/0qGCS1S.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-vo95sv3',
    title: 'Сити Эдем КиноКомедия [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/41331/index.m3u8',
    cover: 'https://i.imgur.com/Aga2XVA.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-b3rjrky',
    title: 'Сити Эдем КиноМистика [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/40783/index.m3u8',
    cover: 'https://i.imgur.com/s1Pid0K.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-oxq01st',
    title: 'Сити Эдем КиноСемья [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://v2.catcast.tv/content/38128/index.m3u8',
    cover: 'https://i.imgur.com/YoWOZMx.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7xekqno',
    title: 'Сити Эдем КиноФантастика [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/45268/index.m3u8',
    cover: 'https://i.imgur.com/I64FeIO.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-106n7b4',
    title: 'Сити Эдем КиноЭкшен [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/41333/index.m3u8',
    cover: 'https://i.imgur.com/uuzuvD0.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-xqi1u14',
    title: 'Смотрим 100% Классика',
    author: 'Ретро / Класика',
    type: 'video',
    url: 'https://player.smotrim.ru/iframe/stream/live_id/78a66c7c-df38-4091-b2e1-9eeeb4c96338',
    cover: 'https://i.imgur.com/aASNpKq.png',
    description: '24/7 Ретро / Класика Stream',
    category: 'Ретро / Класика'
  },
];

export function getPodcasts() {
  return PODCASTS;
}
