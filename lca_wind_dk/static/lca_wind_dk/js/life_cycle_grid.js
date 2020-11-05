function generate_life_cycle_grid(year, pct_steel, pct_renew, model, production, location, sea_depth, distance_coast){
    
 
    

    
    var level_0=document.createElement("div");
    level_0.className="uk-grid uk-animation-fade uk-child-width-1-1 uk-padding-small";
    level_0.setAttribute("uk-grid", "");
    level_0.setAttribute("data-uk-grid-match","");
    
    var level_1=document.createElement("div");
    
    
    var level_2=document.createElement("div");
    level_2.className="uk-card uk-card-default uk-card-body";
    var image=document.createElement("img");
    image.src=static_url+"/pictures/life_cycle.png";
    image.setAttribute("width", "1000");
    level_2.appendChild(image);
    
    var level_2_bis=document.createElement("div");
    level_2_bis.className="uk-card uk-card-default uk-card-body";
    
    var level_3=document.createElement("div");
    level_3.className="uk-grid-divider uk-child-width-expand@s"
    level_3.setAttribute("uk-grid", "");
    level_3.setAttribute("data-uk-grid-match","");
    
    level_2_bis.appendChild(level_3);
    
    var level_3_1=document.createElement("div");
    
    var level_3_1_header=document.createElement("h6");
    level_3_1_header.innerHTML="Supply";
    
    var p_1=document.createElement("p");
    p_1.innerHTML="In "+year+", the Danish electricity mix comprised of "+pct_renew+"% of renewable energy. That year, the recycled content in German steel is "+pct_steel+"%.";
    p_1.className="uk-text-meta";
    level_3_1_header.appendChild(p_1);
    
    
    level_3_1.appendChild(level_3_1_header);
    
    var level_3_2=document.createElement("div");
    
    var level_3_2_header=document.createElement("h6");
    level_3_2_header.innerHTML="Manufacture";
    
    var p_2=document.createElement("p");
    if (model==null || model=="Ukendt" || model=="Ukendt-Ukendt" || model=="0" || model=="NaN"){
        
        p_2.innerHTML="This model could not be identified and linked to a manufacturer. A scaling model is used to approximate the manufacture inventory";
    }
    else{
        p_2.innerHTML="Manufacturer's data for the "+model+" are used to model the production inventory.";
        
    };
    
    
    
    p_2.className="uk-text-meta";
    level_3_2_header.appendChild(p_2);
    
    level_3_2.appendChild(level_3_2_header);
    
    var level_3_3=document.createElement("div");
    
    var level_3_3_header=document.createElement("h6");
    level_3_3_header.innerHTML="Installation";
    
    var p_3=document.createElement("p");
    if (location=="LAND"){
        p_3.innerHTML="Reinforced concrete foundation dimensioned according to the wind turbine size is casted.";
    }
    else {
        p_3.innerHTML="Sea depth of "+sea_depth+" m. A steel-made monopile foundation is hammered into the ground. A "+distance_coast+" km long copper cable connects the wind turbine to the coast.";
    };
    
    p_3.className="uk-text-meta";
    level_3_3_header.appendChild(p_3);
    
    level_3_3.appendChild(level_3_3_header);
    
    var level_3_4=document.createElement("div");
    
    var level_3_4_header=document.createElement("h6");
    level_3_4_header.innerHTML="Use";
    
    var p_4=document.createElement("p");
    p_4.innerHTML="This wind turbine will produce "+production.toLocaleString()+" kWh of electricity during its Use phase.";
    p_4.className="uk-text-meta";
    level_3_4_header.appendChild(p_4);
    
    level_3_4.appendChild(level_3_4_header);
    
    var level_3_5=document.createElement("div");
    
    var level_3_5_header=document.createElement("h6");
    level_3_5_header.innerHTML="Dismantling";
    
    var p_5=document.createElement("p");
    p_5.innerHTML="The wind turbine is dismantled on site after its Use phase.";
    p_5.className="uk-text-meta";
    level_3_5_header.appendChild(p_5);
    
    level_3_5.appendChild(level_3_5_header);
    
    var level_3_6=document.createElement("div");
    
    var level_3_6_header=document.createElement("h6");
    level_3_6_header.innerHTML="Disposal";
    
    var p_6=document.createElement("p");
    p_6.innerHTML="Thermoplastics and metals are recycled. Thermosets, glass fiber and concrete fractions are sent to landfill.";
    p_6.className="uk-text-meta";
    level_3_6_header.appendChild(p_6);
    
    level_3_6.appendChild(level_3_6_header);
    
    level_3.appendChild(level_3_1);
    level_3.appendChild(level_3_2);
    level_3.appendChild(level_3_3);
    level_3.appendChild(level_3_4);
    level_3.appendChild(level_3_5);
    level_3.appendChild(level_3_6);
    
    level_1.appendChild(level_2);
    level_1.appendChild(level_2_bis);
    
    level_0.appendChild(level_1);
    
    return level_0;
};

function get_year_manufacture(uuid, row_0){
    var year, pct_steel, pct_renew, model, production, location, sea_depth, distance_coast;

    
     $.when(
        $.ajax({
        url: "get_year_manufacture/"+uuid,
        dataType: 'json',
        type: 'GET',
        success : function(json) {
            year=parseInt(json[0]);
            pct_steel=parseInt(parseFloat(json[1])*100);
            pct_renew=parseInt(parseFloat(json[2])*100);
            model=json[3];
            production=parseInt(json[4]);
            location=json[5];
            sea_depth=parseInt(json[6]);
            distance_coast=parseInt(json[7]);
                }})).then(function(){
            row_0.appendChild(generate_life_cycle_grid(year, pct_steel, pct_renew, model, production, location, sea_depth, distance_coast))
    })
};

  
