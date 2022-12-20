import {useEffect, useState} from "react";

export const useScrollHeader = (): [boolean] => {
  const [zero, setZero] = useState(false);

  useEffect(() => {
    function scrollPosition (this: any) {
      if(this.scrollY === 0) {
        setZero(false);
      }
      if(this.scrollY > 0 && !zero) {
        setZero(true);
      }
    }

    window.addEventListener('scroll', scrollPosition);
    return () => (
      window.removeEventListener('scroll', scrollPosition)
    )
  }, []);

  return [zero];
};
