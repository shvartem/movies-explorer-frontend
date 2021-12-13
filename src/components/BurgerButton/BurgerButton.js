import './BurgerButton.css';

function BurgerButton(props) {
  const { onClick } = props;
  return (
    <button type="button" onClick={onClick} className="burger-button">
      <span className="burger-button__line" />
      <span className="burger-button__line" />
      <span className="burger-button__line" />
    </button>
  );
}

export default BurgerButton;
