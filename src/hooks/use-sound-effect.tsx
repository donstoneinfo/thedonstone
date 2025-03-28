
import { useEffect } from 'react';
import { playBeepSound } from '@/utils/sound';

/**
 * Hook to add beep sound effect to links or any elements
 */
export const useSoundEffect = () => {
  useEffect(() => {
    // Select all links and buttons in the document
    const interactiveElements = document.querySelectorAll('a, button');
    
    const handleMouseEnter = () => {
      playBeepSound();
    };
    
    // Add mouseenter listeners
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
    });
    
    // Also add listeners for any new interactive elements added to the DOM
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1) { // Element node
            const newElements = (node as Element).querySelectorAll('a, button');
            newElements.forEach(element => {
              element.addEventListener('mouseenter', handleMouseEnter);
            });
            
            // Check if the node itself is a link or button
            if ((node as Element).tagName === 'A' || (node as Element).tagName === 'BUTTON') {
              (node as Element).addEventListener('mouseenter', handleMouseEnter);
            }
          }
        });
      });
    });
    
    // Start observing the document with configured parameters
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Clean up
    return () => {
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
      });
      observer.disconnect();
    };
  }, []);
};
