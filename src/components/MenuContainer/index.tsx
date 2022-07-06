import * as React from 'react'
import { motion } from 'framer-motion'
import MenuItem from '../MenuItem'
import { useRouter } from 'next/router'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const itemIds = [
  {
    name: 'Home',
    isSelected: false,
    path: '/',
    id: '',
  },
  {
    name: 'Who we are',
    isSelected: false,
    path: '/whoarewe',
    id: 'whoarewe',
  },
  {
    name: 'What we do',
    isSelected: false,
    path: '/whatarewedoing',
    id: 'whatarewedoing',
  },
  {
    name: 'Recommended projects',
    isSelected: false,
    path: '/recomended',
    id: 'recomended',
  },
  {
    name: 'Naadam',
    isSelected: false,
    path: '/naadam',
    id: 'naadam',
  },
]

export const Navigation = () => (

  <motion.ul className="m-0 flex flex-col py-5 absolute w-full" variants={variants}>
    {itemIds.map(({ name, isSelected, path }, index) => (
      <MenuItem name={name} isSelected={isSelected} key={index} path={path} />
    ))}
  </motion.ul>
)
