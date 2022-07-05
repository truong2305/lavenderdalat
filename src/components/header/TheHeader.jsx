import Logo from "../logo/Logo"
import NavBar from "../navbar/NavBar"
import './header.scss'


function TheHeader() {
    return (
        <header className="border-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-4">
                        <Logo/>
                    </div>
                    <div className="col-8">
                        <NavBar/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default TheHeader