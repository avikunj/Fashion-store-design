import React from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import '../viewproduct/viewproduct.scss'
const Bottommenu2 = () => {
  return (
    <div>
        <Box sx={{ width: '100%', bgcolor: 'rgb(189, 27, 73)' ,  color:"white"}}>
      <Tabs centered >
        <Tab label="Add to Bag" icon={<WorkOutlineIcon />} />
       
      </Tabs>
    </Box>
    </div>
  )
}

export default Bottommenu2