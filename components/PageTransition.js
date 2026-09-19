"use client";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('enter');

  useEffect(() => {
    if (children !== displayChildren) {
      setTransitionStage('exit');
    }
  }, [children, displayChildren]);

  useEffect(() => {
    if (transitionStage === 'exit') {
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setTransitionStage('enter');
      }, 220);
      return () => clearTimeout(timer);
    }
  }, [transitionStage, children]);

  return (
    <div className={`page-transition page-transition-${transitionStage}`} key={pathname}>
      {displayChildren}
    </div>
  );
}
