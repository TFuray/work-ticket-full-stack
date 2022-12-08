#work-ticket-full-stack

An app to create and track work tickets. The motivation behind it was to help streamline things that needed to get done around the house. It can easily be implemented in many different settings, such as small businesses, group projects, classrooms, and even just keeping track of your own to-do's.

## How It's Made:
**Tech used:** JavaScript, Express, MongoDB, Handlebars, Passport

Making this project I wanted to better understand the workings of Express and how it interacts with other technologies. Taking advantage of using MVC to structure my code made it much easier to systematically work through the pages I'd design with Handlebars to the routes they would follow and what controller they would use. This was my first time using Handlebars, and I found the template engine straightforward and simple.

## Optimizations:
With the basic functionality working, I plan on improving the dashboard view. I would like to get it to show only tickets the user created and then open tickets assigned to that user. I also plan on including a way for the ticket creator to edit and delete their tickets. On the index.hbs there will be pagination to limit how many tickets are shown at a time so it doesn't get overwhelming. I'm considering moving to google authenticating as well to better handle future users.

## Lessons Learned
Being the first time building an app to this scale using Express and Handlebars it was an eye opener to how simple Express can be while at the same time what it's capable of. With my apps getting increasingly complicated, it's increasingly important to follow some structure, and MVC made a lot of sense to me. It made it a straightforward process when troubleshooting and when working with a team it would be easy to follow someone else code.
