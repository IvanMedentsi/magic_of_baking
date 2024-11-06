import { doc, setDoc } from 'firebase/firestore';

import { database } from '../firebase'; 

export const saveUserData = async (userId, userData) => {
  try {
    await setDoc(doc(database, 'users', userId), userData);
    console.log('Дані користувача збережено');
  } catch (error) {
    console.error('Помилка при збереженні даних:', error);
  }
};