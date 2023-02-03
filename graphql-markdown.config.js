module.exports = {
  schema: "./graphql/schema.graphql",
  rootPath: "./docs", // docs will be generated under './docs' (rootPath/baseURL)
  baseURL: "graphql",
  linkRoot: "/",
  docOptions: {
    index: true,
  },
  loaders: {
    GraphQLFileLoader: "@graphql-tools/graphql-file-loader", // local file schema
  },
};
