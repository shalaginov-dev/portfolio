import s from './App.module.css'
import {Main} from "./components/main/Main";
import {Sidebar} from "./components/sidebar/Sidebar";
import {Footer} from "./components/footer/Footer";
import {useState} from "react";

export const App = () => {
    const [viewPageMode, setViewPageMode] = useState('AM')
    const AMButton = ()=> {
        setViewPageMode('AM')
    }
    const TLButton = ()=> {
        setViewPageMode('TL')
    }
    const SNButton = ()=> {
        setViewPageMode('SN')
    }

    return (
        <div className={s.appWrapper}>
            <div className={s.app}>
                <Sidebar AMButton={AMButton} TLButton={TLButton} SNButton={SNButton}/>
                <Main viewPageMode={viewPageMode}/>
            </div>
            <Footer/>
        </div>
    )
}
