import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import VehicleRepositoty from '../repositories/VehicleRepository';

class VehicleController {

    static async create(request:Request, response: Response) {
        const vehicleRepository = getCustomRepository(VehicleRepositoty);
        const body = request.body;
        try {
            const vehicle = vehicleRepository.create(body);
            await vehicleRepository.save(vehicle);

            response.status(201).json(vehicle);

        } catch(error) {
            response.status(500).json({Error: 'Error internal!'})
        }
    }

    static async getAll(request: Request, response: Response) {
         const vehicleRepository = getCustomRepository(VehicleRepositoty);
        try {
            const vehicle = await vehicleRepository.find({order: {id: 'DESC'}});
            response.json(vehicle);

        } catch(error) {
            response.status(500).json({Error: 'Error internal!'})
        }
    }

    static async getOne(request: Request, response: Response) {
         const vehicleRepository = getCustomRepository(VehicleRepositoty);
         const {id} = request.params;
        try {
            const vehicle = await vehicleRepository.findOne(Number(id));
            if (!vehicle) return response.status(400).json({message: 'Vehicle not found!'});
            response.json(vehicle);

        } catch(error) {
            response.status(500).json({Error: 'Error internal!'})
        }
    }

    static async update(request: Request, response: Response) {
         const vehicleRepository = getCustomRepository(VehicleRepositoty);
         const body = request.body;
         const {id} = request.params;
        try {
            const vehicle = await vehicleRepository.findOne(Number(id));
            if (!vehicle) return response.status(400).json({message: 'Vehicle not found!'});

            await vehicleRepository.update(Number(id), body);
            const vehicleUpdated = await vehicleRepository.findOne(Number(id));
            response.json(vehicleUpdated);

        } catch(error) {
            response.status(500).json({Error: 'Error internal!'})
        }
    }


    static async destroy(request: Request, response: Response) {
         const vehicleRepository = getCustomRepository(VehicleRepositoty);
         const {id} = request.params;
        try {
            const vehicle = await vehicleRepository.findOne(Number(id));
            if (!vehicle) return response.status(400).json({message: 'Vehicle not found!'});

            await vehicleRepository.delete(Number(id));
            response.json({message: `vehicle with ID ${id} deleted.`});

        } catch(error) {
            response.status(500).json({Error: 'Error internal!'});
        }
    }
}

export default VehicleController;