import React, { useState, useContext } from "react"
// interface dataMemes {memeArray: any}
import MemeCard from './MemeCard'
import {SavedMemesContext} from '../pages/MemesProvider'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
const ListMemes = (props) => {
  const saved = useContext(SavedMemesContext)

  const renderedItems = props.memeArray.map((item,index) => {
    if(saved.searchTerm(item.title.toLowerCase(), item.description.toLowerCase())){
      return (
        <React.Fragment key={item.title}>
              <MemeCard 
              id={index} 
              title={item.title}
              image_url={item.image_url}
              description={item.description}
              />
        </React.Fragment>
    );}
  });

  return (
    <div >
    <ResponsiveMasonry
    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
    <Masonry>
    {renderedItems}
    </Masonry>
</ResponsiveMasonry>
    </div>)

};

export default ListMemes;


// BUAT AGAR LISTMEMES MENYELEKSI
// MEME YG DITAMPILKAN