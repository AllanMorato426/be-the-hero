//Arquivo para salvar os métodos de cada entidade e organizar o arquivo ROUTES.JS
const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        //Cria 4 bytes de caracteres hexadecimais

        //O código vai aguardar esse comando ser executado;
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

    
        return response.json({ id });
    }
}