import React, { useEffect } from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown, MdOutlineKebabDining } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg';
import {Cart,Chat,Notification,UserProfile} from '.';
import { BsChatLeft } from 'react-icons/bs'


const NavButton = ({title, customFunc, icon, color, dotColor}) => ((
    <TooltipComponent content={title}
    position='BottomCenter'>
    <button
    type="button"
    onClick={customFunc}
    style={{color}}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span style={{background: dotColor}}
      className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
        {icon}
  
    </button>
    </TooltipComponent>
    ))
const Navbar = () => {
  const {activeMenu,setActiveMenu,isClicked,handleClick,screenSize,setScreenSize,theme} = useStateContext();

  useEffect(()=>{
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize',handleResize);

    handleResize();

    return() => window.removeEventListener('resize',handleResize);
  },[])

  useEffect(()=>{
    if(screenSize <= 900){
      setActiveMenu(false)
    }
    else{
      setActiveMenu(true)
    }
  },[screenSize]);

console.log(isClicked.cart)
  return (
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative '>
      <NavButton
      title="Menu"
      customFunc={()=>{
        setActiveMenu((prevActiveMenu)=>!prevActiveMenu)
      }}
      color= {theme}
      icon= {<AiOutlineMenu/>}/>
      <div className='flex'>
        <NavButton
        title="cart"
        customFunc={()=>handleClick('cart')}
        color={theme}
        icon={<FiShoppingCart/>}/>

        <NavButton
        title="chat"
        dotColor="#03C9D7"
        customFunc={()=>handleClick('chat')}
        color={theme}
        icon={<BsChatLeft/>}/>

        <NavButton
        title="notification"
        customFunc={()=>handleClick('notification')}
        color={theme}
        icon={<RiNotification3Line/>}/>
        <TooltipComponent
        content="Profile"
        position='BottomCenter'
        >
          <div 
          className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
          onClick={() => handleClick('userProfile')}>
            <img 
            src={avatar}
            className='w-8 rounded-full'/>
            <p>
              <span className='text-gray-400 text-14'>Hi,</span>
              <span className='text-gray-400 font-bold ml-1 text-14'> Prosper</span>
              </p>
              <MdKeyboardArrowDown
              className='text-gray-400 font-bold ml-1 text-14'/>
          </div>
        </TooltipComponent>
        {isClicked.cart && (<Cart />)}
        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}
      </div>
    </div>
  )
}

export default Navbar