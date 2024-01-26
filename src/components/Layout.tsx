import Footer from "./Footer";
import Navbar from "./Navbar";
import { Content } from "@/styles/Content.styles";

export default function Layout({children}:any){

    return(
        <>
            <Navbar/>
            <Content>
                {children}
            </Content>
            <Footer/>
        </>
    )

}