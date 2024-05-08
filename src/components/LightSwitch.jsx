import image3 from '../assets/lamp-on.png'
import image4 from '../assets/lamp-off.png'

import '../styles/Switch.css'

function Switch({ isOn, handleToggle }) {
  return (
    <>
        <section className="background__top">
        <img src={image3} alt="lights" className="background-image" />
        </section>

        <section className="switch__container">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type={"checkbox"}
      />
      </section>
    </>
  );
}

export default Switch;