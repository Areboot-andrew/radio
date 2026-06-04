// ========================================
// Tuner Data — Frequency Bands & SDR Receivers
// ========================================

export const FREQ_BANDS = [
  {
    name: 'VLF',
    label: 'Наддовгі хвилі',
    min: 3e3, max: 3e4,
    hint: 'Навігаційні маяки, радіотелеграф, сигнали точного часу. MSF (UK) 19.6kHz, WWVB (USA) 20kHz, DCF77 (DE) 77.5kHz',
    color: '#6366f1',
  },
  {
    name: 'LF',
    label: 'Довгі хвилі (LW)',
    min: 3e4, max: 3e5,
    hint: 'Радіомовлення LW (148–283 kHz), радіомаяки (NDB). BBC Radio 4 на 198 kHz (UK). Далекі AM станції вночі.',
    color: '#4f46e5',
  },
  {
    name: 'MW',
    label: 'Середні хвилі (MW/AM)',
    min: 3e5, max: 3e6,
    hint: 'AM-мовлення 530–1710 kHz. Вночі чути станції з інших континентів. Українські AM-станції, європейські програми.',
    color: '#2563eb',
  },
  {
    name: '60m',
    label: '60m (радіоаматори)',
    min: 5.0e6, max: 5.45e6,
    hint: 'Аматорський діапазон 60m (5 MHz). SSB, CW, FT8. Доступний в США, UK, DE та ін. країнах.',
    color: '#0891b2',
  },
  {
    name: '49m',
    label: '49m (короткі хвилі)',
    min: 5.9e6, max: 6.2e6,
    hint: 'Короткохвильове мовлення (49m). Всесвітні служби (BBC, DW, VOA, Radio Romania). Вечірній прийом.',
    color: '#0d9488',
  },
  {
    name: '40m',
    label: '40m (радіоаматори)',
    min: 7.0e6, max: 7.3e6,
    hint: 'Найпопулярніший аматорський діапазон. SSB, CW, FT8, RTTY. Вночі — весь світ! Радіоаматори з усіх континентів.',
    color: '#059669',
  },
  {
    name: '31m',
    label: '31m (короткі хвилі)',
    min: 9.5e6, max: 9.9e6,
    hint: 'Найпопулярніший КХ-діапазон мовлення. BBC, DW, VOA, CRI, RFI, NHK, RRI — найкращий прийом вдень.',
    color: '#10b981',
  },
  {
    name: '25m',
    label: '25m (короткі хвилі)',
    min: 11.6e6, max: 12.1e6,
    hint: 'Мовлення 25m. Багато станцій в денний час. Радіо Свабода, Vatican Radio, RAE Argentina.',
    color: '#84cc16',
  },
  {
    name: '20m',
    label: '20m (радіоаматори)',
    min: 14.0e6, max: 14.35e6,
    hint: 'Аматорський 20m — найпопулярніший HF діапазон. SSB, CW, FT8, RTTY. Цілодобовий зв\'язок з усім світом! DX контакти.',
    color: '#eab308',
  },
  {
    name: '19m',
    label: '19m (короткі хвилі)',
    min: 15.0e6, max: 15.6e6,
    hint: 'Мовлення 19m. Сильні станції вдень. Deutsche Welle, BBC, China Radio International, Voice of America.',
    color: '#f59e0b',
  },
  {
    name: '16m',
    label: '16m (короткі хвилі)',
    min: 17.4e6, max: 17.9e6,
    hint: 'Мовлення 16m. Вдень чути найкраще. Радіостанції Азії, Африки, Європи.',
    color: '#f97316',
  },
  {
    name: '15m',
    label: '15m (радіоаматори)',
    min: 21.0e6, max: 21.45e6,
    hint: 'Аматорський 15m. SSB, CW, FT8. Чути у денні години, особливо в сонячний максимум.',
    color: '#ef4444',
  },
  {
    name: 'CB',
    label: 'CB (11m)',
    min: 26.965e6, max: 27.405e6,
    hint: 'Citizen Band (CB) 27 MHz. Ближній зв\'язок водіїв, далекобійників. AM/FM/SSB. Європейські канали, аматори.',
    color: '#dc2626',
  },
  {
    name: '10m',
    label: '10m (радіоаматори)',
    min: 28.0e6, max: 29.7e6,
    hint: 'Аматорський 10m. FM, SSB, CW. Далекий DX при відкритому проходженні. Чути весь світ при сонячному максимумі!',
    color: '#db2777',
  },
  {
    name: '6m',
    label: '6m (радіоаматори)',
    min: 50e6, max: 54e6,
    hint: 'Аматорський "Magic Band". Sporadic-E, метеорні відбиття. Далекі зв\'язки при відкритті проходження.',
    color: '#d946ef',
  },
  {
    name: 'FM',
    label: 'FM-радіо',
    min: 88e6, max: 108e6,
    hint: 'FM-мовлення 88–108 MHz. Стерео, RDS, радіостанції вашого міста. Українські FM-радіо, музика, новини.',
    color: '#3b82f6',
  },
  {
    name: 'Air',
    label: 'Цивільна авіація (Airband)',
    min: 108e6, max: 137e6,
    hint: 'Авіадиспетчери, пілоти, ATIS, метео. 118–137 MHz: вишка, підхід, ешелон, аеродроми. Слухайте переговори вільним вухом!',
    color: '#06b6d4',
  },
  {
    name: 'NOAA',
    label: 'Погодні супутники (NOAA)',
    min: 137e6, max: 138e6,
    hint: 'NOAA APT (137.1/137.62/137.9125 MHz) — зображення Землі з супутників. Потрібен SDR-приймач з декодером.',
    color: '#22d3ee',
  },
  {
    name: '2m',
    label: '2m (радіоаматори)',
    min: 144e6, max: 146e6,
    hint: 'Аматорський 2m VHF. FM репітери, APRS, SSB, супутники (ISS). Локальний зв\'язок містом та областю.',
    color: '#2dd4bf',
  },
  {
    name: 'VHF',
    label: 'VHF (служби)',
    min: 146e6, max: 174e6,
    hint: 'VHF-бізнес, таксі, екстрені служби, поліція (в деяких країнах). Морський VHF (156–162 MHz).',
    color: '#14b8a6',
  },
  {
    name: 'UHF',
    label: 'UHF/TV',
    min: 300e6, max: 1e9,
    hint: 'UHF-телебачення (470–862 MHz), TETRA (380–400 MHz), 70cm аматори (430–440 MHz), супутники, GSM, 4G/LTE.',
    color: '#8b5cf6',
  },
  {
    name: '70cm',
    label: '70cm (радіоаматори)',
    min: 430e6, max: 440e6,
    hint: 'Аматорський 70cm UHF. FM репітери, DMR, D-STAR, C4FM, CW, SSB, EME (з Місяця).',
    color: '#a78bfa',
  },
  {
    name: 'GPS',
    label: 'GPS / Galileo / GNSS',
    min: 1.5e9, max: 1.6e9,
    hint: 'GPS L1 (1575 MHz), Galileo, GLONASS. Супутникові навігаційні сигнали. Немодульовані шумоподібні сигнали.',
    color: '#c084fc',
  },
  {
    name: '2.4GHz',
    label: '2.4 GHz / WiFi',
    min: 2.4e9, max: 2.5e9,
    hint: 'WiFi 2.4 GHz, Bluetooth, 13cm аматори (2400–2450 MHz), мікрохвильовки. Супутниковий інтернет.',
    color: '#e879f9',
  },
];

export const AIRBAND_DETAILS = [
  { freq: '118.000–121.400', label: 'Районний диспетчер (En-route / Approach)', color: '#4ade80' },
  { freq: '121.500', label: 'Аварійна частота (Emergency / Guard)', color: '#ef4444' },
  { freq: '121.600–121.900', label: 'Руління / Дозвіл (Ground / Clearance Delivery)', color: '#fbbf24' },
  { freq: '122.000–123.500', label: 'UNICOM / CTAM', color: '#60a5fa' },
  { freq: '123.450', label: 'Air-to-air (пілоти між собою)', color: '#f472b6' },
  { freq: '124.000–128.800', label: 'Ешелон / Районний центр', color: '#34d399' },
  { freq: '128.800–132.000', label: 'Підхід / Відправлення (Approach / Departure)', color: '#a78bfa' },
  { freq: '132.000–136.975', label: 'Центр управління (Center / Area Control)', color: '#fbbf24' },
];

export const NUMBERS_STATIONS = [
  { freq: '4625 kHz', label: 'UVB-76 "The Buzzer" (Росія)', hint: 'Гуде 24/7, іноді передає голосові повідомлення' },
  { freq: '8992 kHz', label: 'EAM (US HF-GCS)', hint: 'Військові шифровані повідомлення США' },
  { freq: '5450 kHz', label: '"The Pip" (Англія)', hint: 'Короткі піп-сигнали' },
  { freq: '4455 kHz', label: 'Swedish Rhapsody', hint: 'Шведська numbers station' },
];

// ========================================
// Public SDR Receivers by Country
// Verified publicly accessible receivers
// ========================================
export const SDR_RECEIVERS = [
  {
    country: 'Нідерланди',
    code: 'NL',
    receivers: [
      { name: 'University of Twente WebSDR', url: 'http://websdr.ewi.utwente.nl:8901/', type: 'WebSDR', bands: '0–29 MHz', desc: 'Один з найстаріших публічних SDR. HF/VHF' },
      { name: 'OpenWebRX Heppen', url: 'http://websdr.heppen.be/', type: 'OpenWebRX', bands: '0–30 MHz', desc: 'Бельгія/Нідерланди, HF' },
    ],
  },
  {
    country: 'США',
    code: 'US',
    receivers: [
      { name: 'K3FEF Radio Ranch', url: 'http://k3fef.com:8901/', type: 'WebSDR', bands: 'HF', desc: 'Пенсільванія, HF WebSDR' },
      { name: 'HF-GCS EAM', url: 'http://websdr.ewi.utwente.nl:8901/?tune=8992am', type: 'WebSDR', bands: '8992 kHz', desc: 'Слухати EAM через UT WebSDR' },
      { name: 'NAU Weather FAX', url: 'http://websdr.ewi.utwente.nl:8901/?tune=10586usb', type: 'WebSDR', bands: '10586 kHz', desc: 'Weather FAX через UT WebSDR' },
    ],
  },
  {
    country: 'Велика Британія',
    code: 'GB',
    receivers: [
      { name: 'Hack Green Nuclear Bunker', url: 'http://hackgreensdr.org:8901/', type: 'WebSDR', bands: 'HF', desc: 'З бункера Холодної війни, HF' },
      { name: 'G8OCV Pulham Market', url: 'http://norfolk.george-smart.co.uk:8073/', type: 'KiwiSDR', bands: '0–30 MHz', desc: 'Норфолк, KiwiSDR' },
    ],
  },
  {
    country: 'Німеччина',
    code: 'DE',
    receivers: [
      { name: 'SDR Berlin Lichterfelde', url: 'http://thomas0177.ddns.net:8074/', type: 'KiwiSDR', bands: '0–32 MHz', desc: 'Берлін, KiwiSDR + OpenWebRX' },
      { name: 'DK0OD WebSDR', url: 'http://websdr.dk0od.de:8073/', type: 'OpenWebRX', bands: 'HF', desc: 'Німеччина, OpenWebRX' },
      { name: 'DB0HAL Halle', url: 'http://db0hal.dyndns.org:8074/', type: 'OpenWebRX', bands: 'HF/VHF', desc: 'Галле, OpenWebRX' },
    ],
  },
  {
    country: 'Україна',
    code: 'UA',
    receivers: [
      { name: 'UT WebSDR (Twente)', url: 'http://websdr.ewi.utwente.nl:8901/', type: 'WebSDR', bands: '0–29 MHz', desc: 'Найближчий стабільний — слухайте Україну через Нідерланди' },
    ],
  },
  {
    country: 'Франція',
    code: 'FR',
    receivers: [
      { name: 'F1UBL Paris', url: 'http://f1ubl.ddns.net:8072/', type: 'KiwiSDR', bands: '0–30 MHz', desc: 'Париж, KiwiSDR' },
      { name: 'F1FHL', url: 'http://aubjpla.myddns.me:8073/', type: 'OpenWebRX', bands: 'HF/VHF', desc: 'Франція, OpenWebRX' },
    ],
  },
  {
    country: 'Польща',
    code: 'PL',
    receivers: [
      { name: 'Silec WebSDR', url: 'http://websdr.printf.cc:8901/', type: 'WebSDR', bands: 'HF', desc: 'Польща, WebSDR' },
    ],
  },
  {
    country: 'Італія',
    code: 'IT',
    receivers: [
      { name: 'IW2KPL VHF/UHF', url: 'http://www.dxcluster.world:8074/', type: 'OpenWebRX', bands: '2m / 70cm', desc: 'VHF/UHF, OpenWebRX' },
    ],
  },
  {
    country: 'Іспанія',
    code: 'ES',
    receivers: [
      { name: 'EA3SPAIN SDR', url: 'http://ed3ybk.sytes.net:8073/', type: 'OpenWebRX', bands: 'CB/HF/VHF', desc: 'Барселона, CB + HF + VHF' },
      { name: 'SDR Alaró Mallorca', url: 'https://sdr.alaro.ovh/', type: 'OpenWebRX', bands: 'HF/VHF', desc: 'Мальорка, OpenWebRX' },
    ],
  },
  {
    country: 'Австрія',
    code: 'AT',
    receivers: [
      { name: 'OE5SLN WebSDR', url: 'http://178.115.248.93:8073/', type: 'KiwiSDR', bands: '0–30 MHz', desc: 'Верхня Австрія, KiwiSDR' },
    ],
  },
  {
    country: 'Швейцарія',
    code: 'CH',
    receivers: [
      { name: 'HB9AZT Reute', url: 'http://62.2.184.6:8073/', type: 'KiwiSDR', bands: '0–30 MHz', desc: 'Швейцарія, KiwiSDR' },
    ],
  },
  {
    country: 'Японія',
    code: 'JP',
    receivers: [
      { name: 'JQ1ZYV Hitachinaka', url: 'http://jq1zyv.ddns.net:8073/', type: 'KiwiSDR', bands: '2–30 MHz', desc: 'Ібаракі, KiwiSDR' },
    ],
  },
  {
    country: 'Австралія',
    code: 'AU',
    receivers: [
      { name: 'VK5ARG Tarlee', url: 'http://192.145.73.136:8073/', type: 'KiwiSDR', bands: '2–30 MHz', desc: 'Південна Австралія, KiwiSDR' },
      { name: 'Canberra KiwiSDR', url: 'http://21235.proxy.kiwisdr.com:8073/', type: 'KiwiSDR', bands: '0–30 MHz', desc: 'Канберра, KiwiSDR' },
    ],
  },
  {
    country: 'Нова Зеландія',
    code: 'NZ',
    receivers: [
      { name: 'Marahau KiwiSDR', url: 'http://kiwisdr.owdjim.gen.nz:8073/', type: 'KiwiSDR', bands: '0–30 MHz', desc: 'Tasman Bay, KiwiSDR' },
      { name: 'Wanganui KiwiSDR', url: 'http://sdr.zl2ja.org:8073/', type: 'KiwiSDR', bands: '0–30 MHz', desc: 'Wanganui, KiwiSDR' },
    ],
  },
  {
    country: 'Бразилія',
    code: 'BR',
    receivers: [
      { name: 'Saltonet SDR', url: 'http://sdr.saltonet.inf.br:8073/', type: 'OpenWebRX', bands: '0–2 GHz', desc: 'Парана, OpenWebRX' },
    ],
  },
  {
    country: 'Аргентина',
    code: 'AR',
    receivers: [
      { name: 'LU8FCJ SDR', url: 'http://el22.dyndns-blog.com:8080/', type: 'WebSDR', bands: '13–14 MHz', desc: 'Аргентина, WebSDR' },
    ],
  },
  {
    country: 'Канада',
    code: 'CA',
    receivers: [
      { name: 'Sainte-Marie OpenWebRX', url: 'https://yhsecurity.com/openwebrx/', type: 'OpenWebRX', bands: '0–30 MHz', desc: 'Квебек, OpenWebRX' },
    ],
  },
  {
    country: 'Греція',
    code: 'GR',
    receivers: [
      { name: 'SV3YY Salamis', url: 'http://salamisdr22.ddns.net:8906/', type: 'WebSDR', bands: 'HF', desc: 'Саламіна, WebSDR' },
    ],
  },
];
