import React, { useState, useEffect } from 'react';

import './styles.css'

import api from '../../services/api';
import Tag from '../Tag';
import { MdClear } from "react-icons/md";

export default function Tools() {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        async function loadData() {
            const response = await api.get('tools');
            console.log(response.data)
            setTools(response.data)
        }

        loadData();
    }, []);

    async function handleDelete(id) {
        const response = await api.delete(`tools/${id}`);

        if(response.status === 200) {
            const listTools = tools.filter(tool => tool._id !== id);
            setTools(listTools);
        }
    }

    return (
        <>
            <ul>
                {tools.map(tool => (
                    <li key={tool._id} className="tool">
                        <div className="tool-header">
                            <p className="tool-title">{tool.title}</p>
                            <button onClick={() => handleDelete(tool._id)} className="tool-delete" >
                                <MdClear size={10} color={"#fff"}/>
                            </button>
                        </div>

                        <p className="tool-uri">{tool.uri}</p>
                        <Tag tags={tool.tags}/>
                    </li>
                ))}
            </ul>
        </>
    );
}
