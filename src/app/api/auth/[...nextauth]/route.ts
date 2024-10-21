import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
const handler = NextAuth({
    providers: [
        Google({
            clientId: process.env.googleClientId!,
            clientSecret: process.env.googleClientSecret!
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({ user, account, profile }) {
            console.log('Sign in:', { user, account, profile });
            return true; // Or any condition to allow/disallow sign-in
        },
        async session({ session, token }) {
            console.log('Session:', { session, token });
            return session; // Customize session object
        },
    },
});

export {handler as GET,handler as POST}