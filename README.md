## How to run locally

### Setting up Flask server

1. Clone the repository

```
git clone https://github.com/re1san/Flix --branch main --depth 1 Flix-Server
```

2. Create python virtual env and install dependencies

```
cd Flix-Server
python -m venv venv
source ./venv/bin/activate
pip install -r requirements.txt
```

3. Start the Flask server

```
gunicorn wsgi:app
```

4. Your Flask server will start at `http://127.0.0.1:8000`

> [!TIP]
> If you are using NixOS/Nix, after step 1 you can just run `cd Flix-Server && nix develop`, this will do all the steps and start server at `http://127.0.0.1:8000`

### Setting up Web server

1. Clone the repository

```
git clone https://github.com/re1san/Flix --branch web --depth 1 Flix-Web
```

2. Install dependencies

```
cd Flix-Web
npm install
```

3. Get TMDB API Key and Add it in `.env.local`

```
cp .env.sample .env.local
# Place your TMDB API Key in .env.local
```

4. Start the Web server

```
npm run dev
```

5. Your Web server will start at `http://127.0.0.1:5000`

Now you can visit `http://127.0.0.1:5000` to see the website working.
