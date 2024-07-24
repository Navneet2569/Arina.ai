import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";

export const getData = async (collectionName: string) => {
  const dataCollection = collection(db, collectionName);
  const dataSnapshot = await getDocs(dataCollection);
  const dataList = dataSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return dataList;
};
