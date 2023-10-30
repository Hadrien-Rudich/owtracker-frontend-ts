import { useEffect } from 'react';

interface GameSavedToastProps {
  toastText: string;
  setToastText: (text: string) => void;
  isVisible: boolean;
  setIsVisible: (boolean: boolean) => void;
}

function SuccessToast({
  toastText,
  setToastText,
  isVisible,
  setIsVisible,
}: GameSavedToastProps) {
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
      setToastText('');
    }, 4500);
  });

  return (
    <div
      className={`${isVisible ? 'animate-blink2' : null}  
      flexdiv col absolute 
      top-[-5.5rem]
      right-[42.5%] left-[42.5%] w-[15%] 
      z-50 h-12
      bg-savedBackground ring-[0.1rem] ring-validate
       shadow-lg rounded-sm`}
    >
      <p className="text-activeColor tracking-widest text-xl ">{toastText}</p>
    </div>
  );
}

export default SuccessToast;
