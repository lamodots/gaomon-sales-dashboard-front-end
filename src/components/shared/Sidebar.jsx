import React from 'react'
import { HiMiniShoppingBag } from "react-icons/hi2";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants/navigation';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { HiOutlineLogout } from 'react-icons/hi';

const linkStyles = "flex flex-row gap-2 items-center  px-2 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";
function Sidebar() {
    return (
    <div className='flex flex-col bg-neutral-900 w-60 p-3 text-black '>
        <div className='flex items-center gap-2 px-1 py-3'>
            <HiMiniShoppingBag fontSize={24} color='white'/>
            <span className='text-white text-lg '>Gaomon</span>
        </div>
        <div className='flex-1 py-8 flex flex-col gap-0.5'>
            {DASHBOARD_SIDEBAR_LINKS.map((item)=> (<SidebarLink key={item.key} item={item} />))}
        </div>
        <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
            {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item)=> (<SidebarLink key={item.key} item={item} />)) }
        </div>
        <div className={classNames("text-red-500 cursor-pointer", linkStyles)}>
            <span className={classNames("text-xl")}>
                <HiOutlineLogout />
            </span>
            Logout

        </div>

    </div>
    )
}

function SidebarLink({ item }){
    const {pathname} = useLocation()
    return (
        <Link to={item.path} className={ classNames(pathname === item.path ? "bg-neutral-700 text-white": " text-neutral-400", linkStyles)}>
        <span className="text-xl">{item.icon}</span>
        {item.label}
        </Link>
    )
}

export default Sidebar