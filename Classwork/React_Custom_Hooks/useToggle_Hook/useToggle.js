import { useState } from "react";
function useToggle(initialvalue){
    const [flag,setflag]=useState(initialvalue);
    function toggleflag(){
        setflag(!flag);
    }
    function maketrue(){
        setflag(true);
    }
    function makefalse(){
        setflag(false);
    }
    return {flag,toggleflag,maketrue,makefalse};
}
export default useToggle;