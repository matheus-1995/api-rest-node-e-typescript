import express from "express";


const server = express();

server.get('/',(_, res)=>{

    return res.send('Olá teste resposta res');
});

export { server };