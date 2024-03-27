from typing import Union

from fastapi import FastAPI
from starlette.responses import RedirectResponse

from routes import towers, solution
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(towers.route)
app.include_router(solution.route)



@app.get("/")
async def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
async def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


#uvicorn main:app  --reload --host 0.0.0.0 --port 8000