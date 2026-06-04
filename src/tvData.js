import { getCountryFlag } from './utils.js';

const TV_PLAYLISTS = [
  {
    country: 'Україна', countryCode: 'UA', channels: [
      { name: 'Hromadske TV', url: 'https://hls.hromadske.tv/out/u/hromadske_720p/index.m3u8', category: 'News' },
      { name: 'Радіо Свобода', url: 'https://rfalive3.akamaized.net/hls/live/2043041/rf-ua-ua/master.m3u8', category: 'News' },
      { name: 'Espreso TV', url: 'https://espreso.tv/stream/live_hd.m3u8', category: 'News' },
      { name: '24 Канал', url: 'https://streamvideol1.luxnet.ua/news24/smil:news24.stream.smil/playlist.m3u8', category: 'News' },
      { name: '11 Kanal', url: 'https://11tv-dp.cdn-04.cosmonova.net.ua/hls/11tv-dp_ua_hi/index.m3u8', category: 'General' },
      { name: 'Suspilne Kyiv', url: 'https://cdn.kyiv.ua/suspilne/live/hls/1/index.m3u8', category: 'Public' },
    ],
  },
  {
    country: 'США', countryCode: 'US', channels: [
      { name: 'ABC News Live', url: 'https://abcnews-streams.akamaized.net/hls/live/2023560/abcnewshudson1/master_4000.m3u8', category: 'News' },
      { name: 'NASA TV', url: 'https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/master_2000.m3u8', category: 'Science' },
      { name: 'PBS Kids', url: 'https://livestream.pbskids.org/out/v1/14507d931bbe48a69287e4850e53443c/est.m3u8', category: 'Kids' },
      { name: 'Bloomberg TV', url: 'https://liveprodeuimpeg-gc.akamaized.net/out/u/Index.m3u8', category: 'Business' },
      { name: 'CBS News', url: 'https://dai.google.com/linear/hls/event/6mIivPaVSKCJiaudBIdgCQ/master.m3u8', category: 'News' },
      { name: 'ABC 7 NY', url: 'https://content.uplynk.com/channel/3324f005b82a4a5ea35e5f297043c50a.m3u8', category: 'News' },
      { name: 'ABC 7 Chicago', url: 'https://content.uplynk.com/channel/4a1d7ef8b2904fa18ea882aa946836ef.m3u8', category: 'News' },
      { name: 'ABC 7 Denver', url: 'https://content.uplynk.com/channel/64ca339f04964a5e961c3207a7771bf1.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Велика Британія', countryCode: 'GB', channels: [
      { name: 'Sky News', url: 'https://siloh.pluto.tv/lilo/production/SkyNews/master.m3u8', category: 'News' },
      { name: 'Bloomberg UK', url: 'https://liveprodeuimpeg-gc.akamaized.net/out/u/Index_3250.m3u8', category: 'Business' },
      { name: 'Thats TV', url: 'https://i.mjh.nz/PlutoTV/62dc13038d5c4f0007b8f3b8-alt.m3u8', category: 'Entertainment' },
    ],
  },
  {
    country: 'Франція', countryCode: 'FR', channels: [
      { name: 'France 24 EN', url: 'https://amg00106-france24-france24-samsunguk-qvpp8.amagi.tv/playlist/amg00106-france24-france24-samsunguk/playlist.m3u8', category: 'News' },
      { name: 'France 24 FR', url: 'https://live.france24.com/hls/live/2037014/france24_fr_hls/master_5000.m3u8', category: 'News' },
      { name: 'France 24 AR', url: 'https://live.france24.com/hls/live/2037222-b/F24_AR_HI_HLS/master_5000.m3u8', category: 'News' },
      { name: 'BFM TV', url: 'https://live.bfmtv.com/hls/bfmtv/bfmtv_480p/index.m3u8', category: 'News' },
      { name: '20 Minutes TV', url: 'https://live-20minutestv.digiteka.com/1961167769/index.m3u8', category: 'General' },
      { name: 'Euronews FR', url: 'https://euronews.fastcast4u.com/euronews_fr/index.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Німеччина', countryCode: 'DE', channels: [
      { name: 'DW English', url: 'https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/master.m3u8', category: 'News' },
      { name: 'DW Arabic', url: 'https://dwamdstream103.akamaized.net/hls/live/2015526/dwstream103/master.m3u8', category: 'News' },
      { name: 'DW German', url: 'https://dwamdstream104.akamaized.net/hls/live/2015524/dwstream104/master.m3u8', category: 'News' },
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
      { name: '24 Horas', url: 'https://d32rw80ytx9uxs.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-vlldndmow4yre/24HES.m3u8', category: 'News' },
      { name: '3Cat Info', url: 'https://directes-tv-int.3catdirectes.cat/live-origin/canal324-hls/master.m3u8', category: 'News' },
      { name: 'À Punt', url: 'http://92.176.119.180:2095/play/a17d', category: 'Public' },
      { name: '101tv Málaga', url: 'https://liveingesta318.cdnmedia.tv/101weblive/smil:malaga.smil/playlist.m3u8', category: 'General' },
      { name: '101tv Sevilla', url: 'https://liveingesta318.cdnmedia.tv/101weblive/smil:sevilla.smil/playlist.m3u8', category: 'General' },
    ],
  },
  {
    country: 'Італія', countryCode: 'IT', channels: [
      { name: 'Euronews IT', url: 'https://euronews.fastcast4u.com/euronews_it/index.m3u8', category: 'News' },
      { name: '70-80 TV', url: 'https://585b674743bbb.streamlock.net/9050/9050/playlist.m3u8', category: 'Music' },
    ],
  },
  {
    country: 'Туреччина', countryCode: 'TR', channels: [
      { name: 'TRT World', url: 'https://tv.akillitv.com/trtworld/index.m3u8', category: 'News' },
      { name: 'TRT Haber', url: 'https://tv.akillitv.com/trthaber/index.m3u8', category: 'News' },
      { name: 'TRT 1', url: 'https://tv.akillitv.com/trt1/index.m3u8', category: 'Entertainment' },
      { name: '360 TV', url: 'https://turkmedya-live.ercdn.net/tv360/tv360.m3u8', category: 'News' },
      { name: '24 TV', url: 'https://mn-nl.mncdn.com/kanal24/smil:kanal24.smil/playlist.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Японія', countryCode: 'JP', channels: [
      { name: 'NHK World', url: 'https://nhkworld.webcdn.stream.ne.jp/hls/live/2003458/nhkworld/en/index_v2.m3u8', category: 'News' },
      { name: 'NHK World Premium', url: 'https://nhkworld.webcdn.stream.ne.jp/hls/live/2003458/nhkworld/en/index_v2.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Канада', countryCode: 'CA', channels: [
      { name: 'CBC News', url: 'https://cbcnewshd-f.akamaihd.net/i/cbcnews_1@8981/index_2500_av-p.m3u8', category: 'News' },
      { name: 'ICI RDI', url: 'https://rcavlive.akamaized.net/hls/live/704025/xcanrdi/master.m3u8', category: 'News' },
      { name: 'Global Toronto', url: 'https://d128o1k7zh3htz.cloudfront.net/out/v1/74a58360a3734f97b74ba439bc678044/index.m3u8', category: 'News' },
      { name: 'Global Calgary', url: 'https://dfmjr9irb1dl5.cloudfront.net/out/v1/454010ff309e4963a087f5802856e346/index.m3u8', category: 'News' },
      { name: 'Global Edmonton', url: 'https://da7sdtkzly6qj.cloudfront.net/out/v1/b317f6c10f2e493993bd2b5314df1c7c/index_1.m3u8', category: 'News' },
      { name: 'ICI Télé HD', url: 'https://rcavlive.akamaized.net/hls/live/696615/xcancbft/master.m3u8', category: 'General' },
      { name: 'CPAC EN', url: 'https://d7z3qjdsxbwoq.cloudfront.net/groupa/live/f9809cea-1e07-47cd-a94d-2ddd3e1351db/live.isml/.m3u8', category: 'Public' },
    ],
  },
  {
    country: 'Австралія', countryCode: 'AU', channels: [
      { name: 'ABC News AU', url: 'https://abc-iview-mediapackagestreams-2.akamaized.net/out/v1/6e1cc6d25ec0480ea099a5399d73bc4b/index.m3u8', category: 'News' },
      { name: 'ABC AU', url: 'https://c.mjh.nz/101002210221/', category: 'General' },
      { name: 'ABC Me', url: 'https://c.mjh.nz/101002210224/', category: 'Kids' },
      { name: '9Go!', url: 'https://9now-livestreams.akamaized.net/hls/live/2008312/go-syd/master.m3u8', category: 'Entertainment' },
      { name: '9Life', url: 'https://9now-livestreams.akamaized.net/hls/live/2008313/life-syd/master.m3u8', category: 'Lifestyle' },
      { name: '9Gem', url: 'https://9now-livestreams.akamaized.net/hls/live/2008311/gem-syd/master.m3u8', category: 'Entertainment' },
      { name: '9Rush', url: 'https://9now-livestreams.akamaized.net/hls/live/2010626/rush-syd/master.m3u8', category: 'Entertainment' },
      { name: 'TVSN', url: 'https://tvsn-i.akamaihd.net/hls/live/261837/tvsn/tvsn_750.m3u8', category: 'Shop' },
    ],
  },
  {
    country: 'Катар', countryCode: 'QA', channels: [
      { name: 'Al Jazeera EN', url: 'https://live-hls-web-aje.getaj.net/AJE/index.m3u8', category: 'News' },
      { name: 'Al Jazeera AR', url: 'https://live-hls-web-aja.getaj.net/AJA/index.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Китай', countryCode: 'CN', channels: [
      { name: 'CGTN', url: 'https://amg00405-rakutentv-cgtn-rakuten-i9tar.amagi.tv/master.m3u8', category: 'News' },
      { name: 'CGTN Documentary', url: 'https://cgtndocumentarylivehlsak.akamaized.net/out/u/cgtn-documentary.m3u8', category: 'Documentary' },
    ],
  },
  {
    country: 'Південна Корея', countryCode: 'KR', channels: [
      { name: 'Arirang TV', url: 'https://amdlive-ch01.ctnd.com.edgesuite.net/arirang_1ch/smil:arirang_1ch.smil/playlist.m3u8', category: 'News' },
      { name: 'Arirang Radio', url: 'https://amdlivech01.ctnd.com.edgesuite.net/arirang_1ch/smil:arirang_1ch.smil/playlist.m3u8', category: 'Music' },
    ],
  },
  {
    country: 'Сінгапур', countryCode: 'SG', channels: [
      { name: 'CNA', url: 'https://mediacorp-videosbclive.akamaized.net/dd724cfb0e8e4cdc921bbc4ac94614bf/ap-southeast-1/6057994443001/playlist.m3u8', category: 'News' },
    ],
  },
  {
    country: 'ОАЕ', countryCode: 'AE', channels: [
      { name: 'Al Arabiya', url: 'https://alarabiya-hls.akamaized.net/hls/live/2014252/alarabiya/master.m3u8', category: 'News' },
      { name: 'Al Arabiya FM', url: 'https://alarabiafm-ak.akamaized.net/hls/live/2014253/alarabiafm/master.m3u8', category: 'Radio' },
    ],
  },
  {
    country: 'Бельгія', countryCode: 'BE', channels: [
      { name: 'Euronews EN', url: 'https://a-cdn.klowdtv.com/live3/euronews_720p/playlist.m3u8', category: 'News' },
      { name: 'LN24', url: 'https://live.cdn.ln24.be/out/v1/b191621c8b9a436cad37bb36a82d2e1c/index.m3u8', category: 'News' },
      { name: 'BX1', url: 'https://59959724487e3.streamlock.net/stream/live/playlist.m3u8', category: 'General' },
    ],
  },
  {
    country: 'Білорусь', countryCode: 'BY', channels: [
      { name: 'Беларусь 1', url: 'https://ngtrk.dc.beltelecom.by/ngtrk/smil:belarus1.smil/playlist.m3u8', category: 'General' },
      { name: 'Беларусь 2', url: 'https://ngtrk.dc.beltelecom.by/ngtrk/smil:belarus2.smil/playlist.m3u8', category: 'Entertainment' },
      { name: 'Беларусь 3', url: 'https://ngtrk.dc.beltelecom.by/ngtrk/smil:belarus3.smil/playlist.m3u8', category: 'Culture' },
      { name: 'Беларусь 5', url: 'https://ngtrk.dc.beltelecom.by/ngtrk/smil:belarus5.smil/playlist.m3u8', category: 'Sports' },
      { name: 'Беларусь 24', url: 'https://ngtrk.dc.beltelecom.by/ngtrk/smil:belarus24.smil/playlist.m3u8', category: 'News' },
      { name: 'ОНТ', url: 'https://stream.dc.beltelecom.by/ont/ont/playlist.m3u8', category: 'General' },
      { name: 'СТВ', url: 'https://ctv.dc.beltelecom.by/ctv/ctv.stream/playlist.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Польща', countryCode: 'PL', channels: [
      { name: '4 Fun TV', url: 'https://stream.4fun.tv:8888/hls/4f_high/index.m3u8', category: 'Music' },
      { name: '4 Fun Kids', url: 'https://stream.4fun.tv:8889/hls/4fk_high/index.m3u8', category: 'Kids' },
      { name: 'Euronews PL', url: 'https://euronews.fastcast4u.com/euronews_pl/index.m3u8', category: 'News' },
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
      { name: 'Euronews SE', url: 'https://euronews.fastcast4u.com/euronews_se/index.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Норвегія', countryCode: 'NO', channels: [
      { name: 'Euronews NO', url: 'https://euronews.fastcast4u.com/euronews_no/index.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Ізраїль', countryCode: 'IL', channels: [
      { name: 'i24 News EN', url: 'https://bnt1.akamaized.net/hls/live/2017834/i24_english_web/Index.m3u8', category: 'News' },
      { name: 'i24 News FR', url: 'https://bnt2.akamaized.net/hls/live/2017835/i24_french_web/Index.m3u8', category: 'News' },
      { name: 'i24 News AR', url: 'https://bnt3.akamaized.net/hls/live/2017836/i24_arabic_web/Index.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Бразилія', countryCode: 'BR', channels: [
      { name: 'TV Cultura', url: 'https://player-tvcultura.stream.uol.com.br/live/tvcultura.m3u8', category: 'Public' },
      { name: 'Record News', url: 'https://stream.ads.ottera.tv/playlist.m3u8?network_id=2116', category: 'News' },
      { name: 'TV Câmara', url: 'https://stream3.camara.gov.br/tv1/manifest.m3u8', category: 'Government' },
      { name: 'TVE RS', url: 'http://selpro1348.procergs.com.br:1935/tve/stve/playlist.m3u8', category: 'Public' },
      { name: 'COM Brasil', url: 'https://br5093.streamingdevideo.com.br/abc/abc/playlist.m3u8', category: 'General' },
      { name: 'ISTV', url: 'https://video08.logicahost.com.br/istvnacional/srt.stream/istvnacional.m3u8', category: 'General' },
    ],
  },
  {
    country: 'Індія', countryCode: 'IN', channels: [
      { name: 'Aaj Tak HD', url: 'https://feeds.intoday.in/aajtak/api/aajtakhd/master.m3u8', category: 'News' },
      { name: 'Aaj Tak', url: 'http://103.213.31.109:90/AajtakHD/playlist.m3u8', category: 'News' },
      { name: 'NDTV 24x7', url: 'https://ndtv24x7.akamaized.net/hls/live/2003678/ndtv24x7/master.m3u8', category: 'News' },
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
      { name: 'Euronews RO', url: 'https://euronews.fastcast4u.com/euronews_ro/index.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Чехія', countryCode: 'CZ', channels: [
      { name: 'ČT24', url: 'https://ct24.ceskatelevize.cz/ct24-live/playlist.m3u8', category: 'News' },
      { name: 'ČT1', url: 'https://ct1.ceskatelevize.cz/ct1/playlist.m3u8', category: 'General' },
      { name: 'ČT Sport', url: 'https://ctsport.ceskatelevize.cz/ctsport/playlist.m3u8', category: 'Sports' },
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
      { name: '3sat HD', url: 'https://viamotionhsi.netplus.ch/live/eds/3sathd/browser-HLS8/3sathd.m3u8', category: 'General' },
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
      { name: 'Euronews PT', url: 'https://euronews.fastcast4u.com/euronews_pt/index.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Греція', countryCode: 'GR', channels: [
      { name: '4E', url: 'http://eu2.tv4e.gr:554/live/smil:myStream.sdp.smil/playlist.m3u8', category: 'Religious' },
      { name: 'Euronews GR', url: 'https://euronews.fastcast4u.com/euronews_gr/index.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Угорщина', countryCode: 'HU', channels: [
      { name: '16tv Budapest', url: 'https://cloudfront44.lexanetwork.com:1344/freerelay/16tv.sdp/playlist.m3u8', category: 'General' },
    ],
  },
  {
    country: 'Хорватія', countryCode: 'HR', channels: [
      { name: 'Euronews HR', url: 'https://euronews.fastcast4u.com/euronews_hr/index.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Сербія', countryCode: 'RS', channels: [
      { name: 'Euronews RS', url: 'https://euronews.fastcast4u.com/euronews_rs/index.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Боснія і Герцеговина', countryCode: 'BA', channels: [
      { name: 'BHT 1', url: 'https://bhrtstream.bhtelecom.ba/bhrtportal_hd.m3u8', category: 'Public' },
      { name: 'N1 BiH', url: 'https://best-str.umn.cdn.united.cloud/stream?channel=n1bos&p=n1Sh4redSecre7iNf0&sp=n1info&stream=sp1400&u=n1info', category: 'News' },
      { name: 'FTV', url: 'http://94.250.2.6:7374/play/a02s/index.m3u8', category: 'Public' },
      { name: 'RTRS', url: 'https://parh.rtrs.tv/tv/live/playlist.m3u8', category: 'Public' },
    ],
  },
  {
    country: 'Албанія', countryCode: 'AL', channels: [
      { name: 'A2 CNN Albania', url: 'https://tv.a2news.com/live/smil:a2cnnweb.stream.smil/playlist.m3u8', category: 'News' },
      { name: 'Euronews Albania', url: 'https://www.youtube.com/@EuronewsAlbania/live', category: 'News' },
      { name: 'Ora News', url: 'https://live1.mediadesk.al/oranews.m3u8', category: 'News' },
      { name: 'News 24', url: 'https://tv.balkanweb.com/news24/livestream/playlist.m3u8', category: 'News' },
      { name: 'Syri', url: 'https://stream.syritv.al/SyriTV/index.m3u8', category: 'General' },
    ],
  },
  {
    country: 'Андорра', countryCode: 'AD', channels: [
      { name: 'Andorra TV', url: 'https://videos.rtva.ad/live/rtva/playlist.m3u8', category: 'Public' },
    ],
  },
  {
    country: 'Вірменія', countryCode: 'AM', channels: [
      { name: 'Armenia 1', url: 'https://amtv1.livestreamingcdn.com/am2abr/index.m3u8', category: 'General' },
      { name: 'Armenia TV', url: 'https://cdn.hayastantv.com:8088/armenia/tracks-v1a1/mono.m3u8', category: 'Entertainment' },
      { name: 'Kentron TV', url: 'https://gineu9.bozztv.com/gin-36bay2/gin-kentron/tracks-v1a1/mono.m3u8', category: 'General' },
    ],
  },
  {
    country: 'Азербайджан', countryCode: 'AZ', channels: [
      { name: 'Baku TV', url: 'https://rtmp.baku.tv/live/bakutv_720p.m3u8', category: 'News' },
      { name: 'CBC', url: 'https://stream.cbctv.az:5443/LiveApp/streams/cbctv.m3u8', category: 'News' },
      { name: 'CBC Sport', url: 'https://mn-nl.mncdn.com/cbcsports_live/cbcsports/playlist.m3u8', category: 'Sports' },
      { name: 'Space TV', url: 'http://109.205.166.68/server124/space_tv/index.m3u8', category: 'General' },
    ],
  },
  {
    country: 'Казахстан', countryCode: 'KZ', channels: [
      { name: '24KZ', url: 'https://tvcdn01.oktv.kz/tv/24kz/index.m3u8', category: 'News' },
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
      { name: 'Euronews LV', url: 'https://euronews.fastcast4u.com/euronews_lv/index.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Литва', countryCode: 'LT', channels: [
      { name: 'Euronews LT', url: 'https://euronews.fastcast4u.com/euronews_lt/index.m3u8', category: 'News' },
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
      { name: 'DeporTV', url: 'https://5fb24b460df87.streamlock.net/live-cont.ar/deportv/playlist.m3u8', category: 'Sports' },
      { name: 'Cine.AR', url: 'https://5fb24b460df87.streamlock.net/live-cont.ar/cinear/playlist.m3u8', category: 'Movies' },
      { name: 'Tec TV', url: 'https://tv.initium.net.ar:3939/live/tectvmainlive.m3u8', category: 'Education' },
      { name: 'Aunar', url: 'https://5fb24b460df87.streamlock.net/live-cont.ar/mirador/playlist.m3u8', category: 'Public' },
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
      { name: 'Channels TV', url: 'https://live-channelstv.akamaized.net/hls/main/index.m3u8', category: 'News' },
    ],
  },
  {
    country: 'Єгипет', countryCode: 'EG', channels: [
      { name: 'Al Nahar TV', url: 'https://live.alenhahrtv.com/live/alenhahrtv/index.m3u8', category: 'General' },
    ],
  },
  {
    country: 'Марокко', countryCode: 'MA', channels: [
      { name: '2M Monde', url: 'https://cdn-globecast.akamaized.net/live/eds/2m_monde/hls_video_ts_tuhawxpiemz257adfc/2m_monde.m3u8', category: 'General' },
    ],
  },
  {
    country: 'Туніс', countryCode: 'TN', channels: [
      { name: 'Watania 1', url: 'https://live.clevercast.io/out/v1/5c4d2a2bbc6d4cd596b5f9f23aed14fc/index.m3u8', category: 'Public' },
    ],
  },
  {
    country: 'Таїланд', countryCode: 'TH', channels: [
      { name: '13 Siam Thai', url: 'https://live.x2.co.th/live/13livetv-th.m3u8', category: 'News' },
      { name: '@TV', url: 'http://49.0.87.24:1936/HDAttv/Attv/playlist.m3u8', category: 'Entertainment' },
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
      { name: 'Aaj News', url: 'http://115.42.65.142:9981/stream/channelid/750987367', category: 'News' },
      { name: 'A-Plus TV', url: 'http://115.42.65.142:9981/stream/channelid/113328724', category: 'Entertainment' },
      { name: '8XM', url: 'http://115.42.65.142:9981/stream/channelid/582886861', category: 'Music' },
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
      { name: '4 Afghanistan', url: 'https://4afghls.persiana.live/hls/stream.m3u8', category: 'General' },
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
  return TV_PLAYLISTS.map(p => ({
    ...p,
    flag: getCountryFlag(p.countryCode),
  }));
}

export function getChannelForPlaylist(playlist, index = 0) {
  if (!playlist || !playlist.channels || playlist.channels.length === 0) return null;
  return playlist.channels[index] || playlist.channels[0];
}

export function getTotalChannelCount() {
  return TV_PLAYLISTS.reduce((sum, p) => sum + p.channels.length, 0);
}

export function getTotalCountryCount() {
  return TV_PLAYLISTS.length;
}
