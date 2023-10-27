interface SavedToastProps {
  toastText: string;
  booleanProp: boolean;
}

function ErrorToast({ toastText, booleanProp }: SavedToastProps) {
  return (
    <div
      className={`${booleanProp ? 'animate-blink2  ' : null}  
      flexdiv col absolute
      top-[-3rem] left-[-2.5rem]
      w-32 h-10 z-50  
      bg-errorBackground ring-[0.1rem] ring-warning
       shadow-lg rounded-sm`}
    >
      <p className="text-activeColor text-sm">{toastText}</p>
    </div>
  );
}

export default ErrorToast;
