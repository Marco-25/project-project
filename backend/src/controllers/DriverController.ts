import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import DriverRepository from "../repositories/DriverRepository";


class DriverController {

    static async create(request: Request, response: Response) {
        const driversRepository = getCustomRepository(DriverRepository);
        const body = request.body;
        try {
            const driver = driversRepository.create(body);
            await driversRepository.save(driver);
            response.status(201).json(body);
        } catch (error) {
            response.status(500).json({error: 'Error internal'});
        }
    }

    static async getAll(request: Request, response: Response) {
        const driversRepository = getCustomRepository(DriverRepository);
        try {
            const driver = await driversRepository.find({ order: { id: "DESC" } });
            response.json(driver);
        } catch (error) {
            response.status(500).json({error: 'Error internal'});
        }
    }

    static async getOne(request: Request, response: Response) {
        const driversRepository = getCustomRepository(DriverRepository);
        const {id} = request.params;
        try {
            const driver = await driversRepository.findOne(Number(id));
            if(!driver) return response.status(400).json({message: `driver not found!`});

            response.json(driver);
        } catch (error) {
            response.status(500).json({error: 'Error internal'});
        }
    }

    static async update(request: Request, response: Response) {
        const driversRepository = getCustomRepository(DriverRepository);
        const {id} = request.params;
        const body = request.body;
        try {
             
            const driver = await driversRepository.findOne(Number(id));
            if(!driver) return response.status(400).json({message: `driver not found!`});
            
            await driversRepository.update(id,body);
            const driverUpdated = await driversRepository.findOne(Number(id));
            response.json(driverUpdated);
        } catch (error) {
            response.status(500).json({error: 'Error internal'});
        }
    }


    static async destroy(request: Request, response: Response) {
        const driversRepository = getCustomRepository(DriverRepository);
        const {id} = request.params;
        try {
            const driver = await driversRepository.findOne(Number(id));
            if(!driver) return response.status(400).json({message: `driver not found!`});

            await driversRepository.delete(Number(id));
            
            response.json({message: `driver de ID ${id} deleted.`});
        } catch (error) {
            response.status(500).json({error: 'Error internal'});
        }
    }
}

export default DriverController;