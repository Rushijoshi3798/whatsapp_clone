import React from 'react'
import { TiGroup } from 'react-icons/ti';
import { BiMessageDetail } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiFilter } from 'react-icons/bi';
import styles from '../styles/sidebar.module.css';
import ChatView from './ChatView';

const SideBar = () => {

  const handleDropdown = () => {
    let menuIconDiv = document.getElementById("Nav_Group_Btn");

    if(menuIconDiv.style.display === 'none'){
      menuIconDiv.style.display = 'block';
    }else {
      menuIconDiv.style.display = 'none';
    }


   
  }
  return (
    <div className={styles.main_div}>
      <nav className={styles.navbar}>
        <div className={styles.profile_image_div}>
          <img src='/Final_Profile_pic.jpg'  alt="profile_pic" />
        </div>
        <div className={styles.buttonGroup}>
          <TiGroup className={styles.navbar_icons} />
          <BiMessageDetail className={styles.navbar_icons} />
          <BsThreeDotsVertical onClick={handleDropdown} className={styles.navbar_icons} />
          <div id='Nav_Group_Btn' className={styles.Nav_Group_Btn}>
            <p className={styles.First_Btn_navGroup}>New Group</p>
            <p>New Community</p>
            <p>Archived</p>
            <p>Starred Messages</p>
            <p>Select Chats</p>
            <p>Settings</p>
            <p className={styles.Last_Btn_navGroup}>Log out</p>
          </div>
        </div>
      </nav>
      <div className={styles.search_div}>
        <div className={styles.search_logo_div}>
          <AiOutlineSearch className={styles.search_icon} />
          <input className={styles.searchInputAndBtn} type="text" placeholder='Search or start new chat' />
        </div>
        <BiFilter className={styles.searchInputAndBtn} />
      </div>
      <div className={styles.chats_div}>
        <ChatView />
      </div>
    </div>
  )
}

export default SideBar;
