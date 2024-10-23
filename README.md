# Electricity Bill Manager

Electricity Bill Manager is an app designed to track electricity offers from various contractors and make sure you always have the best contractor for your use case.
Currently, it uses [ERSE Simulator](https://simulador.precos.erse.pt/eletricidade/) to compare your current contract with competitors and [ntfy.sh](https://ntfy.sh/) to notify you if a better deal comes up. 
## Deploy

You can deploy it on your machine with Docker by creating an image and/or adding it in systemd as a service to run periodically.
 It is currently being adapted to support deploy on AWS Lambda

## Features
The project is in a very early stage but these are its fundamental features:

- [x] Compare current contract with competitors' and notify user about it (currently it only compares based on the total invoice cost)
- [ ] Store user's electricity bill data on a database (it is currently stored in .json files)
- [ ] Support for AWS Lambda deploy (This is useful to utilize AWS Lambda free tier)
- [ ] Automatically sign the contract after user agrees with conditions (It will be necessary to make a scraper for each contractors' website or send them an email if they allow it)
### Nice-To-Have Features  
These features would enrich the application but aren't  strictly necessary

- [ ] create a docker image to deploy locally
- [ ] add support for the simulator [spreadsheet](https://www.tiagofelicia.pt/).
- [ ] add support for scraping electricity usage data from invoice
- [ ] add support to fetch electricity usage data from [E-Redes](https://www.e-redes.pt/pt-pt)

## In Development
The tasks in development are: 
- [ ] Improve comparison mechanism
- [ ] Create database schema
- [ ] Add support for AWS Lambda
- [ ] Improve code testability
- [ ] Add unit testing

