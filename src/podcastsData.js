// ========================================
// Video Clips & Music Data
// ========================================

const PODCASTS = [
  {
    id: "vid-mvw0ab2",
    title: "3ABN Praise Him Music Network",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/iBcqT8L.png",
    category: "Музичні канали",
    country: "",
    url: "https://3abn.bozztv.com/3abn1/PraiseHim/smil:PraiseHim.smil/playlist.m3u8"
  },
  {
    id: "vid-ee0qa9e",
    title: "4 Fun TV (576i) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/rI1wo2l.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream.4fun.tv:8888/hls/4f_high/index.m3u8"
  },
  {
    id: "vid-hpwne4y",
    title: "4 Kurd",
    author: "Музичні канали",
    type: "video",
    cover: "https://www.aparatchi.com/images/chanells-logo/4kurd.svg",
    category: "Музичні канали",
    country: "",
    url: "https://4kuhls.persiana.live/hls/stream.m3u8"
  },
  {
    id: "vid-mbngtqp",
    title: "7 RadioVisione (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://radio7note.com/img/favicon/android-icon-192x192.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream10.xdevel.com/video1s976543-1932/stream/playlist.m3u8"
  },
  {
    id: "vid-giu87lh",
    title: "7S Music (576p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/zDiIhdN.png",
    category: "Музичні канали",
    country: "",
    url: "https://mumt03.tangotv.in/Dsly5z3H7SMUSIC/index.m3u8"
  },
  {
    id: "vid-2viwbpc",
    title: "7 YOU & ME (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Rte2K3x.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream10.xdevel.com/video0s977798-2239/stream/playlist.m3u8"
  },
  {
    id: "vid-laqqe8r",
    title: "9X Jalwa (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_9X_JALWA/images/LOGO_HD/image.png",
    category: "Музичні канали",
    country: "",
    url: "https://b.jsrdn.com/strm/channels/9xjalwa/master.m3u8"
  },
  {
    id: "vid-jdlafp9",
    title: "9X Jhakaas (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://dtil.tmsimg.com/assets/s90012_ld_h15_aa.png?lock=720x540",
    category: "Музичні канали",
    country: "",
    url: "https://9xjio.wiseplayout.com/9X_Jhakaas/master.m3u8"
  },
  {
    id: "vid-v0b5hrj",
    title: "9X Tashan (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_9X_TASHAN/images/LOGO_HD/image.png",
    category: "Музичні канали",
    country: "",
    url: "https://9xjio.wiseplayout.com/9X_Tashan/master.m3u8"
  },
  {
    id: "vid-dn1gt5y",
    title: "9XM (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_9XM/images/LOGO_HD/image.png",
    category: "Музичні канали",
    country: "",
    url: "https://9xjio.wiseplayout.com/9XM/master.m3u8"
  },
  {
    id: "vid-rnnf2c9",
    title: "13 Festival (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Ymk6j5o.png",
    category: "Музичні канали",
    country: "",
    url: "https://origin.dpsgo.com/ssai/event/Nftd0fM2SXasfDlRphvUsg/master.m3u8"
  },
  {
    id: "vid-40jb0ma",
    title: "15+ Music (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/kj21hwd.png",
    category: "Музичні канали",
    country: "",
    url: "https://live.15plusmg.ru/memfs/ce3366b1-bf25-4e24-96bb-1adf0d44bd3d.m3u8"
  },
  {
    id: "vid-oy4jp5w",
    title: "30A Music (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/gNWg9tl.png",
    category: "Музичні канали",
    country: "",
    url: "https://30a-tv.com/music.m3u8"
  },
  {
    id: "vid-bjmdoii",
    title: "70-80 TV (1080P)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/y4kNV3Q.png",
    category: "Музичні канали",
    country: "",
    url: "https://585b674743bbb.streamlock.net/9050/9050/playlist.m3u8"
  },
  {
    id: "vid-75edqs8",
    title: "98.1 Pearl FM (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/GY750xh.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://live2.tensila.com/pearl-v-1.pearlfm/hls/live/mystream.m3u8"
  },
  {
    id: "vid-jvudhy9",
    title: "A2i Music (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Fykhzxh.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://stream.sen-gt.com/A2iMusic/myStream/playlist.m3u8"
  },
  {
    id: "vid-w54zoyz",
    title: "Aaryaa TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://jiotvimages.cdn.jio.com/dare_images/images/aryatvtamil.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream.ottlive.co.in/aryatvtamil/index.m3u8"
  },
  {
    id: "vid-xbl5dhz",
    title: "Abdulmajeed Abdullah (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://assets.mbcmood.com/channels/1720184087Abdullah%20Majeed%20Abdullah%20banner.png",
    category: "Музичні канали",
    country: "",
    url: "https://d2hng5r56zpsbw.cloudfront.net/out/v1/9c4c990f44bb4767bb46271f326dd574/index.m3u8"
  },
  {
    id: "vid-ryax3q7",
    title: "Activa TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/VCUZKiw.png",
    category: "Музичні канали",
    country: "",
    url: "https://streamtv.mediasector.es/hls/activatv/index.m3u8"
  },
  {
    id: "vid-d8wulux",
    title: "ACW UG TV (480p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/8pzEmcJ.jpeg",
    category: "Музичні канали",
    country: "",
    url: "https://live.acwugtv.com/hls/stream.m3u8"
  },
  {
    id: "vid-phkdgui",
    title: "AE Radio TV (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/425dj2i.jpeg",
    category: "Музичні канали",
    country: "",
    url: "https://tls-cl.cdnz.cl/aeradio/live/playlist.m3u8"
  },
  {
    id: "vid-5c9w7r0",
    title: "AFN TV",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/LctanF8.png",
    category: "Музичні канали",
    country: "",
    url: "https://bozztv.com/1gbw5/tintv2/tintv2/playlist.m3u8"
  },
  {
    id: "vid-vj3ihqg",
    title: "Afrobeats (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/232ndRK.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream.ecable.tv/afrobeats/index.m3u8"
  },
  {
    id: "vid-oi869de",
    title: "Aghani Aghani TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/o6HSfNg.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdn.streamlane.tv/hls/aghanitv/index.m3u8"
  },
  {
    id: "vid-quq1oay",
    title: "AlbKanale Music TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/JdKxscs.png",
    category: "Музичні канали",
    country: "",
    url: "https://albportal.net/albkanalemusic.m3u8"
  },
  {
    id: "vid-l2k5pnv",
    title: "Alcance FM PLAY TV",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/ymcWecA.png",
    category: "Музичні канали",
    country: "",
    url: "https://video.wilohosting.com:19360/alcancefmtv/alcancefmtv.m3u8"
  },
  {
    id: "vid-qaehwbb",
    title: "Alterna TV (720p) [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://tv.alterna.ar/alternatv.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://tv.alterna.ar/stream/hls/live.m3u8"
  },
  {
    id: "vid-vt9n8b8",
    title: "AMC (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/yj8RNnG.png",
    category: "Музичні канали",
    country: "",
    url: "https://amchls.wns.live/hls/stream.m3u8"
  },
  {
    id: "vid-m8q4xmv",
    title: "like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0\" group-title=\"Music\",AMusic Channel (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/06zuf64.png",
    category: "Музичні канали",
    country: "",
    url: "https://d3s7x6kmqcnb6b.cloudfront.net/d/distro001a/LVP8DMYRYH6F6Y5UUO8J/hls3/now,-1m/m.m3u8?ads.vf=McCy6HuluFe"
  },
  {
    id: "vid-xq2lxy0",
    title: "Andy Haryana (576p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/rmCBD3e.png",
    category: "Музичні канали",
    country: "",
    url: "https://mumt03.tangotv.in/Dsly5z3HANDYHARYANA/index.m3u8"
  },
  {
    id: "vid-kpo0jfn",
    title: "Antenne Kaernten (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/nUKFDsb.jpeg",
    category: "Музичні канали",
    country: "",
    url: "https://60efd7a2b4d02.streamlock.net/a_kaernten/ngrp:livestream_all/playlist.m3u8"
  },
  {
    id: "vid-ftn82qd",
    title: "Antenne Steiermark (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/qnappvd.jpeg",
    category: "Музичні канали",
    country: "",
    url: "https://60efd7a2b4d02.streamlock.net/a_steiermark/ngrp:livestream_all/playlist.m3u8"
  },
  {
    id: "vid-4m0fezz",
    title: "Antenne Vorarlberg (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/GW750Zc.png",
    category: "Музичні канали",
    country: "",
    url: "https://5857db5306b83.streamlock.net/antennevorarlberg-live/_definst_/mp4:livestream/playlist.m3u8"
  },
  {
    id: "vid-7s5exg9",
    title: "ARY Musik (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/en/b/bb/ARY_Musik_logo.png",
    category: "Музичні канали",
    country: "",
    url: "https://arymusik.aryzap.com/3fd38b2c62d0c3bbd74aedabb533c03a/6459fa78/v1/01847ac7a4930b8ed5aa6ed04aba/01847ac8f5f70b8ed5aa6ed04abd/main.m3u8"
  },
  {
    id: "vid-xbobduf",
    title: "ATN Music (360p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://www.jagobd.com/wp-content/uploads/2015/12/atnmusic.jpg?x50681",
    category: "Музичні канали",
    country: "",
    url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/atnmusic.stream/playlist.m3u8"
  },
  {
    id: "vid-mrdc6xw",
    title: "Atomic Academy TV (480p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/ZbrDIbZ.png",
    category: "Музичні канали",
    country: "",
    url: "https://atomic.streamnet.ro/academia.m3u8"
  },
  {
    id: "vid-9zejk64",
    title: "Atomic TV (360p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/O4uI0Uy.png",
    category: "Музичні канали",
    country: "",
    url: "https://atomic.streamnet.ro/atomictv.m3u8"
  },
  {
    id: "vid-2vfmdrk",
    title: "Avang TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/3I1n7fO.png",
    category: "Музичні канали",
    country: "",
    url: "https://hls.avang.live/hls/stream.m3u8"
  },
  {
    id: "vid-yljjz2v",
    title: "Azahares Radio Multimedia (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/g1BFoSs.png",
    category: "Музичні канали",
    country: "",
    url: "https://streamyes.alsolnet.com/azaharesfm/live/playlist.m3u8"
  },
  {
    id: "vid-00l5igi",
    title: "B4U Music (576p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://dtil.tmsimg.com/assets/s158141_ld_h15_aa.png?lock=720x540",
    category: "Музичні канали",
    country: "",
    url: "https://cdn-2.pishow.tv/live/415/master.m3u8"
  },
  {
    id: "vid-3l0z4x3",
    title: "like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0\" group-title=\"Music\",Balle Balle (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://jiotvimages.cdn.jio.com/dare_images/images/Balle_Balle_TV.png",
    category: "Музичні канали",
    country: "",
    url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/balle-balle/index.m3u8?ads.vf=b8WZfP1_RIy"
  },
  {
    id: "vid-4ylii8l",
    title: "Baraza TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/TZ1unwF.png",
    category: "Музичні канали",
    country: "",
    url: "https://eco.streams.ovh:8081/barazatv/tracks-v1a1/mono.m3u8"
  },
  {
    id: "vid-ikxhxyf",
    title: "Baraza TV Deep House (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/TZ1unwF.png",
    category: "Музичні канали",
    country: "",
    url: "https://rtmp.streams.ovh:1936/barazarelax/barazazararelax/barazarelax/playlist.m3u8"
  },
  {
    id: "vid-6qfkvla",
    title: "Baraza TV Relaxing (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/TZ1unwF.png",
    category: "Музичні канали",
    country: "",
    url: "https://rtmp.streams.ovh:1936/barazarelax/barazarelax/playlist.m3u8"
  },
  {
    id: "vid-ube2m40",
    title: "Barbud Music (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/jbbxu0g.png",
    category: "Музичні канали",
    country: "",
    url: "https://raw.githubusercontent.com/taodicakhia/IPTV_Exception/master/channels/af/tolomusic.m3u8"
  },
  {
    id: "vid-2fa6rl4",
    title: "BE@TTV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/egK33Dj.png",
    category: "Музичні канали",
    country: "",
    url: "https://tv.beatfm.nl/live.m3u8"
  },
  {
    id: "vid-ebkwd6w",
    title: "Beats Radio (480p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/zkNUO5p.png",
    category: "Музичні канали",
    country: "",
    url: "https://videostream.shockmedia.com.ar:19360/beatsradio/beatsradio.m3u8"
  },
  {
    id: "vid-qs8y87b",
    title: "Bel RTL (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/0DUprIW.png",
    category: "Музичні канали",
    country: "",
    url: "https://bel-live-hls.akamaized.net/hls/live/2038650/BEL-Live-HLS/master.m3u8"
  },
  {
    id: "vid-fat39wi",
    title: "Best of Dance TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Музичні канали",
    country: "",
    url: "https://m1b2.worldcast.tv/dancetelevisionone/dancetelevisionone.m3u8"
  },
  {
    id: "vid-iddmm9f",
    title: "Bibel TV Musik (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/yIqOcP5.png",
    category: "Музичні канали",
    country: "",
    url: "https://bibeltv03.iptv-playoutcenter.de/bibeltv03/bibeltv03.stream_1/playlist.m3u8"
  },
  {
    id: "vid-2o72lzy",
    title: "BIZ Music (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/DfsCJwk/Uz-biz-music-5462.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://fl.biztv.media/music_720_QAKpGmVUjaPApCNjpsgBxrdqNihAkl/index.m3u8"
  },
  {
    id: "vid-z07rz4n",
    title: "BOKTV (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/mcNjuuO.png",
    category: "Музичні канали",
    country: "",
    url: "https://livestream2.bokradio.co.za/hls/Bok5c.m3u8"
  },
  {
    id: "vid-4og2kxb",
    title: "BPX TV Radio",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/86VXni8.jpeg",
    category: "Музичні канали",
    country: "",
    url: "https://video1.getstreamhosting.com:1936/8212/8212/playlist.m3u8"
  },
  {
    id: "vid-ybu5alh",
    title: "Bravo! TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/FN2J9hv.png",
    category: "Музичні канали",
    country: "",
    url: "https://streaming.social3.hr/bravoTVkdjd7djd/XAbSERW5p3/2.m3u8"
  },
  {
    id: "vid-vif0s67",
    title: "BTA TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/vygOosC.png",
    category: "Музичні канали",
    country: "",
    url: "https://cloud.fastchannel.es/manifiest/hls/prog9/btatv.m3u8"
  },
  {
    id: "vid-fwc4x9j",
    title: "Busuioc TV (540p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/CQtfBPu.png",
    category: "Музичні канали",
    country: "",
    url: "https://busuioctv.iforward.eu/hls/busuioc.m3u8"
  },
  {
    id: "vid-ni1tjdp",
    title: "Cadena Elite (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/3yeGDTP.png",
    category: "Музичні канали",
    country: "",
    url: "https://cloudvideo.servers10.com:8081/8004/index.m3u8"
  },
  {
    id: "vid-5krf1py",
    title: "Canal 3 KMK TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/sgRDRBK.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://live20.bozztv.com/giatv/giatv-KMKTV/KMKTV/chunks.m3u8"
  },
  {
    id: "vid-9c3qg06",
    title: "Canal Clave (480p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/7tMkA4Z.png",
    category: "Музичні канали",
    country: "",
    url: "https://tv.picta.cu/clave/clave_0.m3u8"
  },
  {
    id: "vid-0428mua",
    title: "CCTV-15 (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/CCV0eRG.png",
    category: "Музичні канали",
    country: "",
    url: "https://xykt-fix.github.io/play/a02e/index.m3u8"
  },
  {
    id: "vid-cfaph08",
    title: "CEACOM TV [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/hutdRfk.png",
    category: "Музичні канали",
    country: "",
    url: "https://eu1.servers10.com:8081/ceacom/index.m3u8"
  },
  {
    id: "vid-srk2an6",
    title: "Channel C (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/CnFdLaf.png",
    category: "Музичні канали",
    country: "",
    url: "https://mini.allinonereborn.fun/tata.php?id=11588"
  },
  {
    id: "vid-izp3zua",
    title: "City TV (576p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/mFL452f.png",
    category: "Музичні канали",
    country: "",
    url: "https://tv.city.bg/play/tshls/citytv/index.m3u8"
  },
  {
    id: "vid-oylnb12",
    title: "Clubbing TV France",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/MyiA92q.png",
    category: "Музичні канали",
    country: "",
    url: "https://d1j2csarxnwazk.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-uze1m6xh4fiyr-ssai-prd/master.m3u8"
  },
  {
    id: "vid-9qbm60f",
    title: "CMC (California Music Channel) (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/L38mC6H.png",
    category: "Музичні канали",
    country: "",
    url: "https://cmc-ono.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-msz1b2k",
    title: "CMC TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/FCb7Ag2.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream.cmctv.hr:49998/cmc/live.m3u8"
  },
  {
    id: "vid-az1kktv",
    title: "Company TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/ccdwsWj.png",
    category: "Музичні канали",
    country: "",
    url: "https://5929b138b139d.streamlock.net/CompanyTV/smil:CompanyTV.smil/master.m3u8"
  },
  {
    id: "vid-fzsuzli",
    title: "Conecta TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/qEk0QGa.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream8.mexiserver.com:19360/conectatvx/conectatvx.m3u8"
  },
  {
    id: "vid-frxn10e",
    title: "Cool FM 98.9 (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/uGE6lZ2.png",
    category: "Музичні канали",
    country: "",
    url: "https://live2.tensila.com/cool-v-1.arubara/hls/master.m3u8"
  },
  {
    id: "vid-fkjonjm",
    title: "Couleur 3 (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/VOIwYYd.png",
    category: "Музичні канали",
    country: "",
    url: "https://rtsc3video.akamaized.net/hls/live/2042837/c3video/3/playlist.m3u8"
  },
  {
    id: "vid-51o3ssb",
    title: "Cumbia Mix (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6901dfd41a05195b77301d7b/b306e57e4_Logo-TV-C.png",
    category: "Музичні канали",
    country: "",
    url: "https://cloud.tvomix.com/CUMBIAMIX/index.m3u8"
  },
  {
    id: "vid-g24zxj7",
    title: "D3 TV (480p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/uFEIBtB.png",
    category: "Музичні канали",
    country: "",
    url: "https://live20.bozztv.com/akamaissh101/ssh101/d3tvnet/playlist.m3u8"
  },
  {
    id: "vid-o6hp2d9",
    title: "Dance FM (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i2.paste.pics/ff3e1e1045a1968dcdbcda3824a94eb3.png",
    category: "Музичні канали",
    country: "",
    url: "https://5eaccbab48461.streamlock.net:1936/dancefm_1/dancefm_1/playlist.m3u8"
  },
  {
    id: "vid-bp8ajin",
    title: "Dance Television (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://pbs.twimg.com/profile_images/1268129322730127364/OJlQBZpS_400x400.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://m1b2.worldcast.tv/dancetelevisionone/2/dancetelevisionone.m3u8"
  },
  {
    id: "vid-skrgm1o",
    title: "like Gecko Chrome/144.0.0.0 Safari/537.36\" group-title=\"Music\",Dance TV [Geo-blocked]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/UKMR625.png",
    category: "Музичні канали",
    country: "",
    url: "https://op-group1-swiftservehd-1.dens.tv/h/h250/index.m3u8"
  },
  {
    id: "vid-5ukhq0a",
    title: "DanceTV Algorhythm (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Музичні канали",
    country: "",
    url: "https://m2b2.worldcast.tv:7443/dancetelevisionfour/dancetelevisionfour.m3u8"
  },
  {
    id: "vid-vl5ips3",
    title: "DanceTV Deep House District (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Музичні канали",
    country: "",
    url: "https://m1b2.worldcast.tv/dancetelevisiontwo/dancetelevisiontwo.m3u8"
  },
  {
    id: "vid-fa2d6c7",
    title: "DanceTV EDM Mainstage (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Музичні канали",
    country: "",
    url: "https://mbit1.worldcast.tv/dancetelevisionseven/multibit.m3u8"
  },
  {
    id: "vid-kgztwrj",
    title: "DanceTV House Floor (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Музичні канали",
    country: "",
    url: "https://m2b2.worldcast.tv:7443/dancetelevisionfive/dancetelevisionfive.m3u8"
  },
  {
    id: "vid-ojoys9r",
    title: "DanceTV Minimal Tech (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Музичні канали",
    country: "",
    url: "https://mbit1.worldcast.tv/dancetelevisionsix/multibit.m3u8"
  },
  {
    id: "vid-2o98xow",
    title: "DanceTV Techno Warehouse (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Музичні канали",
    country: "",
    url: "https://m2b2.worldcast.tv:7443/dancetelevisionthree/dancetelevisionthree.m3u8"
  },
  {
    id: "vid-5dhuk5p",
    title: "DASDING 90.8 (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/BmklHs8.png",
    category: "Музичні канали",
    country: "",
    url: "https://swrdasdingvr-hls.akamaized.net/hls/live/2018681/dasdingvr/master.m3u8"
  },
  {
    id: "vid-9ur0mzx",
    title: "DBM TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/ab6p2SW.png",
    category: "Музичні канали",
    country: "",
    url: "https://dbmtv.vedge.infomaniak.com/livecast/dbmtv/playlist.m3u8"
  },
  {
    id: "vid-zt4egxs",
    title: "DeepHouse District (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/IV2Qvc0.png",
    category: "Музичні канали",
    country: "",
    url: "https://eu-nl-012.worldcast.tv/dancetelevisiontwo/dancetelevisiontwo.m3u8"
  },
  {
    id: "vid-8fcbi8h",
    title: "Dega TV (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/ZTYvHyR/DEGA-TV-TELEPACK.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://59d39900ebfb8.streamlock.net/saintlouisltv/saintlouisltv/playlist.m3u8"
  },
  {
    id: "vid-x8m05hw",
    title: "Deluxe Dance (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Qu7t15Y.png",
    category: "Музичні канали",
    country: "",
    url: "https://sdn-global-live-streaming-packager-cache.3qsdn.com/64733/64733_264_live.m3u8"
  },
  {
    id: "vid-yd5mm4g",
    title: "Deluxe Lounge (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/pgCA35z.png",
    category: "Музичні канали",
    country: "",
    url: "https://jmp2.uk/stvp-CHAJ0500413A"
  },
  {
    id: "vid-jo5y9e3",
    title: "Deluxe Music (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/HimuPPb.png",
    category: "Музичні канали",
    country: "",
    url: "https://sdn-global-live-streaming-packager-cache.3qsdn.com/13456/13456_264_live.m3u8"
  },
  {
    id: "vid-9holan0",
    title: "Deluxe Rap (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/s3h67hx.png",
    category: "Музичні канали",
    country: "",
    url: "https://sdn-global-live-streaming-packager-cache.3qsdn.com/65183/65183_264_live.m3u8"
  },
  {
    id: "vid-jfg4usl",
    title: "Dhamaal (576p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://jiotvimages.cdn.jio.com/dare_images/images/Dhamaal_TV.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdn-1.pishow.tv/live/1291/master.m3u8"
  },
  {
    id: "vid-yx1cvwd",
    title: "Dhoom Music (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_DHOOM_MUSIC/images/LOGO_HD/image.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdn-1.pishow.tv/live/1456/master.m3u8"
  },
  {
    id: "vid-0ofczxb",
    title: "Dismar Radio TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/KOuxdMD.png",
    category: "Музичні канали",
    country: "",
    url: "https://rds3.desdeparaguay.net/dismartv/dismartv/playlist.m3u8"
  },
  {
    id: "vid-hx7a0hd",
    title: "DM Sat (576p) [Geo-Blocked]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/LdeA1Cn.png",
    category: "Музичні канали",
    country: "",
    url: "https://viamotionhsi.netplus.ch/live/eds/dmsat/browser-dash/dmsat.mpd"
  },
  {
    id: "vid-xbpb5p4",
    title: "DMF (1080p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/sJaBU7X.jpeg",
    category: "Музичні канали",
    country: "",
    url: "https://d-m-f.iptv-playoutcenter.de/dmf/dmf1/playlist.m3u8"
  },
  {
    id: "vid-obutpnt",
    title: "Dream Türk (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/vJ8VaZi.png",
    category: "Музичні канали",
    country: "",
    url: "https://live.duhnet.tv/S2/HLS_LIVE/dreamturknp/playlist.m3u8"
  },
  {
    id: "vid-89b2bsn",
    title: "DTR Music 1 (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/3picWDA.png",
    category: "Музичні канали",
    country: "",
    url: "https://kino-stream.online/hls/DTRMUSIC1.m3u8"
  },
  {
    id: "vid-jamkvns",
    title: "E40 (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/0RypDUY.png",
    category: "Музичні канали",
    country: "",
    url: "https://copacotf.desdeparaguay.net/e40tv/e40tv_py_alta/playlist.m3u8?admin=tvaccion"
  },
  {
    id: "vid-wfqpdyp",
    title: "EBS Musika (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/lSpplhD.png",
    category: "Музичні канали",
    country: "",
    url: "https://rpn.bozztv.com/ebstv/ebsmusika/index.m3u8"
  },
  {
    id: "vid-bmmwzb1",
    title: "EcuaMundo Radio TV (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/EMe5oWn.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://pacific.direcnode.com:3353/live/ecuamundotvlive.m3u8"
  },
  {
    id: "vid-c0yamvj",
    title: "El Radio 9090 FM (480p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://www.9090.fm/images/logo.png",
    category: "Музичні канали",
    country: "",
    url: "https://9090video.mobtada.com/hls/stream.m3u8"
  },
  {
    id: "vid-ai3bq8s",
    title: "El Sol Network TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/TIH3zlP.png",
    category: "Музичні канали",
    country: "",
    url: "https://tv.wracanal10.com:3025/live/elsoltvlive.m3u8"
  },
  {
    id: "vid-7871db7",
    title: "Ellinikos FM (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/y0ydCNB/unnamed-4.png",
    category: "Музичні канали",
    country: "",
    url: "https://rtmp.win:3603/live/ellinikosfmlive.m3u8"
  },
  {
    id: "vid-lzm53ss",
    title: "EnerGeek Radio (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://cdn.energeek.cl/logos/EG-Radio-2025_pfp.png",
    category: "Музичні канали",
    country: "",
    url: "https://backend.energeek.cl/webtv/egradioweb/index.m3u8?token=ZZDemoIPTVGH"
  },
  {
    id: "vid-zg4jp0k",
    title: "ETV Music (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN4900002RV_20250811T033455SQUARE.png",
    category: "Музичні канали",
    country: "",
    url: "https://cc-szivnms4rlah6.akamaized.net/WWBI/Amagi/ETV_Music_IN/playlist.m3u8"
  },
  {
    id: "vid-6t2iubz",
    title: "EU Music (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/fJdvyrG.png",
    category: "Музичні канали",
    country: "",
    url: "https://iptv.prosto.tv/ch134/tracks-v2a1/1.m3u8?21yo=1&live=1&ip=104.28.156.59&id=742347&secret=vu2y5m72&ses=ca0cfbf5db9d8003&uid=vu2y5m72&cs_track=false&e=1782900912&st=j-Ja2visdxrjH_8haQZjNg"
  },
  {
    id: "vid-o4clzbe",
    title: "Exclusiv TV",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/xw1IWoO.png",
    category: "Музичні канали",
    country: "",
    url: "https://ythls.armelin.one/channel/UCXxTnMoETkhNTmsqZc0JMhQ.m3u8"
  },
  {
    id: "vid-soce75f",
    title: "Extra TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/5edYPBO.png",
    category: "Музичні канали",
    country: "",
    url: "https://streaming.social3.hr/ExtraTVudzdhr5/uUankWqpXD/1.m3u8"
  },
  {
    id: "vid-p6v0y88",
    title: "Fabulosa Estéreo 100.5 FM (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/YFmzkOp.png",
    category: "Музичні канали",
    country: "",
    url: "https://www.streaming507.net:19360/videofabulosa/videofabulosa.m3u8"
  },
  {
    id: "vid-x2353lf",
    title: "Fairuz (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://shahid.mbc.net/mediaObject/f809d51c-e83d-43c9-8236-78731c2216ad?type=png",
    category: "Музичні канали",
    country: "",
    url: "https://shd-amg-fast.edgenextcdn.net/tx029/playlist.m3u8"
  },
  {
    id: "vid-muarrup",
    title: "Falastini TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/6B3Cims.png",
    category: "Музичні канали",
    country: "",
    url: "https://rp.tactivemedia.com/palestiniantv_source/live/playlist.m3u8"
  },
  {
    id: "vid-klozvm3",
    title: "Famatv (1080p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/tMmRp18/Fama-TV-cor-whitebg-hotizontal.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://tv2.fastcast4u.com:3310/live/famatvlive.m3u8"
  },
  {
    id: "vid-dq4lx9g",
    title: "Fame95 FM (480p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/n3PUxes.png",
    category: "Музичні канали",
    country: "",
    url: "https://rjr-fame.akamaized.net/hls/live/2033820/RJR_FAME/master.m3u8"
  },
  {
    id: "vid-pmf6ioq",
    title: "Finest TV (288p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/1uoP10V.png",
    category: "Музичні канали",
    country: "",
    url: "https://media.finest.tv/hls/live.m3u8"
  },
  {
    id: "vid-vdlbf08",
    title: "Flex Studio Radio TV [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/tZjqtxd.png",
    category: "Музичні канали",
    country: "",
    url: "https://live20.bozztv.com/akamaissh101/ssh101/fsradiotv/playlist.m3u8"
  },
  {
    id: "vid-nsfi0op",
    title: "FM ITALIA (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/54CO2u9.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream2.xdevel.com/video0s975817-1183/stream/playlist.m3u8"
  },
  {
    id: "vid-aa0z4mg",
    title: "FM Mundo (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/1nNnYQO.png",
    category: "Музичні канали",
    country: "",
    url: "https://video2.makrodigital.com/fmmundo/fmmundo/playlist.m3u8"
  },
  {
    id: "vid-hh39gkz",
    title: "Folk TV (1080p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/4b9aZ9P.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream.nasatv.com.mk/folktv/hls/folktv_live.m3u8"
  },
  {
    id: "vid-9zfpwrn",
    title: "FOLX Music (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/ze04puX.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdne.folxplay.tv/folx-trz/streams/ch-4/master.m3u8"
  },
  {
    id: "vid-6wzf5m1",
    title: "Folx Slovenija (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/RK1IASU.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdne.folxplay.tv/folx-trz/streams/ch-5/master.m3u8"
  },
  {
    id: "vid-oxfjctw",
    title: "FomixTV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/7SLYEMG.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream.fomixmedia.nl/FomixTV/video.m3u8"
  },
  {
    id: "vid-mbk8evy",
    title: "FON Music (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/tXABQDE.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdn-01.bonus-tv.ru/tntmusic/playlist.m3u8"
  },
  {
    id: "vid-a47tv9d",
    title: "Frecuencia Musical TV [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/vPxvbVv.png",
    category: "Музичні канали",
    country: "",
    url: "https://s2.tvdatta.com:3307/hybrid/play.m3u8"
  },
  {
    id: "vid-5s3ysdm",
    title: "FTV (576p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/7lpISyN.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://stream8.cinerama.uz/1018/playlist.m3u8"
  },
  {
    id: "vid-64xlsrd",
    title: "Fuego TV [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/T9vWjeB.png",
    category: "Музичні канали",
    country: "",
    url: "https://streamunoapp.com:3553/live/cromtvlive.m3u8"
  },
  {
    id: "vid-16bwhfr",
    title: "Fun Radio",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/wgxuYsQ.png",
    category: "Музичні канали",
    country: "",
    url: "https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/funradiofr.m3u8"
  },
  {
    id: "vid-wdas3t7",
    title: "FUSION TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/WMrYEgH.png",
    category: "Музичні канали",
    country: "",
    url: "https://edge20.vedge.infomaniak.com/livecast/ik:fusiontv/manifest.m3u8"
  },
  {
    id: "vid-vi0i14z",
    title: "Galaxy TV (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/P5OABe5.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream.castr.com/6463248048d6cd3e143655b2/live_43351ad0f3b411ed81c78fcc31887c54/index.fmp4.m3u8"
  },
  {
    id: "vid-5dhx2ds",
    title: "GEM 24B",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/8LgdPst.png",
    category: "Музичні канали",
    country: "",
    url: "https://ca-rt.onetv.app/gem24b/index-0.m3u8?token=onetv202"
  },
  {
    id: "vid-2l3i1r9",
    title: "GEM Mifa",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/qlI7o7V.png",
    category: "Музичні канали",
    country: "",
    url: "https://ca-rt.onetv.app/gemmifa/index-0.m3u8?token=onetv202"
  },
  {
    id: "vid-by8y6k0",
    title: "GEM Mifa Plus",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/8FIAqR5.png",
    category: "Музичні канали",
    country: "",
    url: "https://ca-rt.onetv.app/gemmifaplus/index-0.m3u8?token=onetv202"
  },
  {
    id: "vid-k1yduwq",
    title: "Gex TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://gextv.com/LOGO-WHITE.png",
    category: "Музичні канали",
    country: "",
    url: "https://live20.bozztv.com/akamaissh101/ssh101/gextvaccess/playlist.m3u8"
  },
  {
    id: "vid-lghumqb",
    title: "Gigant FM (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/LwEHfjD.png",
    category: "Музичні канали",
    country: "",
    url: "https://video.uitzending.tv:19360/gigantfm/gigantfm.m3u8"
  },
  {
    id: "vid-wao6i0q",
    title: "GMTV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/GJYb8c8.png",
    category: "Музичні канали",
    country: "",
    url: "https://livechannel.mdc.akamaized.net/stitch/livechannel/1341/master1400000.m3u8;session=live_stream_1341"
  },
  {
    id: "vid-cxikhkf",
    title: "GO TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/jkvYVyz/Captura.png",
    category: "Музичні канали",
    country: "",
    url: "https://rds3.desdeparaguay.net/gotv/gotv/playlist.m3u8"
  },
  {
    id: "vid-04i7c29",
    title: "GugakTV 국악방송 (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Ey7Htm8.png",
    category: "Музичні канали",
    country: "",
    url: "https://mgugaklive.nowcdn.co.kr/gugakvideo/gugakvideo.stream/playlist.m3u8"
  },
  {
    id: "vid-x6ra0tm",
    title: "HEi Now (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/oMHiGRN.png",
    category: "Музичні канали",
    country: "",
    url: "https://copacogen.desdeparaguay.net/heitv/heitv_py_alta/playlist.m3u8?admin=nacion"
  },
  {
    id: "vid-tck5ole",
    title: "High Vision (1080p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/zhCgoru.png",
    category: "Музичні канали",
    country: "",
    url: "https://streamer1.connectto.com/HIGHVISION_WEB_1205/index.m3u8"
  },
  {
    id: "vid-4kgalve",
    title: "Hitradio O3 (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Hitradio_%C3%963.svg/960px-Hitradio_%C3%963.svg.png",
    category: "Музичні канали",
    country: "",
    url: "https://studiocam-oe3.mdn.ors.at/orf/studiocam_oe3/q6a/manifest.mpd"
  },
  {
    id: "vid-qnk0d5y",
    title: "Hitz TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/SbZgsDh.png",
    category: "Музичні канали",
    country: "",
    url: "https://streamer2.nexgen.bz/13-HITZ/index.m3u8"
  },
  {
    id: "vid-6421mf8",
    title: "HMI PROMZ NEWS (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/gwPaw3v.png",
    category: "Музичні канали",
    country: "",
    url: "https://video1.getstreamhosting.com:1936/8326/8326/playlist.m3u8"
  },
  {
    id: "vid-57f2amw",
    title: "Hype Visual Radio (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://cdn.onlineradiobox.com/img/fblogo/1/97371.v21.png",
    category: "Музичні канали",
    country: "",
    url: "https://streammix.alsolnet.com/hyperadio/live/playlist.m3u8"
  },
  {
    id: "vid-sb59vcr",
    title: "Identité Télé Caraïbes (548p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Atsf6Cd.png",
    category: "Музичні канали",
    country: "",
    url: "https://vdo2.pro-fhi.net:3769/stream/play.m3u8"
  },
  {
    id: "vid-064g4wt",
    title: "Impact TV Dance (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/G5mNdpE.png",
    category: "Музичні канали",
    country: "",
    url: "https://online.tvimpact.live/hls/dancetv.m3u8"
  },
  {
    id: "vid-yqu48dw",
    title: "Impact TV Manele (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/G5mNdpE.png",
    category: "Музичні канали",
    country: "",
    url: "https://online.tvimpact.live/hls/impact_tv.m3u8"
  },
  {
    id: "vid-xmumydl",
    title: "Infinita TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/1nHxdkR.png",
    category: "Музичні канали",
    country: "",
    url: "https://s2.tvdatta.com:3753/hybrid/play.m3u8"
  },
  {
    id: "vid-3e2z92j",
    title: "Insync (576p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://jiotvimages.cdn.jio.com/dare_images/images/Insync.png",
    category: "Музичні канали",
    country: "",
    url: "https://mumt04.tangotv.in/INSYNC/index.m3u8"
  },
  {
    id: "vid-zxffcyb",
    title: "IQ Channel (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/hwuaomt.png",
    category: "Музичні канали",
    country: "",
    url: "https://rtmp.info/iqtv/envivo/playlist.m3u8"
  },
  {
    id: "vid-3j29mtr",
    title: "Italianissimo (360p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/JCpbUZB.png",
    category: "Музичні канали",
    country: "",
    url: "https://vcp.myplaytv.com/italianissimo/italianissimo/playlist.m3u8"
  },
  {
    id: "vid-8m746wu",
    title: "iTV Afrobeats Music",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/pvLQmQK7/itv.png",
    category: "Музичні канали",
    country: "",
    url: "https://ca1.buximedia.com/itv/afrobeats/tracks-v1a1/mono.m3u8"
  },
  {
    id: "vid-zy25c2r",
    title: "iTV Arabic Music",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/pvLQmQK7/itv.png",
    category: "Музичні канали",
    country: "",
    url: "https://ca1.buximedia.com/itv/arabic/tracks-v1a1/mono.m3u8"
  },
  {
    id: "vid-7kmpi6n",
    title: "iTV Indian Music",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/pvLQmQK7/itv.png",
    category: "Музичні канали",
    country: "",
    url: "https://ca1.buximedia.com/itv/indian/tracks-v1a1/mono.m3u8"
  },
  {
    id: "vid-i9osf5w",
    title: "iTV Latin Music",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/pvLQmQK7/itv.png",
    category: "Музичні канали",
    country: "",
    url: "https://ca1.buximedia.com/itv/latin/tracks-v1a1/mono.m3u8"
  },
  {
    id: "vid-9ouzbsk",
    title: "ITV Persian Music (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/pvLQmQK7/itv.png",
    category: "Музичні канали",
    country: "",
    url: "https://ca1.buximedia.com/itv/persian/tracks-v1a1/mono.m3u8"
  },
  {
    id: "vid-7yqmc01",
    title: "iTV Turkish Music",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/pvLQmQK7/itv.png",
    category: "Музичні канали",
    country: "",
    url: "https://ca1.buximedia.com/itv/turkish/tracks-v1a1/mono.m3u8"
  },
  {
    id: "vid-ya1lr05",
    title: "iTV Urban Music",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/pvLQmQK7/itv.png",
    category: "Музичні канали",
    country: "",
    url: "https://ca1.buximedia.com/itv/love2/tracks-v1a1/mono.m3u8"
  },
  {
    id: "vid-abzdn0n",
    title: "Ivoire Channel (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/gKbNqQv.png",
    category: "Музичні канали",
    country: "",
    url: "https://video1.getstreamhosting.com:1936/8244/8244/playlist.m3u8"
  },
  {
    id: "vid-q2ku8jf",
    title: "Jazz TV (1080p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/CbQlSFX.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream.nasatv.com.mk/jazztv/hls/jazztv_live.m3u8"
  },
  {
    id: "vid-99ci9vv",
    title: "Jeddah Radio (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://aloula.faulio.com/storage/mediagallery/bd/f5/fullhd_527bf54a5adb56ac17f572ac2cd0801304db3baf.png",
    category: "Музичні канали",
    country: "",
    url: "https://live.kwikmotion.com/sbrksajeddahradiolive/srpksajeddahradio/chunks.m3u8"
  },
  {
    id: "vid-6wobnjb",
    title: "Joe FM (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/k9KJWzN/320px-Joe-radio-logo-2016-svg.png",
    category: "Музичні канали",
    country: "",
    url: "https://dpp-streamlive-plain.medialaancdn.be/joe_kijklive/plain/hls_hd.m3u8"
  },
  {
    id: "vid-1ymojfi",
    title: "JooMusic (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/KHuKQQL.png",
    category: "Музичні канали",
    country: "",
    url: "https://livecdn.live247stream.com/joomusic/tv/playlist.m3u8"
  },
  {
    id: "vid-adi0igi",
    title: "Jordan Songs (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/1DE7Gmw.png",
    category: "Музичні канали",
    country: "",
    url: "https://playlist.fasttvcdn.com/pl/cc0blorawy1ibohhrupraa/Song/playlist.m3u8"
  },
  {
    id: "vid-u187e7e",
    title: "JRTV Järviradio (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://jarviradio.fi/jrtv2/wp-content/uploads/2022/01/jrtv1.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://streamer.radiotaajuus.fi/memfs/47f113bf-04ea-493b-a9d4-52945fd9db31.m3u8"
  },
  {
    id: "vid-6wvnq9m",
    title: "Juice TV (1080p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/WaaaW0w.png",
    category: "Музичні канали",
    country: "",
    url: "https://juicex.nz/hls/mystream.m3u8"
  },
  {
    id: "vid-9m3ig3i",
    title: "KandelaTV (480p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/cCFxyIp.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://streamtv.intervenhosting.net:3718/live/kandelamedioslive.m3u8"
  },
  {
    id: "vid-046vu1o",
    title: "Karibena [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/cgHjg1e.png",
    category: "Музичні канали",
    country: "",
    url: "https://live-player.egostreaming.pe/karibenatv_685a-pe-a5676-584412/index.fmp4.m3u8"
  },
  {
    id: "vid-quyofms",
    title: "Kayhan TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/2MDjU7x.png",
    category: "Музичні канали",
    country: "",
    url: "https://playout395.livestreamingcdn.com/live/Stream1/playlist.m3u8"
  },
  {
    id: "vid-oy2pjqd",
    title: "Kiss Kiss Napoli TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/RsGiBwE.png",
    category: "Музичні канали",
    country: "",
    url: "https://58f12ffd2447a.streamlock.net/KKTVNapoli/livestream/playlist.m3u8"
  },
  {
    id: "vid-azkbstq",
    title: "Kiss Kiss TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/ja6c2YZ.png",
    category: "Музичні канали",
    country: "",
    url: "https://58f12ffd2447a.streamlock.net/KKMulti/livestream/playlist.m3u8"
  },
  {
    id: "vid-w6vjs88",
    title: "Kiss TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/NKfVymH.png",
    category: "Музичні канали",
    country: "",
    url: "https://tv.broadcasting.ro/kisstv/a629c031-2170-4ee9-a36d-87a891aa3131.m3u8"
  },
  {
    id: "vid-cqeiukc",
    title: "Klape i Tambure TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/sKj3dgc.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream.cmctv.hr:49998/kit/live.m3u8"
  },
  {
    id: "vid-skwcgmj",
    title: "KpopTV Play (576p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Tf0vweF.png",
    category: "Музичні канали",
    country: "",
    url: "https://giatv.bozztv.com/giatv/giatv-kpoptvplay/kpoptvplay/playlist.m3u8"
  },
  {
    id: "vid-4933hd3",
    title: "KRAL Pop TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/ch365lh.png",
    category: "Музичні канали",
    country: "",
    url: "https://dogus-live.daioncdn.net/kralpoptv/playlist.m3u8"
  },
  {
    id: "vid-js9x81s",
    title: "Kronehit (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/dQJQv1X.png",
    category: "Музичні канали",
    country: "",
    url: "https://bitcdn-kronehit.bitmovin.com/v2/hls/playlist.m3u8"
  },
  {
    id: "vid-zauuqaf",
    title: "KurdMax Music (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/otnIdEu.png",
    category: "Музичні канали",
    country: "",
    url: "https://6476e46b58f91.streamlock.net/music/MUSIC2402/playlist.m3u8"
  },
  {
    id: "vid-78p9mny",
    title: "La 98.1 TV (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/7380kTN.png",
    category: "Музичні канали",
    country: "",
    url: "https://6019dcac4147f.streamlock.net:9443/la98/Invosa/playlist.m3u8"
  },
  {
    id: "vid-2d2ne2p",
    title: "La Cantina Memorias (480p) [Geo-blocked]",
    author: "Музичні канали",
    type: "video",
    cover: "https://imgs1.e-droid.net/srv/imgs/seccs/34751741_ico.png",
    category: "Музичні канали",
    country: "",
    url: "https://video.xtrematv.com:3208/live/memoriaslacantinalive.m3u8"
  },
  {
    id: "vid-rs2x0ym",
    title: "La Fabulosa Radio y TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/GjME5H0.png",
    category: "Музичні канали",
    country: "",
    url: "https://eu1.servers10.com:8081/8004/index.m3u8"
  },
  {
    id: "vid-65e1m0f",
    title: "La Hermandad Salsera (1080p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/7Wlt6bc.png",
    category: "Музичні канали",
    country: "",
    url: "https://streamlov.alsolnet.com/hermandadsalsera/live/playlist.m3u8"
  },
  {
    id: "vid-8df5k92",
    title: "La Kalle (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://www.tdtparatodos.tv/sites/default/files/la_kalle.png",
    category: "Музичні канали",
    country: "",
    url: "https://mdstrm.com/live-stream-playlist/58d191f07290fbb058025843.m3u8"
  },
  {
    id: "vid-jrhz531",
    title: "La Mega Mundial",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/UdMsgkt.png",
    category: "Музичні канали",
    country: "",
    url: "https://server40.servistreaming.com:3477/stream/play.m3u8"
  },
  {
    id: "vid-l6iqf9g",
    title: "LA MIA TV (720p) [Geo-blocked]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/XIwTM1h.png",
    category: "Музичні канали",
    country: "",
    url: "https://ss2.tvrdomi.com:1936/lamiatv/lamiatv/playlist.m3u8"
  },
  {
    id: "vid-fbfscgt",
    title: "La Morada Radio TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/E3wDEX5.png",
    category: "Музичні канали",
    country: "",
    url: "https://movil.ejeserver.com/live/lamoradatv.m3u8"
  },
  {
    id: "vid-6ocbvqy",
    title: "La Perla Radio TV (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/8wDMgmB.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://eu1.servers10.com:8081/8068/index.m3u8"
  },
  {
    id: "vid-ch7cu3g",
    title: "La Que Buena Atlanta",
    author: "Музичні канали",
    type: "video",
    cover: "https://iili.io/JysD2a4.png",
    category: "Музичні канали",
    country: "",
    url: "https://streamyes.alsolnet.com/quebuenaatlanta/live/index.m3u8"
  },
  {
    id: "vid-adgv5op",
    title: "La Top 102.9 (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/ZqwLPag.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://59d39900ebfb8.streamlock.net/top102/top102/playlist.m3u8"
  },
  {
    id: "vid-mf01xeo",
    title: "La Top 107.7 (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/vgHhh1W.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://59d39900ebfb8.streamlock.net/top107/top107/playlist.m3u8"
  },
  {
    id: "vid-zppuejv",
    title: "La Urban TV (1080p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/hythjEn.png",
    category: "Музичні канали",
    country: "",
    url: "https://urbanrevolution.es:8443/live/TV/playlist.m3u8"
  },
  {
    id: "vid-zrwp3ep",
    title: "La Voz del Tropico (480p) [Geo-blocked]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/DKDFpHt.png",
    category: "Музичні канали",
    country: "",
    url: "https://ss2.tvrdomi.com:1936/lavozdeltropico/lavozdeltropico/playlist.m3u8"
  },
  {
    id: "vid-14vnd2q",
    title: "La-X (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/i2GnQTq.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream.eleden.com/livelax/ngrp:livelax_all/playlist.m3u8"
  },
  {
    id: "vid-8i15hrl",
    title: "Latin Zone TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/duEDsne.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdn.streamingcpanel.com:3784/live/latinzonetvlive.m3u8"
  },
  {
    id: "vid-p1q1dny",
    title: "Lausitzwelle (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/4kYF4bK.png",
    category: "Музичні канали",
    country: "",
    url: "https://h056.video-stream-hosting.de/easycast11-live/_definst_/mp4:livestreamhd2/playlist.m3u8?ref="
  },
  {
    id: "vid-m9a12bc",
    title: "LaXitosa Panamá (360p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Pt4F9Xz.png",
    category: "Музичні канали",
    country: "",
    url: "https://stmvideo2.livecastv.com/lax953/lax953/playlist.m3u8"
  },
  {
    id: "vid-h21yg3i",
    title: "Lingkar TV",
    author: "Музичні канали",
    type: "video",
    cover: "https://lingkartv.com/assets/img/logo-square.png",
    category: "Музичні канали",
    country: "",
    url: "https://lingkartv.my.id/hls/lingkartv.m3u8"
  },
  {
    id: "vid-5rdqapw",
    title: "LiraTV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/hBswXYZ.png",
    category: "Музичні канали",
    country: "",
    url: "https://cloud2.streaminglivehd.com:1936/liratv/liratv/playlist.m3u8"
  },
  {
    id: "vid-hnpt2vl",
    title: "Littoral FM (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/DCZKAQ1.png",
    category: "Музичні канали",
    country: "",
    url: "https://live.creacast.com/littoralfm-ch1/stream/playlist.m3u8"
  },
  {
    id: "vid-rkum6w0",
    title: "Live99FM (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/U43UrQT.png",
    category: "Музичні канали",
    country: "",
    url: "https://media.streambrothers.com:1936/8014/8014/playlist.m3u8"
  },
  {
    id: "vid-xf8nocr",
    title: "LiveXLive (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/KFzEoed.png",
    category: "Музичні канали",
    country: "",
    url: "https://livestream.liveone.com/lc1/p1.m3u8"
  },
  {
    id: "vid-o367o8c",
    title: "Lobo TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/3fA50RJ.png",
    category: "Музичні канали",
    country: "",
    url: "https://5ca3e84a76d30.streamlock.net/tvlobo/videotvlobo/playlist.m3u8"
  },
  {
    id: "vid-id4ocg6",
    title: "Look Thoong TV (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/eT7iE34.png",
    category: "Музичні канали",
    country: "",
    url: "https://livefta.malimarcdn.com/ftaedge00/lookthoongtv.sdp/playlist.m3u8"
  },
  {
    id: "vid-r529ze0",
    title: "Love TV (1080p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/B8iaejQ.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream.nasatv.com.mk/lovetv/hls/lovetv_live.m3u8"
  },
  {
    id: "vid-5epdvvt",
    title: "LRT Klasika (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Fa8Vhu0.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream-live.lrt.lt/klasika/master.m3u8"
  },
  {
    id: "vid-n2fs4lz",
    title: "LRT Opus (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/oLuZTMH.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream-live.lrt.lt/opus/master.m3u8"
  },
  {
    id: "vid-mus4ib0",
    title: "Luna Estéreo 106.4 FM (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/cESeD6R.png",
    category: "Музичні канали",
    country: "",
    url: "https://servervideo.intermediacolombia.com:19360/kychbbfhdz/kychbbfhdz.m3u8"
  },
  {
    id: "vid-e4ay2vd",
    title: "M2 (540p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/AfcBWCg.png",
    category: "Музичні канали",
    country: "",
    url: "https://live.m2.tv/hls3/stream.m3u8"
  },
  {
    id: "vid-d8ja320",
    title: "m2o TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Radio_m2o_-_Logo_2019.svg/500px-Radio_m2o_-_Logo_2019.svg.png",
    category: "Музичні канали",
    country: "",
    url: "https://4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S62628868/uhdWBlkC1AoO/playlist.m3u8"
  },
  {
    id: "vid-vkwmti1",
    title: "M6 Music",
    author: "Музичні канали",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/en/c/c9/M6_Music_%282012%29.png",
    category: "Музичні канали",
    country: "",
    url: "https://test.946985.filegear-sg.me/proxy/803c517b325bfafc"
  },
  {
    id: "vid-qqc6vm6",
    title: "like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0\" group-title=\"Music\",M+ (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Ho8N310.png",
    category: "Музичні канали",
    country: "",
    url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/m-plus/master.m3u8?ads.vf=99_BajuDhjC"
  },
  {
    id: "vid-f83glv4",
    title: "M-1 (480p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/gb4NmNHT/M1-2025.png",
    category: "Музичні канали",
    country: "",
    url: "https://m-1.data.lt/m-1/smil:m-1.smil/playlist.m3u8"
  },
  {
    id: "vid-7yin70f",
    title: "Madras FM TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/spGg1CZ.png",
    category: "Музичні канали",
    country: "",
    url: "https://edge12.vedge.infomaniak.com/livecast/ik:madrasfmtv/manifest.m3u8"
  },
  {
    id: "vid-2k9vqhd",
    title: "Magenta Musik 360 (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/R74gG7U.png",
    category: "Музичні канали",
    country: "",
    url: "https://streaming.magentamusik.de/csm/573870/magentamusik1/index.m3u8"
  },
  {
    id: "vid-hfm69mt",
    title: "Magic TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/n7bcrrp.png",
    category: "Музичні канали",
    country: "",
    url: "https://bss1.neterra.tv/magictv/magictv.m3u8"
  },
  {
    id: "vid-fvpdhvz",
    title: "Magic TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/9izrr4d.png",
    category: "Музичні канали",
    country: "",
    url: "https://tv.broadcasting.ro/magictv/925f90db-5c88-4190-a53d-5163cdffe6f4.m3u8"
  },
  {
    id: "vid-uqonmwu",
    title: "Maimon TV Canal 3 (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/twldaaC.png",
    category: "Музичні канали",
    country: "",
    url: "https://tele-stream.telecasa.net/live/st3/maimontv-hd/index.m3u8"
  },
  {
    id: "vid-xx4s1a9",
    title: "Majid Al Mohandis (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.discogs.com/Fk9Bm8gTYJYeVXIJKX-EOGmYQ90sVQPtkIW5ZK4fydo/rs:fit/g:sm/q:90/h:372/w:412/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9MLTE2OTY4/MzMtMTU2ODk0NjI5/MC01Njk2LmpwZWc.jpeg",
    category: "Музичні канали",
    country: "",
    url: "https://shd-amg-fast.edgenextcdn.net/tx019/playlist.m3u8"
  },
  {
    id: "vid-1df8gxd",
    title: "Makao TV (360p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/asD5y7i.png",
    category: "Музичні канали",
    country: "",
    url: "https://live.obslivestream.com/makaomux/tracks-v2a1/playlist.m3u8"
  },
  {
    id: "vid-05h272s",
    title: "Marina TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/F2PzEaw.png",
    category: "Музичні канали",
    country: "",
    url: "https://ffs.gulfsat.com/Marina-TV-HD/index.m3u8"
  },
  {
    id: "vid-as5t8n6",
    title: "Más FM 95.9 (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/TJ4gWQM.png",
    category: "Музичні канали",
    country: "",
    url: "https://vivo.solumedia.com:19360/masfm/masfm.m3u8"
  },
  {
    id: "vid-6bgkk7d",
    title: "MasMusica FM (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/tCg7owd.png",
    category: "Музичні канали",
    country: "",
    url: "https://movil.ejeserver.com/live/masmusica.m3u8"
  },
  {
    id: "vid-a9u6mvs",
    title: "Mastiii (576p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/lxgXHx4.png",
    category: "Музичні канали",
    country: "",
    url: "https://mumt02.tangotv.in/MASTIII/index.m3u8"
  },
  {
    id: "vid-sg7m98d",
    title: "Max Music (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://livetv.ashokadigital.net/upload/logo/1732168750_WhatsApp%20Image%202024-11-21%20at%2011.05.55%20AM%20(1).jpeg",
    category: "Музичні канали",
    country: "",
    url: "https://live.maxtn.in/maxmusic/maxmusic/index.m3u8"
  },
  {
    id: "vid-rkl5y6r",
    title: "Max TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/TF4snV6.jpeg",
    category: "Музичні канали",
    country: "",
    url: "https://streamer2.nexgen.bz/14-MAX/index.m3u8"
  },
  {
    id: "vid-bimehkq",
    title: "MBC America (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/RRc23ra.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdn-us-east-prod-ingest-infra-dacast-com.akamaized.net/624ff8f9-db18-da92-4d42-896fa2ff3eb3/source/index.m3u8"
  },
  {
    id: "vid-s8mtx56",
    title: "MBC FM (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/lF8UxvR.png",
    category: "Музичні канали",
    country: "",
    url: "https://dbbv9umqcd7cs.cloudfront.net/out/v1/db15b75c3cc0400c91961468d6a232ac/index.m3u8"
  },
  {
    id: "vid-9yfcp3h",
    title: "MBC Mood (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://shahid.mbc.net/mediaObject/c2b6a882-458b-446e-b0fe-f97f7992149a?height=auto&width=144&croppingPoint=&version=1&type=png",
    category: "Музичні канали",
    country: "",
    url: "https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-mood/78367bf48ccdba501d0d014a10c21031/index.m3u8"
  },
  {
    id: "vid-5a1hq11",
    title: "MBC Mood (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://shahid.mbc.net/mediaObject/c2b6a882-458b-446e-b0fe-f97f7992149a?height=auto&width=144&croppingPoint=&version=1&type=png",
    category: "Музичні канали",
    country: "",
    url: "https://shd-gcp-live.edgenextcdn.net/live/bitmovin-wanasah/13e82ea6232fa647c43b26e8a41f173d/index.m3u8"
  },
  {
    id: "vid-8ht4hfd",
    title: "MCN6 Music Channel (1080p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/j6IiysJ.png",
    category: "Музичні канали",
    country: "",
    url: "https://d18fcxaqfnwjhj.cloudfront.net/CDN_Ingest/MCN6_MUSIC.smil/Playlist.m3u8"
  },
  {
    id: "vid-vhw4a1z",
    title: "MegaBox (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/JqaW7Ei.png",
    category: "Музичні канали",
    country: "",
    url: "https://hdbox.chunklistv.com/live?stream=megabox"
  },
  {
    id: "vid-gpsmjge",
    title: "Melody (288p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/9GVyQ6x.png",
    category: "Музичні канали",
    country: "",
    url: "https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/radiokaraoke.m3u8"
  },
  {
    id: "vid-h65jql1",
    title: "Melody FM Jordan (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/J8omcNz.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdn3.wowza.com/1/OVRrOWxXUEswS2Yv/eGVxSWZy/hls/live/playlist.m3u8"
  },
  {
    id: "vid-802hpwq",
    title: "Memorias del Corazon (480p) [Geo-blocked]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/sVLDzzM.png",
    category: "Музичні канали",
    country: "",
    url: "https://video.xtrematv.com:3401/live/grupomemoriaslive.m3u8"
  },
  {
    id: "vid-a055mwh",
    title: "Memorias FM Pop Latino (480p) [Geo-blocked]",
    author: "Музичні канали",
    type: "video",
    cover: "https://imgs1.e-droid.net/srv/imgs/seccs/34751581_ico.png",
    category: "Музичні канали",
    country: "",
    url: "https://video.xtrematv.com:3891/live/memoriaspoplatinolive.m3u8"
  },
  {
    id: "vid-deu9t2u",
    title: "Memorias TV Classic (480p) [Geo-blocked]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/tLTQLnv.png",
    category: "Музичні канали",
    country: "",
    url: "https://video.xtrematv.com:3576/live/memoriasclassiclive.m3u8"
  },
  {
    id: "vid-1gmdbyr",
    title: "Memorias TV Tropical (480p) [Geo-blocked]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Y9GFDcV.png",
    category: "Музичні канали",
    country: "",
    url: "https://video.xtrematv.com:3361/live/memoriastropicallive.m3u8"
  },
  {
    id: "vid-3tzc5hz",
    title: "Metaleitor TV",
    author: "Музичні канали",
    type: "video",
    cover: "https://new.opencaster.com/uploads/logos/logo_14_1752798826.png",
    category: "Музичні канали",
    country: "",
    url: "https://vs20.live.opencaster.com/metaleitortv_423d3342/index.m3u8"
  },
  {
    id: "vid-ikprspn",
    title: "Metropoli Medios TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/yID5T2S.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://eu1.servers10.com:8081/8214/index.m3u8"
  },
  {
    id: "vid-co6crdc",
    title: "Mezzo (1080p) [Geo-Blocked]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/auNdGeW.png",
    category: "Музичні канали",
    country: "",
    url: "https://viamotionhsi.netplus.ch/live/eds/mezzo/browser-HLS8/mezzo.m3u8"
  },
  {
    id: "vid-ew4j7pl",
    title: "Mezzo Live",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/H9ytKPN.png",
    category: "Музичні канали",
    country: "",
    url: "https://test.946985.filegear-sg.me/proxy/749755700e4ed9c6"
  },
  {
    id: "vid-0ly6q7c",
    title: "mfm (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://www.mtv.com.lb/images/header/mfm-logo.svg",
    category: "Музичні канали",
    country: "",
    url: "https://hms.pfs.gdn/hms/v1/broadcast/hlmvmp2hfriode891/playlist.m3u8"
  },
  {
    id: "vid-hodl0u8",
    title: "Mh 1 Music (576p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://dtil.tmsimg.com/assets/s143539_ld_h15_aa.png?lock=720x540",
    category: "Музичні канали",
    country: "",
    url: "https://mumt04.tangotv.in/MHONE/index.m3u8"
  },
  {
    id: "vid-8pxqchf",
    title: "Mi Gente TV (720p) [Geo-blocked]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/CSbmQlu.png",
    category: "Музичні канали",
    country: "",
    url: "https://byecableiptvnew3.ddns.net/ENVIVOMIGENTE/video.m3u8"
  },
  {
    id: "vid-916rxtr",
    title: "Miel TV (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/dPSFrCs.png",
    category: "Музичні канали",
    country: "",
    url: "https://7.innovatestream.pe:19360/mieltv/mieltv.m3u8"
  },
  {
    id: "vid-mdm6kg0",
    title: "MNM (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/L4cD18H.png",
    category: "Музичні канали",
    country: "",
    url: "https://live-radio-cf-vrt.akamaized.net/groupa/live/bac277a1-306d-44a0-8e2e-e5b9c07fa270/live.isml/.m3u8"
  },
  {
    id: "vid-u90w2bs",
    title: "Mohammed Abdo (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://assets.mbcmood.com/channels/1720184012Mohammed%20Abdo%20banner.png",
    category: "Музичні канали",
    country: "",
    url: "https://d2ow8h651gs7dx.cloudfront.net/out/v1/371fb663da604e659a2fb99bf89d92d4/index.m3u8"
  },
  {
    id: "vid-jup7ns6",
    title: "Mooz Dance",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/aX70RD2.png",
    category: "Музичні канали",
    country: "",
    url: "https://rtmp.digitalbroadcast.ro/moozdance/moozdance.m3u8"
  },
  {
    id: "vid-gazbapv",
    title: "Mooz Hits",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/GwATd3Y.png",
    category: "Музичні канали",
    country: "",
    url: "https://rtmp.digitalbroadcast.ro/moozhits/moozhits.m3u8"
  },
  {
    id: "vid-37nh16x",
    title: "Mooz Ro!",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Ft24x5T.png",
    category: "Музичні канали",
    country: "",
    url: "https://rtmp.digitalbroadcast.ro/moozro/moozro.m3u8"
  },
  {
    id: "vid-n2v9nl0",
    title: "Mosaique FM (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/GDUykah.png",
    category: "Музичні канали",
    country: "",
    url: "https://webcam.mosaiquefm.net/mosatv/_definst_/studio/playlist.m3u8?DVR"
  },
  {
    id: "vid-qz6cema",
    title: "Mouv' TV (288p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/64nzKEu.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/mouv.m3u8"
  },
  {
    id: "vid-99r84qc",
    title: "Music Box Polska [Geo-blocked]",
    author: "Музичні канали",
    type: "video",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyN14NgigtUnImvVp9DqgbKY5c9Nsl-EqLkPX7PzYcl924yK77GycmSj2E&s=10",
    category: "Музичні канали",
    country: "",
    url: "https://vs2133.vcdn.biz/0f0f85e2ea3607b5c396ef68d55c3168_megogo/live/hls/b/4000/u_sid/0/o/156751011/rsid/062147ff-ed0c-4d9c-a131-2bf42026e640/u_uid/0/u_vod/1/u_device/embed_all/u_devicekey/_embed_web/lip/57.128.235.172*asn/type.live/playlist.m3u8"
  },
  {
    id: "vid-0hsp7ny",
    title: "Music India (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://dtil.tmsimg.com/assets/s143563_ld_h15_aa.png?lock=720x540",
    category: "Музичні канали",
    country: "",
    url: "https://cdn-2.pishow.tv/live/226/master.m3u8"
  },
  {
    id: "vid-axahwbj",
    title: "Music Information Channel (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/OUPGCWG.png",
    category: "Музичні канали",
    country: "",
    url: "https://mic.siar.us/mic/live/mic.m3u8"
  },
  {
    id: "vid-duzokat",
    title: "Music TV Granada (1080p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/Swd9NP7n/music-tv-granada.png",
    category: "Музичні канали",
    country: "",
    url: "https://cloudvideo.servers10.com:8081/8032/index.m3u8"
  },
  {
    id: "vid-ztujoxv",
    title: "MusicTop (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://cdn.mitvstatic.com/channels/ar_musictop_m.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream-gtlc.telecentro.net.ar/hls/musictophls/0/playlist.m3u8"
  },
  {
    id: "vid-v8d6rpv",
    title: "Muzangala TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/fBeaJoS.png",
    category: "Музичні канали",
    country: "",
    url: "https://5cf4a2c2512a2.streamlock.net/tvmuzangala/tvmuzangala/playlist.m3u8"
  },
  {
    id: "vid-i04rior",
    title: "Muzvar (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Klu5k9U.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdn15.live-tv.cloud/ua_infinitas_tv/muzvar-abr/playlist.m3u8"
  },
  {
    id: "vid-5ibddmp",
    title: "MuzzOne",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/nHVABXh.png",
    category: "Музичні канали",
    country: "",
    url: "https://streams.adapto.kz/hls/live/muzzone/main_stream.m3u8"
  },
  {
    id: "vid-cp4r78f",
    title: "My Gospel TV",
    author: "Музичні канали",
    type: "video",
    cover: "https://mygospeltv.fr/wp-content/uploads/2022/05/MY-GODPEL-TV-e1652783900988.png",
    category: "Музичні канали",
    country: "",
    url: "https://streamtv.cmediahosthosting.net:3046/live/mygospeltvlive.m3u8"
  },
  {
    id: "vid-tl5736o",
    title: "Nande Portetepe TV",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/3taT6JK.jpeg",
    category: "Музичні канали",
    country: "",
    url: "https://video.hostingcaaguazu.com:19360/nandeportetepe/nandeportetepe.m3u8"
  },
  {
    id: "vid-4kag2uk",
    title: "Navahang TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/YteKXJy.png",
    category: "Музичні канали",
    country: "",
    url: "https://hls.navahang.live/hls/stream.m3u8"
  },
  {
    id: "vid-m35e6h1",
    title: "NEW KPOP (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/B7ILXMc.png",
    category: "Музичні канали",
    country: "",
    url: "https://ads.its-newid.net/api/manifest.m3u8?tp=samsung_tvplus&channel_id=newid_086&ads.service_id=GB17000088V"
  },
  {
    id: "vid-sal9ldn",
    title: "Next HD (480p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/c2rF3SS.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://live.enhdtv.com:19360/nexthd/nexthd.m3u8"
  },
  {
    id: "vid-29ec8h9",
    title: "Nidae AlIslam Radio (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://aloula.faulio.com/storage/mediagallery/0f/c5/fullhd_5da380cdfc304fd7d4672a83aeb6c62bc1d3d3e8.png",
    category: "Музичні канали",
    country: "",
    url: "https://live.kwikmotion.com/sbrksanedaradiolive/srpksanedaradio/playlist.m3u8"
  },
  {
    id: "vid-qutiwqu",
    title: "NogoumFMTV (672p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/krp3kgv.png",
    category: "Музичні канали",
    country: "",
    url: "https://nogoumtv.nrpstream.com/hls/stream.m3u8"
  },
  {
    id: "vid-ku2081v",
    title: "Noroc TV (576p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/XvYqpqG.png",
    category: "Музичні канали",
    country: "",
    url: "https://live.noroc.tv/noroc/noroc.m3u8"
  },
  {
    id: "vid-brdud91",
    title: "NOW 70s (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/qiCCX5X.png",
    category: "Музичні канали",
    country: "",
    url: "https://lightning-now70s-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-lightning-now70s-rakuten/CDN/playlist.m3u8"
  },
  {
    id: "vid-2oozb0y",
    title: "Now 70s (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/qiCCX5X.png",
    category: "Музичні канали",
    country: "",
    url: "https://lightningnow70-samsungau.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-wla4js1",
    title: "NOW 80s (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/YyPnMeB.png",
    category: "Музичні канали",
    country: "",
    url: "https://lightning-now80s-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-lightning-now80s-rakuten/CDN/playlist.m3u8"
  },
  {
    id: "vid-hx1wsut",
    title: "Now 80s (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/YyPnMeB.png",
    category: "Музичні канали",
    country: "",
    url: "https://lightningnow80-samsungau.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-kq69wvr",
    title: "NOW 90s00s (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Музичні канали",
    country: "",
    url: "https://amg01076-amg01076c19-rakuten-gb-8653.playouts.now.amagi.tv/playlist/amg01076-lightning-now90s00s-rakutengb/playlist.m3u8"
  },
  {
    id: "vid-a0rk2p6",
    title: "NOW Rock (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/GuM4GnX.png",
    category: "Музичні канали",
    country: "",
    url: "https://lightning-now90s-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-lightning-now90s-rakuten/CDN/playlist.m3u8"
  },
  {
    id: "vid-bhze8hc",
    title: "NOW Rock (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/GuM4GnX.png",
    category: "Музичні канали",
    country: "",
    url: "https://lightning-now90s-samsungnz.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-t2jkbxa",
    title: "Now TV 102.3FM Edmonton (CKNO-FM) (616p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/sF2g7KE.png",
    category: "Музичні канали",
    country: "",
    url: "https://videostream.jpbgdigital.com/NOWTV.m3u8"
  },
  {
    id: "vid-lzmkcg7",
    title: "NPC Rádio e TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/mw1lYWE.png",
    category: "Музичні канали",
    country: "",
    url: "https://stmv5.samcast.com.br/nasciparacantartv/nasciparacantartv/playlist.m3u8"
  },
  {
    id: "vid-sofpf0h",
    title: "NRJ Hits",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/2xDVwOh.png",
    category: "Музичні канали",
    country: "",
    url: "https://test.946985.filegear-sg.me/proxy/a23981548880f405"
  },
  {
    id: "vid-fepijop",
    title: "Nueva Vida TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/3mbZWyN/nav-Bar-title-Image-iphone6plus.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream.nuevavidafm.net:3937/live/nuevavidalive.m3u8"
  },
  {
    id: "vid-saw6161",
    title: "Number 1 Ask (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/slwbux7.png",
    category: "Музичні канали",
    country: "",
    url: "https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e18f9cea15_1/playlist.m3u8"
  },
  {
    id: "vid-xak583g",
    title: "Number 1 Damar (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/rYtbAGZ.png",
    category: "Музичні канали",
    country: "",
    url: "https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e198784bdc_1/playlist.m3u8"
  },
  {
    id: "vid-7aoq6zv",
    title: "Number 1 Dance (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/ZM4PSyq.png",
    category: "Музичні канали",
    country: "",
    url: "https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e2aa8acf44_1/playlist.m3u8"
  },
  {
    id: "vid-sy8qhnh",
    title: "Number 1 Türk (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/18zjk3q.png",
    category: "Музичні канали",
    country: "",
    url: "https://mn-nl.mncdn.com/blutv_nr1turk2/live.m3u8"
  },
  {
    id: "vid-ptvzpa2",
    title: "Number 1 TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/02cDIBi.png",
    category: "Музичні канали",
    country: "",
    url: "https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/broadcast_5c9e17cd59e8b.smil/playlist.m3u8"
  },
  {
    id: "vid-rvew96f",
    title: "Óčko (540p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/%C3%93%C4%8Dko_logo_2012.png/960px-%C3%93%C4%8Dko_logo_2012.png",
    category: "Музичні канали",
    country: "",
    url: "https://ocko-live-dash.ssl.cdn.cra.cz/cra_live2/ocko.stream.1.smil/playlist.m3u8"
  },
  {
    id: "vid-ejur0cd",
    title: "Óčko Expres (540p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/%C3%93%C4%8Dko_Expres_logo.png/960px-%C3%93%C4%8Dko_Expres_logo.png",
    category: "Музичні канали",
    country: "",
    url: "https://ocko-live.ssl.cdn.cra.cz/channels/ocko_expres/playlist.m3u8"
  },
  {
    id: "vid-crj5b29",
    title: "Óčko Gold (540p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/nrWNyLc.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://ocko-live.ssl.cdn.cra.cz/channels/ocko_gold/playlist.m3u8"
  },
  {
    id: "vid-cv8esux",
    title: "ON FM (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://onfmwordpressfiles.ams3.digitaloceanspaces.com/wp-content/uploads/2023/03/17130121/logo-on-fm.png",
    category: "Музичні канали",
    country: "",
    url: "https://5ce9406b73c33.streamlock.net/ONFM/livestream/playlist.m3u8"
  },
  {
    id: "vid-v2ndc1h",
    title: "Onda 15 TV (224p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/mUrZz9O.png",
    category: "Музичні канали",
    country: "",
    url: "https://cloudvideo.servers10.com:8081/8034/index.m3u8"
  },
  {
    id: "vid-ubcuj3l",
    title: "Onda Valencia (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/6HxLUQd.png",
    category: "Музичні канали",
    country: "",
    url: "https://cloudvideo.servers10.com:8081/8116/index.m3u8"
  },
  {
    id: "vid-tafd990",
    title: "Ondambiental TV (360p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/u5804Au.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://stmv4.voxtvhd.com.br/ondastereo/ondastereo/playlist.m3u8"
  },
  {
    id: "vid-f1y8gxc",
    title: "ONE1 Music (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/dLgoKJ0.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdne.folxplay.tv/folx-trz/streams/ch-3/master.m3u8"
  },
  {
    id: "vid-l9amhkv",
    title: "One Adria (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/NYkMamU.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdne.folxplay.tv/folx-trz/streams/ch-6/master.m3u8"
  },
  {
    id: "vid-zsaeqay",
    title: "One TV (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/O4DuR9G.png",
    category: "Музичні канали",
    country: "",
    url: "https://hms.pfs.gdn/v1/broadcast/one/playlist.m3u8"
  },
  {
    id: "vid-86asg93",
    title: "OneFM (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/Vp2G9wTz/onefmlb.png",
    category: "Музичні канали",
    country: "",
    url: "https://hms.pfs.gdn/v1/broadcast/onefm/playlist.m3u8"
  },
  {
    id: "vid-44g0r7m",
    title: "Online TV Nusantara (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/E9CCIpP.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://5bf7b725107e5.streamlock.net/onlinetvnusantara/onlinetvnusantara/playlist.m3u8"
  },
  {
    id: "vid-haivfn1",
    title: "Orange Bangla TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/wjSaHj5.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdn-4.pishow.tv/live/1499/master.m3u8"
  },
  {
    id: "vid-uu8w86k",
    title: "Orbita Chile TV (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/gbNh79Z.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://orbitachiletv.org/hls/0/stream.m3u8"
  },
  {
    id: "vid-5cy5cea",
    title: "Oxigeno TV (360p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/n3PweBQ.png",
    category: "Музичні канали",
    country: "",
    url: "https://vcp.myplaytv.com/oxigenotv/oxigenotv/playlist.m3u8"
  },
  {
    id: "vid-kl6sawx",
    title: "P2M TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/TrecSeG.png",
    category: "Музичні канали",
    country: "",
    url: "https://vdo2.pro-fhi.net:3207/stream/play.m3u8"
  },
  {
    id: "vid-azig4c1",
    title: "Panik TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/13C3CPr.png",
    category: "Музичні канали",
    country: "",
    url: "https://livetv.streams.ovh:1936/paniktv/paniktv/playlist.m3u8"
  },
  {
    id: "vid-a1i0n6n",
    title: "Panorama FM (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/JkDD3bK.png",
    category: "Музичні канали",
    country: "",
    url: "https://d6izdil55uftn.cloudfront.net/out/v1/0a06d1d6377c47edbd48721ed724bd08/index.m3u8"
  },
  {
    id: "vid-1hm6rx4",
    title: "Parranda Vallenata (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/BzBX7Qx.jpeg",
    category: "Музичні канали",
    country: "",
    url: "https://backupmaxmedia.hvmultiplay.com/hls/stream3/parrandavallenata.m3u8"
  },
  {
    id: "vid-3avafaz",
    title: "Peppers TV (751p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://jiotvimages.cdn.jio.com/dare_images/images/Peppers_TV.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdn-2.pishow.tv/live/1383/master.m3u8"
  },
  {
    id: "vid-xnlmtk6",
    title: "Pequeradio (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/BNqZwxS.png",
    category: "Музичні канали",
    country: "",
    url: "https://canadaremar2.todostreaming.es/live/peque-pequetv.m3u8"
  },
  {
    id: "vid-tyqogmj",
    title: "Persiana Folk",
    author: "Музичні канали",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Музичні канали",
    country: "",
    url: "https://sonhls.persiana.live/hls/stream.m3u8"
  },
  {
    id: "vid-q1z9knm",
    title: "Persiana Music",
    author: "Музичні канали",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Музичні канали",
    country: "",
    url: "https://musichls.persiana.live/hls/stream.m3u8"
  },
  {
    id: "vid-g5quz8k",
    title: "Persiana Nostalgia",
    author: "Ретро / Класика",
    type: "video",
    cover: "https://i.imgur.com/SWO9CKA.png",
    category: "Ретро / Класика",
    country: "",
    url: "https://noshls.persiana.live/hls/stream.m3u8"
  },
  {
    id: "vid-63sw2f2",
    title: "Persiana Vibe",
    author: "Музичні канали",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Музичні канали",
    country: "",
    url: "https://raphls.persiana.live/hls/stream.m3u8"
  },
  {
    id: "vid-5dvqi2m",
    title: "PJ Digital Radio TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/m92oDuB.png",
    category: "Музичні канали",
    country: "",
    url: "https://vdo1.panelstreaming.live:3363/hybrid/play.m3u8"
  },
  {
    id: "vid-tfb2zq2",
    title: "Planet 100.9 FM (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/8ZIBs8l.png",
    category: "Музичні канали",
    country: "",
    url: "https://streamlov.alsolnet.com/planet1009fm/live/playlist.m3u8"
  },
  {
    id: "vid-ozfubeo",
    title: "PMC",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/AbrHI7K.png",
    category: "Музичні канали",
    country: "",
    url: "https://pmchls.wns.live/hls/stream.m3u8"
  },
  {
    id: "vid-q0o552m",
    title: "PMC Royale (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Музичні канали",
    country: "",
    url: "https://pmcrohls.wns.live/hls/stream.m3u8"
  },
  {
    id: "vid-zxbdo4y",
    title: "POP World TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/LQB6G3s.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://janus.xpbroadcasting.com:8443/hls/popworld.m3u8"
  },
  {
    id: "vid-dj2zeuz",
    title: "Power 101.7 FM (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/bkQrXjB.png",
    category: "Музичні канали",
    country: "",
    url: "https://vcp11.myplaytv.com/powerfm/powerfm/playlist.m3u8"
  },
  {
    id: "vid-9it72hp",
    title: "Power Dance (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/QpPteBO.png",
    category: "Музичні канали",
    country: "",
    url: "https://livetv.powerapp.com.tr/dance/dance.smil/playlist.m3u8"
  },
  {
    id: "vid-atojw9o",
    title: "Power Hit Radio (576p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/GOlQbfC.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdnlb.tvplayhome.lt/live/eds/PWR_LTU_Live/GO3_LIVE_HLS/PWR_LTU_Live.m3u8?cdntoken=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDczNDU2NjEsInBhdGgiOiIvbGl2ZS9lZHMvUFdSX0xUVV9MaXZlL0dPM19MSVZFX0hMUy8iLCJzaXAiOiI3Mi4xMS4xNTcuMTEyIiwiZGV2aWNlX2lkIjoiMCIsInNlc3Npb25faWQiOiIwIiwiY2xpZW50X2lkIjoiMCJ9.oHc5wUgwNPQ-4P7wJy_WvWQh0muFg9Lprhc4STS3cUHi0FI4tAKGdZOOeE-dOhVBHKFUYETmoXSMrrVHOeLC3g"
  },
  {
    id: "vid-ruj0dps",
    title: "Power Love (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/0RzUswR.png",
    category: "Музичні канали",
    country: "",
    url: "https://livetv.powerapp.com.tr/plove/love.smil/playlist.m3u8"
  },
  {
    id: "vid-unne3kx",
    title: "Power Türk Akustik (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/driabBO.png",
    category: "Музичні канали",
    country: "",
    url: "https://livetv.powerapp.com.tr/pturkakustik/akustik.smil/playlist.m3u8"
  },
  {
    id: "vid-po7egy6",
    title: "Power Türk Slow (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/tQSoQXW.png",
    category: "Музичні канали",
    country: "",
    url: "https://livetv.powerapp.com.tr/pturkslow/slow.smil/playlist.m3u8"
  },
  {
    id: "vid-4sudifn",
    title: "Power Türk Taptaze (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/a5nW3HU.png",
    category: "Музичні канали",
    country: "",
    url: "https://livetv.powerapp.com.tr/pturktaptaze/taptaze.smil/playlist.m3u8"
  },
  {
    id: "vid-tzm8rcf",
    title: "Prambors",
    author: "Музичні канали",
    type: "video",
    cover: "https://images.maxstream.tv/sites/default/files/entry/0_e59etfmm/landscape_carousel_xxhdpi.webp",
    category: "Музичні канали",
    country: "",
    url: "https://indihuy.streamized.net/atm/DASH/pramborstv/manifest.mpd"
  },
  {
    id: "vid-05se957",
    title: "Prattel TV",
    author: "Музичні канали",
    type: "video",
    cover: "https://new.opencaster.com/uploads/logos/logo_244_1761928734.png",
    category: "Музичні канали",
    country: "",
    url: "https://vs20.live.opencaster.com/prattelpe_a2b8d350/index.m3u8"
  },
  {
    id: "vid-utklaz2",
    title: "PRIDEtv LATAM (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://neotv.cl/img/pridetv-512.png",
    category: "Музичні канали",
    country: "",
    url: "https://backend.energeek.cl/webtv/pridetvweb/index.m3u8?token=ZZDemoIPTVGH"
  },
  {
    id: "vid-m52qyqm",
    title: "PTC Chakde (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PTC_CHAKDE/images/LOGO_HD/image.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdn-1.pishow.tv/live/449/master.m3u8"
  },
  {
    id: "vid-odp14vy",
    title: "PTC Music (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PTC_MUSIC/images/LOGO_HD/image.png",
    category: "Музичні канали",
    country: "",
    url: "https://d2lk5u59tns74c.cloudfront.net/out/v1/f913cf893c594f73b114216e74a2efbc/index.m3u8"
  },
  {
    id: "vid-hsyodiv",
    title: "Public Music (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PUBLIC_MUSIC/images/LOGO_HD/image.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdn-3.pishow.tv/live/441/master.m3u8"
  },
  {
    id: "vid-btql7xj",
    title: "Punjabi Hits (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PUNJABI_HITS/images/LOGO_HD/image.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream.ottlive.co.in/punjabihits/index.m3u8"
  },
  {
    id: "vid-jkdwci8",
    title: "Q-Music (Belgium) (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/VX5e9Xt.png",
    category: "Музичні канали",
    country: "",
    url: "https://live-video.dpgmedia.net/e087512ad0c32643/out/v1/82d59bbe343b4d0896f829c59da82dc0/index.m3u8"
  },
  {
    id: "vid-g3ngmmu",
    title: "Qello Concerts by Stingray (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/IRyFTWq.png",
    category: "Музичні канали",
    country: "",
    url: "https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883052"
  },
  {
    id: "vid-1jq4g0v",
    title: "Qello Concerts by Stingray (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/IRyFTWq.png",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/qello-qello001-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-5ztqy0r",
    title: "Qmusic (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/fMTuqDu.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream.qmusic.nl/qmusic/videohls.m3u8"
  },
  {
    id: "vid-0xpfasn",
    title: "Qwest TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/DjgNNHK.png",
    category: "Музичні канали",
    country: "",
    url: "https://qwestjazz-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-qwestjazz-rakuten/CDN/master.m3u8"
  },
  {
    id: "vid-8z9lccv",
    title: "Qwest TV Jazz & Beyond (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/89yWH5L.png",
    category: "Музичні канали",
    country: "",
    url: "https://samsungau-qwestjazz-samsungtv-zw2jc.amagi.tv/playlist/samsungau-qwestjazz-samsungtv/playlist.m3u8"
  },
  {
    id: "vid-qakrqok",
    title: "Rabeh Saqer (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://shahid.mbc.net/mediaObject/b98b0635-c8ed-4a7c-9efa-5856e278f54b?type=png",
    category: "Музичні канали",
    country: "",
    url: "https://shd-amg-fast.edgenextcdn.net/tx004/playlist.m3u8"
  },
  {
    id: "vid-mc450pc",
    title: "Radio 21 TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/u8OhwI1.png",
    category: "Музичні канали",
    country: "",
    url: "https://live.creacast.com/radio21/smil:radio21.smil/playlist.m3u8"
  },
  {
    id: "vid-7ram9nm",
    title: "Radio Alegria 98.5 FM (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/N00aS3x.png",
    category: "Музичні канали",
    country: "",
    url: "https://video.compuwebecuador.com:3880/stream/play.m3u8"
  },
  {
    id: "vid-21wnyof",
    title: "Radio Bonita 106.7 (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/IvZtqyz.png",
    category: "Музичні канали",
    country: "",
    url: "https://cloudvideo.servers10.com:8081/8154/index.m3u8"
  },
  {
    id: "vid-m0i2jv0",
    title: "Radio Capital TiVu (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/it/3/38/Radio_Capital_logo_%282020%29.svg",
    category: "Музичні канали",
    country: "",
    url: "https://4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S35394734/Z6U2wGoDYANk/playlist.m3u8"
  },
  {
    id: "vid-ev8059l",
    title: "Radio Carnaval TV (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/cdpbkSo.png",
    category: "Музичні канали",
    country: "",
    url: "https://eu1.servers10.com:8081/8116/index.m3u8"
  },
  {
    id: "vid-61kgef0",
    title: "Radio Ciudad 98.9 FM TV",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/LaSLZwR.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://video.wilohosting.com:19360/radiociudadtv/radiociudadtv.m3u8"
  },
  {
    id: "vid-53bhudo",
    title: "Radio Conexion Web TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/pXS38zo.png",
    category: "Музичні канали",
    country: "",
    url: "https://tuvideoonline.com.ar:3391/live/radioconexionlive.m3u8"
  },
  {
    id: "vid-jn4gq6s",
    title: "Radio Contact (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/32mmGvB.png",
    category: "Музичні канали",
    country: "",
    url: "https://contact-live-hls.akamaized.net/hls/live/2038650/CONTACT-Live-HLS/master.m3u8"
  },
  {
    id: "vid-plzkiks",
    title: "Radio Cuenca Estéreo (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/qZzSOeU.png",
    category: "Музичні канали",
    country: "",
    url: "https://eu1.servers10.com:8081/8074/index.m3u8"
  },
  {
    id: "vid-z80212u",
    title: "RADIO DISCOunt TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/ScNYMmx.png",
    category: "Музичні канали",
    country: "",
    url: "https://585b674743bbb.streamlock.net/9030/9030/playlist.m3u8"
  },
  {
    id: "vid-rd4q83p",
    title: "Radio Freccia TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/RxeRlar.png",
    category: "Музичні канали",
    country: "",
    url: "https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S3160845/0tuSetc8UFkF/playlist_video.m3u8"
  },
  {
    id: "vid-541czkb",
    title: "Radio Fx Net (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://radiofxnet.ro/wp-content/uploads/2021/03/cropped-cropped-cropped-cropped-Radio_FX_Net_logo-1-1.png",
    category: "Музичні канали",
    country: "",
    url: "https://streamlov.alsolnet.com/radiofxnet/live/playlist.m3u8"
  },
  {
    id: "vid-rjngydh",
    title: "Radio Hit FM TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/gP2OT4S.png",
    category: "Музичні канали",
    country: "",
    url: "https://peer2.tdiradio.com/static/streaming-playlists/hls/bab99862-ec1c-474f-9a02-4f8c8677d565/0.m3u8"
  },
  {
    id: "vid-k2lsj94",
    title: "Radio Ideal 104.7 FM (La Esperanza) (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/chPfoOs.png",
    category: "Музичні канали",
    country: "",
    url: "https://www.idealfm104-7.com/hls/0/stream.m3u8"
  },
  {
    id: "vid-t38ma5w",
    title: "Radio Imagen 105.1 FM (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/C9zjz9p/343159606-190989583743350-3489987129696505785-n.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://streaming.imagenfm105-1.com/hls/stream.m3u8"
  },
  {
    id: "vid-mxm401u",
    title: "Radio Italia Trend (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/HNrKqGM.png",
    category: "Музичні канали",
    country: "",
    url: "https://amg00745-radioitailaspa-radioitalia-rakuten-sucsc.amagi.tv/hls/amagi_hls_data_rakutenAA-radioitalia-rakuten/CDN/master.m3u8"
  },
  {
    id: "vid-dvi6ybc",
    title: "Radio Javan TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/a1zuW2C.png",
    category: "Музичні канали",
    country: "",
    url: "https://rjtvhls.wns.live/hls/stream.m3u8"
  },
  {
    id: "vid-okfdh8o",
    title: "Radio JND (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/nyVlZeL.png",
    category: "Музичні канали",
    country: "",
    url: "https://radiojnd.cdn.hostin.cc/radiojnd/playlist.m3u8"
  },
  {
    id: "vid-9u29ngl",
    title: "Radio Karaoke (288p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/9uRggjD.png",
    category: "Музичні канали",
    country: "",
    url: "https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/radiokaraoke-2.m3u8"
  },
  {
    id: "vid-yivjrs4",
    title: "Radio Karolina TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/g2HpLX1.png",
    category: "Музичні канали",
    country: "",
    url: "https://peer2.tdiradio.com/static/streaming-playlists/hls/4207de1d-52e8-4591-ad9e-218069b864d1/0.m3u8"
  },
  {
    id: "vid-wf9ypji",
    title: "Radio Lola (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/41eE8fl.png",
    category: "Музичні канали",
    country: "",
    url: "https://peer2.tdiradio.com/static/streaming-playlists/hls/7c3ea8d3-49dc-4e1b-8b1e-dc6fab71f5cf/0.m3u8"
  },
  {
    id: "vid-njtd7tn",
    title: "Radio Master (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/AUoxyzP.png",
    category: "Музичні канали",
    country: "",
    url: "https://videoserver.tmcreativos.com:19360/radiomaster/radiomaster.m3u8"
  },
  {
    id: "vid-5qu2mal",
    title: "Radio Monumental TV (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/a97MaV2.png",
    category: "Музичні канали",
    country: "",
    url: "https://cloud37.ecuatel.com/monumentaltv/live/manifest.m3u8"
  },
  {
    id: "vid-xrpry2b",
    title: "Radio Piter Pan TV (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/hbqVWV4.png",
    category: "Музичні канали",
    country: "",
    url: "https://58d921499d3d3.streamlock.net/RadioPiterpanTV/livestream/playlist.m3u8"
  },
  {
    id: "vid-t9za8mg",
    title: "Radio RAM (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/LXbchP5q/logo-1.png",
    category: "Музичні канали",
    country: "",
    url: "https://1888165924.rsc.cdn77.org/live/RadioRAM/playlist.m3u8"
  },
  {
    id: "vid-6x965md",
    title: "Radio Realpolitik (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/L9KCdTX.png",
    category: "Музичні канали",
    country: "",
    url: "https://vivo.solumedia.com:19360/realpolitik/realpolitik.m3u8"
  },
  {
    id: "vid-g9htjrv",
    title: "Radio San Cristobal 88.7 FM",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/zaJhBdj.png",
    category: "Музичні канали",
    country: "",
    url: "https://video.wilohosting.com:19360/sancristobalfm/sancristobalfm.m3u8"
  },
  {
    id: "vid-0iemct1",
    title: "Radio Stad den Haag (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/ANK36EQ.png",
    category: "Музичні канали",
    country: "",
    url: "https://rsdh.cloud-streams.com/rsdh/rsdh/playlist.m3u8"
  },
  {
    id: "vid-jsmduuo",
    title: "Radio Suyai TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Музичні канали",
    country: "",
    url: "https://signal.suyaitv.cl/live/26/playlist.m3u8?password=9PcdCnFxUe&username=ZZDemoIPTVGH"
  },
  {
    id: "vid-6fas82q",
    title: "Radio SWH TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/cFrNsXn.png",
    category: "Музичні канали",
    country: "",
    url: "https://00ff00.latnet.media/edge/swh_tv.smil/playlist.m3u8"
  },
  {
    id: "vid-v9blm4u",
    title: "Radio Télé Hit (480p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/Gt2QDgf/cropped-transparent2-103x70.png",
    category: "Музичні канали",
    country: "",
    url: "https://59d39900ebfb8.streamlock.net/RadioTelehit/RadioTelehit/playlist.m3u8"
  },
  {
    id: "vid-kl23ava",
    title: "Radio Télé Kajou (480p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/1MhvJ3B/logork.png",
    category: "Музичні канали",
    country: "",
    url: "https://59d39900ebfb8.streamlock.net/RadioTelekAJOU/RadioTelekAJOU/playlist.m3u8"
  },
  {
    id: "vid-tan54g8",
    title: "Radio Tropical Tarapoto (480p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/TBPVOBI.png",
    category: "Музичні канали",
    country: "",
    url: "https://videoserver.tmcreativos.com:19360/raditropical/raditropical.m3u8"
  },
  {
    id: "vid-1sohemp",
    title: "Radio TV Sal One (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/pCz7ifY.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://lon.rtsp.me/r3ZnG6WN2HIRxPARhAirIQ/1713628621/hls/9QdykDAy.m3u8"
  },
  {
    id: "vid-rttwf9l",
    title: "Radio TV Tendencias (1080p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/tsdrrV9.png",
    category: "Музичні канали",
    country: "",
    url: "https://s1.tvdatta.com:3950/multi_web/play.m3u8"
  },
  {
    id: "vid-dzheotb",
    title: "Radio U TV (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/HjZpC1V.png",
    category: "Музичні канали",
    country: "",
    url: "https://1826200335.rsc.cdn77.org/1826200335/index.m3u8"
  },
  {
    id: "vid-ltkyct6",
    title: "Radio Weser TV Bremen (576p)",
    author: "Музичні канали",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Музичні канали",
    country: "",
    url: "https://5857499ee635b.streamlock.net/radiowesertv-live/_definst_/mp4:livestreamTV/playlist.m3u8"
  },
  {
    id: "vid-ka8uwi9",
    title: "Radio Zeta TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/K2xLMin.png",
    category: "Музичні канали",
    country: "",
    url: "https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S9346184/XEx1LqlYbNic/playlist_video.m3u8"
  },
  {
    id: "vid-oet5b77",
    title: "RadioNL TV (1080p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/TVaMJYB.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream.radionl.tv/radionltv/radionltv/playlist.m3u8"
  },
  {
    id: "vid-z61vdoq",
    title: "Raj Musix Kannada (576p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/z7fhhyX.png",
    category: "Музичні канали",
    country: "",
    url: "https://mumt01.tangotv.in/RAJMUSIXKANDA/index.m3u8"
  },
  {
    id: "vid-ddvdrt0",
    title: "Raj Musix Malayalam (576p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_RAJ_MUSIX_MALAYALAM/images/LOGO_HD/image.png",
    category: "Музичні канали",
    country: "",
    url: "https://mumt04.tangotv.in/RAJMUSIXMALAYALAM/index.m3u8"
  },
  {
    id: "vid-qgytsrn",
    title: "Raj Musix Tamil (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_RAJ_MUSIX_TAMIL/images/LOGO_HD/image.png",
    category: "Музичні канали",
    country: "",
    url: "https://livestream.rajtv.tv/hlslive/Admin/px08241087/live/Raj_Musix/master_1.m3u8"
  },
  {
    id: "vid-i62hy58",
    title: "Raj Musix Telugu (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_RAJ_MUSIX_TELUGU/images/LOGO_HD/image.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdn-1.pishow.tv/live/1213/master.m3u8"
  },
  {
    id: "vid-qho0pbt",
    title: "Rararadio (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/vTpfxUG.png",
    category: "Музичні канали",
    country: "",
    url: "https://58c04fb1d143f.streamlock.net/rararadio/rararadio/playlist.m3u8"
  },
  {
    id: "vid-pemuusw",
    title: "Rashid AlMajed (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://assets.mbcmood.com/channels/1720177618Rashid%20AlMajed.webp",
    category: "Музичні канали",
    country: "",
    url: "https://dphwv2ufgnfsq.cloudfront.net/out/v1/59cd80dfe93a479eb8b4d79bc6f225ca/index.m3u8"
  },
  {
    id: "vid-5nqq8pi",
    title: "RC Music (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://rctv.in/logo_s.png",
    category: "Музичні канали",
    country: "",
    url: "https://view.rcserver.in/tmp_hls2/stream/index.m3u8"
  },
  {
    id: "vid-6fgmo83",
    title: "RedMusic (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/1Lk8P1x/1-150x150.png",
    category: "Музичні канали",
    country: "",
    url: "https://fr.crystalweb.net:1936/redmusic/redmusic/playlist.m3u8"
  },
  {
    id: "vid-1ovmzui",
    title: "Retro Music Television (360p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/pyOjdZs.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream.mediawork.cz/retrotv/retrotvHQ1/playlist.m3u8"
  },
  {
    id: "vid-ugogn4a",
    title: "Retro Plus 2 (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/5G5kian.png",
    category: "Музичні канали",
    country: "",
    url: "https://tls-cl.cdnz.cl/retroplustvuno/live/playlist.m3u8"
  },
  {
    id: "vid-87chi4k",
    title: "Reyali (614p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/YmFjnsF.png",
    category: "Музичні канали",
    country: "",
    url: "https://eu1.servers10.com:8081/8090/index.m3u8"
  },
  {
    id: "vid-0ajldzk",
    title: "RFPtv (360p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/I60nQuR.png",
    category: "Музичні канали",
    country: "",
    url: "https://video03.logicahost.com.br/rfptv/rfptv/playlist.m3u8"
  },
  {
    id: "vid-sr981y9",
    title: "RHT Guadeloupe (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/hQ0Q6nE.png",
    category: "Музичні канали",
    country: "",
    url: "https://edge12.vedge.infomaniak.com/livecast/ik:livehautetension/manifest.m3u8"
  },
  {
    id: "vid-nzcb1sy",
    title: "Rock TV (1080p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Y9miDQo.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream.nasatv.com.mk/rocktv/hls/rocktv_live.m3u8"
  },
  {
    id: "vid-gpp3qaz",
    title: "Rock TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/VB88A5V.png",
    category: "Музичні канали",
    country: "",
    url: "https://tv.broadcasting.ro/rocktv/85c83a80-4f71-4f2d-a8d6-43f676896bcb.m3u8"
  },
  {
    id: "vid-j42bkgh",
    title: "Rotana Khalijia (1080p) [Geo-blocked]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/6HMluzv.png",
    category: "Музичні канали",
    country: "",
    url: "https://rotana.hibridcdn.net/rotananet/khaleejiya_net-7Y83PP5adWixDF93/playlist.m3u8"
  },
  {
    id: "vid-5qtedmt",
    title: "Rotana Music (1080p) [Geo-blocked]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/2zFQbQi.png",
    category: "Музичні канали",
    country: "",
    url: "https://rotana.hibridcdn.net/rotananet/music_net-7Y83PP5adWixDF93/playlist.m3u8"
  },
  {
    id: "vid-991pt8b",
    title: "RQP Paraguay (1080i)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/0cUc4Nt.png",
    category: "Музичні канали",
    country: "",
    url: "https://alba-py-rqp-rqp.stream.mediatiquestream.com/index.m3u8"
  },
  {
    id: "vid-vgmpzom",
    title: "RTL2",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/deC4z34.png",
    category: "Музичні канали",
    country: "",
    url: "https://raw.githubusercontent.com/Sibprod/streams/main/ressources/dm/py/hls/rtl2.m3u8"
  },
  {
    id: "vid-0k1x987",
    title: "RTL 102.5 Best (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/9PNlbaq.png",
    category: "Музичні канали",
    country: "",
    url: "https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S76960628/OEPHRUIctA0M/playlist_video.m3u8"
  },
  {
    id: "vid-y4hdjlu",
    title: "RTL 102.5 Bro&Sis (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/EWbK4XZ.png",
    category: "Музичні канали",
    country: "",
    url: "https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S75007890/MUGHuxc9dQ3b/playlist_video.m3u8"
  },
  {
    id: "vid-jhd3wf6",
    title: "RTL 102.5 Caliente (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/P0zsi6I.png",
    category: "Музичні канали",
    country: "",
    url: "https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S8448465/zTYa1Z5Op9ue/playlist_video.m3u8"
  },
  {
    id: "vid-vi7cf0k",
    title: "RTL 102.5 Disco (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/JA1OPrz.png",
    category: "Музичні канали",
    country: "",
    url: "https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S51100361/0Fb4R3k82b5Z/playlist_video.m3u8"
  },
  {
    id: "vid-np1q9xu",
    title: "RTL 102.5 Napulè (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/HFPw1YW.png",
    category: "Музичні канали",
    country: "",
    url: "https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S27134503/0f9AhuwKlhnZ/playlist_video.m3u8"
  },
  {
    id: "vid-kbmelo6",
    title: "RTL 102.5 Traffic (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/EBftMcB.png",
    category: "Музичні канали",
    country: "",
    url: "https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S38122967/2lyQRIAAGgRR/playlist_video.m3u8"
  },
  {
    id: "vid-vidvxkr",
    title: "RTL 102.5 TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/75qUdR7.png",
    category: "Музичні канали",
    country: "",
    url: "https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S97044836/tbbP8T1ZRPBL/playlist_video.m3u8"
  },
  {
    id: "vid-9a85zkx",
    title: "RTL Gold (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/LzHQoUv.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream.rtl.lu/data/live/tele/rtlgold/playlist.m3u8"
  },
  {
    id: "vid-nj17xr5",
    title: "RTL Today Radio (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/O1c6wpt.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream.rtl.lu/data/live/tele/rtltodayradio/playlist.m3u8"
  },
  {
    id: "vid-miny4rk",
    title: "RTV Vida (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/EqUfEAh.png",
    category: "Музичні канали",
    country: "",
    url: "https://vidartv2.todostreaming.es/live/radiovida-emisiontvhd.m3u8"
  },
  {
    id: "vid-o2egzth",
    title: "RU.TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Z7HUU7V.png",
    category: "Музичні канали",
    country: "",
    url: "https://bl.rutube.ru/livestream/b1eb8e90d7e636677b3eb73b4fcbb717/index.m3u8?s=d-E-bxKy2v3EEJ94RQX9CA&e=2069285076&scheme=https"
  },
  {
    id: "vid-rjghzzl",
    title: "Salsa Gorda Television (1080p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/3IhYd7G.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://live20.bozztv.com/akamaissh101/ssh101/qMUAZEy/playlist.m3u8"
  },
  {
    id: "vid-f9sti8z",
    title: "Salto Brasa Music (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.vimeocdn.com/portrait/31947989_640x640",
    category: "Музичні канали",
    country: "",
    url: "https://salto-streams.nl/hls/sotv1.m3u8"
  },
  {
    id: "vid-vcsqgwk",
    title: "Sana Plus (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/N6tKUZv.png",
    category: "Музичні канали",
    country: "",
    url: "https://mumbai-edge.smartplaytv.in/SanaPlusHD/index.m3u8"
  },
  {
    id: "vid-uct4vbd",
    title: "Sangeet Bangla (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/transparentImages/Sangeet%20Bangla.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdn-4.pishow.tv/live/1143/master.m3u8"
  },
  {
    id: "vid-yuesqch",
    title: "Sangeet Marathi (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SANGEET_MARATHI/images/LOGO_HD/image.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdn-3.pishow.tv/live/1229/master.m3u8"
  },
  {
    id: "vid-aroitkw",
    title: "Siembra TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://www.vivalivetv.com/public/files/shows/0/1/3226-294x165-FFFFFF.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://streamunoapp.com:3809/live/siembratvlive.m3u8"
  },
  {
    id: "vid-an13p9d",
    title: "Sky Folk TV (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/ya5xpUL.png",
    category: "Музичні канали",
    country: "",
    url: "https://eu.live.skyfolk.mk/live.m3u8"
  },
  {
    id: "vid-b7pbrz4",
    title: "Slager Muzika",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/hKdXwrW.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream-23.mazana.tv/slagrmuzika.m3u8s"
  },
  {
    id: "vid-hkkyy43",
    title: "Slager Original",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/0YjeWcq.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream-13.mazana.tv/slagroriginal.m3u8s"
  },
  {
    id: "vid-ui69m6s",
    title: "Sol Música (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/rbJrmPw.png",
    category: "Музичні канали",
    country: "",
    url: "https://d2glyu450vvghm.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-21u4g5cjglv02/sm.m3u8"
  },
  {
    id: "vid-g38d1pz",
    title: "SoloBáilalo (480p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/SImJE7c.png",
    category: "Музичні канали",
    country: "",
    url: "https://5ff3d9babae13.streamlock.net/8000/8000/playlist.m3u8"
  },
  {
    id: "vid-uy52i3p",
    title: "SONGTV Russia",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/nM7LbmV.png",
    category: "Музичні канали",
    country: "",
    url: "https://songtv.hls.iptvdc.com/web-russia/playlist.m3u8"
  },
  {
    id: "vid-5u7h98x",
    title: "SOY Plancha TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/P4kpMgk/1689344714578.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://59ef525c24caa.streamlock.net/vmtv/soyplancha/playlist.m3u8"
  },
  {
    id: "vid-0gwd8gz",
    title: "SpektraTV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/0zCt8e4.png",
    category: "Музичні канали",
    country: "",
    url: "https://cloudvideo.servers10.com:8081/8026/tracks-v1a1/index.m3u8"
  },
  {
    id: "vid-0mycnpw",
    title: "Spirit TV (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/yCp6vXz.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdnlive.myspirit.tv/LS-ATL-43240-2/index.m3u8"
  },
  {
    id: "vid-h4npop3",
    title: "Star 101 FM (KNUT Guam) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://star101.gu/images/fb_icon.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://live2.tensila.com/knut-v-1.choice/hls/master.m3u8"
  },
  {
    id: "vid-3u88j6d",
    title: "Star Plus Music (1080p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/01yz22a.png",
    category: "Музичні канали",
    country: "",
    url: "https://live.muzickatv.mk/live/StarMusic2.m3u8"
  },
  {
    id: "vid-9abz4n4",
    title: "Steelbird Music (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://jiotvimages.cdn.jio.com/dare_images/images/Steelbird_Music.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdn2.in/SteelbirdMusicTVhls/live.m3u8"
  },
  {
    id: "vid-v35o7ha",
    title: "Stingray Classic Rock (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/FBgu8yB.png",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/ose-101ads-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-p5cl7ln",
    title: "Stingray Classica (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/nh1k5RC.png",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/classica-cla008-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-ghxa6di",
    title: "Stingray CMusic (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/3UppN5P.png",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/cmusic-cme004-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-e2iw4nq",
    title: "Stingray DJAZZ (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Stingray_Djazz.png/960px-Stingray_Djazz.png",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/djazz-djaads-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-5tqufny",
    title: "Stingray Easy Listening (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Stingray_Music_logo.svg/960px-Stingray_Music_logo.svg.png",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/ose-137ads-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-tj91wqk",
    title: "Stingray Euro Hits (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/FyhO9U5.png",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/ose-214ads-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-jz6kqox",
    title: "like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0\" group-title=\"Music\",Stingray Éxitos del Momento (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/wiasHUR.png",
    category: "Музичні канали",
    country: "",
    url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/stingray-xitos-del-momento/master.m3u8?ads.vf=--_m-LmFeCi"
  },
  {
    id: "vid-fat9z6t",
    title: "Stingray Flashback 70s (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/jf5C9QF.png",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/ose-115ads-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-dq81q1a",
    title: "Stingray Greatest Hits (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Музичні канали",
    country: "",
    url: "https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883053"
  },
  {
    id: "vid-0mi0ao3",
    title: "Stingray Greatest Hits (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/ose-155ads-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-y2jzlxf",
    title: "Stingray Greatest Holiday Hits",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Hz2d6og.png",
    category: "Музичні канали",
    country: "",
    url: "https://d39g1vxj2ef6in.cloudfront.net/v1/manifest/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/54947915-6504-4548-aaef-eabd451f8607/1.m3u8"
  },
  {
    id: "vid-w0fa5cf",
    title: "Stingray Hit List (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/lgpIwId.png",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/ose-107ads-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-nfxic9s",
    title: "Stingray Hitlist (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/lgpIwId.png",
    category: "Музичні канали",
    country: "",
    url: "https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883054"
  },
  {
    id: "vid-je1339g",
    title: "Stingray Holidayscapes (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fprovider-static.plex.tv%2Fepg%2Fcms%2Fproduction%2F9cb4b15c-8244-4499-ae2c-9a92d4cdff6d%2F13895_SHS_Plex_Logos_Holidays_1500x1000_Dark-Background.png",
    category: "Музичні канали",
    country: "",
    url: "https://plextv.ott-channels.stingray.com/holidayscapes/master.m3u8"
  },
  {
    id: "vid-ri1zkrj",
    title: "Stingray Hot Country (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/PZhxyIT.png",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/ose-108ads-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-myqz2ce",
    title: "Stingray Jukebox Oldies (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Stingray_Music_logo.svg/960px-Stingray_Music_logo.svg.png",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/ose-021ads-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-d5w4y7k",
    title: "Stingray Karaoke (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/9TLTLS3.png",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/karaoke-kar000-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-9i5v3hs",
    title: "Stingray Naturescape (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/882kd90.png",
    category: "Музичні канали",
    country: "",
    url: "https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883056"
  },
  {
    id: "vid-a87ihlk",
    title: "Stingray Naturescape (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/882kd90.png",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/naturescape-a003-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-e84c9m7",
    title: "Stingray Nothin' But 90s (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Tq3I0po.png",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/ose-142ads-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-lzcrmel",
    title: "Stingray Remember the 80s (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/6E3wYrb.png",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/ose-128ads-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-u3ckbr5",
    title: "Stingray Remember the 80s (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/duwc8E8.png",
    category: "Музичні канали",
    country: "",
    url: "https://d39g1vxj2ef6in.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/master.m3u8?ads.xumo_channelId=88883071"
  },
  {
    id: "vid-xw1rxbh",
    title: "like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0\" group-title=\"Music\",Stingray Remember the 80s (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/duwc8E8.png",
    category: "Музичні канали",
    country: "",
    url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/stingray-remember-the-80s/master.m3u8?ads.vf=Fq0bVWh7hy0"
  },
  {
    id: "vid-levik3n",
    title: "Stingray Rock Alternative (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/mt8ulVX.png",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/ose-102ads-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-4eskt21",
    title: "Stingray Romance Latino (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Stingray_Music_logo.svg/960px-Stingray_Music_logo.svg.png",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/ose-202ads-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-g6wjmz3",
    title: "Stingray Smooth Jazz (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/h1DsOzH.png",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/ose-140ads-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-0yhlao3",
    title: "Stingray Soul Storm (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/dU1KC3f.png",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/ose-134ads-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-1ghstys",
    title: "Stingray The Spa (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/ywAN923.png",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/ose-122ads-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-64lnhn0",
    title: "Stingray Today's KPOP (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/mMbntB5.png",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/ose-317ads-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-jj28tin",
    title: "Stingray Today's Latin Pop (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Os3kRRP.png",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/ose-190ads-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-od8twjh",
    title: "Stingray Urban Beat (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Os3kRRP.png",
    category: "Музичні канали",
    country: "",
    url: "https://lotus.stingray.com/manifest/ose-133ads-montreal/samsungtvplus/master.m3u8"
  },
  {
    id: "vid-cj9f4cm",
    title: "Stryk TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/rKkHhkX.png",
    category: "Музичні канали",
    country: "",
    url: "https://fffffff110156200.tvustream.com:8298/ryfy.m3u8"
  },
  {
    id: "vid-0fapcql",
    title: "STZ Telebista (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/rFQuAEv.png",
    category: "Музичні канали",
    country: "",
    url: "https://cloudvideo.servers10.com:8081/stztelebista/index.m3u8"
  },
  {
    id: "vid-7vn0ohv",
    title: "Súper Q Panamá (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/ocTnqi7.png",
    category: "Музичні канали",
    country: "",
    url: "https://vcp8.myplaytv.com:1936/superq/superq/playlist.m3u8"
  },
  {
    id: "vid-wurquqw",
    title: "Super TV (1080i) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/pzxUE0O.png",
    category: "Музичні канали",
    country: "",
    url: "https://live.supertv.ro/live/supertv/playlist.m3u8"
  },
  {
    id: "vid-glb4mr7",
    title: "Supermúsica TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/MiVs42N.jpeg",
    category: "Музичні канали",
    country: "",
    url: "https://backupmaxmedia.hvmultiplay.com/hls/stream4/supermusica.m3u8"
  },
  {
    id: "vid-cvg6zs3",
    title: "T2 TV",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Wu8MBb7.png",
    category: "Музичні канали",
    country: "",
    url: "https://t2hls.wns.live/hls/stream.m3u8"
  },
  {
    id: "vid-n9e2joh",
    title: "Tabbar Hits (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_TABBAR_HITS/images/LOGO_HD/image.png",
    category: "Музичні канали",
    country: "",
    url: "https://vglivessai.akamaized.net/sg/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/e11b0319-52e8-4190-ab03-3931cc68eac9/index.m3u8"
  },
  {
    id: "vid-f8kl6ed",
    title: "Tarab (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://assets.mbcmood.com/channels/1738059679TARAB_Logo.png",
    category: "Музичні канали",
    country: "",
    url: "https://shd-amg-fast-btpls.shahid.net/tx002/playlist.m3u8"
  },
  {
    id: "vid-tfcxwxs",
    title: "Tarang Music (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/oSm8zFD.png",
    category: "Музичні канали",
    country: "",
    url: "https://livetv.tarangplus.in/tarangmusic-origin/live/playlist.m3u8"
  },
  {
    id: "vid-v2n916n",
    title: "TDI Radio TV",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/POdTmaD.png",
    category: "Музичні канали",
    country: "",
    url: "https://peer2.tdiradio.com/static/streaming-playlists/hls/8f5d84ce-e8ac-4109-9975-9665f5605557/master.m3u8"
  },
  {
    id: "vid-iwdcm31",
    title: "Tele7music",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/11b5W8u.png",
    category: "Музичні канали",
    country: "",
    url: "https://live.tele7music.ro/hls/stream/index.m3u8"
  },
  {
    id: "vid-s4851nj",
    title: "Tele Dominicana TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://dominicanchannels.com/wp-content/uploads/teledominicana.png",
    category: "Музичні канали",
    country: "",
    url: "https://vdopanel.jlahozconsulting.com/p/3417/hybrid/play.m3u8"
  },
  {
    id: "vid-d8ju7o3",
    title: "Tele Zoukla",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/lWYKgPC.png",
    category: "Музичні канали",
    country: "",
    url: "https://vdo.pro-fhi.net:3228/stream/play.m3u8"
  },
  {
    id: "vid-i4ubx0w",
    title: "TeleMusik Senegal (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/dPAPLsd.png",
    category: "Музичні канали",
    country: "",
    url: "https://58c04fb1d143f.streamlock.net/rezopropartner_1_live/rezopropartner_1_live/playlist.m3u8"
  },
  {
    id: "vid-iawcx0d",
    title: "Telerumba TV (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://www.vivalivetv.com/public/files/shows/0/1/3649-294x165-FFFFFF.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://inliveserver.com:1936/18506/18506/playlist.m3u8"
  },
  {
    id: "vid-083gfq0",
    title: "Tezaur TV (576i)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/eAagwLW.png",
    category: "Музичні канали",
    country: "",
    url: "https://tezaurtv.md/stream/index.m3u8"
  },
  {
    id: "vid-pz352u7",
    title: "The Country Network (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Country_Network_Logo.png",
    category: "Музичні канали",
    country: "",
    url: "https://amg00600-amg00600c1-thecountrynetwork-us-5497.playouts.now.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-aad3g80",
    title: "The Voice TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/OoJSmoj.png",
    category: "Музичні канали",
    country: "",
    url: "https://bss1.neterra.tv/thevoice/thevoice.m3u8"
  },
  {
    id: "vid-2406ape",
    title: "Tiankov Folk (576p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/VKY4q64.png",
    category: "Музичні канали",
    country: "",
    url: "https://streamer103.neterra.tv/tiankov-folk/live.m3u8"
  },
  {
    id: "vid-k9ihpur",
    title: "Tiankov Orient Folk (576p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/33LexyP.png",
    category: "Музичні канали",
    country: "",
    url: "https://streamer103.neterra.tv/tiankov-orient/live.m3u8"
  },
  {
    id: "vid-vp7wngx",
    title: "TikTok Radio Brasil (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://static.wikia.nocookie.net/logopedia/images/f/f4/TikTok_Radio.svg",
    category: "Музичні канали",
    country: "",
    url: "https://d1bl6tskrpq9ze.cloudfront.net/hls/master.m3u8?ads.xumo_channelId=99992529"
  },
  {
    id: "vid-jyt69r7",
    title: "Topical Moon RD (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://www.vivalivetv.com/public/files/shows/0/1/3900-294x165-FFFFFF.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://sistemastr.tropicalmoonmedia.com/live/56BE17DB16EB76C9F2DDB8346F4DFA4E/30.m3u8"
  },
  {
    id: "vid-zp175zo",
    title: "Totalmusic (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://static.elektamedia.com/ch/tmc_main.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdn.global.elektamedia.com/live/c7eds/Totalmusic/SA_LIVE_hls_enc/master.m3u8"
  },
  {
    id: "vid-rj0rjlm",
    title: "Totalmusic 80s (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://static.elektamedia.com/ch/tmc_80s.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_80s/SA_LIVE_hls_enc/master.m3u8"
  },
  {
    id: "vid-snpoodd",
    title: "Totalmusic 2000s (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://static.elektamedia.com/ch/tmc_00s.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_00s/SA_LIVE_hls_enc/master.m3u8"
  },
  {
    id: "vid-tmqo98a",
    title: "Totalmusic Concerts (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://static.elektamedia.com/ch/tmc_concerts.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_Concerts/SA_LIVE_hls_enc/master.m3u8"
  },
  {
    id: "vid-u7g5x0w",
    title: "Totalmusic Dance (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://static.elektamedia.com/ch/tmc_dance.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_Dance/SA_LIVE_hls_enc/master.m3u8"
  },
  {
    id: "vid-gps3j1v",
    title: "Trace Brasil (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/DFBocPu.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01131-tracetv-tracebrazuca-samsungbr/playlist.m3u8"
  },
  {
    id: "vid-9t9nymy",
    title: "TRACE Brazuca (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/DFBocPu.png",
    category: "Музичні канали",
    country: "",
    url: "https://amg01131-tracetv-amg01131c4-stirr-us-4390.playouts.now.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-gvivakz",
    title: "Trace Gospel (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/X0UmU3K.png",
    category: "Музичні канали",
    country: "",
    url: "https://channels.trace.plus/Traceprod/GOSPEL_FR/.m3u8"
  },
  {
    id: "vid-rrnu88r",
    title: "Trace Latina (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/CUVAi4u.png",
    category: "Музичні канали",
    country: "",
    url: "https://amg01131-tracetv-tracelatina-glewed-vtnk7.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-ttr67xf",
    title: "like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0\" group-title=\"Music\",TRACE Latina (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/CUVAi4u.png",
    category: "Музичні канали",
    country: "",
    url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/trace-latina/encrypted.m3u8?ads.vf=8rE20DsHHI0"
  },
  {
    id: "vid-81qzrm3",
    title: "Trace UK (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://a.jsrdn.com/hls/23073/trace-uk/logo_20240627_183320_70.png",
    category: "Музичні канали",
    country: "",
    url: "https://d2l4tng0wskzvn.cloudfront.net/Trace_GB.m3u8"
  },
  {
    id: "vid-z0kbf2c",
    title: "Trace Urban (Australia) (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/DLIbUMx.png",
    category: "Музичні канали",
    country: "",
    url: "https://lightning-traceurban-samsungau.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-8xcxt60",
    title: "Tropi Q 99.7 FM (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/5rPdHhb.png",
    category: "Музичні канали",
    country: "",
    url: "https://www.streaming507.net:19360/videotropiq/videotropiq.m3u8"
  },
  {
    id: "vid-ua55zji",
    title: "Tropical Moon Cumbia TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/jL1kLyS.png",
    category: "Музичні канали",
    country: "",
    url: "https://srv2.tropicalmoonmedia.com/cumbiatv/cumbiatv/playlist.m3u8"
  },
  {
    id: "vid-lwarkhy",
    title: "Tropical Music TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/h48pwLn.png",
    category: "Музичні канали",
    country: "",
    url: "https://59a564764e2b6.streamlock.net/vallenato/tropical/playlist.m3u8"
  },
  {
    id: "vid-46koc78",
    title: "TRT Müzik (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/JgUzRH8.png",
    category: "Музичні канали",
    country: "",
    url: "https://tv-trtmuzik.medya.trt.com.tr/master.m3u8"
  },
  {
    id: "vid-2x4km3u",
    title: "Tu Musica HD (1080p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/HnjUjog.png",
    category: "Музичні канали",
    country: "",
    url: "https://edge.essastream.com/tumusicahd/tracks-v1a1/mono.m3u8"
  },
  {
    id: "vid-jrtbdtf",
    title: "Tunes 6 (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://jiotvimages.cdn.jio.com/dare_images/images/Tunes_6.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream.d6-pro.com/tunes6music/live/video.m3u8"
  },
  {
    id: "vid-2kj8kg6",
    title: "Turbo Mix Radio TV (360p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/AsdBQa3.png",
    category: "Музичні канали",
    country: "",
    url: "https://7.innovatestream.pe:19360/turbomixoficial/turbomixoficial.m3u8"
  },
  {
    id: "vid-59wbq4d",
    title: "Türkmen Owazy (406p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Ap7l2jC.png",
    category: "Музичні канали",
    country: "",
    url: "https://alpha.tv.online.tm/hls/ch005.m3u8"
  },
  {
    id: "vid-papci6t",
    title: "TV Arbëria 4 Muzikë (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/zLRzyVS.png",
    category: "Музичні канали",
    country: "",
    url: "https://ssh101.bozztv.com/ssh101/rtvarberia4/playlist.m3u8"
  },
  {
    id: "vid-4ca3598",
    title: "TV Arbëria Retro Hits (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/zLRzyVS.png",
    category: "Музичні канали",
    country: "",
    url: "https://ssh101.bozztv.com/ssh101/rtvarberiaretro/playlist.m3u8"
  },
  {
    id: "vid-qd6c4xk",
    title: "TV Éxitos (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/ahz7X7u.png",
    category: "Музичні канали",
    country: "",
    url: "https://streaming.grupomediosdelnorte.com:19360/tvexitos/tvexitos.m3u8"
  },
  {
    id: "vid-eclnxqz",
    title: "TVOMIX (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://ugc.production.linktr.ee/7ef61237-c46d-456b-afe3-a42ef49a979e_Mejorado2.png",
    category: "Музичні канали",
    country: "",
    url: "https://cloud.tvomix.com/TVOMIX/index.m3u8"
  },
  {
    id: "vid-yp7b12c",
    title: "TVONE Nicaragua (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/FNk6rdz.png",
    category: "Музичні канали",
    country: "",
    url: "https://hdbox.chunklistv.com/live?stream=tvone"
  },
  {
    id: "vid-v1e6dw9",
    title: "TVR Folclor",
    author: "Музичні канали",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/TVR_Folclor_Logo_2023.svg/960px-TVR_Folclor_Logo_2023.svg.png",
    category: "Музичні канали",
    country: "",
    url: "https://tvr-folclor.lg.mncdn.com/tvrfolclor/smil:tvrfolclor.smil/playlist.m3u8"
  },
  {
    id: "vid-5i2e4o9",
    title: "TVS Music Network (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Музичні канали",
    country: "",
    url: "https://rpn.bozztv.com/gusa/gusa-tvsmusic/index.m3u8"
  },
  {
    id: "vid-3c75vs0",
    title: "TVUNO (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/dht94P4.png",
    category: "Музичні канали",
    country: "",
    url: "https://streamtv.onliv3.online:1936/karibtv/karibtv/playlist.m3u8"
  },
  {
    id: "vid-yk2qgdw",
    title: "TZiK [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/TAagRkn.png",
    category: "Музичні канали",
    country: "",
    url: "https://54627d4fc5996.streamlock.net/tzik/tzik/chunklist.m3u8"
  },
  {
    id: "vid-24yqabq",
    title: "Ultimate TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://jiotvimages.cdn.jio.com/dare_images/images/utvtamil.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream.ottlive.co.in/utvtamil/index.m3u8"
  },
  {
    id: "vid-l9tjb27",
    title: "Urbano TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/KVVU9PI.png",
    category: "Музичні канали",
    country: "",
    url: "https://59ef525c24caa.streamlock.net/tvurbano/tvurbano/playlist.m3u8"
  },
  {
    id: "vid-ndzvf2m",
    title: "V2BEAT (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/PXGqyLn.png",
    category: "Музичні канали",
    country: "",
    url: "https://abr.de1se01.v2beat.live/playlist.m3u8"
  },
  {
    id: "vid-1nophol",
    title: "V Classic TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/WIACJSy.png",
    category: "Музичні канали",
    country: "",
    url: "https://5eaccbab48461.streamlock.net:1936/8112/8112/playlist.m3u8"
  },
  {
    id: "vid-z1cj7q5",
    title: "Vaanavil TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://jiotvimages.cdn.jio.com/dare_images/images/Vaanavil_TV.png",
    category: "Музичні канали",
    country: "",
    url: "https://6n3yope4d9ok-hls-live.5centscdn.com/vaanavil/TV.stream/playlist.m3u8"
  },
  {
    id: "vid-2qqrb8c",
    title: "Vallenato Internacional (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/rVKroNW.png",
    category: "Музичні канали",
    country: "",
    url: "https://59a564764e2b6.streamlock.net/vallenato/vallenatom/playlist.m3u8"
  },
  {
    id: "vid-p6e0rjt",
    title: "VAM Vid's & More (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/CD1PffA.png",
    category: "Музичні канали",
    country: "",
    url: "https://sincerecloud.stream/loadbalancer/public/J9EmQQGf.m3u8"
  },
  {
    id: "vid-7pfv263",
    title: "Vantage Dance (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://vantagetv.ee/vantage_dance.png",
    category: "Музичні канали",
    country: "",
    url: "https://hls.vantagetv.ee/vdance_stream/main_stream.m3u8"
  },
  {
    id: "vid-4l32n0c",
    title: "Vantage Music (720p) [Geo-blocked]",
    author: "Музичні канали",
    type: "video",
    cover: "https://vantagetv.ee/vantage_music.png",
    category: "Музичні канали",
    country: "",
    url: "https://hls.vantagetv.ee/vmusic_stream/main_stream.m3u8"
  },
  {
    id: "vid-8g0cm24",
    title: "Vantage Music UK (1080p) [Geo-blocked]",
    author: "Музичні канали",
    type: "video",
    cover: "https://vantagetv.ee/vantage_music.png",
    category: "Музичні канали",
    country: "",
    url: "https://hls.vantagetv.co.uk/vmusicuk_stream/index.m3u8"
  },
  {
    id: "vid-745fuxp",
    title: "Vantage Rock (720p) [Geo-blocked]",
    author: "Музичні канали",
    type: "video",
    cover: "https://vantagetv.ee/vantage_rock.png",
    category: "Музичні канали",
    country: "",
    url: "https://hls.vantagetv.ee/vrock_stream/index.m3u8"
  },
  {
    id: "vid-0mj251z",
    title: "Venus Media (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/XwmUbfp.png",
    category: "Музичні канали",
    country: "",
    url: "https://tigocloud.desdeparaguay.net/venusmedia/venusmedia/playlist.m3u8"
  },
  {
    id: "vid-heatqpm",
    title: "Vevo 2K (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://images.pluto.tv/channels/5fd7bca3e0a4ee0007a38e8c/featuredImage.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://d1s6jz7jeei17.cloudfront.net/playlist/amg00056-vevotv-vevo2kau-samsungau/playlist.m3u8"
  },
  {
    id: "vid-qq98wqv",
    title: "Vevo 70s (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://images.pluto.tv/channels/5f32f26bcd8aea00071240e5/featuredImage.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://amg00056-vevotv-vevo70saunz-samsungau-xzszd.amagi.tv/playlist/amg00056-vevotv-vevo70saunz-samsungau/playlist.m3u8"
  },
  {
    id: "vid-xq0bzgg",
    title: "Vevo 80s (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://images.pluto.tv/channels/5fd7b8bf927e090007685853/featuredImage.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://amg00056-vevotv-vevo80saunz-samsungau-rp5e3.amagi.tv/playlist/amg00056-vevotv-vevo80saunz-samsungau/playlist.m3u8"
  },
  {
    id: "vid-rpw79sh",
    title: "Vevo 90s (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://images.pluto.tv/channels/5fd7bb1f86d94a000796e2c2/featuredImage.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://amg00056-vevotv-vevo90saunz-samsungau-n6a0d.amagi.tv/playlist/amg00056-vevotv-vevo90saunz-samsungau/playlist.m3u8"
  },
  {
    id: "vid-us9w7p5",
    title: "Vevo Country (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://images.pluto.tv/channels/5da0d75e84830900098a1ea0/featuredImage.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://amg00056-vevotv-vevocountryau-samsungau-ktmqm.amagi.tv/playlist/amg00056-vevotv-vevocountryau-samsungau/playlist.m3u8"
  },
  {
    id: "vid-c3c7t08",
    title: "Vevo Hip Hop (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Lbc9cYw.png",
    category: "Музичні канали",
    country: "",
    url: "https://d3vgs3ro3x6v8a.cloudfront.net/Vevo_Hip_Hop.m3u8"
  },
  {
    id: "vid-4u7x74j",
    title: "Vevo Latino (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/D7SwmuB.png",
    category: "Музичні канали",
    country: "",
    url: "https://amg00056-amg00056c13-rakuten-es-3246.playouts.now.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-agrfrt0",
    title: "Vevo Pop (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/dZHktKR.png",
    category: "Музичні канали",
    country: "",
    url: "https://d128y56w6v2kax.cloudfront.net/playlist/amg00056-vevotv-vevopopau-samsungau/playlist.m3u8"
  },
  {
    id: "vid-zt1n5he",
    title: "Vevo R&B (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://images.pluto.tv/channels/5da0d83f66c9700009b96d0e/featuredImage.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://d1hf773q57zx9s.cloudfront.net/Vevo_R_B.m3u8"
  },
  {
    id: "vid-pves9sh",
    title: "Vevo Retro Rock (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/H1Aap4E.png",
    category: "Музичні канали",
    country: "",
    url: "https://d2lyea6if8kkz9.cloudfront.net/playlist/amg00056-vevotv-vevoretrorockau-samsungau/playlist.m3u8"
  },
  {
    id: "vid-qnjslbw",
    title: "Video Rola (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/9w54eVy.png",
    category: "Музичні канали",
    country: "",
    url: "https://d3b2epqdk0p7vd.cloudfront.net/out/v1/8a448b5e16384af4a3c8146a7b049c32/index.m3u8"
  },
  {
    id: "vid-87amml6",
    title: "Vijay Takkar APAC (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://dtil.tmsimg.com/assets/s144078_ld_h15_aa.png?lock=720x540",
    category: "Музичні канали",
    country: "",
    url: "https://tglmp01.akamaized.net/out/v1/c1071012b73f4f189b202e1529e8f802/manifest.mpd"
  },
  {
    id: "vid-wct9ky8",
    title: "Vĩnh Long TV5 (1080p) [Geo-blocked]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/F12VdKO.png",
    category: "Музичні канали",
    country: "",
    url: "https://live.fptplay53.net/epzsd1/vinhlong5_vhls.smil/chunklist.m3u8"
  },
  {
    id: "vid-l2dg6z1",
    title: "Vintage Music (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/KImqYnN.jpeg",
    category: "Музичні канали",
    country: "",
    url: "https://59ef525c24caa.streamlock.net/vmtv/tvvintage/playlist.m3u8"
  },
  {
    id: "vid-hxrzczd",
    title: "VIP TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/6N0qITv.png",
    category: "Музичні канали",
    country: "",
    url: "https://ed5ov1.live.opencaster.com/bkyqeDgfaukC/index.m3u8"
  },
  {
    id: "vid-88c9qdw",
    title: "Visión Televisión (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/HV5tgcM.png",
    category: "Музичні канали",
    country: "",
    url: "https://cloudvideo.servers10.com:8081/8016/index.m3u8"
  },
  {
    id: "vid-0vnxc5k",
    title: "VIVA Russia (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/OFhQQCD.png",
    category: "Музичні канали",
    country: "",
    url: "https://live20.bozztv.com/akamaissh101/ssh101/vivarussia/chunks.m3u8"
  },
  {
    id: "vid-fspwrum",
    title: "VM Latino (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Dvo1b82.png",
    category: "Музичні канали",
    country: "",
    url: "https://59ef525c24caa.streamlock.net/vmtv/vmlatino/playlist.m3u8"
  },
  {
    id: "vid-n2ieqv3",
    title: "VoiceOver Radio TV (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/HzGs1Eh.png",
    category: "Музичні канали",
    country: "",
    url: "https://cloudvideo.servers10.com:8081/8198/index.m3u8"
  },
  {
    id: "vid-p57cfxm",
    title: "Volksmusik TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/EsWuCJ3.png",
    category: "Музичні канали",
    country: "",
    url: "https://vmtv.iptv-playoutcenter.de/vmtv/vmtv1/playlist.m3u8"
  },
  {
    id: "vid-eeizu1o",
    title: "Vos y TV (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/294FDCB.png",
    category: "Музичні канали",
    country: "",
    url: "https://cloud37.ecuatel.com/vostv/live/manifest.m3u8"
  },
  {
    id: "vid-9d1o6r8",
    title: "VRT Radio Klara (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/YdDkSJW/VRT-Klara-2020-svg.png",
    category: "Музичні канали",
    country: "",
    url: "https://live-radio-cf-vrt.akamaized.net/groupb/live/eee20dc8-158a-4194-8d92-0c5a73ffcd3b/live.isml/.m3u8"
  },
  {
    id: "vid-rtxb49h",
    title: "VRT Radio StuBru (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/y0TcsXw/512px-VRT-Stu-Bru-logo-svg.png",
    category: "Музичні канали",
    country: "",
    url: "https://live-radio-cf-vrt.akamaized.net/groupb/live/0f394a26-c87d-475e-8590-e9c6e79b28d9/live.isml/.m3u8"
  },
  {
    id: "vid-y6k8u78",
    title: "WAVE TV (480p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/V8Hfgis.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://streamer2.nexgen.bz/08-WAVE/index.m3u8"
  },
  {
    id: "vid-rqdkqvo",
    title: "Wavez FM",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/uyROZSS.png",
    category: "Музичні канали",
    country: "",
    url: "https://vs20.live.opencaster.com/wavezfm1075aruba_37766c9d/index.m3u8"
  },
  {
    id: "vid-t16lyv9",
    title: "WVCU-LP Concord University Radio The Cure 97.7 (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/en/0/0f/WVCU-LP_2015.PNG",
    category: "Музичні канали",
    country: "",
    url: "https://video1.getstreamhosting.com:1936/8152/8152/playlist.m3u8"
  },
  {
    id: "vid-qkao6t4",
    title: "WZNT (Zeta 93) (1080p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.ibb.co/KzqWLZR/images-57.jpg",
    category: "Музичні канали",
    country: "",
    url: "https://livestream.lamusica.com/nacionz/ngrp:nacionz_all/playlist.m3u8"
  },
  {
    id: "vid-fpi71de",
    title: "X 102.7 FM (720p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/28b810Y.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream.castr.com/65dee3aad6beacddbd6cd1af/live_21e811c0d60d11eeaa1a471c2c967e4a/index.m3u8"
  },
  {
    id: "vid-7enok93",
    title: "X Level Media (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/BGwQdQW.jpeg",
    category: "Музичні канали",
    country: "",
    url: "https://tuvideoonline.com.ar:3332/live/xlevelmedialive.m3u8"
  },
  {
    id: "vid-q69g3vk",
    title: "XITE (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/jxuwGRi.png",
    category: "Музичні канали",
    country: "",
    url: "https://xite-rakuten.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-fctunwn",
    title: "XITE 90's Throwback (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/vwpOzuz.png",
    category: "Музичні канали",
    country: "",
    url: "https://d284aawtm5vi48.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-fjdfi2br1jtq7/XITE_90s_Throwback.m3u8"
  },
  {
    id: "vid-xwij39l",
    title: "XITE Classic Country (1080p) [Geo-blocked]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/XQrMCkT.png",
    category: "Музичні канали",
    country: "",
    url: "https://pb-wgi5ljoabjgdm.akamaized.net/XITE_Countrys_Finest.m3u8"
  },
  {
    id: "vid-onoil71",
    title: "XITE Hits (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/N51Rp7E.png",
    category: "Музичні канали",
    country: "",
    url: "https://d726x48n2pd5h.cloudfront.net/XITE_Hits.m3u8"
  },
  {
    id: "vid-oh3yqbw",
    title: "XITE Hits Germany (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/N51Rp7E.png",
    category: "Музичні канали",
    country: "",
    url: "https://d726x48n2pd5h.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-skxr1pazhltvp/XITE_Hits.m3u8"
  },
  {
    id: "vid-qmo99mv",
    title: "XITE Hits UK (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/N51Rp7E.png",
    category: "Музичні канали",
    country: "",
    url: "https://amg01243-xitenetworksint-hitsuk-samsunguk-mvovq.amagi.tv/playlist/amg01243-xitenetworksint-hitsuk-samsunguk/playlist.m3u8"
  },
  {
    id: "vid-kcltz37",
    title: "XITE Just Chill (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://provider-static.plex.tv/epg/cms/production/927dd614-017d-49dd-9eb9-0ed79d09084e/xitejustchill_logo_light_-_Arlette_FiranRDX.png",
    category: "Музичні канали",
    country: "",
    url: "https://dvnftgdlbnemm.cloudfront.net/XITE_Just_Chill.m3u8"
  },
  {
    id: "vid-9bi6pd9",
    title: "XITE Nuevo Latino (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/2qyl2y3.png",
    category: "Музичні канали",
    country: "",
    url: "https://d3bsgqzbpkrvbb.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-w288eaw03izg1/XITE_Nuevo_Latino.m3u8"
  },
  {
    id: "vid-6a4aiul",
    title: "XITE Reggae Vibes (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://provider-static.plex.tv/epg/cms/production/c7506335-967f-46a9-917a-2a35475cd96c/xitereggaevibes_logo_light_-_Arlette_FiranRDX.png",
    category: "Музичні канали",
    country: "",
    url: "https://dw2m7yrngfg8c.cloudfront.net/XITE_Reggae_Vibes.m3u8"
  },
  {
    id: "vid-rb68gti",
    title: "XITE Rock x Metal (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/uIIUIuN.png",
    category: "Музичні канали",
    country: "",
    url: "https://d198ro05q94rc4.cloudfront.net/XITE_Rock_On.m3u8"
  },
  {
    id: "vid-fr9lwwl",
    title: "XITE Siempre Latino (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/bwmIEgG.png",
    category: "Музичні канали",
    country: "",
    url: "https://d1xc25jm9e0l4b.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-xplkt8i7m24dc/XITE_Siempre_Latino.m3u8"
  },
  {
    id: "vid-kpjsm8c",
    title: "XPTV1 (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Ty7GkoN.png",
    category: "Музичні канали",
    country: "",
    url: "https://janus.xpbroadcasting.com:8443/hls/xptv1.m3u8"
  },
  {
    id: "vid-rzvuhco",
    title: "YleX Studio Live (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/YleX.svg/960px-YleX.svg.png",
    category: "Музичні канали",
    country: "",
    url: "https://ylestudiolive.akamaized.net/hls/live/2007826/ylestudiolive-YleX/master.m3u8"
  },
  {
    id: "vid-0mdhkgl",
    title: "YRF Music (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://jiotvimages.cdn.jio.com/dare_images/images/YRF_Music.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01412-xiaomiasia-yrfmusic-xiaomi/playlist.m3u8"
  },
  {
    id: "vid-iavncq0",
    title: "ZB Music (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://jiotvimages.cdn.jio.com/dare_images/images/zbmusic.png",
    category: "Музичні канали",
    country: "",
    url: "https://server.zillarbarta.com/zbmusic/index.m3u8"
  },
  {
    id: "vid-39lz87u",
    title: "ZFM Zoetermeer (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/vrjACvy.png",
    category: "Музичні канали",
    country: "",
    url: "https://zfmzoetermeer.nl/live/master.m3u8"
  },
  {
    id: "vid-gwa24pr",
    title: "Zo'r TV (576p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/NuzyhVM.png",
    category: "Музичні канали",
    country: "",
    url: "https://stream8.cinerama.uz/1016/tracks-v1a1/mono.m3u8"
  },
  {
    id: "vid-o52mltt",
    title: "Zona Music TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/TJ5l9iI.png",
    category: "Музичні канали",
    country: "",
    url: "https://acceso.radiosportstv.online:3022/stream/play.m3u8"
  },
  {
    id: "vid-1do96hc",
    title: "Zoom (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZOOM/images/LOGO_HD/image.png",
    category: "Музичні канали",
    country: "",
    url: "https://dai.google.com/linear/hls/event/JCAm25qkRXiKcK1AJMlvKQ/master.m3u8"
  },
  {
    id: "vid-mx6je3w",
    title: "Zoom Global (720p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZOOM/images/LOGO_HD/image.png",
    category: "Музичні канали",
    country: "",
    url: "https://d14c63magvk61v.cloudfront.net/strm/channels/zoom/master.m3u8"
  },
  {
    id: "vid-tqsypws",
    title: "ZU TV (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/1gtkGhB.png",
    category: "Музичні канали",
    country: "",
    url: "https://hls.rundletv.eu.org/LIVE$RadioZU/6.m3u8/Level/300720051?end=END&start=LIVE"
  },
  {
    id: "vid-h3thkf3",
    title: "ZWEI2 Music (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/RbdpCNf.png",
    category: "Музичні канали",
    country: "",
    url: "https://cdne.folxplay.tv/folx-trz/streams/ch-2/master.m3u8"
  },
  {
    id: "vid-owk7b5j",
    title: "Матур ТВ (1080p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Pg7K7eV.png",
    category: "Музичні канали",
    country: "",
    url: "https://public.streaming.matur-tv.ru/hls/h264_aac/stream.m3u8"
  },
  {
    id: "vid-ictkkap",
    title: "Муз союз (576p)",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Puk1Bhx.png",
    category: "Музичні канали",
    country: "",
    url: "https://hls-tvsoyuz.cdnvideo.ru/tvsoyuz2/muzsoyuz.6fw0-58xp-acts-esy0/playlist.m3u8"
  },
  {
    id: "vid-hz188x7",
    title: "Муз ТВ (450p) [Geo-blocked]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/BtqrHmz.png",
    category: "Музичні канали",
    country: "",
    url: "https://zabava-htlive.cdn.ngenix.net/hls/CH_MUZTV/variant.m3u8"
  },
  {
    id: "vid-ey8o2vj",
    title: "Музыка 1 International [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/DIKe5vA.png",
    category: "Музичні канали",
    country: "",
    url: "https://kino-1.catcast.tv/content/37745/index.m3u8"
  },
  {
    id: "vid-jghcfyx",
    title: "Музыка Кино International [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/2SG0Swa.png",
    category: "Музичні канали",
    country: "",
    url: "https://kino-1.catcast.tv/content/37739/index.m3u8"
  },
  {
    id: "vid-h8zu9s3",
    title: "Сити Эдем Meditation Music [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/HPWevWb.png",
    category: "Музичні канали",
    country: "",
    url: "https://cityeden.catcast.tv/content/47410/index.m3u8"
  },
  {
    id: "vid-gi7igxb",
    title: "Сити Эдем Play Христианский Музыкальный [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/ozEqob9.png",
    category: "Музичні канали",
    country: "",
    url: "https://cityeden.catcast.tv/content/34100/index.m3u8"
  },
  {
    id: "vid-ud9rpby",
    title: "Сити Эдем Бирма Play [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/38Q5L5W.png",
    category: "Музичні канали",
    country: "",
    url: "https://cityeden.catcast.tv/content/34364/index.m3u8"
  },
  {
    id: "vid-skqft9f",
    title: "Сити Эдем Классическая Музыка [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/l7BE8l6.png",
    category: "Музичні канали",
    country: "",
    url: "https://cityeden.catcast.tv/content/47400/index.m3u8"
  },
  {
    id: "vid-fyh0epg",
    title: "Сити Эдем Сиртаки ТВ [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/V3MTfyc.png",
    category: "Музичні канали",
    country: "",
    url: "https://cityeden.catcast.tv/content/46421/index.m3u8"
  },
  {
    id: "vid-2dbflna",
    title: "УТРК Музыка (480p) [Not 24/7]",
    author: "Музичні канали",
    type: "video",
    cover: "https://www.utrk.kg/img/stream/45.png",
    category: "Музичні канали",
    country: "",
    url: "https://st2.mediabay.tv/KG_KTRK-Muzika/index.m3u8"
  },
  {
    id: "vid-wh55qyi",
    title: "Шансон ТВ (576p) [Geo-blocked]",
    author: "Музичні канали",
    type: "video",
    cover: "https://i.imgur.com/Fk4sd8t.png",
    category: "Музичні канали",
    country: "",
    url: "https://uiptv.do.am/1ufc/602079679/playlist.m3u8"
  },
  {
    id: "vid-jqpxkq1",
    title: "like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0\" group-title=\"Movies\",24 Hour Free Movies (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/iSVnzR1.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://d1b5mlajbmvkjv.cloudfront.net/v1/master/9d062541f2ff39b5c0f48b743c6411d25f62fc25/UDU-DistroTV/145.m3u8?ads.vf=7FhdsxqVxOi"
  },
  {
    id: "vid-avqq1vi",
    title: "27 TwentySeven [Geo-blocked]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Twentyseven_logo.svg/960px-Twentyseven_logo.svg.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://live2.msf.cdn.mediaset.net/content/hls_h0_cls_vos/live/channel(ts)/index.m3u8"
  },
  {
    id: "vid-wet5l8k",
    title: "30A TV Classic Movies (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://babaktv.com/wp-content/uploads/2023/09/30A-Classi-Movies.jpeg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://30a-tv.com/feeds/pzaz/30atvmovies.m3u8"
  },
  {
    id: "vid-7grkugx",
    title: "&TV International (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SYMANDTV/images/LOGO_HD/LOGO_HD_image.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://amg01117-amg01117c1-amgplt0029.playout.now3.amagi.tv/playlist/amg01117-amg01117c1-amgplt0029/playlist.m3u8"
  },
  {
    id: "vid-o8eaoj0",
    title: "ABN Bible Movies (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/NCqZdaL.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://mediaserver.abnvideos.com/streams/abnbiblemovies.m3u8"
  },
  {
    id: "vid-y52o3kx",
    title: "Afghan Nobel Movies (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.ibb.co/zfdbVSm/logo-1.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://live.relentlessinnovations.net:1936/afghannobel/afghannobel/playlist.m3u8"
  },
  {
    id: "vid-n8ko6em",
    title: "Aflam (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/cTLj7Yt.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://shd-amg-fast.edgenextcdn.net/tx001/playlist.m3u8"
  },
  {
    id: "vid-s1op76w",
    title: "Afra Film",
    author: "Кіно та Фільми",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://afrafhls.wns.live/hls/stream.m3u8"
  },
  {
    id: "vid-r9mjlk1",
    title: "Afriwood Blockbuster (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/aESdqiB.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://streamdot.broadpeak.io/cff02a74da64d145c102a2d012758398/afxpstr/AfriwoodBlockbuster/index.m3u8"
  },
  {
    id: "vid-686yxz0",
    title: "Alankar TV (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ALANKAR/images/LOGO_HD/image.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://livetv.tarangplus.in/alankar-origin/live/playlist.m3u8"
  },
  {
    id: "vid-hhdmw7r",
    title: "Alien Nation by DUST (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/FxYhME9.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://dqi7ayt2o24fn.cloudfront.net/playlist.m3u8"
  },
  {
    id: "vid-hxin0bf",
    title: "All Time Movies (576p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ALL_TIME_MOVIES/images/LOGO_HD/image.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://mumt03.tangotv.in/ALLTIMEMOVIES/index.m3u8"
  },
  {
    id: "vid-fqyv8l5",
    title: "alpha Cinema (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/146OgfU.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://live.15plusmg.ru/memfs/b389173a-df4e-4171-8904-e249893e71eb.m3u8"
  },
  {
    id: "vid-63l9mm6",
    title: "alpha Moretime (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/ibQfUr7.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://live.15plusmg.ru/memfs/3546fc09-2eba-459d-9a1f-9a2fc39e50bd.m3u8"
  },
  {
    id: "vid-w7igths",
    title: "Alterna TV (720p) [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://tv.alterna.ar/alternatv.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://tv.alterna.ar/stream/hls/live.m3u8"
  },
  {
    id: "vid-r9llcjm",
    title: "Artflix Movie Classics (720p)",
    author: "Ретро / Класика",
    type: "video",
    cover: "https://i.imgur.com/5pOZQB4.png",
    category: "Ретро / Класика",
    country: "",
    url: "https://amogonetworx-artflix-1-nl.samsung.wurl.tv/playlist.m3u8"
  },
  {
    id: "vid-7hc1gni",
    title: "Asianet Movies (576p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/cps67hs.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://anet.keralive.workers.dev/v1/master/a0d007312bfd99c47f76b77ae26b1ccdaae76cb1/asianetmovies_live_https/index.m3u8"
  },
  {
    id: "vid-ztb7q0n",
    title: "Aurora Media Films (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/DVC5w6H.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cdn.streamhispanatv.net:3417/live/auroramflive.m3u8"
  },
  {
    id: "vid-qfo1deu",
    title: "AXN Asia Indonesia (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/AXN_logo_%282015%29.svg/960px-AXN_logo_%282015%29.svg.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://indihuy.streamized.net/atm/DASH/axn/manifest.mpd"
  },
  {
    id: "vid-mjqkip8",
    title: "B4U Bhojpuri (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/NwOQUDp.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cdnb4u.wiseplayout.com/B4U_Bhojpuri/master.m3u8"
  },
  {
    id: "vid-7y5x4eb",
    title: "B4U Kadak (1080p) [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://dtil.tmsimg.com/assets/s142695_ld_h15_aa.png?lock=720x540",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cdnb4u.wiseplayout.com/B4U_Kadak/master.m3u8"
  },
  {
    id: "vid-3bkj3a9",
    title: "B4U Movies (1080p) [Geo-blocked]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/M9kMFJl.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://amg00877-b4unew-amg00877c2-lg-in-5260.playouts.now.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-wx50wmb",
    title: "Bhojpuri Cinema (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_BHOJPURI_CINEMA/images/LOGO_HD/image.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://live-bhojpuri.akamaized.net/liveabr/playlist.m3u8"
  },
  {
    id: "vid-rugbk74",
    title: "BIZ Cinema (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://biztv.uz/static/media/biz-cinema.286b83dc.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://fl.biztv.media/cinema_720_EMfSyXgoRdiIHgldXTZICucKTIeCKO/index.m3u8"
  },
  {
    id: "vid-2bkw2l1",
    title: "Bollywood HD Russia (576p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/scDKOLS.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://xykt-fix.github.io/cinerama_edge01/hls/BOLLYWOOD_RU/Movie009.m3u8"
  },
  {
    id: "vid-yuva7a9",
    title: "Boreal (720p) [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/KSquHTG.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://edge.essastream.com/borealtelevision/tracks-v1a1/mono.m3u8"
  },
  {
    id: "vid-agvk8ua",
    title: "like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0\" group-title=\"Movies\",Box Cinema (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/LGJlmtp.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://d3s7x6kmqcnb6b.cloudfront.net/d/distro001a/QK2TKFREGRYXDI8IJGHW/hls3/now,-1m/m.m3u8?ads.vf=l_Bw4LbbQO8"
  },
  {
    id: "vid-5rhbebb",
    title: "Bravo Farsi TV (360p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.ibb.co/yynxRTS/Bravo-Farsi.jpg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://bravoohls.wns.live/hls/stream.m3u8"
  },
  {
    id: "vid-qi89srg",
    title: "Cafe Film",
    author: "Кіно та Фільми",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cafefhls.wns.live/hls/stream.m3u8"
  },
  {
    id: "vid-yhmq73j",
    title: "Charge! (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/1rxmu2u.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://fast-channels.sinclairstoryline.com/CHARGE/index.m3u8"
  },
  {
    id: "vid-fmd4gh9",
    title: "CINDIE TV (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://a.jsrdn.com/hls/23208/cindie-tv/logo_20250225_222520_68.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://d20xuwbyc4yoag.cloudfront.net/v1/master/9d062541f2ff39b5c0f48b743c6411d25f62fc25/DistroTV-MuxIP-CINDIE/387.m3u8?ads.vf=grWTpG3NQNi"
  },
  {
    id: "vid-kzc5b60",
    title: "Cine 34 [Geo-blocked]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cine34_logo.svg/960px-Cine34_logo.svg.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://live3-mediaset-it.akamaized.net/Content/hls_h0_clr_vos/live/channel(b6)/index.m3u8"
  },
  {
    id: "vid-dwrfap2",
    title: "Cine Romantico (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/FUrrDrb.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://d1si3n1st4nkgb.cloudfront.net/10502/88886011/hls/master.m3u8?ads.xumo_channelId=88886011"
  },
  {
    id: "vid-nxzv2sd",
    title: "Cine Sony (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/bZWoDTg.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://a-cdn.klowdtv.com/live1/cine_720p/playlist.m3u8"
  },
  {
    id: "vid-qfvi9vb",
    title: "like Gecko) Chrome/144.0.0.0 Safari/537.36\" group-title=\"Movies\",Cinema (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/yib6dM2.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cdn4.skygo.mn/live/disk1/CinemaTV/DASH-FTA/CinemaTV.mpd"
  },
  {
    id: "vid-1flvpoe",
    title: "Cinema Hausa (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/uV5cHDW.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://streamdot.broadpeak.io/cff02a74da64d1459eeb779df71f0511/afxpstr/CinemaHausa/index.m3u8"
  },
  {
    id: "vid-s3wgsu1",
    title: "Cinevault 80s (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/xaCyyDd.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://aegis-cloudfront-1.tubi.video/ea1ab5d1-f554-4f6b-b03f-2611fcd94257/playlist.m3u8"
  },
  {
    id: "vid-c242amg",
    title: "Classic Cinema (240p) [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/FJoPnTb.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://rpn.bozztv.com/gusa/gusa-classiccinema/index.m3u8"
  },
  {
    id: "vid-2rg0v2c",
    title: "Classique TV (360p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/rHxcraT.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://stmv1.srvif.com/classique/classique/playlist.m3u8"
  },
  {
    id: "vid-e93v174",
    title: "CTB Perth Movies (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/VB8gtCy.jpeg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://movies.ctbperth.net.au/hls/stream.m3u8"
  },
  {
    id: "vid-lz3hven",
    title: "Dhamaka Movies B4U (576p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://static.wikia.nocookie.net/logopedia/images/8/8c/Dhamaka_Movies.jpg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cdn-1.pishow.tv/live/235/master.m3u8"
  },
  {
    id: "vid-ei68kw9",
    title: "DiscoverFilm (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/oMnpsQ5.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://discoverfilm-discoverfilm-1-gb.samsung.wurl.tv/playlist.m3u8"
  },
  {
    id: "vid-4fut1lq",
    title: "Dunia Sinema (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://unifi-live05.secureswiftcontent.com/UnifiHD/live27-1080FHD.m3u8"
  },
  {
    id: "vid-nq1k53v",
    title: "Ebony TV by Lionsgate (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://provider-static.plex.tv/epg/cms/production/234d5377-ab07-41bf-acd6-34c17c1c051a/EbonyTV_Plex_Logo_Light_1500x1000.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://aegis-cloudfront-1.tubi.video/a0ad4b53-ab3a-48dd-be12-bc7f533c372c/playlist.m3u8"
  },
  {
    id: "vid-cy4d4jt",
    title: "EBS Cinema (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/fewPTFE.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://rpn.bozztv.com/ebstv/ebscinema/index.m3u8"
  },
  {
    id: "vid-lnbfq38",
    title: "Ekran Movies",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.ibb.co/WNyssx28/Screenshot-2025-05-18-211143.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://ca-rt.onetv.app/EkranMovies/index-0.m3u8?token=onetv202"
  },
  {
    id: "vid-qof2b4j",
    title: "ETV Cinema HD (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://dtil.tmsimg.com/assets/s143026_ld_h15_aa.png?lock=720x540",
    category: "Кіно та Фільми",
    country: "",
    url: "https://d27zlkxhgwrfgo.cloudfront.net/v1/master/9d43eacaed199f8d5883927e7aef514a8a08e108/ETV_CINEMA_H264_cloud_in/index.m3u8"
  },
  {
    id: "vid-vglcmg6",
    title: "Film4 HD (1080p) [Geo-Blocked]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/MTSgoGI.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://viamotionhsi.netplus.ch/live/eds/film4/browser-HLS8/film4.m3u8"
  },
  {
    id: "vid-4937qbm",
    title: "Filmax (576p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/eLmdZ6k.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://s3.ideationtec.live/Filmax/Filmax.m3u8"
  },
  {
    id: "vid-892fi2v",
    title: "Filmex (Xumo) (1080p) [Geo-blocked]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Hiz2OyC.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://filmex-filmex-xumo.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-oi8s6lz",
    title: "Filmex Clásico (1080p) [Geo-blocked]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/D3dj4mv.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://filmex-filmexclasico-xumo.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-b1gy5xt",
    title: "FilmRise Westerns (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/8j2npVc.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://dz05z8iljgvbe.cloudfront.net/master.m3u8"
  },
  {
    id: "vid-i5dc4k0",
    title: "Forensic Files (720p) [Geo-blocked]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/8j2npVc.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://pb-x9qsxrudiq9d2.akamaized.net/webvtt/v1/18584c3f3a2a4df8/88886014/master.m3u8"
  },
  {
    id: "vid-on77pz5",
    title: "FX Movie Channel (720p) [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/FXM_Logo.svg/960px-FXM_Logo.svg.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://tvpass.org/live/FXMovieChannel/hd"
  },
  {
    id: "vid-3ov2nf2",
    title: "GEM Bollywood",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/2XASeBk.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://ca-rt.onetv.app/gembollywood/index-0.m3u8?token=onetv202"
  },
  {
    id: "vid-2701mgw",
    title: "GEM Drama",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/k2pGyRH.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://ca-rt.onetv.app/gemdrama/index-0.m3u8?token=onetv202"
  },
  {
    id: "vid-qavz8a1",
    title: "GEM Drama Plus",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://gemgroup.tv/assets/images/channels/icon_7.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://ca-rt.onetv.app/gemdramaplus/index-0.m3u8?token=onetv202"
  },
  {
    id: "vid-vhwqr26",
    title: "GEM Film",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/nrFz3LU.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://ca-rt.onetv.app/gemfilm/index-0.m3u8?token=onetv202"
  },
  {
    id: "vid-u3w7arq",
    title: "GEM Onyx",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/gXRIAw4.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://ca-rt.onetv.app/gemonyx/index-0.m3u8?token=onetv202"
  },
  {
    id: "vid-861s9ej",
    title: "GEM Pixel",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.ibb.co/Q3tkbPrn/icon-27.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://glserver1.tamashaland.com/live/aBCH96886YznRbGOiqTnnQ__/stream_0.m3u8"
  },
  {
    id: "vid-burokb9",
    title: "GEM Rubix",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/cDjOj58.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://ca-rt.onetv.app/gemrubix/index-0.m3u8?token=onetv202"
  },
  {
    id: "vid-xa7rrny",
    title: "GEM Rubix Plus",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://gemgroup.tv/assets/images/channels/icon_31.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://ca-rt.onetv.app/gemrubixplus/index-0.m3u8?token=onetv202"
  },
  {
    id: "vid-sfdbz90",
    title: "GEM TV",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://gemgroup.tv/assets/images/channels/icon_16.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://ca-rt.onetv.app/gem/index-0.m3u8?token=onetv202"
  },
  {
    id: "vid-epttq5e",
    title: "GEM TV Plus",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://gemgroup.tv/assets/images/channels/icon_17.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://ca-rt.onetv.app/gemtvplus/index-0.m3u8?token=onetv202"
  },
  {
    id: "vid-ymw8hlc",
    title: "Ghost TV (712p) [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/ZVO8GVI.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://stmv.video.expressolider.com.br/ghostv/ghostv/playlist.m3u8"
  },
  {
    id: "vid-k6v0hk3",
    title: "Gold Star",
    author: "Кіно та Фільми",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://moviethls.wns.live/hls/stream.m3u8"
  },
  {
    id: "vid-2qcs1uw",
    title: "Goldmines (576p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_GOLDMINES/images/LOGO_HD/image.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cdn-2.pishow.tv/live/1459/master.m3u8"
  },
  {
    id: "vid-3fbl602",
    title: "Goldmines 2 (576p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cdn-2.pishow.tv/live/1460/master.m3u8"
  },
  {
    id: "vid-145bvjh",
    title: "Grand Cinema",
    author: "Кіно та Фільми",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://gcinemahls.wns.live/hls/stream.m3u8"
  },
  {
    id: "vid-zk5d1qq",
    title: "Gravitas Movies (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/H2hD4vT.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://d6dg3ebeih71x.cloudfront.net/Gravitas_Movies.m3u8"
  },
  {
    id: "vid-ab2ojs8",
    title: "GREAT! movies (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://d2n0069hmnqmmx.cloudfront.net/epgdata/1.0/newchanlogos/512/512/skychb3709.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://amg01753-narrativeuk-amg01753c3-lg-gb-1833.playouts.now.amagi.tv/playlist/amg01753-narrativeuk-greatmovies-lggb/playlist.m3u8"
  },
  {
    id: "vid-exvxmaw",
    title: "GREAT! romance (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://d2n0069hmnqmmx.cloudfront.net/epgdata/1.0/newchanlogos/512/512/skychb3643.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://amg01753-narrativeuk-amg01753c2-lg-gb-1832.playouts.now.amagi.tv/playlist/amg01753-narrativeuk-greatchristmas-lggb/playlist.m3u8"
  },
  {
    id: "vid-167tcdb",
    title: "Grjngo Western Movies (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/wFqhK3p.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://amogonetworx-grjngo-3-dk.samsung.wurl.tv/playlist.m3u8"
  },
  {
    id: "vid-14c3lnv",
    title: "Hallmark Movies & More (1080p) [Geo-blocked]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://pb-clwlfvkqpn19r.akamaized.net/Hallmark_Movies_&_More.m3u8"
  },
  {
    id: "vid-rljah2e",
    title: "Hallmark Movies & Mysteries East (1080p) [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/GPRGA9C.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://tvpass.org/live/HallmarkMoviesMysteriesEast/hd"
  },
  {
    id: "vid-tpggvaz",
    title: "Harbin Movie Channel",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://www.tvchinese.net/uploads/tv/haerbin.jpg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://stream.hrbtv.net/yspd/playlist.m3u8"
  },
  {
    id: "vid-qynhk8f",
    title: "Hero (720p) [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/4t5JQLY.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://live-fi.tvkaista.net/hero/live.m3u8?hd=true"
  },
  {
    id: "vid-nokhkt6",
    title: "HITS Movies HD (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/kyE3vXf.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/hitsmovie/manifest.mpd"
  },
  {
    id: "vid-6v7lhm5",
    title: "Home Plus",
    author: "Кіно та Фільми",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://homeplushls.wns.live/hls/stream.m3u8"
  },
  {
    id: "vid-jd3y3cw",
    title: "ICC Plus (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://icchls.wns.live/hls/stream.m3u8"
  },
  {
    id: "vid-0kz2lu0",
    title: "IFC East (720p) [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/bQdkyF9.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://tvpass.org/live/IFCEast/hd"
  },
  {
    id: "vid-lq2yt6q",
    title: "iFilm 2",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/fa/c/ce/Ifilm2logo.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://live.presstv.ir/hls/ifilm2.m3u8"
  },
  {
    id: "vid-knjcuyi",
    title: "iFilm Arabic",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/commons/b/b9/IFILM.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://live.presstv.ir/hls/ifilmar.m3u8"
  },
  {
    id: "vid-8jcljdu",
    title: "iFilm English",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/commons/b/b9/IFILM.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://live.presstv.ir/hls/ifilmen.m3u8"
  },
  {
    id: "vid-ffojlfm",
    title: "iFilm Persian",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/commons/b/b9/IFILM.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://live.presstv.ir/hls/ifilmfa.m3u8"
  },
  {
    id: "vid-ufzabyt",
    title: "Indywood TV (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.ibb.co/jT3NCPp/logo-tv.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://43wrzjnpqoxe-hls-live.wmncdn.net/indywood/indywoodtv/index.m3u8"
  },
  {
    id: "vid-hk9o5ue",
    title: "Itage TV (480p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/FP1aUPw.jpg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://viewmedia7219.bozztv.com/wmedia/viewmedia100/web_011/Stream/playlist.m3u8"
  },
  {
    id: "vid-0hucqng",
    title: "Jiangxi Movie Channel",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://www.tvchinese.net/uploads/tv/jiangxi.jpg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://play-live-hls.jxtvcn.com.cn/live-city/tv_jxtv4.m3u8"
  },
  {
    id: "vid-nst42ha",
    title: "Jilin Movie Channel",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://www.tvchinese.net/uploads/tv/jlyspd.jpg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://lsfb.avap.jilintv.cn/zqvk7vpj/channel/906341e6f19b4c4bacdc89941eb85d12/index.m3u8"
  },
  {
    id: "vid-0j1lyxx",
    title: "Kairali We (576p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_KAIRALI_WE/images/LOGO_HD/image.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cdn-3.pishow.tv/live/1530/master.m3u8"
  },
  {
    id: "vid-pvqw6bz",
    title: "KCM (1080p) [Geo-blocked]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://jiotvimages.cdn.jio.com/dare_images/images/KCM.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://amg02159-amg02159c7-samsung-in-4001.playouts.now.amagi.tv/playlist/amg02159-kcglobal-kcm-samsungin/playlist.m3u8"
  },
  {
    id: "vid-jjjkmm7",
    title: "KidsFlix (1080p) [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/4Pn0ADQ.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=50"
  },
  {
    id: "vid-ik1yzvf",
    title: "Kinoteatr (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/emH1BgC.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://stream8.cinerama.uz/1009/tracks-v1a1/playlist.m3u8"
  },
  {
    id: "vid-efhzp6f",
    title: "Klasik TV (576p) [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/C90BYlb.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://178.253.194.105/klasiktv/playlist.m3u8"
  },
  {
    id: "vid-af68bvh",
    title: "Kuriakos Cine (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/CZViCwB.jpg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://w2.manasat.com/kcine/smil:kcine.smil/playlist.m3u8"
  },
  {
    id: "vid-i5olrd7",
    title: "Lifetime Movies East (720p) [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/BWmqYTO.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://tvpass.org/live/LifetimeMoviesEast/hd"
  },
  {
    id: "vid-w6jmbcw",
    title: "Maah TV (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/FkyueH6.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://hls.maahtv.live/hls/stream.m3u8"
  },
  {
    id: "vid-1kml26d",
    title: "Made in Hollywood",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/p16HNIM.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://connection3-ent-nz.samsung.wurl.tv/playlist.m3u8"
  },
  {
    id: "vid-70krrt3",
    title: "Maha Movie (576p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://jiotvimages.cdn.jio.com/dare_images/images/Maha_Movies.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cdn-6.pishow.tv/live/10007/master.m3u8"
  },
  {
    id: "vid-n7xtfvs",
    title: "Manoranjan Grand (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://dtil.tmsimg.com/assets/s143302_ld_h15_aa.png?lock=720x540",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cdn-1.pishow.tv/live/1011/master.m3u8"
  },
  {
    id: "vid-06jjgbe",
    title: "Maverick Black Cinema (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://images.fubo.tv/station_logos/maverick_black_cinema_c.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://maverick-maverick-black-cinema-3-us.roku.wurl.tv/playlist.m3u8"
  },
  {
    id: "vid-o0kd9qg",
    title: "Max Movies (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://livetv.ashokadigital.net/upload/logo/1732168422_WhatsApp%20Image%202024-11-21%20at%2010.18.47%20AM.jpeg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://live.maxtn.in/maxmovies/maxmovies/index.m3u8"
  },
  {
    id: "vid-6lv1f18",
    title: "MAX Reels",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://images.maxstream.tv/sites/default/files/entry/0_psqdb637/landscape_carousel_xxhdpi.webp",
    category: "Кіно та Фільми",
    country: "",
    url: "https://indihuy.streamized.net/atm/DASH/useeprime/manifest.mpd"
  },
  {
    id: "vid-qu3r87q",
    title: "MBC Bollywood (1080p) [Geo-blocked]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/TTAGFHG.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-bollywood/546eb40d7dcf9a209255dd2496903764/index.m3u8"
  },
  {
    id: "vid-b599pce",
    title: "MBC+ Drama (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/lxWdjXG.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-plus-drama/e37251ec2aac8f6c98f75cd0fa37cd28/index.m3u8"
  },
  {
    id: "vid-o7xp08q",
    title: "MCI Televisión (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://pbs.twimg.com/profile_images/1836009952420274177/FfYonU6r_400x400.jpg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://video.ejeserver.com/live/mcitelevision.m3u8"
  },
  {
    id: "vid-xg26tkh",
    title: "Mega Cine TV (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://www.vivalivetv.com/public/files/shows/0/1/2893-294x165-FFFFFF.jpg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cnn.hostlagarto.com/megacinetv/playlist.m3u8"
  },
  {
    id: "vid-uhr3qi7",
    title: "Memorias TV Film (720p) [Geo-blocked]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/vNfjW6Y.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://video.xtrematv.com:3725/live/memoriasfilmlive.m3u8"
  },
  {
    id: "vid-v9tk10u",
    title: "Meta Film TV",
    author: "Кіно та Фільми",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://metafilmhls.wns.live/hls/stream.m3u8"
  },
  {
    id: "vid-1256ygx",
    title: "MH One Movies (576p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://mumt03.tangotv.in/MHONEMOVIE/index.m3u8"
  },
  {
    id: "vid-okuaho8",
    title: "Mix Hollywood (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/1ENdbZn.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://ml-pull-hwc.myco.io/MixTV/hls/index.m3u8"
  },
  {
    id: "vid-e9j90a4",
    title: "like Gecko) Chrome/146.0.0.0 Safari/537.36\" group-title=\"Movies\",MN+",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://new.skytel.mn/uploads/channel/mn-676145a957d06.jpeg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cdn4.skygo.mn/live/disk1/MNplus91/HLSv3-FTA/MNplus91.m3u8"
  },
  {
    id: "vid-57vhvey",
    title: "like Gecko) Chrome/144.0.0.0 Safari/537.36\" group-title=\"Movies\",MovieBox (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/xeO1Zb4.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cdn4.skygo.mn/live/disk1/Moviebox/DASH-FTA/Moviebox.mpd"
  },
  {
    id: "vid-ugsu4xe",
    title: "Movieplex (576p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/THJEAqJ.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://mumt04.tangotv.in/MOVIEPLEX/index.m3u8"
  },
  {
    id: "vid-sl6e0r2",
    title: "Movies Action (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/NIVhISa.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://shd-amg-fast.edgenextcdn.net/tx011/playlist.m3u8"
  },
  {
    id: "vid-738c45r",
    title: "Movies Thriller (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/JWihdcl.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://shd-amg-fast.edgenextcdn.net/tx012/playlist.m3u8"
  },
  {
    id: "vid-bqub983",
    title: "Movies! (480p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/gAGn3mK.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://bozztv.com/dvrfl03/hdirect/hdirect-ovair1-movies!/index.m3u8"
  },
  {
    id: "vid-guh9x6k",
    title: "MovieSphere (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/h1ejU90.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://amg00353-lionsgatestudio-moviesphere-xumo-zh5u0.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-nbq7mty",
    title: "MovieSphere AU (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/h1ejU90.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://amg00353-lionsgatefilmsi-moviesphereaus-samsungau-7qzhf.amagi.tv/playlist/amg00353-lionsgatefilmsi-moviesphereaus-samsungau/playlist.m3u8"
  },
  {
    id: "vid-q2y667q",
    title: "MovieSphere UK (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/h1ejU90.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://moviesphereuk-samsunguk.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-3xa2pv7",
    title: "Movify Kino (576p)",
    author: "Ретро / Класика",
    type: "video",
    cover: "https://i.imgur.com/XIk5EJN.png",
    category: "Ретро / Класика",
    country: "",
    url: "https://void.greenhosting.ru/MovifyKino_Mpeg4/index.m3u8"
  },
  {
    id: "vid-o3s2nzf",
    title: "like Gecko Chrome/144.0.0.0 Safari/537.36\" group-title=\"Movies\",My Cinema [Geo-blocked]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/BTmcTQO.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://op-group1-swiftservehd-1.dens.tv/h/h192/index.m3u8"
  },
  {
    id: "vid-xtc1v36",
    title: "like Gecko Chrome/144.0.0.0 Safari/537.36\" group-title=\"Movies\",My Cinema Europe [Geo-blocked]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/jz0d8tH.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://op-group1-swiftservehd-1.dens.tv/h/h18/index.m3u8"
  },
  {
    id: "vid-9peod20",
    title: "MyTime Movie Network (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/pw4NZK1.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://appletree-mytimeuk-rakuten.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-y7zypaq",
    title: "MyTime Movie Network (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/HYgxPVQ.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://appletree-mytimeau-samsung.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-eys7q6v",
    title: "MyTime Movie Network Brazil (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/aiGQtzI.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://appletree-mytime-samsungbrazil.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-4z9pzmo",
    title: "MyTime Movie Network Mexico (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/pw4NZK1.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://appletree-mytime-samsungmexico.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-7cq01sq",
    title: "MyTime movie network Spain (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/pw4NZK1.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://appletree-mytimespain-rakuten.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-cpn3t3p",
    title: "NETV Toronto (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/WXRBuOW.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://eu1.vectromdigital.com:1936/netvtoronto/netvtoronto/playlist.m3u8"
  },
  {
    id: "vid-5m0nr4m",
    title: "NEW KMOVIES (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/wCgirjc.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://ads.its-newid.net/api/manifest.m3u8?tp=samsung_tvplus&channel_id=newid_343&ads.service_id=GB1700007PK"
  },
  {
    id: "vid-ts3i1ub",
    title: "Newflix",
    author: "Кіно та Фільми",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://newfhls.wns.live/hls/stream.m3u8"
  },
  {
    id: "vid-7wbu65j",
    title: "Next HD (480p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/c2rF3SS.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://live.enhdtv.com:19360/nexthd/nexthd.m3u8"
  },
  {
    id: "vid-le0564t",
    title: "Nolly Africa HD (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/IxtGpti.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://amg02784-amg02784c2-amgplt0002.playout.now3.amagi.tv/ts-eu-w1-n2/playlist/amg02784-amg02784c2-amgplt0002/playlist.m3u8"
  },
  {
    id: "vid-pxhews3",
    title: "Orbita Chile TV (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/gbNh79Z.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://orbitachiletv.org/hls/0/stream.m3u8"
  },
  {
    id: "vid-9pvkvdy",
    title: "Oscar Movies Bhojpuri (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://dtil.tmsimg.com/assets/s143638_ld_h9_ab.png?lock=720x540",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cdn-4.pishow.tv/live/233/master.m3u8"
  },
  {
    id: "vid-da67wut",
    title: "OuterSphere (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://provider-static.plex.tv/epg/cms/production/f162df8b-6532-43fe-9202-83a658090651/OuterSphere_1500x1000_Logo_Dark_-_Chris_Connors__1_.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://d3o593mz1glx8d.cloudfront.net/OuterSphere_US.m3u8"
  },
  {
    id: "vid-keidgul",
    title: "Pantalla Clásica EC (512p) [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/mhbERF9.jpg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://live21.bozztv.com/akamaissh101/ssh101/pantallaclasics/playlist.m3u8"
  },
  {
    id: "vid-yp24twh",
    title: "Persiana Cinema",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/hgIro9r.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cinehls.persiana.live/hls/stream.m3u8"
  },
  {
    id: "vid-sxzwumf",
    title: "Persiana Family",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/lMZsuWi.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://familyhls.persiana.live/hls/stream.m3u8"
  },
  {
    id: "vid-7lpwbat",
    title: "Persiana Iranian",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/vqrrpBi.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://irhls.persiana.live/hls/stream.m3u8"
  },
  {
    id: "vid-hcgihme",
    title: "Persiana Korea",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/si2ZnIA.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://korhls.persiana.live/hls/stream.m3u8"
  },
  {
    id: "vid-6ls18um",
    title: "Persiana Latino",
    author: "Кіно та Фільми",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://latinohls.persiana.live/hls/stream.m3u8"
  },
  {
    id: "vid-faucfe4",
    title: "Persiana Plus",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/0xttibX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://euhls.persiana.live/hls/stream.m3u8"
  },
  {
    id: "vid-cgjo2nk",
    title: "Pitaara (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PITAARA/images/LOGO_HD/image.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://vg-pitaaratvlive.akamaized.net/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/vglive-sk-583798/playlist.m3u8"
  },
  {
    id: "vid-zjh9xh9",
    title: "Pro100TV (576p)",
    author: "Ретро / Класика",
    type: "video",
    cover: "https://i.imgur.com/YfQEflM.png",
    category: "Ретро / Класика",
    country: "",
    url: "https://sirius.greenhosting.ru/Pro100tvRu/video.m3u8"
  },
  {
    id: "vid-zpy3nqw",
    title: "Public Movies (576p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_PUBLIC_MOVIES/images/LOGO_HD/image.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://mumt04.tangotv.in/PUBLICMOVIES/index.m3u8"
  },
  {
    id: "vid-crelo90",
    title: "Rai Movie (576p) [Geo-blocked]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/0FjxXU9.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://mediapolis.rai.it/relinker/relinkerServlet.htm?cont=747002"
  },
  {
    id: "vid-et0gcqs",
    title: "Raj Digital Plus (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_RAJ_DIGITAL_PLUS/images/LOGO_HD/image.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://livestream.rajtv.tv/hlslive/Admin/px08241087/live/RajTV_Digital_plus/master_1.m3u8"
  },
  {
    id: "vid-5dc9tua",
    title: "Rakuten Top Movies UK (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://0145451975a64b35866170fd2e8fa486.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-5987/master.m3u8"
  },
  {
    id: "vid-bydnbg6",
    title: "Rakuten TV Action Movies Austria (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://0f846627524f4dd2995e93581379db82.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenActionMovies-1/playlist.m3u8"
  },
  {
    id: "vid-nvcear8",
    title: "Rakuten TV Action Movies Finland (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://bca5a421a70c46ad911efd0a4767c4bf.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6075/master.m3u8"
  },
  {
    id: "vid-i5fqg1n",
    title: "Rakuten TV Action Movies Germany (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://284824cf70404fdfb6ddf9349009c710.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6066/master.m3u8"
  },
  {
    id: "vid-75ovp0o",
    title: "Rakuten TV Action Movies Italy (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://87f2e2e5e7624e3bad85da1ca2ed31a7.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6067/master.m3u8"
  },
  {
    id: "vid-em8fks0",
    title: "Rakuten TV Action Movies Spain (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://a9c57ec7ec5e4b7daeacc6316a0bb404.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6069/master.m3u8"
  },
  {
    id: "vid-21d5if3",
    title: "Rakuten TV Action Movies UK (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://54045f0c40fd442c8b06df076aaf1e85.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6065/master.m3u8"
  },
  {
    id: "vid-nfe7kq9",
    title: "Rakuten TV Comedy Movies Austria (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://7ed752b220a441b7b22bdf697c6c4df8.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenComedyMovies-1/playlist.m3u8"
  },
  {
    id: "vid-oeceazf",
    title: "Rakuten TV Comedy Movies Finland (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://a300af98e00746e2acf2346f43e47bd1.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6191/master.m3u8"
  },
  {
    id: "vid-gv3gpgs",
    title: "Rakuten TV Comedy Movies Germany (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://ecac08c9e2214375b907d6825aaf9a01.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6182/master.m3u8"
  },
  {
    id: "vid-rlgie1y",
    title: "Rakuten TV Comedy Movies Italy (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://b8bc6c4b9be64bd6aeb3b92aa8521ed4.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6184/master.m3u8"
  },
  {
    id: "vid-obrfjth",
    title: "Rakuten TV Comedy Movies Spain (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://71db867f03ce4d71a29e92155f07ab87.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6180/master.m3u8"
  },
  {
    id: "vid-6yxya3h",
    title: "Rakuten TV Comedy Movies UK (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://9be783d652cd4b099cf63e1dc134c4a3.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6181/master.m3u8"
  },
  {
    id: "vid-3u58u3u",
    title: "Rakuten TV Drama Movies Austria (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://df1aa472ff5b4780a8d91fe319778b4d.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenTVShows-1/playlist.m3u8"
  },
  {
    id: "vid-yu4rrv8",
    title: "Rakuten TV Drama Movies Finland (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://d7e8ee3c924d4305a0c1840fe94c5d36.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6102/master.m3u8"
  },
  {
    id: "vid-h12lgmt",
    title: "Rakuten TV Drama Movies Germany (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://968754c2483045c1a9a7f677caec35b6.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6096/master.m3u8"
  },
  {
    id: "vid-pv8a1sw",
    title: "Rakuten TV Drama Movies Italy (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://f84e0b1628464fab846160df957f269e.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6094/master.m3u8"
  },
  {
    id: "vid-d3415ip",
    title: "Rakuten TV Drama Movies Spain (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://a7089c89d85f453d850c4a1518b43076.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6092/master.m3u8"
  },
  {
    id: "vid-gm71isk",
    title: "Rakuten TV Drama Movies UK (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://fee09fd665814f51b939b6d106cf5f66.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6093/master.m3u8"
  },
  {
    id: "vid-3gnunvi",
    title: "Rakuten TV Family Movies Austria (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://9fa8baba055e4a52b0a8d1ae7d78bed8.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenFamily-1/playlist.m3u8"
  },
  {
    id: "vid-n9vaw9r",
    title: "Rakuten TV Family Movies Finland (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://758ee983d61e400381dea6fa8154f4e0.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6227/master.m3u8"
  },
  {
    id: "vid-4b99gzl",
    title: "Rakuten TV Family Movies Germany (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://af230031eeac45f3b78d4f8a13265105.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6209/master.m3u8"
  },
  {
    id: "vid-7vvbn5y",
    title: "Rakuten TV Family Movies Italy (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://3315fc3e7276420f895e19cf807dbee1.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6215/master.m3u8"
  },
  {
    id: "vid-jtlvu0t",
    title: "Rakuten TV Family Movies Spain (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://b0d59c8c98974e708e5ccb9a27cdfdfc.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6205/master.m3u8"
  },
  {
    id: "vid-k8r6ad0",
    title: "Rakuten TV Family Movies UK (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://e3207568b726401995c25670faaf32e4.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6203/master.m3u8"
  },
  {
    id: "vid-porkaqf",
    title: "Rakuten TV Family Switzerland (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://a24daf1125344b9cab66eed2fcff8821.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-ch_RakutenFamily-1/playlist.m3u8"
  },
  {
    id: "vid-zb1hgvo",
    title: "Rakuten TV Nordic Films (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://images-3.rakuten.tv/storage/global-live-channel/translation/artwork/ff79e878-3eea-45fc-b0cd-55d6acce9b18-width200-quality90.jpeg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://4aa9ef08b70d4b0c8f3519c5950b1930.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6303/master.m3u8"
  },
  {
    id: "vid-09g02c7",
    title: "Rakuten TV Top Movies Finland (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://1d1b0d4cb6ae4c31985d13221795695b.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6057/master.m3u8"
  },
  {
    id: "vid-ogcopcm",
    title: "Rakuten TV Top Movies Germany (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cbb622b29f5d43b598991f3fa19de291.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-5985/master.m3u8"
  },
  {
    id: "vid-mhl4mx4",
    title: "Rakuten TV Top Movies Italy (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://d4a4999341764c67a67e9ec9eb3790ab.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-5984/master.m3u8"
  },
  {
    id: "vid-fxlupkg",
    title: "Rakuten TV Top Movies Spain (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Meew6eX.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://ff335120300e4742a2b135ee9a9e7df8.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-5983/master.m3u8"
  },
  {
    id: "vid-x8s7z3v",
    title: "like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0\" group-title=\"Movies\",Revry Her (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/DISTROTV/LIVECHANNEL/66698907bac4421ebc533646/images/logo_20231219_221435_68.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/revry-her/playlist.m3u8?ads.vf=j5eHovd50EC"
  },
  {
    id: "vid-rcs1yd5",
    title: "Roja Movies (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://jiotvimages.cdn.jio.com/dare_images/images/rojamovies.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://stream.rojatv.cloud/rojatv/rojatv/index.m3u8"
  },
  {
    id: "vid-nf4w0e9",
    title: "Rotana Cinema Egypt (1080p) [Geo-blocked]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/dGlKoLW.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://rotana.hibridcdn.net/rotananet/cinemamasr_net-7Y83PP5adWixDF93/playlist.m3u8"
  },
  {
    id: "vid-4efa0rp",
    title: "Rotana Cinema KSA (1080p) [Geo-blocked]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/pGgp38I.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://rotana.hibridcdn.net/rotananet/cinema_net-7Y83PP5adWixDF93/playlist.m3u8"
  },
  {
    id: "vid-ms84lwu",
    title: "Runtime Espanol (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/OMQq19N.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://run-rt-uh-roku.otteravision.com/run/rt_uh/rt_uh.m3u8"
  },
  {
    id: "vid-1nfgc8t",
    title: "ServusTV (1080p) [Geo-blocked]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/6W637Gn.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://stv-live.akamaized.net/hls/live/2031011/lingeoSTVATwebPri/master.m3u8"
  },
  {
    id: "vid-yjwak9x",
    title: "Shemaroo Josh (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://dtil.tmsimg.com/assets/GNLZZGG00297P3E.png?lock=720x540",
    category: "Кіно та Фільми",
    country: "",
    url: "https://airtelapp.shemaroo.com/shemarooChumbakTV/smil:shemarooChumbakTVadp.smil/playlist.m3u8"
  },
  {
    id: "vid-2a843fx",
    title: "Shubh Cinema TV (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/RQhorAG.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://d393sxaxig6bax.cloudfront.net/out/v1/589cf2cf44bf42bb941e817a2240d62e/index.m3u8"
  },
  {
    id: "vid-aqj8jh1",
    title: "SL 1",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/n9cuM2W.jpg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://slonehls.wns.live/hls/stream.m3u8"
  },
  {
    id: "vid-oa4dx08",
    title: "SL 2",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/BVuUx5R.jpg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://sltwohls.wns.live/hls/stream.m3u8"
  },
  {
    id: "vid-qunlgln",
    title: "Sony Canal Novelas",
    author: "Кіно та Фільми",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://a89829b8dca2471ab52ea9a57bc28a35.mediatailor.us-east-1.amazonaws.com/v1/master/0fb304b2320b25f067414d481a779b77db81760d/CanelaTV_SonyCanalNovelas/playlist.m3u8"
  },
  {
    id: "vid-9uomzre",
    title: "Sony One Favoris (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/RO4AM4b.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://49d735318d6b4c30a24a7997ea594e1b.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-820-FR-SONYONEFAVORIS-LG_FR/playlist.m3u8"
  },
  {
    id: "vid-ogpfq09",
    title: "Sony One Hits Action (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/pXsZEsR.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://5098a8b860504a3690fd2e7c0a18d68f.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-817-FR-SONYONEHITSACTION-LG_FR/playlist.m3u8"
  },
  {
    id: "vid-qq3klez",
    title: "Sony One Hits Comedie (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/8sHuxxS.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://7aa9671895264ec9a384dfed1b992171.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-818-FR-SONYONEHITSCOMDIE-LG_FR/playlist.m3u8"
  },
  {
    id: "vid-h31ap5p",
    title: "Sony Pix HD (1080p) [Geo-blocked]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.postimg.cc/Z5G8j67L/PIX-HD-WHITE.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://sl.vodep39240327.workers.dev/channel/SONY%20PIX%20HD.m3u8"
  },
  {
    id: "vid-t8ph6gi",
    title: "Sony Wah (1080p) [Geo-blocked]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SONY_WAH/images/LOGO_HD/image.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://sl.vodep39240327.workers.dev/channel/SONY%20WAH.m3u8"
  },
  {
    id: "vid-77g6y6o",
    title: "South Station (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN3800008CX_20260325T012316SQUARE.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cc-yw7ztecy8do3q.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-yw7ztecy8do3q/SS_IN.m3u8"
  },
  {
    id: "vid-stbi9dn",
    title: "Star Maa Movies HD (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://dtil.tmsimg.com/assets/s143826_ld_h15_aa.png?lock=720x540",
    category: "Кіно та Фільми",
    country: "",
    url: "https://anet.keralive.workers.dev/v1/master/a0d007312bfd99c47f76b77ae26b1ccdaae76cb1/maamovies_live_https/index.m3u8"
  },
  {
    id: "vid-wim83av",
    title: "Star Tamil Television (360p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/fjHcr9z.jpg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://edge4-moblive.yuppcdn.net/trans1sd/smil:strtml19.smil/playlist.m3u8?dvr="
  },
  {
    id: "vid-kdj4joi",
    title: "START Air",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/4bACa7x.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://livetv.mylifeisgood.net.ru/channels/strwc.m3u8"
  },
  {
    id: "vid-oc65oxg",
    title: "START World",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/TXtY5eM.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://livetv.mylifeisgood.net.ru/channels/strvf.m3u8"
  },
  {
    id: "vid-fbcol9j",
    title: "Studio One + (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/yOPB7JB.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cdn-1.pishow.tv/live/276/master.m3u8"
  },
  {
    id: "vid-luhghxn",
    title: "Suriyan TV (576p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/transparentImages/Suriyan-tv-logo_2000_X_1125_Transpharent.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://stream.sscloud7.com/live/suriyantv/index.m3u8"
  },
  {
    id: "vid-ii6y30r",
    title: "T2 Movies",
    author: "Кіно та Фільми",
    type: "video",
    cover: "/texnoplus.svg",
    category: "Кіно та Фільми",
    country: "",
    url: "https://ca-rt.onetv.app/T2Movies/index-0.m3u8?token=onetv202"
  },
  {
    id: "vid-yxt8jzo",
    title: "Tamasha",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/fa/thumb/f/f2/IRIB_tamashaTV.svg/960px-IRIB_tamashaTV.svg.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://ncdn.telewebion.ir/hdtest/live/playlist.m3u8"
  },
  {
    id: "vid-27putf7",
    title: "TF1 Series Films (1080p) [Geo-Blocked]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/4CJIDKQ.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://viamotionhsi.netplus.ch/live/eds/hd1/browser-HLS8/hd1.m3u8"
  },
  {
    id: "vid-f5zaea7",
    title: "Thalaa TV (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://d229kpbsb5jevy.cloudfront.net/yuppfast/content/common/channel/logos/thalaa-tv.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://streams2.sofast.tv/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/2069c593-3c07-4d62-9d44-746be5c3a5d6/manifest.m3u8"
  },
  {
    id: "vid-h6ch2tg",
    title: "The Film Detective (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/yfOwmsP.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cinedigm-entertainment-corp-thefilmdetective-1-us.ono.wurl.tv/playlist.m3u8"
  },
  {
    id: "vid-nwtb0u2",
    title: "The Movie Club (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN38000072R_20260325T012318SQUARE.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://sis-global.prod.samsungtv.plus/v1/tvpprd/sc-mp2ar4ca425xo.m3u8"
  },
  {
    id: "vid-tscwp7b",
    title: "The Movie Club +2 (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN40000100Y_20260204T004058SQUARE.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://d3gnyty2vddhsg.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/pb-ytipwjqub3kf8/TMC2_IN.m3u8?ads.ads_cdn=cf&ads.cdn=cf"
  },
  {
    id: "vid-pi7kj7u",
    title: "Thrill (540p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Y282owj.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/thrill/manifest.mpd"
  },
  {
    id: "vid-dyp009e",
    title: "Tolly TV (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://d229kpbsb5jevy.cloudfront.net/yuppfast/content/common/channel/logos/aumnrs.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://streams2.sofast.tv/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/13b5735d-52c3-4be0-853d-e0ec0127e708/manifest.m3u8"
  },
  {
    id: "vid-r7xa79n",
    title: "TVCARiB Cinema (720p) [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/fvGlwKo.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cdn.mycloudstream.io/hls/live/broadcast/l3vslw4i/index.m3u8"
  },
  {
    id: "vid-rrxnbag",
    title: "TVS Drive In Movie (360p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/OR9APjb.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://rpn.bozztv.com/gusa/gusa-tvsdriveinmovie/index.m3u8"
  },
  {
    id: "vid-6x7riz8",
    title: "TVS Film Noir Network (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/A4yWhQw.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://rpn.bozztv.com/trn01/gusa-TVSFilmNoir/index.m3u8"
  },
  {
    id: "vid-m666ooc",
    title: "USA Network East (1080p) [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/USA_Network_logo_%282016%29.svg/960px-USA_Network_logo_%282016%29.svg.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://tvpass.org/live/USANetworkEast/hd"
  },
  {
    id: "vid-v6nlten",
    title: "Victor Valley Movies (1080p) [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/zgiuNNj.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://2-fss-2.streamhoster.com/pl_138/201950-5317556-1/playlist.m3u8"
  },
  {
    id: "vid-wtrr5ds",
    title: "Whiplash Cinema (480p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://whiplash.cc/assets/img/channels/whiplashcinema.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cdn.whiplash.cc/whiplash-cinema/index.m3u8"
  },
  {
    id: "vid-9n854r8",
    title: "Wildside TV (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/cQkfRhH.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://versatile-wildsidetv-1-fr.samsung.wurl.tv/playlist.m3u8"
  },
  {
    id: "vid-qjqbe88",
    title: "Wu Tang Collection (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/sz55sBl.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://dbrb49pjoymg4.cloudfront.net/10001/99991745/hls/master.m3u8?ads.xumo_channelId=99991745"
  },
  {
    id: "vid-388tuxb",
    title: "Xtrema Accion",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/z5NwizH.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://stmv6.voxtvhd.com.br/cineaccion/cineaccion/playlist.m3u8"
  },
  {
    id: "vid-i8q4l6y",
    title: "Xtrema Cine Clasico",
    author: "Ретро / Класика",
    type: "video",
    cover: "https://i.imgur.com/j91M4Yf.png",
    category: "Ретро / Класика",
    country: "",
    url: "https://stmv6.voxtvhd.com.br/cineclasico/cineclasico/playlist.m3u8"
  },
  {
    id: "vid-k1a4qjh",
    title: "Xtrema Terror",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/FcaTUym.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://stmv6.voxtvhd.com.br/cineterror/cineterror/playlist.m3u8"
  },
  {
    id: "vid-qrg2mvz",
    title: "ZB Cinema (720p)",
    author: "Ретро / Класика",
    type: "video",
    cover: "https://jiotvimages.cdn.jio.com/dare_images/images/ZBCINEMA.png",
    category: "Ретро / Класика",
    country: "",
    url: "https://server.zillarbarta.com/ZBCINEMA/index.m3u8"
  },
  {
    id: "vid-1echs9g",
    title: "Zee Bollymovies (1080p) [Geo-blocked]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://framerusercontent.com/images/mqfJ18x4jYe0GbZUbxSHsbnWU.png?scale-down-to=512",
    category: "Кіно та Фільми",
    country: "",
    url: "https://amg17931-zee-amg17931c8-samsung-th-6526.playouts.now.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-nn81why",
    title: "Zee Bollymovies Australia (1080p) [Geo-blocked]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://framerusercontent.com/images/mqfJ18x4jYe0GbZUbxSHsbnWU.png?scale-down-to=512",
    category: "Кіно та Фільми",
    country: "",
    url: "https://amg17931-zee-amg17931c8-samsung-au-8871.playouts.now.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-2xik9sc",
    title: "Zee Cinema APAC (1080p) [Geo-blocked]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZEE_CINEMA/images/LOGO_HD/LOGO_HD_image.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://amg17931-zee-amg17931c5-samsung-au-8873.playouts.now.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-cuv1usi",
    title: "Zee Cinemalu HD (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://dtil.tmsimg.com/assets/GNLZZGG0022ZEQ9.png?lock=720x540",
    category: "Кіно та Фільми",
    country: "",
    url: "https://mumbai-edge.smartplaytv.in/ZeeCinemaluHD/index.m3u8"
  },
  {
    id: "vid-mlvxvgx",
    title: "Zee South Flix (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://d3bd0tgyk368z1.cloudfront.net/zeelg/LG%20logo%20artwork/400x200/zsouthflix.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://amg00862-amg00862c9-amgplt0173.playout.now3.amagi.tv/playlist/amg00862-amg00862c9-amgplt0173/playlist.m3u8"
  },
  {
    id: "vid-ruzlazw",
    title: "Zylo Cine Friki (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/b3Ospym.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://d2mr4fu91mjx9m.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-rb0tx75ojbc5u/CineFriki_ES.m3u8"
  },
  {
    id: "vid-2fmjfkl",
    title: "Zylo Ciné Nanar (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/YnUZd3W.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://zylo-cinenanar-rakuten.amagi.tv/playlist.m3u8"
  },
  {
    id: "vid-xdb6vhw",
    title: "Zylo Cine Western (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/2UROzSc.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://d2nq34q0i1r3la.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-awohw8g217ho8/CineWestern_ES.m3u8"
  },
  {
    id: "vid-9ld9z97",
    title: "Zylo Ciné Western (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/tteOFkL.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://amg00711-zylo-amg00711c8-rakuten-uk-2686.playouts.now.amagi.tv/playlist/amg00711-zylofast-cinewestern-rakutenuk/playlist.m3u8"
  },
  {
    id: "vid-v6r1nck",
    title: "Zylo Emotion' L (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/MP34aaj.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://rakutenaa-zylo-emotional-rakuten-r1zkm.amagi.tv/playlist/rakutenAA-zylo-emotional-rakuten/playlist.m3u8"
  },
  {
    id: "vid-atpxfja",
    title: "Zylo ScreamIN (1080p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/tGmKbil.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://rakutenaa-zylo-screamin-rakuten-p11ej.amagi.tv/playlist/rakutenAA-zylo-screamin-rakuten/playlist.m3u8"
  },
  {
    id: "vid-fcltk1w",
    title: "Детское кино International [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/dJqFRhQ.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://autopilot.catcast.tv/content/38720/index.m3u8"
  },
  {
    id: "vid-2spruwp",
    title: "Дом Кино",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%B0_%D0%94%D0%BE%D0%BC_%D0%9A%D0%B8%D0%BD%D0%BE.png/960px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%B0_%D0%94%D0%BE%D0%BC_%D0%9A%D0%B8%D0%BD%D0%BE.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://streaming.thestream.cyou/live/44.m3u8"
  },
  {
    id: "vid-n0okece",
    title: "Новый Русский (720p)",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/iuRSScH.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://live.15plusmg.ru/memfs/f983b507-a170-41a9-85a9-d9afc6cba9c1.m3u8"
  },
  {
    id: "vid-65l49dl",
    title: "Сити Эдем КиноАзия [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/gaket4B.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cityeden.catcast.tv/content/34393/index.m3u8"
  },
  {
    id: "vid-bqdn160",
    title: "Сити Эдем КиноАрт [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/67CWCtz.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cityeden.catcast.tv/content/38398/index.m3u8"
  },
  {
    id: "vid-rqboml7",
    title: "Сити Эдем КиноДетектив [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/9rKHwBV.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cityeden.catcast.tv/content/41327/index.m3u8"
  },
  {
    id: "vid-38j38ip",
    title: "Сити Эдем КиноДрама [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/29ddffh.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cityeden.catcast.tv/content/45269/index.m3u8"
  },
  {
    id: "vid-egoempw",
    title: "Сити Эдем КиноКлассика [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/0qGCS1S.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cityeden.catcast.tv/content/34185/index.m3u8"
  },
  {
    id: "vid-bn55atl",
    title: "Сити Эдем КиноКомедия [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/Aga2XVA.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cityeden.catcast.tv/content/41331/index.m3u8"
  },
  {
    id: "vid-dn8jpzz",
    title: "Сити Эдем КиноМистика [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/s1Pid0K.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cityeden.catcast.tv/content/40783/index.m3u8"
  },
  {
    id: "vid-5inc6pd",
    title: "Сити Эдем КиноСемья [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/YoWOZMx.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://v2.catcast.tv/content/38128/index.m3u8"
  },
  {
    id: "vid-dt9qi38",
    title: "Сити Эдем КиноФантастика [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/I64FeIO.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cityeden.catcast.tv/content/45268/index.m3u8"
  },
  {
    id: "vid-x8qety5",
    title: "Сити Эдем КиноЭкшен [Not 24/7]",
    author: "Кіно та Фільми",
    type: "video",
    cover: "https://i.imgur.com/uuzuvD0.png",
    category: "Кіно та Фільми",
    country: "",
    url: "https://cityeden.catcast.tv/content/41333/index.m3u8"
  },
  {
    id: "vid-mt922xl",
    title: "Смотрим 100% Классика",
    author: "Ретро / Класика",
    type: "video",
    cover: "https://i.imgur.com/aASNpKq.png",
    category: "Ретро / Класика",
    country: "",
    url: "https://player.smotrim.ru/iframe/stream/live_id/78a66c7c-df38-4091-b2e1-9eeeb4c96338"
  }
];

export function getPodcasts() {
  return PODCASTS;
}
