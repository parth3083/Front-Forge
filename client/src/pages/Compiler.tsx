import CodeEditor from "@/components/CodeEditor"
import Editor_Header from "@/components/Editor_Header"
import RenderPage from "@/components/RenderPage"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
  
function Compiler() {
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