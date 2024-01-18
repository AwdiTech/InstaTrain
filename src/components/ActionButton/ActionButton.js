import './ActionButton.scss';

function ActionButton({ clickHandler, text }) {

    return (
        <>
            <button className="" onClick={clickHandler} text={text} />
        </>
    )
}

export default ActionButton;