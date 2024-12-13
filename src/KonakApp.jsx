import React from "react";
import KonakList from "./KonakList";
import {getData} from "./data";

export default function KonakApp(){
    const kontaks = getData();

    return (
        <div className="contact-app">
            <h1>Daftar Kontak</h1>
            <KonakList kontaks={kontaks} />
        </div>
    );
}