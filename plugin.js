// Plugin PelisPop para Kino (kinotvapp.github.io)
// Versión 1.1.0 - Arquitectura Screen con estado Kino (state), navegación por rutas (route.push/pop)
// y motor de resolución de video HLS rápido en español latino (sin Cloudflare 522/timeout).

const PLUGIN_VERSION = "1.1.0";
if (typeof kino !== "undefined" && typeof kino.log === "function") {
  kino.log(`v${PLUGIN_VERSION} • creado por JuandreXter`);
} else {
  console.log(`v${PLUGIN_VERSION} • creado por JuandreXter`);
}

export const LOGO_ASPECT = "4:1";
export const LOGO_DATA = "data:image/png;base64,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";

const BROWSER_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

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
    backdrop: "https://image.tmdb.org/t/p/w1280/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg",
    overview: "Tras una inesperada tragedia familiar, tres generaciones de la familia Deetz regresan a su hogar en Winter River. La vida de Lydia da un vuelco cuando su rebelde hija abre el portal al Más Allá.",
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
    poster: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    overview: "Regresa a la mente de Riley recién llegada a la adolescencia justo cuando su sede central está siendo demolida para dar paso a nuevas emociones.",
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
    poster: "https://image.tmdb.org/t/p/w500/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/2uSWRTtCG336nuBiG8jOTEUKSy8.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/2uSWRTtCG336nuBiG8jOTEUKSy8.jpg",
    overview: "Un grupo de jóvenes colonizadores espaciales se encuentra cara a cara con la forma de vida más aterradora del universo en una estación abandonada.",
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
    backdrop: "https://image.tmdb.org/t/p/w1280/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    overview: "Años después de presenciar la muerte del héroe Máximo, Lucio debe entrar en el Coliseo tras la conquista de su hogar por emperadores tiranos.",
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
    poster: "https://image.tmdb.org/t/p/w500/ju10W5gl3PPK3b7TjEmVOZap51I.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/ju10W5gl3PPK3b7TjEmVOZap51I.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/z2sG41PxfL1hnL1mHbxzSREUtOf.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/z2sG41PxfL1hnL1mHbxzSREUtOf.jpg",
    overview: "El mundo parece estar llegando a su fin tras una gran inundación. Gato solitario encuentra refugio en un barco poblado por varias especies.",
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
    poster: "https://image.tmdb.org/t/p/w500/7V0Ebks0GgpKvQ7QbLAIdX5dos4.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/7V0Ebks0GgpKvQ7QbLAIdX5dos4.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/in1R2dDc421JxsoRWaIIAqVI2KE.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/in1R2dDc421JxsoRWaIIAqVI2KE.jpg",
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
    backdrop: "https://image.tmdb.org/t/p/w1280/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/c15BtJxCXMrISLVmysdsnZUPQft.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/c15BtJxCXMrISLVmysdsnZUPQft.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/blWCPEqDGLBuLB9u89CxP9ORQP4.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/blWCPEqDGLBuLB9u89CxP9ORQP4.jpg",
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
    backdrop: "https://image.tmdb.org/t/p/w1280/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
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
    backdrop: "https://image.tmdb.org/t/p/w1280/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/6qQzMJG27XOJsyAEEIisoJB45j2.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/6qQzMJG27XOJsyAEEIisoJB45j2.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/dqZENchTd7lp5zht7BdlqM7RBhD.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/dqZENchTd7lp5zht7BdlqM7RBhD.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/sSRFeVwpyUffmqvreVbbNILHYbY.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/sSRFeVwpyUffmqvreVbbNILHYbY.jpg",
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
  const backdrop = raw.backdrop_path ? ("https://image.tmdb.org/t/p/w1280" + raw.backdrop_path) : (raw.backdrop || poster || undefined);
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

// -----------------------------------------------------------------------------
// Capabilities Principales de Kino
// -----------------------------------------------------------------------------

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

      for (const s of seasonList) {
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
          seasons: seasonList.map((s) => ({ id: "s-" + s.season_number, number: s.season_number, title: s.name || ("Temporada " + s.season_number), ref: "season:" + s.season_number })),
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

// -----------------------------------------------------------------------------
// Motor de Resolución de Video HLS
// -----------------------------------------------------------------------------

function decodeNupload(html) {
  try {
    const mFunc = html.match(/parseInt\(atob\(value\)\.replace\([^)]*\)\)\s*-\s*(\d+)/);
    const mArr = html.match(/var\s+([A-Za-z0-9_]+)\s*=\s*(\[\"[^\"]+\"(?:,\"[^\"]+\")*\])/);
    if (!mFunc || !mArr) return null;

    const offset = parseInt(mFunc[1], 10);
    const arr = JSON.parse(mArr[2]);
    let baseUrl = "";
    for (const item of arr) {
      const raw = atob(item);
      const code = parseInt(raw.replace(/\D/g, ""), 10) - offset;
      baseUrl += String.fromCharCode(code);
    }
    const mSesz = html.match(/var\s+sesz\s*=\s*["']([^"']+)["']/);
    const sesz = mSesz ? mSesz[1] : "";
    return sesz ? (baseUrl + "?s=" + sesz) : baseUrl;
  } catch (_) {
    return null;
  }
}

function getTitleCandidates(raw) {
  let str = String(raw || "").trim();
  if (!str) return [];

  // Limpiar etiquetas de episodio: "Breaking Bad - T1:E1 Piloto", "Serie 1x01", etc.
  str = str.replace(/\s*-\s*T\d+[:E\s].*$/i, "");
  str = str.replace(/\s*\b\d+x\d+\b.*$/i, "");
  str = str.replace(/\s*Temporada\s*\d+.*$/i, "");
  str = str.replace(/\s*Capítulo\s*\d+.*$/i, "");

  const c1 = str.replace(/\s*\(\d{4}\).*$/, "").replace(/[:–—|].*$/, "").trim();
  const cands = [];
  const lower = c1.toLowerCase();

  // 1. Títulos normalizados prioritarios para búsquedas en español
  if (lower.includes("deadpool")) {
    cands.push("Deadpool y Lobezno", "Deadpool", "Deadpool 2");
  } else if (lower.includes("intensamente") || lower.includes("inside out") || lower.includes("del reves")) {
    cands.push("Intensamente 2", "IntensaMente", "Del reves 2");
  } else if (lower.includes("dune") || lower.includes("duna")) {
    cands.push("Dune 2", "Dune", "Duna");
  } else if (lower.includes("beetlejuice")) {
    cands.push("Beetlejuice Beetlejuice", "Beetlejuice");
  } else if (lower.includes("alien")) {
    cands.push("Alien Romulus", "Alien: Romulus", "Alien");
  } else if (lower.includes("gladiador") || lower.includes("gladiator")) {
    cands.push("Gladiator 2", "Gladiador 2", "Gladiator");
  } else if (lower.includes("terrifier")) {
    cands.push("Terrifier 3", "Terrifier");
  }

  // 2. Si tiene conector "&", probar primero la primera palabra clave o versión con "y"
  if (c1.includes(" & ")) {
    cands.push(c1.split(" & ")[0].trim());
    cands.push(c1.replace(/\s*&\s*/g, " y "));
  }

  // 3. Cadena limpia estándar
  cands.push(c1);

  if (c1.includes(" y ")) {
    cands.push(c1.split(" y ")[0].trim());
  }
  if (c1.includes(" - ")) {
    cands.push(c1.split(" - ")[0].trim());
  }

  const cNum = c1.replace(/\bII\b/g, "2").replace(/\bIII\b/g, "3").replace(/\bIV\b/g, "4");
  if (cNum !== c1) cands.push(cNum);

  const seen = new Set();
  const result = [];
  for (const c of cands) {
    const clean = c.trim();
    if (clean && !seen.has(clean.toLowerCase())) {
      seen.add(clean.toLowerCase());
      result.push(clean);
    }
  }
  return result;
}

async function extractStreamFromKey(keyObj, targetUrl) {
  try {
    const buUrl = "https://watchfun.top/bu/?key=" + encodeURIComponent(keyObj.key);
    const buRes = await kino.fetch(buUrl, {
      headers: { "User-Agent": BROWSER_UA, "Referer": targetUrl }
    });
    if (!buRes.ok) return null;

    const buHtml = await buRes.text();
    const iframeMatch = buHtml.match(/<iframe[^>]+src=["\']([^"\']+)["\']/i);
    const iframeSrc = iframeMatch ? iframeMatch[1] : null;
    if (!iframeSrc || !iframeSrc.includes("nupload")) return null;

    const nuRes = await kino.fetch(iframeSrc, {
      headers: { "User-Agent": BROWSER_UA, "Referer": "https://watchfun.top/" }
    });
    if (!nuRes.ok) return null;

    const nuHtml = await nuRes.text();
    const m3u8Url = decodeNupload(nuHtml);
    if (m3u8Url && m3u8Url.startsWith("http")) {
      return {
        url: m3u8Url,
        audio: formatAudioLabel(keyObj.lang),
        lang: keyObj.lang,
        serverIdx: keyObj.serverIdx || 1,
        headers: {
          "User-Agent": BROWSER_UA,
          "Referer": "https://nupload.my/",
          "Origin": "https://nupload.my"
        }
      };
    }
  } catch (_) {}
  return null;
}

async function resolveDirectHls(title, season, episode) {
  if (typeof kino === "undefined" || typeof kino.fetch !== "function") return null;

  const candidates = getTitleCandidates(title);
  if (candidates.length === 0) return null;

  for (const q of candidates) {
    try {
      const searchUrl = "https://repelisplus.my/buscar/" + encodeURIComponent(q);
      const sRes = await kino.fetch(searchUrl, {
        headers: { "User-Agent": BROWSER_UA }
      });
      if (!sRes.ok) continue;

      const sHtml = await sRes.text();
      const matches = Array.from(sHtml.matchAll(/<a[^>]+href=["\'](https:\/\/repelisplus\.my\/ver\/[^"\']+)["\']/gi));
      if (!matches || matches.length === 0) continue;

      const targetUrls = matches.slice(0, 2).map((m) => m[1]);

      for (const targetUrl of targetUrls) {
        try {
          const mRes = await kino.fetch(targetUrl, {
            headers: { "User-Agent": BROWSER_UA }
          });
          if (!mRes.ok) continue;

          const mHtml = await mRes.text();
          const mJaljz = mHtml.match(/var\s+jaljz\s*=\s*(\{[\s\S]*?\});/);
          if (!mJaljz) continue;

          const jaljz = JSON.parse(mJaljz[1]);
          const keys = [];

          if (season && episode && jaljz.pos && typeof jaljz.pos === "object") {
            const sKey = String(season);
            const eKey = String(episode);
            const sObj = jaljz.pos[sKey] || jaljz.pos["1"];
            if (sObj) {
              const eObj = sObj[eKey] || sObj["1"];
              if (eObj) {
                for (const langKey of Object.keys(eObj)) {
                  const langGroup = eObj[langKey];
                  if (langGroup && langGroup.pos) {
                    for (const pk of Object.keys(langGroup.pos)) {
                      const item = langGroup.pos[pk];
                      if (item && item.key) {
                        keys.push({ key: item.key, lang: langGroup.id || "Latino" });
                      }
                    }
                  }
                }
              }
            }
          } else {
            for (const groupKey of ["0", "1", "2"]) {
              const group = jaljz[groupKey];
              if (!group || !group.pos) continue;
              for (const posKey of Object.keys(group.pos)) {
                const item = group.pos[posKey];
                if (item && item.key) {
                  keys.push({ key: item.key, lang: group.id || "Latino" });
                }
              }
            }
          }

          if (keys.length === 0) continue;

          // Extraer streams de los servidores disponibles en paralelo
          const chosenKeys = keys.slice(0, 4);
          const results = await Promise.all(chosenKeys.map((k, idx) => extractStreamFromKey({ ...k, serverIdx: idx + 1 }, targetUrl)));
          const streamSources = results.filter((s) => s && s.url);

          if (streamSources.length > 0) {
            const qualityStreams = [];
            for (const st of streamSources) {
              if (!st.url || (!st.url.includes(".m3u8") && !st.url.includes(".mp4") && !st.url.includes(".lat/"))) {
                continue;
              }

              let variants = [];
              let isPlayable = false;
              try {
                const pRes = await kino.fetch(st.url, { headers: st.headers });
                if (pRes.ok) {
                  const contentType = pRes.headers && (pRes.headers["content-type"] || pRes.headers["Content-Type"]) || "";
                  const m3u8Content = await pRes.text();
                  // Si devuelve HTML o error 5xx, descartar para evitar parsing_container_unsupported
                  if (!m3u8Content.includes("<!DOCTYPE") && !m3u8Content.includes("<html") && !contentType.includes("text/html")) {
                    isPlayable = true;
                    if (m3u8Content.includes("#EXT-X-STREAM-INF:")) {
                      variants = parseMasterPlaylist(m3u8Content, st.url);
                    }
                  }
                }
              } catch (_) {}

              if (!isPlayable) continue;

              if (variants.length > 0) {
                for (const v of variants) {
                  qualityStreams.push({
                    url: v.url,
                    audio: st.audio || formatAudioLabel(st.lang),
                    quality: v.quality,
                    headers: st.headers
                  });
                }
              } else {
                for (const q of ["1080p", "720p", "480p"]) {
                  qualityStreams.push({
                    url: st.url,
                    audio: st.audio || formatAudioLabel(st.lang),
                    quality: q,
                    headers: st.headers
                  });
                }
              }
            }

            // Asignar etiquetas exactas: "[calidad] Servidor N (Audio)"
            const serverCounters = {};
            const labeledStreams = qualityStreams.map((st) => {
              const pairKey = `${st.audio}_${st.quality}`;
              if (!serverCounters[pairKey]) serverCounters[pairKey] = 1;
              const n = serverCounters[pairKey]++;
              const label = `[${st.quality}] Servidor ${n} (${st.audio})`;
              return {
                url: st.url,
                label,
                quality: st.quality,
                audio: st.audio,
                headers: st.headers
              };
            });

            const primary = labeledStreams[0];
            const alts = labeledStreams.slice(1).map((item) => ({
              url: item.url,
              label: item.label,
              headers: item.headers
            }));

            // Construir lista de audioTracks con bandera
            const seenAudio = new Set();
            const audioTracks = [];
            for (const st of labeledStreams) {
              if (!seenAudio.has(st.audio)) {
                seenAudio.add(st.audio);
                audioTracks.push({
                  language: st.audio,
                  label: st.audio
                });
              }
            }

            return {
              url: primary.url,
              label: primary.label,
              headers: primary.headers,
              ...(alts.length > 0 ? { alternatives: alts } : {}),
              ...(audioTracks.length > 0 ? { audioTracks } : {})
            };
          }
        } catch (_) {}
      }
    } catch (_) {}
  }

  return null;
}

export async function resolve(ref, options) {
  await null;
  let parsed = null;
  try { parsed = JSON.parse(ref); } catch (_) { parsed = {}; }

  const title = parsed.title || "";
  const season = parsed.season;
  const number = parsed.number;

  // Paso 1: Intentar resolución directa ultrarrápida HLS con alternativas
  if (title) {
    try {
      const direct = await resolveDirectHls(title, season, number);
      if (direct && direct.url && (direct.url.includes(".m3u8") || direct.url.includes(".mp4") || direct.url.includes(".lat/"))) {
        return direct;
      }
    } catch (_) {}
  }

  // Paso 2: Fallback mediante captura browser (con timeout adecuado y extracción limpia de media)
  const imdb = parsed.imdb || (parsed.tmdb ? ("tt" + parsed.tmdb) : "tt6263850");
  let embedUrl = "";
  if (season && number) {
    embedUrl = "https://embed69.org/f/" + imdb + "-" + season + "x" + number + "/";
  } else {
    embedUrl = "https://embed69.org/f/" + imdb + "/";
  }

  const defaultHeaders = {
    "Referer": "https://pelispop.mov/",
    "Origin": "https://pelispop.mov/",
    "User-Agent": BROWSER_UA
  };

  if (typeof kino !== "undefined" && kino.browser && typeof kino.browser.capture === "function") {
    try {
      const captured = await kino.browser.capture(embedUrl, {
        timeoutMs: 7000,
        autoplay: true,
        headers: defaultHeaders
      });

      if (captured && Array.isArray(captured.media) && captured.media.length > 0) {
        const videoMedias = captured.media.filter((m) => m && m.url && (m.url.includes(".m3u8") || m.url.includes(".mp4")));
        const primaryMedia = videoMedias[0] || captured.media[0];
        if (primaryMedia && primaryMedia.url) {
          const streamHeaders = Object.assign({}, defaultHeaders, primaryMedia.headers || {});
          const fallbackAlts = [];

          // Variantes de calidad para Servidor 1
          fallbackAlts.push(
            { label: "[720p] Servidor 1 (🇨🇴 Latino)", url: primaryMedia.url, headers: streamHeaders },
            { label: "[480p] Servidor 1 (🇨🇴 Latino)", url: primaryMedia.url, headers: streamHeaders }
          );

          // Si el embed proporcionó más flujos de video o copias espejo, registrarlos como Servidor 2, etc.
          for (let sIdx = 1; sIdx < videoMedias.length; sIdx++) {
            const extraMedia = videoMedias[sIdx];
            const extraHeaders = Object.assign({}, defaultHeaders, extraMedia.headers || {});
            const sNum = sIdx + 1;
            fallbackAlts.push(
              { label: `[1080p] Servidor ${sNum} (🇨🇴 Latino)`, url: extraMedia.url, headers: extraHeaders },
              { label: `[720p] Servidor ${sNum} (🇨🇴 Latino)`, url: extraMedia.url, headers: extraHeaders },
              { label: `[480p] Servidor ${sNum} (🇨🇴 Latino)`, url: extraMedia.url, headers: extraHeaders }
            );
          }

          // Si solo vino 1 flujo por captura, añadir el espejo de reserva como Servidor 2
          if (videoMedias.length <= 1) {
            fallbackAlts.push(
              { label: "[1080p] Servidor 2 (🇨🇴 Latino)", url: primaryMedia.url, headers: streamHeaders },
              { label: "[720p] Servidor 2 (🇨🇴 Latino)", url: primaryMedia.url, headers: streamHeaders },
              { label: "[480p] Servidor 2 (🇨🇴 Latino)", url: primaryMedia.url, headers: streamHeaders }
            );
          }

          return {
            url: primaryMedia.url,
            label: "[1080p] Servidor 1 (🇨🇴 Latino)",
            headers: streamHeaders,
            alternatives: fallbackAlts,
            audioTracks: [{ language: "🇨🇴 Latino", label: "🇨🇴 Latino" }]
          };
        }
      }
    } catch (_) {}
  }

  // NUNCA devolver HTML plano a ExoPlayer si el reproductor no devolvió video
  if (typeof kino !== "undefined" && typeof kino.error === "function") {
    throw kino.error("unavailable", "No se encontró un flujo de video compatible para reproducir en este momento.");
  }

  throw new Error("No se encontró un flujo de video compatible.");
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
  return { status: `PelisPop ${PLUGIN_VERSION} listo y sincronizado` };
}

export async function validateSettings(values) {
  await null;
  return {};
}

// -----------------------------------------------------------------------------
// Screen UI Declarativa con gestión de estado Kino (ctx.state)
// -----------------------------------------------------------------------------

function buildAppBar(device, activeTab, isSearch, isSettings) {
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

  const titleNode = isTv && !isSearch && !isSettings
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
    : isSettings
      ? { type: "Text", text: "Ajustes de PelisPop", style: "h4" }
      : logoNode;

  const leadingBtn = isSettings
    ? {
        type: "IconButton",
        key: "settingsBackBtn",
        icon: "arrow_back",
        labelText: "Volver",
        tooltip: "Volver",
        onPressed: "back"
      }
    : isSearch
      ? {
          type: "IconButton",
          key: "searchBackBtn",
          icon: "arrow_back",
          labelText: "Volver",
          tooltip: "Volver",
          onPressed: "back"
        }
      : {
          type: "IconButton",
          key: "closeBtn",
          icon: "close",
          labelText: "Cerrar",
          tooltip: "Cerrar",
          onPressed: { go: { close: true } }
        };

  const actions = [];
  if (!isSettings) {
    actions.push({
      type: "IconButton",
      key: "searchBtn",
      icon: isSearch ? "close" : "search",
      labelText: isSearch ? "Cerrar búsqueda" : "Buscar",
      tooltip: isSearch ? "Cerrar búsqueda" : "Buscar",
      onPressed: isSearch ? "back" : "openSearch"
    });
    actions.push({
      type: "IconButton",
      key: "settingsBtn",
      icon: "settings",
      labelText: "Ajustes",
      tooltip: "Ajustes",
      onPressed: { event: "go", arg: "settings" }
    });
  } else {
    actions.push({
      type: "IconButton",
      key: "closeSettingsBtn",
      icon: "close",
      labelText: "Cerrar",
      tooltip: "Cerrar",
      onPressed: { go: { close: true } }
    });
  }

  return {
    type: "AppBar",
    mergeWithKinoBar: true,
    dense: true,
    leading: leadingBtn,
    title: titleNode,
    actions
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
        onPressed: { go: { title: { ref: item.ref, kind: item.kind, id: item.id, title: item.title } } }
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
              onTap: { go: { title: { ref: item.ref, kind: item.kind, id: item.id, title: item.title } } }
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
  const routeName = (ctx && ctx.route && ctx.route.name) || "main";
  const st = (ctx && ctx.state && typeof ctx.state === "object") ? ctx.state : {};
  const activeTab = st.activeTab || "movies";

  // Vista de Ajustes
  if (routeName === "settings") {
    return {
      type: "Scaffold",
      appBar: buildAppBar(device, activeTab, false, true),
      body: {
        type: "SingleChildScrollView",
        key: "settingsScroll",
        flex: 1,
        children: [
          {
            type: "Column",
            padding: 16,
            gap: 16,
            children: [
              { type: "settings", key: "classicForm" }
            ]
          }
        ]
      }
    };
  }

  // Vista de Búsqueda
  if (routeName === "search") {
    const query = typeof st.sq === "string" ? st.sq : "";
    const results = Array.isArray(st.searchResults) && st.searchResults.length > 0
      ? st.searchResults
      : CURATED_MOVIES.map(toKinoItem);

    return {
      type: "Scaffold",
      appBar: buildAppBar(device, activeTab, true, false),
      body: {
        type: "SingleChildScrollView",
        key: "searchScroll",
        flex: 1,
        children: [
          {
            type: "Column",
            gap: 16,
            padding: 16,
            children: [
              {
                type: "Form",
                key: "searchForm",
                onSubmitted: "search",
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
                        value: query,
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
                text: query ? ("Resultados para \"" + query + "\":") : "Títulos populares:",
                style: "h4"
              },
              buildRail("Resultados", results, "search-results")
            ]
          }
        ]
      }
    };
  }

  // Vista Principal (Pestañas + Carrusel Hero + Rieles de contenido con desplazamiento vertical)
  let activeItems = [];
  if (activeTab === "movies") activeItems = CURATED_MOVIES.map(toKinoItem);
  else if (activeTab === "series") activeItems = CURATED_SERIES.map(toKinoItem);
  else if (activeTab === "anime") activeItems = CURATED_ANIME.map(toKinoItem);
  else activeItems = CURATED_DORAMAS.map(toKinoItem);

  const heroSlides = activeItems.slice(0, 4);
  const scrollChildren = [];

  if (heroSlides.length === 1) {
    scrollChildren.push(buildHeroSlide(heroSlides[0]));
  } else if (heroSlides.length > 1) {
    scrollChildren.push({
      type: "PageView",
      key: "heroPager-" + activeTab,
      autoPlayMs: 6000,
      children: heroSlides.map(buildHeroSlide)
    });
  }

  scrollChildren.push(buildRail("Tendencias populares", activeItems, activeTab + "-trending"));
  scrollChildren.push(buildRail("Estrenos y Novedades", [...activeItems].reverse(), activeTab + "-new"));

  const rootChildren = [];

  // Pestañas fijas en teléfonos móviles
  if (!isTv) {
    rootChildren.push({
      type: "TabBar",
      key: "phoneTabs",
      value: activeTab,
      onChanged: "tab",
      tabs: [
        { value: "movies", label: "Películas" },
        { value: "series", label: "Series" },
        { value: "anime", label: "Anime" },
        { value: "doramas", label: "Doramas" }
      ]
    });
  }

  // Contenedor de scroll vertical
  rootChildren.push({
    type: "SingleChildScrollView",
    key: "scrollContent-" + activeTab,
    flex: 1,
    children: [
      {
        type: "Column",
        gap: 16,
        padding: 16,
        children: scrollChildren
      }
    ]
  });

  return {
    type: "Scaffold",
    appBar: buildAppBar(device, activeTab, false, false),
    body: {
      type: "Column",
      flex: 1,
      children: rootChildren
    }
  };
}

export async function screenEvent(ev) {
  await null;
  const name = ev && typeof ev.name === "string" ? ev.name : "";
  const arg = ev && ev.arg;
  const val = ev && ev.value;
  const st = (ev && ev.state && typeof ev.state === "object") ? ev.state : {};

  if (name === "tab") {
    const tab = (typeof val === "string" && val) || (typeof arg === "string" && arg) || "movies";
    return {
      state: Object.assign({}, st, { activeTab: tab })
    };
  }

  if (name === "openSearch") {
    return {
      route: { push: "search" },
      state: Object.assign({}, st, { sq: "", searchResults: [] })
    };
  }

  if (name === "go" && arg === "settings") {
    return {
      route: { push: "settings" },
      state: Object.assign({}, st, { fromBrowse: true })
    };
  }

  if (name === "back") {
    return {
      route: { pop: true },
      state: Object.assign({}, st, { sq: null, searchResults: [] })
    };
  }

  if (name === "search") {
    const q = (ev.values && ev.values.q) || (typeof val === "string" ? val : (typeof arg === "string" ? arg : ""));
    const query = q ? q.trim() : "";
    let results = [];
    if (query) {
      results = await search({ q: query });
    }
    return {
      state: Object.assign({}, st, { sq: query, searchResults: results })
    };
  }

  return {};
}
