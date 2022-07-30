import React, { useEffect } from 'react'

const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            console.log('ref', ref.current);
            if(!ref.current || ref.current.contains(event.target)) {
                // if it's not the ref.current or if event.target(clicking mouse cursor) is inside of the ref.current
                return;
            }
            handler();
            // handler? -> () => {setModalOpen(false)
        };

      document.addEventListener("mousedown", listener)
      document.addEventListener("touchstart", listener)
    
      return () => {
        // once the modal component is close, remove the eventListener
        document.removeEventListener("mousedown", listener)
        document.removeEventListener("touchstart", listener)
      }
    }, [])
    
}

export default useOnClickOutside