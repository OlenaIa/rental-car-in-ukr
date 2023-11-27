import { Outlet } from "react-router-dom"
import { Suspense } from "react"; 
import { Header } from "components/Header/Header";
import Footer from "components/Footer/Footer";
    
export const Layout = () => {
    return <>
        <Header />
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </main>
        <footer><Footer /></footer>
    </>
};