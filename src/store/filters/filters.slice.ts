import { IFiltersActionsPayload, IFilterState } from "./filters.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: IFilterState = {
    isFilterUpdated: false,
    queryParams: {
        title: '',
        fz: '',
        min_price: '',
        max_price: ''
    }
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        updateQueryParam: (state, action: PayloadAction<IFiltersActionsPayload>) => {
            const {key, value} = action.payload
            state.queryParams[key] = value
            state.isFilterUpdated = true
        },
        resetFiltersUpdate: state => {
            state.queryParams = {
                title: '',
                fz: '',
                min_price: '',
                max_price: ''
            };
            state.isFilterUpdated = false
        }
    }
})