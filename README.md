# URLHelper
An online URL shortener.
- Link: https://peifarm.online

## Table of Contents
- [Technologies](#Technologies)
- [Architecture](#Architecture)
- [Database](#database)

## Technologies
### Back-End
- Node.js / Express.js
- RESTful API
- NGINX

### Cloud Service
- AWS EC2
- MongoDB Atlas

### Database 
- MongoDB

### Networking
- HTTPS
- SSL
- Domain Name System (DNS)

### Others
- Design Pattern: MVC
- Version Control: Git, GitHub

## Architecture
![shortenurl_architecture](https://stylishbucket.s3-ap-northeast-1.amazonaws.com/shortenurl/shortenurl_architecture.png)

## Database
|  urls   |
|  :----:  |
| _id  |
| long_url  |
| short_url  |
| date  |
| shorten_req_cnt  |
| click_cnt |