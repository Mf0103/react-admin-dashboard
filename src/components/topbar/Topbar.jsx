import React from 'react'
import './Topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className='logo'><SpaceDashboardIcon className='logo-img' /> Admin Dashboard</span>
        </div>

        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsIcon />
            <span className='topIconBadge'>2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
          </div>
          <img src="/images/man3.jpg" alt='admin-img' className='topAvatar' />
        </div>
      </div>
    </div>
  )
}
