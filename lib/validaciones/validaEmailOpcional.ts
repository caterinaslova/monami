export default function validaEmailOpcional(campo:string):boolean{
    if (!campo)return true;
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(emailRegex.test(campo))
        return true;
    else{
        return false;
    }
    
    
   
}

