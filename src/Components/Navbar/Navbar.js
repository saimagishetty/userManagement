import React from "react";
import './Navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <div class="container">
                    <a >
                        <img src="https://placeholder.pics/svg/150x50/888888/EEE/Logo" alt="..." height="36" />
                    </a>
                    <div>
                        Well Come to USER Management Dashboard
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar