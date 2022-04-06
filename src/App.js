import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import ProgramAvailable from './Components/programAvailable.js'
import HomeFooter from './Components/homeFooter.js'
import Copywrite from './Components/copywrite.js'
import NavBar from './Components/navBar.js'
import { Container } from 'react-bootstrap';
<link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Poppins:wght@500&family=Roboto&display=swap" rel="stylesheet"></link>

const App = () => {
  return (
    <div>
      <div className="app">
        <div className="page">
          <div className="header">
              <div><img className="baner" src="Img/headerslider.png" /></div>
          </div>
          <div classname="succesStory">
            <div>
              <p>Berkat Bantuan Anda</p>
            </div>
            <div className="frame">
                <div className="f1"><img src="Img/Frame390.png" /></div>
                <div className="f1"><img src="Img/Frame390.png" /></div>
            </div>
          </div>
          <div className="programList">
            <div className="bantuan">
              <p>Bantuan Sesama Sekarang</p>
            </div>
            <div>
              <ProgramAvailable
                title="Buka Puasa Sehat untuk Pejuang Jalanan Bandung"
                type="Umum"
                progress={60}
                dana="43.768.000"
                sisaHari={29}
              />
              <ProgramAvailable
                title="Buka Puasa Sehat untuk Pejuang Jalanan Bandung"
                type="Ramadhan"
                progress={90}
                dana="43.768.000"
                sisaHari={29}
              />
              <ProgramAvailable
                title="Buka Puasa Sehat untuk Pejuang Jalanan Bandung"
                type="Pendidikan"
                progress={30}
                dana="43.768.000"
                sisaHari={29}
              />
              <div className="more">Muat Lebih Banyak</div>
            </div>
          </div>
          <div className="newsLetter">
            <p>Kenali kami lebih jauh</p>
            <div className="captionNL">
              Dapatkan informasi menarik seputar pedalaman langsung dikirim ke inbox Anda hari ini.
            </div>
            <div className="formNL">
              <Form.Control className="formNLdetail" type="text" placeholder="Nama Lengkap" />
              <br/>
              <Form.Control className="formNLdetail" type="text" placeholder="Email" />
            </div>
            <img className="btnNL" src="Img/buttonNL.png" />
          </div>
          <HomeFooter />
          <img className="btn-green" src="Img/hubungi-kami.png" />
          <Copywrite />
          <NavBar />
        </div>
      </div>
    </div>
  )
}

export default App;
