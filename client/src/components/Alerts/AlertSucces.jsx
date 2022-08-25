import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const AlertSuccess = ({show,setShow}) => {
  
  return (
      <Alert show={show} variant="success">
        <Alert.Heading>Success!</Alert.Heading>
        <p>
          your product has been saved successfully
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="secondary">
            Close me y'all!
          </Button>
        </div>
      </Alert>
  );
}

export default AlertSuccess;