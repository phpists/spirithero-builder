import ActionAddImage from './img-action/ActionAddImage';
import ActionText from './text-action/ActionText';
import ModalTemplatesDesign from './modal-templates-design/ModalTemplatesDesign';

function ActionDesign({activeButton, closeModalTemplates}) {
    return (
        <div>
            {activeButton === 'image' && <ActionAddImage />}
            {activeButton === 'text' && <ActionText />}
            {activeButton === 'template' && <ModalTemplatesDesign closeModalTemplates={closeModalTemplates} />}
        </div>
    )
}

export default ActionDesign;