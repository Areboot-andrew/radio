// ========================================
// Video Clips & Music Data
// ========================================

const PODCASTS = [
  {
    id: 'vid-5h56ywx',
    title: '3ABN Praise Him Music Network',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://3abn.bozztv.com/3abn1/PraiseHim/smil:PraiseHim.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/iBcqT8L.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-j9rtuk3',
    title: '4 Fun TV (576i) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.4fun.tv:8888/hls/4f_high/index.m3u8',
    cover: 'https://i.imgur.com/rI1wo2l.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ng5txxv',
    title: '4 Kurd',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://4kuhls.persiana.live/hls/stream.m3u8',
    cover: 'https://www.aparatchi.com/images/chanells-logo/4kurd.svg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-e1fi9fr',
    title: '7 RadioVisione (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream10.xdevel.com/video1s976543-1932/stream/playlist.m3u8',
    cover: 'https://radio7note.com/img/favicon/android-icon-192x192.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lvilt5k',
    title: '7S Music (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumt03.tangotv.in/Dsly5z3H7SMUSIC/index.m3u8',
    cover: 'https://i.imgur.com/zDiIhdN.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dxadgv7',
    title: '7 YOU & ME (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream10.xdevel.com/video0s977798-2239/stream/playlist.m3u8',
    cover: 'https://i.imgur.com/Rte2K3x.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ctn11r2',
    title: '9X Jalwa (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://b.jsrdn.com/strm/channels/9xjalwa/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_9X_JALWA/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fewo6fw',
    title: '9X Jhakaas (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://9xjio.wiseplayout.com/9X_Jhakaas/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s90012_ld_h15_aa.png?lock=720x540',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dtpldug',
    title: '9X Tashan (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://9xjio.wiseplayout.com/9X_Tashan/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_9X_TASHAN/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7vyt4jh',
    title: '9XM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://9xjio.wiseplayout.com/9XM/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_9XM/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8sinxxt',
    title: '13 Festival (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://origin.dpsgo.com/ssai/event/Nftd0fM2SXasfDlRphvUsg/master.m3u8',
    cover: 'https://i.imgur.com/Ymk6j5o.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dkb3nkd',
    title: '15+ Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.15plusmg.ru/memfs/ce3366b1-bf25-4e24-96bb-1adf0d44bd3d.m3u8',
    cover: 'https://i.imgur.com/kj21hwd.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vcrx9hg',
    title: '30A Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://30a-tv.com/music.m3u8',
    cover: 'https://i.imgur.com/gNWg9tl.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-yhii5n4',
    title: '70-80 TV (1080P)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://585b674743bbb.streamlock.net/9050/9050/playlist.m3u8',
    cover: 'https://i.imgur.com/y4kNV3Q.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5n7dq26',
    title: '98.1 Pearl FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live2.tensila.com/pearl-v-1.pearlfm/hls/live/mystream.m3u8',
    cover: 'https://i.imgur.com/GY750xh.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-37vq3pj',
    title: 'A2i Music (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.sen-gt.com/A2iMusic/myStream/playlist.m3u8',
    cover: 'https://i.imgur.com/Fykhzxh.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3fckxly',
    title: 'Aaryaa TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.ottlive.co.in/aryatvtamil/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/aryatvtamil.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nrw2ese',
    title: 'Abdulmajeed Abdullah (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d2hng5r56zpsbw.cloudfront.net/out/v1/9c4c990f44bb4767bb46271f326dd574/index.m3u8',
    cover: 'https://assets.mbcmood.com/channels/1720184087Abdullah%20Majeed%20Abdullah%20banner.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zh2x7f0',
    title: 'Activa TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamtv.mediasector.es/hls/activatv/index.m3u8',
    cover: 'https://i.imgur.com/VCUZKiw.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-q85ao8v',
    title: 'ACW UG TV (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.acwugtv.com/hls/stream.m3u8',
    cover: 'https://i.imgur.com/8pzEmcJ.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-p12b3ri',
    title: 'AE Radio TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tls-cl.cdnz.cl/aeradio/live/playlist.m3u8',
    cover: 'https://i.imgur.com/425dj2i.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-cqoabk4',
    title: 'AFN TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://bozztv.com/1gbw5/tintv2/tintv2/playlist.m3u8',
    cover: 'https://i.imgur.com/LctanF8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-k8kxgsr',
    title: 'Afrobeats (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.ecable.tv/afrobeats/index.m3u8',
    cover: 'https://i.imgur.com/232ndRK.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-d0ere98',
    title: 'Aghani Aghani TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn.streamlane.tv/hls/aghanitv/index.m3u8',
    cover: 'https://i.imgur.com/o6HSfNg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-a4202e4',
    title: 'AlbKanale Music TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://albportal.net/albkanalemusic.m3u8',
    cover: 'https://i.imgur.com/JdKxscs.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-f8gvt0d',
    title: 'Alcance FM PLAY TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.wilohosting.com:19360/alcancefmtv/alcancefmtv.m3u8',
    cover: 'https://i.imgur.com/ymcWecA.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-k3ecjho',
    title: 'Alterna TV (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://tv.alterna.ar/stream/hls/live.m3u8',
    cover: 'https://tv.alterna.ar/alternatv.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ntngpoc',
    title: 'AMC (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amchls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/yj8RNnG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gp7wgih',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",AMusic Channel (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d3s7x6kmqcnb6b.cloudfront.net/d/distro001a/LVP8DMYRYH6F6Y5UUO8J/hls3/now,-1m/m.m3u8?ads.vf=McCy6HuluFe',
    cover: 'https://i.imgur.com/06zuf64.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hboam9j',
    title: 'Andy Haryana (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumt03.tangotv.in/Dsly5z3HANDYHARYANA/index.m3u8',
    cover: 'https://i.imgur.com/rmCBD3e.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-c0urdun',
    title: 'Antenne Kaernten (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://60efd7a2b4d02.streamlock.net/a_kaernten/ngrp:livestream_all/playlist.m3u8',
    cover: 'https://i.imgur.com/nUKFDsb.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4h0al76',
    title: 'Antenne Steiermark (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://60efd7a2b4d02.streamlock.net/a_steiermark/ngrp:livestream_all/playlist.m3u8',
    cover: 'https://i.imgur.com/qnappvd.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-jalo9sv',
    title: 'Antenne Vorarlberg (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5857db5306b83.streamlock.net/antennevorarlberg-live/_definst_/mp4:livestream/playlist.m3u8',
    cover: 'https://i.imgur.com/GW750Zc.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2v4scs0',
    title: 'ARY Musik (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://arymusik.aryzap.com/3fd38b2c62d0c3bbd74aedabb533c03a/6459fa78/v1/01847ac7a4930b8ed5aa6ed04aba/01847ac8f5f70b8ed5aa6ed04abd/main.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/en/b/bb/ARY_Musik_logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9tswbqe',
    title: 'ATN Music (360p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/atnmusic.stream/playlist.m3u8',
    cover: 'https://www.jagobd.com/wp-content/uploads/2015/12/atnmusic.jpg?x50681',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mdhbct7',
    title: 'Atomic Academy TV (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://atomic.streamnet.ro/academia.m3u8',
    cover: 'https://i.imgur.com/ZbrDIbZ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-roucxr7',
    title: 'Atomic TV (360p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://atomic.streamnet.ro/atomictv.m3u8',
    cover: 'https://i.imgur.com/O4uI0Uy.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-viod4wa',
    title: 'Avang TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls.avang.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/3I1n7fO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-tnvlxu9',
    title: 'Azahares Radio Multimedia (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamyes.alsolnet.com/azaharesfm/live/playlist.m3u8',
    cover: 'https://i.imgur.com/g1BFoSs.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-v6sgpj2',
    title: 'B4U Music (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-2.pishow.tv/live/415/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s158141_ld_h15_aa.png?lock=720x540',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-92k0pwz',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",Balle Balle (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/balle-balle/index.m3u8?ads.vf=b8WZfP1_RIy',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Balle_Balle_TV.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-l1xuwrm',
    title: 'Baraza TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eco.streams.ovh:8081/barazatv/tracks-v1a1/mono.m3u8',
    cover: 'https://i.imgur.com/TZ1unwF.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-tng4xbk',
    title: 'Baraza TV Deep House (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtmp.streams.ovh:1936/barazarelax/barazazararelax/barazarelax/playlist.m3u8',
    cover: 'https://i.imgur.com/TZ1unwF.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-m52waa3',
    title: 'Baraza TV Relaxing (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtmp.streams.ovh:1936/barazarelax/barazarelax/playlist.m3u8',
    cover: 'https://i.imgur.com/TZ1unwF.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5nxero3',
    title: 'Barbud Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://raw.githubusercontent.com/taodicakhia/IPTV_Exception/master/channels/af/tolomusic.m3u8',
    cover: 'https://i.imgur.com/jbbxu0g.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wv3ugb9',
    title: 'BE@TTV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv.beatfm.nl/live.m3u8',
    cover: 'https://i.imgur.com/egK33Dj.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-z9deiux',
    title: 'Beats Radio (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://videostream.shockmedia.com.ar:19360/beatsradio/beatsradio.m3u8',
    cover: 'https://i.imgur.com/zkNUO5p.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9nj8gw5',
    title: 'Bel RTL (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://bel-live-hls.akamaized.net/hls/live/2038650/BEL-Live-HLS/master.m3u8',
    cover: 'https://i.imgur.com/0DUprIW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7f5zu03',
    title: 'Best of Dance TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://m1b2.worldcast.tv/dancetelevisionone/dancetelevisionone.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4ezivre',
    title: 'Bibel TV Musik (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://bibeltv03.iptv-playoutcenter.de/bibeltv03/bibeltv03.stream_1/playlist.m3u8',
    cover: 'https://i.imgur.com/yIqOcP5.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-h87wgeq',
    title: 'BIZ Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://fl.biztv.media/music_720_QAKpGmVUjaPApCNjpsgBxrdqNihAkl/index.m3u8',
    cover: 'https://i.ibb.co/DfsCJwk/Uz-biz-music-5462.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vywz8cl',
    title: 'BOKTV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livestream2.bokradio.co.za/hls/Bok5c.m3u8',
    cover: 'https://i.imgur.com/mcNjuuO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lne299q',
    title: 'BPX TV Radio',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video1.getstreamhosting.com:1936/8212/8212/playlist.m3u8',
    cover: 'https://i.imgur.com/86VXni8.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1mtta1w',
    title: 'Bravo! TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streaming.social3.hr/bravoTVkdjd7djd/XAbSERW5p3/2.m3u8',
    cover: 'https://i.imgur.com/FN2J9hv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1zzrvub',
    title: 'BTA TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloud.fastchannel.es/manifiest/hls/prog9/btatv.m3u8',
    cover: 'https://i.imgur.com/vygOosC.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qkk5le8',
    title: 'Busuioc TV (540p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://busuioctv.iforward.eu/hls/busuioc.m3u8',
    cover: 'https://i.imgur.com/CQtfBPu.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-pxaw1jr',
    title: 'Cadena Elite (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8004/index.m3u8',
    cover: 'https://i.imgur.com/3yeGDTP.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4pdxtso',
    title: 'Canal 3 KMK TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live20.bozztv.com/giatv/giatv-KMKTV/KMKTV/chunks.m3u8',
    cover: 'https://i.imgur.com/sgRDRBK.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nt3iojr',
    title: 'Canal Clave (480p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv.picta.cu/clave/clave_0.m3u8',
    cover: 'https://i.imgur.com/7tMkA4Z.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hbju43k',
    title: 'CCTV-15 (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://xykt-fix.github.io/play/a02e/index.m3u8',
    cover: 'https://i.imgur.com/CCV0eRG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kfi6cpd',
    title: 'CEACOM TV [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/ceacom/index.m3u8',
    cover: 'https://i.imgur.com/hutdRfk.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-imy5wfn',
    title: 'Channel C (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mini.allinonereborn.fun/tata.php?id=11588',
    cover: 'https://i.imgur.com/CnFdLaf.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vzi5dn9',
    title: 'City TV (576p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv.city.bg/play/tshls/citytv/index.m3u8',
    cover: 'https://i.imgur.com/mFL452f.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2toginm',
    title: 'Clubbing TV France',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d1j2csarxnwazk.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-uze1m6xh4fiyr-ssai-prd/master.m3u8',
    cover: 'https://i.imgur.com/MyiA92q.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-yqrpop6',
    title: 'CMC (California Music Channel) (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cmc-ono.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/L38mC6H.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dgoaerm',
    title: 'CMC TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.cmctv.hr:49998/cmc/live.m3u8',
    cover: 'https://i.imgur.com/FCb7Ag2.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rs0j19j',
    title: 'Company TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5929b138b139d.streamlock.net/CompanyTV/smil:CompanyTV.smil/master.m3u8',
    cover: 'https://i.imgur.com/ccdwsWj.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gw1t6io',
    title: 'Conecta TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream8.mexiserver.com:19360/conectatvx/conectatvx.m3u8',
    cover: 'https://i.imgur.com/qEk0QGa.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0d0pzbd',
    title: 'Cool FM 98.9 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live2.tensila.com/cool-v-1.arubara/hls/master.m3u8',
    cover: 'https://i.imgur.com/uGE6lZ2.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wnov1z9',
    title: 'Couleur 3 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtsc3video.akamaized.net/hls/live/2042837/c3video/3/playlist.m3u8',
    cover: 'https://i.imgur.com/VOIwYYd.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-uteghdd',
    title: 'Cumbia Mix (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloud.tvomix.com/CUMBIAMIX/index.m3u8',
    cover: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6901dfd41a05195b77301d7b/b306e57e4_Logo-TV-C.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-uly0q71',
    title: 'D3 TV (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live20.bozztv.com/akamaissh101/ssh101/d3tvnet/playlist.m3u8',
    cover: 'https://i.imgur.com/uFEIBtB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rxzzpkj',
    title: 'Dance FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5eaccbab48461.streamlock.net:1936/dancefm_1/dancefm_1/playlist.m3u8',
    cover: 'https://i2.paste.pics/ff3e1e1045a1968dcdbcda3824a94eb3.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-g1vofk3',
    title: 'Dance Television (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://m1b2.worldcast.tv/dancetelevisionone/2/dancetelevisionone.m3u8',
    cover: 'https://pbs.twimg.com/profile_images/1268129322730127364/OJlQBZpS_400x400.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2r89rzl',
    title: 'like Gecko Chrome/144.0.0.0 Safari/537.36" group-title="Music",Dance TV [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://op-group1-swiftservehd-1.dens.tv/h/h250/index.m3u8',
    cover: 'https://i.imgur.com/UKMR625.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vxrrvu5',
    title: 'DanceTV Algorhythm (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://m2b2.worldcast.tv:7443/dancetelevisionfour/dancetelevisionfour.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-jwy7qc2',
    title: 'DanceTV Deep House District (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://m1b2.worldcast.tv/dancetelevisiontwo/dancetelevisiontwo.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-g6qqfn7',
    title: 'DanceTV EDM Mainstage (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mbit1.worldcast.tv/dancetelevisionseven/multibit.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-e8kw6as',
    title: 'DanceTV House Floor (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://m2b2.worldcast.tv:7443/dancetelevisionfive/dancetelevisionfive.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0ybxso8',
    title: 'DanceTV Minimal Tech (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mbit1.worldcast.tv/dancetelevisionsix/multibit.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-pf6bpfn',
    title: 'DanceTV Techno Warehouse (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://m2b2.worldcast.tv:7443/dancetelevisionthree/dancetelevisionthree.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-u2dt156',
    title: 'DASDING 90.8 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://swrdasdingvr-hls.akamaized.net/hls/live/2018681/dasdingvr/master.m3u8',
    cover: 'https://i.imgur.com/BmklHs8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ygsw8cv',
    title: 'DBM TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dbmtv.vedge.infomaniak.com/livecast/dbmtv/playlist.m3u8',
    cover: 'https://i.imgur.com/ab6p2SW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6mh5stg',
    title: 'DeepHouse District (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu-nl-012.worldcast.tv/dancetelevisiontwo/dancetelevisiontwo.m3u8',
    cover: 'https://i.imgur.com/IV2Qvc0.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mg12rvy',
    title: 'Dega TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59d39900ebfb8.streamlock.net/saintlouisltv/saintlouisltv/playlist.m3u8',
    cover: 'https://i.ibb.co/ZTYvHyR/DEGA-TV-TELEPACK.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bro32e9',
    title: 'Deluxe Dance (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://sdn-global-live-streaming-packager-cache.3qsdn.com/64733/64733_264_live.m3u8',
    cover: 'https://i.imgur.com/Qu7t15Y.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-i2shqnc',
    title: 'Deluxe Lounge (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://jmp2.uk/stvp-CHAJ0500413A',
    cover: 'https://i.imgur.com/pgCA35z.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-foc2uon',
    title: 'Deluxe Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://sdn-global-live-streaming-packager-cache.3qsdn.com/13456/13456_264_live.m3u8',
    cover: 'https://i.imgur.com/HimuPPb.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zk4kt9w',
    title: 'Deluxe Rap (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://sdn-global-live-streaming-packager-cache.3qsdn.com/65183/65183_264_live.m3u8',
    cover: 'https://i.imgur.com/s3h67hx.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xm11fih',
    title: 'Dhamaal (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/1291/master.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Dhamaal_TV.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-a76izo0',
    title: 'Dhoom Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/1456/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_DHOOM_MUSIC/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gq8ph73',
    title: 'Dismar Radio TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rds3.desdeparaguay.net/dismartv/dismartv/playlist.m3u8',
    cover: 'https://i.imgur.com/KOuxdMD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gyeb39h',
    title: 'DM Sat (576p) [Geo-Blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://viamotionhsi.netplus.ch/live/eds/dmsat/browser-dash/dmsat.mpd',
    cover: 'https://i.imgur.com/LdeA1Cn.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fk4vfw0',
    title: 'DMF (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d-m-f.iptv-playoutcenter.de/dmf/dmf1/playlist.m3u8',
    cover: 'https://i.imgur.com/sJaBU7X.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zeeftaq',
    title: 'Dream Türk (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.duhnet.tv/S2/HLS_LIVE/dreamturknp/playlist.m3u8',
    cover: 'https://i.imgur.com/vJ8VaZi.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-s2o99o4',
    title: 'DTR Music 1 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://kino-stream.online/hls/DTRMUSIC1.m3u8',
    cover: 'https://i.imgur.com/3picWDA.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-l4re75o',
    title: 'E40 (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://copacotf.desdeparaguay.net/e40tv/e40tv_py_alta/playlist.m3u8?admin=tvaccion',
    cover: 'https://i.imgur.com/0RypDUY.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nj51ojc',
    title: 'EBS Musika (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rpn.bozztv.com/ebstv/ebsmusika/index.m3u8',
    cover: 'https://i.imgur.com/lSpplhD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-az9c271',
    title: 'EcuaMundo Radio TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://pacific.direcnode.com:3353/live/ecuamundotvlive.m3u8',
    cover: 'https://i.imgur.com/EMe5oWn.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fqnpt16',
    title: 'El Radio 9090 FM (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://9090video.mobtada.com/hls/stream.m3u8',
    cover: 'https://www.9090.fm/images/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-r3y3587',
    title: 'El Sol Network TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv.wracanal10.com:3025/live/elsoltvlive.m3u8',
    cover: 'https://i.imgur.com/TIH3zlP.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-22yoi3a',
    title: 'Ellinikos FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtmp.win:3603/live/ellinikosfmlive.m3u8',
    cover: 'https://i.ibb.co/y0ydCNB/unnamed-4.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-g4ddoyc',
    title: 'EnerGeek Radio (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://backend.energeek.cl/webtv/egradioweb/index.m3u8?token=ZZDemoIPTVGH',
    cover: 'https://cdn.energeek.cl/logos/EG-Radio-2025_pfp.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-pwjg7g6',
    title: 'ETV Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cc-szivnms4rlah6.akamaized.net/WWBI/Amagi/ETV_Music_IN/playlist.m3u8',
    cover: 'https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN4900002RV_20250811T033455SQUARE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-v5l8lzs',
    title: 'EU Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://iptv.prosto.tv/ch134/tracks-v2a1/1.m3u8?21yo=1&live=1&ip=104.28.156.59&id=742347&secret=vu2y5m72&ses=ca0cfbf5db9d8003&uid=vu2y5m72&cs_track=false&e=1782900912&st=j-Ja2visdxrjH_8haQZjNg',
    cover: 'https://i.imgur.com/fJdvyrG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7fm60bl',
    title: 'Exclusiv TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ythls.armelin.one/channel/UCXxTnMoETkhNTmsqZc0JMhQ.m3u8',
    cover: 'https://i.imgur.com/xw1IWoO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-s3nez0i',
    title: 'Extra TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streaming.social3.hr/ExtraTVudzdhr5/uUankWqpXD/1.m3u8',
    cover: 'https://i.imgur.com/5edYPBO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9yliwxn',
    title: 'Fabulosa Estéreo 100.5 FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://www.streaming507.net:19360/videofabulosa/videofabulosa.m3u8',
    cover: 'https://i.imgur.com/YFmzkOp.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ria6ryr',
    title: 'Fairuz (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx029/playlist.m3u8',
    cover: 'https://shahid.mbc.net/mediaObject/f809d51c-e83d-43c9-8236-78731c2216ad?type=png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3umbqy7',
    title: 'Falastini TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rp.tactivemedia.com/palestiniantv_source/live/playlist.m3u8',
    cover: 'https://i.imgur.com/6B3Cims.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3ouw7nq',
    title: 'Famatv (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv2.fastcast4u.com:3310/live/famatvlive.m3u8',
    cover: 'https://i.ibb.co/tMmRp18/Fama-TV-cor-whitebg-hotizontal.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xhqbpwr',
    title: 'Fame95 FM (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rjr-fame.akamaized.net/hls/live/2033820/RJR_FAME/master.m3u8',
    cover: 'https://i.imgur.com/n3PUxes.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-md208f3',
    title: 'Finest TV (288p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://media.finest.tv/hls/live.m3u8',
    cover: 'https://i.imgur.com/1uoP10V.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vfbez7e',
    title: 'Flex Studio Radio TV [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live20.bozztv.com/akamaissh101/ssh101/fsradiotv/playlist.m3u8',
    cover: 'https://i.imgur.com/tZjqtxd.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-87dbn9l',
    title: 'FM ITALIA (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream2.xdevel.com/video0s975817-1183/stream/playlist.m3u8',
    cover: 'https://i.imgur.com/54CO2u9.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dsotj3t',
    title: 'FM Mundo (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video2.makrodigital.com/fmmundo/fmmundo/playlist.m3u8',
    cover: 'https://i.imgur.com/1nNnYQO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-pxtinih',
    title: 'Folk TV (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.nasatv.com.mk/folktv/hls/folktv_live.m3u8',
    cover: 'https://i.imgur.com/4b9aZ9P.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hhq4y9k',
    title: 'FOLX Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdne.folxplay.tv/folx-trz/streams/ch-4/master.m3u8',
    cover: 'https://i.imgur.com/ze04puX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9d06ijc',
    title: 'Folx Slovenija (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdne.folxplay.tv/folx-trz/streams/ch-5/master.m3u8',
    cover: 'https://i.imgur.com/RK1IASU.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-p6yemtc',
    title: 'FomixTV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.fomixmedia.nl/FomixTV/video.m3u8',
    cover: 'https://i.imgur.com/7SLYEMG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bg4cj8h',
    title: 'FON Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-01.bonus-tv.ru/tntmusic/playlist.m3u8',
    cover: 'https://i.imgur.com/tXABQDE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-48v31il',
    title: 'Frecuencia Musical TV [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://s2.tvdatta.com:3307/hybrid/play.m3u8',
    cover: 'https://i.imgur.com/vPxvbVv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-n2p48ks',
    title: 'FTV (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream8.cinerama.uz/1018/playlist.m3u8',
    cover: 'https://i.imgur.com/7lpISyN.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qd7up7e',
    title: 'Fuego TV [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamunoapp.com:3553/live/cromtvlive.m3u8',
    cover: 'https://i.imgur.com/T9vWjeB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-loxft5o',
    title: 'Fun Radio',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/funradiofr.m3u8',
    cover: 'https://i.imgur.com/wgxuYsQ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-20ytw8s',
    title: 'FUSION TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://edge20.vedge.infomaniak.com/livecast/ik:fusiontv/manifest.m3u8',
    cover: 'https://i.imgur.com/WMrYEgH.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-20ajlct',
    title: 'Galaxy TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.castr.com/6463248048d6cd3e143655b2/live_43351ad0f3b411ed81c78fcc31887c54/index.fmp4.m3u8',
    cover: 'https://i.imgur.com/P5OABe5.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-loh6rl7',
    title: 'GEM 24B',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gem24b/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/8LgdPst.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7cj9eix',
    title: 'GEM Mifa',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemmifa/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/qlI7o7V.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mu0qkw0',
    title: 'GEM Mifa Plus',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemmifaplus/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/8FIAqR5.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wmyprz8',
    title: 'Gex TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live20.bozztv.com/akamaissh101/ssh101/gextvaccess/playlist.m3u8',
    cover: 'https://gextv.com/LOGO-WHITE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-pe6u3gy',
    title: 'Gigant FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.uitzending.tv:19360/gigantfm/gigantfm.m3u8',
    cover: 'https://i.imgur.com/LwEHfjD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lmzl0uq',
    title: 'GMTV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livechannel.mdc.akamaized.net/stitch/livechannel/1341/master1400000.m3u8;session=live_stream_1341',
    cover: 'https://i.imgur.com/GJYb8c8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9w3wtfw',
    title: 'GO TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rds3.desdeparaguay.net/gotv/gotv/playlist.m3u8',
    cover: 'https://i.ibb.co/jkvYVyz/Captura.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gpj5epl',
    title: 'GugakTV 국악방송 (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mgugaklive.nowcdn.co.kr/gugakvideo/gugakvideo.stream/playlist.m3u8',
    cover: 'https://i.imgur.com/Ey7Htm8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1f6yfdi',
    title: 'HEi Now (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://copacogen.desdeparaguay.net/heitv/heitv_py_alta/playlist.m3u8?admin=nacion',
    cover: 'https://i.imgur.com/oMHiGRN.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rjf6wqq',
    title: 'High Vision (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamer1.connectto.com/HIGHVISION_WEB_1205/index.m3u8',
    cover: 'https://i.imgur.com/zhCgoru.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lmsbu5g',
    title: 'Hitradio O3 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://studiocam-oe3.mdn.ors.at/orf/studiocam_oe3/q6a/manifest.mpd',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Hitradio_%C3%963.svg/960px-Hitradio_%C3%963.svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7k022yr',
    title: 'Hitz TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamer2.nexgen.bz/13-HITZ/index.m3u8',
    cover: 'https://i.imgur.com/SbZgsDh.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-x7v4u28',
    title: 'HMI PROMZ NEWS (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video1.getstreamhosting.com:1936/8326/8326/playlist.m3u8',
    cover: 'https://i.imgur.com/gwPaw3v.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-p7w8s3b',
    title: 'Hype Visual Radio (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streammix.alsolnet.com/hyperadio/live/playlist.m3u8',
    cover: 'https://cdn.onlineradiobox.com/img/fblogo/1/97371.v21.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-n5hkxhq',
    title: 'Identité Télé Caraïbes (548p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vdo2.pro-fhi.net:3769/stream/play.m3u8',
    cover: 'https://i.imgur.com/Atsf6Cd.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fylgs7q',
    title: 'Impact TV Dance (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://online.tvimpact.live/hls/dancetv.m3u8',
    cover: 'https://i.imgur.com/G5mNdpE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-m19dsen',
    title: 'Impact TV Manele (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://online.tvimpact.live/hls/impact_tv.m3u8',
    cover: 'https://i.imgur.com/G5mNdpE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-h0v0jwl',
    title: 'Infinita TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://s2.tvdatta.com:3753/hybrid/play.m3u8',
    cover: 'https://i.imgur.com/1nHxdkR.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kf2frdh',
    title: 'Insync (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumt04.tangotv.in/INSYNC/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Insync.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9fiyv70',
    title: 'IQ Channel (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtmp.info/iqtv/envivo/playlist.m3u8',
    cover: 'https://i.imgur.com/hwuaomt.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6pnxsd0',
    title: 'Italianissimo (360p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vcp.myplaytv.com/italianissimo/italianissimo/playlist.m3u8',
    cover: 'https://i.imgur.com/JCpbUZB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zexek79',
    title: 'iTV Afrobeats Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/afrobeats/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1y4n2v1',
    title: 'iTV Arabic Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/arabic/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2q7fqat',
    title: 'iTV Indian Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/indian/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-o33f76q',
    title: 'iTV Latin Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/latin/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-085e9ae',
    title: 'ITV Persian Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/persian/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ly4he1s',
    title: 'iTV Turkish Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/turkish/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-snj4op9',
    title: 'iTV Urban Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ca1.buximedia.com/itv/love2/tracks-v1a1/mono.m3u8',
    cover: 'https://i.ibb.co/pvLQmQK7/itv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-i6j1iei',
    title: 'Ivoire Channel (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video1.getstreamhosting.com:1936/8244/8244/playlist.m3u8',
    cover: 'https://i.imgur.com/gKbNqQv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-cjaye48',
    title: 'Jazz TV (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.nasatv.com.mk/jazztv/hls/jazztv_live.m3u8',
    cover: 'https://i.imgur.com/CbQlSFX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wf029oh',
    title: 'Jeddah Radio (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.kwikmotion.com/sbrksajeddahradiolive/srpksajeddahradio/chunks.m3u8',
    cover: 'https://aloula.faulio.com/storage/mediagallery/bd/f5/fullhd_527bf54a5adb56ac17f572ac2cd0801304db3baf.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bm4jde6',
    title: 'Joe FM (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dpp-streamlive-plain.medialaancdn.be/joe_kijklive/plain/hls_hd.m3u8',
    cover: 'https://i.ibb.co/k9KJWzN/320px-Joe-radio-logo-2016-svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-e0nq8r3',
    title: 'JooMusic (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livecdn.live247stream.com/joomusic/tv/playlist.m3u8',
    cover: 'https://i.imgur.com/KHuKQQL.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-svbgjqy',
    title: 'Jordan Songs (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://playlist.fasttvcdn.com/pl/cc0blorawy1ibohhrupraa/Song/playlist.m3u8',
    cover: 'https://i.imgur.com/1DE7Gmw.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-jl4q1me',
    title: 'JRTV Järviradio (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamer.radiotaajuus.fi/memfs/47f113bf-04ea-493b-a9d4-52945fd9db31.m3u8',
    cover: 'https://jarviradio.fi/jrtv2/wp-content/uploads/2022/01/jrtv1.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gx4tmxq',
    title: 'Juice TV (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://juicex.nz/hls/mystream.m3u8',
    cover: 'https://i.imgur.com/WaaaW0w.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rzwn6dp',
    title: 'KandelaTV (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamtv.intervenhosting.net:3718/live/kandelamedioslive.m3u8',
    cover: 'https://i.imgur.com/cCFxyIp.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zpzrd1q',
    title: 'Karibena [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live-player.egostreaming.pe/karibenatv_685a-pe-a5676-584412/index.fmp4.m3u8',
    cover: 'https://i.imgur.com/cgHjg1e.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0wi1yhj',
    title: 'Kayhan TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://playout395.livestreamingcdn.com/live/Stream1/playlist.m3u8',
    cover: 'https://i.imgur.com/2MDjU7x.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3e8vl9w',
    title: 'Kiss Kiss Napoli TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://58f12ffd2447a.streamlock.net/KKTVNapoli/livestream/playlist.m3u8',
    cover: 'https://i.imgur.com/RsGiBwE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fdgt8g0',
    title: 'Kiss Kiss TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://58f12ffd2447a.streamlock.net/KKMulti/livestream/playlist.m3u8',
    cover: 'https://i.imgur.com/ja6c2YZ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lnukij4',
    title: 'Kiss TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv.broadcasting.ro/kisstv/a629c031-2170-4ee9-a36d-87a891aa3131.m3u8',
    cover: 'https://i.imgur.com/NKfVymH.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dtgiv6w',
    title: 'Klape i Tambure TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.cmctv.hr:49998/kit/live.m3u8',
    cover: 'https://i.imgur.com/sKj3dgc.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qx3ht8q',
    title: 'KpopTV Play (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://giatv.bozztv.com/giatv/giatv-kpoptvplay/kpoptvplay/playlist.m3u8',
    cover: 'https://i.imgur.com/Tf0vweF.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0pwun97',
    title: 'KRAL Pop TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dogus-live.daioncdn.net/kralpoptv/playlist.m3u8',
    cover: 'https://i.imgur.com/ch365lh.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-eshmx5a',
    title: 'Kronehit (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://bitcdn-kronehit.bitmovin.com/v2/hls/playlist.m3u8',
    cover: 'https://i.imgur.com/dQJQv1X.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4inhm2o',
    title: 'KurdMax Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://6476e46b58f91.streamlock.net/music/MUSIC2402/playlist.m3u8',
    cover: 'https://i.imgur.com/otnIdEu.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-esvl1fl',
    title: 'La 98.1 TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://6019dcac4147f.streamlock.net:9443/la98/Invosa/playlist.m3u8',
    cover: 'https://i.imgur.com/7380kTN.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ff1jhr8',
    title: 'La Cantina Memorias (480p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.xtrematv.com:3208/live/memoriaslacantinalive.m3u8',
    cover: 'https://imgs1.e-droid.net/srv/imgs/seccs/34751741_ico.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4p2nda6',
    title: 'La Fabulosa Radio y TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8004/index.m3u8',
    cover: 'https://i.imgur.com/GjME5H0.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9yl0yko',
    title: 'La Hermandad Salsera (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamlov.alsolnet.com/hermandadsalsera/live/playlist.m3u8',
    cover: 'https://i.imgur.com/7Wlt6bc.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gv0b3ec',
    title: 'La Kalle (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mdstrm.com/live-stream-playlist/58d191f07290fbb058025843.m3u8',
    cover: 'https://www.tdtparatodos.tv/sites/default/files/la_kalle.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-05j64hi',
    title: 'La Mega Mundial',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://server40.servistreaming.com:3477/stream/play.m3u8',
    cover: 'https://i.imgur.com/UdMsgkt.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0uej4om',
    title: 'LA MIA TV (720p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ss2.tvrdomi.com:1936/lamiatv/lamiatv/playlist.m3u8',
    cover: 'https://i.imgur.com/XIwTM1h.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9wtaeyp',
    title: 'La Morada Radio TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://movil.ejeserver.com/live/lamoradatv.m3u8',
    cover: 'https://i.imgur.com/E3wDEX5.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-p71v94o',
    title: 'La Perla Radio TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8068/index.m3u8',
    cover: 'https://i.imgur.com/8wDMgmB.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bwhxvho',
    title: 'La Que Buena Atlanta',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamyes.alsolnet.com/quebuenaatlanta/live/index.m3u8',
    cover: 'https://iili.io/JysD2a4.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3jy911x',
    title: 'La Top 102.9 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59d39900ebfb8.streamlock.net/top102/top102/playlist.m3u8',
    cover: 'https://i.imgur.com/ZqwLPag.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vvfuzeh',
    title: 'La Top 107.7 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59d39900ebfb8.streamlock.net/top107/top107/playlist.m3u8',
    cover: 'https://i.imgur.com/vgHhh1W.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ho8m43o',
    title: 'La Urban TV (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://urbanrevolution.es:8443/live/TV/playlist.m3u8',
    cover: 'https://i.imgur.com/hythjEn.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-c4m3kg8',
    title: 'La Voz del Tropico (480p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ss2.tvrdomi.com:1936/lavozdeltropico/lavozdeltropico/playlist.m3u8',
    cover: 'https://i.imgur.com/DKDFpHt.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-m52t95z',
    title: 'La-X (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.eleden.com/livelax/ngrp:livelax_all/playlist.m3u8',
    cover: 'https://i.imgur.com/i2GnQTq.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-iii63t5',
    title: 'Latin Zone TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn.streamingcpanel.com:3784/live/latinzonetvlive.m3u8',
    cover: 'https://i.imgur.com/duEDsne.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-i6llddw',
    title: 'Lausitzwelle (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://h056.video-stream-hosting.de/easycast11-live/_definst_/mp4:livestreamhd2/playlist.m3u8?ref=',
    cover: 'https://i.imgur.com/4kYF4bK.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wtxnuoc',
    title: 'LaXitosa Panamá (360p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stmvideo2.livecastv.com/lax953/lax953/playlist.m3u8',
    cover: 'https://i.imgur.com/Pt4F9Xz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6gtsl2h',
    title: 'Lingkar TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lingkartv.my.id/hls/lingkartv.m3u8',
    cover: 'https://lingkartv.com/assets/img/logo-square.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-15033e2',
    title: 'LiraTV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloud2.streaminglivehd.com:1936/liratv/liratv/playlist.m3u8',
    cover: 'https://i.imgur.com/hBswXYZ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kgsnc3t',
    title: 'Littoral FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.creacast.com/littoralfm-ch1/stream/playlist.m3u8',
    cover: 'https://i.imgur.com/DCZKAQ1.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dxsqosi',
    title: 'Live99FM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://media.streambrothers.com:1936/8014/8014/playlist.m3u8',
    cover: 'https://i.imgur.com/U43UrQT.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fw81qkr',
    title: 'LiveXLive (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livestream.liveone.com/lc1/p1.m3u8',
    cover: 'https://i.imgur.com/KFzEoed.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-i3l1r5p',
    title: 'Lobo TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5ca3e84a76d30.streamlock.net/tvlobo/videotvlobo/playlist.m3u8',
    cover: 'https://i.imgur.com/3fA50RJ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-blgvjxx',
    title: 'Look Thoong TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livefta.malimarcdn.com/ftaedge00/lookthoongtv.sdp/playlist.m3u8',
    cover: 'https://i.imgur.com/eT7iE34.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bscwlil',
    title: 'Love TV (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.nasatv.com.mk/lovetv/hls/lovetv_live.m3u8',
    cover: 'https://i.imgur.com/B8iaejQ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-clbybf2',
    title: 'LRT Klasika (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream-live.lrt.lt/klasika/master.m3u8',
    cover: 'https://i.imgur.com/Fa8Vhu0.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zdynz60',
    title: 'LRT Opus (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream-live.lrt.lt/opus/master.m3u8',
    cover: 'https://i.imgur.com/oLuZTMH.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3tqgh4h',
    title: 'Luna Estéreo 106.4 FM (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://servervideo.intermediacolombia.com:19360/kychbbfhdz/kychbbfhdz.m3u8',
    cover: 'https://i.imgur.com/cESeD6R.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8e43zaa',
    title: 'M2 (540p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.m2.tv/hls3/stream.m3u8',
    cover: 'https://i.imgur.com/AfcBWCg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wgdo7io',
    title: 'm2o TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S62628868/uhdWBlkC1AoO/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Radio_m2o_-_Logo_2019.svg/500px-Radio_m2o_-_Logo_2019.svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lu17tm9',
    title: 'M6 Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://test.946985.filegear-sg.me/proxy/803c517b325bfafc',
    cover: 'https://upload.wikimedia.org/wikipedia/en/c/c9/M6_Music_%282012%29.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-g3dcam9',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",M+ (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/m-plus/master.m3u8?ads.vf=99_BajuDhjC',
    cover: 'https://i.imgur.com/Ho8N310.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ckcbxty',
    title: 'M-1 (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://m-1.data.lt/m-1/smil:m-1.smil/playlist.m3u8',
    cover: 'https://i.ibb.co/gb4NmNHT/M1-2025.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-p0fpiiq',
    title: 'Madras FM TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://edge12.vedge.infomaniak.com/livecast/ik:madrasfmtv/manifest.m3u8',
    cover: 'https://i.imgur.com/spGg1CZ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5aeyhut',
    title: 'Magenta Musik 360 (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streaming.magentamusik.de/csm/573870/magentamusik1/index.m3u8',
    cover: 'https://i.imgur.com/R74gG7U.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-pi09i46',
    title: 'Magic TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://bss1.neterra.tv/magictv/magictv.m3u8',
    cover: 'https://i.imgur.com/n7bcrrp.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-l56uux3',
    title: 'Magic TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv.broadcasting.ro/magictv/925f90db-5c88-4190-a53d-5163cdffe6f4.m3u8',
    cover: 'https://i.imgur.com/9izrr4d.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-69fuce7',
    title: 'Maimon TV Canal 3 (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tele-stream.telecasa.net/live/st3/maimontv-hd/index.m3u8',
    cover: 'https://i.imgur.com/twldaaC.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-oag4f7w',
    title: 'Majid Al Mohandis (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx019/playlist.m3u8',
    cover: 'https://i.discogs.com/Fk9Bm8gTYJYeVXIJKX-EOGmYQ90sVQPtkIW5ZK4fydo/rs:fit/g:sm/q:90/h:372/w:412/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9MLTE2OTY4/MzMtMTU2ODk0NjI5/MC01Njk2LmpwZWc.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-00543vq',
    title: 'Makao TV (360p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.obslivestream.com/makaomux/tracks-v2a1/playlist.m3u8',
    cover: 'https://i.imgur.com/asD5y7i.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-iku6ows',
    title: 'Marina TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ffs.gulfsat.com/Marina-TV-HD/index.m3u8',
    cover: 'https://i.imgur.com/F2PzEaw.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mq87nn6',
    title: 'Más FM 95.9 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vivo.solumedia.com:19360/masfm/masfm.m3u8',
    cover: 'https://i.imgur.com/TJ4gWQM.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-jfunbv9',
    title: 'MasMusica FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://movil.ejeserver.com/live/masmusica.m3u8',
    cover: 'https://i.imgur.com/tCg7owd.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4gysxi1',
    title: 'Mastiii (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumt02.tangotv.in/MASTIII/index.m3u8',
    cover: 'https://i.imgur.com/lxgXHx4.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-pbdaef9',
    title: 'Max Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.maxtn.in/maxmusic/maxmusic/index.m3u8',
    cover: 'https://livetv.ashokadigital.net/upload/logo/1732168750_WhatsApp%20Image%202024-11-21%20at%2011.05.55%20AM%20(1).jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mybsh1j',
    title: 'Max TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamer2.nexgen.bz/14-MAX/index.m3u8',
    cover: 'https://i.imgur.com/TF4snV6.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5ndhelp',
    title: 'MBC America (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-us-east-prod-ingest-infra-dacast-com.akamaized.net/624ff8f9-db18-da92-4d42-896fa2ff3eb3/source/index.m3u8',
    cover: 'https://i.imgur.com/RRc23ra.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1u8lbpt',
    title: 'MBC FM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dbbv9umqcd7cs.cloudfront.net/out/v1/db15b75c3cc0400c91961468d6a232ac/index.m3u8',
    cover: 'https://i.imgur.com/lF8UxvR.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zmf94gz',
    title: 'MBC Mood (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-mood/78367bf48ccdba501d0d014a10c21031/index.m3u8',
    cover: 'https://shahid.mbc.net/mediaObject/c2b6a882-458b-446e-b0fe-f97f7992149a?height=auto&width=144&croppingPoint=&version=1&type=png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ygejqkh',
    title: 'MBC Mood (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://shd-gcp-live.edgenextcdn.net/live/bitmovin-wanasah/13e82ea6232fa647c43b26e8a41f173d/index.m3u8',
    cover: 'https://shahid.mbc.net/mediaObject/c2b6a882-458b-446e-b0fe-f97f7992149a?height=auto&width=144&croppingPoint=&version=1&type=png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nhoioy7',
    title: 'MCN6 Music Channel (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d18fcxaqfnwjhj.cloudfront.net/CDN_Ingest/MCN6_MUSIC.smil/Playlist.m3u8',
    cover: 'https://i.imgur.com/j6IiysJ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-euuhjcr',
    title: 'MegaBox (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hdbox.chunklistv.com/live?stream=megabox',
    cover: 'https://i.imgur.com/JqaW7Ei.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-n35f91d',
    title: 'Melody (288p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/radiokaraoke.m3u8',
    cover: 'https://i.imgur.com/9GVyQ6x.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-y7dolbj',
    title: 'Melody FM Jordan (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn3.wowza.com/1/OVRrOWxXUEswS2Yv/eGVxSWZy/hls/live/playlist.m3u8',
    cover: 'https://i.imgur.com/J8omcNz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-oouen63',
    title: 'Memorias del Corazon (480p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.xtrematv.com:3401/live/grupomemoriaslive.m3u8',
    cover: 'https://i.imgur.com/sVLDzzM.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-a1zor5h',
    title: 'Memorias FM Pop Latino (480p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.xtrematv.com:3891/live/memoriaspoplatinolive.m3u8',
    cover: 'https://imgs1.e-droid.net/srv/imgs/seccs/34751581_ico.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-waqvmp4',
    title: 'Memorias TV Classic (480p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.xtrematv.com:3576/live/memoriasclassiclive.m3u8',
    cover: 'https://i.imgur.com/tLTQLnv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-whzqnyt',
    title: 'Memorias TV Tropical (480p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.xtrematv.com:3361/live/memoriastropicallive.m3u8',
    cover: 'https://i.imgur.com/Y9GFDcV.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kwsr3rb',
    title: 'Metaleitor TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vs20.live.opencaster.com/metaleitortv_423d3342/index.m3u8',
    cover: 'https://new.opencaster.com/uploads/logos/logo_14_1752798826.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-d6mx859',
    title: 'Metropoli Medios TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8214/index.m3u8',
    cover: 'https://i.imgur.com/yID5T2S.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qd8b7gy',
    title: 'Mezzo (1080p) [Geo-Blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://viamotionhsi.netplus.ch/live/eds/mezzo/browser-HLS8/mezzo.m3u8',
    cover: 'https://i.imgur.com/auNdGeW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-jdwz918',
    title: 'Mezzo Live',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://test.946985.filegear-sg.me/proxy/749755700e4ed9c6',
    cover: 'https://i.imgur.com/H9ytKPN.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-73iead0',
    title: 'mfm (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hms.pfs.gdn/hms/v1/broadcast/hlmvmp2hfriode891/playlist.m3u8',
    cover: 'https://www.mtv.com.lb/images/header/mfm-logo.svg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-n5u52fx',
    title: 'Mh 1 Music (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumt04.tangotv.in/MHONE/index.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143539_ld_h15_aa.png?lock=720x540',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-h5f231s',
    title: 'Mi Gente TV (720p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://byecableiptvnew3.ddns.net/ENVIVOMIGENTE/video.m3u8',
    cover: 'https://i.imgur.com/CSbmQlu.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-sg6gw25',
    title: 'Miel TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://7.innovatestream.pe:19360/mieltv/mieltv.m3u8',
    cover: 'https://i.imgur.com/dPSFrCs.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-cnpdp6n',
    title: 'MNM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live-radio-cf-vrt.akamaized.net/groupa/live/bac277a1-306d-44a0-8e2e-e5b9c07fa270/live.isml/.m3u8',
    cover: 'https://i.imgur.com/L4cD18H.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9t1277n',
    title: 'Mohammed Abdo (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d2ow8h651gs7dx.cloudfront.net/out/v1/371fb663da604e659a2fb99bf89d92d4/index.m3u8',
    cover: 'https://assets.mbcmood.com/channels/1720184012Mohammed%20Abdo%20banner.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-tmf3u6l',
    title: 'Mooz Dance',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtmp.digitalbroadcast.ro/moozdance/moozdance.m3u8',
    cover: 'https://i.imgur.com/aX70RD2.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-iasbc6l',
    title: 'Mooz Hits',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtmp.digitalbroadcast.ro/moozhits/moozhits.m3u8',
    cover: 'https://i.imgur.com/GwATd3Y.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-tw00x9g',
    title: 'Mooz Ro!',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rtmp.digitalbroadcast.ro/moozro/moozro.m3u8',
    cover: 'https://i.imgur.com/Ft24x5T.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lmxyd5m',
    title: 'Mosaique FM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://webcam.mosaiquefm.net/mosatv/_definst_/studio/playlist.m3u8?DVR',
    cover: 'https://i.imgur.com/GDUykah.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6vzzemd',
    title: 'Mouv\' TV (288p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/mouv.m3u8',
    cover: 'https://i.imgur.com/64nzKEu.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-60gzxct',
    title: 'Music Box Polska [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vs2133.vcdn.biz/0f0f85e2ea3607b5c396ef68d55c3168_megogo/live/hls/b/4000/u_sid/0/o/156751011/rsid/062147ff-ed0c-4d9c-a131-2bf42026e640/u_uid/0/u_vod/1/u_device/embed_all/u_devicekey/_embed_web/lip/57.128.235.172*asn/type.live/playlist.m3u8',
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyN14NgigtUnImvVp9DqgbKY5c9Nsl-EqLkPX7PzYcl924yK77GycmSj2E&s=10',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xvgfwbs',
    title: 'Music India (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-2.pishow.tv/live/226/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143563_ld_h15_aa.png?lock=720x540',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wx4s6hb',
    title: 'Music Information Channel (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mic.siar.us/mic/live/mic.m3u8',
    cover: 'https://i.imgur.com/OUPGCWG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-oad1vd3',
    title: 'Music TV Granada (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8032/index.m3u8',
    cover: 'https://i.ibb.co/Swd9NP7n/music-tv-granada.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-cloufe7',
    title: 'MusicTop (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream-gtlc.telecentro.net.ar/hls/musictophls/0/playlist.m3u8',
    cover: 'https://cdn.mitvstatic.com/channels/ar_musictop_m.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-y15514w',
    title: 'Muzangala TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5cf4a2c2512a2.streamlock.net/tvmuzangala/tvmuzangala/playlist.m3u8',
    cover: 'https://i.imgur.com/fBeaJoS.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-d7h004x',
    title: 'Muzvar (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn15.live-tv.cloud/ua_infinitas_tv/muzvar-abr/playlist.m3u8',
    cover: 'https://i.imgur.com/Klu5k9U.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0ctioah',
    title: 'MuzzOne',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streams.adapto.kz/hls/live/muzzone/main_stream.m3u8',
    cover: 'https://i.imgur.com/nHVABXh.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ndv76au',
    title: 'My Gospel TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamtv.cmediahosthosting.net:3046/live/mygospeltvlive.m3u8',
    cover: 'https://mygospeltv.fr/wp-content/uploads/2022/05/MY-GODPEL-TV-e1652783900988.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-sl5c80b',
    title: 'Nande Portetepe TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.hostingcaaguazu.com:19360/nandeportetepe/nandeportetepe.m3u8',
    cover: 'https://i.imgur.com/3taT6JK.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xsdjxno',
    title: 'Navahang TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls.navahang.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/YteKXJy.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-49dfthr',
    title: 'NEW KPOP (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ads.its-newid.net/api/manifest.m3u8?tp=samsung_tvplus&channel_id=newid_086&ads.service_id=GB17000088V',
    cover: 'https://i.imgur.com/B7ILXMc.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-uqw6maw',
    title: 'Next HD (480p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.enhdtv.com:19360/nexthd/nexthd.m3u8',
    cover: 'https://i.imgur.com/c2rF3SS.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-c1auhd9',
    title: 'Nidae AlIslam Radio (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.kwikmotion.com/sbrksanedaradiolive/srpksanedaradio/playlist.m3u8',
    cover: 'https://aloula.faulio.com/storage/mediagallery/0f/c5/fullhd_5da380cdfc304fd7d4672a83aeb6c62bc1d3d3e8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-j8ts4qd',
    title: 'NogoumFMTV (672p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://nogoumtv.nrpstream.com/hls/stream.m3u8',
    cover: 'https://i.imgur.com/krp3kgv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-u4q5zg3',
    title: 'Noroc TV (576p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.noroc.tv/noroc/noroc.m3u8',
    cover: 'https://i.imgur.com/XvYqpqG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-yks62fx',
    title: 'NOW 70s (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lightning-now70s-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-lightning-now70s-rakuten/CDN/playlist.m3u8',
    cover: 'https://i.imgur.com/qiCCX5X.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-y3towr1',
    title: 'Now 70s (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lightningnow70-samsungau.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/qiCCX5X.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-u9z7tby',
    title: 'NOW 80s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lightning-now80s-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-lightning-now80s-rakuten/CDN/playlist.m3u8',
    cover: 'https://i.imgur.com/YyPnMeB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kl49uvm',
    title: 'Now 80s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lightningnow80-samsungau.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/YyPnMeB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8kpr5il',
    title: 'NOW 90s00s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg01076-amg01076c19-rakuten-gb-8653.playouts.now.amagi.tv/playlist/amg01076-lightning-now90s00s-rakutengb/playlist.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-pphv1jr',
    title: 'NOW Rock (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lightning-now90s-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-lightning-now90s-rakuten/CDN/playlist.m3u8',
    cover: 'https://i.imgur.com/GuM4GnX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9urjxhi',
    title: 'NOW Rock (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lightning-now90s-samsungnz.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/GuM4GnX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-l18c59b',
    title: 'Now TV 102.3FM Edmonton (CKNO-FM) (616p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://videostream.jpbgdigital.com/NOWTV.m3u8',
    cover: 'https://i.imgur.com/sF2g7KE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-20wx5k9',
    title: 'NPC Rádio e TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stmv5.samcast.com.br/nasciparacantartv/nasciparacantartv/playlist.m3u8',
    cover: 'https://i.imgur.com/mw1lYWE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-z3ft8nh',
    title: 'NRJ Hits',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://test.946985.filegear-sg.me/proxy/a23981548880f405',
    cover: 'https://i.imgur.com/2xDVwOh.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rg40bq8',
    title: 'Nueva Vida TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.nuevavidafm.net:3937/live/nuevavidalive.m3u8',
    cover: 'https://i.ibb.co/3mbZWyN/nav-Bar-title-Image-iphone6plus.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-b01dshy',
    title: 'Number 1 Ask (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e18f9cea15_1/playlist.m3u8',
    cover: 'https://i.imgur.com/slwbux7.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dgsp089',
    title: 'Number 1 Damar (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e198784bdc_1/playlist.m3u8',
    cover: 'https://i.imgur.com/rYtbAGZ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ja8liad',
    title: 'Number 1 Dance (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e2aa8acf44_1/playlist.m3u8',
    cover: 'https://i.imgur.com/ZM4PSyq.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lpzfpia',
    title: 'Number 1 Türk (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mn-nl.mncdn.com/blutv_nr1turk2/live.m3u8',
    cover: 'https://i.imgur.com/18zjk3q.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lxgzasp',
    title: 'Number 1 TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/broadcast_5c9e17cd59e8b.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/02cDIBi.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-69bxk1t',
    title: 'Óčko (540p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ocko-live-dash.ssl.cdn.cra.cz/cra_live2/ocko.stream.1.smil/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/%C3%93%C4%8Dko_logo_2012.png/960px-%C3%93%C4%8Dko_logo_2012.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-99zl3b1',
    title: 'Óčko Expres (540p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ocko-live.ssl.cdn.cra.cz/channels/ocko_expres/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/%C3%93%C4%8Dko_Expres_logo.png/960px-%C3%93%C4%8Dko_Expres_logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-h50din0',
    title: 'Óčko Gold (540p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ocko-live.ssl.cdn.cra.cz/channels/ocko_gold/playlist.m3u8',
    cover: 'https://i.imgur.com/nrWNyLc.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rfj7i2k',
    title: 'ON FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5ce9406b73c33.streamlock.net/ONFM/livestream/playlist.m3u8',
    cover: 'https://onfmwordpressfiles.ams3.digitaloceanspaces.com/wp-content/uploads/2023/03/17130121/logo-on-fm.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mmfw41v',
    title: 'Onda 15 TV (224p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8034/index.m3u8',
    cover: 'https://i.imgur.com/mUrZz9O.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gnfd0km',
    title: 'Onda Valencia (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8116/index.m3u8',
    cover: 'https://i.imgur.com/6HxLUQd.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3e3982x',
    title: 'Ondambiental TV (360p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stmv4.voxtvhd.com.br/ondastereo/ondastereo/playlist.m3u8',
    cover: 'https://i.imgur.com/u5804Au.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9e82mkh',
    title: 'ONE1 Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdne.folxplay.tv/folx-trz/streams/ch-3/master.m3u8',
    cover: 'https://i.imgur.com/dLgoKJ0.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2sp18vh',
    title: 'One Adria (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdne.folxplay.tv/folx-trz/streams/ch-6/master.m3u8',
    cover: 'https://i.imgur.com/NYkMamU.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hsehqc5',
    title: 'One TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hms.pfs.gdn/v1/broadcast/one/playlist.m3u8',
    cover: 'https://i.imgur.com/O4DuR9G.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ui1arsw',
    title: 'OneFM (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hms.pfs.gdn/v1/broadcast/onefm/playlist.m3u8',
    cover: 'https://i.ibb.co/Vp2G9wTz/onefmlb.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-sqsz351',
    title: 'Online TV Nusantara (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5bf7b725107e5.streamlock.net/onlinetvnusantara/onlinetvnusantara/playlist.m3u8',
    cover: 'https://i.imgur.com/E9CCIpP.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-517rqc2',
    title: 'Orange Bangla TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-4.pishow.tv/live/1499/master.m3u8',
    cover: 'https://i.imgur.com/wjSaHj5.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7q7jmx4',
    title: 'Orbita Chile TV (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://orbitachiletv.org/hls/0/stream.m3u8',
    cover: 'https://i.imgur.com/gbNh79Z.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-d22dd6s',
    title: 'Oxigeno TV (360p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vcp.myplaytv.com/oxigenotv/oxigenotv/playlist.m3u8',
    cover: 'https://i.imgur.com/n3PweBQ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7xtpnvq',
    title: 'P2M TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vdo2.pro-fhi.net:3207/stream/play.m3u8',
    cover: 'https://i.imgur.com/TrecSeG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2orsql6',
    title: 'Panik TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livetv.streams.ovh:1936/paniktv/paniktv/playlist.m3u8',
    cover: 'https://i.imgur.com/13C3CPr.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5l8m8y7',
    title: 'Panorama FM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d6izdil55uftn.cloudfront.net/out/v1/0a06d1d6377c47edbd48721ed724bd08/index.m3u8',
    cover: 'https://i.imgur.com/JkDD3bK.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xneuq75',
    title: 'Parranda Vallenata (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://backupmaxmedia.hvmultiplay.com/hls/stream3/parrandavallenata.m3u8',
    cover: 'https://i.imgur.com/BzBX7Qx.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5u8mw0p',
    title: 'Peppers TV (751p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-2.pishow.tv/live/1383/master.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Peppers_TV.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rh6sbuv',
    title: 'Pequeradio (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://canadaremar2.todostreaming.es/live/peque-pequetv.m3u8',
    cover: 'https://i.imgur.com/BNqZwxS.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9wi9ngs',
    title: 'Persiana Folk',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://sonhls.persiana.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ra6sjr0',
    title: 'Persiana Music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://musichls.persiana.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-tooezhd',
    title: 'Persiana Nostalgia',
    author: 'Ретро / Класика',
    type: 'video',
    url: 'https://noshls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/SWO9CKA.png',
    description: '24/7 Ретро / Класика Stream',
    category: 'Ретро / Класика'
  },
  {
    id: 'vid-giltmq1',
    title: 'Persiana Vibe',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://raphls.persiana.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-i9r3vxp',
    title: 'PJ Digital Radio TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vdo1.panelstreaming.live:3363/hybrid/play.m3u8',
    cover: 'https://i.imgur.com/m92oDuB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7ao5pjn',
    title: 'Planet 100.9 FM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamlov.alsolnet.com/planet1009fm/live/playlist.m3u8',
    cover: 'https://i.imgur.com/8ZIBs8l.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0671dby',
    title: 'PMC',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://pmchls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/AbrHI7K.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-m8gtatb',
    title: 'PMC Royale (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://pmcrohls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4jds65f',
    title: 'POP World TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://janus.xpbroadcasting.com:8443/hls/popworld.m3u8',
    cover: 'https://i.imgur.com/LQB6G3s.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gdh37jy',
    title: 'Power 101.7 FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vcp11.myplaytv.com/powerfm/powerfm/playlist.m3u8',
    cover: 'https://i.imgur.com/bkQrXjB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dpigmfv',
    title: 'Power Dance (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livetv.powerapp.com.tr/dance/dance.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/QpPteBO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-r9pyrxx',
    title: 'Power Hit Radio (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdnlb.tvplayhome.lt/live/eds/PWR_LTU_Live/GO3_LIVE_HLS/PWR_LTU_Live.m3u8?cdntoken=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDczNDU2NjEsInBhdGgiOiIvbGl2ZS9lZHMvUFdSX0xUVV9MaXZlL0dPM19MSVZFX0hMUy8iLCJzaXAiOiI3Mi4xMS4xNTcuMTEyIiwiZGV2aWNlX2lkIjoiMCIsInNlc3Npb25faWQiOiIwIiwiY2xpZW50X2lkIjoiMCJ9.oHc5wUgwNPQ-4P7wJy_WvWQh0muFg9Lprhc4STS3cUHi0FI4tAKGdZOOeE-dOhVBHKFUYETmoXSMrrVHOeLC3g',
    cover: 'https://i.imgur.com/GOlQbfC.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-eibd8mt',
    title: 'Power Love (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livetv.powerapp.com.tr/plove/love.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/0RzUswR.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hdhtod7',
    title: 'Power Türk Akustik (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livetv.powerapp.com.tr/pturkakustik/akustik.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/driabBO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-o5ytss3',
    title: 'Power Türk Slow (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livetv.powerapp.com.tr/pturkslow/slow.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/tQSoQXW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3i5qyul',
    title: 'Power Türk Taptaze (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livetv.powerapp.com.tr/pturktaptaze/taptaze.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/a5nW3HU.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8pgsiio',
    title: 'Prambors',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://indihuy.streamized.net/atm/DASH/pramborstv/manifest.mpd',
    cover: 'https://images.maxstream.tv/sites/default/files/entry/0_e59etfmm/landscape_carousel_xxhdpi.webp',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-p0pf3qt',
    title: 'Prattel TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vs20.live.opencaster.com/prattelpe_a2b8d350/index.m3u8',
    cover: 'https://new.opencaster.com/uploads/logos/logo_244_1761928734.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5gxje6q',
    title: 'PRIDEtv LATAM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://backend.energeek.cl/webtv/pridetvweb/index.m3u8?token=ZZDemoIPTVGH',
    cover: 'https://neotv.cl/img/pridetv-512.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kq7g5l8',
    title: 'PTC Chakde (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/449/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PTC_CHAKDE/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wog54da',
    title: 'PTC Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d2lk5u59tns74c.cloudfront.net/out/v1/f913cf893c594f73b114216e74a2efbc/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PTC_MUSIC/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ie8czyh',
    title: 'Public Music (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-3.pishow.tv/live/441/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PUBLIC_MUSIC/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-cxnght6',
    title: 'Punjabi Hits (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.ottlive.co.in/punjabihits/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PUNJABI_HITS/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-u7ylwzm',
    title: 'Q-Music (Belgium) (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live-video.dpgmedia.net/e087512ad0c32643/out/v1/82d59bbe343b4d0896f829c59da82dc0/index.m3u8',
    cover: 'https://i.imgur.com/VX5e9Xt.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-cz83bhs',
    title: 'Qello Concerts by Stingray (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883052',
    cover: 'https://i.imgur.com/IRyFTWq.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fdoyxif',
    title: 'Qello Concerts by Stingray (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/qello-qello001-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/IRyFTWq.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0ddnspm',
    title: 'Qmusic (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.qmusic.nl/qmusic/videohls.m3u8',
    cover: 'https://i.imgur.com/fMTuqDu.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1b9wzfd',
    title: 'Qwest TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://qwestjazz-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-qwestjazz-rakuten/CDN/master.m3u8',
    cover: 'https://i.imgur.com/DjgNNHK.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dy8ymsw',
    title: 'Qwest TV Jazz & Beyond (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://samsungau-qwestjazz-samsungtv-zw2jc.amagi.tv/playlist/samsungau-qwestjazz-samsungtv/playlist.m3u8',
    cover: 'https://i.imgur.com/89yWH5L.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0ev005y',
    title: 'Rabeh Saqer (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx004/playlist.m3u8',
    cover: 'https://shahid.mbc.net/mediaObject/b98b0635-c8ed-4a7c-9efa-5856e278f54b?type=png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-e21gp1n',
    title: 'Radio 21 TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.creacast.com/radio21/smil:radio21.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/u8OhwI1.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-g5edv3d',
    title: 'Radio Alegria 98.5 FM (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.compuwebecuador.com:3880/stream/play.m3u8',
    cover: 'https://i.imgur.com/N00aS3x.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-q3z5bky',
    title: 'Radio Bonita 106.7 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8154/index.m3u8',
    cover: 'https://i.imgur.com/IvZtqyz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-78w7r2j',
    title: 'Radio Capital TiVu (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S35394734/Z6U2wGoDYANk/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/it/3/38/Radio_Capital_logo_%282020%29.svg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-m2c149r',
    title: 'Radio Carnaval TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8116/index.m3u8',
    cover: 'https://i.imgur.com/cdpbkSo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-c0tj9el',
    title: 'Radio Ciudad 98.9 FM TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.wilohosting.com:19360/radiociudadtv/radiociudadtv.m3u8',
    cover: 'https://i.imgur.com/LaSLZwR.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-agmb0o8',
    title: 'Radio Conexion Web TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tuvideoonline.com.ar:3391/live/radioconexionlive.m3u8',
    cover: 'https://i.imgur.com/pXS38zo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6le0u65',
    title: 'Radio Contact (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://contact-live-hls.akamaized.net/hls/live/2038650/CONTACT-Live-HLS/master.m3u8',
    cover: 'https://i.imgur.com/32mmGvB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6alphl3',
    title: 'Radio Cuenca Estéreo (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8074/index.m3u8',
    cover: 'https://i.imgur.com/qZzSOeU.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nce8cvx',
    title: 'RADIO DISCOunt TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://585b674743bbb.streamlock.net/9030/9030/playlist.m3u8',
    cover: 'https://i.imgur.com/ScNYMmx.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-61eflhh',
    title: 'Radio Freccia TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S3160845/0tuSetc8UFkF/playlist_video.m3u8',
    cover: 'https://i.imgur.com/RxeRlar.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-95lsrdj',
    title: 'Radio Fx Net (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamlov.alsolnet.com/radiofxnet/live/playlist.m3u8',
    cover: 'https://radiofxnet.ro/wp-content/uploads/2021/03/cropped-cropped-cropped-cropped-Radio_FX_Net_logo-1-1.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zedcao6',
    title: 'Radio Hit FM TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://peer2.tdiradio.com/static/streaming-playlists/hls/bab99862-ec1c-474f-9a02-4f8c8677d565/0.m3u8',
    cover: 'https://i.imgur.com/gP2OT4S.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-v2c9zo1',
    title: 'Radio Ideal 104.7 FM (La Esperanza) (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://www.idealfm104-7.com/hls/0/stream.m3u8',
    cover: 'https://i.imgur.com/chPfoOs.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-w2uz8ti',
    title: 'Radio Imagen 105.1 FM (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streaming.imagenfm105-1.com/hls/stream.m3u8',
    cover: 'https://i.ibb.co/C9zjz9p/343159606-190989583743350-3489987129696505785-n.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5ak2d6e',
    title: 'Radio Italia Trend (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg00745-radioitailaspa-radioitalia-rakuten-sucsc.amagi.tv/hls/amagi_hls_data_rakutenAA-radioitalia-rakuten/CDN/master.m3u8',
    cover: 'https://i.imgur.com/HNrKqGM.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gghd6tm',
    title: 'Radio Javan TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rjtvhls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/a1zuW2C.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5tmn45y',
    title: 'Radio JND (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://radiojnd.cdn.hostin.cc/radiojnd/playlist.m3u8',
    cover: 'https://i.imgur.com/nyVlZeL.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-js5njk4',
    title: 'Radio Karaoke (288p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/radiokaraoke-2.m3u8',
    cover: 'https://i.imgur.com/9uRggjD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dulw6oq',
    title: 'Radio Karolina TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://peer2.tdiradio.com/static/streaming-playlists/hls/4207de1d-52e8-4591-ad9e-218069b864d1/0.m3u8',
    cover: 'https://i.imgur.com/g2HpLX1.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-iikz8y0',
    title: 'Radio Lola (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://peer2.tdiradio.com/static/streaming-playlists/hls/7c3ea8d3-49dc-4e1b-8b1e-dc6fab71f5cf/0.m3u8',
    cover: 'https://i.imgur.com/41eE8fl.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5m8v6md',
    title: 'Radio Master (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://videoserver.tmcreativos.com:19360/radiomaster/radiomaster.m3u8',
    cover: 'https://i.imgur.com/AUoxyzP.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1jgmemr',
    title: 'Radio Monumental TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloud37.ecuatel.com/monumentaltv/live/manifest.m3u8',
    cover: 'https://i.imgur.com/a97MaV2.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-98u9094',
    title: 'Radio Piter Pan TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://58d921499d3d3.streamlock.net/RadioPiterpanTV/livestream/playlist.m3u8',
    cover: 'https://i.imgur.com/hbqVWV4.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qumaq62',
    title: 'Radio RAM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://1888165924.rsc.cdn77.org/live/RadioRAM/playlist.m3u8',
    cover: 'https://i.ibb.co/LXbchP5q/logo-1.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-63347l5',
    title: 'Radio Realpolitik (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vivo.solumedia.com:19360/realpolitik/realpolitik.m3u8',
    cover: 'https://i.imgur.com/L9KCdTX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-w8vxe0t',
    title: 'Radio San Cristobal 88.7 FM',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video.wilohosting.com:19360/sancristobalfm/sancristobalfm.m3u8',
    cover: 'https://i.imgur.com/zaJhBdj.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1752m5k',
    title: 'Radio Stad den Haag (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rsdh.cloud-streams.com/rsdh/rsdh/playlist.m3u8',
    cover: 'https://i.imgur.com/ANK36EQ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5zttmza',
    title: 'Radio Suyai TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://signal.suyaitv.cl/live/26/playlist.m3u8?password=9PcdCnFxUe&username=ZZDemoIPTVGH',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-w12ofl9',
    title: 'Radio SWH TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://00ff00.latnet.media/edge/swh_tv.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/cFrNsXn.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xz62l1z',
    title: 'Radio Télé Hit (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59d39900ebfb8.streamlock.net/RadioTelehit/RadioTelehit/playlist.m3u8',
    cover: 'https://i.ibb.co/Gt2QDgf/cropped-transparent2-103x70.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4li9ytb',
    title: 'Radio Télé Kajou (480p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59d39900ebfb8.streamlock.net/RadioTelekAJOU/RadioTelekAJOU/playlist.m3u8',
    cover: 'https://i.ibb.co/1MhvJ3B/logork.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wz9zx9p',
    title: 'Radio Tropical Tarapoto (480p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://videoserver.tmcreativos.com:19360/raditropical/raditropical.m3u8',
    cover: 'https://i.imgur.com/TBPVOBI.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dd0v8r4',
    title: 'Radio TV Sal One (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lon.rtsp.me/r3ZnG6WN2HIRxPARhAirIQ/1713628621/hls/9QdykDAy.m3u8',
    cover: 'https://i.imgur.com/pCz7ifY.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fmift6v',
    title: 'Radio TV Tendencias (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://s1.tvdatta.com:3950/multi_web/play.m3u8',
    cover: 'https://i.imgur.com/tsdrrV9.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-leuii1s',
    title: 'Radio U TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://1826200335.rsc.cdn77.org/1826200335/index.m3u8',
    cover: 'https://i.imgur.com/HjZpC1V.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-06fl71i',
    title: 'Radio Weser TV Bremen (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5857499ee635b.streamlock.net/radiowesertv-live/_definst_/mp4:livestreamTV/playlist.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hg6ceh0',
    title: 'Radio Zeta TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S9346184/XEx1LqlYbNic/playlist_video.m3u8',
    cover: 'https://i.imgur.com/K2xLMin.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hswi88s',
    title: 'RadioNL TV (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.radionl.tv/radionltv/radionltv/playlist.m3u8',
    cover: 'https://i.imgur.com/TVaMJYB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kjukddb',
    title: 'Raj Musix Kannada (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumt01.tangotv.in/RAJMUSIXKANDA/index.m3u8',
    cover: 'https://i.imgur.com/z7fhhyX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-l8j1fhl',
    title: 'Raj Musix Malayalam (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumt04.tangotv.in/RAJMUSIXMALAYALAM/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_RAJ_MUSIX_MALAYALAM/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5pyjaio',
    title: 'Raj Musix Tamil (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livestream.rajtv.tv/hlslive/Admin/px08241087/live/Raj_Musix/master_1.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_RAJ_MUSIX_TAMIL/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-r1ixqat',
    title: 'Raj Musix Telugu (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/1213/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_RAJ_MUSIX_TELUGU/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ssj65o1',
    title: 'Rararadio (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://58c04fb1d143f.streamlock.net/rararadio/rararadio/playlist.m3u8',
    cover: 'https://i.imgur.com/vTpfxUG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-66lit3a',
    title: 'Rashid AlMajed (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dphwv2ufgnfsq.cloudfront.net/out/v1/59cd80dfe93a479eb8b4d79bc6f225ca/index.m3u8',
    cover: 'https://assets.mbcmood.com/channels/1720177618Rashid%20AlMajed.webp',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5h53pvv',
    title: 'RC Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://view.rcserver.in/tmp_hls2/stream/index.m3u8',
    cover: 'https://rctv.in/logo_s.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-c55bnv0',
    title: 'RedMusic (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://fr.crystalweb.net:1936/redmusic/redmusic/playlist.m3u8',
    cover: 'https://i.ibb.co/1Lk8P1x/1-150x150.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-t3455a3',
    title: 'Retro Music Television (360p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.mediawork.cz/retrotv/retrotvHQ1/playlist.m3u8',
    cover: 'https://i.imgur.com/pyOjdZs.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wy6pz0a',
    title: 'Retro Plus 2 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tls-cl.cdnz.cl/retroplustvuno/live/playlist.m3u8',
    cover: 'https://i.imgur.com/5G5kian.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-05ncaa9',
    title: 'Reyali (614p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu1.servers10.com:8081/8090/index.m3u8',
    cover: 'https://i.imgur.com/YmFjnsF.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-yzz8ynm',
    title: 'RFPtv (360p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video03.logicahost.com.br/rfptv/rfptv/playlist.m3u8',
    cover: 'https://i.imgur.com/I60nQuR.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bcwjfsg',
    title: 'RHT Guadeloupe (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://edge12.vedge.infomaniak.com/livecast/ik:livehautetension/manifest.m3u8',
    cover: 'https://i.imgur.com/hQ0Q6nE.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-pf0bils',
    title: 'Rock TV (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.nasatv.com.mk/rocktv/hls/rocktv_live.m3u8',
    cover: 'https://i.imgur.com/Y9miDQo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8p8emrj',
    title: 'Rock TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv.broadcasting.ro/rocktv/85c83a80-4f71-4f2d-a8d6-43f676896bcb.m3u8',
    cover: 'https://i.imgur.com/VB88A5V.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-brezps0',
    title: 'Rotana Khalijia (1080p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rotana.hibridcdn.net/rotananet/khaleejiya_net-7Y83PP5adWixDF93/playlist.m3u8',
    cover: 'https://i.imgur.com/6HMluzv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gjv5xma',
    title: 'Rotana Music (1080p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rotana.hibridcdn.net/rotananet/music_net-7Y83PP5adWixDF93/playlist.m3u8',
    cover: 'https://i.imgur.com/2zFQbQi.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-efio8ue',
    title: 'RQP Paraguay (1080i)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://alba-py-rqp-rqp.stream.mediatiquestream.com/index.m3u8',
    cover: 'https://i.imgur.com/0cUc4Nt.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bd8ns5u',
    title: 'RTL2',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/rtl2.m3u8',
    cover: 'https://i.imgur.com/deC4z34.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0qe9392',
    title: 'RTL 102.5 Best (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S76960628/OEPHRUIctA0M/playlist_video.m3u8',
    cover: 'https://i.imgur.com/9PNlbaq.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-de0v72z',
    title: 'RTL 102.5 Bro&Sis (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S75007890/MUGHuxc9dQ3b/playlist_video.m3u8',
    cover: 'https://i.imgur.com/EWbK4XZ.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rkkle6y',
    title: 'RTL 102.5 Caliente (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S8448465/zTYa1Z5Op9ue/playlist_video.m3u8',
    cover: 'https://i.imgur.com/P0zsi6I.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ph8p6zm',
    title: 'RTL 102.5 Disco (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S51100361/0Fb4R3k82b5Z/playlist_video.m3u8',
    cover: 'https://i.imgur.com/JA1OPrz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wchqhn7',
    title: 'RTL 102.5 Napulè (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S27134503/0f9AhuwKlhnZ/playlist_video.m3u8',
    cover: 'https://i.imgur.com/HFPw1YW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-u221z8e',
    title: 'RTL 102.5 Traffic (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S38122967/2lyQRIAAGgRR/playlist_video.m3u8',
    cover: 'https://i.imgur.com/EBftMcB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qhpye5v',
    title: 'RTL 102.5 TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S97044836/tbbP8T1ZRPBL/playlist_video.m3u8',
    cover: 'https://i.imgur.com/75qUdR7.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fhgrvbc',
    title: 'RTL Gold (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.rtl.lu/data/live/tele/rtlgold/playlist.m3u8',
    cover: 'https://i.imgur.com/LzHQoUv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gxkccni',
    title: 'RTL Today Radio (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.rtl.lu/data/live/tele/rtltodayradio/playlist.m3u8',
    cover: 'https://i.imgur.com/O1c6wpt.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-udt9qpw',
    title: 'RTV Vida (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vidartv2.todostreaming.es/live/radiovida-emisiontvhd.m3u8',
    cover: 'https://i.imgur.com/EqUfEAh.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vhpsy12',
    title: 'RU.TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://bl.rutube.ru/livestream/b1eb8e90d7e636677b3eb73b4fcbb717/index.m3u8?s=d-E-bxKy2v3EEJ94RQX9CA&e=2069285076&scheme=https',
    cover: 'https://i.imgur.com/Z7HUU7V.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3lcg3bf',
    title: 'Salsa Gorda Television (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live20.bozztv.com/akamaissh101/ssh101/qMUAZEy/playlist.m3u8',
    cover: 'https://i.imgur.com/3IhYd7G.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0ys6tik',
    title: 'Salto Brasa Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://salto-streams.nl/hls/sotv1.m3u8',
    cover: 'https://i.vimeocdn.com/portrait/31947989_640x640',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-pxobrh7',
    title: 'Sana Plus (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://mumbai-edge.smartplaytv.in/SanaPlusHD/index.m3u8',
    cover: 'https://i.imgur.com/N6tKUZv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-afwg21s',
    title: 'Sangeet Bangla (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-4.pishow.tv/live/1143/master.m3u8',
    cover: 'https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/transparentImages/Sangeet%20Bangla.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qrhs3sg',
    title: 'Sangeet Marathi (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-3.pishow.tv/live/1229/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SANGEET_MARATHI/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mxfihsj',
    title: 'Siembra TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamunoapp.com:3809/live/siembratvlive.m3u8',
    cover: 'https://www.vivalivetv.com/public/files/shows/0/1/3226-294x165-FFFFFF.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-q2vnq8p',
    title: 'Sky Folk TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://eu.live.skyfolk.mk/live.m3u8',
    cover: 'https://i.imgur.com/ya5xpUL.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hkwnqp1',
    title: 'Slager Muzika',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream-23.mazana.tv/slagrmuzika.m3u8s',
    cover: 'https://i.imgur.com/hKdXwrW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gwbor9p',
    title: 'Slager Original',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream-13.mazana.tv/slagroriginal.m3u8s',
    cover: 'https://i.imgur.com/0YjeWcq.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-iv3a5dd',
    title: 'Sol Música (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d2glyu450vvghm.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-21u4g5cjglv02/sm.m3u8',
    cover: 'https://i.imgur.com/rbJrmPw.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fqbhbgl',
    title: 'SoloBáilalo (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5ff3d9babae13.streamlock.net/8000/8000/playlist.m3u8',
    cover: 'https://i.imgur.com/SImJE7c.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-z4169q7',
    title: 'SONGTV Russia',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://songtv.hls.iptvdc.com/web-russia/playlist.m3u8',
    cover: 'https://i.imgur.com/nM7LbmV.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9cbhdbt',
    title: 'SOY Plancha TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59ef525c24caa.streamlock.net/vmtv/soyplancha/playlist.m3u8',
    cover: 'https://i.ibb.co/P4kpMgk/1689344714578.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bxjw927',
    title: 'SpektraTV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8026/tracks-v1a1/index.m3u8',
    cover: 'https://i.imgur.com/0zCt8e4.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ye9ii0x',
    title: 'Spirit TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdnlive.myspirit.tv/LS-ATL-43240-2/index.m3u8',
    cover: 'https://i.imgur.com/yCp6vXz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-r6lw4v4',
    title: 'Star 101 FM (KNUT Guam) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live2.tensila.com/knut-v-1.choice/hls/master.m3u8',
    cover: 'https://star101.gu/images/fb_icon.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-r95ts6l',
    title: 'Star Plus Music (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.muzickatv.mk/live/StarMusic2.m3u8',
    cover: 'https://i.imgur.com/01yz22a.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-33vvd37',
    title: 'Steelbird Music (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn2.in/SteelbirdMusicTVhls/live.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Steelbird_Music.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-e6iirua',
    title: 'Stingray Classic Rock (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-101ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/FBgu8yB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-iyct7jn',
    title: 'Stingray Classica (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/classica-cla008-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/nh1k5RC.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-q9mvj4x',
    title: 'Stingray CMusic (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/cmusic-cme004-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/3UppN5P.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xx7y1x4',
    title: 'Stingray DJAZZ (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/djazz-djaads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Stingray_Djazz.png/960px-Stingray_Djazz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6j7pp5i',
    title: 'Stingray Easy Listening (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-137ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Stingray_Music_logo.svg/960px-Stingray_Music_logo.svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zstkj74',
    title: 'Stingray Euro Hits (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-214ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/FyhO9U5.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-tx2fdsq',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",Stingray Éxitos del Momento (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/stingray-xitos-del-momento/master.m3u8?ads.vf=--_m-LmFeCi',
    cover: 'https://i.imgur.com/wiasHUR.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mbaic3g',
    title: 'Stingray Flashback 70s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-115ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/jf5C9QF.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-i3srpmc',
    title: 'Stingray Greatest Hits (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883053',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-i4qzv7l',
    title: 'Stingray Greatest Hits (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-155ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-sokboru',
    title: 'Stingray Greatest Holiday Hits',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/manifest/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/54947915-6504-4548-aaef-eabd451f8607/1.m3u8',
    cover: 'https://i.imgur.com/Hz2d6og.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-pnkq0j1',
    title: 'Stingray Hit List (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-107ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/lgpIwId.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-70sze46',
    title: 'Stingray Hitlist (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883054',
    cover: 'https://i.imgur.com/lgpIwId.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9wmatyo',
    title: 'Stingray Holidayscapes (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://plextv.ott-channels.stingray.com/holidayscapes/master.m3u8',
    cover: 'https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fprovider-static.plex.tv%2Fepg%2Fcms%2Fproduction%2F9cb4b15c-8244-4499-ae2c-9a92d4cdff6d%2F13895_SHS_Plex_Logos_Holidays_1500x1000_Dark-Background.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-sikepk2',
    title: 'Stingray Hot Country (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-108ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/PZhxyIT.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-r4195o8',
    title: 'Stingray Jukebox Oldies (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-021ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Stingray_Music_logo.svg/960px-Stingray_Music_logo.svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-s8gy5mo',
    title: 'Stingray Karaoke (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/karaoke-kar000-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/9TLTLS3.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6pmm84t',
    title: 'Stingray Naturescape (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883056',
    cover: 'https://i.imgur.com/882kd90.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-w4wi2wq',
    title: 'Stingray Naturescape (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/naturescape-a003-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/882kd90.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-60pcqm5',
    title: 'Stingray Nothin\' But 90s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-142ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/Tq3I0po.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6ryjj39',
    title: 'Stingray Remember the 80s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-128ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/6E3wYrb.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mci1s45',
    title: 'Stingray Remember the 80s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883071',
    cover: 'https://i.imgur.com/duwc8E8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nwgkrjk',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",Stingray Remember the 80s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/stingray-remember-the-80s/master.m3u8?ads.vf=Fq0bVWh7hy0',
    cover: 'https://i.imgur.com/duwc8E8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3z9gn87',
    title: 'Stingray Rock Alternative (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-102ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/mt8ulVX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9l3nfli',
    title: 'Stingray Romance Latino (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-202ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Stingray_Music_logo.svg/960px-Stingray_Music_logo.svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zzaswop',
    title: 'Stingray Smooth Jazz (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-140ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/h1DsOzH.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fm6apon',
    title: 'Stingray Soul Storm (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-134ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/dU1KC3f.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-eti7u3h',
    title: 'Stingray The Spa (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-122ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/ywAN923.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-x80s8pl',
    title: 'Stingray Today\'s KPOP (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-317ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/mMbntB5.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hnp6tbq',
    title: 'Stingray Today\'s Latin Pop (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-190ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/Os3kRRP.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qg5t1bw',
    title: 'Stingray Urban Beat (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lotus.stingray.com/manifest/ose-133ads-montreal/samsungtvplus/master.m3u8',
    cover: 'https://i.imgur.com/Os3kRRP.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-pglgwm6',
    title: 'Stryk TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://fffffff110156200.tvustream.com:8298/ryfy.m3u8',
    cover: 'https://i.imgur.com/rKkHhkX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fp627ay',
    title: 'STZ Telebista (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/stztelebista/index.m3u8',
    cover: 'https://i.imgur.com/rFQuAEv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zud6e5e',
    title: 'Súper Q Panamá (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vcp8.myplaytv.com:1936/superq/superq/playlist.m3u8',
    cover: 'https://i.imgur.com/ocTnqi7.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-jzccb3l',
    title: 'Super TV (1080i) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.supertv.ro/live/supertv/playlist.m3u8',
    cover: 'https://i.imgur.com/pzxUE0O.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-le52495',
    title: 'Supermúsica TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://backupmaxmedia.hvmultiplay.com/hls/stream4/supermusica.m3u8',
    cover: 'https://i.imgur.com/MiVs42N.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-y5ccjlj',
    title: 'T2 TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://t2hls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/Wu8MBb7.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-r5n2s2t',
    title: 'Tabbar Hits (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vglivessai.akamaized.net/sg/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/e11b0319-52e8-4190-ab03-3931cc68eac9/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_TABBAR_HITS/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-98cfacv',
    title: 'Tarab (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://shd-amg-fast-btpls.shahid.net/tx002/playlist.m3u8',
    cover: 'https://assets.mbcmood.com/channels/1738059679TARAB_Logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-moevlmw',
    title: 'Tarang Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livetv.tarangplus.in/tarangmusic-origin/live/playlist.m3u8',
    cover: 'https://i.imgur.com/oSm8zFD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-i1vr0yc',
    title: 'TDI Radio TV',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://peer2.tdiradio.com/static/streaming-playlists/hls/8f5d84ce-e8ac-4109-9975-9665f5605557/master.m3u8',
    cover: 'https://i.imgur.com/POdTmaD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1iaiury',
    title: 'Tele7music',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.tele7music.ro/hls/stream/index.m3u8',
    cover: 'https://i.imgur.com/11b5W8u.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dc30nfa',
    title: 'Tele Dominicana TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vdopanel.jlahozconsulting.com/p/3417/hybrid/play.m3u8',
    cover: 'https://dominicanchannels.com/wp-content/uploads/teledominicana.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-aob4doc',
    title: 'Tele Zoukla',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vdo.pro-fhi.net:3228/stream/play.m3u8',
    cover: 'https://i.imgur.com/lWYKgPC.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7sljcuo',
    title: 'TeleMusik Senegal (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://58c04fb1d143f.streamlock.net/rezopropartner_1_live/rezopropartner_1_live/playlist.m3u8',
    cover: 'https://i.imgur.com/dPAPLsd.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-a4cprvy',
    title: 'Telerumba TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://inliveserver.com:1936/18506/18506/playlist.m3u8',
    cover: 'https://www.vivalivetv.com/public/files/shows/0/1/3649-294x165-FFFFFF.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-tbidsn3',
    title: 'Tezaur TV (576i)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tezaurtv.md/stream/index.m3u8',
    cover: 'https://i.imgur.com/eAagwLW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0m0e2v3',
    title: 'The Country Network (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg00600-amg00600c1-thecountrynetwork-us-5497.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/en/d/dd/The_Country_Network_Logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lv7in7z',
    title: 'The Voice TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://bss1.neterra.tv/thevoice/thevoice.m3u8',
    cover: 'https://i.imgur.com/OoJSmoj.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vlg1jax',
    title: 'Tiankov Folk (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamer103.neterra.tv/tiankov-folk/live.m3u8',
    cover: 'https://i.imgur.com/VKY4q64.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mrl7scl',
    title: 'Tiankov Orient Folk (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamer103.neterra.tv/tiankov-orient/live.m3u8',
    cover: 'https://i.imgur.com/33LexyP.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ll9mq1h',
    title: 'TikTok Radio Brasil (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d1bl6tskrpq9ze.cloudfront.net/hls/master.m3u8?ads.xumo_channelId=99992529',
    cover: 'https://static.wikia.nocookie.net/logopedia/images/f/f4/TikTok_Radio.svg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-wtp580a',
    title: 'Topical Moon RD (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://sistemastr.tropicalmoonmedia.com/live/56BE17DB16EB76C9F2DDB8346F4DFA4E/30.m3u8',
    cover: 'https://www.vivalivetv.com/public/files/shows/0/1/3900-294x165-FFFFFF.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-jzltsss',
    title: 'Totalmusic (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn.global.elektamedia.com/live/c7eds/Totalmusic/SA_LIVE_hls_enc/master.m3u8',
    cover: 'https://static.elektamedia.com/ch/tmc_main.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-62xphgt',
    title: 'Totalmusic 80s (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_80s/SA_LIVE_hls_enc/master.m3u8',
    cover: 'https://static.elektamedia.com/ch/tmc_80s.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-aluucuv',
    title: 'Totalmusic 2000s (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_00s/SA_LIVE_hls_enc/master.m3u8',
    cover: 'https://static.elektamedia.com/ch/tmc_00s.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-v5ausar',
    title: 'Totalmusic Concerts (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_Concerts/SA_LIVE_hls_enc/master.m3u8',
    cover: 'https://static.elektamedia.com/ch/tmc_concerts.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ymxk5gd',
    title: 'Totalmusic Dance (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_Dance/SA_LIVE_hls_enc/master.m3u8',
    cover: 'https://static.elektamedia.com/ch/tmc_dance.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qxcz22g',
    title: 'Trace Brasil (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01131-tracetv-tracebrazuca-samsungbr/playlist.m3u8',
    cover: 'https://i.imgur.com/DFBocPu.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-8lul7fx',
    title: 'TRACE Brazuca (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg01131-tracetv-amg01131c4-stirr-us-4390.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/DFBocPu.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-jeexauv',
    title: 'Trace Gospel (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://channels.trace.plus/Traceprod/GOSPEL_FR/.m3u8',
    cover: 'https://i.imgur.com/X0UmU3K.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7xk6x7d',
    title: 'Trace Latina (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg01131-tracetv-tracelatina-glewed-vtnk7.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/CUVAi4u.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-d7ynpr7',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Music",TRACE Latina (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/trace-latina/encrypted.m3u8?ads.vf=8rE20DsHHI0',
    cover: 'https://i.imgur.com/CUVAi4u.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-a665ofm',
    title: 'Trace UK (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d2l4tng0wskzvn.cloudfront.net/Trace_GB.m3u8',
    cover: 'https://a.jsrdn.com/hls/23073/trace-uk/logo_20240627_183320_70.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qt0tj6w',
    title: 'Trace Urban (Australia) (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://lightning-traceurban-samsungau.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/DLIbUMx.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-mxoshdq',
    title: 'Tropi Q 99.7 FM (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://www.streaming507.net:19360/videotropiq/videotropiq.m3u8',
    cover: 'https://i.imgur.com/5rPdHhb.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-1x44bef',
    title: 'Tropical Moon Cumbia TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://srv2.tropicalmoonmedia.com/cumbiatv/cumbiatv/playlist.m3u8',
    cover: 'https://i.imgur.com/jL1kLyS.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-tw2et9t',
    title: 'Tropical Music TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59a564764e2b6.streamlock.net/vallenato/tropical/playlist.m3u8',
    cover: 'https://i.imgur.com/h48pwLn.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-am0jm9k',
    title: 'TRT Müzik (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tv-trtmuzik.medya.trt.com.tr/master.m3u8',
    cover: 'https://i.imgur.com/JgUzRH8.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-c44lm8e',
    title: 'Tu Musica HD (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://edge.essastream.com/tumusicahd/tracks-v1a1/mono.m3u8',
    cover: 'https://i.imgur.com/HnjUjog.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-yx1tug8',
    title: 'Tunes 6 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.d6-pro.com/tunes6music/live/video.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Tunes_6.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ji0ez8p',
    title: 'Turbo Mix Radio TV (360p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://7.innovatestream.pe:19360/turbomixoficial/turbomixoficial.m3u8',
    cover: 'https://i.imgur.com/AsdBQa3.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-j06d9tk',
    title: 'Türkmen Owazy (406p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://alpha.tv.online.tm/hls/ch005.m3u8',
    cover: 'https://i.imgur.com/Ap7l2jC.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-9li1hid',
    title: 'TV Arbëria 4 Muzikë (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ssh101.bozztv.com/ssh101/rtvarberia4/playlist.m3u8',
    cover: 'https://i.imgur.com/zLRzyVS.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-34vg5no',
    title: 'TV Arbëria Retro Hits (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ssh101.bozztv.com/ssh101/rtvarberiaretro/playlist.m3u8',
    cover: 'https://i.imgur.com/zLRzyVS.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3zndwuo',
    title: 'TV Éxitos (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streaming.grupomediosdelnorte.com:19360/tvexitos/tvexitos.m3u8',
    cover: 'https://i.imgur.com/ahz7X7u.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5zw5ov9',
    title: 'TVOMIX (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloud.tvomix.com/TVOMIX/index.m3u8',
    cover: 'https://ugc.production.linktr.ee/7ef61237-c46d-456b-afe3-a42ef49a979e_Mejorado2.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-213eadr',
    title: 'TVONE Nicaragua (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hdbox.chunklistv.com/live?stream=tvone',
    cover: 'https://i.imgur.com/FNk6rdz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-rqaytrg',
    title: 'TVR Folclor',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tvr-folclor.lg.mncdn.com/tvrfolclor/smil:tvrfolclor.smil/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/TVR_Folclor_Logo_2023.svg/960px-TVR_Folclor_Logo_2023.svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xvidftn',
    title: 'TVS Music Network (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://rpn.bozztv.com/gusa/gusa-tvsmusic/index.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-vkcm034',
    title: 'TVUNO (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamtv.onliv3.online:1936/karibtv/karibtv/playlist.m3u8',
    cover: 'https://i.imgur.com/dht94P4.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qhyo64f',
    title: 'TZiK [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://54627d4fc5996.streamlock.net/tzik/tzik/chunklist.m3u8',
    cover: 'https://i.imgur.com/TAagRkn.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lrkdbd9',
    title: 'Ultimate TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.ottlive.co.in/utvtamil/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/utvtamil.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-jp7kt19',
    title: 'Urbano TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59ef525c24caa.streamlock.net/tvurbano/tvurbano/playlist.m3u8',
    cover: 'https://i.imgur.com/KVVU9PI.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-w8vlh7r',
    title: 'V2BEAT (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://abr.de1se01.v2beat.live/playlist.m3u8',
    cover: 'https://i.imgur.com/PXGqyLn.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-i4on12t',
    title: 'V Classic TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://5eaccbab48461.streamlock.net:1936/8112/8112/playlist.m3u8',
    cover: 'https://i.imgur.com/WIACJSy.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-er17my1',
    title: 'Vaanavil TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://6n3yope4d9ok-hls-live.5centscdn.com/vaanavil/TV.stream/playlist.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Vaanavil_TV.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bfi28y2',
    title: 'Vallenato Internacional (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59a564764e2b6.streamlock.net/vallenato/vallenatom/playlist.m3u8',
    cover: 'https://i.imgur.com/rVKroNW.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-yepzfnq',
    title: 'VAM Vid\'s & More (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://sincerecloud.stream/loadbalancer/public/J9EmQQGf.m3u8',
    cover: 'https://i.imgur.com/CD1PffA.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-r9c4ixz',
    title: 'Vantage Dance (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls.vantagetv.ee/vdance_stream/main_stream.m3u8',
    cover: 'https://vantagetv.ee/vantage_dance.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-r4lzxjv',
    title: 'Vantage Music (720p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls.vantagetv.ee/vmusic_stream/main_stream.m3u8',
    cover: 'https://vantagetv.ee/vantage_music.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-f6q8gaa',
    title: 'Vantage Music UK (1080p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls.vantagetv.co.uk/vmusicuk_stream/index.m3u8',
    cover: 'https://vantagetv.ee/vantage_music.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ghnkc2q',
    title: 'Vantage Rock (720p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls.vantagetv.ee/vrock_stream/index.m3u8',
    cover: 'https://vantagetv.ee/vantage_rock.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-nv38wdt',
    title: 'Venus Media (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tigocloud.desdeparaguay.net/venusmedia/venusmedia/playlist.m3u8',
    cover: 'https://i.imgur.com/XwmUbfp.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-j35d3h3',
    title: 'Vevo 2K (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d1s6jz7jeei17.cloudfront.net/playlist/amg00056-vevotv-vevo2kau-samsungau/playlist.m3u8',
    cover: 'https://images.pluto.tv/channels/5fd7bca3e0a4ee0007a38e8c/featuredImage.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-p9y5md2',
    title: 'Vevo 70s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg00056-vevotv-vevo70saunz-samsungau-xzszd.amagi.tv/playlist/amg00056-vevotv-vevo70saunz-samsungau/playlist.m3u8',
    cover: 'https://images.pluto.tv/channels/5f32f26bcd8aea00071240e5/featuredImage.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bw8bfl2',
    title: 'Vevo 80s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg00056-vevotv-vevo80saunz-samsungau-rp5e3.amagi.tv/playlist/amg00056-vevotv-vevo80saunz-samsungau/playlist.m3u8',
    cover: 'https://images.pluto.tv/channels/5fd7b8bf927e090007685853/featuredImage.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-dp7j7h0',
    title: 'Vevo 90s (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg00056-vevotv-vevo90saunz-samsungau-n6a0d.amagi.tv/playlist/amg00056-vevotv-vevo90saunz-samsungau/playlist.m3u8',
    cover: 'https://images.pluto.tv/channels/5fd7bb1f86d94a000796e2c2/featuredImage.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4jxje8k',
    title: 'Vevo Country (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg00056-vevotv-vevocountryau-samsungau-ktmqm.amagi.tv/playlist/amg00056-vevotv-vevocountryau-samsungau/playlist.m3u8',
    cover: 'https://images.pluto.tv/channels/5da0d75e84830900098a1ea0/featuredImage.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-xzpnvgk',
    title: 'Vevo Hip Hop (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d3vgs3ro3x6v8a.cloudfront.net/Vevo_Hip_Hop.m3u8',
    cover: 'https://i.imgur.com/Lbc9cYw.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-jojtkuc',
    title: 'Vevo Latino (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg00056-amg00056c13-rakuten-es-3246.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/D7SwmuB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-pwwaldg',
    title: 'Vevo Pop (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d128y56w6v2kax.cloudfront.net/playlist/amg00056-vevotv-vevopopau-samsungau/playlist.m3u8',
    cover: 'https://i.imgur.com/dZHktKR.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-0eml7x1',
    title: 'Vevo R&B (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d1hf773q57zx9s.cloudfront.net/Vevo_R_B.m3u8',
    cover: 'https://images.pluto.tv/channels/5da0d83f66c9700009b96d0e/featuredImage.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ez1l3kj',
    title: 'Vevo Retro Rock (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d2lyea6if8kkz9.cloudfront.net/playlist/amg00056-vevotv-vevoretrorockau-samsungau/playlist.m3u8',
    cover: 'https://i.imgur.com/H1Aap4E.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-x9zamie',
    title: 'Video Rola (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d3b2epqdk0p7vd.cloudfront.net/out/v1/8a448b5e16384af4a3c8146a7b049c32/index.m3u8',
    cover: 'https://i.imgur.com/9w54eVy.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-i8yjttx',
    title: 'Vijay Takkar APAC (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tglmp01.akamaized.net/out/v1/c1071012b73f4f189b202e1529e8f802/manifest.mpd',
    cover: 'https://dtil.tmsimg.com/assets/s144078_ld_h15_aa.png?lock=720x540',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-6jemdry',
    title: 'Vĩnh Long TV5 (1080p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live.fptplay53.net/epzsd1/vinhlong5_vhls.smil/chunklist.m3u8',
    cover: 'https://i.imgur.com/F12VdKO.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-qb0uwoi',
    title: 'Vintage Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59ef525c24caa.streamlock.net/vmtv/tvvintage/playlist.m3u8',
    cover: 'https://i.imgur.com/KImqYnN.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-oqpzn0l',
    title: 'VIP TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ed5ov1.live.opencaster.com/bkyqeDgfaukC/index.m3u8',
    cover: 'https://i.imgur.com/6N0qITv.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ugidcyk',
    title: 'Visión Televisión (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8016/index.m3u8',
    cover: 'https://i.imgur.com/HV5tgcM.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zgcaknb',
    title: 'VIVA Russia (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live20.bozztv.com/akamaissh101/ssh101/vivarussia/chunks.m3u8',
    cover: 'https://i.imgur.com/OFhQQCD.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-r2w6t40',
    title: 'VM Latino (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://59ef525c24caa.streamlock.net/vmtv/vmlatino/playlist.m3u8',
    cover: 'https://i.imgur.com/Dvo1b82.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-y6q0jlj',
    title: 'VoiceOver Radio TV (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloudvideo.servers10.com:8081/8198/index.m3u8',
    cover: 'https://i.imgur.com/HzGs1Eh.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-yuakl8o',
    title: 'Volksmusik TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vmtv.iptv-playoutcenter.de/vmtv/vmtv1/playlist.m3u8',
    cover: 'https://i.imgur.com/EsWuCJ3.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-i59o7ev',
    title: 'Vos y TV (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cloud37.ecuatel.com/vostv/live/manifest.m3u8',
    cover: 'https://i.imgur.com/294FDCB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2uxuqxb',
    title: 'VRT Radio Klara (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live-radio-cf-vrt.akamaized.net/groupb/live/eee20dc8-158a-4194-8d92-0c5a73ffcd3b/live.isml/.m3u8',
    cover: 'https://i.ibb.co/YdDkSJW/VRT-Klara-2020-svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5ov076a',
    title: 'VRT Radio StuBru (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://live-radio-cf-vrt.akamaized.net/groupb/live/0f394a26-c87d-475e-8590-e9c6e79b28d9/live.isml/.m3u8',
    cover: 'https://i.ibb.co/y0TcsXw/512px-VRT-Stu-Bru-logo-svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lktw8sk',
    title: 'WAVE TV (480p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://streamer2.nexgen.bz/08-WAVE/index.m3u8',
    cover: 'https://i.imgur.com/V8Hfgis.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-zczhf10',
    title: 'Wavez FM',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://vs20.live.opencaster.com/wavezfm1075aruba_37766c9d/index.m3u8',
    cover: 'https://i.imgur.com/uyROZSS.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gfu8q6n',
    title: 'WVCU-LP Concord University Radio The Cure 97.7 (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://video1.getstreamhosting.com:1936/8152/8152/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/en/0/0f/WVCU-LP_2015.PNG',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ujvisca',
    title: 'WZNT (Zeta 93) (1080p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://livestream.lamusica.com/nacionz/ngrp:nacionz_all/playlist.m3u8',
    cover: 'https://i.ibb.co/KzqWLZR/images-57.jpg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-37ksw1b',
    title: 'X 102.7 FM (720p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream.castr.com/65dee3aad6beacddbd6cd1af/live_21e811c0d60d11eeaa1a471c2c967e4a/index.m3u8',
    cover: 'https://i.imgur.com/28b810Y.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fgcryst',
    title: 'X Level Media (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://tuvideoonline.com.ar:3332/live/xlevelmedialive.m3u8',
    cover: 'https://i.imgur.com/BGwQdQW.jpeg',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ja1wpf7',
    title: 'XITE (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://xite-rakuten.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/jxuwGRi.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-a5v74rs',
    title: 'XITE 90\'s Throwback (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d284aawtm5vi48.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-fjdfi2br1jtq7/XITE_90s_Throwback.m3u8',
    cover: 'https://i.imgur.com/vwpOzuz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-oxucafn',
    title: 'XITE Classic Country (1080p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://pb-wgi5ljoabjgdm.akamaized.net/XITE_Countrys_Finest.m3u8',
    cover: 'https://i.imgur.com/XQrMCkT.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-x1weiw9',
    title: 'XITE Hits (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d726x48n2pd5h.cloudfront.net/XITE_Hits.m3u8',
    cover: 'https://i.imgur.com/N51Rp7E.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-k20ejtj',
    title: 'XITE Hits Germany (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d726x48n2pd5h.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-skxr1pazhltvp/XITE_Hits.m3u8',
    cover: 'https://i.imgur.com/N51Rp7E.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-jck8ywi',
    title: 'XITE Hits UK (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://amg01243-xitenetworksint-hitsuk-samsunguk-mvovq.amagi.tv/playlist/amg01243-xitenetworksint-hitsuk-samsunguk/playlist.m3u8',
    cover: 'https://i.imgur.com/N51Rp7E.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-d2ttoz0',
    title: 'XITE Just Chill (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dvnftgdlbnemm.cloudfront.net/XITE_Just_Chill.m3u8',
    cover: 'https://provider-static.plex.tv/epg/cms/production/927dd614-017d-49dd-9eb9-0ed79d09084e/xitejustchill_logo_light_-_Arlette_FiranRDX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-bswplui',
    title: 'XITE Nuevo Latino (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d3bsgqzbpkrvbb.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-w288eaw03izg1/XITE_Nuevo_Latino.m3u8',
    cover: 'https://i.imgur.com/2qyl2y3.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7vtmpqx',
    title: 'XITE Reggae Vibes (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dw2m7yrngfg8c.cloudfront.net/XITE_Reggae_Vibes.m3u8',
    cover: 'https://provider-static.plex.tv/epg/cms/production/c7506335-967f-46a9-917a-2a35475cd96c/xitereggaevibes_logo_light_-_Arlette_FiranRDX.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ayah6cb',
    title: 'XITE Rock x Metal (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d198ro05q94rc4.cloudfront.net/XITE_Rock_On.m3u8',
    cover: 'https://i.imgur.com/uIIUIuN.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ua3ocyy',
    title: 'XITE Siempre Latino (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d1xc25jm9e0l4b.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-xplkt8i7m24dc/XITE_Siempre_Latino.m3u8',
    cover: 'https://i.imgur.com/bwmIEgG.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-4mkpflg',
    title: 'XPTV1 (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://janus.xpbroadcasting.com:8443/hls/xptv1.m3u8',
    cover: 'https://i.imgur.com/Ty7GkoN.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ybl7aqm',
    title: 'YleX Studio Live (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://ylestudiolive.akamaized.net/hls/live/2007826/ylestudiolive-YleX/master.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/YleX.svg/960px-YleX.svg.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-sbzvkx2',
    title: 'YRF Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01412-xiaomiasia-yrfmusic-xiaomi/playlist.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/YRF_Music.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-30qhkn8',
    title: 'ZB Music (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://server.zillarbarta.com/zbmusic/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/zbmusic.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fmz7glb',
    title: 'ZFM Zoetermeer (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://zfmzoetermeer.nl/live/master.m3u8',
    cover: 'https://i.imgur.com/vrjACvy.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-jud76ws',
    title: 'Zo\'r TV (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://stream8.cinerama.uz/1016/tracks-v1a1/mono.m3u8',
    cover: 'https://i.imgur.com/NuzyhVM.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-a9hm96e',
    title: 'Zona Music TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://acceso.radiosportstv.online:3022/stream/play.m3u8',
    cover: 'https://i.imgur.com/TJ5l9iI.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-3uh46r0',
    title: 'Zoom (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://dai.google.com/linear/hls/event/JCAm25qkRXiKcK1AJMlvKQ/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZOOM/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-u3nnx0l',
    title: 'Zoom Global (720p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://d14c63magvk61v.cloudfront.net/strm/channels/zoom/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZOOM/images/LOGO_HD/image.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-fq7j65r',
    title: 'ZU TV (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls.rundletv.eu.org/LIVE$RadioZU/6.m3u8/Level/300720051?end=END&start=LIVE',
    cover: 'https://i.imgur.com/1gtkGhB.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-spsvtw3',
    title: 'ZWEI2 Music (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cdne.folxplay.tv/folx-trz/streams/ch-2/master.m3u8',
    cover: 'https://i.imgur.com/RbdpCNf.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-w1jilgw',
    title: 'Матур ТВ (1080p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://public.streaming.matur-tv.ru/hls/h264_aac/stream.m3u8',
    cover: 'https://i.imgur.com/Pg7K7eV.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-hdgmd8w',
    title: 'Муз союз (576p)',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://hls-tvsoyuz.cdnvideo.ru/tvsoyuz2/muzsoyuz.6fw0-58xp-acts-esy0/playlist.m3u8',
    cover: 'https://i.imgur.com/Puk1Bhx.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-kywzajd',
    title: 'Муз ТВ (450p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://zabava-htlive.cdn.ngenix.net/hls/CH_MUZTV/variant.m3u8',
    cover: 'https://i.imgur.com/BtqrHmz.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7mpjx50',
    title: 'Музыка 1 International [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://kino-1.catcast.tv/content/37745/index.m3u8',
    cover: 'https://i.imgur.com/DIKe5vA.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-btilgtb',
    title: 'Музыка Кино International [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://kino-1.catcast.tv/content/37739/index.m3u8',
    cover: 'https://i.imgur.com/2SG0Swa.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-5z1l6p7',
    title: 'Сити Эдем Meditation Music [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/47410/index.m3u8',
    cover: 'https://i.imgur.com/HPWevWb.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-gz1b1zp',
    title: 'Сити Эдем Play Христианский Музыкальный [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/34100/index.m3u8',
    cover: 'https://i.imgur.com/ozEqob9.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-lw9dn7f',
    title: 'Сити Эдем Бирма Play [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/34364/index.m3u8',
    cover: 'https://i.imgur.com/38Q5L5W.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-7grxn7i',
    title: 'Сити Эдем Классическая Музыка [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/47400/index.m3u8',
    cover: 'https://i.imgur.com/l7BE8l6.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-ay8t20r',
    title: 'Сити Эдем Сиртаки ТВ [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/46421/index.m3u8',
    cover: 'https://i.imgur.com/V3MTfyc.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-z4k85oo',
    title: 'УТРК Музыка (480p) [Not 24/7]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://st2.mediabay.tv/KG_KTRK-Muzika/index.m3u8',
    cover: 'https://www.utrk.kg/img/stream/45.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-2nr5bur',
    title: 'Шансон ТВ (576p) [Geo-blocked]',
    author: 'Музичні канали',
    type: 'video',
    url: 'https://uiptv.do.am/1ufc/602079679/playlist.m3u8',
    cover: 'https://i.imgur.com/Fk4sd8t.png',
    description: '24/7 Музичні канали Stream',
    category: 'Музичні канали'
  },
  {
    id: 'vid-c1n1m2d',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Movies",24 Hour Free Movies (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d1b5mlajbmvkjv.cloudfront.net/v1/master/9d062541f2ff39b5c0f48b743c6411d25f62fc25/UDU-DistroTV/145.m3u8?ads.vf=7FhdsxqVxOi',
    cover: 'https://i.imgur.com/iSVnzR1.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-4chflvd',
    title: '27 TwentySeven [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live2.msf.cdn.mediaset.net/content/hls_h0_cls_vos/live/channel(ts)/index.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Twentyseven_logo.svg/960px-Twentyseven_logo.svg.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-uqot6y3',
    title: '30A TV Classic Movies (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://30a-tv.com/feeds/pzaz/30atvmovies.m3u8',
    cover: 'https://babaktv.com/wp-content/uploads/2023/09/30A-Classi-Movies.jpeg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-fbhm8yb',
    title: '&TV International (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg01117-amg01117c1-amgplt0029.playout.now3.amagi.tv/playlist/amg01117-amg01117c1-amgplt0029/playlist.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SYMANDTV/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-a3cepmw',
    title: 'ABN Bible Movies (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://mediaserver.abnvideos.com/streams/abnbiblemovies.m3u8',
    cover: 'https://i.imgur.com/NCqZdaL.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-xel3ch8',
    title: 'Afghan Nobel Movies (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.relentlessinnovations.net:1936/afghannobel/afghannobel/playlist.m3u8',
    cover: 'https://i.ibb.co/zfdbVSm/logo-1.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wxs0uv7',
    title: 'Aflam (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx001/playlist.m3u8',
    cover: 'https://i.imgur.com/cTLj7Yt.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ehmkyb2',
    title: 'Afra Film',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://afrafhls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ema3nuw',
    title: 'Afriwood Blockbuster (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://streamdot.broadpeak.io/cff02a74da64d145c102a2d012758398/afxpstr/AfriwoodBlockbuster/index.m3u8',
    cover: 'https://i.imgur.com/aESdqiB.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-makf24h',
    title: 'Alankar TV (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://livetv.tarangplus.in/alankar-origin/live/playlist.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ALANKAR/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-u8lbv29',
    title: 'Alien Nation by DUST (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://dqi7ayt2o24fn.cloudfront.net/playlist.m3u8',
    cover: 'https://i.imgur.com/FxYhME9.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-kl9doyn',
    title: 'All Time Movies (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://mumt03.tangotv.in/ALLTIMEMOVIES/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ALL_TIME_MOVIES/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-2jgjk2b',
    title: 'alpha Cinema (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.15plusmg.ru/memfs/b389173a-df4e-4171-8904-e249893e71eb.m3u8',
    cover: 'https://i.imgur.com/146OgfU.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-90aw6xq',
    title: 'alpha Moretime (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.15plusmg.ru/memfs/3546fc09-2eba-459d-9a1f-9a2fc39e50bd.m3u8',
    cover: 'https://i.imgur.com/ibQfUr7.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-2qxr9rl',
    title: 'Alterna TV (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://tv.alterna.ar/stream/hls/live.m3u8',
    cover: 'https://tv.alterna.ar/alternatv.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-9qi5nn2',
    title: 'Artflix Movie Classics (720p)',
    author: 'Ретро / Класика',
    type: 'video',
    url: 'https://amogonetworx-artflix-1-nl.samsung.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/5pOZQB4.png',
    description: '24/7 Ретро / Класика Stream',
    category: 'Ретро / Класика'
  },
  {
    id: 'vid-ykbk9je',
    title: 'Asianet Movies (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://anet.keralive.workers.dev/v1/master/a0d007312bfd99c47f76b77ae26b1ccdaae76cb1/asianetmovies_live_https/index.m3u8',
    cover: 'https://i.imgur.com/cps67hs.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7758ygt',
    title: 'Aurora Media Films (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn.streamhispanatv.net:3417/live/auroramflive.m3u8',
    cover: 'https://i.imgur.com/DVC5w6H.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wzyeqyb',
    title: 'AXN Asia Indonesia (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://indihuy.streamized.net/atm/DASH/axn/manifest.mpd',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/AXN_logo_%282015%29.svg/960px-AXN_logo_%282015%29.svg.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-uc2dpqu',
    title: 'B4U Bhojpuri (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdnb4u.wiseplayout.com/B4U_Bhojpuri/master.m3u8',
    cover: 'https://i.imgur.com/NwOQUDp.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-yyexm52',
    title: 'B4U Kadak (1080p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdnb4u.wiseplayout.com/B4U_Kadak/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s142695_ld_h15_aa.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-6cmgzkl',
    title: 'B4U Movies (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg00877-b4unew-amg00877c2-lg-in-5260.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/M9kMFJl.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-huz9e7k',
    title: 'Bhojpuri Cinema (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live-bhojpuri.akamaized.net/liveabr/playlist.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_BHOJPURI_CINEMA/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-yjwylil',
    title: 'BIZ Cinema (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://fl.biztv.media/cinema_720_EMfSyXgoRdiIHgldXTZICucKTIeCKO/index.m3u8',
    cover: 'https://biztv.uz/static/media/biz-cinema.286b83dc.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-u5ylpiw',
    title: 'Bollywood HD Russia (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://xykt-fix.github.io/cinerama_edge01/hls/BOLLYWOOD_RU/Movie009.m3u8',
    cover: 'https://i.imgur.com/scDKOLS.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-blpa1wi',
    title: 'Boreal (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://edge.essastream.com/borealtelevision/tracks-v1a1/mono.m3u8',
    cover: 'https://i.imgur.com/KSquHTG.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-5cyps8e',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Movies",Box Cinema (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d3s7x6kmqcnb6b.cloudfront.net/d/distro001a/QK2TKFREGRYXDI8IJGHW/hls3/now,-1m/m.m3u8?ads.vf=l_Bw4LbbQO8',
    cover: 'https://i.imgur.com/LGJlmtp.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-prhtwd7',
    title: 'Bravo Farsi TV (360p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://bravoohls.wns.live/hls/stream.m3u8',
    cover: 'https://i.ibb.co/yynxRTS/Bravo-Farsi.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ll8xxky',
    title: 'Cafe Film',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cafefhls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ff9er4r',
    title: 'Charge! (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://fast-channels.sinclairstoryline.com/CHARGE/index.m3u8',
    cover: 'https://i.imgur.com/1rxmu2u.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-0cuhszy',
    title: 'CINDIE TV (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d20xuwbyc4yoag.cloudfront.net/v1/master/9d062541f2ff39b5c0f48b743c6411d25f62fc25/DistroTV-MuxIP-CINDIE/387.m3u8?ads.vf=grWTpG3NQNi',
    cover: 'https://a.jsrdn.com/hls/23208/cindie-tv/logo_20250225_222520_68.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ld6f4gx',
    title: 'Cine 34 [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live3-mediaset-it.akamaized.net/Content/hls_h0_clr_vos/live/channel(b6)/index.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cine34_logo.svg/960px-Cine34_logo.svg.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-qczhsn8',
    title: 'Cine Romantico (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d1si3n1st4nkgb.cloudfront.net/10502/88886011/hls/master.m3u8?ads.xumo_channelId=88886011',
    cover: 'https://i.imgur.com/FUrrDrb.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ljwo3w3',
    title: 'Cine Sony (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://a-cdn.klowdtv.com/live1/cine_720p/playlist.m3u8',
    cover: 'https://i.imgur.com/bZWoDTg.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-rx6naa6',
    title: 'like Gecko) Chrome/144.0.0.0 Safari/537.36" group-title="Movies",Cinema (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn4.skygo.mn/live/disk1/CinemaTV/DASH-FTA/CinemaTV.mpd',
    cover: 'https://i.imgur.com/yib6dM2.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-m3q3bz6',
    title: 'Cinema Hausa (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://streamdot.broadpeak.io/cff02a74da64d1459eeb779df71f0511/afxpstr/CinemaHausa/index.m3u8',
    cover: 'https://i.imgur.com/uV5cHDW.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-punxqcq',
    title: 'Cinevault 80s (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://aegis-cloudfront-1.tubi.video/ea1ab5d1-f554-4f6b-b03f-2611fcd94257/playlist.m3u8',
    cover: 'https://i.imgur.com/xaCyyDd.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-q07zwrd',
    title: 'Classic Cinema (240p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rpn.bozztv.com/gusa/gusa-classiccinema/index.m3u8',
    cover: 'https://i.imgur.com/FJoPnTb.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-js0qa6v',
    title: 'Classique TV (360p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stmv1.srvif.com/classique/classique/playlist.m3u8',
    cover: 'https://i.imgur.com/rHxcraT.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-0q50jit',
    title: 'CTB Perth Movies (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://movies.ctbperth.net.au/hls/stream.m3u8',
    cover: 'https://i.imgur.com/VB8gtCy.jpeg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-jeud79o',
    title: 'Dhamaka Movies B4U (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/235/master.m3u8',
    cover: 'https://static.wikia.nocookie.net/logopedia/images/8/8c/Dhamaka_Movies.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-a2sr5ac',
    title: 'DiscoverFilm (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://discoverfilm-discoverfilm-1-gb.samsung.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/oMnpsQ5.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-lulhgif',
    title: 'Dunia Sinema (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://unifi-live05.secureswiftcontent.com/UnifiHD/live27-1080FHD.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-2x0futc',
    title: 'Ebony TV by Lionsgate (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://aegis-cloudfront-1.tubi.video/a0ad4b53-ab3a-48dd-be12-bc7f533c372c/playlist.m3u8',
    cover: 'https://provider-static.plex.tv/epg/cms/production/234d5377-ab07-41bf-acd6-34c17c1c051a/EbonyTV_Plex_Logo_Light_1500x1000.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-3oha60h',
    title: 'EBS Cinema (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rpn.bozztv.com/ebstv/ebscinema/index.m3u8',
    cover: 'https://i.imgur.com/fewPTFE.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-hwq8rxv',
    title: 'Ekran Movies',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/EkranMovies/index-0.m3u8?token=onetv202',
    cover: 'https://i.ibb.co/WNyssx28/Screenshot-2025-05-18-211143.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-z78d50a',
    title: 'ETV Cinema HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d27zlkxhgwrfgo.cloudfront.net/v1/master/9d43eacaed199f8d5883927e7aef514a8a08e108/ETV_CINEMA_H264_cloud_in/index.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143026_ld_h15_aa.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-icydne2',
    title: 'Film4 HD (1080p) [Geo-Blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://viamotionhsi.netplus.ch/live/eds/film4/browser-HLS8/film4.m3u8',
    cover: 'https://i.imgur.com/MTSgoGI.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-mzvalg6',
    title: 'Filmax (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://s3.ideationtec.live/Filmax/Filmax.m3u8',
    cover: 'https://i.imgur.com/eLmdZ6k.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-2nwl3h0',
    title: 'Filmex (Xumo) (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://filmex-filmex-xumo.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/Hiz2OyC.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-9w7u6h1',
    title: 'Filmex Clásico (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://filmex-filmexclasico-xumo.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/D3dj4mv.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ngkh4ay',
    title: 'FilmRise Westerns (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://dz05z8iljgvbe.cloudfront.net/master.m3u8',
    cover: 'https://i.imgur.com/8j2npVc.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7sffvnz',
    title: 'Forensic Files (720p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://pb-x9qsxrudiq9d2.akamaized.net/webvtt/v1/18584c3f3a2a4df8/88886014/master.m3u8',
    cover: 'https://i.imgur.com/8j2npVc.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-hpj9358',
    title: 'FX Movie Channel (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://tvpass.org/live/FXMovieChannel/hd',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/FXM_Logo.svg/960px-FXM_Logo.svg.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-3lw2xhy',
    title: 'GEM Bollywood',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gembollywood/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/2XASeBk.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-znw0tg3',
    title: 'GEM Drama',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemdrama/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/k2pGyRH.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7tqpsnb',
    title: 'GEM Drama Plus',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemdramaplus/index-0.m3u8?token=onetv202',
    cover: 'https://gemgroup.tv/assets/images/channels/icon_7.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-fbavzgb',
    title: 'GEM Film',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemfilm/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/nrFz3LU.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-xbntq1d',
    title: 'GEM Onyx',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemonyx/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/gXRIAw4.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-83bos66',
    title: 'GEM Pixel',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://glserver1.tamashaland.com/live/aBCH96886YznRbGOiqTnnQ__/stream_0.m3u8',
    cover: 'https://i.ibb.co/Q3tkbPrn/icon-27.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-j1ppsio',
    title: 'GEM Rubix',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemrubix/index-0.m3u8?token=onetv202',
    cover: 'https://i.imgur.com/cDjOj58.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7rfacmd',
    title: 'GEM Rubix Plus',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemrubixplus/index-0.m3u8?token=onetv202',
    cover: 'https://gemgroup.tv/assets/images/channels/icon_31.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-e9rbjj5',
    title: 'GEM TV',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gem/index-0.m3u8?token=onetv202',
    cover: 'https://gemgroup.tv/assets/images/channels/icon_16.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-okjk5r0',
    title: 'GEM TV Plus',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/gemtvplus/index-0.m3u8?token=onetv202',
    cover: 'https://gemgroup.tv/assets/images/channels/icon_17.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-yaauuva',
    title: 'Ghost TV (712p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stmv.video.expressolider.com.br/ghostv/ghostv/playlist.m3u8',
    cover: 'https://i.imgur.com/ZVO8GVI.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ih9astd',
    title: 'Gold Star',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://moviethls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-fjh9mpn',
    title: 'Goldmines (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-2.pishow.tv/live/1459/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_GOLDMINES/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-f8y7pty',
    title: 'Goldmines 2 (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-2.pishow.tv/live/1460/master.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-200pemv',
    title: 'Grand Cinema',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://gcinemahls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-cx4mewv',
    title: 'Gravitas Movies (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d6dg3ebeih71x.cloudfront.net/Gravitas_Movies.m3u8',
    cover: 'https://i.imgur.com/H2hD4vT.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7cc025w',
    title: 'GREAT! movies (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg01753-narrativeuk-amg01753c3-lg-gb-1833.playouts.now.amagi.tv/playlist/amg01753-narrativeuk-greatmovies-lggb/playlist.m3u8',
    cover: 'https://d2n0069hmnqmmx.cloudfront.net/epgdata/1.0/newchanlogos/512/512/skychb3709.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-hym5ses',
    title: 'GREAT! romance (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg01753-narrativeuk-amg01753c2-lg-gb-1832.playouts.now.amagi.tv/playlist/amg01753-narrativeuk-greatchristmas-lggb/playlist.m3u8',
    cover: 'https://d2n0069hmnqmmx.cloudfront.net/epgdata/1.0/newchanlogos/512/512/skychb3643.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-f8imm4l',
    title: 'Grjngo Western Movies (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amogonetworx-grjngo-3-dk.samsung.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/wFqhK3p.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-pjwqoxn',
    title: 'Hallmark Movies & More (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://pb-clwlfvkqpn19r.akamaized.net/Hallmark_Movies_&_More.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-tuiodce',
    title: 'Hallmark Movies & Mysteries East (1080p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://tvpass.org/live/HallmarkMoviesMysteriesEast/hd',
    cover: 'https://i.imgur.com/GPRGA9C.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-3afm7l1',
    title: 'Harbin Movie Channel',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stream.hrbtv.net/yspd/playlist.m3u8',
    cover: 'https://www.tvchinese.net/uploads/tv/haerbin.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-dqg3vht',
    title: 'Hero (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live-fi.tvkaista.net/hero/live.m3u8?hd=true',
    cover: 'https://i.imgur.com/4t5JQLY.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-hyj9gs1',
    title: 'HITS Movies HD (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn10jtedge.indihometv.com/atm/DASH/hitsmovie/manifest.mpd',
    cover: 'https://i.imgur.com/kyE3vXf.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-v6l6e1z',
    title: 'Home Plus',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://homeplushls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-kwo14sj',
    title: 'ICC Plus (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://icchls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-mfo4yng',
    title: 'IFC East (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://tvpass.org/live/IFCEast/hd',
    cover: 'https://i.imgur.com/bQdkyF9.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-xh4xrfv',
    title: 'iFilm 2',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.presstv.ir/hls/ifilm2.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/fa/c/ce/Ifilm2logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-z03jtut',
    title: 'iFilm Arabic',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.presstv.ir/hls/ifilmar.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/IFILM.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-db0n0q1',
    title: 'iFilm English',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.presstv.ir/hls/ifilmen.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/IFILM.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-x4xdqnm',
    title: 'iFilm Persian',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.presstv.ir/hls/ifilmfa.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/IFILM.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-3ktvnd6',
    title: 'Indywood TV (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://43wrzjnpqoxe-hls-live.wmncdn.net/indywood/indywoodtv/index.m3u8',
    cover: 'https://i.ibb.co/jT3NCPp/logo-tv.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-trlw0xs',
    title: 'Itage TV (480p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://viewmedia7219.bozztv.com/wmedia/viewmedia100/web_011/Stream/playlist.m3u8',
    cover: 'https://i.imgur.com/FP1aUPw.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-zp7rvu1',
    title: 'Jiangxi Movie Channel',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://play-live-hls.jxtvcn.com.cn/live-city/tv_jxtv4.m3u8',
    cover: 'https://www.tvchinese.net/uploads/tv/jiangxi.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-vzns3fe',
    title: 'Jilin Movie Channel',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://lsfb.avap.jilintv.cn/zqvk7vpj/channel/906341e6f19b4c4bacdc89941eb85d12/index.m3u8',
    cover: 'https://www.tvchinese.net/uploads/tv/jlyspd.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-kbrx621',
    title: 'Kairali We (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-3.pishow.tv/live/1530/master.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_KAIRALI_WE/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7igyerq',
    title: 'KCM (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg02159-amg02159c7-samsung-in-4001.playouts.now.amagi.tv/playlist/amg02159-kcglobal-kcm-samsungin/playlist.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/KCM.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-t2m6coh',
    title: 'KidsFlix (1080p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=50',
    cover: 'https://i.imgur.com/4Pn0ADQ.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-yvgc7ss',
    title: 'Kinoteatr (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stream8.cinerama.uz/1009/tracks-v1a1/playlist.m3u8',
    cover: 'https://i.imgur.com/emH1BgC.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-j3rw1kp',
    title: 'Klasik TV (576p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://178.253.194.105/klasiktv/playlist.m3u8',
    cover: 'https://i.imgur.com/C90BYlb.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-sayulgt',
    title: 'Kuriakos Cine (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://w2.manasat.com/kcine/smil:kcine.smil/playlist.m3u8',
    cover: 'https://i.imgur.com/CZViCwB.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-my26l8n',
    title: 'Lifetime Movies East (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://tvpass.org/live/LifetimeMoviesEast/hd',
    cover: 'https://i.imgur.com/BWmqYTO.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-kq9v8sz',
    title: 'Maah TV (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://hls.maahtv.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/FkyueH6.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-shgec01',
    title: 'Made in Hollywood',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://connection3-ent-nz.samsung.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/p16HNIM.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-5rkmawy',
    title: 'Maha Movie (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-6.pishow.tv/live/10007/master.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/Maha_Movies.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-hnx4grw',
    title: 'Manoranjan Grand (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/1011/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143302_ld_h15_aa.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-f15rs0g',
    title: 'Maverick Black Cinema (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://maverick-maverick-black-cinema-3-us.roku.wurl.tv/playlist.m3u8',
    cover: 'https://images.fubo.tv/station_logos/maverick_black_cinema_c.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-nh6ssd4',
    title: 'Max Movies (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.maxtn.in/maxmovies/maxmovies/index.m3u8',
    cover: 'https://livetv.ashokadigital.net/upload/logo/1732168422_WhatsApp%20Image%202024-11-21%20at%2010.18.47%20AM.jpeg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-whdcd2f',
    title: 'MAX Reels',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://indihuy.streamized.net/atm/DASH/useeprime/manifest.mpd',
    cover: 'https://images.maxstream.tv/sites/default/files/entry/0_psqdb637/landscape_carousel_xxhdpi.webp',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-2z2rl0l',
    title: 'MBC Bollywood (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-bollywood/546eb40d7dcf9a209255dd2496903764/index.m3u8',
    cover: 'https://i.imgur.com/TTAGFHG.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-43j4fqo',
    title: 'MBC+ Drama (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-plus-drama/e37251ec2aac8f6c98f75cd0fa37cd28/index.m3u8',
    cover: 'https://i.imgur.com/lxWdjXG.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-8af51sa',
    title: 'MCI Televisión (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://video.ejeserver.com/live/mcitelevision.m3u8',
    cover: 'https://pbs.twimg.com/profile_images/1836009952420274177/FfYonU6r_400x400.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-8weccrp',
    title: 'Mega Cine TV (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cnn.hostlagarto.com/megacinetv/playlist.m3u8',
    cover: 'https://www.vivalivetv.com/public/files/shows/0/1/2893-294x165-FFFFFF.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-6gzjlji',
    title: 'Memorias TV Film (720p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://video.xtrematv.com:3725/live/memoriasfilmlive.m3u8',
    cover: 'https://i.imgur.com/vNfjW6Y.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-p8dj4il',
    title: 'Meta Film TV',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://metafilmhls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-6613hoa',
    title: 'MH One Movies (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://mumt03.tangotv.in/MHONEMOVIE/index.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-x2yz616',
    title: 'Mix Hollywood (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ml-pull-hwc.myco.io/MixTV/hls/index.m3u8',
    cover: 'https://i.imgur.com/1ENdbZn.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-c6yurpe',
    title: 'like Gecko) Chrome/146.0.0.0 Safari/537.36" group-title="Movies",MN+',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn4.skygo.mn/live/disk1/MNplus91/HLSv3-FTA/MNplus91.m3u8',
    cover: 'https://new.skytel.mn/uploads/channel/mn-676145a957d06.jpeg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ynqlkhe',
    title: 'like Gecko) Chrome/144.0.0.0 Safari/537.36" group-title="Movies",MovieBox (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn4.skygo.mn/live/disk1/Moviebox/DASH-FTA/Moviebox.mpd',
    cover: 'https://i.imgur.com/xeO1Zb4.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-l2d297h',
    title: 'Movieplex (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://mumt04.tangotv.in/MOVIEPLEX/index.m3u8',
    cover: 'https://i.imgur.com/THJEAqJ.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-zs2mqia',
    title: 'Movies Action (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx011/playlist.m3u8',
    cover: 'https://i.imgur.com/NIVhISa.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-rijdjit',
    title: 'Movies Thriller (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://shd-amg-fast.edgenextcdn.net/tx012/playlist.m3u8',
    cover: 'https://i.imgur.com/JWihdcl.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-2vrys94',
    title: 'Movies! (480p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://bozztv.com/dvrfl03/hdirect/hdirect-ovair1-movies!/index.m3u8',
    cover: 'https://i.imgur.com/gAGn3mK.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-93yq0wg',
    title: 'MovieSphere (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg00353-lionsgatestudio-moviesphere-xumo-zh5u0.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/h1ejU90.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-2a9e9ps',
    title: 'MovieSphere AU (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg00353-lionsgatefilmsi-moviesphereaus-samsungau-7qzhf.amagi.tv/playlist/amg00353-lionsgatefilmsi-moviesphereaus-samsungau/playlist.m3u8',
    cover: 'https://i.imgur.com/h1ejU90.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-qa9ccv3',
    title: 'MovieSphere UK (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://moviesphereuk-samsunguk.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/h1ejU90.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-0uz50hn',
    title: 'Movify Kino (576p)',
    author: 'Ретро / Класика',
    type: 'video',
    url: 'https://void.greenhosting.ru/MovifyKino_Mpeg4/index.m3u8',
    cover: 'https://i.imgur.com/XIk5EJN.png',
    description: '24/7 Ретро / Класика Stream',
    category: 'Ретро / Класика'
  },
  {
    id: 'vid-9w75275',
    title: 'like Gecko Chrome/144.0.0.0 Safari/537.36" group-title="Movies",My Cinema [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://op-group1-swiftservehd-1.dens.tv/h/h192/index.m3u8',
    cover: 'https://i.imgur.com/BTmcTQO.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-zb5s1cy',
    title: 'like Gecko Chrome/144.0.0.0 Safari/537.36" group-title="Movies",My Cinema Europe [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://op-group1-swiftservehd-1.dens.tv/h/h18/index.m3u8',
    cover: 'https://i.imgur.com/jz0d8tH.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-fcwq5yu',
    title: 'MyTime Movie Network (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://appletree-mytimeuk-rakuten.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/pw4NZK1.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-rq5fafx',
    title: 'MyTime Movie Network (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://appletree-mytimeau-samsung.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/HYgxPVQ.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-dhak5s5',
    title: 'MyTime Movie Network Brazil (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://appletree-mytime-samsungbrazil.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/aiGQtzI.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-shodxab',
    title: 'MyTime Movie Network Mexico (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://appletree-mytime-samsungmexico.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/pw4NZK1.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-4xb3x3i',
    title: 'MyTime movie network Spain (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://appletree-mytimespain-rakuten.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/pw4NZK1.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ti0hf3b',
    title: 'NETV Toronto (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://eu1.vectromdigital.com:1936/netvtoronto/netvtoronto/playlist.m3u8',
    cover: 'https://i.imgur.com/WXRBuOW.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-j2otg0u',
    title: 'NEW KMOVIES (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ads.its-newid.net/api/manifest.m3u8?tp=samsung_tvplus&channel_id=newid_343&ads.service_id=GB1700007PK',
    cover: 'https://i.imgur.com/wCgirjc.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-87mu0rq',
    title: 'Newflix',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://newfhls.wns.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-369wkmo',
    title: 'Next HD (480p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.enhdtv.com:19360/nexthd/nexthd.m3u8',
    cover: 'https://i.imgur.com/c2rF3SS.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-8dqpgdl',
    title: 'Nolly Africa HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg02784-amg02784c2-amgplt0002.playout.now3.amagi.tv/ts-eu-w1-n2/playlist/amg02784-amg02784c2-amgplt0002/playlist.m3u8',
    cover: 'https://i.imgur.com/IxtGpti.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-osdu8jr',
    title: 'Orbita Chile TV (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://orbitachiletv.org/hls/0/stream.m3u8',
    cover: 'https://i.imgur.com/gbNh79Z.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-noy8e6l',
    title: 'Oscar Movies Bhojpuri (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-4.pishow.tv/live/233/master.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143638_ld_h9_ab.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7o6otkr',
    title: 'OuterSphere (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d3o593mz1glx8d.cloudfront.net/OuterSphere_US.m3u8',
    cover: 'https://provider-static.plex.tv/epg/cms/production/f162df8b-6532-43fe-9202-83a658090651/OuterSphere_1500x1000_Logo_Dark_-_Chris_Connors__1_.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-kmq877r',
    title: 'Pantalla Clásica EC (512p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live21.bozztv.com/akamaissh101/ssh101/pantallaclasics/playlist.m3u8',
    cover: 'https://i.imgur.com/mhbERF9.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-o1veok4',
    title: 'Persiana Cinema',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cinehls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/hgIro9r.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-jevfpbe',
    title: 'Persiana Family',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://familyhls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/lMZsuWi.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-g4b4bhu',
    title: 'Persiana Iranian',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://irhls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/vqrrpBi.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-o3ckhsu',
    title: 'Persiana Korea',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://korhls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/si2ZnIA.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wtwqo2e',
    title: 'Persiana Latino',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://latinohls.persiana.live/hls/stream.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-4ojvnl5',
    title: 'Persiana Plus',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://euhls.persiana.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/0xttibX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7z0q4sy',
    title: 'Pitaara (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://vg-pitaaratvlive.akamaized.net/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/vglive-sk-583798/playlist.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PITAARA/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-z61s60o',
    title: 'Pro100TV (576p)',
    author: 'Ретро / Класика',
    type: 'video',
    url: 'https://sirius.greenhosting.ru/Pro100tvRu/video.m3u8',
    cover: 'https://i.imgur.com/YfQEflM.png',
    description: '24/7 Ретро / Класика Stream',
    category: 'Ретро / Класика'
  },
  {
    id: 'vid-2ht4la7',
    title: 'Public Movies (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://mumt04.tangotv.in/PUBLICMOVIES/index.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PUBLIC_MOVIES/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-v0vhlj6',
    title: 'Rai Movie (576p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://mediapolis.rai.it/relinker/relinkerServlet.htm?cont=747002',
    cover: 'https://i.imgur.com/0FjxXU9.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-8wj9cc1',
    title: 'Raj Digital Plus (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://livestream.rajtv.tv/hlslive/Admin/px08241087/live/RajTV_Digital_plus/master_1.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_RAJ_DIGITAL_PLUS/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-s1jswzz',
    title: 'Rakuten Top Movies UK (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://0145451975a64b35866170fd2e8fa486.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-5987/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-6c67oy0',
    title: 'Rakuten TV Action Movies Austria (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://0f846627524f4dd2995e93581379db82.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenActionMovies-1/playlist.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-a680n7q',
    title: 'Rakuten TV Action Movies Finland (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://bca5a421a70c46ad911efd0a4767c4bf.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6075/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-f0yq5ll',
    title: 'Rakuten TV Action Movies Germany (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://284824cf70404fdfb6ddf9349009c710.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6066/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-2zf92fs',
    title: 'Rakuten TV Action Movies Italy (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://87f2e2e5e7624e3bad85da1ca2ed31a7.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6067/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-8c0slra',
    title: 'Rakuten TV Action Movies Spain (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://a9c57ec7ec5e4b7daeacc6316a0bb404.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6069/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-2ul9szy',
    title: 'Rakuten TV Action Movies UK (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://54045f0c40fd442c8b06df076aaf1e85.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6065/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-690r4ec',
    title: 'Rakuten TV Comedy Movies Austria (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://7ed752b220a441b7b22bdf697c6c4df8.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenComedyMovies-1/playlist.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-5eh8ar1',
    title: 'Rakuten TV Comedy Movies Finland (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://a300af98e00746e2acf2346f43e47bd1.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6191/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-yjp9yd0',
    title: 'Rakuten TV Comedy Movies Germany (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ecac08c9e2214375b907d6825aaf9a01.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6182/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-66sknw6',
    title: 'Rakuten TV Comedy Movies Italy (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://b8bc6c4b9be64bd6aeb3b92aa8521ed4.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6184/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-l67u7tg',
    title: 'Rakuten TV Comedy Movies Spain (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://71db867f03ce4d71a29e92155f07ab87.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6180/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7lbc0v9',
    title: 'Rakuten TV Comedy Movies UK (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://9be783d652cd4b099cf63e1dc134c4a3.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6181/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-sgcbe46',
    title: 'Rakuten TV Drama Movies Austria (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://df1aa472ff5b4780a8d91fe319778b4d.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenTVShows-1/playlist.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7x5jkns',
    title: 'Rakuten TV Drama Movies Finland (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d7e8ee3c924d4305a0c1840fe94c5d36.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6102/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ee9xw7s',
    title: 'Rakuten TV Drama Movies Germany (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://968754c2483045c1a9a7f677caec35b6.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6096/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-8wfjuzg',
    title: 'Rakuten TV Drama Movies Italy (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://f84e0b1628464fab846160df957f269e.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6094/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-s43i4vi',
    title: 'Rakuten TV Drama Movies Spain (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://a7089c89d85f453d850c4a1518b43076.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6092/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-9szxc1y',
    title: 'Rakuten TV Drama Movies UK (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://fee09fd665814f51b939b6d106cf5f66.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6093/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-htpg75c',
    title: 'Rakuten TV Family Movies Austria (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://9fa8baba055e4a52b0a8d1ae7d78bed8.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenFamily-1/playlist.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wsvuwaw',
    title: 'Rakuten TV Family Movies Finland (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://758ee983d61e400381dea6fa8154f4e0.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6227/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-f0omqbt',
    title: 'Rakuten TV Family Movies Germany (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://af230031eeac45f3b78d4f8a13265105.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6209/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ehqc0ao',
    title: 'Rakuten TV Family Movies Italy (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://3315fc3e7276420f895e19cf807dbee1.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6215/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-syd37ai',
    title: 'Rakuten TV Family Movies Spain (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://b0d59c8c98974e708e5ccb9a27cdfdfc.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6205/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-cmg12cx',
    title: 'Rakuten TV Family Movies UK (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://e3207568b726401995c25670faaf32e4.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6203/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-55eo5iy',
    title: 'Rakuten TV Family Switzerland (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://a24daf1125344b9cab66eed2fcff8821.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-ch_RakutenFamily-1/playlist.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-bjw5cy8',
    title: 'Rakuten TV Nordic Films (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://4aa9ef08b70d4b0c8f3519c5950b1930.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6303/master.m3u8',
    cover: 'https://images-3.rakuten.tv/storage/global-live-channel/translation/artwork/ff79e878-3eea-45fc-b0cd-55d6acce9b18-width200-quality90.jpeg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-dzomnzp',
    title: 'Rakuten TV Top Movies Finland (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://1d1b0d4cb6ae4c31985d13221795695b.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6057/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-hq7vrj2',
    title: 'Rakuten TV Top Movies Germany (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cbb622b29f5d43b598991f3fa19de291.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-5985/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-z6tvjid',
    title: 'Rakuten TV Top Movies Italy (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d4a4999341764c67a67e9ec9eb3790ab.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-5984/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-5tbw4b0',
    title: 'Rakuten TV Top Movies Spain (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ff335120300e4742a2b135ee9a9e7df8.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-5983/master.m3u8',
    cover: 'https://i.imgur.com/Meew6eX.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ghbbztl',
    title: 'like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0" group-title="Movies",Revry Her (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/revry-her/playlist.m3u8?ads.vf=j5eHovd50EC',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/DISTROTV/LIVECHANNEL/66698907bac4421ebc533646/images/logo_20231219_221435_68.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-acbn93s',
    title: 'Roja Movies (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stream.rojatv.cloud/rojatv/rojatv/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/rojamovies.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-gharcan',
    title: 'Rotana Cinema Egypt (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rotana.hibridcdn.net/rotananet/cinemamasr_net-7Y83PP5adWixDF93/playlist.m3u8',
    cover: 'https://i.imgur.com/dGlKoLW.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-4gv7djo',
    title: 'Rotana Cinema KSA (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rotana.hibridcdn.net/rotananet/cinema_net-7Y83PP5adWixDF93/playlist.m3u8',
    cover: 'https://i.imgur.com/pGgp38I.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ejebttr',
    title: 'Runtime Espanol (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://run-rt-uh-roku.otteravision.com/run/rt_uh/rt_uh.m3u8',
    cover: 'https://i.imgur.com/OMQq19N.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-kj8m1fy',
    title: 'ServusTV (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stv-live.akamaized.net/hls/live/2031011/lingeoSTVATwebPri/master.m3u8',
    cover: 'https://i.imgur.com/6W637Gn.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-vlp4zj0',
    title: 'Shemaroo Josh (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://airtelapp.shemaroo.com/shemarooChumbakTV/smil:shemarooChumbakTVadp.smil/playlist.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/GNLZZGG00297P3E.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-4d6fu3n',
    title: 'Shubh Cinema TV (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d393sxaxig6bax.cloudfront.net/out/v1/589cf2cf44bf42bb941e817a2240d62e/index.m3u8',
    cover: 'https://i.imgur.com/RQhorAG.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-jbvovpi',
    title: 'SL 1',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://slonehls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/n9cuM2W.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-0idyzu5',
    title: 'SL 2',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://sltwohls.wns.live/hls/stream.m3u8',
    cover: 'https://i.imgur.com/BVuUx5R.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-spkluvg',
    title: 'Sony Canal Novelas',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://a89829b8dca2471ab52ea9a57bc28a35.mediatailor.us-east-1.amazonaws.com/v1/master/0fb304b2320b25f067414d481a779b77db81760d/CanelaTV_SonyCanalNovelas/playlist.m3u8',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-upglu2h',
    title: 'Sony One Favoris (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://49d735318d6b4c30a24a7997ea594e1b.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-820-FR-SONYONEFAVORIS-LG_FR/playlist.m3u8',
    cover: 'https://i.imgur.com/RO4AM4b.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-xgk10ag',
    title: 'Sony One Hits Action (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://5098a8b860504a3690fd2e7c0a18d68f.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-817-FR-SONYONEHITSACTION-LG_FR/playlist.m3u8',
    cover: 'https://i.imgur.com/pXsZEsR.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-e4x1kbv',
    title: 'Sony One Hits Comedie (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://7aa9671895264ec9a384dfed1b992171.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-818-FR-SONYONEHITSCOMDIE-LG_FR/playlist.m3u8',
    cover: 'https://i.imgur.com/8sHuxxS.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-xxxcm9h',
    title: 'Sony Pix HD (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://sl.vodep39240327.workers.dev/channel/SONY%20PIX%20HD.m3u8',
    cover: 'https://i.postimg.cc/Z5G8j67L/PIX-HD-WHITE.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-0glc66k',
    title: 'Sony Wah (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://sl.vodep39240327.workers.dev/channel/SONY%20WAH.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SONY_WAH/images/LOGO_HD/image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-qpno57b',
    title: 'South Station (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cc-yw7ztecy8do3q.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-yw7ztecy8do3q/SS_IN.m3u8',
    cover: 'https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN3800008CX_20260325T012316SQUARE.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-vimckt9',
    title: 'Star Maa Movies HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://anet.keralive.workers.dev/v1/master/a0d007312bfd99c47f76b77ae26b1ccdaae76cb1/maamovies_live_https/index.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/s143826_ld_h15_aa.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-t2srrhq',
    title: 'Star Tamil Television (360p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://edge4-moblive.yuppcdn.net/trans1sd/smil:strtml19.smil/playlist.m3u8?dvr=',
    cover: 'https://i.imgur.com/fjHcr9z.jpg',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-1f1ws7e',
    title: 'START Air',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://livetv.mylifeisgood.net.ru/channels/strwc.m3u8',
    cover: 'https://i.imgur.com/4bACa7x.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-j65e4g7',
    title: 'START World',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://livetv.mylifeisgood.net.ru/channels/strvf.m3u8',
    cover: 'https://i.imgur.com/TXtY5eM.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-if6ddv8',
    title: 'Studio One + (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn-1.pishow.tv/live/276/master.m3u8',
    cover: 'https://i.imgur.com/yOPB7JB.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-yzf8iv8',
    title: 'Suriyan TV (576p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stream.sscloud7.com/live/suriyantv/index.m3u8',
    cover: 'https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/transparentImages/Suriyan-tv-logo_2000_X_1125_Transpharent.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-s0nfbk3',
    title: 'T2 Movies',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ca-rt.onetv.app/T2Movies/index-0.m3u8?token=onetv202',
    cover: 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ab6c1ua',
    title: 'Tamasha',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://ncdn.telewebion.ir/hdtest/live/playlist.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/fa/thumb/f/f2/IRIB_tamashaTV.svg/960px-IRIB_tamashaTV.svg.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ti068jl',
    title: 'TF1 Series Films (1080p) [Geo-Blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://viamotionhsi.netplus.ch/live/eds/hd1/browser-HLS8/hd1.m3u8',
    cover: 'https://i.imgur.com/4CJIDKQ.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-cq3o685',
    title: 'Thalaa TV (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://streams2.sofast.tv/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/2069c593-3c07-4d62-9d44-746be5c3a5d6/manifest.m3u8',
    cover: 'https://d229kpbsb5jevy.cloudfront.net/yuppfast/content/common/channel/logos/thalaa-tv.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-4cyvyn9',
    title: 'The Film Detective (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cinedigm-entertainment-corp-thefilmdetective-1-us.ono.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/yfOwmsP.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-9xe3euf',
    title: 'The Movie Club (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://sis-global.prod.samsungtv.plus/v1/tvpprd/sc-mp2ar4ca425xo.m3u8',
    cover: 'https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN38000072R_20260325T012318SQUARE.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-l1z8io3',
    title: 'The Movie Club +2 (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d3gnyty2vddhsg.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/pb-ytipwjqub3kf8/TMC2_IN.m3u8?ads.ads_cdn=cf&ads.cdn=cf',
    cover: 'https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN40000100Y_20260204T004058SQUARE.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-wkk3030',
    title: 'Thrill (540p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn10jtedge.indihometv.com/atm/DASH/thrill/manifest.mpd',
    cover: 'https://i.imgur.com/Y282owj.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-zvxqrs4',
    title: 'Tolly TV (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://streams2.sofast.tv/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/13b5735d-52c3-4be0-853d-e0ec0127e708/manifest.m3u8',
    cover: 'https://d229kpbsb5jevy.cloudfront.net/yuppfast/content/common/channel/logos/aumnrs.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-rewgjwe',
    title: 'TVCARiB Cinema (720p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn.mycloudstream.io/hls/live/broadcast/l3vslw4i/index.m3u8',
    cover: 'https://i.imgur.com/fvGlwKo.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-z9xan2h',
    title: 'TVS Drive In Movie (360p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rpn.bozztv.com/gusa/gusa-tvsdriveinmovie/index.m3u8',
    cover: 'https://i.imgur.com/OR9APjb.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-folyrwo',
    title: 'TVS Film Noir Network (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rpn.bozztv.com/trn01/gusa-TVSFilmNoir/index.m3u8',
    cover: 'https://i.imgur.com/A4yWhQw.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-cp6r5it',
    title: 'USA Network East (1080p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://tvpass.org/live/USANetworkEast/hd',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/USA_Network_logo_%282016%29.svg/960px-USA_Network_logo_%282016%29.svg.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-buaumj5',
    title: 'Victor Valley Movies (1080p) [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://2-fss-2.streamhoster.com/pl_138/201950-5317556-1/playlist.m3u8',
    cover: 'https://i.imgur.com/zgiuNNj.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-6ez255v',
    title: 'Whiplash Cinema (480p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cdn.whiplash.cc/whiplash-cinema/index.m3u8',
    cover: 'https://whiplash.cc/assets/img/channels/whiplashcinema.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-rv3z0cx',
    title: 'Wildside TV (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://versatile-wildsidetv-1-fr.samsung.wurl.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/cQkfRhH.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ob8ip67',
    title: 'Wu Tang Collection (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://dbrb49pjoymg4.cloudfront.net/10001/99991745/hls/master.m3u8?ads.xumo_channelId=99991745',
    cover: 'https://i.imgur.com/sz55sBl.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-x45u4xf',
    title: 'Xtrema Accion',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stmv6.voxtvhd.com.br/cineaccion/cineaccion/playlist.m3u8',
    cover: 'https://i.imgur.com/z5NwizH.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-usjnikr',
    title: 'Xtrema Cine Clasico',
    author: 'Ретро / Класика',
    type: 'video',
    url: 'https://stmv6.voxtvhd.com.br/cineclasico/cineclasico/playlist.m3u8',
    cover: 'https://i.imgur.com/j91M4Yf.png',
    description: '24/7 Ретро / Класика Stream',
    category: 'Ретро / Класика'
  },
  {
    id: 'vid-geq84zp',
    title: 'Xtrema Terror',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://stmv6.voxtvhd.com.br/cineterror/cineterror/playlist.m3u8',
    cover: 'https://i.imgur.com/FcaTUym.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7ckd1kb',
    title: 'ZB Cinema (720p)',
    author: 'Ретро / Класика',
    type: 'video',
    url: 'https://server.zillarbarta.com/ZBCINEMA/index.m3u8',
    cover: 'https://jiotvimages.cdn.jio.com/dare_images/images/ZBCINEMA.png',
    description: '24/7 Ретро / Класика Stream',
    category: 'Ретро / Класика'
  },
  {
    id: 'vid-dip9iup',
    title: 'Zee Bollymovies (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg17931-zee-amg17931c8-samsung-th-6526.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://framerusercontent.com/images/mqfJ18x4jYe0GbZUbxSHsbnWU.png?scale-down-to=512',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-b79j09a',
    title: 'Zee Bollymovies Australia (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg17931-zee-amg17931c8-samsung-au-8871.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://framerusercontent.com/images/mqfJ18x4jYe0GbZUbxSHsbnWU.png?scale-down-to=512',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-lzmpmkf',
    title: 'Zee Cinema APAC (1080p) [Geo-blocked]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg17931-zee-amg17931c5-samsung-au-8873.playouts.now.amagi.tv/playlist.m3u8',
    cover: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZEE_CINEMA/images/LOGO_HD/LOGO_HD_image.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-3rbwt3r',
    title: 'Zee Cinemalu HD (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://mumbai-edge.smartplaytv.in/ZeeCinemaluHD/index.m3u8',
    cover: 'https://dtil.tmsimg.com/assets/GNLZZGG0022ZEQ9.png?lock=720x540',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-4ko4sq3',
    title: 'Zee South Flix (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg00862-amg00862c9-amgplt0173.playout.now3.amagi.tv/playlist/amg00862-amg00862c9-amgplt0173/playlist.m3u8',
    cover: 'https://d3bd0tgyk368z1.cloudfront.net/zeelg/LG%20logo%20artwork/400x200/zsouthflix.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-36n2pk0',
    title: 'Zylo Cine Friki (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d2mr4fu91mjx9m.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-rb0tx75ojbc5u/CineFriki_ES.m3u8',
    cover: 'https://i.imgur.com/b3Ospym.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-m4gqwl2',
    title: 'Zylo Ciné Nanar (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://zylo-cinenanar-rakuten.amagi.tv/playlist.m3u8',
    cover: 'https://i.imgur.com/YnUZd3W.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-oojfn5z',
    title: 'Zylo Cine Western (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://d2nq34q0i1r3la.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-awohw8g217ho8/CineWestern_ES.m3u8',
    cover: 'https://i.imgur.com/2UROzSc.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-h459p40',
    title: 'Zylo Ciné Western (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://amg00711-zylo-amg00711c8-rakuten-uk-2686.playouts.now.amagi.tv/playlist/amg00711-zylofast-cinewestern-rakutenuk/playlist.m3u8',
    cover: 'https://i.imgur.com/tteOFkL.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-ongaicb',
    title: 'Zylo Emotion\' L (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rakutenaa-zylo-emotional-rakuten-r1zkm.amagi.tv/playlist/rakutenAA-zylo-emotional-rakuten/playlist.m3u8',
    cover: 'https://i.imgur.com/MP34aaj.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-sbmrumd',
    title: 'Zylo ScreamIN (1080p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://rakutenaa-zylo-screamin-rakuten-p11ej.amagi.tv/playlist/rakutenAA-zylo-screamin-rakuten/playlist.m3u8',
    cover: 'https://i.imgur.com/tGmKbil.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-rxjtyu5',
    title: 'Детское кино International [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://autopilot.catcast.tv/content/38720/index.m3u8',
    cover: 'https://i.imgur.com/dJqFRhQ.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-fcu8dn4',
    title: 'Дом Кино',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://streaming.thestream.cyou/live/44.m3u8',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%B0_%D0%94%D0%BE%D0%BC_%D0%9A%D0%B8%D0%BD%D0%BE.png/960px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%B0_%D0%94%D0%BE%D0%BC_%D0%9A%D0%B8%D0%BD%D0%BE.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-xl3olc8',
    title: 'Новый Русский (720p)',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://live.15plusmg.ru/memfs/f983b507-a170-41a9-85a9-d9afc6cba9c1.m3u8',
    cover: 'https://i.imgur.com/iuRSScH.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-fz9zk3i',
    title: 'Сити Эдем КиноАзия [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/34393/index.m3u8',
    cover: 'https://i.imgur.com/gaket4B.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-fttd2dd',
    title: 'Сити Эдем КиноАрт [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/38398/index.m3u8',
    cover: 'https://i.imgur.com/67CWCtz.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-09zxm5c',
    title: 'Сити Эдем КиноДетектив [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/41327/index.m3u8',
    cover: 'https://i.imgur.com/9rKHwBV.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-auz4y4g',
    title: 'Сити Эдем КиноДрама [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/45269/index.m3u8',
    cover: 'https://i.imgur.com/29ddffh.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-7zbeo45',
    title: 'Сити Эдем КиноКлассика [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/34185/index.m3u8',
    cover: 'https://i.imgur.com/0qGCS1S.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-tfzs5gs',
    title: 'Сити Эдем КиноКомедия [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/41331/index.m3u8',
    cover: 'https://i.imgur.com/Aga2XVA.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-qe8s9gl',
    title: 'Сити Эдем КиноМистика [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/40783/index.m3u8',
    cover: 'https://i.imgur.com/s1Pid0K.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-joo7v2f',
    title: 'Сити Эдем КиноСемья [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://v2.catcast.tv/content/38128/index.m3u8',
    cover: 'https://i.imgur.com/YoWOZMx.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-txbq4we',
    title: 'Сити Эдем КиноФантастика [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/45268/index.m3u8',
    cover: 'https://i.imgur.com/I64FeIO.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-4cg6qkv',
    title: 'Сити Эдем КиноЭкшен [Not 24/7]',
    author: 'Кіно та Фільми',
    type: 'video',
    url: 'https://cityeden.catcast.tv/content/41333/index.m3u8',
    cover: 'https://i.imgur.com/uuzuvD0.png',
    description: '24/7 Кіно та Фільми Stream',
    category: 'Кіно та Фільми'
  },
  {
    id: 'vid-cj5drtv',
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
