import { Link } from 'react-router-dom'
const Sidebar = ({ selectedtab, setselectedtab }) => {
    return (
        <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: "180px" }}>
            <Link to="#" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg class="bi pe-none me-2" width="40" height="32"><use xlink:Href="#bootstrap"></use></svg>
                <span class="fs-4">Sidebar</span>
            </Link>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item" onClick={() => { setselectedtab("posts") }}>
                    <Link to="#" class={`nav-link ${selectedtab === "posts" && "active"}`} aria-current="page">
                        <svg class="bi pe-none me-2" width="16" height="16"><use xlink:Href="#home"></use></svg>
                        posts
                    </Link>
                </li>
                <li onClick={() => { setselectedtab("upload post") }}>
                    <Link to="#" class={`nav-link text-white ${selectedtab === "upload post" && "active"}`}>
                        <svg class="bi pe-none me-2" width="16" height="16"><use xlink:Href="#speedometer2"></use></svg>
                        upload post
                    </Link>
                </li>

            </ul>
            <hr />
            <div class="dropdown">
                <Link to="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                    <strong>mdo</strong>
                </Link>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a class="dropdown-item" href="#">New project...</a></li>
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;