import React from "react";
import {mockData} from "../data.js";
import {useParams} from "react-router-dom";



export default function SlugPage() {
    const {id} = useParams()
    let product = mockData.find(product => product.id === +id)

    console.log(product);
    return (
        <>
            <img className="w-[550px] h-[350px] rounded-3xl object-cover" src={product.img} alt=""/>
            <h1 className="text-xl m-6">Model car:{product.name}</h1>
            <h1 className="text-xl m-6">Car number:{product.number}</h1>
            <h1 className="text-xl m-6"> ID:{product.id}</h1>
            <p className="text-xl m-6">Infa:{product.desc}</p>
        </>
    )
}

