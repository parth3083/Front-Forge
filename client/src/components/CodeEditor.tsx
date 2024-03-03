import CodeMirror from '@uiw/react-codemirror';
import React from 'react'
import { tags as t } from '@lezer/highlight';
import {  draculaInit } from '@uiw/codemirror-theme-dracula';
import { loadLanguage} from '@uiw/codemirror-extensions-langs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { updateCodeValue } from '@/redux/slices/compilerSlice';

function CodeEditor() {
  const currentLanguage=useSelector((state:RootState)=>state.compilerSlice.currentLanguage)
  const defaultLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  const fullcode = useSelector((state: RootState) => state.compilerSlice.fullcode);
  const dispatch = useDispatch();
  const onChange = React.useCallback((value:string) => {
    dispatch(updateCodeValue(value))
  }, []);
  return (
    <CodeMirror value={fullcode[currentLanguage]} height="calc(100vh - 50px - 60px)" extensions={[loadLanguage(defaultLanguage)!]} onChange={onChange} theme={draculaInit({
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