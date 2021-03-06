import React, { useContext, useEffect, useState } from "react"
import {SavedMemesContext} from '../pages/MemesProvider'


export default function MemeCard(props) {
    const [isSaved, setIsSaved] = useState(false);
    const [isShown, setIsShown] = useState(false)
    const saved = useContext(SavedMemesContext)
    const save = ()=>{
        setIsSaved(!isSaved)
        saved.toggleSaved(props)
    }
    useEffect(()=>{
        if(saved.savedID(props.title)){
            setIsSaved(true)
        }
    },[])
    const display = ()=>{
        setIsShown(true)
    }
    const unDisplay = ()=>{
        setIsShown(false)
    }
    return (
        <div onMouseOver={display} onMouseLeave={unDisplay} style={{marginTop:"40px"}}>
            <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                <h3 style={{fontSize:"1.5em", marginBottom:"5px"}}>{props.title}</h3>
                <img width="80%" style={{borderRadius:"10%"}} src={props.image_url} />
            </div>
            <div style={isShown?{padding:"0 10%"}: {display:"none"}}>
                {!isSaved? 
                (<button type="button" onClick={save} className="btn btn-primary">SAVE</button>):
                (<button type="button" onClick={save} className="btn btn-danger">REMOVE</button>)
                }
                <p style={{textAlign:"right"}}>{props.description}</p>
            </div>
        </div>
    )
}

// export default MemeCard