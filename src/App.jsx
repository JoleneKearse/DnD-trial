import { useState, useRef } from 'react'

function App() {
  const [list, setList] = useState(['Gracie', 'Stella', 'Elvira', 'Emily']);
  // grab dragging references
  const dragItem = useRef();
  const dragOverItem = useRef();

  // get position of dragged item
  const dragStart = (e, position) => {
    dragItem.current = position;
  }

  // get position of new order
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  }

  // change overall list order
  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    setList(copyListItems);
  }

  return (
    <>
      {
        list &&
        list.map((item, index) => (
          <div style={{ backgroundColor: 'lightblue', margin: '20px 25%', padding: '1em 1.5em', textAlign: 'center', fontSize: '40px', borderRadius: '1em', cursor: 'grab' }}
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            key={index}
            draggable>
            {item}
          </div>
        ))}
    </>
  )
}

export default App
