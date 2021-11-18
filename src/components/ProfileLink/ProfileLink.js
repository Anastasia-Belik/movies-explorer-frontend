import React from "react";

import './ProfileLink.css'
import {Link} from "react-router-dom";

function ProfileLink(props) {
  return (
    <Link to='/profile' onClick={props.onClose}
          className={`profile-link ${props.isHeader ? 'profile-link_type_header' : 'profile-link_type_navigation'}`}>
      Аккаунт
      <div className='profile-link__icon'/>
    </Link>
  )
}

export default ProfileLink;
