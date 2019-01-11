// DEPENDENCIES | IMPORTS
import React from 'react';

// STYLE
const styles = {
    image: {
        height: '140px',
        width: '140px',
        margin: '5px'
    },
    cage: {
        height: '150px',
        width: '150px',
        background: 'lavender',
        float: 'left',
        margin: '28px',
        border: '1px solid black',
        boxShadow: '5px 10px 15px gray'
    }
}
const Body = props => (
    <div>
        <div style={styles.cage} onClick={() => props.gamelogic(props.id)}>
            <img style={styles.image} src={props.image} alt={props.charactername} />
        </div>
    </div>
)

export default Body;