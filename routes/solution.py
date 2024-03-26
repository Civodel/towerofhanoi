from typing import Optional
from venv import logger

from fastapi import APIRouter
import time
from commands.solution_command import hanoi_tower_solution, hanoi_tower_body
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel
from routes.towers import get_towers


route = APIRouter(prefix="/solution",
                  tags=["solution"],
                  responses={404: {"description": "Page Not found"}})


class Tower(BaseModel):
    a :Optional[list[int]]
    b :Optional[list[int]]
    c :Optional[list[int]]
@route.post("/{disks}")
async def get_solution(disks: str, tower:Tower):
    moves = hanoi_tower_solution(int(disks), "a", "c", "b")
    json_tower=jsonable_encoder(tower)
    body = hanoi_tower_body(moves, json_tower)

    return body
