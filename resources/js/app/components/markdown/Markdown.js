import React from 'react'
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'

export default function Markdown({ children }) {
    return (
        <>
            {/* <ReactMarkdown
                remarkPlugins={[gfm]}
            >
                {children}
            </ReactMarkdown> */}

            <span dangerouslySetInnerHTML={{ __html: children }} />
        </>
    )
}
