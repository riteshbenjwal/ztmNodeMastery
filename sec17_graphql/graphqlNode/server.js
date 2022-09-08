const path = require("path");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const { makeExecutableSchema } = require("@graphql-tools/schema");

const { loadFilesSync } = require("@graphql-tools/load-files");

const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: {
    Query:{
      products: async(parent)=>{
        console.log('Getting the products...');
        const product = await Promise.resolve(parent.products);
        return product;
      }, 
      orders:  (parent)=>{
        console.log('Getting Order....');
        return parent.orders;
      },
    }
  }
});

// ! means required

const root = {
  products: require("./products/products.model"),
  orders: require("./orders/orders.model"),
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Running GraphQl Server....");
});
