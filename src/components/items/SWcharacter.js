import React, { Component } from 'react';
import SWcharacter_items from './SWcharacter_items';

class SWcharacter extends Component {
  render() {
    return (
      <div style={characterStyle}>
        {this.props.characters.map(character => (
          <SWcharacter_items key={character.name} character={character} />
        ))}
      </div>
    );
  }
}

const characterStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
  gridGap: '1rem',
};

export default SWcharacter;
