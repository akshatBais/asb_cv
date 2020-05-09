import axios from 'axios';

export function httpcall(methodType, url, data, message) {
    return new Promise((resolve, reject) =>  {
        console.log("---Inside Http call method ---");
        if(methodType === "post") {
            console.log("Calling API");
            axios.post(url, data)
            .then((response) => {
                console.log(message ," " ,  response.data , " and data : ", data);
                // return;
                resolve(response);
            })
            .catch((error) => {
                console.log("ERROR occurred while adding user to Applozic Groups : ", error);
            })
        }
    })
    
}
    