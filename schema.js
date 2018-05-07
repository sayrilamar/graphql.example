var fetch = require('node-fetch');
// var util = require('util');
// var parseXML = util.promisify(require('xml2js').parseString);



var {
    GraphQLObjectType,
    GraphQLSchema,
    GraphyQLInt,
    GraphQLString,
    GraphQLList
} = require('graphql');

const PlayerType = new GraphQLObjectType({
    name: 'Get Player',
    description: '...',
    fields: () => ({
        fullName: {
            type: GraphQLList,
            resolve: data => data.fullName 
        } 
    })
})

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: '...',
        fields: () => ({
            fullName: {
                type: PlayerType,
                resolve: () => {
                    fetch('http://api.suredbits.com/nfl/v0/team/phi/roster')
                    .then(res => res.json); 
                } 
            } 
        })
    })

});
