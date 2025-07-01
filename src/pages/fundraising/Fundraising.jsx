import {useState} from 'react';
import './FundraisingStyles.css';
import Search from './search/Search';
import Warning from './warning/Warning';
import Tabs from './tabs/Tabs';
import HeaderFundraising from './table/HeaderTable';
import CardFundraising from './table/CardFundraising';
import SideBare from './side-bar/SideBareFundraising';

function Fundraising() {
    const initialSections = [
        { id: 1, title: 'Standard Collection (32 items)'  },
        { id: 2, title: 'Headwear (12 items)' },
        { id: 3, title: 'Graduation Apparel (12 items)' },
        { id: 4, title: 'Yard Signs (12 items)' },
    ];

    const [activeTab, setActiveTab] = useState('fundraise');

    const [visibleSections, setVisibleSections] = useState(() =>
        initialSections.reduce((acc, section) => {
            acc[section.id] = true;
            return acc;
        }, {})
    );

    const toggleSectionVisibility = (id) => {
        setVisibleSections(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="block-fundraising">
            <div className="block-fundraising-table">
                <Search />
                <Warning />
                <Tabs activeTab={activeTab} onTabChange={setActiveTab}  />

                {initialSections.map(section => (
                    <div key={section.id}>
                        <HeaderFundraising
                            title={section.title}
                            isListVisible={visibleSections[section.id]}
                            onToggleList={() => toggleSectionVisibility(section.id)}
                        />
                        {visibleSections[section.id] && <CardFundraising />}
                    </div>
                ))}

            </div>
            <div className="block-side-bare">
                <SideBare />
            </div>
        </div>
    )
}

export default Fundraising;