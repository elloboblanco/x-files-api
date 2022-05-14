import { IObjectTypeResolver, IResolvers } from '@graphql-tools/utils';
import { seasons } from './data';
import { Episode, Season } from './types';

const seasonResolver: IObjectTypeResolver<void, void, { id: string }> = {
  season: (_, { id }): Season => {
    return seasons[parseInt(id) - 1];
  },
};

const episodesResolver: IObjectTypeResolver<void, void, { mythArc?: boolean }> = {
  episodes: (_, { mythArc }): Episode[] => {
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
};

const resolvers: IResolvers = {
  Query: {
    ...seasonResolver,
    ...episodesResolver,
  },
};

export default resolvers;
