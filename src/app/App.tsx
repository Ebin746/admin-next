"use client"
import {store} from "@/redux/store"
import  {Provider}  from "react-redux";
import React from "react";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      {children}  {/* Children should be rendered here */}
    </Provider>
  );
};

export default App;
