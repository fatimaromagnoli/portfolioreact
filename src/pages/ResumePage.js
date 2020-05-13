import React, { useState } from 'react';
import resume from '../assets/Fatinha_resume.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumePage() {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    return (
        <div>
            {/* <a href={resume}>Resume</a> */}
            <Document
                file={resume}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>

            <p>Page {pageNumber} of {numPages}</p>
            <button
                onClick={() => setPageNumber(pageNumber === 1 ? 2 : 1)}
            >
                Page {pageNumber === 1 ? 2 : 1}
            </button>
        </div>
    )
}

export default ResumePage;
