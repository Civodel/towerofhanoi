from typing import Optional

from fastapi import APIRouter
from commands.solution_command import hanoi_tower_solution, hanoi_tower_body,hanoi_movements
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel
from constants.response import NOT_FOUND, STATUS_CODE_NOT_FOUND
from constants.solution import SOURCE, TARGET, AUXILIARY


route = APIRouter(prefix="/solution",
                  tags=["solution"],
                  responses={STATUS_CODE_NOT_FOUND: NOT_FOUND})

class Tower(BaseModel):
    a :Optional[list[int]]
    b :Optional[list[int]]
    c :Optional[list[int]]
@route.post("/{disks}")
async def get_hanoi_solution(disks: str, tower:Tower):
    moves = hanoi_tower_solution(int(disks), SOURCE,TARGET, AUXILIARY)
    json_tower=jsonable_encoder(tower)
    towers_solution = hanoi_tower_body(moves, json_tower)

    return towers_solution

@route.get("/moves/{disks}")
async def get_solutionmoves(disks: str, ):
    moves = hanoi_tower_solution(int(disks), SOURCE,TARGET, AUXILIARY)
    movements =hanoi_movements(moves)
    return movements

