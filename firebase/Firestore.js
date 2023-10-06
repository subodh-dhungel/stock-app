import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "./Config";

export async function addData(collectionName, docId, data) {
  // create a reference to the document
  const _doc = doc(db, `${collectionName}/${docId}`);

  try {
    // write data to the document
    await setDoc(_doc, data);
  } catch (error) {
    console.error("An error occurred while adding data", error);
  }
}

export async function delData(collectionName, docId) {
  await deleteDoc(doc(db, collectionName, docId));
}