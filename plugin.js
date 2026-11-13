// Plugin PelisPop para Kino (kinotvapp.github.io)
// Catálogo de películas, series y anime en español latino con interfaz de pantalla completa integrada (Screen).

export const LOGO_ASPECT = "4:1";
export const LOGO_DATA = "data:image/png;base64,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";

// Curated database for zero-downtime, offline, and quick initial rendering
const CURATED_MOVIES = [
  {
    id: "pp-m-533535",
    tmdb: 533535,
    imdb: "tt6263850",
    title: "Deadpool & Wolverine",
    kind: "movie",
    year: 2024,
    rating: 7.7,
    poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/yDHYTfA3R0jFYba16jBB1jv8uaC.jpg",
    overview: "Un apático Wade Wilson se afana en la vida civil tras dejar atrás sus días como Deadpool. Pero cuando su mundo se enfrenta a una amenaza existencial, debe vestir el traje de nuevo.",
    genres: ["Acción", "Comedia", "Ciencia ficción"]
  },
  {
    id: "pp-m-917496",
    tmdb: 917496,
    imdb: "tt2049403",
    title: "Beetlejuice Beetlejuice",
    kind: "movie",
    year: 2024,
    rating: 7.1,
    poster: "https://image.tmdb.org/t/p/w500/kKg7jpVYq5vm1ce2gC25Jm1v72x.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/1wP1phHo2CROOqzv7AzUNbpRIIp.jpg",
    overview: "Tras una inesperada tragedia familiar, tres generaciones de la familia Deetz regresan a su hogar en Winter River. La vida de Lydia da un vuelco cuando su rebelde hija adolescente abre el portal al Más Allá.",
    genres: ["Comedia", "Fantasía", "Terror"]
  },
  {
    id: "pp-m-1022789",
    tmdb: 1022789,
    imdb: "tt22022452",
    title: "Intensamente 2",
    kind: "movie",
    year: 2024,
    rating: 7.6,
    poster: "https://image.tmdb.org/t/p/w500/oxxqiyWsPMezbTff1JpG23q1e2b.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/p5ozvmdgsmbWe0H8umkfGeYQST5.jpg",
    overview: "Regresa a la mente de Riley recién llegada a la adolescencia justo cuando su sede central está siendo demolida para dar paso a algo totalmente inesperado: ¡nuevas emociones!",
    genres: ["Animación", "Familia", "Aventura"]
  },
  {
    id: "pp-m-693134",
    tmdb: 693134,
    imdb: "tt15239678",
    title: "Duna: Parte Dos",
    kind: "movie",
    year: 2024,
    rating: 8.2,
    poster: "https://image.tmdb.org/t/p/w500/czembW0Rk1Ke7lCJGzyAiIHMu9X.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0x2.jpg",
    overview: "Sigue el viaje mítico de Paul Atreides mientras se une a Chani y a los Fremen en una senda de venganza contra los conspiradores que destruyeron a su familia.",
    genres: ["Ciencia ficción", "Aventura"]
  },
  {
    id: "pp-m-945961",
    tmdb: 945961,
    imdb: "tt18412256",
    title: "Alien: Romulus",
    kind: "movie",
    year: 2024,
    rating: 7.3,
    poster: "https://image.tmdb.org/t/p/w500/b33nnKl1vvg6AqAg849Y4G8hyBA.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",
    overview: "Un grupo de jóvenes colonizadores espaciales se encuentra cara a cara con la forma de vida más aterradora del universo mientras rebuscan en las profundidades de una estación espacial abandonada.",
    genres: ["Terror", "Ciencia ficción"]
  },
  {
    id: "pp-m-558449",
    tmdb: 558449,
    imdb: "tt9218128",
    title: "Gladiador II",
    kind: "movie",
    year: 2024,
    rating: 6.8,
    poster: "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/euYIwmwkmz95mnXvufEmbL69ovr.jpg",
    overview: "Años después de presenciar la muerte del admirado héroe Máximo a manos de su tío, Lucio debe entrar en el Coliseo tras ser testigo de la conquista de su hogar por parte de los tiranos emperadores.",
    genres: ["Acción", "Aventura", "Drama"]
  },
  {
    id: "pp-m-1034541",
    tmdb: 1034541,
    imdb: "tt27911000",
    title: "Terrifier 3",
    kind: "movie",
    year: 2024,
    rating: 6.9,
    poster: "https://image.tmdb.org/t/p/w500/ju10W5ga26svxgcp5yhNa1H7CV7.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/18TSJF1WLA4CkymvVUfZDWLGPrv.jpg",
    overview: "Art el Payaso desata el caos sobre los desprevenidos habitantes del condado de Miles mientras duermen plácidamente en Nochebuena.",
    genres: ["Terror", "Misterio"]
  },
  {
    id: "pp-m-823219",
    tmdb: 823219,
    imdb: "tt12037194",
    title: "Flow",
    kind: "movie",
    year: 2024,
    rating: 8.5,
    poster: "https://image.tmdb.org/t/p/w500/imKSymKBK7o73sajY4EO9FxZ1ij.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/uKb22E5ww9bX2hZKiL21W38HG5b.jpg",
    overview: "El mundo parece estar llegando a su fin, repleto de los vestigios de una presencia humana. Gato encuentra refugio en un barco poblado por varias especies.",
    genres: ["Animación", "Aventura", "Fantasía"]
  }
];

const CURATED_SERIES = [
  {
    id: "pp-tv-94997",
    tmdb: 94997,
    imdb: "tt11198330",
    title: "La Casa del Dragón",
    kind: "series",
    year: 2022,
    rating: 8.4,
    poster: "https://image.tmdb.org/t/p/w500/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/etjA2mXO0cuveeRBs4Y9PkpnefF.jpg",
    overview: "La historia de la Casa Targaryen, ambientada 200 años antes de los eventos de Juego de Tronos.",
    genres: ["Drama", "Acción & Aventura", "Sci-Fi & Fantasy"]
  },
  {
    id: "pp-tv-76479",
    tmdb: 76479,
    imdb: "tt1190634",
    title: "The Boys",
    kind: "series",
    year: 2019,
    rating: 8.4,
    poster: "https://image.tmdb.org/t/p/w500/2zmTngn1tYC1AvfnNDBpQI4By1z.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
    overview: "Cuando los superhéroes abusan de sus poderes, unos justicieros se embarcan en una heroica búsqueda para revelar la verdad sobre Los Siete.",
    genres: ["Sci-Fi & Fantasy", "Acción & Aventura"]
  },
  {
    id: "pp-tv-126308",
    tmdb: 126308,
    imdb: "tt2788316",
    title: "Shōgun",
    kind: "series",
    year: 2024,
    rating: 8.5,
    poster: "https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/w7973yZfWvYt3tP2Qp0843dF5qT.jpg",
    overview: "En el Japón del año 1600, Lord Yoshii Toranaga lucha por su vida cuando sus enemigos del Consejo de Regentes se unen contra él.",
    genres: ["Drama", "Guerra & Política"]
  },
  {
    id: "pp-tv-106379",
    tmdb: 106379,
    imdb: "tt12637874",
    title: "Fallout",
    kind: "series",
    year: 2024,
    rating: 8.3,
    poster: "https://image.tmdb.org/t/p/w500/ans4R8Lq3y8d1JbEaZ3lT5Z0k5a.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/2rmK7mnchsl935x72SCeYioRZds.jpg",
    overview: "Doscientos años después del apocalipsis, los habitantes de los lujosos refugios nucleares se ven obligados a regresar al exterior.",
    genres: ["Acción & Aventura", "Sci-Fi & Fantasy"]
  },
  {
    id: "pp-tv-111110",
    tmdb: 111110,
    imdb: "tt11192306",
    title: "One Piece",
    kind: "series",
    year: 2023,
    rating: 8.2,
    poster: "https://image.tmdb.org/t/p/w500/fcXdJjEgueYRUIKGj7ISuvNd4Yv.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/4fLZUr1eSlA9TsvvqNzue5R9YRh.jpg",
    overview: "Con su sombrero de paja y su tripulación, el joven pirata Monkey D. Luffy emprende un viaje épico en busca de un tesoro legendario.",
    genres: ["Acción & Aventura", "Sci-Fi & Fantasy"]
  }
];

const CURATED_ANIME = [
  {
    id: "pp-a-1429",
    tmdb: 1429,
    imdb: "tt2560140",
    title: "Attack on Titan",
    kind: "series",
    year: 2013,
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/5DUMPBSnHOZsbBv81GFXZZvv70S.jpg",
    overview: "Los supervivientes de la humanidad construyeron tres murallas concéntricas para defenderse de los temibles titanes.",
    genres: ["Animación", "Sci-Fi & Fantasy", "Acción & Aventura"]
  },
  {
    id: "pp-a-85937",
    tmdb: 85937,
    imdb: "tt9335498",
    title: "Demon Slayer: Kimetsu no Yaiba",
    kind: "series",
    year: 2019,
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/nTvM4mhqZlHIvUkIvdUdUR92T0K.jpg",
    overview: "Tanjiro Kamado se convierte en cazador de demonios para vengar a su familia y curar a su hermana Nezuko.",
    genres: ["Animación", "Acción & Aventura", "Sci-Fi & Fantasy"]
  },
  {
    id: "pp-a-95479",
    tmdb: 95479,
    imdb: "tt12343534",
    title: "Jujutsu Kaisen",
    kind: "series",
    year: 2020,
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/fHpHz5v7k2R1r8z1U4P6B6D1k1v.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/3GQk4A2b9d08G7p0D6Q5q5V0k1a.jpg",
    overview: "Yuji Itadori entra al oscuro mundo de los hechiceros para salvar al mundo de peligrosas maldiciones.",
    genres: ["Animación", "Acción & Aventura", "Sci-Fi & Fantasy"]
  },
  {
    id: "pp-a-209867",
    tmdb: 209867,
    imdb: "tt22248378",
    title: "Frieren: Más allá del final del viaje",
    kind: "series",
    year: 2023,
    rating: 8.9,
    poster: "https://image.tmdb.org/t/p/w500/dqzenchTd7lp5zht7BdlqM7RBhD.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/28fW3rE3u9415zD4T91h5W2T7x6.jpg",
    overview: "La maga elfa Frieren emprende un nuevo viaje para comprender los corazones y emociones de la humanidad.",
    genres: ["Animación", "Aventura", "Fantasía"]
  }
];

const CURATED_DORAMAS = [
  {
    id: "pp-d-93405",
    tmdb: 93405,
    imdb: "tt10919420",
    title: "El juego del calamar",
    kind: "series",
    year: 2021,
    rating: 7.8,
    poster: "https://image.tmdb.org/t/p/w500/yvO2K2F88y0b1Xp00pY9z8j3q1A.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/oaGvjB0DvdNDWhPtQCy7r3N6fG7.jpg",
    overview: "Cientos de jugadores aceptan una extraña invitación para competir en juegos infantiles por un premio millonario.",
    genres: ["Drama", "Misterio", "Acción & Aventura"]
  },
  {
    id: "pp-d-157059",
    tmdb: 157059,
    imdb: "tt26365314",
    title: "La reina de las lágrimas",
    kind: "series",
    year: 2024,
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/vGv6X2aP4819g2jK615bE5d4v2A.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/6x8w4yZ8e4z31v2a00qY9z8j3q1.jpg",
    overview: "Una influyente heredera y un abogado de origen humilde redescubren su romance en medio de una tormenta familiar.",
    genres: ["Drama", "Comedia"]
  }
];

function toKinoItem(raw) {
  const kind = raw.kind === "series" ? "series" : "movie";
  const id = String(raw.id || ("pp-" + (kind === "series" ? "tv" : "m") + "-" + (raw.tmdb || Date.now())));
  const year = typeof raw.year === "number" ? raw.year : (raw.release_date || raw.first_air_date ? parseInt(raw.release_date || raw.first_air_date, 10) : undefined);
  const title = String(raw.title || raw.name || "Sin título").slice(0, 100);
  const poster = raw.poster_path ? ("https://image.tmdb.org/t/p/w500" + raw.poster_path) : (raw.poster || undefined);
  const backdrop = raw.backdrop_path ? ("https://image.tmdb.org/t/p/w1280" + raw.backdrop_path) : (raw.backdrop || undefined);
  const overview = typeof raw.overview === "string" ? raw.overview.trim().slice(0, 600) : undefined;
  const rating = typeof raw.rating === "number" ? raw.rating : (typeof raw.vote_average === "number" ? Math.round(raw.vote_average * 10) / 10 : undefined);
  const tmdb = raw.tmdb || (typeof raw.id === "number" ? raw.id : undefined);
  const imdb = raw.imdb || undefined;

  const refPayload = { id, kind, title, year, tmdb, imdb };
  const item = { id, ref: JSON.stringify(refPayload), title, kind, rating };

  if (year) item.year = year;
  if (poster) item.poster = poster;
  if (backdrop) item.backdrop = backdrop;
  if (overview) item.overview = overview;
  if (tmdb || imdb) {
    item.ids = {};
    if (tmdb) item.ids.tmdb = tmdb;
    if (imdb) item.ids.imdb = imdb;
  }
  if (Array.isArray(raw.genres) && raw.genres.length > 0) {
    item.genres = raw.genres.slice(0, 5);
  }
  return item;
}

async function fetchTmdbOr(path, params, fallbackList) {
  if (typeof kino !== "undefined" && typeof kino.tmdb === "function") {
    try {
      const res = await kino.tmdb(path, Object.assign({ language: "es-MX" }, params));
      if (res && Array.isArray(res.results) && res.results.length > 0) {
        return res.results.map((r) => {
          const isTv = path.includes("/tv") || r.media_type === "tv" || !!r.first_air_date;
          return toKinoItem(Object.assign({}, r, { kind: isTv ? "series" : "movie" }));
        });
      }
    } catch (_) {}
  }
  return fallbackList.map(toKinoItem);
}

const screenState = {
  activeTab: "movies",
  route: "main",
  searchQuery: "",
  searchResults: [],
  detailItem: null
};

// Capabilities
export async function home() {
  await null;
  const [trendingMovies, popularSeries, animList, doramaList] = await Promise.all([
    fetchTmdbOr("/trending/movie/week", {}, CURATED_MOVIES),
    fetchTmdbOr("/trending/tv/week", {}, CURATED_SERIES),
    fetchTmdbOr("/discover/tv", { with_genres: "16", sort_by: "popularity.desc" }, CURATED_ANIME),
    fetchTmdbOr("/discover/tv", { with_original_language: "ko", sort_by: "popularity.desc" }, CURATED_DORAMAS)
  ]);

  return [
    { id: "row-trending-movies", title: "Películas en Tendencia", ref: "row:trending_movies", items: trendingMovies },
    { id: "row-popular-series", title: "Series Populares", ref: "row:popular_series", items: popularSeries },
    { id: "row-anime", title: "Anime y Animación", ref: "row:anime", items: animList },
    { id: "row-doramas", title: "Doramas y K-Dramas", ref: "row:doramas", items: doramaList }
  ];
}

export async function search(query) {
  await null;
  const q = query && typeof query === "object" ? query.q : (typeof query === "string" ? query : "");
  if (!q || q.trim() === "") return [];

  const clean = q.trim();
  if (typeof kino !== "undefined" && typeof kino.tmdb === "function") {
    try {
      const res = await kino.tmdb("/search/multi", { query: clean, language: "es-MX" });
      if (res && Array.isArray(res.results) && res.results.length > 0) {
        return res.results
          .filter((r) => r.media_type === "movie" || r.media_type === "tv")
          .map((r) => toKinoItem(Object.assign({}, r, { kind: r.media_type === "tv" ? "series" : "movie" })));
      }
    } catch (_) {}
  }

  const needle = clean.toLowerCase();
  const allCurated = [...CURATED_MOVIES, ...CURATED_SERIES, ...CURATED_ANIME, ...CURATED_DORAMAS];
  return allCurated
    .filter((item) => item.title.toLowerCase().includes(needle) || (item.overview && item.overview.toLowerCase().includes(needle)))
    .map(toKinoItem);
}

export async function browse(ref, cursor) {
  await null;
  const page = cursor ? parseInt(cursor, 10) || 1 : 1;

  if (ref === "row:trending_movies") {
    const items = await fetchTmdbOr("/trending/movie/week", { page: String(page) }, CURATED_MOVIES);
    return { items, next: page < 5 ? String(page + 1) : undefined };
  }
  if (ref === "row:popular_series") {
    const items = await fetchTmdbOr("/trending/tv/week", { page: String(page) }, CURATED_SERIES);
    return { items, next: page < 5 ? String(page + 1) : undefined };
  }
  if (ref === "row:anime") {
    const items = await fetchTmdbOr("/discover/tv", { with_genres: "16", page: String(page) }, CURATED_ANIME);
    return { items, next: page < 5 ? String(page + 1) : undefined };
  }
  if (ref === "row:doramas") {
    const items = await fetchTmdbOr("/discover/tv", { with_original_language: "ko", page: String(page) }, CURATED_DORAMAS);
    return { items, next: page < 5 ? String(page + 1) : undefined };
  }
  return { items: CURATED_MOVIES.map(toKinoItem) };
}

export async function episodes(ref) {
  await null;
  let parsed = null;
  try { parsed = JSON.parse(ref); } catch (_) { parsed = {}; }

  const tmdbId = parsed.tmdb;
  const title = parsed.title || "Serie";

  if (tmdbId && typeof kino !== "undefined" && typeof kino.tmdb === "function") {
    try {
      const show = await kino.tmdb("/tv/" + tmdbId, { language: "es-MX" });
      const seasons = (show && show.seasons) || [];
      const seasonList = seasons.filter((s) => s.season_number > 0);
      const allEpisodes = [];

      for (const s of seasonList.slice(0, 3)) {
        try {
          const sDetail = await kino.tmdb("/tv/" + tmdbId + "/season/" + s.season_number, { language: "es-MX" });
          if (sDetail && Array.isArray(sDetail.episodes)) {
            for (const ep of sDetail.episodes) {
              const epRef = JSON.stringify({
                id: (parsed.id || "tv") + "-s" + ep.season_number + "e" + ep.episode_number,
                kind: "series",
                title: title + " - T" + ep.season_number + ":E" + ep.episode_number + " " + (ep.name || ""),
                season: ep.season_number,
                number: ep.episode_number,
                tmdb: tmdbId,
                imdb: parsed.imdb
              });
              allEpisodes.push({
                season: ep.season_number,
                number: ep.episode_number,
                title: ep.name ? String(ep.name).slice(0, 80) : ("Episodio " + ep.episode_number),
                overview: ep.overview ? String(ep.overview).slice(0, 300) : undefined,
                thumbnail: ep.still_path ? ("https://image.tmdb.org/t/p/w500" + ep.still_path) : undefined,
                ref: epRef
              });
            }
          }
        } catch (_) {}
      }

      if (allEpisodes.length > 0) {
        return {
          series: { title },
          seasons: seasonList.map((s) => ({ number: s.season_number, title: s.name || ("Temporada " + s.season_number) })),
          episodes: allEpisodes
        };
      }
    } catch (_) {}
  }

  const fallbackEps = [];
  for (let i = 1; i <= 8; i++) {
    fallbackEps.push({
      season: 1,
      number: i,
      title: "Capítulo " + i,
      overview: "Episodio " + i + " de " + title,
      ref: JSON.stringify({
        id: (parsed.id || "tv") + "-s1e" + i,
        kind: "series",
        title: title + " 1x0" + i,
        season: 1,
        number: i,
        tmdb: tmdbId,
        imdb: parsed.imdb
      })
    });
  }

  return {
    series: { title },
    seasons: [{ id: "s-1", number: 1, title: "Temporada 1", ref: "season:1" }],
    episodes: fallbackEps
  };
}

export async function resolve(ref, options) {
  await null;
  let parsed = null;
  try { parsed = JSON.parse(ref); } catch (_) { parsed = {}; }

  const imdb = parsed.imdb || (parsed.tmdb ? ("tt" + parsed.tmdb) : "tt0108052");
  const season = parsed.season;
  const number = parsed.number;

  let streamUrl = "";
  if (season && number) {
    streamUrl = "https://embed69.org/f/" + imdb + "-" + season + "x" + number + "/";
  } else {
    streamUrl = "https://embed69.org/f/" + imdb + "/";
  }

  const browserUa = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

  return {
    url: streamUrl,
    headers: {
      "Referer": "https://pelispop.mov/",
      "Origin": "https://pelispop.mov/",
      "User-Agent": browserUa
    },
    alternatives: [
      {
        label: "Embed69",
        url: streamUrl,
        headers: {
          "Referer": "https://pelispop.mov/",
          "User-Agent": browserUa
        }
      },
      {
        label: "PelisPop Web",
        url: "https://pelispop.mov/",
        headers: {
          "Referer": "https://pelispop.mov/",
          "User-Agent": browserUa
        }
      }
    ]
  };
}

export async function section(arg) {
  await null;
  const tab = (arg && arg.tab) || "peliculas";
  const tabs = [
    { id: "peliculas", label: "Películas" },
    { id: "series", label: "Series" },
    { id: "anime", label: "Anime" },
    { id: "doramas", label: "Doramas" }
  ];

  let items = [];
  if (tab === "peliculas") items = CURATED_MOVIES.map(toKinoItem);
  else if (tab === "series") items = CURATED_SERIES.map(toKinoItem);
  else if (tab === "anime") items = CURATED_ANIME.map(toKinoItem);
  else items = CURATED_DORAMAS.map(toKinoItem);

  const heroItem = items[0] || null;
  const hero = heroItem ? {
    title: heroItem.title,
    text: heroItem.overview || "",
    image: heroItem.backdrop || heroItem.poster
  } : undefined;

  return {
    tabs,
    tab,
    ...(hero ? { hero } : {}),
    rows: [
      {
        id: "section-" + tab,
        title: "Destacados en " + tab,
        items
      }
    ]
  };
}

export async function categories() {
  await null;
  return [
    { id: "movies", title: "Películas", count: CURATED_MOVIES.length },
    { id: "series", title: "Series", count: CURATED_SERIES.length },
    { id: "anime", title: "Anime", count: CURATED_ANIME.length }
  ];
}

export async function details(ref) {
  await null;
  let parsed = null;
  try { parsed = JSON.parse(ref); } catch (_) { parsed = {}; }
  return {
    title: parsed.title,
    year: parsed.year,
    ids: {
      tmdb: parsed.tmdb,
      imdb: parsed.imdb
    }
  };
}

export async function action(key) {
  await null;
  if (key === "openPortal") {
    return { go: { screen: { route: "main" } } };
  }
  return {};
}

export async function settingsStatus() {
  await null;
  return { status: "PelisPop 1.0.0 listo y sincronizado" };
}

export async function validateSettings(values) {
  await null;
  return {};
}

// -----------------------------------------------------------------------------
// Screen UI (apiVersion 14+)
// -----------------------------------------------------------------------------

function buildAppBar(device, activeTab, isSearch) {
  const isTv = device === "tv";
  const tabsList = [
    { value: "movies", label: "Películas" },
    { value: "series", label: "Series" },
    { value: "anime", label: "Anime" },
    { value: "doramas", label: "Doramas" }
  ];

  const logoNode = {
    type: "Image",
    key: "pelispop-logo",
    url: LOGO_DATA,
    aspect: LOGO_ASPECT,
    fit: "contain",
    h: isTv ? 48 : 40,
    alt: "PelisPop",
    fallback: { type: "Text", text: "PelisPop", style: "h4" }
  };

  const titleNode = isTv
    ? {
        type: "Row",
        key: "barRow",
        gap: 24,
        crossAxisAlignment: "center",
        children: [
          logoNode,
          {
            type: "TabBar",
            key: "tvTabs",
            value: activeTab,
            onChanged: "tab",
            tabs: tabsList
          }
        ]
      }
    : logoNode;

  return {
    type: "AppBar",
    mergeWithKinoBar: true,
    dense: true,
    leading: {
      type: "IconButton",
      key: "closeBtn",
      icon: "close",
      labelText: "Cerrar",
      tooltip: "Cerrar",
      onPressed: { go: { close: true } }
    },
    title: titleNode,
    actions: [
      {
        type: "IconButton",
        key: "searchBtn",
        icon: isSearch ? "close" : "search",
        labelText: isSearch ? "Cerrar búsqueda" : "Buscar",
        tooltip: isSearch ? "Cerrar búsqueda" : "Buscar",
        onPressed: isSearch ? "closeSearch" : "openSearch"
      },
      {
        type: "IconButton",
        key: "settingsBtn",
        icon: "settings",
        labelText: "Ajustes",
        tooltip: "Ajustes",
        onPressed: "openSettings"
      }
    ]
  };
}

function buildHeroSlide(item) {
  return {
    type: "heroCard",
    key: "hero-" + item.id,
    h: { compact: 200, expanded: 240 },
    title: item.title,
    text: item.overview ? String(item.overview).slice(0, 160) + "…" : "",
    image: item.backdrop || item.poster,
    buttons: [
      {
        type: "ElevatedButton",
        key: "play-" + item.id,
        labelText: "Reproducir",
        icon: "play",
        onPressed: { go: { play: { ref: item.ref, kind: item.kind, id: item.id, title: item.title } } }
      },
      {
        type: "TextButton",
        key: "info-" + item.id,
        labelText: "Ver detalles",
        onPressed: { event: "openDetail", arg: item.ref }
      }
    ]
  };
}

function buildRail(title, items, railKey) {
  return {
    type: "Column",
    key: "rail-col-" + railKey,
    gap: 8,
    children: [
      {
        type: "Row",
        key: "rail-head-" + railKey,
        crossAxisAlignment: "center",
        children: [
          { type: "Text", style: "h4", flex: 1, text: title }
        ]
      },
      {
        type: "SingleChildScrollView",
        key: "rail-scroll-" + railKey,
        direction: "horizontal",
        children: [
          {
            type: "Row",
            key: "rail-items-" + railKey,
            gap: 12,
            children: items.map((item, idx) => ({
              type: "titleCard",
              key: "card-" + railKey + "-" + (item.id || idx),
              size: "medium",
              item,
              onTap: { event: "openDetail", arg: item.ref }
            }))
          }
        ]
      }
    ]
  };
}

export async function screen(ctx) {
  await null;
  const device = (ctx && ctx.device) || "phone";
  const isTv = device === "tv";

  if (screenState.route === "detail" && screenState.detailItem) {
    const item = screenState.detailItem;
    const isSeries = item.kind === "series";

    return {
      type: "Scaffold",
      appBar: {
        type: "AppBar",
        mergeWithKinoBar: true,
        dense: true,
        leading: {
          type: "IconButton",
          key: "backBtn",
          icon: "arrowBack",
          labelText: "Volver",
          tooltip: "Volver",
          onPressed: "back"
        },
        title: { type: "Text", text: item.title, style: "h4" },
        actions: [
          {
            type: "IconButton",
            key: "closeDetailBtn",
            icon: "close",
            labelText: "Cerrar",
            tooltip: "Cerrar",
            onPressed: { go: { close: true } }
          }
        ]
      },
      body: {
        type: "Column",
        gap: 16,
        padding: 16,
        children: [
          {
            type: "heroCard",
            key: "detail-hero-" + item.id,
            h: { compact: 200, expanded: 240 },
            title: item.title,
            text: item.overview || "",
            image: item.backdrop || item.poster,
            buttons: [
              {
                type: "ElevatedButton",
                key: "detail-play-" + item.id,
                labelText: isSeries ? "Ver episodios" : "Reproducir película",
                icon: "play",
                onPressed: { go: { play: { ref: item.ref, kind: item.kind, id: item.id, title: item.title } } }
              }
            ]
          },
          {
            type: "Row",
            key: "detailMetaRow",
            gap: 16,
            crossAxisAlignment: "center",
            children: [
              { type: "Text", text: item.year ? ("Año: " + item.year) : "Estreno", style: "caption" },
              { type: "Text", text: item.rating ? ("★ " + item.rating + " / 10") : "★ 8.0", style: "caption" },
              { type: "Text", text: isSeries ? "Serie TV" : "Película", style: "caption" }
            ]
          },
          {
            type: "Text",
            text: item.overview || "Sin sinopsis disponible.",
            style: "body"
          }
        ]
      }
    };
  }

  if (screenState.route === "search") {
    const results = screenState.searchResults.length > 0
      ? screenState.searchResults
      : CURATED_MOVIES.map(toKinoItem);

    return {
      type: "Scaffold",
      appBar: buildAppBar(device, screenState.activeTab, true),
      body: {
        type: "Column",
        gap: 16,
        padding: 16,
        children: [
          {
            type: "Form",
            key: "searchForm",
            onSubmitted: "doSearch",
            children: [
              {
                type: "Row",
                key: "searchBarRow",
                gap: 12,
                crossAxisAlignment: "center",
                children: [
                  {
                    type: "TextField",
                    key: "q",
                    kind: "text",
                    value: screenState.searchQuery,
                    labelText: "Buscar en PelisPop...",
                    maxLength: 80,
                    autofocus: true,
                    flex: 1
                  },
                  {
                    type: "ElevatedButton",
                    key: "searchBtnSubmit",
                    labelText: "Buscar",
                    icon: "search",
                    submit: true
                  }
                ]
              }
            ]
          },
          {
            type: "Text",
            text: screenState.searchQuery
              ? ("Resultados para \"" + screenState.searchQuery + "\":")
              : "Títulos populares:",
            style: "h4"
          },
          buildRail("Resultados", results, "search-results")
        ]
      }
    };
  }

  let activeItems = [];
  if (screenState.activeTab === "movies") activeItems = CURATED_MOVIES.map(toKinoItem);
  else if (screenState.activeTab === "series") activeItems = CURATED_SERIES.map(toKinoItem);
  else if (screenState.activeTab === "anime") activeItems = CURATED_ANIME.map(toKinoItem);
  else activeItems = CURATED_DORAMAS.map(toKinoItem);

  const heroSlides = activeItems.slice(0, 4);
  const bodyChildren = [];

  if (!isTv) {
    bodyChildren.push({
      type: "TabBar",
      key: "phoneTabs",
      value: screenState.activeTab,
      onChanged: "tab",
      tabs: [
        { value: "movies", label: "Películas" },
        { value: "series", label: "Series" },
        { value: "anime", label: "Anime" },
        { value: "doramas", label: "Doramas" }
      ]
    });
  }

  if (heroSlides.length === 1) {
    bodyChildren.push(buildHeroSlide(heroSlides[0]));
  } else if (heroSlides.length > 1) {
    bodyChildren.push({
      type: "PageView",
      key: "heroPager-" + screenState.activeTab,
      autoPlayMs: 6000,
      children: heroSlides.map(buildHeroSlide)
    });
  }

  bodyChildren.push(buildRail("Tendencias populares", activeItems, screenState.activeTab + "-trending"));
  bodyChildren.push(buildRail("Estrenos y Novedades", [...activeItems].reverse(), screenState.activeTab + "-new"));

  return {
    type: "Scaffold",
    appBar: buildAppBar(device, screenState.activeTab, false),
    body: {
      type: "Column",
      gap: 16,
      children: bodyChildren
    }
  };
}

export async function screenEvent(ev) {
  await null;
  const name = ev && typeof ev.name === "string" ? ev.name : "";
  const arg = ev && ev.arg;

  if (name === "tab" && typeof arg === "string") {
    screenState.activeTab = arg;
    screenState.route = "main";
    return {};
  }

  if (name === "openSearch") {
    screenState.route = "search";
    return {};
  }

  if (name === "closeSearch" || name === "back") {
    screenState.route = "main";
    screenState.detailItem = null;
    return {};
  }

  if (name === "doSearch" || name === "search") {
    const q = (ev.values && ev.values.q) || (typeof arg === "string" ? arg : "");
    screenState.searchQuery = q;
    if (q.trim()) {
      screenState.searchResults = await search({ q });
    }
    return {};
  }

  if (name === "openDetail" && typeof arg === "string") {
    try {
      const parsed = JSON.parse(arg);
      screenState.detailItem = parsed;
      screenState.route = "detail";
    } catch (_) {}
    return {};
  }

  return {};
}
