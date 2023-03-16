import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <header>
                <Link to="">Create Employee</Link>
                <Link to="/">HRnet</Link>
                <Link to="">Current Employees</Link>
            </header>
            <h1>Create Employee</h1>
        </div>
    )
}
export default Header