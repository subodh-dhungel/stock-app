import Navigation from '../../components/Navigation'
import { Container } from '@mui/material'
import PortfolioDialogue from '@/components/portfolio/PortfolioDialogue'
import PortfolioValue from '@/components/portfolio/PortfolioValue'
import ScripAccordion from '@/components/portfolio/ScripAccordion'
import { db } from '@/firebase/Config'
import { collection, onSnapshot } from 'firebase/firestore'
import { useState, useEffect, Fragment } from 'react'
import { delData } from '@/firebase/Firestore'

const Portfolio = () => {
  let [scripts, setScripts] = useState([])

  const handleDelete = async (index) => {
    const docId = scripts[index].id; // get the docId from the script object
    const collectionName = "Portfolio"; // replace this with your collection name
    
    try {
      await delData(collectionName, docId); // delete the document from Firestore
      const newScripts = scripts.filter((script, i) => i !== index); // delete the script from state
      setScripts(newScripts);
    } catch (error) {
      console.error("An error occurred while deleting a script", error);
    }
  }
  

  useEffect(() => {
    const colRef = collection(db, 'Portfolio');
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      const docs = snapshot.docs.map(doc => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setScripts(docs);
    });
  
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Container
        sx={{
          marginTop: 15,
        }}
      >
        <Navigation />
        <PortfolioValue data={scripts}/>

        {scripts.map((script, index) =>{
          return(<Fragment key={index}>
            <ScripAccordion onDelete={handleDelete} data={scripts} index={index} title={script.id}/>
          </Fragment>)
        })}

        <PortfolioDialogue data={scripts}/>
      </Container>
    </>
  )
}

export default Portfolio