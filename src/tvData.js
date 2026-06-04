import { getCountryFlag } from './utils.js';

const TV_PLAYLISTS = [
  {
    country: 'Україна', countryCode: 'UA', channels: [
      { name: '24 Канал', url: 'https://streamvideol1.luxnet.ua/news24/smil:news24.stream.smil/playlist.m3u8', category: 'News' },
    ],
  },
  {
    country: 'США', countryCode: 'US', channels: [
      { name: 'ABC News Live', url: 'https://abcnews-streams.akamaized.net/hls/live/2023560/abcnewshudson1/master_4000.m3u8', category: 'News' },
      { name: 'PBS Kids', url: 'https://livestream.pbskids.org/out/v1/14507d931bbe48a69287e4850e53443c/est.m3u8', category: 'Kids' },
      { name: 'CBS News', url: 'https://dai.google.com/linear/hls/event/6mIivPaVSKCJiaudBIdgCQ/master.m3u8', category: 'News' },
      { name: 'ABC 7 Denver', url: 'https://content.uplynk.com/channel/64ca339f04964a5e961c3207a7771bf1.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Велика Британія', countryCode: 'GB', channels: [
      { name: 'Sky News', url: 'https://siloh.pluto.tv/lilo/production/SkyNews/master.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Франція', countryCode: 'FR', channels: [
      { name: 'France 24 EN', url: 'https://amg00106-france24-france24-samsunguk-qvpp8.amagi.tv/playlist/amg00106-france24-france24-samsunguk/playlist.m3u8', category: 'News' },
      { name: 'France 24 FR', url: 'https://live.france24.com/hls/live/2037014/france24_fr_hls/master_5000.m3u8', category: 'News' },
      { name: 'France 24 AR', url: 'https://live.france24.com/hls/live/2037222-b/F24_AR_HI_HLS/master_5000.m3u8', category: 'News' },
      { name: '20 Minutes TV', url: 'https://live-20minutestv.digiteka.com/1961167769/index.m3u8', category: 'General' },
    ],
  },
  {
    country: 'Німеччина', countryCode: 'DE', channels: [
      { name: 'DW English', url: 'https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/master.m3u8', category: 'News' },
      { name: 'DW Arabic', url: 'https://dwamdstream103.akamaized.net/hls/live/2015526/dwstream103/master.m3u8', category: 'News' },
      { name: 'DW Spanish', url: 'https://dwamdstream105.akamaized.net/hls/live/2015527/dwstream105/master.m3u8', category: 'News' },
      { name: 'ORF 1', url: 'https://orf1.mdn.ors.at/out/u/orf1/q8c/manifest.m3u8', category: 'General' },
      { name: 'ORF 2', url: 'https://orf2.mdn.ors.at/out/u/orf2/q8c/manifest.m3u8', category: 'General' },
      { name: 'ORF III', url: 'https://orf3.mdn.ors.at/out/u/orf3/q8c/manifest.m3u8', category: 'General' },
      { name: 'ORF Sport+', url: 'https://orfs.mdn.ors.at/out/u/orfs/q8c/manifest.m3u8', category: 'Sports' },
      { name: 'Servus TV', url: 'https://rbmn-live.akamaized.net/hls/live/2002825/geoSTVATweb/master.m3u8', category: 'General' },
    ],
  },
  {
    country: 'Іспанія', countryCode: 'ES', channels: [
      { name: '3Cat Info', url: 'https://directes-tv-int.3catdirectes.cat/live-origin/canal324-hls/master.m3u8', category: 'News' },
      { name: 'À Punt', url: 'http://92.176.119.180:2095/play/a17d', category: 'Public' },
      { name: '101tv Málaga', url: 'https://liveingesta318.cdnmedia.tv/101weblive/smil:malaga.smil/playlist.m3u8', category: 'General' },
      { name: '101tv Sevilla', url: 'https://liveingesta318.cdnmedia.tv/101weblive/smil:sevilla.smil/playlist.m3u8', category: 'General' },
    ],
  },
  {
    country: 'Італія', countryCode: 'IT', channels: [
      { name: '70-80 TV', url: 'https://585b674743bbb.streamlock.net/9050/9050/playlist.m3u8', category: 'Music' },
    ],
  },
  {
    country: 'Туреччина', countryCode: 'TR', channels: [
      { name: '360 TV', url: 'https://turkmedya-live.ercdn.net/tv360/tv360.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Японія', countryCode: 'JP', channels: [
    ],
  },
  {
    country: 'Канада', countryCode: 'CA', channels: [
      { name: 'CBC News', url: 'https://cbcnewshd-f.akamaihd.net/i/cbcnews_1@8981/index_2500_av-p.m3u8', category: 'News' },
      { name: 'ICI RDI', url: 'https://rcavlive.akamaized.net/hls/live/704025/xcanrdi/master.m3u8', category: 'News' },
      { name: 'ICI Télé HD', url: 'https://rcavlive.akamaized.net/hls/live/696615/xcancbft/master.m3u8', category: 'General' },
    ],
  },
  {
    country: 'Австралія', countryCode: 'AU', channels: [
      { name: 'ABC News AU', url: 'https://abc-iview-mediapackagestreams-2.akamaized.net/out/v1/6e1cc6d25ec0480ea099a5399d73bc4b/index.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Катар', countryCode: 'QA', channels: [
      { name: 'Al Jazeera AR', url: 'https://live-hls-web-aja.getaj.net/AJA/index.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Китай', countryCode: 'CN', channels: [
      { name: 'CGTN', url: 'https://amg00405-rakutentv-cgtn-rakuten-i9tar.amagi.tv/master.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Південна Корея', countryCode: 'KR', channels: [
    ],
  },
  {
    country: 'Сінгапур', countryCode: 'SG', channels: [
      { name: 'CNA', url: 'https://mediacorp-videosbclive.akamaized.net/dd724cfb0e8e4cdc921bbc4ac94614bf/ap-southeast-1/6057994443001/playlist.m3u8', category: 'News' },
    ],
  },
  {
    country: 'ОАЕ', countryCode: 'AE', channels: [
    ],
  },
  {
    country: 'Бельгія', countryCode: 'BE', channels: [
      { name: 'Euronews EN', url: 'https://a-cdn.klowdtv.com/live3/euronews_720p/playlist.m3u8', category: 'News' },
      { name: 'BX1', url: 'https://59959724487e3.streamlock.net/stream/live/playlist.m3u8', category: 'General' },
    ],
  },
  {
    country: 'Білорусь', countryCode: 'BY', channels: [
      { name: 'Беларусь 2', url: 'https://ngtrk.dc.beltelecom.by/ngtrk/smil:belarus2.smil/playlist.m3u8', category: 'Entertainment' },
      { name: 'Беларусь 5', url: 'https://ngtrk.dc.beltelecom.by/ngtrk/smil:belarus5.smil/playlist.m3u8', category: 'Sports' },
      { name: 'Беларусь 24', url: 'https://ngtrk.dc.beltelecom.by/ngtrk/smil:belarus24.smil/playlist.m3u8', category: 'News' },
      { name: 'СТВ', url: 'https://ctv.dc.beltelecom.by/ctv/ctv.stream/playlist.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Польща', countryCode: 'PL', channels: [
      { name: '4 Fun TV', url: 'https://stream.4fun.tv:8888/hls/4f_high/index.m3u8', category: 'Music' },
      { name: '4 Fun Kids', url: 'https://stream.4fun.tv:8889/hls/4fk_high/index.m3u8', category: 'Kids' },
    ],
  },
  {
    country: 'Нідерланди', countryCode: 'NL', channels: [
      { name: '1Almere TV', url: 'https://d3472rjicrodic.cloudfront.net/nlpo/clr-nlpo/709d5260/index.m3u8', category: 'General' },
      { name: 'A1 TV', url: 'https://stream.a1mediagroep.nl/hls/a1tv.m3u8', category: 'General' },
      { name: '1Twente TV', url: 'https://ms7.mx-cd.net/dtv-11/198-989148/1Twente_TV.smil/chunklist_w954512639_b4292608_slNLD.m3u8', category: 'General' },
    ],
  },
  {
    country: 'Швеція', countryCode: 'SE', channels: [
    ],
  },
  {
    country: 'Норвегія', countryCode: 'NO', channels: [
    ],
  },
  {
    country: 'Ізраїль', countryCode: 'IL', channels: [
    ],
  },
  {
    country: 'Бразилія', countryCode: 'BR', channels: [
      { name: 'TV Cultura', url: 'https://player-tvcultura.stream.uol.com.br/live/tvcultura.m3u8', category: 'Public' },
      { name: 'TV Câmara', url: 'https://stream3.camara.gov.br/tv1/manifest.m3u8', category: 'Government' },
      { name: 'COM Brasil', url: 'https://br5093.streamingdevideo.com.br/abc/abc/playlist.m3u8', category: 'General' },
      { name: 'ISTV', url: 'https://video08.logicahost.com.br/istvnacional/srt.stream/istvnacional.m3u8', category: 'General' },
    ],
  },
  {
    country: 'Індія', countryCode: 'IN', channels: [
      { name: 'Aaj Tak HD', url: 'https://feeds.intoday.in/aajtak/api/aajtakhd/master.m3u8', category: 'News' },
      { name: 'Aastha', url: 'https://aasthaott.akamaized.net/110923/smil:aasthatv.smil/index.m3u8', category: 'Religious' },
      { name: '9XM', url: 'https://9xjio.wiseplayout.com/9XM/master.m3u8', category: 'Music' },
      { name: '9X Jalwa', url: 'https://b.jsrdn.com/strm/channels/9xjalwa/master.m3u8', category: 'Music' },
      { name: '10TV', url: 'https://mumbai-edge.smartplaytv.in/10TV/index.m3u8', category: 'News' },
      { name: '99TV', url: 'https://cdn-1.pishow.tv/live/1211/master.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Румунія', countryCode: 'RO', channels: [
      { name: 'A7TV', url: 'https://a7tvlive.ro/A7TV/A7TV/playlist.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Чехія', countryCode: 'CZ', channels: [
    ],
  },
  {
    country: 'Словаччина', countryCode: 'SK', channels: [
      { name: 'Šport', url: 'http://88.212.15.27/live/test_rtvs_sport_hevc/playlist.m3u8', category: 'Sports' },
      { name: ':24', url: 'http://88.212.15.27/live/test_trojka_25p/playlist.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Швейцарія', countryCode: 'CH', channels: [
    ],
  },
  {
    country: 'Болгарія', countryCode: 'BG', channels: [
      { name: 'TV1', url: 'https://tv1.cloudcdn.bg/temp/livestream.m3u8', category: 'News' },
      { name: 'City TV', url: 'https://tv.city.bg/play/tshls/citytv/index.m3u8', category: 'Music' },
    ],
  },
  {
    country: 'Португалія', countryCode: 'PT', channels: [
    ],
  },
  {
    country: 'Греція', countryCode: 'GR', channels: [
    ],
  },
  {
    country: 'Угорщина', countryCode: 'HU', channels: [
      { name: '16tv Budapest', url: 'https://cloudfront44.lexanetwork.com:1344/freerelay/16tv.sdp/playlist.m3u8', category: 'General' },
    ],
  },
  {
    country: 'Хорватія', countryCode: 'HR', channels: [
    ],
  },
  {
    country: 'Сербія', countryCode: 'RS', channels: [
    ],
  },
  {
    country: 'Боснія і Герцеговина', countryCode: 'BA', channels: [
      { name: 'BHT 1', url: 'https://bhrtstream.bhtelecom.ba/bhrtportal_hd.m3u8', category: 'Public' },
      { name: 'N1 BiH', url: 'https://best-str.umn.cdn.united.cloud/stream?channel=n1bos&p=n1Sh4redSecre7iNf0&sp=n1info&stream=sp1400&u=n1info', category: 'News' },
    ],
  },
  {
    country: 'Албанія', countryCode: 'AL', channels: [
      { name: 'A2 CNN Albania', url: 'https://tv.a2news.com/live/smil:a2cnnweb.stream.smil/playlist.m3u8', category: 'News' },
      { name: 'Euronews Albania', url: 'https://www.youtube.com/@EuronewsAlbania/live', category: 'News' },
      { name: 'Ora News', url: 'https://live1.mediadesk.al/oranews.m3u8', category: 'News' },
      { name: 'News 24', url: 'https://tv.balkanweb.com/news24/livestream/playlist.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Андорра', countryCode: 'AD', channels: [
    ],
  },
  {
    country: 'Вірменія', countryCode: 'AM', channels: [
      { name: 'Armenia TV', url: 'https://cdn.hayastantv.com:8088/armenia/tracks-v1a1/mono.m3u8', category: 'Entertainment' },
    ],
  },
  {
    country: 'Азербайджан', countryCode: 'AZ', channels: [
      { name: 'Space TV', url: 'http://109.205.166.68/server124/space_tv/index.m3u8', category: 'General' },
    ],
  },
  {
    country: 'Казахстан', countryCode: 'KZ', channels: [
      { name: '31 Kanal', url: 'https://streams.adapto.kz/hls/live/31kz/main_stream.m3u8', category: 'General' },
      { name: 'Abai TV', url: 'https://abaitv-stream.qazcdn.com/abaitv/abaitv/playlist.m3u8', category: 'Culture' },
    ],
  },
  {
    country: 'Грузія', countryCode: 'GE', channels: [
      { name: '1TV', url: 'https://tv.cdn.xsg.ge/gpb-1tv/index.m3u8', category: 'Public' },
      { name: '2TV', url: 'https://tv.cdn.xsg.ge/gpb-2tv/index.m3u8', category: 'Public' },
    ],
  },
  {
    country: 'Латвія', countryCode: 'LV', channels: [
    ],
  },
  {
    country: 'Литва', countryCode: 'LT', channels: [
    ],
  },
  {
    country: 'Мексика', countryCode: 'MX', channels: [
      { name: '8NTV', url: 'https://60417ddeaf0d9.streamlock.net/ntv/videontv/playlist.m3u8', category: 'News' },
      { name: 'A+', url: 'https://mdstrm.com/live-stream-playlist/60b56be1000ea50835fa1e63.m3u8', category: 'Culture' },
    ],
  },
  {
    country: 'Аргентина', countryCode: 'AR', channels: [
      { name: 'Net TV', url: 'https://unlimited1-us.dps.live/nettv/nettv.smil/playlist.m3u8', category: 'General' },
    ],
  },
  {
    country: 'Чилі', countryCode: 'CL', channels: [
      { name: '13C', url: 'https://origin.dpsgo.com/ssai/event/GI-9cp_bT8KcerLpZwkuhw/master.m3u8', category: 'Culture' },
      { name: '13 Kids', url: 'https://origin.dpsgo.com/ssai/event/LhHrVtyeQkKZ-Ye_xEU75g/master.m3u8', category: 'Kids' },
      { name: '13 Humor', url: 'https://origin.dpsgo.com/ssai/event/cKWySXKgSK-SzlJmESkOWw/master.m3u8', category: 'Comedy' },
      { name: '13C Festival', url: 'https://origin.dpsgo.com/ssai/event/Nftd0fM2SXasfDlRphvUsg/master.m3u8', category: 'Music' },
    ],
  },
  {
    country: 'ПАР', countryCode: 'ZA', channels: [
      { name: '1KZN TV', url: 'https://cdn.freevisiontv.co.za/sttv/smil:1kzn.stream.smil/playlist.m3u8', category: 'General' },
    ],
  },
  {
    country: 'Нігерія', countryCode: 'NG', channels: [
    ],
  },
  {
    country: 'Єгипет', countryCode: 'EG', channels: [
    ],
  },
  {
    country: 'Марокко', countryCode: 'MA', channels: [
      { name: '2M Monde', url: 'https://cdn-globecast.akamaized.net/live/eds/2m_monde/hls_video_ts_tuhawxpiemz257adfc/2m_monde.m3u8', category: 'General' },
    ],
  },
  {
    country: 'Туніс', countryCode: 'TN', channels: [
    ],
  },
  {
    country: 'Таїланд', countryCode: 'TH', channels: [
    ],
  },
  {
    country: 'Філіппіни', countryCode: 'PH', channels: [
      { name: 'Abante TV', url: 'https://amg19223-amg19223c12-amgplt0352.playout.now3.amagi.tv/playlist/amg19223-amg19223c12-amgplt0352/playlist.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Пакистан', countryCode: 'PK', channels: [
      { name: '92 News HD', url: 'http://92news.vdn.dstreamone.net/92newshd/92hd/playlist.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Малайзія', countryCode: 'MY', channels: [
      { name: '8TV', url: 'http://cdn6.163189.xyz/163189/8tv', category: 'Entertainment' },
    ],
  },
  {
    country: 'Іран', countryCode: 'IR', channels: [
      { name: 'Abadan TV', url: 'https://ncdn.telewebion.ir/abadan/live/playlist.m3u8', category: 'General' },
      { name: '247 Box TV', url: 'https://hls.247box.live/hls/stream.m3u8', category: 'Entertainment' },
      { name: '4 Kurd', url: 'https://4kuhls.persiana.live/hls/stream.m3u8', category: 'Music' },
    ],
  },
  {
    country: 'Чад', countryCode: 'TD', channels: [
      { name: 'Tchad 24', url: 'http://102.131.58.110/out_1/index.m3u8', category: 'News' },
      { name: 'Télé Tchad', url: 'https://strhlslb01.streamakaci.tv/str_tchad_tchad/str_tchad_multi/playlist.m3u8', category: 'Public' },
    ],
  },
];

export function getTVPlaylists() {
  const blockedCountries = ['CN', 'JP', 'KR', 'KP', 'IN', 'PK', 'BD', 'SA', 'AE', 'QA', 'KW', 'BH', 'OM', 'YE', 'IR', 'IQ', 'SY', 'LB', 'JO', 'EG', 'MA', 'DZ', 'TN', 'LY', 'TH', 'VN', 'MY', 'ID', 'PH', 'MM', 'KH', 'LA', 'SG', 'LK', 'NP', 'AF', 'TW', 'HK', 'SA', 'AE', 'TR', 'AZ', 'AM', 'GE', 'IL', 'TD'];
  return TV_PLAYLISTS.filter(p => !blockedCountries.includes(p.countryCode)).map(p => ({
    ...p,
    flag: getCountryFlag(p.countryCode),
  }));
}

export function getChannelForPlaylist(playlist, index = 0) {
  if (!playlist || !playlist.channels || playlist.channels.length === 0) return null;
  return playlist.channels[index] || playlist.channels[0];
}

export function getTotalChannelCount() {
  return getTVPlaylists().reduce((sum, p) => sum + p.channels.length, 0);
}

export function getTotalCountryCount() {
  return getTVPlaylists().length;
}
