import React, { Component, useState } from 'react';

const SavedMemesContext = React.createContext(null);
export default function MemesProvider(props) {
    const [savedMemes, setSavedMemes] = useState([])
    const [savedMemesTitle, setSavedMemesTitle] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [run, setRun] = useState(false)
    
    return (
        <SavedMemesContext.Provider value={
            {
                memeid: savedMemes,
                toggleSaved: (meme)=>{
                    if(!savedMemesTitle.includes(meme.title)){
                        setSavedMemes([...savedMemes, meme])
                        setSavedMemesTitle([...savedMemesTitle, meme.title])
                    } else{
                        setSavedMemes([...savedMemes.filter(el=> el.title != meme.title)])
                        setSavedMemesTitle(savedMemesTitle.filter(el =>el!= meme.title ))
                    }
                },
                savedID: (title)=>{
                    return savedMemesTitle.includes(title)
                },
                setTerm: (term)=>{
                    setSearchTerm(term.toLowerCase())
                    // setRun(true)
                },
                run: (bool)=>{
                    setRun(bool)
                },
                term:searchTerm,
                runsearch:run,
                searchTerm: (title, desc)=>title.includes(searchTerm) || desc.includes(searchTerm),
                log: ()=>{console.log(savedMemes);console.log(savedMemesTitle)}                
            }
            }>
            {props.children}
        </SavedMemesContext.Provider>
    )
}
const MemesConsumer = SavedMemesContext.Consumer;
export { MemesConsumer, SavedMemesContext };