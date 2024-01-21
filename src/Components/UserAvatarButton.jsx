import React from 'react'
import { Dropdown , Avatar } from 'flowbite-react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


export default function UserAvatarButton() {
  
  const {userDetails , logOutUser} = useContext(UserContext)
  console.log(userDetails.userDetails)
  const {user_id , email , user_image} = userDetails.userDetails; 
  const navigate = useNavigate();

  const logOut = ()=>{
   logOutUser();
   navigate("/");
   toast.success("LogOut successful!", {
    position: "top-right",
    autoClose: 5000, // milliseconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  });
  }
  return (
    <Dropdown
    label={<Avatar alt="User settings" img="" rounded  size="sm"/>}
    arrowIcon={false}
    inline
  >
    <Dropdown.Header>
      <span className="block text-sm">{user_id}</span>
      <span className="block truncate text-sm font-medium">{email}</span>
    </Dropdown.Header>

    <Dropdown.Item onClick={logOut}>Sign out</Dropdown.Item>
  </Dropdown>
  )
}
