# work-ticket-full-stack

An app to create and track work tickets. The motivation behind it was to help streamline things that needed to get done around the house. It can easily be implemented in many different settings, such as small businesses, group projects, classrooms, even just keeping track of your own to-do's. 

## How It's Made:

**Tech used:** JavaScript, Express, MongoDb, Handlebars, Passport

Making this project I wanted to better understand the workings of Express and how it interacts with other technologies. Taking advantage of using MVC to structure my code made it much easier to systematically work through the pages I'd design with Handlebars to the routes they would follow and what controller they would use. This was my first time using Handlebars and I found the template engine quite straight forward and simple to use. 

## Optimizations:

With the basic functionality working I plan on improving the dashboard view. I would like to get it showing only tickets the user created and then open tickets assigned to that user. I also plan on including a way for the ticket creater to edit and delete their tickets. On the index.hbs there will be pagination to limit how many tickets are shown at a time so it doesn't get overwhelming.  I'm considering moving to google authenticating as well to better handle future users.

## Lessons Learned

Being the first time building an app to this scale using Express and Handlebars it was really an eye opener to how simple Express can be while at the same time what it's capable of. With my apps getting more and more complicated it's increasingly important to follow some sort of structure and MVC made a lot of sense to me. It made it a straight forward process when trouble shooting and when working with a team it would be easy to follow someone elses code.
