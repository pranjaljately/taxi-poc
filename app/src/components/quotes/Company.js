import React from 'react';
import { ListItem, Thumbnail, Text } from 'native-base';

const Company = ({ quote }) => (
  <ListItem>
    {/* <Thumbnail source={require('../../../assets/uber.png')} /> */}
    <Text>{quote.company}</Text>
    <Text note>{quote.cost}</Text>
  </ListItem>
);

export default Company;
