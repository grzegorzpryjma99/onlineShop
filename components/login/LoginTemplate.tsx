import React, {useRef} from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import {InputText} from "primereact/inputtext";
import ActionButton from "@/components/common/button/ActionButton";
import UnderlineButton from "@/components/common/button/UnderlineButton";
import {Password} from "primereact/password";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ActionBorderButton from "@/components/common/button/ActionBorderButton";
import {Toast} from "primereact/toast";

const LoginTemplate = () => {
    const toast = useRef<Toast>(null);

    const notImplementedFunction = () => {
        toast.current?.show({
            severity: 'success',
            summary: 'Sorry',
            detail: 'Function not implemented :(',
            life: 3000
        });
    }

    return <div className='global-center'>
        <Toast ref={toast}/>
        <div className='login-container'>
            <Link href='/'><Image className='logo' src={logo} alt='logo'/></Link>
            <h2>Sign in</h2>
            <div className='login-inputs'>
                <InputText placeholder='Login'/>
                <Password feedback={false} inputStyle={{width: '100%'}} placeholder='Password'/>
                <ActionButton actionFunction={notImplementedFunction} style={{width: '100%', margin: 0}} label='Login'/>
            </div>
            <p className='description'>Or login with</p>
            <div className='login-buttons'>
                <ActionBorderButton actionFunction={notImplementedFunction}
                                    icon={<FontAwesomeIcon icon={faCartShopping}/>} divStyle={{width: '45%', margin: 0}}
                                    style={{width: '100%', margin: 0}} label='Facebook'/>
                <ActionBorderButton actionFunction={notImplementedFunction}
                                    icon={<FontAwesomeIcon icon={faCartShopping}/>} divStyle={{width: '45%', margin: 0}}
                                    style={{width: '100%', margin: 0}} label='Google'/>
            </div>
            <span className='shopping-info-section'/>
            <div className='login-register'>
                <p className='description'>Not a member? &nbsp;</p>
                <UnderlineButton actionFunction={notImplementedFunction} label='Sign up now'/>
            </div>

        </div>
    </div>
}

export default LoginTemplate;