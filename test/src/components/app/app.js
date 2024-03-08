import React from "react";
import './app.css'
import {Input} from "../input/input";
import {Title} from "../title/title";

export const App = () => {
    return (
        <form className={'main-form'}>
            <div className={'main-form-part full'}>
                <div className={'structure-block full'}>
                    <Title title={'Full name'}/>
                    <div className={'input-block'}>
                        <Input label={'First Name'} id={'firstname'}/>
                        <Input label={'Last Name'} id={'lastname'}/>
                    </div>
                </div>
                <div className={'structure-block full'}>
                    <Title title={'Address'}/>
                    <Input id={'streetAddr1'} label={'Street Address'}/>
                    <Input id={'streetAddr2'} label={'Street Address Line 2'}/>
                    <div className={'input-block'}>
                        <Input id={'city'} label={'City'}/>
                        <Input id={'state'} label={'State / Province'}/>
                    </div>
                    <Input className={'postal'} label={'Postal / Zip Code'}/>
                </div>
                <div className={'structure-block half'}>
                    <Title title={'Phone number'}/>
                    <Input id={'phone'}/>
                </div>

                <div className={'structure-block half'}>
                    <Title title={'E-mail'}/>
                    <Input id={'email'} type={'email'}/>
                </div>
            </div>
            <div className={'horizontalLine'}/>
            <div className={'main-form-part'}>
                <button type={'submit'}> Submit </button>
            </div>
        </form>
    )
}