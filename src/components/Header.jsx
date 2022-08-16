import { useState } from 'react'
import QRCode from 'qrcode'
import { BsDownload } from 'react-icons/bs'

const Header = () => {

    const [url, setUrl] = useState('');
    const [qrCode, setQrCode] = useState('');

    const GenerateQRCode = () => {
        QRCode.toDataURL(url, {
            width: 800,
            margin: 1,
            color: {
                dark: '#db4574ff',
                light: '#000000ff',
            }
        }, (err, url) => {
            if (err) return console.error(err)
            console.log(url);
            setQrCode(url);
        })
    }
    return (
        <header>
            <h1> QR Generator</h1 >
            <input
                type="text"
                placeholder="Enter your text here"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <button onClick={GenerateQRCode}>Generate</button>
            {
                qrCode &&
                <>
                    <img src={qrCode} alt="Generated QR Code" />
                    <a href={qrCode} download="qrcode.png">Download <BsDownload /></a>
                </>
            }
        </header>
    )
}

export default Header