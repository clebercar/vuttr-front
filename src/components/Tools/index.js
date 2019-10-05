import React, { useState } from 'react';

import {
    Tool,
    ToolTitle,
    ToolUri,
    ToolDelete,
    ToolHeader
} from './styles';

import Tag from '../Tag';
import { MdClear } from "react-icons/md";

export default function Tools() {
    const [tools, setTools] = useState([
        { id: 1, title: 'Github', description: 'Lorem ipsum shura it leave to caps', uri: 'https://teste.com'},
        { id: 2, title: 'Github', description: 'Lorem ipsum shura it leave to caps', uri: 'https://teste.com'},
        { id: 3, title: 'Github', description: 'Lorem ipsum shura it leave to caps', uri: 'https://teste.com'},
        { id: 4, title: 'Github', description: 'Lorem ipsum shura it leave to caps', uri: 'https://teste.com'},
        { id: 5, title: 'Github', description: 'Lorem ipsum shura it leave to caps', uri: 'https://teste.com'},
    ]);

    return (
        <>
            <ul>
                {tools.map(tool => (
                    <Tool>
                        <ToolHeader>
                            <ToolTitle>{tool.title}</ToolTitle>
                            <ToolDelete>
                                <MdClear size={10} color={"#565bff"}/>
                            </ToolDelete>
                        </ToolHeader>

                        <ToolUri>{tool.uri}</ToolUri>
                        <Tag />
                    </Tool>
                ))}
            </ul>
        </>
    );
}
