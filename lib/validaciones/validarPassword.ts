

export default function validaPass(campo:string):Boolean{
    if (!campo)return true;
  
    const emailRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    if(emailRegex.test(campo))
        return true;
    else{
        return false;
    }
    
    
   
}


// que sean como mínimo 8 caracteres, una minúscula y una mayúscula