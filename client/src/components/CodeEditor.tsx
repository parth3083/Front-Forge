import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import React from 'react'
import { tags as t } from '@lezer/highlight';
import {  draculaInit } from '@uiw/codemirror-theme-dracula';
import { loadLanguage, langNames, langs } from '@uiw/codemirror-extensions-langs';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

function CodeEditor() {
    const defaultLanguage = useSelector(
        (state: RootState) => state.compilerSlice.currentLanguage
    ) 
    const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val:any) => {
    console.log('val:', val);
    setValue(val);
  }, []);
  return (
    <CodeMirror value={value} height="calc(100vh - 50px - 60px)" extensions={[loadLanguage(defaultLanguage)!]} onChange={onChange} theme={draculaInit({
        settings: {
          caret: '#c6c6c6',
          fontFamily: 'monospace',
        },
        styles: [
          { tag: t.comment, color: '#6272a4' },
        ]
      })} />  
  )
}

export default CodeEditor