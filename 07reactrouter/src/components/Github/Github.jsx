import React, {useEffect,useState} from "react";

function Github() {
    const [data,setData]=useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/dharmeshwarkumarpriy')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl" >Github followers: {data.followers}
        <img src={data.avatar_url} alt="Avatar" width="200"/>
        </div>
    )
}

export default Github;