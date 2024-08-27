import React from 'react';
import './tab.css';

const initData = [
    {
        tabName: 'Home',
        tabContent: <div className='text'> Tab 1</div>,
        tabBgColor:'#fcaea8'

    },
    {
        tabName: 'Active',
        tabContent: <div className='text'> Tab 2</div>,
        tabBgColor:'#63eaf9'
    },
    {
        tabName: 'Profile',
        tabContent: <div className='text'> Tab 3</div>,
        tabBgColor:'#7efac4'
    }
]

export const Tab = (props) => {
    const [tabIndex, setTabIndex] = React.useState(0);
    const [bgColor, setBgColor] = React.useState(initData[0].tabBgColor);
    const [data, setData] = React.useState(initData);

    const handleDeleteTab = (index,event) => {
        event.stopPropagation();
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);

        if (newData.length === 0) {
            setData(initData);
            setTabIndex(0);
            setBgColor(initData[0].tabBgColor);
        } else {
            setTabIndex(Math.min(tabIndex, newData.length - 1));
            setBgColor(newData[Math.min(tabIndex, newData.length - 1)].tabBgColor);

        }
    };


    return <div className="tab-container">
        <div className="header">

            {
                data.map((tab, index) => {
                    const {tabName, tabContent} = tab;
                    const isActive = tabIndex === index;
                    return <div className={`tab-name ${isActive ? 'active' : ''} `}
                                onClick={() => {
                                    setTabIndex(index)
                                    setBgColor(tab.tabBgColor);
                                }}>
                        {tabName}
                        <button className="delete-tab"  onClick={(event) => handleDeleteTab(index, event)}> x </button>
                    </div>

                })
            }
        </div>

        <div className='content'  style={{backgroundColor: bgColor}}>
            {data[tabIndex].tabContent}
        </div>

    </div>
};

Tab.propTypes = {};

Tab.defaultProps = {};

