import './SaleSettingsStyles.css';
import FirstStep from './steps-settings/step1/FirstStep';
import SecondStep from './steps-settings/step2/SecondStep';
import ThirdStep from './steps-settings/step3/ThirdStep';
import FourthStep from './steps-settings/step4/FourthStep';
import FifthStep from  './steps-settings/step5/FifthStep';

function SaleSettings() {
    return (
            <div className="sale-settings">
                <h1>
                    Organize, Schedule & Personalize Your Flash Sale
                </h1>
                <div className="block-info-button">
                    <p>
                        Configure how your orders will be grouped, shipped, and fulfilled after the flash sale ends. <br/>
                        You can also set your fundraising goal and schedule when the sale should close.
                    </p>
                    <button className="sale-settings-button">
                        Preview store
                    </button>
                </div>

                <FirstStep />
                <SecondStep />
                <ThirdStep />
                <FourthStep />
                <FifthStep />
            </div>

    )
}

export default SaleSettings;