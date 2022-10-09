const ReportDataContainer = () => {

    const windyAPI = (location) => {

        // // placeholder values
        location = { "lat": 41.923, "lon": -69.974, }

        fetch('/api/report', {
            method: "POST",
            body: JSON.stringify({ ...location }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
            });
    }

    return (
        <button onClick={windyAPI}>Call weather Gods</button>
    )

}


export default ReportDataContainer;
