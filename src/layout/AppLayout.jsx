import { Header } from "@/ui/Header"
import { Outlet } from "react-router-dom"

export const AppLayout = () => {
  return (
    <>
      <Header />

      <Outlet />

      
    </>
  )
}
