import React from 'react'
import { Button, Container, Alert } from "react-bootstrap";
import './login.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

class Login extends React.Component {
    state = {
        isLoading: false
    }
    handleClick = (load) => this.setState({ isLoading: load });
    render() {

        const { isLoading } = this.state;

        const hideAlert = () => {
            document.getElementById('alert').hidden = true;
        }
        const CallApi = () => {
            this.handleClick(true)

            const obj = { "email": document.getElementById('email').value, "password": document.getElementById('password').value }

            const login = async () => {
                const response = await axios.post("https://t-m-o.herokuapp.com/login", obj,{
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    withCredentials:true 
                });
                if (response.status === 200) {
                    next(response.data);
                }
            }
            login();

            const next = (data) => {
                if (data.status === false) {
                    this.handleClick(false)
                    document.getElementById('alert').innerHTML = data.message;
                    document.getElementById('alert').hidden = false;
                }
                else {
                    this.handleClick(false)
                    toast(data.message);
                    this.props.isLog(true);
                }
            }
        }
        return (
            <div>
                < Alert variant='primary' id='alert' hidden={true}>
                    This is a alert—check it out!
                </Alert >
                
                <Container className='container1'>
                <h1>Login</h1>
                    <row className='row'>

                        <h6 className='left'>Email address</h6>
                        <input type="email" placeholder="Enter email" className='leftInput' id="email" onChange={() => hideAlert()} />
                        <br />
                        <p className="text-muted" style={{ textAlign: 'left', marginLeft: '-12px' }}>
                            We'll never share your email with anyone else.
                        </p>
                        <h6 className='left'>Password</h6>
                        <input type="password" placeholder="Enter Password" className='leftInput' id="password" onChange={() => hideAlert()} />
                    </row>
                    <row>
                        <Button
                            variant="primary"
                            disabled={isLoading}
                            onClick={() => CallApi()}
                        >
                            {isLoading ? 'Loading…' : 'Submit'}
                        </Button><br /><br />
                        <p className='register'>New Users can <Link to='/register'>Register Here</Link></p>
                    </row>
                </Container>



            </div>
        )

    }
}

export default Login