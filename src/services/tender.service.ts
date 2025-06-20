import { instance } from "@/api/api.interceptor"
import { ITender, TypeTenderDataFilters } from "@/interfaces/tender.interface"



const TENDER = 'tenders'


export const TenderService = {
    async getAllTenders(queryData = {} as TypeTenderDataFilters) { 
        const {data} = await instance<ITender[]> ({
            url: `${TENDER}/with-probabilities`,
            method: 'GET',
            params: queryData
        })

        return data
    },
    async getTender(tenderId: number) {
        const {data} = await instance<ITender> ({
            url: `${TENDER}/${tenderId}`,
            method: 'GET'
        })
        
        return data
    }
}


