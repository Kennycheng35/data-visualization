const express = require("express");
const {postgraphile} = require('postgraphile');
const cors = require('cors');

require('dotenv').config();


const app = express();
app.use(cors());

app.use('/graphql',
        postgraphile(
            `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:54320/${process.env.DB}`,
            "public",
            {   
                defaultPaginationCap: Number(process.env.DEFAULT_PAGINATION_CAP || 100),
                graphqlCostLimit: Number(process.env.GRAPHQL_COST_LIMIT || -1),
                graphqlDepthLimit: Number(process.env.GRAPHQL_DEPTH_LIMIT || -1),
                watchPg:true,
                graphiql:true,
                enhanceGraphiql: true,
                retryOnInitFail:true,
                extendedErrors: ['hint', 'detail', 'errcode'],
                simpleCollections: 'both',
                pgSettings: {
                    statement_timeout: Number(process.env.DB_TIMEOUT || 60000)
                }
            }
        ),
    );

app.listen(3000, ()=>console.log('Start up'));