import React, { useContext } from 'react';

import MenuItem from '../menu-item/menu-item.component';

import DirectoryContext from '../../contexts/directory/directory.context';

import './directory.styles.scss';

const Directory = () => {
  const sections = useContext(DirectoryContext);

  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
