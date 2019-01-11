// DEPENDENCIES | IMPORTS 
import React from 'react';

// STYLE
const styles = {
    footer: {
        background: 'white',
        borderTop: '3px dashed black', 
        pading: "30px", 
        clear: "both"
    }
}

// FOOTER 
const Footer = () => (
    <div className='text-center text-black' style={styles.footer}>
        <h2> Bob's Burgers Memory Game!</h2>
        <h3> "I love you but you're all Terrible" </h3>
    </div>
)

// EXPORT 
export default Footer 