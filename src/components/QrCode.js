import {Button, Stack} from 'react-bootstrap'
import QRCode from 'qrcode.react';
import logo from "../assets/img/casper.png"
import axios from 'axios';
import env from "react-dotenv";

const QrCode = ( {qrData, platforms} ) => {

    const getQRValue = () => {
        return platforms[qrData.platform](qrData);
    };

    const downloadQR = () => {
        let link = document.createElement('a');
        let canvas = document.getElementById('qr');
        link.href = canvas.toDataURL("image/png");
        link.download = 'wallet.png';
        link.click();
    };

    const copyLinkToQR = () => {
      let canvas = document.getElementById('qr');
      canvas.toBlob(function(blob) {
        const formData = new FormData();
        formData.append('image', blob);
      
        axios({
          method: "POST",
          url: `${env.IMGBB_BASE}?expiration=${env.IMGBB_EXPIRATION}&key=${env.IMGBB_API_KEY}`,
          data: formData
        }).then((response) => {
          navigator.clipboard.writeText(response.data.data.display_url);
        }).catch(err => {
          
        });
      });
    };

    return (
      <Stack direction="vertical" gap={3}>
        <div className="bg-light border">

        <QRCode id="qr"
          value={getQRValue()}
          size={300}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"L"}
          includeMargin={true}
          renderAs={"canvas"}
          imageSettings={{
            src: logo,
            x: null,
            y: null,
            height: 40,
            width: 40,
            excavate: false,
          }}
        />

        </div>
        <div className="d-grid">
          <Button onClick={() => downloadQR()} variant="outline-success" size="lg">Save QR</Button>
        </div>
        <div className=" d-grid"> 
          <Button onClick={() => {copyLinkToQR()}} variant="outline-primary" size="lg" >Copy Link</Button>
        </div>
      </Stack>
    );
}

export default QrCode;