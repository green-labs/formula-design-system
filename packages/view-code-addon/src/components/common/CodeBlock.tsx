import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs"

const CodeBlock = ({ children }) => {
  return (
    <SyntaxHighlighter
      customStyle={{ margin: 0 }}
      wrapLongLines={true}
      language="typerscript"
      style={nightOwl}
    >
      {children}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
