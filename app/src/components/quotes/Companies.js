import React from 'react';
import { Content, List } from 'native-base';
import '../../../global';
import Company from './Company';

const Companies = ({ quotes }) => (
  <Content>
    <List>
      {quotes.map((quote, index) => (
        <Company key={index} quote={quote} />
      ))}
    </List>
  </Content>
);

export default Companies;
