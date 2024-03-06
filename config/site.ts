export const siteConfig = {
  name: "Flix Verse",
  url: "https://ui.shadcn.com",
  ogImage: "https://ui.shadcn.com/og.jpg",
  author: "re1san",
  authorPage: "https://github.com/re1san",
  description:
    "Movie Recommendation Website built beautifully with NextJS 14 and Shadcn.",
  links: {
    github: "https://github.com/re1san/Movie-Recommender",
  },
  apiUrl: {
    titles: `https://ketto.space/flix/api/titles?key=${process.env.FLIX_KEY}`,
    recommendations: `https://ketto.space/flix/api/recommends?key=${process.env.FLIX_KEY}`,
    tmdb: "https://api.themoviedb.org/3/search/movie",
    tmdbImage: "https://image.tmdb.org/t/p/original",
  },
};

export type siteConfig = typeof siteConfig;