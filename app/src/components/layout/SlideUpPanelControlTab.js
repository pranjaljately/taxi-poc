import React from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { View } from 'native-base';
import styles from '../../../styles/slideuppanelstlyes';

const SlideUpPanelControlTab = ({ selectedTabIndex, handleTabIndexChange }) => (
  <View>
    <SegmentedControlTab
      tabsContainerStyle={styles.tabsContainerStyle}
      tabStyle={styles.tabStyle}
      tabTextStyle={styles.tabTextStyle}
      activeTabStyle={styles.activeTabStyle}
      values={['Price', 'Arrival']}
      selectedIndex={selectedTabIndex}
      onTabPress={handleTabIndexChange}
    />
  </View>
);

export default SlideUpPanelControlTab;
