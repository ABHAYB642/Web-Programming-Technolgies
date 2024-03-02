import {useEffect,useState} from "react";

function useFetch(url) {

    const [data, setData] = useState(null);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(null);

    async function getData() {
        try {   
            //try for error handling
            //const request=await ((await fetch(url)).json());setData(request);This will also work
            setloading(true);
            const request = await fetch(url);
            const response = await request.json();
            setData(response);
            setloading(false);
        } catch (error) {
            seterror(error);
        } finally {
            setloading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return {data,loading,error};
}
export default useFetch;
