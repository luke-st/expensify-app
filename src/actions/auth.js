import { firebase, googleAuthProvider } from '../firebase/firebase'

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const startLoginEmail = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

export const startEmailSignup = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut()
    }
}