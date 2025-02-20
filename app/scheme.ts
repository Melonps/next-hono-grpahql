import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} from "graphql";

const shopType = new GraphQLObjectType({
  name: "Shop",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
});

const shops = [
  { id: "1", name: "Shop A" },
  { id: "2", name: "Shop B" },
];

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => "hello!",
    },
    shop: {
      type: shopType,
      args: { id: { type: GraphQLString } },
      resolve: (_, args) => shops.find((shop) => shop.id === args.id),
    },
    shops: {
      type: new GraphQLList(shopType),
      resolve: () => shops,
    },
  },
});

// スキーマを作成
export const schema = new GraphQLSchema({
  query: QueryType,
});
