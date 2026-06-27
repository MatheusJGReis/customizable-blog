# Customizable Blog

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![HTML](https://img.shields.io/badge/html-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/css-%23663399.svg?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F.svg?style=for-the-badge&logo=node.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)

A simple and customizable Django-based web application designed to serve as a ready-to-use foundation for building your own personal blog.

---

## Setup Guide

1. Create and activate a Python virtual environment.
2. Install required Python packages by running `pip install -r requirements.txt` in your terminal.
3. Install required Node.js packages by running `npm install` in your terminal.
4. Create a .env file in the root directory containing these settings:
    ```env
    DEBUG=on
    SECRET_KEY=your_secret_key
    ALLOWED_HOSTS=localhost,127.0.0.1
    DATABASE_URL=sqlite:///db.sqlite3
    ```
    > If you do not have a secret key, you can generate one [here](https://djecrety.ir/).
    > 
    > If you wish to use a different database instead of SQLite3, enter the desired database's URL and check for drivers when necessary.
5. Run `py manage.py migrate` on your terminal to migrate the database and its tables.
6. Run `py manage.py runserver` on your terminal and enter the web page to check if the setup went well.

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for more information.
