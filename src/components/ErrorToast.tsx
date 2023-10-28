interface SavedToastProps {
  toastText: string;
  booleanProp: boolean;
  topProp: string;
  leftProp: string;
}

function ErrorToast({
  toastText,
  booleanProp,
  topProp,
  leftProp,
}: SavedToastProps) {
  return (
    <div
      className={`${booleanProp ? 'animate-blink2  ' : null}  
      flexdiv col absolute
    ${topProp} ${leftProp}
      w-40 h-14 z-50   p-2
      bg-errorBackground ring-[0.1rem] ring-warning
       shadow-lg rounded-sm`}
    >
      <p className="text-activeColor tracking-widest ">{toastText}</p>
    </div>
  );
}

export default ErrorToast;
