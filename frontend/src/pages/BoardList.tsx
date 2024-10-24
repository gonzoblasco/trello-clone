import React, { useState, useEffect } from "react";
import { getBoards, createBoard, deleteBoard } from "../services/boardService";

const BoardList: React.FC = () => {
  const [boards, setBoards] = useState<any[]>([]);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = async () => {
    const data = await getBoards();
    setBoards(data);
  };

  const handleCreateBoard = async () => {
    await createBoard(title);
    fetchBoards();
  };

  const handleDeleteBoard = async (id: number) => {
    await deleteBoard(id);
    fetchBoards();
  };

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nuevo tablero"
      />
      <button onClick={handleCreateBoard}>Crear Tablero</button>
      <ul>
        {boards.map((board) => (
          <li key={board.id}>
            {board.title}
            <button onClick={() => handleDeleteBoard(board.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardList;
