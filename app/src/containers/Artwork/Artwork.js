import React from 'react';


class Artwork extends React.Component {
    constructor(props) {
        super(props);

        state: { }
    }

    render() {
        return (
            <div style={{ border: '2px solid #000000', padding: '5px', display: 'flex', flexDirection: 'row' }}>
                <p>Artwork Container</p>
                <div style={{ border: '2px solid #000000', padding: '5px' }}>
                    Artwork Nifty Hierarchy
                </div>
                <div style={{ border: '2px solid #000000', padding: '5px' }}>
                    <div style={{ border: '2px solid #000000', padding: '5px' }}>Title</div>
                    <div style={{ border: '2px solid #000000', padding: '5px' }}>Artwork Preview</div>
                    <div style={{ border: '2px solid #000000', padding: '5px' }}>Description</div>
                    <div style={{ border: '2px solid #000000', padding: '5px' }}>Social Ranking Info/Score</div>
                    <div style={{ border: '2px solid #000000', padding: '5px' }}>Price/Buy/Bid</div>
                </div>
            </div>
        );
    }
}

export default Artwork;