import { useEffect, useRef, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Controls from './Controls';
import styles from './TextEditor.module.css';

const TextEditor = () => {
  const [text, setText] = useLocalStorage('workspace', '');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [cursorPosition, setCursorPosition] = useState<{ start: number; end: number } | null>(null);

  useEffect(() => {
    // Focus textarea on mount
    textareaRef.current?.focus();
  }, []);

  useEffect(() => {
    // Restore cursor position after text updates
    if (cursorPosition && textareaRef.current) {
      textareaRef.current.setSelectionRange(cursorPosition.start, cursorPosition.end);
    }
  }, [text]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Save cursor position before updating text
    const { selectionStart, selectionEnd } = e.target;
    setCursorPosition({ start: selectionStart, end: selectionEnd });
    
    setText(e.target.value);
  };

  const handleExport = () => {
    if (!text.trim()) return;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'workspace.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          setText(content);
          // Reset cursor to start of text after import
          setCursorPosition({ start: 0, end: 0 });
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  return (
    <div className={styles.editorContainer}>
      <textarea
        ref={textareaRef}
        className={styles.editor}
        value={text}
        onChange={handleChange}
        placeholder="Start typing..."
        spellCheck="false"
        autoFocus
      />
      <Controls 
        onExport={handleExport}
        onImport={handleImport}
      />
    </div>
  );
};

export default TextEditor; 