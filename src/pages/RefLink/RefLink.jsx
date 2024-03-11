import { useEffect, useState } from "react";
import {
    useParams
  } from "react-router-dom";
import { checkRefLink } from "../../utils/supabaseUtils";

const RefLink = () => {
    const { refid } = useParams();
    const [ipAddress, setIPAddress] = useState(undefined)
    const [activeHook, setActiveHook] = useState(true)

    useEffect(() => {
      fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => setIPAddress(data.ip))
        .catch(error => console.log(error))
    }, []);
    
    if(ipAddress !== undefined && activeHook){
        setActiveHook(false);
        checkRefLink(refid, ipAddress);
    }
    console.log(activeHook)
    return (
        <h2 className="text-title font-bold">Virus Downloading... <br /> ID: {ipAddress} </h2>
    );
};

export default RefLink;
