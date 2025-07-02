import './ModalTemplatesDesignStyles.css';
import ButtonClose from './ButtonClose';

function ModalTemplatesDesign({closeModalTemplates}) {
    const templates = [
        { title: "Graduation", number: 123 },
        { title: "Yard Signs", number: 123 },
        { title: "Spirit Wear", number: 123 },
        { title: "Field Day", number: 123 },
        { title: "Homecoming", number: 123 },
        { title: "Mascots", number: 123 },
        { title: "Faculty & Staff", number: 123 },
        { title: "Sports", number: 123 },
        { title: "Scouts", number: 123 },
    ];

    const photoData = [
        {
            name: 'Eagles',
            data: [
                'src/assets/T-shirt-black.png',
                'src/assets/T-shirt-grey.png',
                'src/assets/T-shirt-orange.png',
                'src/assets/T-shirt-red.png'
            ],
        },
        {
            name: 'Tigers',
            data: [
                'src/assets/T-shirt-black.png',
                'src/assets/T-shirt-grey.png',
                'src/assets/T-shirt-orange.png',
                'src/assets/T-shirt-red.png'
            ],
        },
        {
            name: 'Elephants',
            data: [
                'src/assets/T-shirt-black.png',
                'src/assets/T-shirt-grey.png',
                'src/assets/T-shirt-orange.png',
                'src/assets/T-shirt-red.png'
            ],
        },
        {
            name: 'Bears',
            data: [
                'src/assets/T-shirt-black.png',
                'src/assets/T-shirt-grey.png',
                'src/assets/T-shirt-orange.png',
                'src/assets/T-shirt-red.png'
            ],
        },
    ];

    return (
        <div className="modal-templates-design">
            <ButtonClose handleModalView={closeModalTemplates}/>
            <div className="side-bare-templates">
                <h1>Templates</h1>
                <div className="template-list">
                    {templates.map((item, index) => (
                        <div key={index} className="block-title-templates">
                            <div>{item.title}</div>
                            <div>{item.number}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="right-content-scroll">
                {photoData.map((item, index) => (
                    <div key={index}>
                        <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                        <div className="block-images-templates">
                            {item.data.map((imgPath, idx) => (
                                <div key={idx} className="block-template-img">
                                    <img
                                        src={imgPath}
                                        alt={`${item.name} ${idx + 1}`}
                                        className="rounded-lg shadow"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ModalTemplatesDesign;
