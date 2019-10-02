import React from 'react';

const SelectTech = ({tech:{firstName, lastName}}) => {
    return (
        <option value={firstName +' '+lastName}>{firstName} {lastName}</option>
    )
}

export default SelectTech;