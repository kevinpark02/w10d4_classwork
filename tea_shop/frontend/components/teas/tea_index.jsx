import React from 'react';
import TeaIndexItem from './tea_index_item';
import TeaForm from './team_form';


const TeaIndex = ({teas, callReceiveTea}) => {
    return (
        <div>
            <h1>THE TEA INDEX</h1>
            <ul>
                {teas.map((tea, idx) => (
                    <TeaIndexItem tea={tea}
                                    key={idx}/>
                ))}
            </ul>

            <TeaForm callReceiveTea={callReceiveTea} />
        </div>
    )
}

export default TeaIndex;