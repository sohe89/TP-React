import React from 'react';
import { useContext } from 'react';
import { context } from '../context/AuthContext';




function HomeStore(props) {
    
        

  const AuthContext = useContext(context)

  console.log(AuthContext);

        
    return<div>home</div>
}

export default HomeStore;