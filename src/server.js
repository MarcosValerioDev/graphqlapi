const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const graphqlTools = require('graphql-tools');
const mysql2 = require('./db.js');

const door = 4000;

app.listen(door,function(){
    mysql2.connect();
});
console.log(`Servidor rodando em: ${door}`);


const typeDefs = `
    type Query {
		resposta: String 
    }

    type Mutation {
        updatePessoa: String
    }
`;

const resolvers = {
	Query: {
		resposta: function(){ return 'QraphQL conectada com sucesso.'}
    },
    Mutation: { 
        updatePessoa: function(){ return "Update pessoa!"}
    }
}

const schema = graphqlTools.makeExecutableSchema({ 
    typeDefs: typeDefs,
    resolvers: resolvers
 });

 app.use('/graphql', graphqlHTTP({
        graphiql: true,
        schema: schema
 }));


