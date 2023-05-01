/*

// THIS IS WHERE WE INIT THE CHOSEN PROVIDERS USING TYPE SCRIPT

import EmailProvider from "next-auth/providers/email"
import AppleProvider from "next-auth/providers/apple"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    secret: process.env.SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        ]
})

 */

import NextAuth from "next-auth"

import type { NextAuthOptions } from 'next-auth'

import GoogleProvider from "next-auth/providers/google"

export const authProvider: NextAuthOptions = ({
    secret: process.env.SECRET,
    providers: [
        /*
           // OAuth authentication providers
        AppleProvider({
            clientId: process.env.APPLE_ID,
            clientSecret: process.env.APPLE_SECRET,
        }),
          // Sign in with passwordless email link
        EmailProvider({
            server: process.env.MAIL_SERVER,
            from: "<no-reply@example.com>",
        }),
         */
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),

    ],
})

export default NextAuth(authProvider)