var express = require('express');
var graphqlHTTP = require('express-graphql');
var app = express();
var schema = require('./schema') 


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
})
);

app.listen(4000, function(){
    console.log('Listing...');
    console.log('blah blah blah');
});