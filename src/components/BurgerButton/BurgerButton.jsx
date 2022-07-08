import './BurgerButton.css';

const BurgerButton = (props) => {
    const { onClick } = props;
    return (
        <button type="button" onClick={onClick} className="burger-button button button_hover">
            <span className="burger-button__line" />
            <span className="burger-button__line" />
            <span className="burger-button__line" />
        </button>
    );
}

export default BurgerButton;
