import { useNavigate, useParams } from "react-router-dom";
import { checkRefLink } from "../../utils/supabaseUtils";

async function responseRefClickEvent(){
  const navigate = useNavigate();
  const { refid } = useParams();
  const { ip } = await (await fetch('https://api.ipify.org?format=json')).json()
  checkRefLink(refid, ip);
  navigate("/", { replace: true });
}

const RefLink = () => {
  responseRefClickEvent();
  
    return (
        <h2 className="text-title font-bold">Virus Downloading... <br /></h2>
    );
};

export default RefLink;
