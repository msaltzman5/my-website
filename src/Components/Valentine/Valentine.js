import "./Valentine.css";
// import Button from 'react-bootstrap/Button';
import beargivingheart from '../../Data/bear-giving-heart.gif';



function Valentine() {
  return (
    <div id='valentine' className='valentine-content'>
      <div className="bear-giving-heart">
        <img src={beargivingheart} alt="Sorry, I'm not loading" className="bear-giving-heart-gif"/>
      </div>
      <div className="valentine-buttons-container">
        <button variant="outlined" className="no-button">No</button>
        <button variant="outlined" className="yes-button">Yes</button>
      </div>
    </div>
  );
}

export default Valentine;