// to create the news api website I used the following two YouTube tutorial:
// https://www.youtube.com/watch?v=hfKzh0IhtpY  
// https://www.youtube.com/watch?v=4P2o9DgZtU8
// urls taken from https://newsapi.org/
   
$(document).ready(function(){

// on click event  for when search button is clicked it will display results from this function
    $("#searchbtn").on("click",function(e){
        // prevent default behaviour from refreshing the page when search button is clicked
      e.preventDefault();
      
// retrieving the value from the search query input field, e.g. price is inputted then it will be stored in this value query
      let query = $("#searchquery").val();
        
// url we are making requests to, api key from newsapi.org
      let url = "https://newsapi.org/v2/everything?q="+query+"&apiKey=1598962f54404a9883cf31333afd0a3b";
      
// "" specifies what the user has entered
      if(query !== ""){

// ajax call using above url
        $.ajax({
          url: url,
          method: "GET",
          dataType: "json",
            
// bootstrap progress bar, taken from https://mdbootstrap.com/docs/jquery/components/progress-bar/ 
// show when the query is sent 
          beforeSend: function(){
            $("#loadingbar").show();
          },
            
// hide when the query is complete, meaning the results will have been displayed
          complete: function(){
            $("#loadingbar").hide();
          },
          
// when the news is successfully retrieved by the ajax call the following actions will take place           
          success: function(news){
            let output = "";
            let latestNews = news.articles;
            
            for(var i in latestNews){
                // specifying style for output, articles will be displayed in 2 columns
              output +=`
                <div class="col l6 s12">
                <h2>${latestNews[i].title}</h2>
                <img src="${latestNews[i].urlToImage}" class="responsive-img">
                <p>${latestNews[i].description}</p>
                <p>${latestNews[i].content}</p>
                <p>Published on: ${latestNews[i].publishedAt}</p>
                <a href="${latestNews[i].url}" class="btn btn-default">Read more</a><br><br>
                </div>
              `;
            }
            
            if(output !== ""){
              $("#newsarticles").html(output);
                // toast is a materalize css function, it displays an alert in the html
               M.toast({
                html: "Displaying relevant articles",
                classes: 'green'
              });
              
            }
            
          },
          
       
        });

// if the user hasnt entered anything, missingVal, then the following message will be displayed 
      }else{
        let missingVal = `<div style="font-size:28px; font-family:sans-serif; text-align:center; margin-top:40px;">Please enter a keyword</div>`;
        $("#newsarticles").html(missingVal);
          
         
      }
      
    });
    
});

// SPORT //
$(document).ready(function(){

// on click event  for when search button is clicked it will display results from this function
    $("#sport").on("click",function(e){
        // prevent default behaviour from refreshing the page when search button is clicked
      e.preventDefault();
      
// retrieving the value from the search query input field, e.g. price is inputted then it will be stored in this value query
      let query = $("#searchquery").val();
        
// url we are making requests to, api key from newsapi.org
      let url = "https://newsapi.org/v2/top-headlines?country=gb&category=sport&apiKey=1598962f54404a9883cf31333afd0a3b";
      
// "" specifies what the user has entered
      if(query !== ""){

// ajax call using above url
        $.ajax({
          url: url,
          method: "GET",
          dataType: "json",
            
// bootstrap progress bar, taken from https://mdbootstrap.com/docs/jquery/components/progress-bar/ 
// show when the query is sent 
          beforeSend: function(){
            $("#loadingbar").show();
          },
            
// hide when the query is complete, meaning the results will have been displayed
          complete: function(){
            $("#loadingbar").hide();
          },
          
// when the news is successfully retrieved by the ajax call the following actions will take place           
          success: function(news){
            let output = "";
            let latestNews = news.articles;
            
            for(var i in latestNews){
                // specifying style for output, articles will be displayed in 2 columns
              output +=`
                <div class="col l6 s12">
                <h2>${latestNews[i].title}</h2>
                <img src="${latestNews[i].urlToImage}" class="responsive-img">
                <p>${latestNews[i].description}</p>
                <p>${latestNews[i].content}</p>
                <p>Published on: ${latestNews[i].publishedAt}</p>
                <a href="${latestNews[i].url}" class="btn btn-default">Read more</a><br><br>
                </div>
              `;
            }
            
            if(output !== ""){
              $("#newsarticles").html(output);
                // toast is a materalize css function, it displays an alert in the html
               M.toast({
                html: "Displaying relevant articles",
                classes: 'green'
              });
              
            }
            
          },
          
       
        });

// if the user hasnt entered anything, missingVal, then the following message will be displayed 
      }else{
        let missingVal = `<div style="font-size:28px; font-family:sans-serif; text-align:center; margin-top:40px;">Please enter a keyword</div>`;
        $("#newsarticles").html(missingVal);
          
         
      }
      
    });
    
});


$(document).ready(function(){
    
// on click event to search for sports articles when sport button is clicked
    $("#sport").on("click",function(e){

// prevent default behaviour from refreshing the page when search button is clicked, stops page reloading if user clicks search by accidents
      e.preventDefault();

      let query = $("#sport").val();
        
// url we are making requests to, this is specifing all the top headlines in great britain from the sport category, the categorys you can use are found here: https://newsapi.org/docs/endpoints/top-headlines
      let url = "https://newsapi.org/v2/top-headlines?country=gb&category=sport&apiKey=1598962f54404a9883cf31333afd0a3b";
      
console.log(url);
      if(query !== "sport"){
        
        $.ajax({
          url: url,
          method: "GET",
          dataType: "json",
          
          beforeSend: function(){
            $("#loadingbar").show();
          },
          
          complete: function(){
            $("#loadingbar").hide();
          },
          
          success: function(news){
            let output = "";
            let latestNews = news.articles;
            
            for(var i in latestNews){
                
// defining what response objects are to be outputted and their styles
// materialize layout defined, l6 means 2 columns
              output +=`
                <div class="col l6 s12">
                <h2>${latestNews[i].title}</h2>
                <img src="${latestNews[i].urlToImage}" class="responsive-img">
                <p>${latestNews[i].description}</p>
                <p>${latestNews[i].content}</p>
                <p>Published on: ${latestNews[i].publishedAt}</p>
                <a href="${latestNews[i].url}" class="btn btn-default">Read more</a><br><br>
                </div>
              `;
            }
            // outputting news results
            if(output !== ""){
              $("#newsarticles").html(output);      
            }
          },
          
        }); 
      }   
    });   
});

// TECHNOLOGY //
$(document).ready(function(){
  // on click event when technology button is selected user will be presented with technology articles
    $("#technology").on("click",function(e){

// prevent default behaviour from refreshing the page when search button is clicked
      e.preventDefault();
      
 
      let query = $("#technology").val();
        
// url we are making requests to 
      let url = "https://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=1598962f54404a9883cf31333afd0a3b";
      
console.log(url);
      if(query !== "technology"){

// ajax call using above url
        $.ajax({
          url: url,
          method: "GET",
          dataType: "json",
            
// bootstrap progress bar, taken from https://mdbootstrap.com/docs/jquery/components/progress-bar/ 
          beforeSend: function(){
            $("#loadingbar").show();
          },
          
          complete: function(){
            $("#loadingbar").hide();
          },
          
          success: function(news){
            let output = "";
            let latestNews = news.articles;
            
            for(var i in latestNews){
// defining what response objects are to be outputted and their styles
// materialize layout defined, l6 means 2 columns
              output +=`
                <div class="col l6 s12">
                <h4>${latestNews[i].title}</h4>
                <img src="${latestNews[i].urlToImage}" class="responsive-img">
                <p>${latestNews[i].description}</p>
                <p>${latestNews[i].content}</p>
                <p>Published on: ${latestNews[i].publishedAt}</p>
                <a href="${latestNews[i].url}" class="btn btn-default">Read more</a><br><br>
                </div>
              `;
            }
            
            if(output !== ""){
              $("#newsarticles").html(output);
              ;
              
            }
            
          },
          
       
        });
        
      }
      
    });
    
});

// POPULAR ARTICLES - all genres //
// the read more feature was taken from this YouTube tutorial https://www.youtube.com/watch?v=4P2o9DgZtU8
// materialize framework used for close icon
$(document).ready(function(){
  // on click event, when top articles button is selected the user will see top headlines 
    $("#toparticles").on("click",function(e){
        // prevent default behaviour from refreshing the page when search button is clicked
      e.preventDefault();
      
      let query = $("#toparticles").val();
        
        // url we are making requests to, this one is searching all the top headlines in Great Britain
      let url = "https://newsapi.org/v2/top-headlines?country=gb&apiKey=1598962f54404a9883cf31333afd0a3b";
      

      if(query !== "top"){
        
        $.ajax({
          
          url: url,
          method: "GET",
          dataType: "json",
          
          beforeSend: function(){
            $("#loadingbar").show();
          },
          
          complete: function(){
            $("#loadingbar").hide();
          },
          
          success: function(news){
            let output = "";
            let latestNews = news.articles;
            
            for(var i in latestNews){
            // defining what response objects are to be outputted and their styles
            // materialize layout defined, l12 means 1 column the width of webpage
            // cards are a materialize feature
            // card reveal will be show when card title activator is clicked, it is identified with a plus sign
              output +=`


                <div class="col l12 m12 s12">
                <div class="card medium hoverable">
                <div class="card-content">
                <span class="card-title activator" style="float:right;"><i>+</i></span>
                <h4>${latestNews[i].title}</h4>
                <img src="${latestNews[i].urlToImage}" class="responsive-img">
                </div>

            <div class="card-reveal">
            <span class="card-title"><i class="material-icons right">close</i></span>
            <p>${latestNews[i].description}</p>
            <p> ${latestNews[i].content}</p>
            </div>

            <div class="card-action">
              <a href="${latestNews[i].url}" target="_blank" class="btn btn-default">Read Full Article</a>
            </div>
           </div>
          </div>
              `;
            }
            
            if(output !== ""){
              $("#newsarticles").html(output);
               
            }
          } 
        })
      }
    })  
});


// ENTERTAINMENT //
$(document).ready(function(){
// on click event, when entertainment button is clicked, user will be presented with entertainment articles
    $("#entertainment").on("click",function(e){

// prevent default behaviour from refreshing the page when search button is clicked
      e.preventDefault();
      
      let query = $("#entertainment").val();
        
// url we are making requests to
      let url = "https://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=1598962f54404a9883cf31333afd0a3b";
      
console.log(url);
      if(query !== "top"){

// ajax call for the url specificed above
        $.ajax({
          url: url,
          method: "GET",
          dataType: "json",
          
          beforeSend: function(){
            $("#loadingbar").show();
          },
          
          complete: function(){
            $("#loadingbar").hide();
          },
          
          success: function(news){
            let output = "";
            let latestNews = news.articles;
        
            for(var i in latestNews){
                          // defining what response objects are to be outputted and their styles
                          // materialize layout defined, l6 means 2 columns
              output +=`
                <div class="col l6 s12">
                <h4>${latestNews[i].title}</h4>
                <img src="${latestNews[i].urlToImage}" class="responsive-img">
                <p>${latestNews[i].description}</p>
                <p>${latestNews[i].content}</p>
                <p>Published on: ${latestNews[i].publishedAt}</p>
              <a href="index.html${latestNews[i].content}" class="btn btn-default">Read more</a><br><Br>

                </div>
              `
        
            }
            
            if(output !== ""){
              $("#newsarticles").html(output);
            }  
          }
        })
      } 
    })  
})

// SCIENCE //

$(document).ready(function(){
 
    $("#science").on("click",function(e){
// prevent default behaviour from refreshing the page when search button is clicked
      e.preventDefault();
      
      let query = $("#science").val();
        
// url we are making requests to 
      let url = "https://newsapi.org/v2/top-headlines?country=gb&category=science&apiKey=1598962f54404a9883cf31333afd0a3b";
      
console.log(url);
      if(query !== "science"){
        
        $.ajax({
          
          url: url,
          method: "GET",
          dataType: "json",
          
          beforeSend: function(){
            $("#loadingbar").show();
          },
          
          complete: function(){
            $("#loadingbar").hide();
          },
          
          success: function(news){
            let output = "";
            let latestNews = news.articles;
            
            for(var i in latestNews){
                
// defining what response objects are to be outputted and their styles
// materialize layout defined, l6 means 2 columns
              output +=`
                 <div class="col l6 s12">
                <h4>${latestNews[i].title}</h4>
                <img src="${latestNews[i].urlToImage}" class="responsive-img">
                <p>${latestNews[i].description}</p>
                <p>${latestNews[i].content}</p>
                <p>Published on: ${latestNews[i].publishedAt}</p>
              <a href="index.html${latestNews[i].content}" class="btn btn-default">Read more</a><br><Br>

                </div>
              `;
            }
            
            if(output !== ""){
              $("#newsarticles").html(output);
            }
          }
        }) 
      }
    }) 
});


// bootstrap tooltip taken from: https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-tooltips.php
// tooltip to be displayed below search input field
$(document).ready(function(){
  
    $(".tip-bottom").tooltip({
        placement : 'bottom'
    });
   
});

// help tour 
// bootstrap tour taken from https://bootstraptour.com/
   $(document).ready(function(){
            var intro = new Anno([
                
// search section is first step in tour, it will display the following message:
                {
                target: "#searchsection",
                content: "Search for news articles using keywords"
                },
             
                
            ]);
        
        // tour starts when help button is clicked
            $('#help').on("click", function(){
                   intro.show();   
            });
        });



