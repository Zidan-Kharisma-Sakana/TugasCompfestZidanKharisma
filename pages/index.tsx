import Head from "next/head"
import { Memes } from "../components/Memes"
import {SearchBar} from "../components/SearchBar"
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
export default function Home(prop) {
  return (
    <React.Fragment>
      <Head>

        <title>Tugas OPREC</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous"></link>
      </Head>
      <main style={{backgroundColor:"rgb(240, 241, 240)", paddingBottom:"100px", minHeight:"80vh"}}>
        <NavBar/>
        <h1 style={{textAlign:"center", fontSize:"2em", marginTop:"50px"}}>Cari Meme</h1>
        <SearchBar/>
        <Memes/>
      </main>
      <Footer/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous"></script>
    </React.Fragment>

  )
}
