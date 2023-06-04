import { useEffect, useRef, RefObject } from "react";
type EventType = keyof DocumentEventMap;

const useOutsideClick = <T extends HTMLElement>(
  callback: () => void,
  eventTypes: EventType[]
): RefObject<T> => {
  const ref = useRef<T | null>(null);

  // This function checks if a click event occurred outside the ref element
  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      // If the click occurred outside the ref element, invoke the callback
      callback();
    }
  };

  useEffect(() => {
    // This function handles the click event outside the ref element
    const handleOutsideClick = (event: Event) => {
      handleClickOutside(event);
    };

    // Add event listeners for the specified event types
    eventTypes.forEach((eventType: EventType) => {
      document.addEventListener(eventType, handleOutsideClick);
      ref?.current?.addEventListener(eventType, callback);
    });

    // Cleanup function that runs when the component unmounts or when the dependency array changes
    return () => {
      // Remove event listeners for the specified event types
      eventTypes.forEach((eventType: EventType) => {
        document.removeEventListener(eventType, handleOutsideClick);
        ref?.current?.removeEventListener(eventType, callback);
      });
    };
  }, [callback, eventTypes]);

  return ref;
};

export default useOutsideClick;
