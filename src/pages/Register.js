import React from 'react'
import './register.css'
import { Form, Row, Col, Button, Container ,Alert} from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Register extends React.Component {

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

            const obj = {
                "name": document.getElementById('name').value,
                "ph_no": document.getElementById('phNo').value,
                "email": document.getElementById('email').value,
                "res_name": document.getElementById('resName').value,
                "tables": document.getElementById('tables').value,
                "password": document.getElementById('password').value
            }

            const login = async () => {
                const response = await axios.post("https://t-m-o.herokuapp.com/users", obj);
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
                    document.getElementById('alert').innerHTML = data.message;
                    document.getElementById('alert').hidden = false;
                    this.props.isLog(true);
                }
            }
        }
        return (
            <div>
                < Alert variant='primary' id='alert' hidden={true}>
                    This is a alert—check it out!
                </Alert >

                <Container className='container2'>
                    <Form>
                        <h1>Register</h1>
                        <Row className="mb-3">
                            <Form.Group controlId="name">
                                <Form.Label className='leftText'>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" onChange={()=>hideAlert()}/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group controlId="email">
                                <Form.Label className='leftText'>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" onChange={()=>hideAlert()} />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-33" controlId="phNo">
                            <Form.Label className='leftText'>Phone No</Form.Label>
                            <Form.Control placeholder="ph no" onChange={()=>hideAlert()}/>
                        </Form.Group>
                        <br />
                        <Form.Group className="mb-33" controlId="resName">
                            <Form.Label style={{ marginLeft: '-198px'}}>Restaurant Name</Form.Label>
                            <Form.Control placeholder="Name Of Restaurant" onChange={()=>hideAlert()}/>
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="tables">
                                <Form.Label style={{ marginLeft: '-90px' }} >Tables</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>No of tables</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="password">
                                <Form.Label style={{ marginLeft: '-65px' }}>Password</Form.Label>
                                <Form.Control type="password" placeholder="pass" onChange={()=>hideAlert()}/>
                            </Form.Group>
                        </Row>
                        <Button style={{marginLeft:'-225px'}}
                            variant="primary"
                            disabled={isLoading}
                            onClick={() => CallApi()}
                        >
                            {isLoading ? 'Loading…' : 'Submit'}
                        </Button>
                        <p className='login'>Have account ? :<Link to='/'>Login Here</Link></p>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default Register