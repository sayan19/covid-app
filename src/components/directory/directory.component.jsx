import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'symptom check',
          imageUrl: 'https://media.healthdirect.org.au/images/inline/original/covid-cold-flu-symptoms-bd24a5.png',
          id: 1,
          linkUrl: 'symptomcheck'
        },
        {
          title: 'testing locations',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmc0Gfc6YB899Cda1OVgQpIcHRMn3ShITMWw&usqp=CAU',
          
          id: 2,
          linkUrl: 'testinglocations'
        },
       
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;