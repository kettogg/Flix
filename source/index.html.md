---
title: API Reference

language_tabs: # must be one of https://github.com/rouge-ruby/rouge/wiki/List-of-supported-languages-and-lexers
  - javascript
  - shell
  - rust
  - python

toc_footers:
  - <a href='https://www.discord.com/users/782274609030103111'>Request For A Developer Api Key</a>
  - <a href='https://www.discord.com/users/782274609030103111'>Contact Me On Discord</a>

includes:
  - errors

search: true

code_clipboard: true

meta:
  - name: Flix Api For Movies
    content: Documentation for the Flix Api
---

# Introduction

Welcome to the Flix API! You can use our API to access different movies data and get recommendations for a movie.

The Movie recommendation system is implemented using cosine similarity between different features of a movie like its actors, genres, directors and keywords. This project is a part of my university course but due to my sheer curosity about servers and API, I made an API for it and deployed it on a VPS :&rpar;

We are using <a href='https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata?resource=download'>TMDB 5000 Movie Dataset</a> from Kaggle which contains movies upto 2018 so you might not be able to search for latest movies.

Follow the below guide on how you can make API requests to my server. You can see code examples in the right on how to make API requests, and at top right you can switch the programming language to see examples in that language.

You can get the source code on my <a style='color: #42BE56;' href='https://www.github.com/re1san/Flix'>Github</a>.

<aside class="notice">
Depending on your location the API may take time to fetch the requests as my VPS is in Hong Kong.
</aside>

# Authentication

To access Flix API you will need an API Key. But Why? This is to prevent spammers from spamming the API endpoint as it may cause the server to crash. To get an API Key feel free to contact me on discord from <a style='color: #FFE978;' href=https://www.discord.com/users/782274609030103111>here</a> or from the left navigation menu.

Don't worry, I am not charging any fee for the API Key as long as you are using it for your project purposes and not spamming my server :D

# API Usage

## Get All Movie Titles

```javascript
const raw = "";

const requestOptions = {
  method: "GET",
  body: raw,
  redirect: "follow",
};

fetch(
  "https://www.ketto.space/flix/api/titles?key=YOUR_API_KEY",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

```shell
# Using curl
curl --location 'https://www.ketto.space/flix/api/titles?key=YOUR_API_KEY' \
--data ''

# Using wget
wget --no-check-certificate --quiet \
  --method GET \
  --timeout=0 \
  --header '' \
   'https://www.ketto.space/flix/api/titles?key=YOUR_API_KEY'
```

```rust
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::builder()
        .build()?;

    let data = "";

    let request = client.request(reqwest::Method::GET, "https://www.ketto.space/flix/api/titles?key=YOUR_API_KEY")
        .body(data);

    let response = request.send().await?;
    let body = response.text().await?;

    println!("{}", body);

    Ok(())
}
```

```python
import requests

url = "https://www.ketto.space/flix/api/titles?key=YOUR_API_KEY"

payload = ""
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

> The above command returns JSON structured like this:

```json
{
  "count": 4803,
  "list": [
    {
      "id": 19995,
      "title": "Avatar"
    },
    {
      "id": 285,
      "title": "Pirates of the Caribbean: At World's End"
    },
    .
    .
  ]
}
```

This endpoint retrieves all the movie titles availabe in the dataset with the ID of each title.

You can look at the code samples in the right section on how to make the request and sample outputs you will get.

### HTTPS Request

`GET https://ketto.space/flix/api/titles?key=YOUR_API_KEY`

### Query Parameters

| Parameter | Default  | Description                                                              |
| --------- | -------- | ------------------------------------------------------------------------ |
| key       | Required | Your API Key, accessing this endpoint without it will give you an error. |

### Output Schema

| Field | Description                                                                   |
| ----- | ----------------------------------------------------------------------------- |
| count | Total number of movies available in the dataset.                              |
| list  | Array of dictionary each containing key value pairs of movie `id` and `title` |

<aside class="success">
Remember — Do not share your API Key!
</aside>

## Get Movie ID from Title

```javascript
const raw = "";

const requestOptions = {
  method: "GET",
  body: raw,
  redirect: "follow",
};

fetch(
  "https://www.ketto.space/flix/api/id?title=Avatar&key=YOUR_API_KEY",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

```shell
# Using curl
curl --location 'https://www.ketto.space/flix/api/id?title=Avatar&key=YOUR_API_KEY' \
--data ''

# Using wget
wget --no-check-certificate --quiet \
  --method GET \
  --timeout=0 \
  --header '' \
   'https://www.ketto.space/flix/api/id?title=Avatar&key=YOUR_API_KEY'
```

```rust
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
  let client = reqwest::Client::builder()
      .build()?;

  let data = "";

  let request = client.request(reqwest::Method::GET, "https://www.ketto.space/flix/api/id?title=Avatar&key=YOUR_API_KEY")
      .body(data);

  let response = request.send().await?;
  let body = response.text().await?;

  println!("{}", body);

  Ok(())
}
```

```python
import requests

url = "https://www.ketto.space/flix/api/id?title=Avatar&key=YOUR_API_KEY"

payload = ""
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

```

> The above command returns JSON structured like this:

```json
{
  "id": "19995",
  "title": "Avatar"
}
```

This endpoint retrieves the `id` of the movie `title`.

<aside class="warning">Titles containing spaces between can be passed using special characters like <code>%20</code> or <code>+</code> instead of empty space as it will be an invalid URL. See below for an example.</aside>

### HTTPS Request

`GET https://www.ketto.space/flix/api/id?title=Avatar&key=YOUR_API_KEY`

Title with spaces can be passed as follows:

`GET https://www.ketto.space/flix/api/id?title=Iron+Man&key=YOUR_API_KEY`

### Query Parameters

| Parameter | Description             |
| --------- | ----------------------- |
| title     | The title of the movie. |
| key       | Your API Key.           |

### Output Schema

| Field | Description  |
| ----- | ------------ |
| id    | Movie ID.    |
| title | Movie Title. |

## Get Recommended Movies

```javascript
const raw = "";

const requestOptions = {
  method: "GET",
  body: raw,
  redirect: "follow",
};

fetch(
  "https://www.ketto.space/flix/api/recommends?title=Iron+Man&key=YOUR_API_KEY",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

```shell
# Using curl
curl --location 'https://www.ketto.space/flix/api/recommends?title=Iron%2BMan&key=YOUR_API_KEY' \
--data ''

# Using wget
wget --no-check-certificate --quiet \
  --method GET \
  --timeout=0 \
  --header '' \
   'https://www.ketto.space/flix/api/recommends?title=Iron+Man&key=YOUR_API_KEY'
```

```rust
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::builder()
        .build()?;

    let data = "";

    let request = client.request(reqwest::Method::GET, "https://www.ketto.space/flix/api/recommends?title=Iron+Man&key=YOUR_API_KEY")
        .body(data);

    let response = request.send().await?;
    let body = response.text().await?;

    println!("{}", body);

    Ok(())
}
```

```python
import requests

url = "https://www.ketto.space/flix/api/recommends?title=Iron+Man&key=YOUR_API_KEY"

payload = ""
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

> The above command returns JSON structured like this:

```json
{
  "recommends": [
    {
      "id": 10138,
      "title": "Iron Man 2"
    },
    {
      "id": 68721,
      "title": "Iron Man 3"
    },
    {
      "id": 99861,
      "title": "Avengers: Age of Ultron"
    },
    .
    .
  ]
}
```

This endpoint gives you a list of ten similar movies based on the title passed in the query parameter.

### HTTPS Request

`GET https://www.ketto.space/flix/api/recommends?title=Iron+Man&key=YOUR_API_KEY`

### Query Parameters

| Parameter | Description           |
| --------- | --------------------- |
| title     | You know.             |
| key       | Ofcourse you API Key. |

### Output Schema

| Field      | Description                                               |
| ---------- | --------------------------------------------------------- |
| recommends | A array of ten similar movies each with its id and title. |
