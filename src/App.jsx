import './App.css'
// import QRCode from 'react-qr-code'
import gru1 from './utils/img/gru1.jpg'
import gru2 from './utils/img/gru2.jpg'
import whatsappLogo from './utils/img/Digital_Glyph_Green.png'

function App() {

  return (
    <>
    <div>

      {/* <QRCode value="https://drive.google.com/file/d/1BJftfhAqJ1Kcs9gEal2HAyVrJ6XSR9BG/view?usp=share_link"/>
      <h2>Gru station!</h2> */}
      <div className='img-menu'>
        <img src={gru1} alt=""/>
        <img src={gru2} alt=""/>

        <div className='img-wa'>
            <a href="https://wa.me/573246803306">
              <b>Pide aqui!</b>
                <img src={whatsappLogo} alt="" />
            </a>
        </div>
      </div>



    </div>

    </>
  )
}

export default App
