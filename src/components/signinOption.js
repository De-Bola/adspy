import React from 'react';
import '../App.css';
import { Button, Form, FormGroup, Input, Col } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';

function Signin() {

    const history = useHistory();
    // function handleRoute(){
    //     history.push('/signup')
    // }

    function onSubmit(){
        history.push('/dashboard')
    }

    return (
        <div>
            <div className="signup_page_lhs">
            </div>
            <div className="signup_page_rhs" >
                <div style={{ flexDirection: 'column', marginLeft: 375, marginBottom: 60, marginTop: 80 }}>
                    <table><tbody><tr>
                        <td><div className="signup_page_lhs_text">AD</div></td>
                        <td><div className="signup_page_lhs_text" style={styles.text_middle}>SPY</div></td>
                        <td><div className="signup_page_lhs_text" style={styles.text_end}>TOOL</div></td>
                    </tr></tbody></table>
                </div>
                <div className='signup_page_rhs_text'>
                    <Form style={{ flexDirection: 'column', marginLeft: 50, marginRight: 50 }}>
                        <FormGroup row>
                            <Input className='signup_page_rhs_text' bsSize='lg' type='email' placeholder='Email' />
                        </FormGroup>
                        <FormGroup row>
                            <Input className='signup_page_rhs_text' bsSize='lg' type='password' placeholder='Password' />
                        </FormGroup>
                        <FormGroup>
                            <a className='signup_page_rhs_text' style={{ fontSize: 20, color: 'black' }} href="www.google.com">Forgot Password?</a>
                            <Col sm={{ offset: 10 }}>
                                <Button onClick={onSubmit} className='signin_button' style={{ width: 165, fontFamily: 'Prociono', fontSize: 30 }}>Sign In</Button>
                            </Col>
                            <span className='signup_page_rhs_text' style={{ fontSize: 26, color: 'black' }}>New User,{" "}</span>
                            <Link to='/signup'>
                                <span className='signup_page_rhs_text' style={{ fontSize: 26, color: 'white', textDecoration: 'underline' }}>
                                    Register Here
                                </span>
                            </Link>
                        </FormGroup>
                    </Form>
                </div>
            </div></div>
    );
}

const styles = {
    text_middle: {
        color: "#1AFFFF",
        marginLeft: 10
    },
    text_end: {
        color: "#FF7F00",
        marginLeft: 10
    },
    button_icon: {
        width: 25,
        height: 25,
    }
}

export default Signin;