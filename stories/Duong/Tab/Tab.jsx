import React from "react";
import './tab.css';

const data = [
    {
        tabName: 'Facebook',
        tabContent: <div className="facebook">HELLO FACEBOOK</div>
    },
    {
        tabName: 'Youtube',
        tabContent: <div className="youtube">HELLO YOUTUBE</div>
    },
    {
        tabName: 'Instagram',
        tabContent: <div className="instagram">HELLO INSTAGRAM</div>
    }
]

export const Tab = (props) => {
    const [tabIndex, setTabIndex] = React.useState(0);

    return <div className="tab-container">
        <div className="tab-headers">
            {data.map((tab, index) => {
                const {tabName, tabContent} = tab;
                const isActive = tabIndex === index;

                return <div className={`tab-header ${isActive ? 'active' : ''}`}
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
}

Tab.prototype = {};
Tab.defaultProps = {};