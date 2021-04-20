import { EntityRepository, Repository } from "typeorm";
import Historic from '../models/Historic';

@EntityRepository(Historic)
class HistoricRepository extends Repository<Historic>{ }

export default HistoricRepository;