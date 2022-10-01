import { useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function Navbar() {
    

  return (
    <header>
        <div className="container">
    <Link to="/">
        <h1>WorkOut tracker</h1>
    </Link>
        </div>
    </header>
  )
}
