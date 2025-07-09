import ActionAddImage from './img-action/ActionAddImage';
import ActionText from './text-action/ActionText';
import ModalTemplatesDesign from './templates-design/ModalTemplatesDesign';
import TemplateDesign from './templates-design/TemplateDesign';
import ShadowBlock from '../../../components/ShadowBlock';


function ActionDesign({templatesModalVisible, activeButton, closeModalTemplates}) {
    return (
        <div>
            {activeButton === 'image' && <ActionAddImage />}
            {activeButton === 'text' && <ActionText />}
            {templatesModalVisible && <ModalTemplatesDesign closeModalTemplates={closeModalTemplates} />}
            {templatesModalVisible && <ShadowBlock handleModalView={closeModalTemplates} />}
            {activeButton === 'template' && <TemplateDesign />}
        </div>
    )
}

export default ActionDesign;