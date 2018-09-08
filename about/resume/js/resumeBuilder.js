var data = {
  "name":"Runping Huang",
  "role":"Data Scientist/Data Engineer",
  "bio":{
    "contacts": {
      "email":"pingrunhuang@gmail.com",
      "github":"pingrunhuang",
      "address":"China Beijing"
    },
    "skills":["P","Software develop","Drone develop","Programming"],
    "programming_languages":["Python","Java","Scala","JavaScript"]
  },
  "education":{
    "schools":[
    {
      "name":"ESIGELEC",
      "city":"Rouen",
      "degree":"Master",
      "major":["Information system","French"]
    },
    {
      "name":"South China University of Technology",
      "city":"GuangZhou",
      "degree":"Bachelor",
      "major":["Mathematics","Statistics"]
    }]
  },
  "projects":{
    "projects":[
      {
        "name":"Hand gesture recognition system",
        "duration":"80 hours from March to May -- 2016",
        "description":"This is a short time projects made during my master degree. I modified and improved others works using c++ OpenCV. Meanwhile, I use python to write a game which is used to test the accuracy of the control system",
        "repository_url":"",
        "image":[]
      },
      {
        "name":"Online ordering system",
        "duration" : "3 days -- 2016",
        "description":"A short time projects used the framework of ASP.NET and c# to create an online ordering system which allow users to order menu comes from database and view history order",
        "repository_url":"https://github.com/ESIGELEC-Project/MenuOrdingSystem",
        "image":["images/online_ordering.png","images/ordering_history.png"]
      },
      {
        "name":"Project Farm",
        "duration":"1 months -- 2016",
        "description":"This project imitate the website called KickStarter which let users to post their ideas on the website containing detail information regarding the idea. Evaluator as another identity will evaluate all the idea posted on the website",
        "repository_url":"https://github.com/ESIGELEC-Project/Project-Farm",
        "image":["images/projectfarm1.png","images/projectfarm2.png","images/projectfarm3.png"]
      },
      {
        "name":"Recipe managment system",
        "duration":"15 days -- 2015",
        "description":"I have built a recipe website using HTML, CSS, JavaScript and PHP. This website is used for student to post their recipe and manager to manage the recipe. It allows student to register and login.",
        "repository_url":"https://github.com/ESIGELEC-Project/Recipe",
        "image":["images/recipe_website.png"]
      }
    ]
  },
  "work":{
    "company":[
      {
        "name":"Kingdee global software group",
        "title":"software developer intern",
        "city":"China Shenzhen",
        "start_date":"01-04-2015",
        "end_date":"30-06-2015",
        "details":"Fixing and improving the existing ERP software called K3 which is the previous product of Kingdee"
      },
      {
        "name":"Scaled Risk",
        "title":"Java server side development engineer intern",
        "city":"France Paris",
        "start_date":"05-09-2016",
        "end_date":"05-03-2016",
        "details":""
      },
      {
        "name":"Cardinal Operation",
        "title":"Data Engineer",
        "city":"China Beijing",
        "start_date":"06-01-2018",
        "end_date":"till now",
        "details":""
      }
    ]
  }
}

var displaywork = function(){
  var fname = HTMLheaderName.replace("%data%",data.name);
  var frole = HTMLheaderRole.replace("%data%",data.role);
  $("#header").append(fname);
  $("#header").append(frole);
  for(index in data.work['company']){
    $("#workExperience").append(HTMLworkStart);
    fw = HTMLworkEmployer.replace("%data%",data.work['company'][index]['name']);
    ft = HTMLworkTitle.replace("%data%",data.work['company'][index]['title']);
    fdate = HTMLworkDates.replace("%data%",data.work['company'][index]['start_date']+' - '+ data.work['company'][index]['end_date']);
    flocation = HTMLworkLocation.replace("%data%",data.work['company'][index]['city']);
    fdetails = HTMLworkDescription.replace("%data%",data.work['company'][index]["details"]);
    $(".work-entry:last").append(fw+ft);//specify the last entry of the work-entry class in the page
    $(".work-entry:last").append(fdate);
    $(".work-entry:last").append(flocation);
    $(".work-entry:last").append(fdetails);
  }
}
displaywork();

//$("#header").append(internationalizeButton);

//display all of my projects
data.projects.display = function(){
  for(index in data.projects.projects){
    $("#projects").append(HTMLprojectStart);
    var formatedTitle;
    if(data.projects.projects[index].repository_url.length != 0){
      formatedTitle = HTMLprojectTitle.replace("%data%",data.projects.projects[index].name+'<img src="images/GitHub-Mark/PNG/GitHub-Mark-32px.png">');
      formatedTitle = formatedTitle.replace("#",data.projects.projects[index].repository_url);
    }else{
      formatedTitle = HTMLprojectTitle.replace("%data%",data.projects.projects[index].name);
    };
    $(".project-entry:last").append(formatedTitle);
    var formatedDate = HTMLprojectDates.replace("%data%",data.projects.projects[index].duration);
    $(".project-entry:last").append(formatedDate);
    var formatedDescription = HTMLprojectDescription.replace("%data%",data.projects.projects[index].description);
    $(".project-entry:last").append(formatedDescription);
    if(data.projects.projects[index].image.length > 0){
      for(image in data.projects.projects[index].image){
        var formatedImage = HTMLprojectImage.replace("%data%",data.projects.projects[index].image[image]);
        $(".project-entry:last").append(formatedImage);
      }
    }
  }
}
data.projects.display();

$("#mapDiv").append(googleMap);
initializeMap();
