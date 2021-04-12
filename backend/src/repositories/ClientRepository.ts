import { EntityRepository, Repository } from "typeorm";
import Clients from "../models/Clients";

@EntityRepository(Clients)
class ClientRepository extends Repository<Clients>{ }

export default ClientRepository;
