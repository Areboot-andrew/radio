// ========================================
// Podcasts Data
// ========================================

const PODCASTS = [
  {
    id: 'podcast-joe-rogan',
    title: 'The Joe Rogan Experience',
    author: 'Joe Rogan',
    type: 'video',
    url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8', // placeholder for testing video
    cover: 'https://i.scdn.co/image/ab6765630000ba8a786d75d3c87dc5fba3993d39',
    description: 'The official podcast of comedian Joe Rogan.',
    category: 'Comedy'
  },
  {
    id: 'podcast-lex-fridman',
    title: 'Lex Fridman Podcast',
    author: 'Lex Fridman',
    type: 'video',
    url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    cover: 'https://i.scdn.co/image/ab6765630000ba8a385750868f9a3eaf591a2fc7',
    description: 'Conversations about the nature of intelligence, consciousness, love, and power.',
    category: 'Science & Tech'
  },
  {
    id: 'podcast-huberman',
    title: 'Huberman Lab',
    author: 'Andrew Huberman',
    type: 'video',
    url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    cover: 'https://i.scdn.co/image/ab6765630000ba8af1d251d102eec30541cfc846',
    description: 'Neuroscience: how our brain and its connections with the organs of our body control our perceptions, our behaviors, and our health.',
    category: 'Health'
  },
  {
    id: 'podcast-bbc-global-news',
    title: 'Global News Podcast',
    author: 'BBC World Service',
    type: 'audio',
    url: 'https://podcasts.files.bbci.co.uk/p02nq0gn.rss', // RSS placeholder, or a direct stream URL if we want simple audio
    streamUrl: 'http://stream.live.vc.bbcmedia.co.uk/bbc_world_service',
    cover: 'https://sounds.files.bbci.co.uk/2.4.0/networks/bbc_world_service/colour_default.svg',
    description: 'The day’s top stories from BBC News.',
    category: 'News'
  },
  {
    id: 'podcast-radiolab',
    title: 'Radiolab',
    author: 'WNYC Studios',
    type: 'audio',
    url: 'http://fm939.wnyc.org/radiolab',
    streamUrl: 'http://fm939.wnyc.org/radiolab',
    cover: 'https://media.wnyc.org/i/1400/1400/l/80/1/Radiolab_Square_Logo.png',
    description: 'Investigating a strange world.',
    category: 'Science & Tech'
  },
  {
    id: 'podcast-music-history',
    title: 'A History of Rock Music in 500 Songs',
    author: 'Andrew Hickey',
    type: 'audio',
    url: 'http://stream.radioparadise.com/rock-320', // placeholder
    streamUrl: 'http://stream.radioparadise.com/rock-320',
    cover: 'https://500songs.com/wp-content/uploads/2018/10/500-Songs-Logo.png',
    description: 'A history of rock and roll music.',
    category: 'Music'
  }
];

export function getPodcasts() {
  return PODCASTS;
}
