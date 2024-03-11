import React, {Component} from "react";
import './app.css'
import {Title} from "../title/title";
import Input from "../input/input";
import {Logo} from "../logo/logo";

export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            formObj: {
                firstname: null,
                lastname: null,
                streetAddr1: null,
                streetAddr2: null,
                city: null,
                state: null,
                postal: null,
                phone: null,
                email: null
            }
        }
    }



    setValueToObj = ({field, value}) => {
        this.setState(({formObj}) => ({
            formObj: {
                ...formObj,
                [field]: value
            }
        }));
    }

    sendForm = (e) => {
        e.preventDefault()
        console.log(this.state.formObj);
    }

    render() {
        const isFormComplete = Object.values(this.state.formObj).every(value => value);

        return (
            <form onSubmit={this.sendForm}  className={'main-form'}>
                <div className={'logo-block'}>
                    <Logo />
                </div>
                <div className={'main-form-part full'}>
                    <div className={'structure-block full'}>
                        <Title title={'Full name'}/>
                        <div className={'input-block'}>
                            <Input setValueToObj={this.setValueToObj} label={'First Name'} id={'firstname'}/>
                            <Input setValueToObj={this.setValueToObj} label={'Last Name'} id={'lastname'}/>
                        </div>
                    </div>
                    <div className={'structure-block full'}>
                        <Title title={'Address'}/>
                        <Input setValueToObj={this.setValueToObj} id={'streetAddr1'} label={'Street Address'}/>
                        <Input setValueToObj={this.setValueToObj} id={'streetAddr2'} label={'Street Address Line 2'}/>
                        <div className={'input-block'}>
                            <Input setValueToObj={this.setValueToObj} id={'city'} label={'City'}/>
                            <Input setValueToObj={this.setValueToObj} id={'state'} label={'State / Province'}/>
                        </div>
                        <Input setValueToObj={this.setValueToObj} id={'postal'} label={'Postal / Zip Code'}/>
                    </div>
                    <div className={'structure-block half'}>
                        <Title title={'Phone number'}/>
                        <Input usePhoneMask={true} setValueToObj={this.setValueToObj} id={'phone'}/>
                    </div>

                    <div className={'structure-block half'}>
                        <Title setValueToObj={this.setValueToObj} title={'E-mail'}/>
                        <Input setValueToObj={this.setValueToObj} id={'email'} type={'email'}/>
                    </div>
                </div>
                <div className={'horizontalLine'}/>
                <div className={'main-form-part'}>
                    <button type={'submit'}
                            className={!isFormComplete ? 'inactive' : ''}
                            disabled={!isFormComplete}
                    > Submit</button>
                </div>
            </form>
        )
    }
}