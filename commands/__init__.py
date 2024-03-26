from typing import Optional

from pydantic import BaseModel


class Tower(BaseModel):
    id: int
    disks: Optional[int]
