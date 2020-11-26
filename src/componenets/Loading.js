import React from 'react'
import Logo from '../images/loading.gif'

const Loading = (props) => {
    return props.isloading && <img src={Logo}/>
}

export default Loading;
