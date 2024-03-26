from typing import Optional

from pydantic import BaseModel

class Tower(BaseModel):
    a :Optional[list[int]]
    b :Optional[list[int]]
    c :Optional[list[int]]