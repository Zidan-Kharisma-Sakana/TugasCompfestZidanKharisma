import React, {useContext} from "react"
import { useMemesQuery } from "../generated/graphql"
import {ListMemes} from "./ListMemes"
interface MemesProps {}
import {SavedMemesContext} from '../pages/MemesProvider'


export const Memes: React.FC<MemesProps> = ({}) => {
  const search = useContext(SavedMemesContext)
  const { data, loading: memesLoading } = useMemesQuery();
  const runmemes = ()=>{
    if(search.runsearch){
      return memesLoading? 
        (
          <div>
            <img src="../static/loading.jpg" width="30%" style={{margin:"30px auto"}} />
          </div>
        )
          :<ListMemes memeArray={data.memes}/>
    } else{
      return <h3 style={{textAlign:"center"}}>Masukan Kata Kunci atau cari semua</h3>
    }
  }
  return (
      <div>
        {runmemes()}
      </div>
  )
}