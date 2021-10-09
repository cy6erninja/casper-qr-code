import {InputGroup, Button, FormControl, ButtonGroup, ToggleButton} from 'react-bootstrap';
import {useState} from 'react';
import {useAlert} from 'react-alert'
import {Signer} from 'casper-js-sdk';

const ConfigInputs = ( {onInputChange, platforms} ) => {
    const [radioValue, setRadioValue] = useState('cspr.live');
    const alert = useAlert();
      
    const useSignerToFetchPublicKey = async () => {
        try {
            let isConnected = await Signer.isConnected();
            if (!isConnected) {
                Signer.sendConnectionRequest();
                
                return;
            }
        
            let publicKey = await Signer.getActivePublicKey();
            document.getElementById('address').value = publicKey;
        } catch (e) {
            alert.show(e.message);
        }
    };

    return (
        <div className="config-inputs" style={{"marginTop": "20px"}}>
            <ButtonGroup id="platform" className="mb-2">
                {Object.keys(platforms).map((radio) => (
                <ToggleButton
                    key={radio}
                    id={`radio-${radio}`}
                    type="radio"
                    variant="outline-danger"
                    name="radio"
                    value={radio}
                    checked={radioValue === radio}
                    onChange={ (e) => {setRadioValue(e.currentTarget.value); onInputChange(e)} }
                >
                    {radio}
                </ToggleButton>
                ))}
            </ButtonGroup>

            <InputGroup className="mb-3" >
                <Button 
                    variant="danger" 
                    size="lg"
                    onClick={useSignerToFetchPublicKey}
                > 
                    Use Signer
                </Button>
                <FormControl 
                    id="address"
                    size="lg" 
                    placeholder="Recipient's address"
                    aria-label="Recipient's address"
                    aria-describedby="basic-addon2"
                    autocomplete="off"
                    onChange = { (e) => {onInputChange(e)} } 
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl 
                    id="amount"
                    size="lg" 
                    type="number"
                    placeholder="Amount to receive" 
                    aria-label="Casper amount" 
                    autocomplete="off"
                    onChange = { (e) => {onInputChange(e)} }
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <FormControl 
                    id="transfer-id"
                    size="lg" 
                    placeholder="Transfer ID (Memo)"
                    aria-label="Transfer ID (Memo)"
                    autocomplete="off"
                    onChange = { (e) => {onInputChange(e)} }
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <FormControl 
                    id="message"
                    size="lg" 
                    placeholder="Message"
                    aria-label="Message"
                    autocomplete="off"
                    onChange = { (e) => {onInputChange(e)} }
                />
            </InputGroup>
        </div>
    );
};

export default ConfigInputs;