import { seasons } from "./data";
import { Episode, Season } from "./types";

export const resolvers = {
  Query: {
    hello: (): string => {
      return "🛸 x-files-api 🛸";
    },
    season: (_: unknown, { id }: { id: string }): Season => {
      return seasons[parseInt(id) - 1];
    },

    episodes: (_: unknown, { mythArc }: { mythArc: boolean | undefined }): Episode[] => {
      return seasons.flatMap((season) => {
        return season.episodes.filter((episode) => {
          if (mythArc !== undefined) {
            // this means mythArc is either true or false, can just filter on the property
            return episode.mythArc === mythArc;
          } else {
            // no filter specified, return all
            return true;
          }
        });
      });
    },
  },
};
