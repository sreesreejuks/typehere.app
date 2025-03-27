import { useState, useEffect } from 'react';
import styles from './Controls.module.css';

interface ControlsProps {
  onExport: () => void;
  onImport: () => void;
}

const getCurrentTime = () => {
  const now = new Date();
  const month = now.toLocaleString('default', { month: 'short' }).toLowerCase();
  const day = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes().toString().padStart(2, '0');
  const period = hour >= 12 ? 'p' : 'a';
  const hour12 = hour % 12 || 12;
  return `${month}${day}, ${hour12}:${minute}${period}`;
};

const generateRandomName = () => {
  const adjectives = ['quiet', 'swift', 'gentle', 'bright', 'calm', 'wise', 'kind', 'bold'];
  const nouns = ['river', 'mountain', 'forest', 'meadow', 'ocean', 'valley', 'sunset', 'breeze'];
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${randomAdjective}-${randomNoun}`;
};

const Controls = ({ onExport, onImport }: ControlsProps) => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  useEffect(() => {
    // Update time immediately when component mounts
    setCurrentTime(getCurrentTime());
    
    // Update every 10 seconds
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 10000);

    // Update time when tab becomes visible
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setCurrentTime(getCurrentTime());
      }
    };

    // Add visibility change listener
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleExportClick = () => {
    onExport();
    setShowMoreMenu(false);
  };

  const handleImportClick = () => {
    onImport();
    setShowMoreMenu(false);
  };

  const openNewPage = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className={styles.clockContainer}>
      <span>[{currentTime}]</span>
      <div className={styles.moreContainer}>
        <button 
          className={styles.moreButton} 
          onClick={() => setShowMoreMenu(!showMoreMenu)}
        >
          more
        </button>
        {showMoreMenu && (
          <>
            <div 
              className={styles.overlay} 
              onClick={() => setShowMoreMenu(false)}
            />
            <div className={styles.moreMenu}>
              <button onClick={handleExportClick}>Export as .txt</button>
              <button onClick={handleImportClick}>Import .txt</button>
              <button onClick={openNewPage}>New page</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Controls;

 