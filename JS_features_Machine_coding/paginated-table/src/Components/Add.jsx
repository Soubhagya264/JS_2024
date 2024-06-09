import React, { useEffect, useRef } from "react";
import { useState } from 'react'
import { useContext } from "react";
import { DataContext } from "./context/DataContext";

export function Add() {
    const [formData, setFormData] = useState({ name: "", title: "", role: "" })

    const { data, addData } = useContext(DataContext);
    const count = useRef(1);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };
    const handleClick = () => {

        if (formData.name && formData.title && formData.role) {
            const newItem = {
                id: Date.now(),
                name: formData.name,
                title: formData.title,
                role: formData.role,
                image: (count.current % 2 == 0) ? 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80' :
                    'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'

            }
            count.current = count.current + 1;
            addData(newItem);
            setFormData({ name: "", title: "", role: "" });
            localStorage.setItem("table data", JSON.stringify(newItem))
        }
    }
    useEffect(() => {

    },);
    return (
        <>
            <h2 className="text-lg font-semibold mb-4 text-indigo-600">Employees</h2>
            <div>
                <p className="mt-1 text-sm text-indigo-400 mb-4">
                    This is a list of all employees. You can add new employees.
                </p>
            </div>
            <div className="flex w-max items-center space-x-2 md:w-1/3 mb-4">
                <input
                    className="flex h-10 w-max rounded-md border border-white/50 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="Name"
                    value={formData.name}
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                ></input>
                <input
                    className="flex h-10 w-max rounded-md border border-white/50 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="title"
                    value={formData.title}
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                ></input>
                <input
                    className="flex h-10 w-max rounded-md border border-white/50 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="role"
                    placeholder="role"
                    value={formData.role}
                    onChange={handleChange}
                    name="role"
                ></input>
            </div>
            <div>
                <button
                    type="button"
                    onClick={handleClick}
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Add new employee
                </button>
            </div>
        </>
    );
}
