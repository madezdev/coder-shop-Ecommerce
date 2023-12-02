'use client'
import React, { FC } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import {  AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'

interface Props {

 }

export const ItemCounter:FC<Props> = () => {
  return (
    <Box>
        <IconButton>
            <RemoveCircleOutline />
            <Typography sx={{width:40, textAlign:'center'}}> 1 </Typography>
            <IconButton>
                <AddCircleOutline />
            </IconButton>
        </IconButton>
    </Box>
  )
}
