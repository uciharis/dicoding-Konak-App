import React from "react";
import ItemBody from "./ItemBody";
import ItemImg from "./ItemImg";

export default function KonakItem({imageUrl, name,tag}){
    return (
        <div className="contact-item">
            <ItemImg imageUrl={imageUrl} />
            <ItemBody name={name} tag={tag} />
        </div>
    );
}