import React from 'react'
import TreeView from 'react-tree-checkbox';
import {
    FaTrash,
    FaRegPlusSquare,
    FaChevronRight,
    FaChevronDown,
    FaFolder,
    FaFolderOpen,
} from 'react-icons/fa';
import { BsFileEarmarkCode } from 'react-icons/bs';
import { useRef } from 'react';
import { useState } from 'react';
import nodes from '../nodes';


const BasicExample = () => {
    const treeRef = useRef(null);
    const [Nodes, setNodes] = useState(nodes);
    const [expanded, setExpanded] = useState([]);
    const [addNode, setaddNode] = useState(false);
    const [nodeid, setnodeid] = useState(null);
    const [formobj, setformobj] = useState({
        text: '',
    });
    const [path, setpath] = useState('');

    const handleExpand = (newArray) => {
        console.log('handleExpand', newArray);
        setExpanded([...newArray]);
    };
    const handleCheck = (treeNodes) => {
        console.log('handleCheck', treeNodes);
        setNodes([...treeNodes]);
    };

    const allowAdd = (nodeid) => {
        console.log(nodeid);
        setnodeid(nodeid);
        setaddNode(true);
    };

    const closeAllowAdd = () => {
        setaddNode(false);
    };

    const handleChange = (e) => {
        let { name, value } = e.target;
        setformobj((prevobj) => ({
            ...prevobj,
            [name]: value,
        }));
    };

    const onSaveNode = () => {
        treeRef.current.addNewNode(nodeid, formobj);
        setaddNode(false);
        setformobj({
            text: '',
        });
    };

    const handleNodeClick = (nodeobj) => {
        console.log(nodeobj);
        setpath(nodeobj.path);
    };
    return (
        <div>
            <div style={{ border: '1px solid red', padding: 12 }}>
                <TreeView
                    ref={treeRef}
                    filternodes={Nodes}
                    expanded={expanded}
                    handleExpand={handleExpand}
                    changeState={handleCheck}
                    column={12}
                    onNodeClick={handleNodeClick}
                    onNodeClickOptions={{
                        allowExpand: true, // pass false if you dont want to expand node on node click
                        key: 'text', // can be any key of the node eg: id, value status
                        delimiter: '/',
                    }}
                    customStyling={{
                        fontSize: '16px',
                        fontWeight: '400',
                        color: 'purple',
                    }}
                    // horizontalSpacing={'12px'}
                    verticalSpacing={'0px'}
                    borderLeft={'1px dotted red'}
                    // allowCheck={false}
                    addText={'Add new right'}
                    handleAddNode={allowAdd}
                    allowDelete={true}
                    allowAdd={true}
                    icons={{
                        compressIcon: <FaChevronRight style={{ color: '#7c7c7c' }} />,
                        expandIcon: <FaChevronDown style={{ color: '#7c7c7c' }} />,
                        nodeCompressIcon: <FaFolder style={{ color: '#8a59ff' }} />,
                        nodeExpandIcon: <FaFolderOpen style={{ color: '#8a59ff' }} />,
                        nonNodeIcon: <BsFileEarmarkCode style={{ color: '#8a59ff' }} />,
                        deleteIcon: <FaTrash style={{ color: '#ff4b4b' }} />,
                        addIcon: <FaRegPlusSquare style={{ color: 'blue' }} />,
                    }}
                />
            </div>
            <div>
                {addNode ? (
                    <div style={{ border: '1px solid red', padding: 12 }}>
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="mb-3">
                                    <label className="form-label">Enter text</label>
                                    <input
                                        value={formobj.text}
                                        name="text"
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>

                        <button onClick={onSaveNode} className="btn btn-success me-4">
                            Save
                        </button>
                        <button onClick={closeAllowAdd} className="btn btn-danger">
                            Cancel
                        </button>
                    </div>
                ) : null}
            </div>
            <div>
                {path}
                <h1>Note : In nodes array every id must be unique</h1>
            </div>
        </div>
    )
}

export default BasicExample