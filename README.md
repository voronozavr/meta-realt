# meta-realt
## Installation
### Database setup (PostgreSQL)
  1. Create database with the next parameters:
  ```
  name: meta-realt
  username: postgres
  password: root
  ```
  2. Create tables:

  **ads**

  | Column | Type |
  | --- | --- |
  | id | bigserial |
  | localityid | bigint |
  | regionid | bigint |
  | square | character varying |
  | rooms | smallint |
  | price | character varying |
  | address | character varying |

  **localities**

  | Column | Type |
  | --- | --- |
  | id | bigserial |
  | name | character varying |
  | regionid | bigint |

  **regions**

  | Column | Type |
  | --- | --- |
  | id | bigserial |
  | name | character varying |

  **urls**

  | Column | Type |
  | --- | --- |
  | id | bigserial |
  | url | character varying |
  | parsed | boolean |
  | optionkey | character varying |

### Server setup
  1. Go to server directory and install dependencies from file 'package.json':
  ```
  yarn install
  ```
  2. To enable scraper change const 'scraperEnabled' to 'true' in index.js
  3. Go to folder 'src', start server with the command:
  ```
  node index.js
  ```
### Front-end application setup
  1. Go to root directory of project, install dependencies:
  ```
  yarn install
  ```
  2. Start front-end with te command:
  ```
  yarn start
  ```
 ## Usage
  Open [front-end app](http://localhost:8888/) in browser.
