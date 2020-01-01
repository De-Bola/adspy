import React, { Component } from 'react';
import '../App.css';
import Icon from '@material-ui/core/Icon';
import { Button, Form, FormGroup, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'email': '',
            'password': '',
            'confirmPass': '',
            validate: {
                emailState: '',
                passwordState: '',
                confirmPasswordState: '',
            },
        }
        this.handleChange = this.handleChange.bind(this);
    }

    validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
        if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success'
        } else {
            validate.emailState = 'has-danger'
        }
        this.setState({ validate })
    }

    validatePassword(password) {
        const passRex = /^[#\w@_-]{8,20}$/;
        const { validate } = this.state

        if (!passRex.test(password.target.value)) {
            validate.passwordState = 'has-danger'
        } else {
            validate.passwordState = 'has-success'
        }

        this.setState({ validate })
    }

    validateConfirmPassword({ confirmPass}) {

        const { validate } = this.state

        if (!validate.password === confirmPass) {
            validate.confirmPasswordState = 'has-danger'
        } else {
            validate.confirmPasswordState = 'has-success'
        }
        this.setState({ validate })
    }

    handleChange = async (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        await this.setState({
            [name]: value,
        });
    }

    submitForm(e) {
        e.preventDefault();
    }

    // history = useHistory();

    // handleSubmit(e) {
    //     this.state.history.push('/signin')
    // }

    render() {
        const { email, password, confirmPass } = this.state;
        return (
            <div>
                <div className="signup_page_lhs">
                    <div className="signup_page_lhs_text_block">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="signup_page_lhs_text">AD</div>
                                    </td>
                                    <td>
                                        <div className="signup_page_lhs_text" style={styles.text_middle}>SPY</div>
                                    </td>
                                    <td>
                                        <div className="signup_page_lhs_text" style={styles.text_end}>TOOL</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="signup_page_rhs" >
                    <div style={{ flexDirection: 'column', margin: 30, alignSelf: 'center' }}>
                        <table className='signup_page_rhs_table' style={{ margin: 30, alignSelf: 'center' }}><tbody><tr>
                            <td>
                                <Button className='signup_page_rhs_button' style={{ background: '#3746D1' }}>
                                    <img src={require(`../img/facebook.png`)} alt='' style={{ ...styles.button_icon, width: 30 }}></img>
                                    <Icon className='signup_page_rhs_text' style={{ marginLeft: 10, fontSize: 20, textAlign: "center" }}>Facebook</Icon>
                                </Button>
                            </td>
                            <td>
                                <Button className='signup_page_rhs_button' style={{ background: '#FF4719' }}>
                                    <img src={require(`../img/google.png`)} alt='' style={styles.button_icon}></img>
                                    <Icon className='signup_page_rhs_text' style={{ marginLeft: 10, fontSize: 20, textAlign: "center" }}>Google</Icon>
                                </Button>
                            </td>
                        </tr>
                            <tr>
                                <td>
                                    <Button className='signup_page_rhs_button' style={{ background: '#FCAF45' }}>
                                        <img src={require(`../img/instagram.png`)} alt='' style={styles.button_icon}></img>
                                        <Icon className='signup_page_rhs_text' style={{ marginLeft: 10, fontSize: 20, textAlign: "center" }}>Instagram</Icon>
                                    </Button>
                                </td>
                                <td>
                                    <Link to='/signin'>
                                        <Button className='signup_page_rhs_button' style={{ background: '#50AAEC' }}>
                                            <img src={require(`../img/twitter.png`)} alt='' style={styles.button_icon}></img>
                                            <Icon className='signup_page_rhs_text' style={{ marginLeft: 10, fontSize: 20, textAlign: "center" }}>Twitter</Icon>
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div>
                        <Col sm={9}>
                            <Form style={{ flexDirection: 'column', marginLeft: 270 }}>
                                <FormGroup row>
                                    <Input
                                        className='signup_page_rhs_text' size='lg' type='text' placeholder='First name'
                                    />
                                </FormGroup>
                                <FormGroup row>
                                    <Input className='signup_page_rhs_text' size='lg' type='text' placeholder='Last name' />
                                </FormGroup>
                                <FormGroup row>
                                    <Input name='email' valid={this.state.validate.emailState === 'has-success'}
                                        invalid={this.state.validate.emailState === 'has-danger'}
                                        className='signup_page_rhs_text' size='lg' type='email' placeholder='Email'
                                        onChange={(e) => {
                                            this.validateEmail(e)
                                            this.handleChange(e)
                                        }} value={email} />
                                    <FormFeedback valid />
                                    <FormFeedback invalid />
                                </FormGroup>
                                <FormGroup row>
                                    <Input value={password} name='password' valid={this.state.validate.passwordState === 'has-success'}
                                        invalid={this.state.validate.passwordState === 'has-danger'}
                                        className='signup_page_rhs_text' size='lg' type='password' placeholder='Password'
                                        onChange={(password) => {
                                            this.validatePassword(password)
                                            this.handleChange(password)
                                        }} required />
                                    <FormFeedback valid />
                                    <FormFeedback invalid />
                                </FormGroup>
                                <FormGroup row>
                                    <Input value={confirmPass} name='confirmPass' valid={this.state.validate.confirmPasswordState === 'has-success'}
                                        invalid={this.state.validate.confirmPasswordState === 'has-danger'}
                                        className='signup_page_rhs_text' size='lg' type='password' placeholder='Confirm password'
                                        onChange={(confirmPass) => {
                                            this.handleChange(confirmPass)
                                        }}  onBlur={(confirmPass)=>{
                                            this.validateConfirmPassword(confirmPass)
                                        }} required />
                                    <FormFeedback valid />
                                    <FormFeedback invalid />
                                </FormGroup>
                                <Col sm={{ offset: 6 }}>
                                    <Link to='/dashboard'>
                                        <Button className='signup_page_rhs_button' style={{ background: 'black' }}>Sign up</Button>
                                    </Link>
                                </Col>
                            </Form>
                        </Col>
                    </div>
                </div>
            </div>
        );
    }
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

export default Signup;