import { EntityRepository, Repository } from "typeorm";
import Types from '../models/Types'

@EntityRepository(Types)
class TypesRepository extends Repository<Types>{ }

export default TypesRepository;
