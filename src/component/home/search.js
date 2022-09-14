import React from 'react'
import { Form } from 'react-bootstrap'
import TuneIcon from '@mui/icons-material/Tune';
import './home.scss'
const Search = () => {
  return (
    <div className='search'>

<h2>Find all yours style here <span class="redheart" >&hearts;</span></h2>

<div className='searchb'>
<Form.Control  type="text" placeholder="search here...." className='searchbox'  />
</div>
<div className='filter'>
<TuneIcon className='fil'/>
</div>
    </div>
  )
}

export default Search