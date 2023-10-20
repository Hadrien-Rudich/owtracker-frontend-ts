import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface SavedToastProps {
  toastText: string;
  booleanProp: boolean;
  setBooleanProp: (value: boolean) => void;
}

function SavedToast({
  toastText,
  booleanProp,
  setBooleanProp,
}: SavedToastProps) {
  const location = useLocation();
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (booleanProp) {
      timeoutId = setTimeout(() => {
        setBooleanProp(false);
      }, 4500);
    }

    return () => {
      clearTimeout(timeoutId);
      setIsMounted(false);
    };
  }, [booleanProp, setBooleanProp]);

  useEffect(() => {
    if (!isMounted) {
      setBooleanProp(false);
    }
  }, [location, isMounted, setBooleanProp]);

  return (
    <div
      className={`${
        booleanProp
          ? 'absolute bg-altColor scale-150 opacity-100 '
          : 'absolute bg-mainColor scale-0 opacity-0 '
      }  animate-blink2
      duration-1000 ease-in-out 
      w-[10rem] z-50 text-center 
      left-1/2 lg:top-[-4.5rem] top-[-2.25rem] 0 transform -translate-x-1/2 -translate-y-1/2 
      shadow-lg rounded-sm`}
    >
      <p className="tracking-widest">{toastText}</p>
    </div>
  );
}

export default SavedToast;
