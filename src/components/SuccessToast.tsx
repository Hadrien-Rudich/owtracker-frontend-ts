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
    }, 3000);
  });

  return (
    <div
      className={`${isVisible ? 'fadeIn' : null}  
      flexdiv col fixed bottom-[0.2rem] right-[0.25rem]
      z-50
      w-[15%] 
      h-10
      bg-savedBackground ring-[0.1rem] ring-validate
       shadow-lg rounded-sm `}
    >
      <p className="text-activeColor text-lg tracking-widest ">{toastText}</p>
    </div>
  );
}

export default SuccessToast;
