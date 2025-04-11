import { useState } from "react";

import { Visit } from "../PreviousPolandVisits";
import { useUserData } from "@/state/hooks/useUserData";

export const usePreviousPolandVisits = () => {
  const { userData } = useUserData();

  const [visits, setVisits] = useState<Visit[]>(
    userData?.previousVisitsPoland || []
  );

  const addVisit = (visit: Visit) => setVisits((visits) => [...visits, visit]);

  const removeVisit = (visitIndex: number) =>
    setVisits((visits) =>
      visits.filter((_visit, index) => index !== visitIndex)
    );

  return {
    visits,
    addVisit,
    removeVisit,
  };
};
