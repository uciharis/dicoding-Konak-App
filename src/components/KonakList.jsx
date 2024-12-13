import React from "react";
import KonakItem from "./KonakItem";

export default function KonakList({kontaks}){
    return (
        <div className="contact-list">
           {
            kontaks.map((kontak) => (
                <KonakItem key={kontak.id} {...kontak} />
            ))
            }
        </div>
    );
}