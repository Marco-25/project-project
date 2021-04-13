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