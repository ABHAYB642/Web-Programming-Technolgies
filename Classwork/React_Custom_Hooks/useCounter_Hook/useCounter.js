import {useEffect,useState} from "react";
function useCounter(initialvalue){

    const [count,setcount]=useState(initialvalue);
    const [negative,setnegative]=useState(false);

    function increment(){
        if(count==0){      //Setting negative flag to false if we increment again from 0
        setnegative(false);
        }
        setcount(count+1);
    }

    function decrement(){
        if(count>0){    //Restricting count to 0
        setcount(count-1);
        }
        else{          //Setting negative flag to true if we try to decrement count less than 0
            setnegative(true);
        }
    }
    
    return [count,increment,decrement,negative];
}
export default useCounter;