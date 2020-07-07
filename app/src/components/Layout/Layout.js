import React,{useState} from 'react';

import Auxiliary from '../../hoc/Auxiliary';
//import NavItems from '../Navigation/NavItems/NavItems';
import Side from '../Navigation/SideMenu/Side';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import RegistrationModal from '../Registration/RegistrationModal';

const Layout = (props) => {
    const [Open, setOpen] = useState(false);
    const handleOpen= () => setOpen(!Open);
  
    let SideMenu;
    if(Open){
        SideMenu=<Side Close={handleOpen}/>
    }
return(
    <Auxiliary>
        <Toolbar SideOpen={handleOpen} />
      
      {SideMenu }
       
       
        <main className={classes.Content}>
            {props.children}
            <RegistrationModal/>
        </main>
        
    </Auxiliary>
)
};


export default Layout;
