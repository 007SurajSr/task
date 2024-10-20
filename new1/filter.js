function capstring(){
    const string = 'hi i am suraj';
    const newstr = () =>{
        const newstring = string.split(' ');
        const capitalstring = newstring.map((value) => {
       return value.charAt(0).toUpperCase() +value.slice(1);
        })
        
        return capitalstring.join(' ');
        }
        console.log(newstr(string));
        

    }
    capstring();

