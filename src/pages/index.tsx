import Head from "next/head";

import Header from "../../components/Header";

import {getServerSession} from "next-auth/next"

import Login from "../../components/Login";

import Sidebar from "../../components/Sidebar";

import Feed from "../../components/Feed";

import Widgets from "../../components/Widgets";

import {initDb} from "../../firebase.config"



export default function Home({session, posts}) {

    // console.log(session)

    if (!session) return (
        <>
            <Header/>
            <Head>
                <title> Facebook </title>
            </Head>
            <Login/>
        </>
    )


    return (

        <>
            <div className={'h-screen bg-gray-100 overflow-hidden'}>

                <Head>
                    <title> Facebook </title>
                </Head>

                {/*  Header  */}

                <Header/>

                <main className={'flex'}>

                    {/* Sidebar*/}
                    <div>

                        <Sidebar/>

                    </div>
                    {/* Feed   */}
                    <Feed posts={posts}/>

                    {/* Widgets   */}
                    <Widgets/>
                    {/*    */}

                </main>

            </div>

        </>
    )
}

export async function getServerSideProps(context) {

    const session = await getServerSession(context.req, context.res)

    // reads db stores old data updates with new
    const posts = await initDb.collection<any>('posts').orderBy('timestamp', 'desc').get()

    const docs = posts.docs.map(post => ({
        id: post.id,
        ...post.data(),
        timestamp: null

    }))

    return {
        props: {
            session,
            posts: docs

        },
    }
}



