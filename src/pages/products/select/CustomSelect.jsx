import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import "./CustomSelect.css";
import IconI from './IconI';

export default function CustemSelect({data , title , iconTitle}) {
    const [expanded, setExpanded] = useState(true);
    const [selectedColors, setSelectedColors] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const toggleColor = (color) => {
        setSelectedColors((prev) =>
            prev.includes(color)
                ? prev.filter((c) => c !== color)
                : [...prev, color]
        );
    };

    const visibleData = showAll ? data : data.slice(0, 5);

    return (
        <div className="w-64 p-4 border rounded-lg shadow-sm bg-white block-select">
            <div className="flex justify-between items-center" style={{display: 'flex',justifyContent: 'space-between',padding: '8px'}}>
                <span className="font-bold text-gray-800 title-select">
                    <p style={{padding: '0 5px 0 0'}}>{title}</p>
                    {iconTitle && <IconI/>}</span>
                <button  style={{cursor: 'pointer'}} onClick={() => setExpanded(!expanded)}>
                    {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
            </div>
            {expanded && (
                <div className="mt-2 space-y-2">
                    {visibleData.map(({ name, count , icon}) => (
                        <label key={name} className="flex justify-between items-center cursor-pointer block-select-value">
                            <div className="flex items-center space-x-2" style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '10px 0'
                            }}>
                                <input
                                    type="checkbox"
                                    checked={selectedColors.includes(name)}
                                    onChange={() => toggleColor(name)}
                                    className="input-select"
                                />
                                <span style={{padding: '0 5px'}} className="text-gray-700">{name}</span>
                                {icon && <IconI/>}
                            </div>
                            <span className="text-gray-600">{count}</span>
                        </label>
                    ))}
                    {/*title === 'Product Group' &&*/}
                    {data.length > 5 &&(
                    <button
                            onClick={() => setShowAll(!showAll)}
                            style={{
                                cursor: 'pointer',
                                color: "#4E008E",
                                textDecoration: 'underline',
                                marginLeft: '15px',
                                fontSize: '14px'
                            }}
                        >
                            {showAll ? 'Show Less' : 'See All'}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
