import React from 'react'
import Link from 'next/link'

export default function NavBar(props) {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#">Tugas Oprec</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" style={{margin:"0 15%", color:"white"}}>
          <Link href="/">Eksplor</Link>
        </li>
        <li className="nav-item" style={{margin:"0 15%", color:"white"}}>
          <Link href="/saved">Saved</Link>
        </li>
      </ul>
    </div>
    </div>
</nav>
    )
}
