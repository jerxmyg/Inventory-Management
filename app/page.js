'use client'
import Image from "next/image";
import {useState, useEffect} from 'react'
import { collection, getDocs, query } from 'firebase/firestore'
import {firestore} from '@/firebase'
import { Box, Modal, Typography, Stack } from '@mui/material'

export default function Home() {
  const [inventory, setInventory] = useState([])
  const [open, setOpen] = useState(false)
  const {itemName, setItemName} = useState(' ')

  const updateInventory = async () => {
    const snapshot = query(collection(firestore, 'inventory'))
    const docs = await getDocs(snapshot)
    const inventoryList = []
    docs.forEach((doc)=> {
      inventoryList.push({
        name: doc.id,
        ...doc.data(),
      })
    })
    setInventory(inventoryList)
    }
  
  const removeItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item)
    const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        const {quantity} = docSnap.data()
        if (quantity === 1) {
          await deleteDoc(docref)
        }
        else {
          await setDoc(docRef, {quantity: quantity - 1})
        }
      }
      await updateInventory()
    }


  const addItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const {quantity} = docSnap.data()
      await setDoc(docRef, {quantity: quantity + 1})
        }  
    else {
      await setDoc(docRef, {quantity: 1})
      }
    await updateInventory()
      }
      
    

  useEffect(() => {
    updateInventory()
  }, [])

const handleOpen = () => setOpen(true) 
const handleClose = () => setOpen(false) 


  return ( 
  <Box 
  width="100vw" 
  height="100vh" 
  display ="flex" 
  justifyContent="center" 
  alignItems="center"
  gap={2}
  >
    <Modal open={open} onClose={handleClose}>
       <Box positon="absolute" 
       top="50%"
       left="50%"
       transform="translate(-50%,-50%)"
       width={400}
       bgcolor="white"
       border="2px solid #000"
       boxShadow={24}
       padding={4}
       display="flex"
       flexDirection="column"
       gap={3}
       >
        <Typography></Typography>
       </Box>
    </Modal>
    <Typography variant="h1">Inventory Management</Typography>
  </Box>
  )
}
