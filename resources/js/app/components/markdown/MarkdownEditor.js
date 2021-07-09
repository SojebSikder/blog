import React from 'react'
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
import 'react-summernote/lang/summernote-es-EU';

export default function MarkdownEditor({ name, value, onChange }) {
    return (
        <>
            <ReactSummernote
                name={name}
                value={value}
                options={{
                    lang: 'en-EU',
                    height: 350,
                    dialogsInBody: true,
                    toolbar: [
                        ['style', ['style']],
                        ['font', ['bold', 'underline', 'clear']],
                        ['fontname', ['fontname']],
                        ['para', ['ul', 'ol', 'paragraph']],
                        // ['table', ['table']],
                        ['insert', ['link', 'picture', 'video']],
                        ['view', ['fullscreen', 'codeview']]
                    ]
                }}
                onChange={onChange}
            />
        </>
    )
}
