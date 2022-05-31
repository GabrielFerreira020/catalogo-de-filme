import { inserirFilme} from "../repository/filmeRepository.js";

import { Router } from'express';
const server = Router();

server.post('/filme', async (req, resp)=>{
    try {
        const novoFilme = req.body;

        const filme = await inserirFilme(novoFilme);

        resp.send(filme);

    } catch (err) {
        resp.send(400).send({
            erro: err.message
        })
    }
})


export default server;