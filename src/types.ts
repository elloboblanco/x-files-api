export type Season = {
  id: string;
  episodes: Episode[];
};

export type Episode = {
  id: string;
  season: string;
  seasonId: string;
  title: string;
  mythArc: boolean;
  director: string;
  writer: string;
  airDate: string;
  productionCode: string;
  usViewers: number | null;
  summary: string;
};

export type Movie = {
  id: string;
  title: string;
  mythArc: boolean;
  director: string;
  writer: string;
  airDate: string;
  summary: string;
};
