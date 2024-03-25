import { Link } from 'react-router-dom'
type HeaderProps = {
    room: string
}

const Header = ({ room }: HeaderProps) => {
    return (
        <header className="navbar bg-base-300">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">{room}</a>
            </div>
            <div className="navbar-end">
                <Link className="btn btn-outline btn-sm" to={"/"}>Home</Link>
            </div>
        </header>
    )
}

export default Header