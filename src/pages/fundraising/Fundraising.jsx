import {useState} from 'react';
import './FundraisingStyles.css';
import Search from './search/Search';
import Warning from './warning/Warning';
import Tabs from './tabs/Tabs';
import SideBare from './side-bar/SideBareFundraising';

import HeaderFundraising from './table/block-tab-fundraising/HeaderFundraising';
import CardFundraising from './table/block-tab-fundraising/CardFundraising';

import HeaderSell from './table/block-tab-sell/HeaderSell';
import CardSell from './table/block-tab-sell/CardSell';

import PaginationFundraising from './pagination-fundraising/PaginationFundraising';


function Fundraising() {
    const [showSideBare, setSideBare] = useState(false);
    const [page, setPage] = useState(1);

    const initialSections = [
        {id: 1, title: 'Standard Collection (32 items)'},
        {id: 2, title: 'Headwear (12 items)'},
        {id: 3, title: 'Graduation Apparel (12 items)'},
        {id: 4, title: 'Yard Signs (12 items)'},
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
            <button
                className="burger-button-side-bare"
                onClick={() => setSideBare((prev) => !prev)}
            >
                {showSideBare ? '✕' : '☰'}
            </button>
            <div className="block-fundraising-table">
                <Search/>
                <Warning/>
                <Tabs activeTab={activeTab} onTabChange={setActiveTab}/>

                {activeTab === 'fundraise' ? (
                    initialSections.map(section => (
                        <div className="card-header-block" key={section.id}>
                            <HeaderFundraising
                                title={section.title}
                                activeTab={activeTab}
                                isListVisible={visibleSections[section.id]}
                                onToggleList={() => toggleSectionVisibility(section.id)}
                            />
                            {visibleSections[section.id] && <CardFundraising activeTab={activeTab}/>}
                        </div>
                    ))
                ) : (
                    initialSections.map(section => (
                        <div className="card-header-block" key={section.id}>
                            <HeaderSell
                                title={section.title}
                                isListVisible={visibleSections[section.id]}
                                onToggleList={() => toggleSectionVisibility(section.id)}
                            />
                            {visibleSections[section.id] && <CardSell/>}
                        </div>
                    ))
                )}
                <PaginationFundraising currentPage={page} totalPages={9} onPageChange={(p) => setPage(p)} />
            </div>
            <div className="block-side-bare">
                <SideBare showSideBare={showSideBare} activeTab={activeTab}/>
            </div>
        </div>
    )
}

export default Fundraising;