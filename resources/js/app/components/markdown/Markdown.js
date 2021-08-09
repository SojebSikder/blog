import React from 'react'

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
