# backend/main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Board(BaseModel):
    id: int
    title: str

boards = []

@app.get("/boards", response_model=List[Board])
def get_boards():
    return boards

@app.post("/boards", response_model=Board)
def create_board(board: Board):
    boards.append(board)
    return board

@app.get("/boards/{board_id}")
def delete_board(board_id: int):
    global boards
    boards = [b for b in boards if b.id != board_id]
    return {"message": "Board deleted"}