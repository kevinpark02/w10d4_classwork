import React from 'react';

const TeaIndexItem = (props) => {

    return(
        <li>
            <ul>
                <li>flavor: {props.tea.flavor}</li>
                <li>amount: {props.tea.amount}</li>
            </ul>
        </li>
    )
}

export default TeaIndexItem;