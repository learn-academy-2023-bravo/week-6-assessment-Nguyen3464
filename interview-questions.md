# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: The assocications defined in the Model's class.  Cohort will have has_many in the method, and the model student will have belongs_to in the method.  The foreign key will be named cohort_id and will be added to the Student's schema. To add a column in the Student's schema to track cohort_id "forgien key associcated from Model Cohoert"  we need to provide a migration file because the schema is a representation of exisitng data and cannot be edited directly to reflect incoming data.

Researched answer: Associations allow relations to be assigned from one model's table to another.  The parent table will have the relation has_many defined in the model class, and the child will have belongs_to in the model class. To migrate another column run the commands 
$ rails generate migration action_name_here
Inside the migration model class method,
add_column :table_name, :column_name, :datatype // define the table that the migration is being added to, the columns name being added on, and the datatype for the entries.
$ rails db:migrate will update the schema and to reflect these migrations.

2. Which RESTful routes must always be passed params? Why?

Your answer: When updating Put, Patch reqiure params[:id] to target instance attributes to be changed. Delete requires params[:id] to access instance's primary key to delete instance. Get when refered to the show method requires params[:id] to display instance and attributes.

Researched answer: When your accessing a specific instance or instance's attribute in a model's table params[:id] is used to target instance, and attributes.  This is to accuratly read, update, and delete data entries in a table by targeting the unique primary key's value.

3. Name three rails generator commands. What is created by each? 

Your answer: $rails generate model ClassName attribute:datatype --> this creates a model or class with defined attributes and datatypes which become columns in the model table.  It also creates a schema which is a representation of the data architecture of incoming data entries
$rails generate migration DescriptonOfAction --> this creates a migration model file that is used to add columns into the schema and data architecture of incoming data entries.
$rails generate controller ControllerName --> this creates the controller in the MVC arcitecture.  The controller is the mediator and controls the direction of data in the request and response cycles from the view to database and database to view.

Researched answer: Anytime an entrie is made to the database when generating the command $rails db:migrate is needed to update the schema and MVC enviorment of incoming changes.  You can have multiple models exsisting in the same database,  Associations can link the tables and give relationships to entities.  In addition to adding columns in migrations, you change dataype structure of the column, rename, and delete the columns.  

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Use the index controller method to read all instances of student in the database.

action: "POST" location: /students
Use the create controller method to create an instance of student to the database

action: "GET" location: /students/new
Use the new controller method to provide user witha fourm to submit new data to the database

action: "GET" location: /students/2
Use show controller method, with .find(params[:id]) to read a targeted instance in the database

action: "GET" location: /students/2/edit
Use edit controller method, with .find(params[:id]) to target instance in the database, then provide user with a fourm to edit exsisting data,  update controller method will be needed to commit the changes to the database. If strong params are present, user will need to fulfill the reqiured information or an error will prompt the user

action: "PATCH" location: /students/2
Use update controller method, with .find(params[:id]) to update targeted instance or attributes in the database. If strong params are present, user will need to fulfill the require information or the commit to the database will not occur.

action: "DELETE" location: /students/2
Use destroy controller method, with .find(params[:id]) to delete targeted instance in the database

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

# To Do List User Stories (HTTP Verb/CRUD Action/Controller Method)
1. As a user I can see a ordered list of task to complete (get/read/index)
2. As a user I can create diffrent type of to do list to differentiate between my outdoors/indoors choirs (post/create/create) 
3. As a user I can add new tasks to my to do list (get/create/new)
4. As a user I can change my tasks on my to to list (put/patch/update/edit/update)
5. As a user I refrence my to do list and find what task is highest on my priority (get/read/show)
6. As a user I can create subsequent to do list that require completion of specific tasks on higher priortry to do lists. (post/create/create)
7. As a user I can read the current task and refrence the previous task leading up to the task on hand (get/read/show)
8. As a user I can change my expected completion date of my task on my to do list (put/patch/update/edit/update)
9. As a user I can mark my completed tasks as complete on my to do list (put/patch/update/edit/update)
10. As a user I can remove any task that have been completed on my to do list (delete/delete/destroy)
