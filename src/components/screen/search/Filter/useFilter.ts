
import { useActions } from "@/hooks/useActions"
import { useTypedSelector } from "@/hooks/useTypedSelector"
import { TypeTenderDataFilters } from "@/interfaces/tender.interface"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export const useFilters = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const { updateQueryParam, resetFiltersUpdate} = useActions()
    const { replace } = useRouter()

    const { queryParams, isFilterUpdated } = useTypedSelector( 
        state => state.filters
    )

    useEffect(() => {
        searchParams?.forEach((value, key) => {
           updateQueryParam(
            { key: key as keyof TypeTenderDataFilters, 
              value
            }) 
        })
    }, [])

    const updateQueryParams = (key: keyof TypeTenderDataFilters, value:string) => {
        const newParams = new URLSearchParams(searchParams?.toString())

        if(value) {
            newParams.set(key, String(value))
        } else {
            newParams.delete(key)
        }

        replace(pathname + `?${newParams.toString().replace(/%7C/g, '|')}`)
        updateQueryParam({ key, value })
    }    

    const resetFiltersUpdates = () => {
        resetFiltersUpdate()
        replace(pathname) 
  }
        

    return {
        queryParams,
        isFilterUpdated,
        updateQueryParams,
        resetFiltersUpdates
    }
}
