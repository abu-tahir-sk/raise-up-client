import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyCampaign = () => {
      const data = useLoaderData()
      const [campaign, setCampaign] = useState(data);
      return (
            <div>
                  
            </div>
      );
};

export default MyCampaign;