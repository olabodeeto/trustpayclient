import React from 'react'
import './ProfileHeader.css'
import { Edit } from 'akar-icons';
import Avatar from '../Avatar/Avatar';

export default function ProfileHeader({showEdit}) {
    return (
      
        <div className="tp-profile-header">
                <div className='tp-profile-avatar-container'>
                    <Avatar type="tp-avatar-profile" />
                    <Edit size={24} className='tp-profile-avatar-edit'
                    onClick={()=>{showEdit()}}
                    />
                </div>
        </div>
    )
}
