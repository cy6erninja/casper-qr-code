import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import {useState} from 'react';
import Header from './components/Header';
import ConfigInputs from './components/ConfigInputs';
import QrCode from './components/QrCode';

function App() {
  const platforms = {
      'cspr.live': (qrData) => `https://${qrData.platform}/transfer?recepient=${qrData.address}&amount=${qrData.amount}&transferId=${qrData.transferId}&message=${qrData.message}`,
      'mobile': (qrData) => `casper:${qrData.address}?amount=${qrData.amount}&transferId=${qrData.transferId}&message=${qrData.message}`
  };

  const [qrData, setQrData] = useState({
    platform: 'cspr.live',
    address: '',
    amount: '',
    transferId: '',
    message: '',
  });

  //On Input Change
  const onInputChange = (e) => {
    setQrData(
      {
        platform: document.querySelector('#platform .btn-check:checked').value,
        address: document.getElementById('address').value,
        amount: document.getElementById('amount').value,
        transferId: document.getElementById('transfer-id').value,
        message: document.getElementById('message').value,
      }
    );
  };

  return (
    <Container fluid>
      <Row>
        <Col style={{"textAlign": "center"}}><Header/></Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto" sm="auto" md="auto" lg="auto">
          <QrCode qrData={qrData} platforms={platforms}/>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col ></Col>
        <Col lg={8}><ConfigInputs onInputChange={onInputChange} platforms={platforms}/></Col>
        <Col ></Col>
      </Row>
  </Container>
  );
}

export default App;
