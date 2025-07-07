import './header/HeaderStyle.css';
function ShadowBlock({handleModalView}) {
    return (
        <div onClick={() => handleModalView()} className="shadow-block">

        </div>
    )
}

export default ShadowBlock;