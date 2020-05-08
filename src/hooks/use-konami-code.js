/* Konami code hook by @gabrieluizramos */
import { useState, useEffect } from 'react';

const keys = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  a: 65,
  b: 66
};

const code = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

const useKonamiCode = callback => {
  const [active, setActive] = useState(false);
  let progress = 0;

  const calculateKonami = ({ keyCode }) => {
      const nextKey = code[progress];
      const nextKeyCode = keys[nextKey];
      progress = nextKeyCode === keyCode ? progress + 1 : 0;
      
      const completed = progress === code.length;
      setActive(completed);
  };

  useEffect(() => {
      if(active) {
          callback();
          setActive(false);
      }
  }, [active]);

  useEffect(() => {
      window.addEventListener('keydown', calculateKonami);

      return () => window.addEventListener('keydown', calculateKonami);
  }, []);

  return { active };
};

export default useKonamiCode;