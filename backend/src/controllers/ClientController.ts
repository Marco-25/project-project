import { Request, Response } from "express";
// import { getRepository } from "typeorm";
// import ClientRepository from "../repositories/ClientRepository";


class ClientController {

    static create(request: Request, response: Response) {
        // const clientRepository = getRepository(ClientRepository)
        const body = request.body;
        try {

            response.json(body)

            
        } catch (error) {
            response.status(500).json({error: 'Error internal'})
        }
    }
}

export default ClientController;