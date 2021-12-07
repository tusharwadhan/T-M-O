import { React } from 'react'
import { Button, Container, Alert, Spinner } from "react-bootstrap";
import './login.css'
import axios from 'axios'

function Login(props) {
    const CallApi = () => {
        document.getElementById('load').hidden = false

        const obj = {"email":document.getElementById('email').value , "password":document.getElementById('password').value}

        const login = async () => {
            console.log(obj);
            const response = await axios.post("https://t-m-o.herokuapp.com/login" , obj);
            if (response.status === 200) {
                next(response.data);
            }
        }
        login();

        const next = (data) => {
            if (data.status === false) {
                document.getElementById('load').hidden = true;
                document.getElementById('alert').innerHTML = data.message;
                document.getElementById('alert').hidden = false;
            }
        }
    }
    if (props.login === true) {
        return (<h1>success</h1>)
    }
    else {
        return (
            <div>
                < Alert variant='primary' id='alert' hidden={true}>
                    This is a alert—check it out!
                </Alert >
                <Container className='container1'>
                    <Button variant="primary" disabled id='load' hidden={true}>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </Button>
                    <row className='row'>

                        <h6 className='left'>Email address</h6>
                        <input type="email" placeholder="Enter email" className='leftInput' id="email" />
                        <br />
                        <p className="text-muted" style={{ textAlign: 'left', marginLeft: '-12px' }}>
                            We'll never share your email with anyone else.
                        </p>
                        <h6 className='left'>Password</h6>
                        <input type="email" placeholder="Enter Password" className='leftInput' id="password" />
                    </row>
                    <row>
                        <Button variant="primary" type="submit" onClick={() => CallApi()}>
                            Submit
                        </Button>
                    </row>
                </Container>
            </div>
        )
    }
}

export default Login