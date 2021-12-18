Name of project: 

Music Management System 

Name of Team: 

Super00 

Team members: 

Zhaoyan Feng / Xiuge Zheng / Mengyue Duan 

Problem statement: 

In this project, we are trying to build a music platform which can interact between Listener and Artist. Listener can collect whatever their favorite songs into the playlist. Also, Artist can release their new album and upload their new songs into different albums.  

We start with describing the database as a UML class diagram. Then we implemented the relational database. In the database, we have user data models, domain object data models, one to many, many to many domain to domain object relationships, many to many user to user relationship, inheritance relationship and potable enumeration.  

Finally, we connect database to frontend, backend, and make sure all platforms are running correctly. 

UML:  [https://github.com/ZhaoyanFeng0321/db_design_final_project_database/blob/master/db_design_final_project_UML.pdf]()

Solution statement: 

To solve this problem, we need 3 users which are Users, Listeners, and Artists. Listener and Artist are inherited from Users. Also, we need 3 domain objects: playlist, song, and album. There are 2 different relationship between domain objects and users. One to many: Artist to Album, Album to Song. Many to many: Listener to Playlist, Song to Playlist and Listen to Artist. We also need a portable enumeration which is Genre.  

In this project, we use UML and relational database to collect the data. Then we use Object Relational Mapping to address the relational world and object-oriented world. Finally, We use React.js to build User interface. Artists is able to do CRUD operations in Album and Song interface. It means Artists can create, read, update and delete Songs information through Album interface. Listener can create, read, update and delete Playlist information as well as Artist. Also, Listener and Artist can do CRUD on itself.   

 

User: 

There are 3 users in our project – Listener, Artist, and Users. Listener and Artist are inherited from Users. 

User: id(PK), firstName, lastName, username, password, email, dataOfBirth 

Listener: id(PK), firstName, lastName, username, password, email, dataOfBirth, vip 

Artist: id(PK), firstName, lastName, username, password, email, dataOfBirth, language 

Domain objects: 

In our project, there are 3 domain objects – Playlist, Song and Album. 

Playlist: Playlist is a customized list. Listener can create as many as lists they want. A list is not only for one listener. Multiple different listeners can have a same playlist. In each list, it has title and description. Listener can collect all their favorite songs in different playlist.  

Album:  When the artist release the new album, it will store in Album with name and yearRelease.  One artist can have multiple Albums.  

Song: After Album is release, all songs’ information will be saved in Song with name and genre. Songs will be classified as Pop, Rock, Country, Jazz, Hiphop.  

User to Domain object relationship: 

Artist to Album (one to many) 

Listener to Playlist (many to many) 

Domain object to Domain object relationship 

Album to Song (one to many) 

Song to Playlist(many to many) 

User to User relationship 

Listen to Artist(many to many) 

Portable enumeration 

Genre: POP, ROCK, COUNTRY, JAZZ, HIPHOP 

 

User interface 

Artist: show all artists and their albums. 

Artist editor: modify artist information with creating, updating, deleting, and reading. 

Album: list all albums’ and songs’ information. User can modify the album information.  

Songs: list all songs’ information and modify the album information.  

Music Management System: display Listener, Playlist, Collecting list. 

Listeners List: list all listener’s ID, username, First Name and Last Name. 

Listener Editor: user can modify the listener information. 

Playlists List: list all playlist’s id, title and description.  

Playlist Editor: user can modify the playlist information. 

Collecting List: list all listener and playlist relationship.  

Collecting Editor: user can modify collecting information.  

 

 

 

 
