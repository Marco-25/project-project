import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import ClientRepository from "../repositories/ClientRepository";


class ClientController {

    static async create(request: Request, response: Response) {
        const clientRepository = getCustomRepository(ClientRepository);
        const body = request.body;
        try {
            const client = clientRepository.create(body);
            await clientRepository.save(client);
            response.status(201).json(body);
        } catch (error) {
            response.status(500).json({error: 'Error internal'});
        }
    }

    static async getAll(request: Request, response: Response) {
        const clientRepository = getCustomRepository(ClientRepository);
        try {
            const client = await clientRepository.find({ order: { id: "DESC" } });
            response.json(client);
        } catch (error) {
            response.status(500).json({error: 'Error internal'});
        }
    }

    static async getOne(request: Request, response: Response) {
        const clientRepository = getCustomRepository(ClientRepository);
        const {id} = request.params;
        try {
            const client = await clientRepository.findOne(Number(id));
            if(!client) return response.status(400).json({message: `Client not found!`});

            response.json(client);
        } catch (error) {
            response.status(500).json({error: 'Error internal'});
        }
    }

    static async update(request: Request, response: Response) {
        const clientRepository = getCustomRepository(ClientRepository);
        const {id} = request.params;
        const body = request.body;
        try {
             
            const client = await clientRepository.findOne(Number(id));
            if(!client) return response.status(400).json({message: `Client not found!`});
            
            await clientRepository.update(id,body);
            const clientUpdated = await clientRepository.findOne(Number(id));
            response.json(clientUpdated);
        } catch (error) {
            response.status(500).json({error: 'Error internal'});
        }
    }


    static async destroy(request: Request, response: Response) {
        const clientRepository = getCustomRepository(ClientRepository);
        const {id} = request.params;
        try {
            const client = await clientRepository.findOne(Number(id));
            if(!client) return response.status(400).json({message: `Client not found!`});

            await clientRepository.delete(Number(id));
            
            response.json({message: `Client de ID ${id} deleted.`});
        } catch (error) {
            response.status(500).json({error: 'Error internal'});
        }
    }
}

export default ClientController;