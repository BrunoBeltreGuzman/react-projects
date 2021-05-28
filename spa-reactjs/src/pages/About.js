import React from 'react';

import { Layout } from '../layout';

const lorem =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, nemo architecto aperiam rerum corrupti cum nobis accusamus perspiciatis accusantium, sit assumenda eum fugit animi earum soluta natus velit adipisci eius.';

const elements = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
];

const About = () => (
  <Layout>
    <h1 className='text-2xl'>About Page</h1>
    <ul>
      {elements.map((value, index) => {
        return (
          <li key={index} className='p-5'>
            {value}: {lorem}
          </li>
        );
      })}
    </ul>
  </Layout>
);

export default About;
