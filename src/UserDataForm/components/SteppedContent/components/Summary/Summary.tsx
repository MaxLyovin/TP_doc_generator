import { useUserData } from '@/state/hooks/useUserData';

import { ApplicationForm } from './components/ApplicationForm';

export const Summary = () => {
  const { userData } = useUserData();

  return <div>{userData && <ApplicationForm userData={userData} />}</div>;
};
