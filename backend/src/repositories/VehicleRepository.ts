import { EntityRepository, Repository } from "typeorm";
import Vehicles from "../models/Vehicles";

@EntityRepository(Vehicles)
class VehicleRepositoty extends Repository<Vehicles>{ }

export default VehicleRepositoty;
