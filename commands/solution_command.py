import copy

from constants.tower import MOVE_INDEX


def hanoi_tower_solution(num_discs, source,target,auxiliary):
    if num_discs == 1:
        return [(source, target)]
    moves = hanoi_tower_solution(num_discs - 1, source, auxiliary, target)
    moves.append((source, target))
    moves.extend(hanoi_tower_solution(num_discs - 1, auxiliary, target, source))

    return moves


def hanoi_tower_body(moves: list, towers) -> list:
    responses = []

    towers[MOVE_INDEX].reverse()

    for move in moves:
        from_tower, to_tower = move
        disk = towers[from_tower].pop()
        towers[to_tower].append(disk)
        responses.append(copy.deepcopy(towers))
    return responses


def hanoi_movements( moves: list):
    movements_to_complete = []
    for move in moves:
        from_tower, to_tower = move
        movement = f"Take the Disk from tower {from_tower} to tower the {to_tower}"
        movements_to_complete.append(movement)

    return movements_to_complete