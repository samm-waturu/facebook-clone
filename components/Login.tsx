import React from "react";

import Image from "next/image";

/*
 -------- / REDUX MANAGEMENT STATE
 import firebase from "firebase/compat/app";
 import {login, selectUser} from "../userSlice";
import '../firebase.config'

 */

/*

//REDUX STATE USE CASE

const provider = new firebase.auth.GoogleAuthProvider()

    // const provider = new firebase.auth.FacebookAuthProvider()

    const auth = firebase.auth()

    // const dispatch = useDispatch()

    const signIn = () => {
        auth.signInWithPopup(provider).then(
            ({
                 user
             }) => {
                dispatch(login({
                    displayName: user?.displayName,
                    email: user?.email,
                    photoUrl: user?.photoURL
                }))
            }
        )
            .catch(error => alert(error.message));
    };
 */

import {signIn} from "next-auth/react";

function Login() {

    return (
        <>
            <div className={'grid place-items-center mt-24 pt-10'}>
                <Image src={'https://links.papareact.com/5me'}
                       height={'200'} width={'200'}
                       alt={'Facebook logo'}/>
                {/*<h1 onClick={() => signIn()}
                 className={'p-5 mt-10 bg-blue-500 rounded-full
                 text-white text-center cursor-pointer'}>
                 Login with facebook</h1>*/}

                <div className={'flex'}>
                    {/*
                    <button disabled={true}
                        className={'p-5 mt-10 bg-gray-400 rounded-full text-white text-center cursor-pointer'}
                        onClick={signIn}>
                        Login with Facebook
                    </button>
                    */}

                    {/*<h4>** Note: Facebook login API version has been updated, there for it's not working </h4>*/}
                    <button
                        className={'p-3 mt-10 bg-gray-600 rounded-full text-white text-center cursor-pointer'}
                        onClick={() => signIn()}>
                        Login button
                    </button>
                </div>

            </div>

        </>


    )
}

export default Login





