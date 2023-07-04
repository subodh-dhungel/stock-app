import { doc, setDoc } from "firebase/firestore";
import { db } from "./Config";

async function addData(collectionName, docId, data) {
  // create a reference to the document
  const _doc = doc(db, `${collectionName}/${docId}`);

  try {
    // write data to the document
    await setDoc(_doc, data);
    console.log("Data added successfully");
  } catch (error) {
    console.error("An error occurred while adding data", error);
  }
}

export default addData