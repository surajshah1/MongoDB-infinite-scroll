![Image of Snackpass](https://www.snackpass.co/static/media/logo_round_2.d74f1dd2.png)

# Snackpass Full Stack Code Challenge --> Comments Below
Welcome to the Snackpass Challenge. We really appreciate your time to participate. 

## The Challenge

Assume the customers around a campus order 5000 orders a day from 50 local restaurants. Each order contains one or multiple products. For eg, `2 burritos, a soda, and a side of chips`.

1. Design a full stack application which returns an infinite-scrolling list of trending products to the user.
2. A product can be qualified as trending if it is purchased at least once in last 48 hours
3. Each product should be tagged with two tags:
    * a recent purchase tag: `5 purchased recently`
    * a time tag `ordered 3 min ago`
4. Use a heuristic to determine which trending products gets returned higher. Base heuristic on both recency and number of recent purchases.

## Requirements
1. Implement a Full stack solution including web server, persistent storage and associated code
2. Please submit with in 72 hours from the time you accept invitation. 
3. You can use pseudocode for parts of web application. For instance, you could replace a function body with "assume this service has the following API."

## Practices
### Quality of code 
 Please use best practices for writing code and publish to this repo. 
### Q & A
 Please create an issue and tag @shrimuthu, @aduca98, @nprbst or @seankwalker for questions or review.
### Data
For sample data, use [Sample Orders](https://docs.google.com/spreadsheets/d/1xfAjSlBflehOYj4O7I2YkfcBB1b9VgSHg9X-SmRWmsE/edit#gid=280279953)

Note: Remember to insert your own random timestamps to fit within 48 hours window.
 
# Solution
https://snackpassdemo.herokuapp.com/


## Setup 
    
Clone repository
```bash
git clone https://github.com/surajshah1/MongoDB-infinite-scroll.git
```

Navigate to correct diretory

```bash
cd MongoDB-infinite-scroll
```
Install required packages

```bash
npm i
```
Install required packaged in client directory and return back to the main directory
```bash
cd client
npm i
cd ..
```    

Start the server and client with one command

```bash
npm run dev
```

[localhost:3000](http://localhost:3000/) should be opened automatically with the application. After a brief wait the first 5 items will be displayed and scrolling down will populate more items. The final page will display a message "All _ orders have been displayed" with the total number of orders that have been rendered at the bottom.

> **_NOTE:_**  If only 5 items are displayed, decrease the browser window size until a scroll bar appears and continue to scroll until more items populate the window. This bug is due to larger windows being able to display all 5 items without the need of a scrollbar and the dependance on one for the infinite-scroll component. To fix this I need to increase the number of items displayed at a time to 10 or 15. This is a bug I overlooked in testing.

# Demo
<p align="center">
  <img src="https://media.giphy.com/media/RQGyIzr7As8CUrJ4n1/giphy.gif" alt="animated" />
</p>