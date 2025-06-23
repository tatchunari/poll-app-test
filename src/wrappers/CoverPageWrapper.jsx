import { useNavigate } from "react-router-dom";
import CoverPage from "../pages/CoverPage";

const CoverPageWrapper = () => {
  const navigate = useNavigate();
  return <CoverPage onStart={() => navigate('/question')}/>;
};

export default CoverPageWrapper;