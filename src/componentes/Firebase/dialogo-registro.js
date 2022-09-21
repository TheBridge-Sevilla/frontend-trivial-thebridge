import {React , useState} from "react";
import Usuario from "./usuario"
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const DialogDemo = () => {
       
    const [displayResponsive, setDisplayResponsive] = useState(false);
    
    
/*     const renderFooter = (name) => {
      return (
        <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
      } */
      
      return (
        
        <div>
                
                <Button label="Registrate" icon="pi pi-user" onClick={() => setDisplayResponsive(true)} />
                <Dialog visible={displayResponsive} onHide={() => setDisplayResponsive(!displayResponsive)} breakpoints={{'960px': '75vw'}} style={{width: '50vw'}} /* footer={renderFooter('displayResponsive')} */>
                 <Usuario/>

                </Dialog>
  
        </div>
    )
      }
export default DialogDemo