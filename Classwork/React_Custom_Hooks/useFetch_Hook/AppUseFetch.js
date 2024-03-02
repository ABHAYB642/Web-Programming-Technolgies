import useFetch from "./useFetch";
function AppUseFetch() {

    const url="https:reqres.in/api/users?page=2";
    //useFetch will give data,loading and error status.
    const { data, loading, error } = useFetch(url);

    if (loading) {
        return <h3>Data loading...</h3>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        //Use the Data here as you want
        <div>
            <ul>
                {data?.data.map((element) => (
                <li key={element.id}>{element.id}</li>
                ))}
            </ul>
        </div>
    );
}
export default AppUseFetch;


