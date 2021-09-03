This project is devided into 2 parts

Back-End (PHP)
1. Run project using XAMPP, WAMP servers or any other method you prefer.
2. import database file directly to MySQL database and it will generate database automatically.
3. Make sure to change (max_allowed_packet) in mysql my.ini from (1M) to (16M) to avoid database bad connection.


Front-end (Angular)
1. open terminal inside project folder.
2. write (npm i) to install node modules.
3. once finished run (ng serve) to run the project.
4. make sure to change API link in (_config.ts) from 127.0.0.1:3333 to whatever the port you are running back-end on.
5. Make sure the back-end server is up and running correctly.


Login Credentials:

admins:
email: admin@gmail.com
password: A@123


employee: 
email: employee@gmail.com
passord: E@123