import { Search, ShoppingBag, User } from "lucide-react"
import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <div className="bg-gray-200 w-screen pt-14 flex justify-between">
      <h1 className="text-6xl font-bold ml-32">PRESENT</h1>
      <nav className="flex items-center gap-10 px-14 bg-black text-amber-100 mr-16">
        <NavLink to="/" >Inicio</NavLink>
        <NavLink to="/productos" >Productos</NavLink>
        <NavLink to="/beneficios" >Beneficios</NavLink>
        <NavLink to="/stay-present" >Stay Present</NavLink>
        <div className="flex items-center gap-8 ml-24">
          <Search />
          <ShoppingBag />
          <User />
        </div>
      </nav>
    </div>
  )
}
