import { TypeTenderDataFilters } from "@/interfaces/tender.interface"


export interface IFilterState {
    isFilterUpdated: boolean
    queryParams: TypeTenderDataFilters
}

export interface IFiltersActionsPayload {
    key: keyof TypeTenderDataFilters
    value: string 
}