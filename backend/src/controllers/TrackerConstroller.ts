import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import TrackerRepository from '../repositories/TrackerRepository';

class TrackerController {

    static async create(request:Request, response: Response) {
        const trackerRepository = getCustomRepository(TrackerRepository);
        const body = request.body;
        try {
            const tracker = trackerRepository.create(body);
            await trackerRepository.save(tracker);

            response.status(201).json(tracker);

        } catch(error) {
            response.status(500).json({Error: 'Error internal!'})
        }
    }

    static async getAll(request: Request, response: Response) {
         const trackerRepository = getCustomRepository(TrackerRepository);
        try {
            const tracker = await trackerRepository.find({order: {id: 'DESC'}});
            response.json(tracker);

        } catch(error) {
            response.status(500).json({Error: 'Error internal!'})
        }
    }

    static async getOne(request: Request, response: Response) {
         const trackerRepository = getCustomRepository(TrackerRepository);
         const {id} = request.params;
        try {
            const tracker = await trackerRepository.findOne(Number(id));
            if (!tracker) return response.status(400).json({message: 'tracker not found!'});
            response.json(tracker);

        } catch(error) {
            response.status(500).json({Error: 'Error internal!'})
        }
    }

    static async update(request: Request, response: Response) {
         const trackerRepository = getCustomRepository(TrackerRepository);
         const body = request.body;
         const {id} = request.params;
        try {
            const tracker = await trackerRepository.findOne(Number(id));
            if (!tracker) return response.status(400).json({message: 'tracker not found!'});

            await trackerRepository.update(Number(id), body);
            const trackerUpdated = await trackerRepository.findOne(Number(id));
            response.json(trackerUpdated);

        } catch(error) {
            response.status(500).json({Error: 'Error internal!'})
        }
    }


    static async destroy(request: Request, response: Response) {
         const trackerRepository = getCustomRepository(TrackerRepository);
         const {id} = request.params;
        try {
            const tracker = await trackerRepository.findOne(Number(id));
            if (!tracker) return response.status(400).json({message: 'tracker not found!'});

            await trackerRepository.delete(Number(id));
            response.json({message: `tracker with ID ${id} deleted.`});

        } catch(error) {
            response.status(500).json({Error: 'Error internal!'});
        }
    }
}

export default TrackerController;