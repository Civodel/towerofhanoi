from fastapi import APIRouter

from commands.tower_commands import  get_towers_by_disks
from constants.tower import DEFAULT_BOARD,MOVE_INDEX
from constants.response import NOT_FOUND, STATUS_CODE_NOT_FOUND

route =APIRouter(prefix="/towers",
                 tags=["towers"],
                 responses={STATUS_CODE_NOT_FOUND: NOT_FOUND})


@route.get("/create/") #dummy function
async def get_towers()->dict:

    return DEFAULT_BOARD

@route.get("/create/{disks}")
async def get_towers(disks:str)->dict:

    disks_in_tower=get_towers_by_disks(disks)
    new_board=DEFAULT_BOARD
    new_board[MOVE_INDEX]=disks_in_tower

    return new_board
