import { useEffect } from 'react';

interface SavedToastProps {
  topPosition: string;
  toastText: string;
  booleanProp: boolean;
  setBooleanProp: (value: boolean) => void;
}

function SavedToast({
  toastText,
  booleanProp,
  setBooleanProp,
  topPosition,
}: SavedToastProps) {
  useEffect(() => {
    if (booleanProp) {
      setTimeout(() => {
        setBooleanProp(false);
      }, 3000);
    }
  });

  return (
    <div
      className={`${
        booleanProp
          ? 'absolute bg-altColor scale-150 opacity-100 '
          : 'absolute bg-mainColor scale-0 opacity-0 '
      }  animate-blink 
      duration-1000 ease-in-out 
      w-[10rem] z-50 text-center 
      left-1/2 ${topPosition} 0 transform -translate-x-1/2 -translate-y-1/2 
      shadow-lg rounded-sm`}
    >
      <p className="tracking-widest">{toastText}</p>
    </div>
  );
}

export default SavedToast;
