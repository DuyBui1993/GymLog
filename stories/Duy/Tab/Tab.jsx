import React from 'react';
import './tab.css';

const data = [
  {
    tabName: 'Home',
    tabContent: <div>Hello tab 1</div>
  },
  {
    tabName: 'Activity',
    tabContent: <div>Tab 2 awesome</div>
  },
  {
    tabName: 'Profile',
    tabContent: <div>Tab 3 yehaaw</div>
  }
]


export const Tab = (props) => {
  const [tabIndex, setTabIndex] = React.useState(0);


  return <div className="tab-container">
    <div className="tab-headers">
      {data.map((tab, index) => {
        const {tabName, tabContent} = tab;
        const isActive = tabIndex === index;

        return <div
          className={`tab-header ${isActive ? 'active' : ''}`}
          onClick={() => setTabIndex(index)}
        >
          {tabName}
        </div>
      })}

    </div>
    <div className="tab-content">
      {data[tabIndex].tabContent}
    </div>
  </div>
};

Tab.propTypes = {};

Tab.defaultProps = {};
