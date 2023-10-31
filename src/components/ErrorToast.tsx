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
  // useEffect(() => {
  //   setTimeout(() => {
  //     booleanPropSetter(false);
  //   }, 4000);
  // });

  return (
    <div
      className={`${booleanProp ? 'fadeIn' : ' '}  
      flexdiv col absolute
    ${topProp} ${leftProp}
      w-48 h-12 z-50
      bg-errorBackground ring-[0.1rem] ring-warning
       shadow-lg rounded-sm`}
    >
      <p className="text-activeColor tracking-widest ">{toastText}</p>
    </div>
  );
}

export default ErrorToast;
