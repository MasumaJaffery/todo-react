/* eslint-disable linebreak-style */
import { useState } from 'react';
import RemoveTodo from './RemoveTodo';

const InputTodo = () => {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);

  const addItem = () => {
    if (!inputData) {
      throw new Error('Input data cannot be empty');
    } else {
      const newItem = { id: items.length + 1, name: inputData };
      setItems([...items, newItem]);
      setInputData('');
    }
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const removeAllItems = () => {
    setItems([]);
  };

  const editItem = (id) => {
    setEditingItemId(id);
    const itemToEdit = items.find((item) => item.id === id);
    if (itemToEdit) {
      setInputData(itemToEdit.name);
    }
  };

  const handleEditChange = (e) => {
    setInputData(e.target.value);
  };

  const handleEditSave = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, name: inputData };
      }
      return item;
    });
    setItems(updatedItems);
    setEditingItemId(null);
    setInputData('');
  };

  return (
    <>
      <div className="AddItems">
        <input
          type="text"
          placeholder="Add items in list...!"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (editingItemId) {
                handleEditSave(editingItemId);
              } else {
                addItem();
              }
            }
          }}
        />
        <button type="button" className="add-btn" title="Add-Item" onClick={addItem}>
          Add
        </button>
      </div>
      <div className="listItems">
        {items.map((item) => (
          <div className="each-item" key={item.id}>
            {editingItemId === item.id ? (
              <input
                type="text"
                value={inputData}
                onChange={handleEditChange}
                onBlur={() => handleEditSave(item.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleEditSave(item.id);
                  }
                }}
              />
            ) : (
              <h4>{item.name}</h4>
            )}
            <button type="button" className="add-btn" title="Edit-Item" onClick={() => editItem(item.id)}>
              Edit
            </button>
            <button type="button" className="add-btn" title="Delete-Item" onClick={() => deleteItem(item.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <RemoveTodo onRemoveAll={removeAllItems} />
    </>
  );
};

export default InputTodo;
