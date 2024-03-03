import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

function RenderPage() {
  const fullcode = useSelector(
    (state: RootState) => state.compilerSlice.fullcode
  );
  const combinedCode = `
    <html>
    <style>
    ${fullcode.css}
    </style>
    <body>
    ${fullcode.html}
    </body>
    <script>
    ${fullcode.javascript}
    </script>
    </html>
    `;
    const iFrameCode=`data:text/html;charset=utf-8,${encodeURIComponent(combinedCode)}`
    return <div className="bg-white h-[calc(100dvh-60px)]">
      <iframe className="w-full h-full" src={iFrameCode} ></iframe>
  </div>;
}

export default RenderPage;
