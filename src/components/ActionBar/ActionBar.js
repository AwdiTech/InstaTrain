import ActionButton from './../ActionButton/ActionButton';
import './ActionBar.scss';

function ActionBar( mainButton, resetButton ) {

    return(
        <section className="action-bar">
            <ActionButton clickHandler={mainButton.clickHandler} resetButton={mainButton.text} />
            <ActionButton clickHandler={resetButton.clickHandler} resetButton={resetButton.text} />
        </section>
    )
}

export default ActionBar;