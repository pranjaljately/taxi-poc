import React, { useState } from 'react';
import { View } from 'react-native';
import SlideUpPanelControlTab from './SlideUpPanelControlTab';
import Companies from '../quotes/Companies';

const SlideUpContent = ({ quotes }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabIndexChange = index => {
    setSelectedTabIndex(index);
  };

  return (
    <View>
      <SlideUpPanelControlTab
        selectedTabIndex={selectedTabIndex}
        handleTabIndexChange={handleTabIndexChange}
      ></SlideUpPanelControlTab>
      <Companies quotes={quotes} />
    </View>
  );
};
export default SlideUpContent;
