import React, {useState} from 'react';
import './tab.css';

export const Tab = (props) => {
    const data = [
        {
            tabName: 'Arabica Mint',
            tabContent: <div>Color Arabica Mint</div>,
            bgColor: '#c1faeb'
        },
        {
            tabName: 'Jasmine Green',
            tabContent: <div>Color Jasmine Green</div>,
            bgColor: '#81c63f'
        },
        {
            tabName: 'Limonana',
            tabContent: <div>Color Limonana</div>,
            bgColor: '#0edb63'
        }
    ];

    let [value, setValue] = React.useState(data);
    const [tabIndex, setTabIndex] = useState(0);
    const [bgColor, setBgColor] = useState('#c1faeb');


    const handleDeleteTab = (indexToDelete) => {

        value = [...value.filter((_, index) => index !== indexToDelete)];
        setValue(value);

        if (value.length > 0) {
            // case first
            if (indexToDelete === tabIndex) {
                setTabIndex(indexToDelete);
                setBgColor(value[indexToDelete].bgColor);
            }

            // case last
            else if (indexToDelete === value.length) {

                setTabIndex(indexToDelete - 1);
                setBgColor(value[indexToDelete - 1].bgColor);

            } else if (indexToDelete > tabIndex) {

            }


        } else if (value.length === 0) {
            setTabIndex(0);
            setBgColor('#c1faeb');
            setValue(data);
        }


    };


    return (
        <div className="tab-container">
            <div className="tab-headers">
                {value.map((item, index) => (
                    <div
                        key={index}
                        className={`tab-header ${tabIndex === index ? 'active' : ''}`}
                        onClick={() => {
                            setTabIndex(index);
                            setBgColor(item.bgColor);
                        }}
                    >
                        {item.tabName}
                        <button onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteTab(index)
                        }
                        }>x
                        </button>
                    </div>
                ))}
            </div>
            <div style={{backgroundColor: bgColor}} className="tab-content">
                {value[tabIndex].tabContent}
            </div>
        </div>
    );
};

Tab.propTypes = {};

Tab.defaultProps = {};