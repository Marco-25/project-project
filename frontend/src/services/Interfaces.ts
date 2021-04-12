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
    City: string;
    Zip_code: string;
    state: string;
    country: string;

    contact_name: string;
    email: string;
    observation: string;

    DDI_telephone: string;
    telephone_number: string;
    DDI_cell: string;
    cell: string;

}