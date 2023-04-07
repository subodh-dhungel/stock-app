import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Homepage from './home'

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <>
      <Homepage />
    </>
  )
}
