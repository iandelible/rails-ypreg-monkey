##Event Registration application

[![Build Status](https://api.shippable.com/projects/54330a6a7a7fb11eaa6491a6/badge?branchName=master)](https://app.shippable.com/projects/54330a6a7a7fb11eaa6491a6/builds/latest)

Repo: https://github.com/hdfelix/ypreg.git

This is an event registration management site. You can use this site to manage registrations short one-day events that require
no hospitality accomodations as well as multi-day events where hospitality accomodations are necessary.  
   
###Features
* Create and manage events
* Create and manage event locations
* Create and manage hospitality locations
* Create and manage different types of users
* Reports and graphs for all of the data types
* ...

## Setup
To get started, clone this repo and run:
```
$ bundle
```
The site is configured to use PostgreSQL for all environments (Development|Test|Production). Make sure you install and configure PostgreSQL before running the following commands from your terminal:
```
$ rake db:create
$ rake db:migrate
```

Next, Run the following command to create an admin user account:  
```
rake ypreg:create_admin
```
...
* (instructions on using the different parts of the site)
* (Themes)

## Constants
* US States - Location::STATE_LIST
* Event Types - Event::EVENT_TYPE
* User Types - User::USER_TYPE
* Hospitality TYpes - Hospitality::HOSPITALITY_TYPE
* Payment Types - Registration::PAYMENT_TYPE

[Finish]
