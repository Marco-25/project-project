import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import TypesRepository from '../repositories/TypesRepository';

class TypesController {
    static async create(request: Request, response: Response) {
        const typesRepository = getCustomRepository(TypesRepository);
        const {name} = request.body;
        try {
            const type = typesRepository.create(name);
            const typeName = await typesRepository.findOne({where: {name: name}});
            if(typeName?.name == name) {
               return response.status(400).json({message: 'type already defined!'});
            }
            await typesRepository.save(type);
            response.status(201).json(name);
        } catch (error) {
            response.status(500).json({error: 'Error internal'});
        }
    }

    static async getAll(request: Request, response: Response) {
        const typesRepository = getCustomRepository(TypesRepository);
        try {
            const type = await typesRepository.find({ order: { id: "DESC" } });
            response.json(type);
        } catch (error) {
            response.status(500).json({error: 'Error internal'});
        }
    }

}

export default TypesController;