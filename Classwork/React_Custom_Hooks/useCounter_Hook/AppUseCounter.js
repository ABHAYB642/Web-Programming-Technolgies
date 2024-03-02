import useCounter from "./useCounter";

function AppUseCounter() {
        const [count, increment, decrement, isnegative] = useCounter(12);

        return (
        <>
        <h2>{count}</h2>
        {isnegative && <h3>Count can't be Negative</h3>}  {/*Display a msg if count less than 0 */}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </>
        );
}

export default AppUseCounter;


