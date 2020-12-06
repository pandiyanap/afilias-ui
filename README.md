# Users and Friends suggetion react app:
========================================

Friends suggestion list designed with react component on api router interaction and axios call to interat with service which is built on spring boot micro service architecture java api application.

React components are segregated based on below uses cases:

    Use case1: Dispaly user list details on Get endpoint http://localhost:3000/users

    Use case2: Display specific user friendlist on  Get endpoint http://localhost:3000/friends/{userId}

    Use Case3: Display friends of friends list on  Get endpoint http://localhost:3000/friends/fofList/{userId}

    Use Case4: Display friends based on geo location(filtered by location)  Get endpoint http://localhost:3000/geoFriendList?city=London&userId=1
    
# To run front end react application:
=====================================
    npm start
    
# Suggetion:
============
    UI can be improved based user selection on table row.

# Java service  + Spring boot 
=============================

Friends suggestions service application designed on micro service architecture with Java + Spring Boot + Hibernate JAP + in-memory data base.

   Use Case 1: Dispaly all users in the system

   Use Case 2 : Display friends of given userId

   Use Case 3: Display friends of friends that exclude current user + duplicate friends in friend of friend list

   Use Case 4: Display firends based on geo location that exclude the current user


# Security: 

Spring web app filter applied to filter unnecessary access to the application and cross origin enabled to support this specific front end  react application.

# Databse :

Designed with two different table users and friends relation.

        1. Users  as primay table.

        2. Friends relation table as secondary  table.

User_Id as common reference table .

# TODo :

        This could be stored as UUID format in real time application to maintain unique records.

        Consider OnetoMany relation table structure.

