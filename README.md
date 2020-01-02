# Photograph
Nowadays, people want to create their own story through pictures and share it
with close friends or family. That is one of the reasons why a lot of Instagram users
have to create another account to set up privacy and choose the persons they want
to see their private posts. The problem with this process is that having several
accounts is a cause of space redundancy in a database.

Therefore, our group is going to create a web-application inspired by
Instagram with new added features. In the application, the users can create groups
and choose who can see their posts.

For instance a user can create a group named close friends. He/she can then
select the people belonging to that group. Now the user can choose to post either in
that « close friends » group or he/she can just make the post public and therefore it
can be seen by all the users. This is a way to save space in a database while storing
user’s informations.

# Installation's Guide
1. Go to my project repository then, copy the HTTPS link.

![image](https://user-images.githubusercontent.com/38415653/71662078-d0c82f00-2d82-11ea-89fb-9742a0debb69.png)

2. git clone in your terminal, where you want the project to be.

![image](https://user-images.githubusercontent.com/38415653/71662117-efc6c100-2d82-11ea-8915-7bbd0a6b1dde.png)

3. After clone the project, it will be there

![image](https://user-images.githubusercontent.com/38415653/71662138-09680880-2d83-11ea-8938-b9665956b201.png)

4. Open the project folder, install npm packages

![image](https://user-images.githubusercontent.com/38415653/71662204-3ae0d400-2d83-11ea-8fa7-10414897ddb0.png)

5. Enter the client folder and install npm packages too.

![image](https://user-images.githubusercontent.com/38415653/71662238-5350ee80-2d83-11ea-830f-20865294e7b1.png)
![image](https://user-images.githubusercontent.com/38415653/71662259-695eaf00-2d83-11ea-8959-708dd0246698.png)

6. Open XAMPP and start Apache and MySQL

![image](https://user-images.githubusercontent.com/38415653/71662283-82fff680-2d83-11ea-9f61-ae0ce9627fb3.png)

7. Go to MySQL database, then create photograph database and import the database called “photograph.sql” that we already provide in “app/config/photograph” directory

![image](https://user-images.githubusercontent.com/38415653/71662319-9c08a780-2d83-11ea-8711-430f0147387b.png)
![image](https://user-images.githubusercontent.com/38415653/71662341-ad51b400-2d83-11ea-8ae5-cc55e8d1ce7b.png)
![image](https://user-images.githubusercontent.com/38415653/71662360-c35f7480-2d83-11ea-805e-040836e7a12a.png)

8. The web-application is ready to run now. In your terminal, go back to root directory.

![image](https://user-images.githubusercontent.com/38415653/71662377-da9e6200-2d83-11ea-8756-6b387570d116.png)

9. Create "config.js" file in app/config directory and fill in your AWS S3 key and bucket name

![image](https://user-images.githubusercontent.com/38415653/71664248-e4779380-2d8a-11ea-8404-59289dfe0c92.png)

10. Type “npm run dev”. The web-application will automatically appear.

![image](https://user-images.githubusercontent.com/38415653/71662418-06214c80-2d84-11ea-9cf9-45e1bff6a698.png)
