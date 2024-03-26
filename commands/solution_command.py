import copy
from typing import Optional

from pydantic import BaseModel


def hanoi_tower_solution(num_discs, source,target,auxiliary):
    if num_discs == 1:
        return [(source, target)]
    moves = hanoi_tower_solution(num_discs - 1, source, auxiliary, target)
    moves.append((source, target))
    moves.extend(hanoi_tower_solution(num_discs - 1, auxiliary, target, source))

    return moves


def hanoi_tower_body(moves: list, towers) -> list:
    responses = []

    towers['a'].reverse()

    for move in moves:
        from_tower, to_tower = move
        disk = towers[from_tower].pop()
        towers[to_tower].append(disk)
        responses.append(copy.deepcopy(towers))
    print(responses)
    return responses


def hanoi_movements( moves: list):
    mv = []
    for move in moves:
        from_tower, to_tower = move
        movement = f"Take Disk from tower {from_tower} to tower {to_tower}"
        mv.append(movement)

    return mv