import { useState } from "react";

export const useProductTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return { activeTab, setActiveTab };
};
