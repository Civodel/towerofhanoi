<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Tower Of Hanoi</h3>


---

<p align="center">
This is my proposed solution to the Towers of Hanoi mathematical problem. On the frontend side, it was developed using React + Vite, while on the backend side, Python with FastAPI was utilized.
    <br> 
</p>

## 📝 Table of Contents

[![Tower](https://img.shields.io/badge/license-MIT-blue.svg)]
- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

This project offers a solution to the mathematical puzzle known as the "Tower of Hanoi." By combining both frontend and backend technologies, it provides a robust foundation for efficiently handling various aspects of the problem.

I choose for the Front-End the combination of React + Vite. React is a JavaScript library with the power to create dynamic and scalable user interfases with the concept of reaussable  and declarative architecture. On the other hand Vite stands out for its fast build speed and modern web development aprpoach.

Together, React and Vite provide a solid and modern development environment that allows me to build an efficient and responsive application to effectively solve the Towers of Hanoi problem.

I chose FastApi for the backend, with my favorite programming language to manage the logic and algorithms required to solve the puzzle. FastApi is high-performance web framework for building APIs with Python. With asyncronous capacities allows to build efficient backend services.

Using both I aim to implement the necessary logic and algorithms to efficiently solve the Towers of Hanoi puzzle.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
Fron-End:

  React+Vite https://vitejs.dev/guide/

Backend: 
  Python 3.9 or superior https://www.python.org/downloads/


```

### Installing

A step by step series of examples that tell you how to get a development env running.

Front-End
```
git clone https://github.com/Civodel/towerofhanoi.git
cd Front
cd towe-of-hanoi
npm install 
npm run dev

```
Back-End

```
git clone https://github.com/Civodel/towerofhanoi.git
cd Back
cd HanoiBackend 
cd TowerOfHanoi
pip install requerements.txt
uvicorn main:app  --reload --host 0.0.0.0 --port 8000

```
Live Demo:
https://alanis-dev.netlify.app/


## 🎈 Usage <a name="usage"></a>

Pick a number of disks and just use the "Solution" button to see the solution 

## 🚀 Deployment <a name = "deployment"></a>

Front-end: 
  run the next command to build a prod version and use it
  npm run build
  the directory "dist" contains the prod version of the proyect

Backend:
  create an updated "requierement.txt" with
  "pip freeze > requerements.txt"
  then the commant to run the server in a cloud service like heroku in the Procfile file
  in this case:
  "web: uvicorn main:app --host=0.0.0.0 --port=${PORT:-5000}"

Version of the proyect is live in:
  https://alanis-dev.netlify.app/

## ⛏️ Built Using <a name = "built_using"></a>

- [React](https://es.react.dev/) - Web Library 
- [Vite](https://vitejs.dev/) - Web Environment 
- [Python](https://www.python.org/) - Proyect Principal Language
- [FastApi](https://fastapi.tiangolo.com/) -  Web Framework

## ✍️ Authors <a name = "authors"></a>

- [@civodel](https://github.com/Civodel) - Proyect Developer 


## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- So many google searches and special thanks to all the developers who i take part of them codes to complete mine 
