import React from 'react';
import SWcharacter_items from './SWcharacter_items';
import Spinner from '../layout/Spinner';

const SWcharacter = ({ characters, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={characterStyle}>
        {characters.map(character => (
          <SWcharacter_items key={character.name} character={character} />
        ))}
      </div>
    );
  }
};

const characterStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
  gridGap: '1rem',
};

export default SWcharacter;
