import { Outlet } from "react-router";
import { Header } from "../components/Header";
import {Footer} from '../components/Footer'

export function MainLayout() {
  return (
    <div>
       {/* className="bg-[#F9F7E9] text-[#3F170E] dark:bg-[#3F170E] dark:text-[#F9F7E9] min-h-screen font-body" */}
      <Header />
      <main className="pt-24 fade-in">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
