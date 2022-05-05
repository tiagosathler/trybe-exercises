/*
preparation: enter in the mongo shell and execute the following command (first, ensure that the database is created):
  use exercises  

1:
  db.bios.find({"_id": 8});

2:
  db.bios.find({"_id": 8}, {"_id": 1, "name": 1});

3 🚀:
  db.bios.find({"_id": 8}, {"_id": 1, "name": 1, "birth": 1});

4:
  db.bios.find({"name.first": "John"}).pretty();

5:
  db.bios.find().limit(3).pretty();

6:
  db.bios.find().limit(2).skip(5).pretty();

preparation:
  mongoimport --db=exercises --collection=books --file=books-48d15e4d8924badc2308cc4a62eb3ea4.json

7 🚀. 
  db.books.countDocuments();

8 🚀.
  db.books.countDocuments({"status": "PUBLISH"});

9 🚀.
  db.books.find({}, {"title": 1, "isbn": 1, "pageCount": 1, "_id": 0}).limit(3).pretty();

10.
  db.books.find({"status": "MEAP"}, {"_id": 1, "title": 1, "authors": 1, "status": 1}).limit(10).pretty();
*/