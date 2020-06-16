import firebase from 'firebase/app';
import 'firebase/auth';
import {firebaseConfig} from "./initFirebase";

firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth;

export enum AuthProvider {
    EMAIL,
    FACEBOOK,
    GOOGLE,
    TWITTER,
}

export type UserForm = {
    email: string,
    password: string
}

export interface UserInfo extends  firebase.User {

}

export class FirebaseHelper {
    static token = async () => {
        const user = FirebaseHelper.user()
        if (user) {
            return await user.getIdToken();
        } else {
            return null;
        }
    }

    static user() {
        return firebaseAuth().currentUser;
    }

    static async signIn(provider: AuthProvider, info: UserForm) {
        switch (provider) {
            case AuthProvider.EMAIL:
                return firebaseAuth().signInWithEmailAndPassword(
                    info.email,
                    info.password
                );
        }
    }

    static signOut() {
        return firebaseAuth()
            .signOut()
    }

    static signUp(provider: AuthProvider, info: UserForm) {
        switch (provider) {
            case AuthProvider.EMAIL:
                return firebaseAuth().createUserWithEmailAndPassword(
                    info.email,
                    info.password
                );
        }
    }

    static resetPassword(email: string) {
        return firebaseAuth().sendPasswordResetEmail(email);
    }

    static updatePassword(password: string) {
        firebaseAuth().currentUser?.updatePassword(password);
    }

}
