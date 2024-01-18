function PopUpBox({ listOfOptions }) {

    return (
        <section className="popup-box">
            <select className="popup-box__select">
                {listOfOptions.map( option => <option value={option}>{option}</option>)}
            </select>
        </section>
    )
}

export default PopUpBox;