import { LineStyle, Timeline, TrendingUp } from '@mui/icons-material';
import { PermIdentity, Storefront, AttachMoney } from '@mui/icons-material';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { MailOutline, DynamicFeed, ChatBubbleOutline } from '@mui/icons-material'
import { WorkOutline, Report } from '@mui/icons-material';
import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Sidebar() {


  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <Link to="/" className="link">
              <li className='sidebarListItem'>
                <LineStyle className='sidebarIcon active'/>
                Home
                <span><CheckCircleIcon className='checked'/></span>
              </li>
            </Link>
            <Link to='/analytics' className='link'>
              <li className='sidebarListItem'>
                <Timeline className='sidebarIcon'/>
                Analytics
              </li>
            </Link>
            <Link to='/sales' className='link'>
              <li className='sidebarListItem'>
                <TrendingUp className='sidebarIcon'/>
                Sales
              </li>
            </Link>
          </ul>
        </div>


        <div className="sidebarMenu">
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarList'>
          <Link to='/products' className="link">
              <li className='sidebarListItem'>
                <Storefront className='sidebarIcon'/>
                Products
                <span><CheckCircleIcon className='checked'/></span>
              </li>
            </Link>
            <Link to='/users' className="link">
              <li className='sidebarListItem'>
                <PeopleOutlineIcon className='sidebarIcon active'/>
                Users
                <span><CheckCircleIcon className='checked'/></span>
              </li>
            </Link>
            <Link to='/new-user' className="link">
              <li className='sidebarListItem'>
                <PermIdentity className='sidebarIcon'/>
                New User
              </li>
            </Link>
            <Link to='/transactions' className='link'>
              <li className='sidebarListItem'>
                <AttachMoney className='sidebarIcon'/>
                Transactions
              </li>
            </Link>
          </ul>
        </div>


        <div className="sidebarMenu">
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
            <Link to='/mail' className='link'>
              <li className='sidebarListItem'>
                <MailOutline className='sidebarIcon active'/>
                Mail
              </li>
            </Link>
            <Link to='/feedback' className='link'>
              <li className='sidebarListItem'>
                <DynamicFeed className='sidebarIcon'/>
                Feedback
              </li>
            </Link>
            <Link to='/messages' className='link'>
              <li className='sidebarListItem'>
                <ChatBubbleOutline className='sidebarIcon'/>
                Messages
              </li>
            </Link>
          </ul>
        </div>


        <div className="sidebarMenu">
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
            <Link to='/manage' className='link'>
              <li className='sidebarListItem'>
                <WorkOutline className='sidebarIcon active'/>
                Manage
              </li>
            </Link>
            <Link to='/staff-analytics' className='link'>
              <li className='sidebarListItem'>
                <Timeline className='sidebarIcon'/>
                Analytics
              </li>
            </Link>
            <Link to='reports' className='link'>
              <li className='sidebarListItem'>
                <Report className='sidebarIcon'/>
                Reports
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}
