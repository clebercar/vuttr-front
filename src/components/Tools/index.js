import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.css'

import { Creators as ToolsActions } from '../../store/ducks/tools'

import Tag from '../Tag';
import { MdClear } from "react-icons/md";

class Tools extends Component{
    componentDidMount() {
        const { getToolsRequest, tools } = this.props;
        getToolsRequest(tools);
    }

    handleDelete(id) {
        const { removeToolRequest } = this.props;

        removeToolRequest(id)
    }

    render() {
        const { tools, errors, loading } = this.props;

        return(
            <>
                { !errors && (<p>Deu ruim</p>) }
                <ul>
                    { tools && (
                        tools.map(tool => (
                            <li key={tool._id} className="tool">
                                <div className="tool-header">
                                    <p className="tool-title">{tool.title}</p>
                                    <button
                                        onClick={() => this.handleDelete(tool._id)} 
                                        className="tool-delete" >
                                        <MdClear size={10} color={"#fff"}/>
                                    </button>
                                </div>

                                <p className="tool-uri">{tool.uri}</p>
                                <Tag tags={tool.tags}/>
                            </li>
                            )) 
                        )
                    } 
                </ul>
            </>   
        )
    }
}

const mapStateToProps = state => ({ 
    loading: state.tools.toolsList.loading,
    errors: state.tools.toolsList.errors,
    tools: state.tools.toolsList.tools,
})

const mapDispatchToProps = dispatch => bindActionCreators(ToolsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Tools);