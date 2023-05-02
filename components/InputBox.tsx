import React, {useRef, useState} from 'react'
import Image from "next/legacy/image";
import {useSession} from "next-auth/react";
import {initDb} from "../firebase.config";
import firebase from "firebase/compat/app";
import {CameraIcon, VideoCameraIcon, FaceSmileIcon} from "@heroicons/react/20/solid";
import {ref, uploadString, getDownloadURL} from "firebase/storage";
import {initStore} from "../firebase.config";
import PlaceHolder from "../dummy.png";
import {serverTimestamp} from "@firebase/firestore";




export default function InputBox() {

    const filePickerRef = useRef<any>([]);

    const [imgToPost, setImgToPost] = useState<any>()

    const addImg = (e: any) => {

        const reader = new FileReader();
        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent) => {
            setImgToPost(readerEvent.target?.result)
        }

    }
    const removeImage = () => {
        setImgToPost(null)
    }

    const inputRef = useRef<any>(null)

    //Data to DB logic section

    const {data: session} = useSession()

    const sendPost = (e: any) => {
        e.preventDefault()
        if (!inputRef.current.value) return;
        initDb.collection('posts').add({
            message: inputRef.current.value,
            name: session?.user?.name,
            email: session?.user?.email,
            userImg: session?.user?.image,
            timestamp: serverTimestamp()
        }).then(doc => {
            if(imgToPost) {
                const storeRef = ref(initStore, `posts/${doc.id}`)
                const uploadTask = uploadString(storeRef, `${imgToPost}`, "data_url" )
                uploadTask.then(() => {getDownloadURL(storeRef).then((url) => {
                    initDb.collection('posts').doc(doc.id).set({
                        postImg: url
                    }, {merge : true})
                    }
                )
                }).catch(() => {
                    console.log('Failed')
                })

            }
        })
        inputRef.current.value = ('')
        removeImage()
    }

    return (
        <>

            <div className={'bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-5'}>

                <div className={'flex space-x-4 p-4 items-center'}>
                    <img src={session && session.user?.image || `${PlaceHolder}`} alt={session && session.user?.image || 'no image attribute available'}
                           className={'rounded-full h-10 w-10'} />
                <div/>


                    <>
                        <form className={'flex flex-1'}>
                            <input type={'text'} ref={inputRef}
                                   placeholder={`Whats on your mind ${session?.user?.name} ?`}
                                   className={'rounded-full bg-gray-200 h-12 flex-grow px-5 focus:outline-none placeholder:sm:hidden'}/>
                            <button hidden={true} type={'submit'} onClick={sendPost}>
                                Submit
                            </button>
                        </form>

                        {imgToPost && (
                            <div onClick={removeImage} className={'flex flex-col  hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer '}>
                                <img src={imgToPost} alt="Chosen image" className={'h-10 object-contain'}/>
                                <p className={'text-xs text-red-500 text-center'}>Remove</p>
                            </div>
                        )}

                    </>
                </div>

                <div className={'flex justify-evenly p-3 border-1'}>

                    <div className={'inputIcon'}>
                        <VideoCameraIcon className={'h-7 text-red-500'} />
                        <p className={'text-xs sm:text-sm xl:text-base'}> Live video </p>
                    </div>

                    <div className={'inputIcon'} onClick={() => filePickerRef.current.click()}>
                        <CameraIcon className={'h-7 text-green-400'} />
                        <p className={'text-xs sm:text-sm xl:text-base'}> Photo|Videos  </p>
                        <input onChange={addImg} type={"file"} ref={filePickerRef} hidden={true} />
                    </div>

                    <div className={'inputIcon'}>
                        <FaceSmileIcon className={'h-7 text-yellow-300 '} />
                        <p className={'text-xs sm:text-sm xl:text-base'}> Feeling|Activity </p>
                    </div>

                </div>

            </div>


        </>
    )
}
