function generate_grid(array_properties){

    var name_1=["Manufacturer", "Model", "Power (kW)", "Start year", "End year", "years of service", "coordinates (lat, lng)", "contact", "technicals specifications"];
    var pic_array=["brand", "model", "power", "start_year", "end_year", "lifetime", "coordinates", "email",
                  "info"]
    var level_1=document.createElement("div");
    level_1.className="uk-grid-small uk-grid-match uk-animation-fade uk-flex-middle uk-child-width-1-3 uk-padding-small";
    level_1.setAttribute("uk-grid", "");
    level_1.setAttribute("uk-height-match","");
    
    for (i = 0; i < name_1.length; i++) {
        var level_2=document.createElement("div");
        var level_3=document.createElement("div");
        var level_4=document.createElement("div");
        var level_5=document.createElement("div");
        var level_6_1=document.createElement("div");
        var image_1=document.createElement("img");
        var level_6_2=document.createElement("div");
        var header_1=document.createElement("h3");
        var paragraph_1_1=document.createElement("p");
        var paragraph_1_2=document.createElement("p");

        level_3.className="uk-card uk-card-default uk-card-hover ";

        
        level_4.className="uk-card-header";

        
        level_5.className="uk-grid-small uk-flex-middle";
        level_5.setAttribute("uk-grid", "");
        
        image_1.setAttribute("height","10");
        image_1.setAttribute("width","30");
        image_1.src=static_url+"/pictures/"+pic_array[i]+".png";

        
        level_6_2.className="uk-width-auto";

        
        header_1.className="uk-card-title uk-margin-remove-bottom";
        
        if (i==7){
            if (array_properties[i]!="unknown"){
                header_1.innerHTML='<a target="_blank" href='+array_properties[i]+'>'+array_properties[i]+'</a>' ;
            }
            else{
                header_1.innerHTML="n/a";
            }
        }
        
        if (i==8){
            if (array_properties[1]!="unknown"){
            header_1.innerHTML='<a target="_blank" href="https://www.en.wind-turbine-models.com/search?q='+array_properties[1]+'">Info</a>' ;}
            else{
                header_1.innerHTML="n/a";
            }
        }
        
        
        if (i<7){
            header_1.innerHTML=array_properties[i]
        }
        

        paragraph_1_2.className="uk-text-meta uk-margin-remove-top";
        
        if ((i==4 || i==5) && array_properties[4]>2016){
            paragraph_1_2.innerHTML=name_1[i]+"<br><i>(estimated)</i>";
            }
        else{
            paragraph_1_2.innerHTML=name_1[i];
        };
        header_1.appendChild(paragraph_1_2);

        level_6_2.appendChild(header_1);

        level_6_1.appendChild(image_1);

        level_5.appendChild(level_6_1);
        level_5.appendChild(level_6_2);

        level_4.appendChild(level_5);
        level_3.appendChild(level_4);
        level_2.appendChild(level_3);
        level_1.appendChild(level_2);
        
        
    }
    

    return level_1}

