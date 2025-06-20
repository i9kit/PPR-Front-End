import { ICustomer } from "./customer.interface";

export enum EnumFZ {
    fz_44 = '44',
    fz_223 = '223',
    fz_615 = '615'
}

export const fzList = [
  { key: 'fz_44', value: '44' },
  { key: 'fz_223', value: '223' },
  { key: 'fz_615', value: '615' }
] as const;

export interface ITender {
    id: number,
    title: string,
    description: string,
    date_start: string,
    date_end: string,
    fz: EnumFZ,
    external_id: number,
    price: number,
    participant: number,
    deadline: string,
    region_id: number,
    win: number,
    customer: ICustomer
}


export type TypeParamId = {
    id: number
}

export interface IPageIdParam {
    params: TypeParamId
}
       
export type TypeTenderDataFilters = {
    title?: string | undefined
    fz?: EnumFZ | string 
    min_price?: string | undefined
    max_price?: string | undefined
}

export type TypeParamsFilters = {
    searchParams: TypeTenderDataFilters
}