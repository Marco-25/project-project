export interface IId {
    id:string;
}
export interface IUsers {
    id?: number;
    name: string;
    username?: string;
    password?: string;
    email: string;
}

export interface IProps {
    submitForm: any;
    validations?: any;
    comeBack?: any;
    data?: any;
}

export interface IPropsEditClient {
    submitForm: any;
    validations?: any;
    comeBack?: any;
    data: IClient;
}


export interface IClient {
    id: number;
    company_name: string;
    fantasy_name: string;
    type: string;
    released: string;
    CPF?: string;
    CNPJ?: string;
    address: string;
    district: string;
    city: string;
    zip_code: string;
    state: string;
    country: string;
    contact_name: string;
    email: string;
    observation: string;
    telephone_number: string;
    cell: string;

}
export interface IVehicles {
    id: number;
    year: string;
    color: string;
    type: string;
    brand: string;
    model: string;
    tank: string;
    fuel: string;
    renavam: string;
    observation: string;
    he_scores: string;
}

export interface ITrackers {
    id: number;
    manufacturer: string;
    tag: string;
    chip_number: string;
    operator: string;
}