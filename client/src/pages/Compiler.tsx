import CodeEditor from "@/components/CodeEditor"
import Editor_Header from "@/components/Editor_Header"
import RenderPage from "@/components/RenderPage"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { handleError } from "@/utils/handleError"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import { useDispatch } from "react-redux"
import { updateLoadCode } from "@/redux/slices/compilerSlice"
import { toast } from "sonner"
  
function Compiler() {
  const { urlId } = useParams();
  const dispatch = useDispatch();
  const loadCode = async () => {
    try {
      const response = await axios.post(`https://front-forge.netlify.app/compiler/load`, {
        urlId: urlId,
      });
      dispatch(updateLoadCode(response.data.fullCode))
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error?.response?.status === 500) {
          toast("Invalid URL, default code loaded");
        }
      }
      handleError(error);
    }
  }
  useEffect(() => {
    if (urlId) {
      loadCode();
    }
  },[urlId])
  return (
    <ResizablePanelGroup
    direction="horizontal"
  >
    <ResizablePanel className="h-[calc(100dvh-60px)] min-w-[535px]" defaultSize={50}>
        <Editor_Header/>
        <CodeEditor/>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel className="h-[calc(100dvh-60px)] min-w-[350px]" defaultSize={50}>
      <RenderPage/>
    </ResizablePanel>
  </ResizablePanelGroup>
  )
}

export default Compiler