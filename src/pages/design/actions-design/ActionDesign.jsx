import ActionAddImage from './img-action/ActionAddImage';
import ActionText from './text-action/ActionText';
import ModalTemplatesDesign from './modal-templates-design/ModalTemplatesDesign';
import ShadowBlock from '../../../components/ShadowBlock';

function ActionDesign({activeButton, closeModalTemplates}) {
    return (
        <div>
            {activeButton === 'image' && <ActionAddImage />}
            {activeButton === 'text' && <ActionText />}
            {activeButton === 'template' && <ModalTemplatesDesign closeModalTemplates={closeModalTemplates} />}
            {activeButton === 'template' && <ShadowBlock handleModalView={closeModalTemplates} />}
        </div>
    )
}

export default ActionDesign;