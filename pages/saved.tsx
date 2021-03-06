import Head from "next/head"
import React from 'react'
import {MemesConsumer, SavedMemesContext} from './MemesProvider'
import Link from 'next/link'
import {NavBar} from '../components/NavBar'
import {ListMemes} from '../components/ListMemes'
import {Footer} from '../components/Footer'

export default function Saved(prop) {
return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous"></link>
      </Head>
      <main style={{minHeight:"80vh", paddingBottom:"10vh"}}>
        <NavBar/>
          <MemesConsumer>
              {(m)=>{
                if(m.memeid.length>0){
                  console.log(m.memeid)
                  return (
                    <React.Fragment>
                      <h1 style={{textAlign:"center", fontSize:"2em", marginTop:"50px"}}>Your Collection</h1>
                      <ListMemes memeArray={m.memeid}/>
                    </React.Fragment>
                  )
                } else {
                  return(
                    <div>
                      <div style={{margin:"30px auto", backgroundColor:"rgb(220,220,220)", padding:"10px", maxWidth:"900px", borderRadius:"10px"}}>
                        <h1 style={{textAlign:"center", fontSize:"2em", marginTop:"20px"}}>Kamu Tidak Punya Meme Tersimpan. Eksplor Sekarang!</h1>
                        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" >
                          <button style={{display:"block",margin:"20px auto"}} type="button" className="btn btn-dark center">Eksplor!</button>
                        </Link>
                      </div>
                      <img src="../static/hatiku.jpg" width="30%" style={{margin:"30px auto"}} />
                    </div>)
                }
              }
            }
          </MemesConsumer>
      </main>
      <Footer/>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous"></script>
      
    </div>
  )
}
