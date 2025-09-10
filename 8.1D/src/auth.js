import { auth, onAuthStateChanged, signInAnonymously } from './firebase';

export function ensureAuth(cb) {
  return onAuthStateChanged(auth, async (user) => {
    if (!user) await signInAnonymously(auth);
    cb(auth.currentUser);
  });
}
