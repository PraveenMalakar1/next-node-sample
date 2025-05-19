"use client";

import React, { createContext, useReducer, useContext, ReactNode, Dispatch } from "react";

export type Car = {
    id: number | string;
    make: string;
    model: string;
    vrm: string;
    colour?: string;
    mileage?: number;
    location?: string;
    variant?: string;
    status?: string;
    activeAdvertPriceAmount: number;
};

type State = {
    cars: Car[];
    selectedCarId: string | null;
};

type Action =
    | { type: "SET_CARS"; payload: Car[] }
    | { type: "SET_SELECTED_CAR_ID"; payload: string | null };

const initialState: State = {
    cars: [],
    selectedCarId: null,
};

const CarContext = createContext<{ state: State; dispatch: Dispatch<Action> } | undefined>(undefined);

function carReducer(state: State, action: Action): State {
    switch (action.type) {
        case "SET_CARS":
            return { ...state, cars: action.payload };
        case "SET_SELECTED_CAR_ID":
            return { ...state, selectedCarId: action.payload };
        default:
            return state;
    }
}

export function CarProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(carReducer, initialState);

    return <CarContext.Provider value={{ state, dispatch }}>{children}</CarContext.Provider>;
}

export function useCarContext() {
    const context = useContext(CarContext);
    if (!context) {
        throw new Error("useCarContext must be used within a CarProvider");
    }
    return context;
}
