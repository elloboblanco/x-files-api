import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { addResolversToSchema } from '@graphql-tools/schema';
import { join } from 'path';
import resolvers from './resolvers';

const schema = loadSchemaSync(join(__dirname, 'schema/schema.graphql'), { loaders: [new GraphQLFileLoader()] })

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers
})

export default schemaWithResolvers;
