import SearchComponent from "@/components/screen/search/Search";
import { TypeParamsFilters, TypeTenderDataFilters } from "@/interfaces/tender.interface";
import { TenderService } from "@/services/tender.service";


async function getProducts(params: TypeTenderDataFilters) {
    const data = await TenderService.getAllTenders(params)
    return data
}

export default async function Search({searchParams}: TypeParamsFilters) {
  const relativeSearchParams = await searchParams
  const data = await getProducts(relativeSearchParams)
  
  return (
    <>
      <div>
        <SearchComponent initialTenders={data}/>
      </div>
    </>
    
  )
}

