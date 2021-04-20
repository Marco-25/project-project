import { EntityRepository, Repository } from "typeorm";
import Drivers from '../models/Drivers'

@EntityRepository(Drivers)
class DriverRepository extends Repository<Drivers>{ }

export default DriverRepository;
