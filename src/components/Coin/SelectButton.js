import React from 'react'

const SelectButton = ({ children, selected, onClick }) => {

    const styles = {
        border: '1px solid gold',
        borderRadius: 5,
        padding: '10px 20px',
        cursor: 'pointer',
        width: '15%',
        fontWeight: selected ? 700: 400,
        backgroundColor: selected ? 'gold' : '',
        color: selected ? 'black' : '',
    }

    return (
        <span
            className="select-button"
            style={ styles }
            onClick={ onClick }
        >
            {children}
        </span>
    )
}

export default SelectButton