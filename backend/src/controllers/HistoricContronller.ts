import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import HistoricRepository from '../repositories/HistoricRepository';


class HistoricController {
    static async create(request: Request, response: Response) {
        const historicRepository = getCustomRepository(HistoricRepository);
        const body = request.body;
        
        try {
            const historic = historicRepository.create(body);
            await historicRepository.save(historic);
            response.status(201).json(body);
        } catch (error) {
            response.status(500).json({error: 'Error internal'});
        }
    }

    static async getAll(request: Request, response: Response) {
        const historicRepository = getCustomRepository(HistoricRepository);
        try {
            const historic = await historicRepository.find({ order: { id: "DESC" } });
            response.json(historic);
        } catch (error) {
            response.status(500).json({error: 'Error internal'});
        }
    }

}

export default HistoricController;