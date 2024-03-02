import useToggle from "./useToggle";
function AppUseToggle(){
    const {flag,toggleflag,maketrue,makefalse}=useToggle(false);
    return(
        <>
        <h3>{flag? "Flag is True":"Flag is False"}</h3>
        <button onClick={toggleflag}>Toggle Flag</button>
        <button onClick={maketrue}>Make True</button>
        <button onClick={makefalse}>Make False</button>
        </>
    )
}
export default AppUseToggle;
