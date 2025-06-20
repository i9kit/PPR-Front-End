export enum EnumTypeCompany {
    Ind_Ent   = 'ИП',
    Legal_Ent = 'ЮЛ',
    For_Ent   = 'НР'
}
  
export interface ICustomer {
    id:number
    title:string
    type_company: EnumTypeCompany
    ogrn: number
    inn: number
    region_id: number
    time_reg: string
    win: number
    contract_execution_rate: number
    avg_tender_size: number
    years_in_procurement: number
    num_participants_avg: number
}

export type Customer = {
    id: number
    title: string
    type_company: EnumTypeCompany
    ogrn: number
    inn: number
    region_id: number
    time_reg: string
    win: number
    contract_execution_rate: number
    avg_tender_size: number
    years_in_procurement: number
    num_participants_avg: number
}