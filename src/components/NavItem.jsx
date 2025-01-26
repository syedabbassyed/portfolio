export const NavItem = ({ menuName, isActive, onClick }) => {

    return (
        <a className={"group flex items-center py-3 " + ((isActive == true) ? "active" : "")} href={"#" + menuName.toLocaleLowerCase()} onClick={onClick}>
            <span className="nav-indicator mr-4 h-px w-8 bg-[#c6cecc] transition-all group-hover:w-16 group-hover:bg-white group-focus-visible:w-16 group-focus-visible:bg-white motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-[#c6cecc] group-hover:text-white group-focus-visible:text-white">{menuName}</span>
        </a>
    );

}