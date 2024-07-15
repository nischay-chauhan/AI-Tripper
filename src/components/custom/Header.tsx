import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
    <Link to="/" className="flex items-center gap-2">
    <img src='./logo.svg' />
    </Link>
    <nav className="flex items-center gap-4">
      <Link to={"/features"} className="text-muted-foreground hover:text-primary transition-colors">
        Features
      </Link>
      <Link to={"/pricing"} className="text-muted-foreground hover:text-primary transition-colors" >
        Pricing
      </Link>
      <Link to={"/about"} className="text-muted-foreground hover:text-primary transition-colors" >
        About
      </Link>
      <Link to={"/contact"} className="text-muted-foreground hover:text-primary transition-colors" >
        Contact
      </Link>
    </nav>
  </header>
  )
}

export default Header


