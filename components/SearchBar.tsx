import React, {useState, useContext, useEffect} from 'react';
import {SavedMemesContext} from '../pages/MemesProvider'
interface data {}

export const SearchBar: React.FC<data> = (props) => {
  const saved = useContext(SavedMemesContext)
  const [term, setTerm] = useState("")
  useEffect(()=>{
      saved.setTerm("")
      saved.run(false)
  },[])

  const set = (e)=>{
    e.preventDefault()
    saved.setTerm(term)
    saved.run(true)
  }
  const all = (e)=>{
      saved.setTerm('')
      saved.run(true)
      setTerm('')
  }
  return (
    <div style={{display:"flex", justifyContent:"center", margin:"50px auto"}}>
      <form onSubmit={set} className="ui form" style={{border:"2px solid green", borderRadius:"5%"}}>
        <div className="field" >
          <input
          placeholder="Search Meme"
            type="text"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        <button className="btn btn-outline-success" type="submit" onSubmit={set}>Search</button>
        </div>
      </form>
      <button className="btn btn-outline-success" type="submit" onClick={all} >Search Semua Meme</button>
    </div>
  )
}

