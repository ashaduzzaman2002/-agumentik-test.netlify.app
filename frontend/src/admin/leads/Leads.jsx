import React, { useEffect, useState } from 'react'
import './leads.css'
import axios from 'axios'
import jsPDF from 'jspdf';


const Leads = () => {
    const [leads, setLeads] = useState([])

    const getLeads = async () => {
        const {data} = await axios.get('http://localhost:5000/api/lead/all')
        setLeads(data.leads)
        console.log(data.leads)
    }
    useEffect(() => {
     getLeads()
    }, [])
    
    const downloadPDF = async () => {
        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'in',
            format: [4, 2],
        });

        doc.html(document.querySelector('#pfd'), {
            async callback(doc) {
                await doc.save('pdf_name.pdf');
            },
        });
    }

  return (
    <div className='leads'>
        <button className='pdf-btn' onClick={downloadPDF}>DOWNLOAD PDF</button>
        <ol id='pdf'>
            {
                leads.map((item, i) => (
                <li key={i}>{item.email}</li>
                ))
            }
            
        </ol>
    </div>
  )
}

export default Leads