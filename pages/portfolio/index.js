import Navigation from '../../components/Navigation'
import { Container } from '@mui/material'
import PortfolioDialogue from '@/components/portfolio/PortfolioDialogue'
import PortfolioValue from '@/components/portfolio/PortfolioValue'
import ScripAccordion from '@/components/portfolio/ScripAccordion'
import { db } from '@/firebase/Config'
import { collection, onSnapshot } from 'firebase/firestore'
import { useState, useEffect, Fragment } from 'react'

const Portfolio = () => {
  let [scripts, setScripts] = useState([])

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
  
    // Cleanup function to unsubscribe from the snapshot listener when the component unmounts
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
            <ScripAccordion data={scripts} index={index} title={script.id}/>
          </Fragment>)
        })}
        <PortfolioDialogue data={scripts}/>
      </Container>
    </>
  )
}

export default Portfolio