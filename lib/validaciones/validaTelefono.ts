export default function validaTelefono(campo:string):boolean{
    if (!campo)return true;
  
    const soloNumerosRegex = /^[0-9-+ ]*$/
    if(soloNumerosRegex.test(campo))
        return true;
    else{
        return false;
    }
    
    
   
}


// que solo sean numeros