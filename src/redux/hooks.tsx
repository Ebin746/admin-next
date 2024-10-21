"use client"
import { AppDispatch,RootState } from "./store";
import { useSelector,useDispatch,TypedUseSelectorHook } from "react-redux";

export const useAppDispatach=()=>useDispatch<AppDispatch>()
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector