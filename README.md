### Music Management System (Simple Web Project)

#### Contributors: 

Zhaoyan Feng / Xiuge Zheng / Mengyue Duan

#### What to solve?

In this project, we are trying to build a music platform which can interact between Listener and Artist. Listener can collect whatever their favorite songs into the playlist. Also, Artist can release their new album and upload their new songs into different albums.

We start with describing the database as a UML class diagram. Then we implemented the relational database. In the database, we have user data models, domain object data models, one to many, many to many domain to domain object relationships, many to many user to user relationship, inheritance relationship and potable enumeration.

Finally, we connect database to frontend, backend, and make sure all platforms are running correctly.



#### How we solved?

Our solution based on the client-server Architecture:

![螢幕截圖 2022-01-04 下午3.13.30](/Users/irisfeng/Desktop/螢幕截圖 2022-01-04 下午3.13.30.png)



##### **i. database management (MySQL, Java, Javascript)**

We have 3 user objects which are Users, Listeners, and Artists. Listener and Artist are inherited from Users. Also, we need 3 domain objects: playlist, song, and album. There are 2 different relationship between domain objects and users. One to many: Artist to Album, Album to Song. Many to many: Listener to Playlist, Song to Playlist and Listen to Artist. We also need a portable enumeration which is Genre.

In this project, we use UML and relational database to collect the data. Then we use Object Relational Mapping to address the relational world and object-oriented world. Finally, We use React.js to build User interface. Artists is able to do CRUD operations in Album and Song interface. It means Artists can create, read, update and delete Songs information through Album interface. Listener can create, read, update and delete Playlist information as well as Artist. Also, Listener and Artist can do CRUD on itself.

Below shows detail definition of user objects:

-   User: There are 3 users in our project – User, Listener, and Artist. Listener and Artist are inherited from Users since they have common attributes: id(PK), firstName, lastName, username, password, email, dataOfBirth

-   Listener: users who listen music through this platform, with one distinct  attribute 'vip' represented by boolean value.
-   Artist: users who produce/publish music on this platform, with one distinct attribute 'language'.

Domain objects:

In our project, there are 3 domain objects – Playlist, Song and Album.

-   Playlist: Playlist is a customized list. Listener can create as many as lists they want. A list is not only for one listener. Multiple different listeners can have a same playlist. In each list, it has title and description. Listener can collect all their favorite songs in different playlist.

-   Album: When the artist release the new album, it will store in Album with name and yearRelease. One artist can have multiple Albums.

-   Song: After Album is release, all songs’ information will be saved in Song with name and genre. Songs will be classified as Pop, Rock, Country, Jazz, Hiphop.

All object relations can be referred to UML below: [https://github.com/ZhaoyanFeng0321/db_design_final_project_database/blob/master/db_design_final_project_UML.pdf](https://github.com/ZhaoyanFeng0321/db_design_final_project_database/blob/master)

-   One to Many: 
    -   Artist to Album
    -   Album to Song 
-   Many to Many: 
    -   Listener to Playlist (Mapping class: Collecting )
    -   Song to Playlist (Mapping class: Adding)
    -   Listener to Artist (Mapping class: Following)



##### ii. User Interface (web browser)

We implemented the following webpage to display data and allow client editing data:

-   Artist: show all artists and their albums.
-   Artist editor: modify artist information with creating, updating, deleting, and reading.
-   Album: list all albums’ and songs’ information. User can modify the album information.
-   Songs: list all songs’ information and modify the album information.
-   Music Management System: display Listener, Playlist, Collecting list.
-   Listeners List: list all listener’s ID, username, First Name and Last Name.
-   Listener Editor: user can modify the listener information.
-   Playlists List: list all playlist’s id, title and description.
-   Playlist Editor: user can modify the playlist information.
-   Collecting List: list all listener and playlist relationship.
-   Collecting Editor: user can modify collecting information.
