import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: "Chill Lo-Fi Music",
    color: colors.yellow,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
    artists: ["NoSpirit", "Casiio"],
  },
  {
    id: '2',
    albumId: 2,
    title: "Lo-Fi Chill Session",
    color: colors.green,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
    artists: ["Kupla", "Blue Fox"],
  },
  {
    id: '3',
    albumId: 3,
    title: "Study Session",
    color: colors.rose,
    cover:
      "https://f4.bcbits.com/img/a1435058381_65.jpg",
    artists: ["Tenno", "xander", "Team Astro"],
  },
  {
    id: '4',
    albumId: 4,
    title: "Blue Note Study Time",
    color: colors.blue,
    cover:
      "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Raimu", "Yasumu"],
  },
  {
    id: '5',
    albumId: 5,
    title: "Chau Saura Session",
    color: colors.purple,
    cover:
      "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["Chau Saura", "amies", "kyu"],
  },
  {
    id: '6',
    albumId: 6,
    title: "Like a Necessity",
    color: colors.orange,
    cover:
      "https://f4.bcbits.com/img/a0363730459_16.jpg",
    artists: ["WFS", "Nadav Cohen"],
  },
  {
    id: '7',
    albumId: 7,
    title: "Old School",
    color: colors.orange,
    cover: "https://i1.sndcdn.com/artworks-7gEdVFMPhRU5fi7W-fwO8NQ-t500x500.jpg",
    artists: ["Wisin y Yandel", "Franco el Gorila"]
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    "id": 1,
    "albumId": 1,
    "title": "Moonlit Walk",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:12"
  },
  {
    "id": 2,
    "albumId": 1,
    "title": "Coffee Daze",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:07"
  },
  {
    "id": 3,
    "albumId": 1,
    "title": "Skyline Serenade",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 1,
    "title": "Urban Echoes",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 1,
    "title": "Night's End",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 2,
    "title": "Silent Rain",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 2,
    "title": "Lost Pages",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 2,
    "title": "Midnight Tales",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 2,
    "title": "City Lights",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 2,
    "title": "Night Drive",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 3,
    "title": "Lunar",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 3,
    "title": "Go go go!",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 3,
    "title": "Keep focus!",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:40"
  },
  {
    "id": 4,
    "albumId": 3,
    "title": "JavaScript is the way",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:10"
  },
  {
    "id": 5,
    "albumId": 3,
    "title": "No more TypeScript for me",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:10"
  },
  {
    "id": 1,
    "albumId": 4,
    "title": "Lunar",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 4,
    "title": "Go go go!",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 4,
    "title": "Keep focus!",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:40"
  },
  {
    "id": 4,
    "albumId": 4,
    "title": "JavaScript is the way",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:10"
  },
  {
    "id": 5,
    "albumId": 4,
    "title": "No more TypeScript for me",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:10"
  },
  {
    "id": 1,
    "albumId": 5,
    "title": "Moonlit Walk",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:12"
  },
  {
    "id": 2,
    "albumId": 5,
    "title": "Coffee Daze",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:07"
  },
  {
    "id": 3,
    "albumId": 5,
    "title": "Skyline Serenade",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 5,
    "title": "Urban Echoes",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 5,
    "title": "Night's End",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 7,
    "title": "Un Saludo A Las Nenas",
    "image": "data:image/jpeg;base64,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",
    "artists": ["Nova y Jory", "Mozart La Para"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:20"
  },
  {
    "id": 2,
    "albumId": 7,
    "title": "Toma",
    "image": "data:image/jpeg;base64,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",
    "artists": [`Franco "El Gorrilla"`, "Wisin y Yandel"],
    "album": "Welcome To The Jungle",
    "duration": "4:20"
  },
  {
    "id": 3,
    "albumId": 7,
    "title": "Fiel Amiga",
    "image": "data:image/jpeg;base64,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",
    "artists": ["Daddy Yankee"],
    "album": "Talento de Barrio",
    "duration": "4:20"
  },
]