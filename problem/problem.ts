

  function formatString  (typeing: string ,  toUpper?:boolean){

    if(toUpper === true){
        return typeing.toLocaleLowerCase()
    }
    else  {
     return typeing.toUpperCase()
    }
       
  }

    const result = formatString("Hello", false)
    console.log(result);
