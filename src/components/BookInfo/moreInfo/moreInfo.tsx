import React, { useState } from 'react';
import styles from './moreInfo.module.scss';

const InfoComponent: React.FC = () => {
  const [content, setContent] = useState<string>('Description text here');
  const [selected, setSelected] = useState<string>('Description');

  const handleClick = (text: string, title: string): void => {
    setContent(text);
    setSelected(title);
  };

  return (
    <div>
      <div className={styles.moreInfo}>
        <p
          className={`${styles.moreInfoTitle} ${selected === 'Description' ? styles.active : ''}`}
          onClick={() => handleClick('Description text here', 'Description')}
        >
          Description
        </p>
        <p
          className={`${styles.moreInfoTitle} ${selected === 'Authors' ? styles.active : ''}`}
          onClick={() => handleClick('Authors text here', 'Authors')}
        >
          Authors
        </p>
        <p
          className={`${styles.moreInfoTitle} ${selected === 'Reviews' ? styles.active : ''}`}
          onClick={() => handleClick('Reviews text here', 'Reviews')}
        >
          Reviews
        </p>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default InfoComponent;

