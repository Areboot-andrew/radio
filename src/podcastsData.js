// ========================================
// Podcasts Data
// ========================================

const PODCASTS = [
  {
    id: 'song-exploder',
    title: 'Song Exploder',
    author: 'Hrishikesh Hirway',
    type: 'audio',
    url: 'https://dts.podtrac.com/redirect.mp3/tracking.swap.fm/track/sblTq32fyWAjsHzze2LG/dovetail.prxu.org/_/93/b7d39af5-7b4a-4106-8dda-92a6fe3adcef/SongExploder314-HotChip-Part1.mp3',
    cover: 'https://songexploder.net/wp-content/uploads/2014/12/SongExploder_Logo_500.png',
    description: 'Musicians take apart their songs, and piece by piece, tell the story of how they were made.',
    category: 'Music'
  },
  {
    id: 'switched-on-pop',
    title: 'Switched on Pop',
    author: 'Vulture',
    type: 'audio',
    url: 'https://www.podtrac.com/pts/redirect.mp3/pdst.fm/e/pscrb.fm/rss/p/mgln.ai/e/257/traffic.megaphone.fm/VMP5091820996.mp3?updated=1780355924',
    cover: 'https://images.megaphone.fm/switchedonpop',
    description: 'A podcast about the making and meaning of popular music.',
    category: 'Music'
  },
  {
    id: 'rewatchables',
    title: 'The Rewatchables',
    author: 'The Ringer',
    type: 'audio',
    url: 'https://traffic.megaphone.fm/GLT1039772520.mp3',
    cover: 'https://images.megaphone.fm/the-rewatchables',
    description: 'A film podcast from the Ringer universe featuring movies we can’t stop watching.',
    category: 'Cinema'
  },
  {
    id: 'unspooled',
    title: 'Unspooled',
    author: 'Paul Scheer & Amy Nicholson',
    type: 'audio',
    url: 'https://dts.podtrac.com/redirect.mp3/pdst.fm/e/pfx.vpixl.com/6qj4J/pscrb.fm/rss/p/nyt.simplecastaudio.com/3026b665-46df-4d18-98e9-d1ce16bbb1df/episodes/54f7928d-5868-4d12-bb7f-b2642c7b7f7e/audio/128/default.mp3?aid=rss_feed&amp;awCollectionId=3026b665-46df-4d18-98e9-d1ce16bbb1df&amp;awEpisodeId=54f7928d-5868-4d12-bb7f-b2642c7b7f7e&amp;feed=82FI35Px',
    cover: 'https://image.simplecastcdn.com/images/82FI35Px/unspooled.jpg',
    description: 'Paul Scheer and Amy Nicholson are watching the AFI top 100 movies of all time.',
    category: 'Cinema'
  },
];

export function getPodcasts() {
  return PODCASTS;
}
