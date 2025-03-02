"use client"

import store from "@/redux/store/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
interface ReduxProvideProps{
    children:ReactNode
}


const ReduxProvideProps:React.FC<ReduxProvideProps>=({children})=>{
    return <Provider store={store}>{children}</Provider>;
}
export default ReduxProvideProps
