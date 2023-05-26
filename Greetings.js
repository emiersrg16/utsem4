import React from 'react'

const Greetings = () => {
    let myDate = new Date();
    let hours= myDate.getHours();
    let greet;

    if (hours < 12)
        greet =  "pagi";
    else if (hours >= 12 && hours <= 17)
        greet = "siang";
    else if (hours >= 17 && hours <= 24)
       greet = "sore";
    
    return <span>Selamat {greet} !,</span>
}

export default Greetings