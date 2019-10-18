import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.css'

import { Creators as ToolsActions } from '../../store/ducks/tools'

import Tag from '../Tag';
import { MdClear } from "react-icons/md";

const Tools = ({ tools, removeTool }) => (
    <>
        <ul>
            {tools.map(tool => (
                <li key={tool._id} className="tool">
                    <div className="tool-header">
                        <p className="tool-title">{tool.title}</p>
                        <button 
                            onClick={() => removeTool(tool._id)} 
                            className="tool-delete" >
                            <MdClear size={10} color={"#fff"}/>
                        </button>
                    </div>

                    <p className="tool-uri">{tool.uri}</p>
                    <Tag tags={tool.tags}/>
                </li>
            ))}
        </ul>
    </>   
)

const mapStateToProps = state => ({ tools: state.tools })
const mapDispatchToProps = dispatch => 
    bindActionCreators(ToolsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Tools);