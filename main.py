from typing import Union

from fastapi import FastAPI
from starlette.responses import RedirectResponse

from routes import towers, solution
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = ["*"]

app.include_router(towers.route)
app.include_router(solution.route)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def redirect_docs():
    return RedirectResponse("/docs/")


