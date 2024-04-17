import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globle.css'; // Import the CSS file

function App() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const handleAdd = () => {
        if (newItem) {
            if (editIndex !== null) {
                const newItems = [...items];
                newItems[editIndex] = newItem;
                setItems(newItems);
                setEditIndex(null);
            } else {
                setItems([...items, newItem]);
            }
            setNewItem('');
        }
    };

    const handleDelete = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    const handleEdit = (index) => {
        setNewItem(items[index]);
        setEditIndex(index);
    };

    return (
        <div className="container" style={{backgroundColor: '#ADD8E6'}}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center">Todo List</h1>
                    <div className="input-group mt-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="New task"
                            value={newItem}
                            onChange={(e) => setNewItem(e.target.value)}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary"
                                type="button"
                                style={{ backgroundColor: 'green', color: 'white', margin: '10px' }}
                                onClick={handleAdd}
                            >
                                {editIndex !== null ? 'Update' : 'Add'}
                            </button>
                        </div>
                    </div>
                    <ul className="list-group mt-3">
                        {items.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {item}
                                <div>
                                    <button
                                        className="btn btn-primary btn-sm mr-2"
                                        style={{ margin: '10px' }}
                                        onClick={() => handleEdit(index)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        style={{ margin: '10px' }}
                                        onClick={() => handleDelete(index)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
