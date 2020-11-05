var svg_chart_time_capacity = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg_chart_time_capacity.id="svg_chart_time_capacity"
svg_chart_time_capacity.setAttribute("height", "160px");

var svg_chart_model_capacity = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg_chart_model_capacity.id="svg_chart_model_capacity"
svg_chart_model_capacity.setAttribute("height", "160px");

var svg_chart_time_lifetime = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg_chart_time_lifetime.id="svg_chart_time_lifetime"
svg_chart_time_lifetime.setAttribute("height", "160px");

var svg_chart_model_lifetime = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg_chart_model_lifetime.id="svg_chart_model_lifetime"
svg_chart_model_lifetime.setAttribute("height", "160px");

var svg_chart_time_power = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg_chart_time_power.id="svg_chart_time_power"
svg_chart_time_power.setAttribute("height", "160px");

var svg_chart_model_power = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg_chart_model_power.id="svg_chart_model_power"
svg_chart_model_power.setAttribute("height", "160px");

var svg_chart_time_climate_change = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg_chart_time_climate_change.setAttribute("height", "160px");
svg_chart_time_climate_change.id="svg_chart_time_climate_change"

var svg_chart_model_climate_change = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg_chart_model_climate_change.setAttribute("height", "160px");
svg_chart_model_climate_change.id="svg_chart_model_climate_change"


var svg_chart_time_energy = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg_chart_time_energy.setAttribute("height", "160px");
svg_chart_time_energy.id="svg_chart_time_energy"

var svg_chart_model_energy = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg_chart_model_energy.setAttribute("height", "160px");
svg_chart_model_energy.id="svg_chart_model_energy"


var svg_chart_time_metals = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg_chart_time_metals.setAttribute("height", "160px");
svg_chart_time_metals.id="svg_chart_time_metals"

var svg_chart_model_metals = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg_chart_model_metals.setAttribute("height", "160px");
svg_chart_model_metals.id="svg_chart_model_metals"

function add_popup(uuid, year, coordinates, min_p, max_p, on_off) {
    
    var row_h = document.createElement('container');
    row_h.className = 'row';
    var array_properties=[];
    get_turbine_properties();

 
    
    var ul = document.createElement('ul');
    ul.className = 'nav nav-tabs';
    var li1 = document.createElement('li');
    li1.id="General";
    li1.className="active";

    li1.innerHTML='<a data-toggle="tab" href="#menu1">General</a>';
    ul.appendChild(li1);
    
    var li6 = document.createElement('li');
    li6.id="Environmental footprint";
    li6.innerHTML='<a data-toggle="tab" href="#menu6">Environmental footprint</a>';
    ul.appendChild(li6);
    li6.id="li6_"+uuid;

    
    var li2 = document.createElement('li');
    li2.id="capacity";
    li2.innerHTML='<a data-toggle="tab" href="#menu5">Production</a>';
    ul.appendChild(li2);
    
    var li3 = document.createElement('li');
    li3.id="lifetime";
    li3.innerHTML='<a data-toggle="tab" href="#menu3">Lifetime</a>';
    ul.appendChild(li3);
    
    var li4 = document.createElement('li');
    li4.id="power";
    li4.innerHTML='<a data-toggle="tab" href="#menu4">Power</a>';
    ul.appendChild(li4);
    
    var li5 = document.createElement('li');
    li5.id="Production";
    li5.innerHTML='<a data-toggle="tab" href="#menu2">Capacity factor</a>';
    ul.appendChild(li5);
    
    

    var tab_content = document.createElement('div');
    tab_content.id="tab_content"
    tab_content.className='tab-content';
    var tab_p1 = document.createElement('div');
    tab_p1.className='tab-pane fade in active';
    tab_p1.id="menu1";

    tab_p1.appendChild(row_h);

    var tab_p2 = document.createElement('div');
    tab_p2.className='tab-pane fade';
    tab_p2.id="menu2";
    tab_p2.style.textAlign="center";
    
    var tab_p3 = document.createElement('div');
    tab_p3.className='tab-pane fade';
    tab_p3.id="menu3";
    tab_p3.style.textAlign="center";
    
    var tab_p4 = document.createElement('div');
    tab_p4.className='tab-pane fade';
    tab_p4.id="menu4";
    tab_p4.style.textAlign="center";
    
    var tab_p5 = document.createElement('div');
    tab_p5.className='tab-pane fade';
    tab_p5.id="menu5";
    tab_p5.style.textAlign="center";
    
    var tab_p6 = document.createElement('div');
    tab_p6.className='tab-pane fade';
    tab_p6.id="menu6";
    tab_p6.style.textAlign="center";
    
    

    var svgchart_cap = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgchart_cap.id="svgchart_cap"
    svgchart_cap.setAttribute("height", "160px");
    

    var svgchart_life = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgchart_life.id="svgchart_life"
    svgchart_life.setAttribute("height", "160px");

    
    var svgchart_power = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgchart_power.id="svgchart_power"
    svgchart_power.setAttribute("height", "160px");
    

    
    var svgchart_prod = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgchart_prod.id="svgchart_prod"
    svgchart_prod.setAttribute("height", "160px");
    
    var row_graph_cap = document.createElement('container');
    row_graph_cap.className = 'uk-grid-small uk-grid-match uk-animation-fade uk-flex-middle uk-child-width-1-2 uk-padding-small';
    row_graph_cap.setAttribute("uk-grid", "");
    row_graph_cap.setAttribute("uk-height-match","");
    
    var row_graph_cap_time = document.createElement('container');
    row_graph_cap_time.className = 'uk-grid-small uk-grid-match uk-animation-fade uk-flex-middle uk-child-width-1-3 uk-padding-small';
    row_graph_cap_time.setAttribute("uk-grid", "");
    row_graph_cap_time.setAttribute("uk-height-match","");
    
    var row_graph_life = document.createElement('container');
    row_graph_life.className = 'uk-grid-small uk-grid-match uk-animation-fade uk-flex-middle uk-child-width-1-2 uk-padding-small';
    row_graph_life.setAttribute("uk-grid", "");
    row_graph_life.setAttribute("uk-height-match","");
    
    var row_graph_life_time = document.createElement('container');
    row_graph_life_time.className = 'uk-grid-small uk-grid-match uk-animation-fade uk-flex-middle uk-child-width-1-3 uk-padding-small';
    row_graph_life_time.setAttribute("uk-grid", "");
    row_graph_life_time.setAttribute("uk-height-match","");
    
    var row_graph_power = document.createElement('container');
    row_graph_power.className = 'uk-grid-small uk-grid-match uk-animation-fade uk-flex-middle uk-child-width-1-2 uk-padding-small';
    row_graph_power.setAttribute("uk-grid", "");
    row_graph_power.setAttribute("uk-height-match","");
    
    var row_graph_power_time = document.createElement('container');
    row_graph_power_time.className = 'uk-grid-small uk-grid-match uk-animation-fade uk-flex-middle uk-padding-small uk-child-width-1-3';
    row_graph_power_time.setAttribute("uk-grid", "");
    row_graph_power_time.setAttribute("uk-height-match","");
    
    
    
    var array_pane=["capacity", "power", "lifetime"];
    for (j = 0; j < array_pane.length; j++) {
        
        for (i = 0; i < 5; i++) {
            var level_2=document.createElement("div");
            var level_3=document.createElement("div");
            var level_4=document.createElement("div");
            var level_5=document.createElement("div");
            var level_6_1=document.createElement("div");
            var image_1=document.createElement("img");
            var level_6_2=document.createElement("div");
            var level_6_3=document.createElement("div");
            
            var header_1=document.createElement("h3");
            var paragraph_1_1=document.createElement("p");
            var paragraph_1_2=document.createElement("p");
            
            level_3.className="uk-card uk-card-default uk-card-hover uk-align-center";
            level_4.className="uk-card-header";

            level_5.className="uk-grid-small uk-flex-middle";
            level_5.setAttribute("uk-grid", "");
            image_1.setAttribute("height","10");
            image_1.setAttribute("width","30"); 
            level_6_1.className="uk-width-auto";
            level_6_2.className="uk-width-auto";
            
            header_1.className="uk-card-title uk-margin-remove-bottom";

            if (i==0){
                header_1.innerHTML="This turbine";
                
                image_1.src=DJANGO_STATIC_URL+"static/lca_wind_dk/pictures/model.png";
               level_6_3.className="uk-grid-small uk-flex-middle ";
                var level_6_3_1=document.createElement("div");
                var level_6_3_2=document.createElement("div");
                level_6_3_1.className="uk-width-1-1";
                level_6_3_2.className="uk-width-1-1 uk-margin";
                level_6_3.appendChild(level_6_3_1);
                level_6_3.appendChild(level_6_3_2);
                level_6_3_1.id="radial_container_"+array_pane[j]+"_"+uuid;
                get_percentile(array_pane[j]);
                level_6_3_2.id="footer_"+array_pane[j]+"_"+uuid;
                
                if (array_pane[j]=="capacity"){paragraph_1_2.innerHTML="power-to-production ratio";};
                if (array_pane[j]=="lifetime"){paragraph_1_2.innerHTML="years of service";};
                if (array_pane[j]=="power"){paragraph_1_2.innerHTML="kilowatts";};
                
                header_1.appendChild(paragraph_1_2);

                     }
                
            if (i==1) {
                header_1.innerHTML="The fleet";
                level_6_3.className="uk-width-1-1";
                paragraph_1_2.innerHTML="in "+year;
                header_1.appendChild(paragraph_1_2);
                image_1.src=DJANGO_STATIC_URL+"static/lca_wind_dk/pictures/fleet.png";
                var level_6_3_2=document.createElement("div");
                level_6_3_2.className="uk-width-1-1 uk-margin";
                level_6_3_2.id="footer_2_"+array_pane[j]+"_"+uuid;
                
                  
                  }
            
            // Graph similar models
            if (i==2){
                header_1.innerHTML="Similar turbines";
                
                image_1.src=DJANGO_STATIC_URL+"static/lca_wind_dk/pictures/model.png";
                level_6_3.className="uk-grid-small uk-flex-middle ";
                var level_6_3_1=document.createElement("div");
                var level_6_3_2=document.createElement("div");
                level_6_3_1.className="uk-width-1-1";
                level_6_3_2.className="uk-width-1-1 uk-margin";
                level_6_3_2.id="footer_3_"+array_pane[j]+"_"+uuid;
                
                
                level_6_3.appendChild(level_6_3_1);
                level_6_3.appendChild(level_6_3_2);
                
                
                if (array_pane[j]=="capacity"){paragraph_1_2.innerHTML="power-to-production ratio for similar models";};
                if (array_pane[j]=="lifetime"){paragraph_1_2.innerHTML="years of service for similar models";};
                if (array_pane[j]=="power"){paragraph_1_2.innerHTML="nominal power outpt of similar models";};
                
                header_1.appendChild(paragraph_1_2);

                     }
            // Generation of time progression graph
            
            
            if (i==3) {
                header_1.innerHTML="The fleet";
                level_6_3.className="uk-width-1-1";
                if (on_off=="ON"){
                    paragraph_1_2.innerHTML="over time, for onshore installations";
                };
                
                if (on_off=="OFF"){
                    paragraph_1_2.innerHTML="over time, for offshore installations";
                };
                
                if (on_off=="ALL"){
                    paragraph_1_2.innerHTML="over time, for all installations";
                };
                
                header_1.appendChild(paragraph_1_2);
                image_1.src=DJANGO_STATIC_URL+"static/lca_wind_dk/pictures/fleet.png";
                var level_6_3_2=document.createElement("div");
                level_6_3_2.className="uk-width-1-1 uk-margin"; 
                  }
            
            // Data download
            if (i==4) {
                header_1.innerHTML="Data";
                level_6_3.className="uk-width-1-1";
                           
                image_1.src=DJANGO_STATIC_URL+"static/lca_wind_dk/pictures/data_icon.png";
                var level_6_3_2=document.createElement("div");
                level_6_3_2.className="uk-width-1-1 uk-margin";
                
                var row_data = document.createElement('container');
                row_data.className = 'uk-grid-small uk-grid-match uk-animation-fade uk-flex-middle uk-child-width-1-2 uk-padding-small';
                row_data.setAttribute("uk-grid", "");
                row_data.setAttribute("uk-height-match","");

                var data_CSV = document.createElement("div");
                data_CSV.className="uk-card uk-card-default uk-card-hover uk-align-center uk-child-width-1-2";
                data_CSV.setAttribute("syle", "margin-bottom:10px");
                
                
                var header_data_CSV=document.createElement("div");

                var img_div_CSV=document.createElement("div");
                img_div_CSV.className="uk-card-title uk-margin-remove-bottom";
                
                header_data_CSV.className="uk-card-title uk-margin-remove-bottom ";          
                header_data_CSV.innerHTML="CSV";
                data_CSV.appendChild(header_data_CSV);

                var btn_turbine = document.createElement("BUTTON");        // Create a <button> element
                btn_turbine.innerHTML="This turbine"
                btn_turbine.setAttribute("style", "margin-top:5px")
                btn_turbine.setAttribute("style", "margin-bottom:5px")
                btn_turbine.setAttribute("style", "margin-left:2px")
                btn_turbine.setAttribute("style", "margin-right:2px")
                btn_turbine.id = "export_turbine_button_"+array_pane[j]
                btn_turbine.onclick = function() {export_csv(1);}
                
                var btn_similar = document.createElement("BUTTON");        // Create a <button> element
                btn_similar.innerHTML="Similar turbines"
                btn_similar.setAttribute("style", "margin-top:5px")
                btn_similar.setAttribute("style", "margin-bottom:5px")
                btn_similar.setAttribute("style", "margin-left:2px")
                btn_similar.setAttribute("style", "margin-right:2px")
                btn_similar.id = "export_similar_button_"+array_pane[j]
                btn_similar.onclick = function() {export_csv(2);}
                
                var btn_fleet = document.createElement("BUTTON");        // Create a <button> element
                btn_fleet.innerHTML="The fleet (with current filters)"
                btn_fleet.setAttribute("style", "margin-top:5px")
                btn_fleet.setAttribute("style", "margin-bottom:5px")
                btn_fleet.setAttribute("style", "margin-left:2px")
                btn_fleet.setAttribute("style", "margin-right:2px")
                btn_fleet.id = "export_fleet_button_"+array_pane[j]
                btn_fleet.onclick = function() {export_csv(3);}
                
                data_CSV.appendChild(btn_turbine);
                data_CSV.appendChild(btn_similar);
                data_CSV.appendChild(btn_fleet);

                  }
            
            if (i<2){
                if (array_pane[j]=="capacity"){
                      level_6_3.appendChild(svgchart_cap);
                      row_graph_cap.appendChild(level_2);
                      level_6_3.appendChild(level_6_3_2);
                    }
                if (array_pane[j]=="power"){
                      level_6_3.appendChild(svgchart_power);
                      row_graph_power.appendChild(level_2);
                      level_6_3.appendChild(level_6_3_2);
                    }
                if (array_pane[j]=="lifetime"){
                      level_6_3.appendChild(svgchart_life);
                      row_graph_life.appendChild(level_2);
                      level_6_3.appendChild(level_6_3_2);
                    }}
            else {
                if (i==2){
                    if (array_pane[j]=="capacity"){
                     level_6_3.appendChild(svg_chart_model_capacity);
                      row_graph_cap_time.appendChild(level_2);
                      level_6_3.appendChild(level_6_3_2);
                        }
                    if (array_pane[j]=="power"){
                        level_6_3.appendChild(svg_chart_model_power);
                      row_graph_power_time.appendChild(level_2);
                      level_6_3.appendChild(level_6_3_2);
                        }
                    if (array_pane[j]=="lifetime"){
                        level_6_3.appendChild(svg_chart_model_lifetime);
                      row_graph_life_time.appendChild(level_2);
                      level_6_3.appendChild(level_6_3_2);
                        }}
                
                if (i==3){
                    if (array_pane[j]=="capacity"){
                          level_6_3.appendChild(svg_chart_time_capacity);
                          row_graph_cap_time.appendChild(level_2);
                          level_6_3.appendChild(level_6_3_2);
                        }
                    if (array_pane[j]=="power"){
                          level_6_3.appendChild(svg_chart_time_power);
                          row_graph_power_time.appendChild(level_2);
                          level_6_3.appendChild(level_6_3_2);
                        }
                    if (array_pane[j]=="lifetime"){
                          level_6_3.appendChild(svg_chart_time_lifetime);
                          row_graph_life_time.appendChild(level_2);
                          level_6_3.appendChild(level_6_3_2);
                        }}
                
                if (i==4){
                    if (array_pane[j]=="capacity"){
                        row_graph_cap_time.appendChild(level_2);
                        //level_6_3.appendChild(data_PDF);
                        level_6_3.appendChild(data_CSV);
                        }
                    if (array_pane[j]=="power"){
                        row_graph_power_time.appendChild(level_2);
                        //level_6_3.appendChild(data_PDF);
                        level_6_3.appendChild(data_CSV);
                        }
                    if (array_pane[j]=="lifetime"){
                        row_graph_life_time.appendChild(level_2);
                        //level_6_3.appendChild(data_PDF);
                        level_6_3.appendChild(data_CSV);
                        }
                    
                }
                
            }

            paragraph_1_2.className="uk-text-meta uk-margin-remove-top";

            
            level_6_2.appendChild(header_1);
            level_6_1.appendChild(image_1);
            level_5.appendChild(level_6_1);
            level_5.appendChild(level_6_2);
            level_5.appendChild(level_6_3);
            level_4.appendChild(level_5);
            level_3.appendChild(level_4);
            level_2.appendChild(level_3);
        }
    }
    
    generate_graph_cap();
    generate_graph_life();
    generate_graph_power();
    
    
    
 
    var row_graph_prod = document.createElement('container');
    row_graph_prod.className = 'row';
    row_graph_prod.appendChild(svgchart_prod);
    generate_graph_prod();
    
    
    
    
    //Environmental footprint

    var env_table=document.createElement("div");
    env_table.className="row";
    
    
    var env_div_1=document.createElement("div");
    env_div_1.className="col-xs-3";
    
        var env_ul_1=document.createElement("ul");
        env_ul_1.className="nav nav-tabs tabs-left";
        env_ul_1.id="tab_categories";
            var env_li_0=document.createElement("li");
            env_li_0.innerHTML="<a href='#cat_0_"+uuid+"' data-toggle='tab'>Life cycle</a>";
            env_li_0.id="env_li_0_"+uuid;
            env_li_0.className="active";
            
            var env_li_1=document.createElement("li");
            env_li_1.innerHTML="<a href='#cat_1_"+uuid+"' data-toggle='tab'>Carbon footprint</a>";
                   
    
            var env_li_2=document.createElement("li");
            env_li_2.innerHTML="<a href='#cat_2_"+uuid+"' data-toggle='tab'>Energy payback</a>";
    
            var env_li_3=document.createElement("li");
            env_li_3.innerHTML="<a href='#cat_3_"+uuid+"' data-toggle='tab'>Mineral resource use</a>";
            
    
            var env_li_4=document.createElement("li");
            env_li_4.innerHTML="<a href='#cat_4_"+uuid+"' data-toggle='tab'>Other categories</a>";
    

            
        env_ul_1.appendChild(env_li_0);
        env_ul_1.appendChild(env_li_2);
        env_ul_1.appendChild(env_li_1);
        env_ul_1.appendChild(env_li_3);
        env_ul_1.appendChild(env_li_4);
        env_div_1.appendChild(env_ul_1);
    
        var btn_turbine = document.createElement("BUTTON");        // Create a <button> element
        btn_turbine.innerHTML="This turbine"
        btn_turbine.setAttribute("style", "margin-top:10px")
        btn_turbine.setAttribute("style", "margin-bottom:10px")
        btn_turbine.setAttribute("style", "margin-left:2px")
        btn_turbine.setAttribute("style", "margin-right:2px")
        btn_turbine.id = "export_turbine_button_"+array_pane[j]
        btn_turbine.onclick = function() {export_csv(1);}

        var btn_similar = document.createElement("BUTTON");        // Create a <button> element
        btn_similar.innerHTML="Similar turbines"
        btn_similar.setAttribute("style", "margin-top:10px")
        btn_similar.setAttribute("style", "margin-bottom:10px")
        btn_similar.setAttribute("style", "margin-left:2px")
        btn_similar.setAttribute("style", "margin-right:2px")
        btn_similar.id = "export_similar_button_"+array_pane[j]
        btn_similar.onclick = function() {export_csv(2);}

        var btn_fleet = document.createElement("BUTTON");        // Create a <button> element
        btn_fleet.innerHTML="The fleet (with current filters)"
        btn_fleet.setAttribute("style", "margin-top:10px")
        btn_fleet.setAttribute("style", "margin-bottom:10px")
        btn_fleet.setAttribute("style", "margin-left:2px")
        btn_fleet.setAttribute("style", "margin-right:2px")
        btn_fleet.id = "export_fleet_button_"+array_pane[j]
        btn_fleet.onclick = function() {export_csv(3);}
        
        var header_data_CSV=document.createElement("div");          
        header_data_CSV.innerHTML="CSV data export";
        header_data_CSV.setAttribute("style", "padding-top:5px;")
        header_data_CSV.setAttribute("style", "padding-bottom:5px;")    
        header_data_CSV.setAttribute("style", "border:1px solid grey;")
        
        
        var div_button=document.createElement("div");
    
        div_button.appendChild(btn_turbine);
        div_button.appendChild(btn_similar);
        div_button.appendChild(btn_fleet);
    
    header_data_CSV.appendChild(div_button);    
    env_div_1.appendChild(header_data_CSV);

    
    var svgchart_climate = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgchart_climate.setAttribute("height", "160px");
    
    var svgchart_energy = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgchart_energy.setAttribute("height", "160px");
    
    var svgchart_metals = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgchart_metals.setAttribute("height", "160px");
    
    var row_climate = document.createElement('div');
    row_climate.className = 'uk-grid-small uk-grid-match uk-animation-fade uk-flex-middle uk-child-width-1-2 uk-padding-small';
    row_climate.setAttribute("uk-grid", "");
    row_climate.setAttribute("uk-height-match","");
    
    var row_climate_time = document.createElement('div');
    row_climate_time.className = 'uk-grid-small uk-grid-match uk-animation-fade uk-flex-middle uk-child-width-1-2 uk-padding-small';
    row_climate_time.setAttribute("uk-grid", "");
    row_climate_time.setAttribute("uk-height-match","");
    
    var row_energy = document.createElement('div');
    row_energy.className = 'uk-grid-small uk-grid-match uk-animation-fade uk-flex-middle uk-child-width-1-2 uk-padding-small';
    row_energy.setAttribute("uk-grid", "");
    row_energy.setAttribute("uk-height-match","");
    
    var row_energy_time = document.createElement('div');
    row_energy_time.className = 'uk-grid-small uk-grid-match uk-animation-fade uk-flex-middle uk-child-width-1-2 uk-padding-small';
    row_energy_time.setAttribute("uk-grid", "");
    row_energy_time.setAttribute("uk-height-match","");
    
    
    var row_metals = document.createElement('div');
    row_metals.className = 'uk-grid-small uk-grid-match uk-animation-fade uk-flex-middle uk-child-width-1-2 uk-padding-small';
    row_metals.setAttribute("uk-grid", "");
    row_metals.setAttribute("uk-height-match","");
    
    var row_metals_time = document.createElement('div');
    row_metals_time.className = 'uk-grid-small uk-grid-match uk-animation-fade uk-flex-middle uk-child-width-1-2 uk-padding-small';
    row_metals_time.setAttribute("uk-grid", "");
    row_metals_time.setAttribute("uk-height-match","");
    
    var row_others = document.createElement('div');
    row_others.className = 'uk-grid-small uk-grid-match uk-animation-fade uk-flex-middle uk-child-width-1-2 uk-padding-small';
    row_others.setAttribute("uk-grid", "");
    row_others.setAttribute("uk-height-match","");
    
    var row_0 = document.createElement('div');
    get_year_manufacture(uuid, row_0);

    
    var tab_content_env = document.createElement('div');
    tab_content_env.id="tab_content"
    tab_content_env.className='tab-content col-xs-9';
    
    
    var array_pane_impact=["climate_change", "energy", "metals", "others"];
    for (j = 0; j < array_pane_impact.length; j++) {
        if (array_pane_impact[j]!=="others"){
        
        for (i = 0; i < 4; i++) {
            var level_2=document.createElement("div");
            var level_3=document.createElement("div");
            var level_4=document.createElement("div");
            var level_5=document.createElement("div");
            var level_6_1=document.createElement("div");
            var image_1=document.createElement("img");
            var level_6_2=document.createElement("div");
            var level_6_3=document.createElement("div");
            
            var header_1=document.createElement("h3");
            var paragraph_1_1=document.createElement("p");
            var paragraph_1_2=document.createElement("p");

            level_3.className="uk-card uk-card-default uk-card-hover uk-align-center";
            level_4.className="uk-card-header";
            level_5.className="uk-grid-small uk-flex-middle";
            level_5.setAttribute("uk-grid", "");
            image_1.setAttribute("height","10");
            image_1.setAttribute("width","30"); 
            level_6_1.className="uk-width-auto";
            level_6_2.className="uk-width-auto";
            
            header_1.className="uk-card-title uk-margin-remove-bottom";

            if (i==0){
                header_1.innerHTML="This turbine";
                
                image_1.src=DJANGO_STATIC_URL+"static/lca_wind_dk/pictures/model.png";
               level_6_3.className="uk-grid-small uk-flex-middle uk-child-width-1-2";
                var level_6_3_1=document.createElement("div");
                var level_6_3_2=document.createElement("div");
                level_6_3_1.className="uk-width-1-1";
                level_6_3_2.className="uk-width-1-1 uk-margin";
                level_6_3.appendChild(level_6_3_1);
                level_6_3.appendChild(level_6_3_2);
                
                level_6_3_1.id="radial_container_"+array_pane_impact[j]+"_"+uuid;
                
                
                get_percentile(array_pane_impact[j]);
                level_6_3_2.id="footer_"+array_pane_impact[j]+"_"+uuid;
                
                if (array_pane_impact[j]=="climate_change"){paragraph_1_2.innerHTML="grams of CO2-eq.";};
                if (array_pane_impact[j]=="energy"){paragraph_1_2.innerHTML="ratio";};
                if (array_pane_impact[j]=="metals"){paragraph_1_2.innerHTML="milligrams of Sb-4-eq.";};
                
                header_1.appendChild(paragraph_1_2);

                     }
                
            if (i==1) {
                    header_1.innerHTML="The fleet";
                    level_6_3.className="uk-width-1-1";
                    paragraph_1_2.innerHTML="in "+year;
                    header_1.appendChild(paragraph_1_2);
                    image_1.src=DJANGO_STATIC_URL+"static/lca_wind_dk/pictures/fleet.png";
                
                    var level_6_3_2=document.createElement("div");
                    level_6_3_2.className="uk-width-1-1 uk-margin";
                    level_6_3_2.id="footer_2_"+array_pane_impact[j]+"_"+uuid;
                  }
            
            if (i==2){
                header_1.innerHTML="Similar turbines";
                
                image_1.src=DJANGO_STATIC_URL+"static/lca_wind_dk/pictures/model.png";
                level_6_3.className="uk-width-1-1";
                var level_6_3_1=document.createElement("div");
                var level_6_3_2=document.createElement("div");
                level_6_3_1.className="uk-width-1-1";
                level_6_3_2.className="uk-width-1-1 uk-margin";
                level_6_3_2.id="footer_3_"+array_pane_impact[j]+"_"+uuid;
                
                level_6_3.appendChild(level_6_3_1);
                level_6_3.appendChild(level_6_3_2);}
            
            if (i==3) {
                    header_1.innerHTML="The fleet";
                    level_6_3.className="uk-width-1-1";
                    if (on_off=="ON"){
                        paragraph_1_2.innerHTML="over time, for onshore installations";
                    };

                    if (on_off=="OFF"){
                        paragraph_1_2.innerHTML="over time, for offshore installations";
                    };

                    if (on_off=="ALL"){
                        paragraph_1_2.innerHTML="over time, for all installations";
                    };
                        header_1.appendChild(paragraph_1_2);
                    image_1.src=DJANGO_STATIC_URL+"static/lca_wind_dk/pictures/fleet.png";
                
                    var level_6_3_2=document.createElement("div");
                    level_6_3_2.className="uk-width-1-1 uk-margin";
                  }
            
            if (i<2){
                if (array_pane_impact[j]=="climate_change"){
                          level_6_3.appendChild(svgchart_climate);
                          level_6_3.appendChild(level_6_3_2);
                          generate_graph_impact(array_pane_impact[j]);
                          row_climate.appendChild(level_2);
                    }
                if (array_pane_impact[j]=="energy"){
                          level_6_3.appendChild(svgchart_energy);
                          level_6_3.appendChild(level_6_3_2);
                          generate_graph_impact(array_pane_impact[j]);
                          row_energy.appendChild(level_2);
                    }
                if (array_pane_impact[j]=="metals"){
                          level_6_3.appendChild(svgchart_metals);
                          level_6_3.appendChild(level_6_3_2);
                          generate_graph_impact(array_pane_impact[j]);
                          row_metals.appendChild(level_2);
                    }}
            else{
                if(i==2){
                    if (array_pane_impact[j]=="climate_change"){
                      level_6_3.appendChild(svg_chart_model_climate_change);
                      level_6_3.appendChild(level_6_3_2);
                      row_climate_time.appendChild(level_2);
                }
            if (array_pane_impact[j]=="energy"){
                      level_6_3.appendChild(svg_chart_model_energy);
                      level_6_3.appendChild(level_6_3_2);
                      row_energy_time.appendChild(level_2);
                }
            if (array_pane_impact[j]=="metals"){
                      level_6_3.appendChild(svg_chart_model_metals);
                      level_6_3.appendChild(level_6_3_2);
                      row_metals_time.appendChild(level_2);
                }
                    
                }
            if(i==3){
                    if (array_pane_impact[j]=="climate_change"){
                      level_6_3.appendChild(svg_chart_time_climate_change);
                      level_6_3.appendChild(level_6_3_2);
                      row_climate_time.appendChild(level_2);
                }
            if (array_pane_impact[j]=="energy"){
                      level_6_3.appendChild(svg_chart_time_energy);
                      level_6_3.appendChild(level_6_3_2);
                      row_energy_time.appendChild(level_2);
                }
            if (array_pane_impact[j]=="metals"){
                      level_6_3.appendChild(svg_chart_time_metals);
                      level_6_3.appendChild(level_6_3_2);
                      row_metals_time.appendChild(level_2);
                }}}

            paragraph_1_2.className="uk-text-meta uk-margin-remove-top";

            level_6_2.appendChild(header_1);
            level_6_1.appendChild(image_1);
            level_5.appendChild(level_6_1);
            level_5.appendChild(level_6_2);
            level_5.appendChild(level_6_3);
            level_4.appendChild(level_5);
            level_3.appendChild(level_4);
            level_2.appendChild(level_3);
            }
        }
    else{
            get_other_impacts();
            var level_2=document.createElement("div");
            level_2.id="table_others";
            level_2.className="uk-card uk-card-default uk-card-hover uk-align-center uk-width-1-1";
            row_others.appendChild(level_2);
        }
    }
    
    
    var env_tab_0=document.createElement("div");
    env_tab_0.className='tab-pane active';
    env_tab_0.id="cat_0_"+uuid;
    env_tab_0.style.textAlign="center";
    
    var env_tab_1=document.createElement("div");
    env_tab_1.className='tab-pane fade';
    env_tab_1.id="cat_1_"+uuid;
    env_tab_1.style.textAlign="center";
    
    
    var env_tab_2=document.createElement("div");
    env_tab_2.className='tab-pane fade';
    env_tab_2.id="cat_2_"+uuid;
    env_tab_2.style.textAlign="center";
    
    
    var env_tab_3=document.createElement("div");
    env_tab_3.className='tab-pane fade';
    env_tab_3.id="cat_3_"+uuid;
    env_tab_3.style.textAlign="center";
    
    
    var env_tab_4=document.createElement("div");
    env_tab_4.className='tab-pane fade';
    env_tab_4.id="cat_4_"+uuid;
    env_tab_4.style.textAlign="center";

    env_tab_0.appendChild(row_0);
    env_tab_1.appendChild(row_climate);
    env_tab_1.appendChild(row_climate_time);
    env_tab_2.appendChild(row_energy);
    env_tab_2.appendChild(row_energy_time);
    env_tab_3.appendChild(row_metals);
    env_tab_3.appendChild(row_metals_time);
    env_tab_4.appendChild(row_others);
    
    tab_content_env.appendChild(env_tab_0);
    tab_content_env.appendChild(env_tab_1);
    tab_content_env.appendChild(env_tab_2);
    tab_content_env.appendChild(env_tab_3);
    tab_content_env.appendChild(env_tab_4);
    
    env_table.appendChild(env_div_1);

    env_table.appendChild(tab_content_env);
    
    var clear_fix=document.createElement("div");
    clear_fix.classname="clearfix";
    env_table.appendChild(clear_fix);

    tab_p2.appendChild(row_graph_cap);
    tab_p2.appendChild(row_graph_cap_time);
    tab_p3.appendChild(row_graph_life);
    tab_p3.appendChild(row_graph_life_time);
    tab_p4.appendChild(row_graph_power);
    tab_p4.appendChild(row_graph_power_time);
    tab_p5.appendChild(row_graph_prod);
    tab_p6.appendChild(env_table);   
    
    tab_content.appendChild(tab_p1);
    tab_content.appendChild(tab_p2);
    tab_content.appendChild(tab_p3);
    tab_content.appendChild(tab_p4);
    tab_content.appendChild(tab_p5);
    tab_content.appendChild(tab_p6);
    
   

    var el = document.createElement('div');
    el.appendChild(ul);
    el.appendChild(tab_content);
    
    
    
    
    
    
    
    function get_turbine_properties(){
    $.when($.ajax({
        url: "request_data/"+uuid,
        dataType: 'json',
        type: 'GET',
        success : function(data) {
            Object.keys(data).forEach(function(i) {
                if (data[i]==null || data[i]=="0" || data[i]=="NaN" || String(data[i]).toLowerCase().includes("ukendt")) {
                    data[i] = "unknown";
                    }
                });
            array_properties.push(data["Fabrikat"], data["Model"], data["Kapacitet (kW)"],data["Start year"], data["End year"], data["Lifetime"], coordinates, data["website"])
            },
        error: function(xhr, status, error){ console.log(error)}})
    ).then(function(){row_h.appendChild(generate_grid(array_properties));
                    get_mean();
                    get_mean_models(array_properties[2]);
                    generate_graph_models(array_properties[2]);
                     })};
    
        //Histogram tab 2
    
    function generate_graph_cap(){
    nv.addGraph(function() {
        var chartData_cap;
        var chart_cap;
        chart_cap = nv.models.multiBarChart()
          .duration(300)
          .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
          .rotateLabels(0)      //Angle to rotate x-axis labels.
          .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
          .groupSpacing(0.3)    //Distance between each group of bars.
            ;

        if (on_off=="ON"){
            chart_cap.xAxis.axisLabel("In "+year+ " for onshore installations between "+min_p+" and "+max_p+" kW.")
        };
        if (on_off=="OFF"){
            chart_cap.xAxis.axisLabel("In "+year+" for offshore installations between "+min_p+" and "+max_p+" kW.")
        };
        if (on_off=="ALL"){
            chart_cap.xAxis.axisLabel("In "+year+" for all installations between "+min_p+" and "+max_p+" kW.")
        };
        
                            
        chart_cap.xAxis.tickFormat(d3.format('.2f'));

            chart_cap.yAxis
                .axisLabel('Occurence')
                .tickFormat(d3.format('r'));

                chartData_cap=d3.select(svgchart_cap)
                    .datum(function(){
                        return get_data("capacity")})
                    .call(chart_cap);
        
        chart_cap.tooltip.contentGenerator(function (d) {
                      return "Cap. factor of <b>"+d.value.toFixed(2)+"</b>, <b>"+d.data.y+"</b> wind turbines";
                    });
        
            nv.utils.windowResize(function() {chart_cap.update()});
        return chart_cap;
        });};
    
   function generate_graph_models(power){
        var arr=[];
        var label="";
        var val_up;
        var val_down;
        val_up = Math.floor(power*1.05);
        val_down = Math.floor(power*0.95);
        
        
         $.when($.ajax({
        url: "request_stat_models/"+val_down+"/"+val_up+"/"+on_off,
        dataType: 'json',
        type: 'GET',
        success : function(json) {
            Object.keys(json).forEach(function(key) {
                arr.push(json[key]);
                });
            
            },error: function(xhr, status, error){ console.log(error);console.warn(xhr.responseText);}
        
        })).then(function(arr) {
             
             //Generation graphs here!
             //Climate change
             
            nv.addGraph(function() {
                var chartData;
                var chart;
                chart = nv.models.multiBarChart()
                    .margin({left: 60})
                    .duration(500)
                    .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
                    .rotateLabels(0)      //Angle to rotate x-axis labels.
                    .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
                    .groupSpacing(0.1)    //Distance between each group of bars.
                    ;


                if (on_off=="ON"){
                    chart.xAxis.axisLabel("For onshore installations of "+power+" kW +/- 5%.")};
                if (on_off=="OFF"){
                    chart.xAxis.axisLabel("For offshore installations of "+power+" kW +/- 5%.")};
                if (on_off=="ALL"){
                    chart.xAxis.axisLabel("For all installations of "+power+" kW +/- 5%.")};
                    
                chart.xAxis.tickFormat(d3.format('.0f'));

                chart.yAxis
                    .axisLabel('Occurence')
                    .tickFormat(d3.format('.0f'));

                arr.forEach(function(item) {
                    if (item["key"]=="g. CO2-eq./kWh"){
                        chartData=d3.select(svg_chart_model_climate_change)
                            .datum([{key: item["key"],values: item["values"],color: "#ff7f0e", label:"g. CO2-eq./kWh"}])
                            .call(chart);
                    };
                });
                chart.tooltip.contentGenerator(function (d) {
                      return "<b>"+d.value.toFixed(0)+"</b> g. CO<sub>2</sub>-eq./kWh, <b>"+d.data.y+"</b> wind turbines";
                    });
                
                nv.utils.windowResize(function() {chart.update()});
        
                return chart;
                        })
             //Metals
             
            nv.addGraph(function() {
                var chartData;
                var chart;
                chart = nv.models.multiBarChart()
                    .duration(300)
                    .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
                    .rotateLabels(0)      //Angle to rotate x-axis labels.
                    .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
                    .groupSpacing(0.3)    //Distance between each group of bars.
                    ;

                if (on_off=="ON"){
                    chart.xAxis.axisLabel("For onshore installations of "+power+" kW +/- 5%.")};
                if (on_off=="OFF"){
                    chart.xAxis.axisLabel("For offshore installations of "+power+" kW +/- 5%.")};
                if (on_off=="ALL"){
                    chart.xAxis.axisLabel("For all installations of "+power+" kW +/- 5%.")};
                    
                chart.xAxis.tickFormat(d3.format('.2f'));

                chart.yAxis
                    .axisLabel('Occurences')
                    .tickFormat(d3.format('r'));
                
                arr.forEach(function(item) {
                    if (item["key"]=="mg. SB4-eq./kWh"){
                        chartData=d3.select(svg_chart_model_metals)
                            .datum([{key: item["key"],values: item["values"],color: "#ff7f0e"}])
                            .call(chart);
                    };
                });
                
                chart.tooltip.contentGenerator(function (d) {
                      return "<b>"+d.value.toFixed(0)+"</b> mg. SB<sub>4</sub>-eq./kWh, <b>"+d.data.y+"</b> wind turbines";
                    });
                
                nv.utils.windowResize(function() {chart.update()});
        
                return chart;
                        })
             //Energy
             
            nv.addGraph(function() {
                var chartData;
                var chart;
                chart = nv.models.multiBarChart()
                    .duration(300)
                    .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
                    .rotateLabels(0)      //Angle to rotate x-axis labels.
                    .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
                    .groupSpacing(0.3)    //Distance between each group of bars.
                    ;

                if (on_off=="ON"){
                    chart.xAxis.axisLabel("For onshore installations of "+power+" kW +/- 5%.")};
                if (on_off=="OFF"){
                    chart.xAxis.axisLabel("For offshore installations of "+power+" kW +/- 5%.")};
                if (on_off=="ALL"){
                    chart.xAxis.axisLabel("For all installations of "+power+" kW +/- 5%.")};
                    
                chart.xAxis.tickFormat(d3.format('.2f'));

                chart.yAxis
                    .axisLabel('Occurences')
                    .tickFormat(d3.format('r'));
                
                arr.forEach(function(item) {
                    if (item["key"]=="Energy payback"){
                        chartData=d3.select(svg_chart_model_energy)
                            .datum([{key: item["key"],values: item["values"],color: "#ff7f0e"}])
                            .call(chart);
                    };
                });
                
                chart.tooltip.contentGenerator(function (d) {
                      return "Energy payback of <b>"+d.value.toFixed(1)+"</b>, <b>"+d.data.y+"</b> wind turbines";
                    });
                
                
                nv.utils.windowResize(function() {chart.update()});
        
                return chart;
                        })
             
             //Power
             
            nv.addGraph(function() {
                var chartData;
                var chart;
                chart = nv.models.multiBarChart()
                    .duration(300)
                    .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
                    .rotateLabels(0)      //Angle to rotate x-axis labels.
                    .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
                    .groupSpacing(0.3)    //Distance between each group of bars.
                    ;

                if (on_off=="ON"){
                    chart.xAxis.axisLabel("For onshore installations of "+power+" kW +/- 5%.")};
                if (on_off=="OFF"){
                    chart.xAxis.axisLabel("For offshore installations of "+power+" kW +/- 5%.")};
                if (on_off=="ALL"){
                    chart.xAxis.axisLabel("For all installations of "+power+" kW +/- 5%.")};
                    
                chart.xAxis.tickFormat(d3.format('.0f'));

                chart.yAxis
                    .axisLabel('Occurences')
                    .tickFormat(d3.format('r'));
                            
                
                
                arr.forEach(function(item) {
                    if (item["key"]=="Nominal power (kW)"){
                        chartData=d3.select(svg_chart_model_power)
                            .datum([{key: item["key"],values: item["values"],color: "#ff7f0e"}])
                            .call(chart);
                    };
                });
                
                chart.tooltip.contentGenerator(function (d) {
                      return "Nom. power of <b>"+d.value.toFixed(0)+"</b> kW, <b>"+d.data.y+"</b> wind turbines";
                    });
                
                nv.utils.windowResize(function() {chart.update()});
        
                return chart;
                        })
             //Lifetime
             
            nv.addGraph(function() {
                var chartData;
                var chart;
                chart = nv.models.multiBarChart()
                    .duration(300)
                    .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
                    .rotateLabels(0)      //Angle to rotate x-axis labels.
                    .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
                    .groupSpacing(0.3)    //Distance between each group of bars.
                    ;

                if (on_off=="ON"){
                    chart.xAxis.axisLabel("For onshore installations of "+power+" kW +/- 5%.")};
                if (on_off=="OFF"){
                    chart.xAxis.axisLabel("For offshore installations of "+power+" kW +/- 5%.")};
                if (on_off=="ALL"){
                    chart.xAxis.axisLabel("For all installations of "+power+" kW +/- 5%.")};
                    
                chart.xAxis.tickFormat(d3.format('.0f'));

                chart.yAxis
                    .axisLabel('Occurences')
                    .tickFormat(d3.format('r'));
                
                arr.forEach(function(item) {
                    if (item["key"]=="Lifetime (years)"){
                        chartData=d3.select(svg_chart_model_lifetime)
                            .datum([{key: item["key"],values: item["values"],color: "#ff7f0e"}])
                            .call(chart);
                    };
                });
                
                chart.tooltip.contentGenerator(function (d) {
                      return "Lifetime of <b>"+d.value.toFixed(0)+"</b> years, <b>"+d.data.y+"</b> wind turbines";
                    });
                
                
                nv.utils.windowResize(function() {chart.update()});
        
                return chart;
                        })
             //Capacity
             
            nv.addGraph(function() {
                var chartData;
                var chart;
                chart = nv.models.multiBarChart()
                    .duration(300)
                    .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
                    .rotateLabels(0)      //Angle to rotate x-axis labels.
                    .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
                    .groupSpacing(0.3)    //Distance between each group of bars.
                    ;

                if (on_off=="ON"){
                    chart.xAxis.axisLabel("For onshore installations of "+power+" kW +/- 5%.")};
                if (on_off=="OFF"){
                    chart.xAxis.axisLabel("For offshore installations of "+power+" kW +/- 5%.")};
                if (on_off=="ALL"){
                    chart.xAxis.axisLabel("For all installations of "+power+" kW +/- 5%.")};
                    
                chart.xAxis.tickFormat(d3.format('.2f'));

                chart.yAxis
                    .axisLabel('Occurences')
                    .tickFormat(d3.format('r'));
                
                arr.forEach(function(item) {
                    if (item["key"]=="Capacity factor"){
                        chartData=d3.select(svg_chart_model_capacity)
                            .datum([{key: item["key"],values: item["values"],color: "#ff7f0e"}])
                            .call(chart);
                    };
                });
                
                chart.tooltip.contentGenerator(function (d) {
                      return "Cap. factor of <b>"+d.value.toFixed(2)+"</b>, <b>"+d.data.y+"</b> wind turbines";
                    });
                
                
                nv.utils.windowResize(function() {chart.update()});
        
                return chart;
                        })
             
             
         })
        
    ;};
    
    function generate_graph_life(){
    nv.addGraph(function() {
        var chartData_life;
        var chart_life;
        chart_life = nv.models.multiBarChart()
            .duration(500)
            .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
            .rotateLabels(0)      //Angle to rotate x-axis labels.
            .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
            .groupSpacing(0.1)    //Distance between each group of bars.
            ;

        if (on_off=="ON"){
            chart_life.xAxis.axisLabel("In "+year+ " for onshore installations between "+min_p+" and "+max_p+" kW.")
        };
        if (on_off=="OFF"){
            chart_life.xAxis.axisLabel("In "+year+" for offshore installations between "+min_p+" and "+max_p+" kW.")
        };
        if (on_off=="ALL"){
            chart_life.xAxis.axisLabel("In "+year+" for all installations between "+min_p+" and "+max_p+" kW.")
        };
        
                            
        chart_life.xAxis.tickFormat(d3.format('.2f'));

        chart_life.yAxis
            .axisLabel('Occurences')
            .tickFormat(d3.format('r'));
                            
        chartData_life=d3.select(svgchart_life)
            .datum(function(){
                return get_data("lifetime")})
            .call(chart_life);
        
        chart_life.tooltip.contentGenerator(function (d) {
                      return "Lifetime of <b>"+d.value.toFixed(0)+"</b> years, <b>"+d.data.y+"</b> wind turbines";
                    });
    nv.utils.windowResize(function() { chart_life.update()});
        return chart_life;
        });};
    
    
    function generate_graph_power(){
    nv.addGraph(function() {
        var chartData_pow;
        var chart_pow;
        chart_pow = nv.models.multiBarChart()
            .duration(500)
            .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
            .rotateLabels(0)      //Angle to rotate x-axis labels.
            .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
            .groupSpacing(0.1)    //Distance between each group of bars.
            ;

        

        if (on_off=="ON"){
            chart_pow.xAxis.axisLabel("In "+year+ " for onshore installations between "+min_p+" and "+max_p+" kW.")
        };
        if (on_off=="OFF"){
            chart_pow.xAxis.axisLabel("In "+year+" for offshore installations between "+min_p+" and "+max_p+" kW.")
        };
        if (on_off=="ALL"){
            chart_pow.xAxis.axisLabel("In "+year+" for all installations between "+min_p+" and "+max_p+" kW.")
        };
        
                            
        chart_pow.xAxis.tickFormat(d3.format('d'));
        chart_pow.yAxis.tickFormat(d3.format('d'));
                            
                                
        chartData_pow=d3.select(svgchart_power)
            .datum(function(){
                        return get_data("power")})
            .call(chart_pow);
        
        chart_pow.tooltip.contentGenerator(function (d) {
                      return "Nom. power of <b>"+d.value.toFixed(0)+"</b> kW, <b>"+d.data.y+"</b> wind turbines";
                    });
        
    nv.utils.windowResize(function() {chart_pow.update()});
            return chart_pow;
            });};
    

    function generate_graph_impact(impact){

    nv.addGraph(function() {
        
        var chartData_impact;
        var chart_impact;
        chart_impact = nv.models.multiBarChart()
            .margin({left: 60})
            .duration(500)
            .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
            .rotateLabels(0)      //Angle to rotate x-axis labels.
            .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
            .groupSpacing(0.1)    //Distance between each group of bars.
            ;

        
                            
        if (impact=="climate_change"){
            if (on_off=="ON"){
                chart_impact.xAxis.axisLabel("In "+year+ " for onshore installations between "+min_p+" and "+max_p+" kW.")
            };
            if (on_off=="OFF"){
                chart_impact.xAxis.axisLabel("In "+year+ " for offshore installations between "+min_p+" and "+max_p+" kW.")
            };
            if (on_off=="ALL"){
                chart_impact.xAxis.axisLabel("In "+year+ " for all installations between "+min_p+" and "+max_p+" kW.")
            };


            chart_impact.xAxis.tickFormat(d3.format('.0f'));
            
            chart_impact.tooltip.contentGenerator(function (d) {
                      return "<b>"+d.value.toFixed(0)+"</b> g. CO<sub>2</sub>-eq/kWh, <b>"+d.data.y+"</b> wind turbines";
                    });
            
            chartData_impact=d3.select(svgchart_climate)
                .datum(function(){
                        return get_data(impact)})
                .call(chart_impact);};
        
        if (impact=="energy"){
            if (on_off=="ON"){
                chart_impact.xAxis.axisLabel("In "+year+ " for onshore installations between "+min_p+" and "+max_p+" kW.")
            };
            if (on_off=="OFF"){
                chart_impact.xAxis.axisLabel("In "+year+ " for offshore installations between "+min_p+" and "+max_p+" kW.")
            };
            if (on_off=="ALL"){
                chart_impact.xAxis.axisLabel("In "+year+ " for all installations between "+min_p+" and "+max_p+" kW.")
            };


            chart_impact.xAxis.tickFormat(d3.format('.0f'));
            
            chart_impact.tooltip.contentGenerator(function (d) {
                      return "Energy payback of <b>"+d.value.toFixed(1)+"</b>, <b>"+d.data.y+"</b> wind turbines";
                    });
            
            chartData_impact=d3.select(svgchart_energy)
                .datum(function(){
                        return get_data(impact)})
                .call(chart_impact);};
        
        if (impact=="metals"){
            if (on_off=="ON"){
                chart_impact.xAxis.axisLabel("In "+year+ " for onshore installations between "+min_p+" and "+max_p+" kW.")
            };
            if (on_off=="OFF"){
                chart_impact.xAxis.axisLabel("In "+year+ " for offshore installations between "+min_p+" and "+max_p+" kW.")
            };
            if (on_off=="ALL"){
                chart_impact.xAxis.axisLabel("In "+year+ " for all installations between "+min_p+" and "+max_p+" kW.")
            };


            chart_impact.xAxis.tickFormat(d3.format('.0f'));
            
            chart_impact.tooltip.contentGenerator(function (d) {
                      return "<b>"+d.value.toFixed(1)+"</b> mg. of SB<sub>4</sub>-eq./kWh, <b>"+d.data.y+"</b> wind turbines";
                    });
            
            chartData_impact=d3.select(svgchart_metals)
                .datum(function(){
                        return get_data(impact)})
                .call(chart_impact);};
        
        chart_impact.yAxis
            .axisLabel('Occurence')
            .tickFormat(d3.format('r'));
        
    nv.utils.windowResize(function() {chart_impact.update()});
            return chart_impact;
            });};
    
    
    
    function generate_graph_prod(){
    d3.json('request_prod_data/'+uuid, function(error, data) {

    nv.addGraph(function() {
        
        var chartData_prod;
        var chart_prod;
        
        chart_prod = nv.models.multiBarChart()
            .margin({left: 100}) 
            .useInteractiveGuideline(true)  
            .duration(500) 
            .showLegend(true) 
            .showYAxis(true)
            .showXAxis(true)
            .x(function(d) { return d[1] })   //We can modify the data accessor functions...
            .y(function(d) { return d[0] })   //...in case your data is formatted differently.
            ;

            chart_prod.xAxis
                .axisLabel('Year')
                .tickFormat(function(d) {
                    var label = d;
                    return label;
                });

            chart_prod.yAxis
                .axisLabel('Production (MWh)')
                .axisLabelDistance(2)
                .tickFormat(d3.format(',r'));

                        
            var myData=data
            
                
            d3.select(svgchart_prod)    //Select the <svg> element you want to render the chart in.   
                .datum(myData)         //Populate the <svg> element with chart data...
                .call(chart_prod);          //Finally, render the chart!

            //Update the chart when window resizes.
            nv.utils.windowResize(function() {chart_prod.update()});
                return chart_prod;
                });});};
    
    function get_other_impacts(){
        
        $.ajax({
        url: "get_other_impacts"+"/"+year+"/"+uuid+"/"+min_p+"/"+max_p+"/"+on_off,
        dataType: 'json',
        type: 'GET',
        success : function(data) {
                // EXTRACT VALUE FOR HTML HEADER.
                

                var col = ["", "Unit"];
                for (var i = 0; i < data.length; i++) {
                    for (var key in data[i]) {
                        if (col.indexOf(key) === -1) {
                            col.push(key);
                        }
                    }
                }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
        table.className="table table-striped";

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.
            


        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            
            
            th.innerHTML = col[i];
            
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < data.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                if (j==0){
                    if (i==0){tabCell.innerHTML ="Biomass (primary forest)"};
                    if (i==1){tabCell.innerHTML ="Biomass (renewable)"};
                    if (i==2){tabCell.innerHTML ="Geothermal. energy"};
                    if (i==3){tabCell.innerHTML ="Solar energy"};
                    if (i==4){tabCell.innerHTML ="Hydropower"};
                    if (i==5){tabCell.innerHTML ="Wind power"};
                }
                else{
                    if (j==1){
                        tabCell.innerHTML = "MJ";
                    }
                    else{
                        tabCell.innerHTML = data[i][col[j]].toFixed(3);
                    };
                };
            }
        }
            tr = table.insertRow(-1);
            var tabCell = tr.insertCell(-1);
            tabCell.colSpan = 8;
            tabCell.innerHTML="<center><i>per kWh produced in "+year+"</i></center>";
            

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("table_others");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
        }})
        
        
    };
    
    function get_mean(){
        $.ajax({
        url: "get_mean/"+year+"/"+min_p+"/"+max_p+"/"+on_off,
        dataType: 'json',
        type: 'GET',
        success : function(json) {
            
            var footer=document.getElementById("footer_2_climate_change_"+uuid);
                footer.innerHTML="<i><b>Median</b></i>: "+json["climate_change"]["median"]+" <i><b>Mean</b></i>: "+json["climate_change"]["mean"]+" <i><b>Std. dev.</b></i>: "+json["climate_change"]["std"]+" <i><b>Min</b></i>: "+json["climate_change"]["minimum"]+" <i><b>Max</b></i>: "+json["climate_change"]["maximum"];
            
            var footer=document.getElementById("footer_2_energy_"+uuid);
                footer.innerHTML="<i><b>Median</b></i>: "+json["energy"]["median"]+" <i><b>Mean</b></i>: "+json["energy"]["mean"]+" <i><b>Std. dev.</b></i>: "+json["energy"]["std"]+" <i><b>Min</b></i>: "+json["energy"]["minimum"]+" <i><b>Max</b></i>: "+json["energy"]["maximum"];
            
            var footer=document.getElementById("footer_2_metals_"+uuid);
                footer.innerHTML="<i><b>Median</b></i>: "+json["metals"]["median"]+" <i><b>Mean</b></i>: "+json["metals"]["mean"]+" <i><b>Std. dev.</b></i>: "+json["metals"]["std"]+" <i><b>Min</b></i>: "+json["metals"]["minimum"]+" <i><b>Max</b></i>: "+json["metals"]["maximum"];
            
            var footer=document.getElementById("footer_2_lifetime_"+uuid);
                footer.innerHTML="<i><b>Median</b></i>: "+json["lifetime"]["median"]+" <i><b>Mean</b></i>: "+json["lifetime"]["mean"]+" <i><b>Std. dev.</b></i>: "+json["lifetime"]["std"]+" <i><b>Min</b></i>: "+json["lifetime"]["minimum"]+" <i><b>Max</b></i>: "+json["lifetime"]["maximum"];
            
            var footer=document.getElementById("footer_2_power_"+uuid);
                footer.innerHTML="<i><b>Median</b></i>: "+json["power"]["median"]+" <i><b>Mean</b></i>: "+json["power"]["mean"]+" <i><b>Std. dev.</b></i>: "+json["power"]["std"]+" <i><b>Min</b></i>: "+json["power"]["minimum"]+" <i><b>Max</b></i>: "+json["power"]["maximum"];
            
            var footer=document.getElementById("footer_2_capacity_"+uuid);
                footer.innerHTML="<i><b>Median</b></i>: "+json["capacity"]["median"]+" <i><b>Mean</b></i>: "+json["capacity"]["mean"]+" <i><b>Std. dev.</b></i>: "+json["capacity"]["std"]+" <i><b>Min</b></i>: "+json["capacity"]["minimum"]+" <i><b>Max</b></i>: "+json["capacity"]["maximum"];
            
                }})
    };
    
    function get_mean_models(power){
        var arr=[];
        
        $.when($.ajax({
        url: "get_mean_models/"+power+"/"+on_off,
        dataType: 'json',
        type: 'GET',
        success : function(json) {
            
            Object.keys(json).forEach(function(key) {
                arr.push(json[key]);
                });
        }})).then(function(arr) {
            
            var footer=document.getElementById("footer_3_climate_change_"+uuid);
                footer.innerHTML="<i><b>Median</b></i>: "+arr["climate_change"]["median"]+" <i><b>Mean</b></i>: "+arr["climate_change"]["mean"]+" <i><b>Std. dev.</b></i>: "+arr["climate_change"]["std"]+" <i><b>Min</b></i>: "+arr["climate_change"]["minimum"]+" <i><b>Max</b></i>: "+arr["climate_change"]["maximum"];
            
            var footer=document.getElementById("footer_3_energy_"+uuid);
                footer.innerHTML="<i><b>Median</b></i>: "+arr["energy"]["median"]+" <i><b>Mean</b></i>: "+arr["energy"]["mean"]+" <i><b>Std. dev.</b></i>: "+arr["energy"]["std"]+" <i><b>Min</b></i>: "+arr["energy"]["minimum"]+" <i><b>Max</b></i>: "+arr["energy"]["maximum"];
            
            var footer=document.getElementById("footer_3_metals_"+uuid);
                footer.innerHTML="<i><b>Median</b></i>: "+arr["metals"]["median"]+" <i><b>Mean</b></i>: "+arr["metals"]["mean"]+" <i><b>Std. dev.</b></i>: "+arr["metals"]["std"]+" <i><b>Min</b></i>: "+arr["metals"]["minimum"]+" <i><b>Max</b></i>: "+arr["metals"]["maximum"];
            
            var footer=document.getElementById("footer_3_lifetime_"+uuid);
                footer.innerHTML="<i><b>Median</b></i>: "+arr["lifetime"]["median"]+" <i><b>Mean</b></i>: "+arr["lifetime"]["mean"]+" <i><b>Std. dev.</b></i>: "+arr["lifetime"]["std"]+" <i><b>Min</b></i>: "+arr["lifetime"]["minimum"]+" <i><b>Max</b></i>: "+arr["lifetime"]["maximum"];
            
            var footer=document.getElementById("footer_3_power_"+uuid);
                footer.innerHTML="<i><b>Median</b></i>: "+arr["power"]["median"]+" <i><b>Mean</b></i>: "+arr["power"]["mean"]+" <i><b>Std. dev.</b></i>: "+arr["power"]["std"]+" <i><b>Min</b></i>: "+arr["power"]["minimum"]+" <i><b>Max</b></i>: "+arr["power"]["maximum"];
            
            var footer=document.getElementById("footer_3_capacity_"+uuid);
                footer.innerHTML="<i><b>Median</b></i>: "+arr["capacity"]["median"]+" <i><b>Mean</b></i>: "+arr["capacity"]["mean"]+" <i><b>Std. dev.</b></i>: "+arr["capacity"]["std"]+" <i><b>Min</b></i>: "+arr["capacity"]["minimum"]+" <i><b>Max</b></i>: "+arr["capacity"]["maximum"];
        })
    }

    function get_data(kind){
        var array=[];
        var label="";
        var val_up = max_p;
        var val_down = min_p;
        if (kind=="climate_change"){label="grams CO2-eq. per kWh"};
        if (kind=="lifetime"){label="Years of service time"};
        if (kind=="power"){label="Nominal power (kW)"};
        if (kind=="capacity"){label="Capacity factor (ratio)"};
        if (kind=="energy"){label="Energy payback (ratio)"};
        if (kind=="metals"){label="mg of Sb-4-eq."};
        
        $.ajax({
        url: "request_stat/"+kind+"/"+year+"/"+val_down+"/"+val_up+"/"+on_off,
        dataType: 'json',
        type: 'GET',
        success : function(json) {
            Object.keys(json).forEach(function(key) {
                array.push({"x":json[key]["y"],"y":json[key]["x"]});
                });
                
                }})
        
              return [
                {   values: array,//values - represents the array of {x,y} data points
                    key: label, //key  - the name of the series.
                    color: '#ff7f0e'  //color - optional: choose your own line color.
                }
                ];
    ;}
    
    function export_csv(opt){

        $.ajax({
        url: "export_csv/"+uuid+"/"+opt+"/"+year+"/"+min_p+"/"+max_p+"/"+on_off,
            
        dataType: 'json',
        type: 'GET',
        success : function(json) {
           return json
  
        },
        error: function(xhr, status, error){console.log(error);console.warn(xhr.responseText);}}).then(function(data) {
            var csvRows =[];
            csvRows.push(",Turbine_ID")
            for (var key in data){csvRows.push('\"' + key + '\"')}
            var array_ID=[];
            for (var key in data["general_data; Kapacitet kW"]) {array_ID.push(key)};
            csvRows.push("\n")
             for (var i = 0; i < array_ID.length; i++){
                csvRows.push(array_ID[i])
          
                for (var key in data){
                    var val = String(data[key][array_ID[i]]);
                    val = val.replace(/,/g, '.')
                    val = val.replace('HAV', 'Offshore')
                    val = val.replace('LAND', 'Onshore')
                    csvRows.push(val)
                }
                csvRows.push("\n")
            }
            csvRows.push("\n")
            
            var blob = new Blob([csvRows], { type: 'text/csv;charset=utf-8;' });
            if (navigator.msSaveBlob) { // IE 10+
                navigator.msSaveBlob(blob, "data_export.csv");
            } else {
                var link = document.createElement("a");
                if (link.download !== undefined) { // feature detection
                    // Browsers that support HTML5 download attribute
                    var url = URL.createObjectURL(blob);
                    link.setAttribute("href", url);
                    link.setAttribute("download", "data_export.csv");
                    link.style.visibility = 'hidden';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
            }
        })
        };
           

    function get_percentile(kind){
        $.ajax({
        url: "request_percentile/"+kind+"/"+year+"/"+uuid+"/"+min_p+"/"+max_p+"/"+on_off,
        dataType: 'json',
        type: 'GET',
        success : function(json) {
            
            //Intialiazation 
        if (kind=="capacity"){
            var radialObj = radialIndicator($("#radial_container_capacity"+"_"+uuid), {
                barColor : {
                    0: '#DF0101',
                    60: '#3ADF00'},
                radius:60,
                fontSize:45,
                interpolate:true,
                barWidth : 15,
                initValue: 0,
                percentage: true
            });
            radialObj.animate(Math.round(json[0]*100));
            var footer=document.getElementById("footer_capacity"+"_"+uuid);
            footer.innerHTML=100-Math.round(json[1]*1)/1+"% of the fleet has a capacity factor equal or superior. The capacity factor is usually influenced by the wind availability (the location of the wind turbine) as well as the downtime for maintenance need.";
            ;}
        
        
        if (kind=="lifetime"){
        var radialObj = radialIndicator($("#radial_container_lifetime"+"_"+uuid), {
            barColor : {
                0: '#DF0101',
                40: '#3ADF00'},
            radius:60,
            fontSize:45,
            interpolate:true,
            barWidth : 15,
            minValue:0,
            maxValue:40,
            initValue: 0,
            frameNum:50
        });
        radialObj.animate(Math.round((json[0]*100)/100));
        var footer=document.getElementById("footer_lifetime"+"_"+uuid);
            if (array_properties[4]<2016){
                footer.innerHTML="<p>This wind turbine has been producing electricity for "+String(Math.round((json[0]*100)/100))+" years.</p><p>"+String(100-Math.round(json[1]*1)/1)+"% of the fleet has a lifetime equal or superior. There is no statistical correlation between the lifetime of a wind turbine and its brand, model, nominal power or location. The lifetime factor is usually conditionned by the marginal income from operating the wind turbine.</p>";}
            else{
                footer.innerHTML="<p>It is estimated that this wind turbine will produce electricity for "+String(Math.round((json[0]*100)/100))+" years."+String(100-Math.round(json[1]*1)/1)+"% of the fleet has a lifetime equal or superior.</p><p>The lifetime is estimated by picking a random value from a normal distribution centered around 19 years. This distribution is calculated from the lifetime values of all previosuly decommissioned wind turbines in the country.</p>";
                
            }
                
        };
        
        
        
        if (kind=="power"){
        var radialObj = radialIndicator($("#radial_container_power"+"_"+uuid), {
            barColor : {
                0: '#DF0101',
                11000: '#3ADF00'},
            radius:60,
            fontSize:45,
            interpolate:true,
            barWidth : 15,
            minValue:json[2],
            maxValue:json[3],
            initValue: 0,
            frameNum:100
        });
        radialObj.animate(Math.round(json[0]*100)/100);
        var footer=document.getElementById("footer_power"+"_"+uuid);
        footer.innerHTML="<p>This wind turbine has a nominal rated power of "+String(Math.round(json[0]*100)/100)+" kW.</p><p>"+String(100-Math.round(json[1]*1)/1)+"% of the fleet has a nominal power equal or superior. There is a tendency to deploy wind turbines with increasing nominal power on the market to obtain economies of scale.</p>";}
            
        if (kind=="climate_change"){

            
        var radialObj= radialIndicator($("#radial_container_climate_change"+"_"+uuid),{
            barColor : {
                0: '#3ADF00',
                50: '#DF0101',
                1000: '#000000'},
            radius:40,
            fontSize:30,
            interpolate:true,
            barWidth : 10,
            minValue:0,
            maxValue:1000,
            initValue: 0,
            frameNum:100
        });
          radialObj.animate(parseInt((json[0]*1000)/1.0));
        var footer=document.getElementById("footer_climate_change"+"_"+uuid);
        footer.innerHTML="<p>This wind turbine has emitted "+String(parseInt(json[0]*1000))+" grams of CO2-eq. per kWh produced during its life cycle.</p><p>"+String(100-Math.round(json[1]*1)/1)+"% of the fleet has a carbon footprint equal or superior.</p>";}
            
            if (kind=="energy"){

            
        var radialObj= radialIndicator($("#radial_container_energy"+"_"+uuid),{
            barColor : {
                0: '#000000',
                50: '#3ADF00'},
            radius:40,
            fontSize:30,
            interpolate:true,
            barWidth : 10,
            minValue:0.0,
            maxValue:50.0,
            initValue: 0.0,
            frameNum:100
        });
          radialObj.animate(json[0].toFixed(2));
        var footer=document.getElementById("footer_energy"+"_"+uuid);
        footer.innerHTML="<p>This turbine has produced "+String(json[0].toFixed(2))+" times more renewable energy than the amount of fossil energy needed during its life cycle.</p><p>"+String(100-Math.round(json[1]*1)/1)+"% of the fleet has a ratio equal or superior.</p>";
            }
            
        if (kind=="metals"){

            
        var radialObj= radialIndicator($("#radial_container_metals"+"_"+uuid),{
            barColor : {
                0: '#3ADF00',
                10: '#DF0101',
                50: '#000000'},
            radius:40,
            fontSize:30,
            interpolate:true,
            barWidth : 10,
            minValue:0.0,
            maxValue:50.0,
            initValue: 0.0,
            frameNum:100
        });
          radialObj.animate(parseInt((json[0]*1000000)/1.0));
        var footer=document.getElementById("footer_metals"+"_"+uuid);
        footer.innerHTML="<p>During its life cycle, this turbine is associated with the depletion of "+String(parseInt((json[0]*1000000)/1.0))+ " mg of Sb-4-eq. per kWh produced.</p><p>"+String(100-Math.round(json[1]*1)/1)+"% of the fleet has an impact equal or superior.</p>";
            }
        }})
    }
    
    
    $(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
       e.preventDefault();
        var target = $(e.target).attr("href");
        if ((target=="#menu6")){
            $("#cat_0_"+uuid).addClass("active");
            }
        });

        
    

   
    
    return el        
    }




// Fleet over time, environmental impacts, tab 3
    function generate_graph_time(on_off){
        var arr=[];
        
        $.when($.ajax({
        url: "request_data_time/"+on_off,
        dataType: 'json',
        type: 'GET',
        success : function(json) {
            Object.keys(json).forEach(function(key) {
                arr.push(json[key]);
                });      
        },
        error: function(xhr, status, error){ console.log(error);console.warn(xhr.responseText);}})).then(function(arr) {
            var array_impact=["capacity", "lifetime", "power", "climate_change", "energy", "metals"];
            
            //Climate change
            nv.addGraph(function() {
                var chartData_impact;
                var chart_impact_time;
                chart_impact_time = nv.models.lineChart()
                    .margin({left: 100})
                    .useInteractiveGuideline(true)
                    .showLegend(true) 
                    .showYAxis(true) 
                    .showXAxis(true);
                
                chart_impact_time.xAxis
                    .axisLabel("Years")
                    .tickFormat(d3.format('.0f'));
                chart_impact_time.yAxis
                    .axisLabel('g. CO2 per kWh')
                    .tickFormat(d3.format('.0f'));
                    
                    chartData_impact=d3.select(svg_chart_time_climate_change)
                        .datum([
                                {
                                    key: arr[0]["key"],
                                    values: arr[0]["values"],
                                    color: "#ff7f0e"
                                },
                                {
                                    key: arr[1]["key"],
                                    values: arr[1]["values"],
                                    color: "#3361FF"
                                }
                                ]
                                )
                        .call(chart_impact_time);
                    nv.utils.windowResize(function() {chart_impact_time.update()});
                    return chart_impact_time;
                
                });
            
            //Metals
            nv.addGraph(function() {
                var chartData_impact;
                var chart_impact_time;
                chart_impact_time = nv.models.lineChart()
                    .margin({left: 100})
                    .useInteractiveGuideline(true)
                    .showLegend(true) 
                    .showYAxis(true) 
                    .showXAxis(true);
                
                chart_impact_time.xAxis
                    .axisLabel("Years")
                    .tickFormat(d3.format('.0f'));

                chart_impact_time.yAxis
                    .axisLabel('mg. Sb4-eq. per kWh')
                    .tickFormat(d3.format('.0f'));
                    
                    chartData_impact=d3.select(svg_chart_time_metals)
                        .datum([
                                {
                                    key: arr[2]["key"],
                                    values: arr[2]["values"],
                                    color: "#ff7f0e"
                                },
                                {
                                    key: arr[3]["key"],
                                    values: arr[3]["values"],
                                    color: "#3361FF"
                                }
                                ]
                                )
                        .call(chart_impact_time);
                    nv.utils.windowResize(function() {chart_impact_time.update()});
                    return chart_impact_time;
                
                });
            
            //Energy
            nv.addGraph(function() {
                var chartData_impact;
                var chart_impact_time;
                chart_impact_time = nv.models.lineChart()
                    .margin({left: 100})
                    .useInteractiveGuideline(true)
                    .showLegend(true) 
                    .showYAxis(true) 
                    .showXAxis(true);
                    
                chart_impact_time.xAxis
                    .axisLabel("Years")
                    .tickFormat(d3.format('.0f'));

                chart_impact_time.yAxis
                    .axisLabel('Energy payback')
                    .tickFormat(d3.format('.2f'));
                
                    chartData_impact=d3.select(svg_chart_time_energy)
                        .datum([
                                {
                                    key: arr[4]["key"],
                                    values: arr[4]["values"],
                                    color: "#ff7f0e"
                                },
                                {
                                    key: arr[5]["key"],
                                    values: arr[5]["values"],
                                    color: "#3361FF"
                                }
                                ]
                                )
                        .call(chart_impact_time);
                    nv.utils.windowResize(function() {chart_impact_time.update()});
                    return chart_impact_time;
                
                });
            
            //Power
            nv.addGraph(function() {
                var chartData_impact;
                var chart_impact_time;
                chart_impact_time = nv.models.lineChart()
                    .margin({left: 100})
                    .useInteractiveGuideline(true)
                    .showLegend(true) 
                    .showYAxis(true) 
                    .showXAxis(true);
                
                chart_impact_time.xAxis
                    .axisLabel("Years")
                    .tickFormat(d3.format('.0f'));

                chart_impact_time.yAxis
                    .axisLabel('Nominal power (kW)')
                    .tickFormat(d3.format('.0f'));
                    
                    chartData_impact=d3.select(svg_chart_time_power)
                        .datum([
                                {
                                    key: arr[6]["key"],
                                    values: arr[6]["values"],
                                    color: "#ff7f0e"
                                },
                                {
                                    key: arr[7]["key"],
                                    values: arr[7]["values"],
                                    color: "#3361FF"
                                }
                                ]
                                )
                        .call(chart_impact_time);
                    nv.utils.windowResize(function() {chart_impact_time.update()});
                    return chart_impact_time;
                
                });
            
            //Lifetime
            nv.addGraph(function() {
                var chartData_impact;
                var chart_impact_time;
                chart_impact_time = nv.models.lineChart()
                    .margin({left: 100})
                    .useInteractiveGuideline(true)
                    .showLegend(true) 
                    .showYAxis(true) 
                    .showXAxis(true);
                
                chart_impact_time.xAxis
                    .axisLabel("Years")
                    .tickFormat(d3.format('.0f'));

                chart_impact_time.yAxis
                    .axisLabel('Lifetime (years)')
                    .tickFormat(d3.format('.0f'));
                    
                chartData_impact=d3.select(svg_chart_time_lifetime)
                    .datum([
                                {
                                    key: arr[8]["key"],
                                    values: arr[8]["values"],
                                    color: "#ff7f0e"
                                },
                                {
                                    key: arr[9]["key"],
                                    values: arr[9]["values"],
                                    color: "#3361FF"
                                }
                                ]
                                )
                        .call(chart_impact_time);
                    nv.utils.windowResize(function() {chart_impact_time.update()});
                    return chart_impact_time;
                
                });
            
            //Capacity
            nv.addGraph(function() {
                var chartData_impact;
                var chart_impact_time;
                chart_impact_time = nv.models.lineChart()
                    .margin({left: 100})
                    .useInteractiveGuideline(true)
                    .showLegend(true) 
                    .showYAxis(true) 
                    .showXAxis(true);
                
                chart_impact_time.xAxis
                    .axisLabel("Years")
                    .tickFormat(d3.format('.0f'));

                chart_impact_time.yAxis
                    .axisLabel('Capacity factor')
                    .tickFormat(d3.format('.2f'));
                    
                    chartData_impact=d3.select(svg_chart_time_capacity)
                        .datum([
                                {
                                    key: arr[10]["key"],
                                    values: arr[10]["values"],
                                    color: "#ff7f0e"
                                },
                                {
                                    key: arr[11]["key"],
                                    values: arr[11]["values"],
                                    color: "#3361FF"
                                }
                                ]
                                )
                        .call(chart_impact_time);
                    nv.utils.windowResize(function() {chart_impact_time.update()});
                    return chart_impact_time;
                
                });         
                })
        }
