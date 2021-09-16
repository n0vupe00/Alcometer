import React from 'react'

export default function FillOptions() {
    const units = [];
    for (let i = 0;i <=20;i++) {
        units.push(i);
    }

    return (
        units.map(unit => {
            return <option value={unit}>{unit}</option>
        })
    )
}