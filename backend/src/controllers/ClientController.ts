import { Request, Response } from "express";
import { getRepository } from "typeorm";


class ClientController {

    static create(request: Request, response: Response) {
        // const clientRepository = getRepository(clientRepository)
        const body = request.body;

        try {

            
        } catch (error) {
            response.status(500).json({error: 'Error internal'})
        }
    }
}

export default ClientController;