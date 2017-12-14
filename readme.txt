For run project 

1. Open terminal(linux/mac) or CMD(Windows) in project folder
2. run npm install for get dependencies
3. run npm start, by default the project run in localhost:8888

//-----------------
You can execute the following queries

Can do it in a browser, although recommend doing it in postman

------------------------
----List all records----
------------------------

localhos:8888/api/providers

------------------------
----List by ID----------
------------------------

localhos:8888/api/providers/id

id is value for search

------------------------
----Delete by ID--------
------------------------

localhos:8888/api/providers/id

this request is a delete

------------------------
----Insert a record-----
------------------------

localhos:8888/api/providers/

this request is a method post
to recive a JSON in this format
{
    "firstName" : "Adaline",
    "lastName" : "Steuber",
    "middleName" : "O",
    "email" : "Karlee76@yahoo.com",
    "projectedStartDate" : "2017-05-19T02:54:22.708Z",
    "employerId" : 318,
    "providerType" : "PA",
    "staffStatus" : "AFFILIATE",
    "assignedTo" : 87001,
    "status" : "UNDER_REVIEW",
    "createdBy" : 89214,
    "createdAt" : "2017-01-29T04:37:33.258Z",
    "updatedBy" : 26760,
    "updatedAt" : "2017-11-29T09:51:21.678Z",
    "specialty" : {
        "name" : "Adolescent Medicine",
        "createdBy" : 5028,
        "createdAt" : "2017-02-23T10:03:08.462Z",
        "updatedBy" : 35,
        "updatedAt" : "2017-11-29T00:37:07.721Z"
    }
}

this format was get of the bd 

------------------------
----Update a record-----
------------------------

localhos:8888/api/providers/id

this is a method put and to receive a JSON fie
with fields to update.
and id of a record exist