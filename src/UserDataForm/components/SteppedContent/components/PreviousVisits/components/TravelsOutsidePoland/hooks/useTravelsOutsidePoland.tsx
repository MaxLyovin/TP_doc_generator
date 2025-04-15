import { useState } from "react";

import { Travel } from "../TravelsOutsidePoland";
import { useUserData } from "@/state/hooks/useUserData";

export const useTravelsOutsidePoland = () => {
  const { userData } = useUserData();
  const [travels, setTravels] = useState<Travel[]>(
    userData?.travelsOutsidePoland || []
  );

  const addTravel = (travel: Travel) =>
    setTravels((travels) => [...travels, travel]);

  const removeTravel = (travelIndex: number) =>
    setTravels((travels) =>
      travels.filter((_travel, index) => index !== travelIndex)
    );
  return { travels, addTravel, removeTravel };
};
