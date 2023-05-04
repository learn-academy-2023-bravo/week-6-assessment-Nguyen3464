# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# BlogPost is the controller created to handle the request and retrieval of data from the Model and coordinates the interaction between the user and the view or UI.  The controller will route external request and preform internal actions to control the flow on data using Http verbs.  There is a method called index being defined.  index is responsable to accessing the data contained in the database it is associated with the http get verb, and Read in the CRUD actions.
class BlogPostsController < ApplicationController
  def index

# ---2)
# @posts is an instance variable.  When called upon the Model BlogPost will be accessed with the .all method and present the instances data created from BlogPost.  All of the data within the table can be accesssed by calling ModelName.attrubute_name defined within the schema and can be rendered if routed and invoked in the view's html.erb file    
    @posts = BlogPost.all
  end

  # ---3)
# A Show method is being defined in the BlogPost Model. Show is responsable to accessing specific data contained in the database. It is associated with the http get verb, and Read in the CRUD actions.  To target data of individual instance created within the model you use .find() and pass in params as an argument with :id to access the primary key of the instance within the database.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # A new method is being defined in the BlogPost Model. new is responsable generating a form for to gather user input. The data is sent to the controller to be routed to the server database as a contoller action. It is associated with the http get verb, and Read in the CRUD actions. The create method is what is used to update the database. The create method is associated with the post http verb, and create CRUD aaction
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # the instance variable post when called upon will call the BlogPost model,  the .create will create an entry into the database and is being passed the argument of blog_post_params.  blog_post_params method are strong params defined to filter the entries submited from the view.  This insures no invalid data is entered into the database.  The conditional statement will check if the form was submitied with proper data,  if the condition is met, the view will be redirected to blog_post_path(@post)  blog_post_path is the route defined within the controller that directs the flow of data in a request and response cycle
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    # The RESTful routing edit method is being defined in the BlogPost Model. Edit is fourm responsable for gathering user input.   It is associated with the request get http verb, and Update in the CRUD actions. .find(params[:id]) is accessing an instance's primary key in the model, and allows for targeting values inside the instance. The RESTful routing update method is is asccociated with the put request http verb. It is the update in the CRUD action. The controller action method Update is changing exisiting data contained in the database.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    #@post.update() is being passed the strong params defined in blog_post_parms.  This validation step that filters out user input so proper data can only be entered into the database. The conditional statement will check if the form was submitied with proper data,  if the condition is met, the view will be redirected to blog_post_path(@post)  blog_post_path is the route defined within the controller that directs the flow of data in a request and response cycle.  
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      #The RESTful routing destroy method is being defined in the BlogPost Model. Destroy is responsable for removing exitsting data. It is associated with the request delete http verb, and delete in the CRUD actions. .find(params[:id]) is accessing an instance's primary key in the model, and allows for targeting values inside the instance. The if statement is checking, if instance is deleted. When condition is met the view will redirect to blog_post_path alias defined in the controller's route.
      redirect_to blog_posts_path
    end
  end

  # ---9)
  # private keeps the scope of the blog_post_params strong params inside the class model. Private should be at he bottom of the class model if there are any RESTful route architecture underneath the private line the routes cannot be accessed by the controller.
  private
  def blog_post_params
    # ---10)
    #blog_post_params method being defined to add validation parameters.  These strong params restrict what data can be commitied by the user.  This validation protects the database for mass assignments of values or incorrect values.  When user is commiting data to blog_post and entry of title, and content is required, otherwise an error prompt the user.
    params.require(:blog_post).permit(:title, :content)
  end
end
