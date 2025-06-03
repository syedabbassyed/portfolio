
import { NavItem } from "./NavItem";

export const VerticalNavbar = ({ activeSectionIndex, ClickHandler }) => {
    const menu = ["About", "Experience", "Projects", "Certifications"];
    
    return (
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
                {menu.map((name, id) => 
                    <li key={id}>
                        <NavItem
                            menuName={name} 
                            isActive={id === activeSectionIndex} 
                            onClick={() => ClickHandler(id)}
                        />
                    </li>
                )}
            </ul>
        </nav>
    )
}