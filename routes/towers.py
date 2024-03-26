from fastapi import APIRouter

from commands.tower_commands import  get_towers_by_disks
from constants.tower_constants import DEFAULT_BOARD

route =APIRouter(prefix="/towers",
                 tags=["towers"],
                 responses={404: {"description": "Page Not found"}})


@route.get("/create/")
async def get_towers()->dict:

    return {
    'a': [1,2,3],
    'b': [],
    'c': []
  }

@route.get("/create/{disks}")
async def get_towers(disks:str)->dict:

    disks_in_tower=get_towers_by_disks(disks)
    new_board=DEFAULT_BOARD
    new_board['a']=disks_in_tower

    return new_board

#uvicorn main:app  --reload --host 0.0.0.0 --port 8000
