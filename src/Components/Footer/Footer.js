import React from 'react';
import './Footer.css';
import copyicon from '../../Data/Icons/copy-30.png';


function Footer() {
  return (
    <footer className="content footer-content">
      <p>Malcolm Saltzman's website</p>
      <div className="social-links">
        <p>
          Contact me at <a href="mailto:malcolm.saltzman2@gmail.com" id='email-address'>malcolm.saltzman2@gmail.com</a>
          {/* <Button id='contact-me-button'> */}
          {/* </Button> */}
        </p>
        <img src={copyicon} alt='not loading' id='copy-icon' onClick={copyToClipboard} />
        <div id="copy-popup" className="copy-popup">Copied to clipboard!</div>
      </div>
    </footer>
  );
}

async function copyToClipboard() {
  try {
    const email = document.getElementById("email-address").innerText;
    await navigator.clipboard.writeText(email);
    showCopyPopup();
  }
  catch (err) {
    console.error('Failed to copy: ', err);
  }
}

const showCopyPopup = () => {
  const popup = document.getElementById("copy-popup");
  popup.classList.add("show");
  setTimeout(() => {
    popup.classList.remove("show");
  }, 2000);
}

export default Footer;