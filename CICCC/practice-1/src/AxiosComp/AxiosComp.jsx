import React from "react";
const axios = require('axios'); //before ES6
// import axios from "axios";      //after  ES6

class AxiosComp extends React.Component {
    componentDidMount() {
        axios.get("https://api.github.com/users/octocat/repos",
            {params: {
                ID: 132935648
            }}
        )
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
    render() {
        return(
            <div>Hi</div>
        );
    }
}

export default AxiosComp;