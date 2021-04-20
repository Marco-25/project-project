import { EntityRepository, Repository } from "typeorm";
import Tracker from "../models/Tracker";

@EntityRepository(Tracker)
class TrackerRepository extends Repository<Tracker>{ }

export default TrackerRepository;
