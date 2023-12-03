/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { iMember } from "../types/interface";
import { iWorker } from "../types/interface";


const initialState = {
    currentMember: {} as iMember | null,
    currentWorker: {} as iWorker | null,
};

const ReduxState = createSlice({
    name: "mfmyc-ado",
    initialState,
    reducers: {
        User: (state, { payload } : PayloadAction<iMember>) => 
        {
            state.currentMember = payload
        },
        User2: (state, { payload } : PayloadAction<iWorker>) => 
        {
            state.currentMember = payload
        },
    },
});

export const { User } = ReduxState.actions;

export default ReduxState.reducer;