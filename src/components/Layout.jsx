import React from "react";
import MenuBar from "./MenuBar"

export default function Layout({ children }) {
    return (
        <div>
            <MenuBar />
            {children}
        </div>
    );
}