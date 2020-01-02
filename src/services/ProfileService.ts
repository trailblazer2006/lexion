import firebase from 'firebase/app';

import { firebaseInstance } from './';

class ProfileService {
  private currentUser: firebase.User | null = null;
  private userProfile: firebase.database.Reference | null = null;

  constructor() {
    firebaseInstance.auth.onAuthStateChanged(user => {
      this.currentUser = user;
      this.userProfile = user && firebaseInstance.db.ref(`/userProfile/${user.uid}`);
    });
  }

  public async updateName(displayName: string): Promise<void> {
    await this.currentUser!.updateProfile({ displayName });
    return await this.userProfile!.update({ displayName });
  }

  public async updateEmail(newEmail: string, password: string): Promise<void> {
    const credential = firebase.auth.EmailAuthProvider.credential(this.currentUser!.email!, password);
    await this.currentUser!.reauthenticateWithCredential(credential);
    await this.currentUser!.updateEmail(newEmail);
    return await this.userProfile!.update({ email: newEmail });
  }

  public async updatePassword(newPassword: string, oldPassword: string): Promise<void> {
    const credential = firebase.auth.EmailAuthProvider.credential(this.currentUser!.email!, oldPassword);
    await this.currentUser!.reauthenticateWithCredential(credential);
    await this.currentUser!.updatePassword(newPassword);
    console.log('Password Changed');
  }
}

export default new ProfileService();
