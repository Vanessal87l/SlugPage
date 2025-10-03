import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import {mockData} from "../data.js";

export default function Home() {
    return (
        <div className="flex flex-row justify-between ">
            {mockData.map(({id, name, number, img, desc}) => (
                <div
                    key={id}
                    className="w-[350px] h-[430px] border flex items-center justify-center flex-col rounded-xl shadow-2xl shadow-gray-600">
                    <img className="w-[350px] h-[220px] rounded-xl object-cover" src={img} alt=""/>
                    <h2>Model:{name}</h2>
                    <Link to={`/product/${id}`}>Ssilka:{name}</Link>
                    <h2>Number car:{number}</h2>
                    <p>infa:{desc}</p>
                </div>
            ))}
        </div>
    )
}

