import React from "react";

export default function ItemImg({imageUrl}){
    return (
        <div className="contact-item__image">
            <img src={imageUrl} alt="avatar" />
        </div>
    );
}