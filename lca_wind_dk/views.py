from django.shortcuts import render
from django.http import HttpResponse
from scipy import stats
import numpy as np
import pandas as pd
import uuid
import json
import os
import lca_wind_dk
from django.contrib.auth.decorators import login_required
from django.contrib.auth.decorators import permission_required


pth = os.path.dirname(lca_wind_dk.__file__)

path_data = os.path.join(pth, 'data_wind_turbines.pickle')
path_el = os.path.join(pth, 'electricity_mixes.csv')
path_steel = os.path.join(pth, 'recycled_steel.csv')

df=pd.read_pickle(path_data)
el=pd.read_csv(path_el, index_col=0)
steel=pd.read_csv(path_steel, index_col=0)


app_name="lca_wind_dk"



def index(request):
	return render(request, "lca_wind_dk/index.html")

def get_markers(request, year, min_p, max_p, on_off):
    if on_off=="ALL":
        dic=df["general_data"][["lon", "lat"]][(df["general_data"]["Start year"]<=int(year))
                                           &(df["general_data"]["End year"]>=int(year))
                                          &(df["general_data"]["Kapacitet (kW)"]>=int(min_p))
                                          &(df["general_data"]["Kapacitet (kW)"]<=int(max_p))].to_dict("index")
    if on_off=="ON":
        dic=df["general_data"][["lon", "lat"]][(df["general_data"]["Start year"]<=int(year))
                                           &(df["general_data"]["End year"]>=int(year))
                                          &(df["general_data"]["Kapacitet (kW)"]>=int(min_p))
                                          &(df["general_data"]["Kapacitet (kW)"]<=int(max_p))
                                        &(df["general_data"]["Type af placering"]=="LAND")].to_dict("index")
    if on_off=="OFF":
        dic=df["general_data"][["lon", "lat"]][(df["general_data"]["Start year"]<=int(year))
                                           &(df["general_data"]["End year"]>=int(year))
                                          &(df["general_data"]["Kapacitet (kW)"]>=int(min_p))
                                          &(df["general_data"]["Kapacitet (kW)"]<=int(max_p))
                                              &(df["general_data"]["Type af placering"]=="HAV")].to_dict("index")

    return HttpResponse(json.dumps(dic), content_type="application/json")

def get_min_max(request, year, on_off):
    if on_off=="ALL":
        try:
            min=int(df["general_data"]["Kapacitet (kW)"][(df["general_data"]["Start year"]<=int(year))
                                           &(df["general_data"]["End year"]>=int(year))].min())
            max=int(df["general_data"]["Kapacitet (kW)"][(df["general_data"]["Start year"]<=int(year))
                                           &(df["general_data"]["End year"]>=int(year))].max())
        except ValueError:
            min=0
            max=0
            
    if on_off=="ON":
        try:
            min=int(df["general_data"]["Kapacitet (kW)"][(df["general_data"]["Start year"]<=int(year))
                                           &(df["general_data"]["End year"]>=int(year))
                                           &(df["general_data"]["Type af placering"]=="LAND")].min())
            max=int(df["general_data"]["Kapacitet (kW)"][(df["general_data"]["Start year"]<=int(year))
                                           &(df["general_data"]["End year"]>=int(year))
                                           &(df["general_data"]["Type af placering"]=="LAND")].max())
        except ValueError:
            min=0
            max=0
            
    if on_off=="OFF":
        try:
            min=int(df["general_data"]["Kapacitet (kW)"][(df["general_data"]["Start year"]<=int(year))
                                           &(df["general_data"]["End year"]>=int(year))
                                           &(df["general_data"]["Type af placering"]=="HAV")].min())
            max=int(df["general_data"]["Kapacitet (kW)"][(df["general_data"]["Start year"]<=int(year))
                                           &(df["general_data"]["End year"]>=int(year))
                                           &(df["general_data"]["Type af placering"]=="HAV")].max())
        except ValueError:
            min=0
            max=0
    

    return HttpResponse(json.dumps([min, max]), content_type="application/json")
    

def request_data(request, uuid):
    return HttpResponse(df.loc[str(uuid)]["general_data"][["Fabrikat", "Model", "Kapacitet (kW)", "Start year", "Lifetime", "End year", "website"]].to_json(), content_type="application/json")

def export_csv(request, uuid, opt, year, min_p, max_p, on_off):

    import re

    # Only this turbine
    if int(opt)==1:
        df_exp= df.loc[[str(uuid)],:]
        df_exp["general_data"]["Model"] = df["general_data"]["Model"].str.replace(',','.')
        df_exp.columns = [str(col) for col in df_exp.columns]
        
        df_exp.columns = [re.sub('[()]', '', col) for col in df_exp.columns]
        df_exp.columns = [re.sub("'", "", col) for col in df_exp.columns]
        df_exp.columns = [re.sub('"', '', col) for col in df_exp.columns]
        df_exp.columns = [re.sub(',', ';', col) for col in df_exp.columns]

        return HttpResponse(df_exp.to_json(), content_type="application/json")
    
    # Similar turbines, +/-5% power
    if int(opt)==2:
        this_power = df.loc[[str(uuid)],:]["general_data"]["Kapacitet (kW)"].values[0]
        df_exp = df.loc[(df["general_data"]["Kapacitet (kW)"]>=this_power*.95)&(df["general_data"]["Kapacitet (kW)"]<=this_power*1.05)]
        df_exp["general_data"]["Model"] = df["general_data"]["Model"].str.replace(',','.')
        df_exp.columns = [str(col) for col in df_exp.columns]
        df_exp.columns = [re.sub('[()]', '', col) for col in df_exp.columns]
        df_exp.columns = [re.sub("'", "", col) for col in df_exp.columns]
        df_exp.columns = [re.sub('"', '', col) for col in df_exp.columns]
        df_exp.columns = [re.sub(',', ';', col) for col in df_exp.columns]
        

        return HttpResponse(df_exp.to_json(), content_type="application/json")
    
    if int(opt)==3:
        if on_off=="ALL":
            df_exp=df[(df["general_data"]["Start year"]<=int(year))&(df["general_data"]["End year"]>=int(year))
                               &(df["general_data"]["Kapacitet (kW)"]>=int(min_p))
                              &(df["general_data"]["Kapacitet (kW)"]<=int(max_p))]
        if on_off=="ON":
            df_exp=df[(df["general_data"]["Start year"]<=int(year))&(df["general_data"]["End year"]>=int(year))
                               &(df["general_data"]["Kapacitet (kW)"]>=int(min_p))
                              &(df["general_data"]["Kapacitet (kW)"]<=int(max_p))
                          &(df["general_data"]["Type af placering"]=="LAND")]
        if on_off=="OFF":
            df_exp=df[(df["general_data"]["Start year"]<=int(year))&(df["general_data"]["End year"]>=int(year))
                               &(df["general_data"]["Kapacitet (kW)"]>=int(min_p))
                              &(df["general_data"]["Kapacitet (kW)"]<=int(max_p))
                          &(df["general_data"]["Type af placering"]=="HAV")]
        
        df_exp["general_data"]["Model"] = df["general_data"]["Model"].str.replace(',','.')
        df_exp.columns = [str( col) for col in df_exp.columns]
        df_exp.columns = [re.sub('[()]', '', col) for col in df_exp.columns]
        df_exp.columns = [re.sub("'", "", col) for col in df_exp.columns]
        df_exp.columns = [re.sub('"', '', col) for col in df_exp.columns]
        df_exp.columns = [re.sub(',', ';', col) for col in df_exp.columns]
        

        return HttpResponse(df_exp.to_json(), content_type="application/json")
        



def request_prod_data(request, uuid):
    
    l_val_obs=df["production_data"].loc[str(uuid)].loc[np.arange(1977, 2017)].values/1000
    l_val_obs=[round(val, 2) for val in l_val_obs]
    l_index_obs=df["production_data"].loc[str(uuid)].loc[np.arange(1977, 2017)].index
    l_index_obs=[int(val) for val in l_index_obs]
    l_val_est=df["production_data"].loc[str(uuid)].loc[np.arange(2017, 2051)].values/1000
    l_val_est=[round(val, 2) for val in l_val_est]
    l_index_est=df["production_data"].loc[str(uuid)].loc[np.arange(2017, 2051)].index
    l_index_est=[int(val) for val in l_index_est]   
    l_obs=[]
    l_est=[]
    for i in range(0, len(l_index_obs)):
        if l_val_obs[i]>0:
            l_obs.append([ l_val_obs[i], int(l_index_obs[i])])
            
    for i in range(2017-len(l_obs), 2017):
        l_est.append([ 0, str(i)])
        
    for i in range(0, len(l_index_est)):
        if l_val_est[i]>0:
            l_est.append([l_val_est[i], int(l_index_est[i])])
            
    for i in range(2017, len(l_est)):
        l_obs.append([ 0, str(i)])

    dic_obs={}    
    dic_obs["key"]="Observed"
    dic_obs["values"]=l_obs

    dic_est={}
    dic_est["key"]="Estimated"
    dic_est["values"]=l_est
    
   
    if len(l_obs)!=0:
        if l_val_obs[-1]>0:
            return HttpResponse(json.dumps([dic_obs, dic_est]), content_type="application/json")
        else:
            return HttpResponse(json.dumps([dic_obs]), content_type="application/json")
    else:
        return HttpResponse(json.dumps([dic_est]), content_type="application/json")
    
def get_mean(request, year, min_p, max_p, on_off):
    if on_off=="ALL":
        df_mean=df[(df["general_data"]["Start year"]<=int(year))&(df["general_data"]["End year"]>=int(year))
                               &(df["general_data"]["Kapacitet (kW)"]>=int(min_p))
                              &(df["general_data"]["Kapacitet (kW)"]<=int(max_p))]
    if on_off=="ON":
        df_mean=df[(df["general_data"]["Start year"]<=int(year))&(df["general_data"]["End year"]>=int(year))
                               &(df["general_data"]["Kapacitet (kW)"]>=int(min_p))
                              &(df["general_data"]["Kapacitet (kW)"]<=int(max_p))
                              &(df["general_data"]["Type af placering"]=="LAND")]
    if on_off=="OFF":
        df_mean=df[(df["general_data"]["Start year"]<=int(year))&(df["general_data"]["End year"]>=int(year))
                               &(df["general_data"]["Kapacitet (kW)"]>=int(min_p))
                              &(df["general_data"]["Kapacitet (kW)"]<=int(max_p))
                              &(df["general_data"]["Type af placering"]=="HAV")]
    
    dict_response={}
    kind="('IPCC 2013', 'climate change', 'GWP 100a')"
    section="environmental_data"
    dict_response["climate_change"]={"mean":np.int(df_mean[section, kind].mean()*1000),
                                        "median":np.int(df_mean[section, kind].median()*1000),
                                        "std":np.int(df_mean[section, kind].std()*1000),
                                        "minimum":np.int(df_mean[section, kind].min()*1000),
                                        "maximum":np.int(df_mean[section, kind].max()*1000)}
    
    dict_response["energy"]={"mean":round(np.mean(1/(df_mean["environmental_data"].T.iloc[-8:-5].sum()/3.6)),2),
                                        "median":round(np.median(1/(df_mean["environmental_data"].T.iloc[-8:-5].sum()/3.6)), 2),
                                        "std":round(np.std(1/(df_mean["environmental_data"].T.iloc[-8:-5].sum()/3.6)), 2),
                                        "minimum":round(np.min(1/(df_mean["environmental_data"].T.iloc[-8:-5].sum()/3.6)), 2),
                                        "maximum":round(np.max(1/(df_mean["environmental_data"].T.iloc[-8:-5].sum()/3.6)), 2)}
    
    kind="('ILCD 1.0.8 2016 midpoint', 'resources', 'mineral, fossils and renewables')"
    section="environmental_data"
    
    dict_response["metals"]={"mean":np.int(df_mean[section, kind].mean()*1000000),
                                        "median":np.int(df_mean[section, kind].median()*1000000),
                                        "std":np.int(df_mean[section, kind].std()*1000000),
                                        "minimum":np.int(df_mean[section, kind].min()*1000000),
                                        "maximum":np.int(df_mean[section, kind].max()*1000000)}
    
    kind="Lifetime"
    section="general_data"
    
    dict_response["lifetime"]={"mean":np.int(df_mean[section, kind].mean()),
                                        "median":np.int(df_mean[section, kind].median()),
                                        "std":np.int(df_mean[section, kind].std()),
                                        "minimum":np.int(df_mean[section, kind].min()),
                                        "maximum":np.int(df_mean[section, kind].max())}
    
    
    kind="Kapacitet (kW)"
    section="general_data"
    
    dict_response["power"]={"mean":np.int(df_mean[section, kind].mean()),
                                        "median":np.int(df_mean[section, kind].median()),
                                        "std":np.int(df_mean[section, kind].std()),
                                        "minimum":np.int(df_mean[section, kind].min()),
                                        "maximum":np.int(df_mean[section, kind].max())}
    
    kind="Capacity factors"
    section="general_data"
    
    dict_response["capacity"]={"mean":round(df_mean[section, kind].mean(),2),
                                        "median":round(df_mean[section, kind].median(),2),
                                        "std":round(df_mean[section, kind].std(),2),
                                        "minimum":round(df_mean[section, kind].min(),2),
                                        "maximum":round(df_mean[section, kind].max(),2)}
    
    return HttpResponse(json.dumps(dict_response), content_type="application/json")
    
def get_mean_models(request, power, on_off):
    power=int(power)
    if on_off=="ALL":
        df_mean=df[(df["general_data"]["Kapacitet (kW)"]>=int(power*.95))
                              &(df["general_data"]["Kapacitet (kW)"]<=int(power*1.05))]
    if on_off=="ON":
        df_mean=df[(df["general_data"]["Kapacitet (kW)"]>=int(power*.95))
                              &(df["general_data"]["Kapacitet (kW)"]<=int(power*1.05))
                              &(df["general_data"]["Type af placering"]=="LAND")]
    if on_off=="OFF":
        df_mean=df[(df["general_data"]["Kapacitet (kW)"]>=int(power*.95))
                              &(df["general_data"]["Kapacitet (kW)"]<=int(power*1.05))
                              &(df["general_data"]["Type af placering"]=="HAV")]
        
    dict_response={}
    kind="('IPCC 2013', 'climate change', 'GWP 100a')"
    section="environmental_data"
    dict_response["climate_change"]={"mean":np.int(df_mean[section, kind].mean()*1000),
                                        "median":np.int(df_mean[section, kind].median()*1000),
                                        "std":np.int(df_mean[section, kind].std()*1000),
                                        "minimum":np.int(df_mean[section, kind].min()*1000),
                                        "maximum":np.int(df_mean[section, kind].max()*1000)}
    
    dict_response["energy"]={"mean":round(np.mean(1/(df_mean["environmental_data"].T.iloc[-8:-5].sum()/3.6)),2),
                                        "median":round(np.median(1/(df_mean["environmental_data"].T.iloc[-8:-5].sum()/3.6)), 2),
                                        "std":round(np.std(1/(df_mean["environmental_data"].T.iloc[-8:-5].sum()/3.6)), 2),
                                        "minimum":round(np.min(1/(df_mean["environmental_data"].T.iloc[-8:-5].sum()/3.6)), 2),
                                        "maximum":round(np.max(1/(df_mean["environmental_data"].T.iloc[-8:-5].sum()/3.6)), 2)}
    
    kind="('ILCD 1.0.8 2016 midpoint', 'resources', 'mineral, fossils and renewables')"
    section="environmental_data"
    
    dict_response["metals"]={"mean":np.int(df_mean[section, kind].mean()*1000000),
                                        "median":np.int(df_mean[section, kind].median()*1000000),
                                        "std":np.int(df_mean[section, kind].std()*1000000),
                                        "minimum":np.int(df_mean[section, kind].min()*1000000),
                                        "maximum":np.int(df_mean[section, kind].max()*1000000)}
    
    kind="Lifetime"
    section="general_data"
    
    dict_response["lifetime"]={"mean":np.int(df_mean[section, kind].mean()),
                                        "median":np.int(df_mean[section, kind].median()),
                                        "std":np.int(df_mean[section, kind].std()),
                                        "minimum":np.int(df_mean[section, kind].min()),
                                        "maximum":np.int(df_mean[section, kind].max())}
    
    
    kind="Kapacitet (kW)"
    section="general_data"
    
    dict_response["power"]={"mean":np.int(df_mean[section, kind].mean()),
                                        "median":np.int(df_mean[section, kind].median()),
                                        "std":np.int(df_mean[section, kind].std()),
                                        "minimum":np.int(df_mean[section, kind].min()),
                                        "maximum":np.int(df_mean[section, kind].max())}
    
    kind="Capacity factors"
    section="general_data"
    
    dict_response["capacity"]={"mean":round(df_mean[section, kind].mean(),2),
                                        "median":round(df_mean[section, kind].median(),2),
                                        "std":round(df_mean[section, kind].std(),2),
                                        "minimum":round(df_mean[section, kind].min(),2),
                                        "maximum":round(df_mean[section, kind].max(),2)}
    
    return HttpResponse(json.dumps(dict_response), content_type="application/json")
    
    
    
    
def request_stat(request, kind, year, min_p, max_p, on_off):
    if kind=="capacity":
        kind="Capacity factors"
        section="general_data"
    if kind=="lifetime":
        kind="Lifetime"
        section="general_data"
    if kind=="power":
        kind="Kapacitet (kW)"
        section="general_data"
    if kind=="climate_change":
        kind="('IPCC 2013', 'climate change', 'GWP 100a')"
        section="environmental_data"
    if kind=="metals":
        kind="('ILCD 1.0.8 2016 midpoint', 'resources', 'mineral, fossils and renewables')"
        section="environmental_data"
    if kind=="energy":
        kind="energy"

    if on_off=="ALL":
        df_request_stat=df[(df["general_data"]["Start year"]<=int(year))&(df["general_data"]["End year"]>=int(year))
                               &(df["general_data"]["Kapacitet (kW)"]>=int(min_p))
                              &(df["general_data"]["Kapacitet (kW)"]<=int(max_p))]
    if on_off=="ON":
        df_request_stat=df[(df["general_data"]["Start year"]<=int(year))&(df["general_data"]["End year"]>=int(year))
                               &(df["general_data"]["Kapacitet (kW)"]>=int(min_p))
                              &(df["general_data"]["Kapacitet (kW)"]<=int(max_p))
                          &(df["general_data"]["Type af placering"]=="LAND")]
    if on_off=="OFF":
        df_request_stat=df[(df["general_data"]["Start year"]<=int(year))&(df["general_data"]["End year"]>=int(year))
                               &(df["general_data"]["Kapacitet (kW)"]>=int(min_p))
                              &(df["general_data"]["Kapacitet (kW)"]<=int(max_p))
                          &(df["general_data"]["Type af placering"]=="HAV")]
    
    if kind=="('IPCC 2013', 'climate change', 'GWP 100a')":
        values=df_request_stat[section, kind].values
        values[values == np.inf] = 0
        values=np.nan_to_num(values)
        md=np.median(values)
        hist_val=np.histogram(values, bins=30, range=(0,md*3))
        xs=hist_val[0]
        xs=[int(x) for x in xs]
        ys=hist_val[1]
        ys=[float(y*1000) for y in ys]
        
    if kind=="('ILCD 1.0.8 2016 midpoint', 'resources', 'mineral, fossils and renewables')":
        values=df_request_stat[section, kind].values
        values[values == np.inf] = 0
        values=np.nan_to_num(values)
        md=np.median(values)
        hist_val=np.histogram(values, bins=30, range=(0,md*3))
        xs=hist_val[0]
        xs=[int(x) for x in xs]
        ys=hist_val[1]
        ys=[float(y*1000000) for y in ys]
        
    if kind=="energy":
        values=1/(df_request_stat["environmental_data"].T.iloc[-8:-5].sum()/3.6)
        values[values == np.inf] = 0
        values=np.nan_to_num(values)
        xs=np.histogram(values, bins=30)[0]
        xs=[int(x) for x in xs]
        ys=np.histogram(values, bins=30)[1]
        ys=[float(y) for y in ys]
        
    if ((not kind=="energy") & (not kind=="('IPCC 2013', 'climate change', 'GWP 100a')")& (not kind=="('ILCD 1.0.8 2016 midpoint', 'resources', 'mineral, fossils and renewables')")):
        xs=np.histogram(df_request_stat[section, kind], bins=30)[0]
        xs=[int(x) for x in xs]
        ys=np.histogram(df[section, kind], bins=30)[1]
        ys=[float(y) for y in ys]

    return HttpResponse(json.dumps([{'x': x, 'y': y} for x, y in zip(xs, ys)]), content_type="application/json")

def request_stat_models(request,  min_p, max_p, on_off):

    if on_off=="ALL":
        df_request_stat=df[(df["general_data"]["Kapacitet (kW)"]>=int(min_p))
                              &(df["general_data"]["Kapacitet (kW)"]<=int(max_p))]
    if on_off=="ON":
        df_request_stat=df[(df["general_data"]["Kapacitet (kW)"]>=int(min_p))
                              &(df["general_data"]["Kapacitet (kW)"]<=int(max_p))
                          &(df["general_data"]["Type af placering"]=="LAND")]
    if on_off=="OFF":
        df_request_stat=df[(df["general_data"]["Kapacitet (kW)"]>=int(min_p))
                              &(df["general_data"]["Kapacitet (kW)"]<=int(max_p))
                          &(df["general_data"]["Type af placering"]=="HAV")]
    dict_response={}
    
    kind="('IPCC 2013', 'climate change', 'GWP 100a')"
    section="environmental_data"
    
    values=df_request_stat[section, kind].values
    values[values == np.inf] = 0
    values=np.nan_to_num(values)
    md=np.median(values)
    hist_val=np.histogram(values, bins=30, range=(0,md*3))
    xs=hist_val[0]
    xs=[int(x) for x in xs]
    ys=hist_val[1]
    ys=[float(y*1000) for y in ys]
    
    dict_response["g. CO2-eq./kWh"]=[{"x":x[1], "y":x[0]} for x in zip(xs, ys)]
    
    kind="('ILCD 1.0.8 2016 midpoint', 'resources', 'mineral, fossils and renewables')"
    section="environmental_data"
    
    values=df_request_stat[section, kind].values
    values[values == np.inf] = 0
    values=np.nan_to_num(values)
    md=np.median(values)
    hist_val=np.histogram(values, bins=30, range=(0,md*3))
    xs=hist_val[0]
    xs=[int(x) for x in xs]
    ys=hist_val[1]
    ys=[float(y*1000000) for y in ys]
    
    dict_response["mg. SB4-eq./kWh"]=[{"x":x[1], "y":x[0]} for x in zip(xs, ys)]
    
    kind="energy"
    
    values=1/(df_request_stat["environmental_data"].T.iloc[-8:-5].sum()/3.6)
    values[values == np.inf] = 0
    values=np.nan_to_num(values)
    xs=np.histogram(values, bins=30)[0]
    xs=[int(x) for x in xs]
    ys=np.histogram(values, bins=30)[1]
    ys=[float(y) for y in ys]
    
    dict_response["Energy payback"]=[{"x":x[1], "y":x[0]} for x in zip(xs, ys)]

        
    kind="Kapacitet (kW)"
    section="general_data"
    
    xs=np.histogram(df_request_stat[section, kind], bins=30)[0]
    xs=[int(x) for x in xs]
    ys=np.histogram(df_request_stat[section, kind], bins=30)[1]
    ys=[float(y) for y in ys]
    
    dict_response["Nominal power (kW)"]=[{"x":x[1], "y":x[0]} for x in zip(xs, ys)]
    
    kind="Lifetime"
    section="general_data"
    
    xs=np.histogram(df_request_stat[section, kind], bins=30)[0]
    xs=[int(x) for x in xs]
    ys=np.histogram(df_request_stat[section, kind], bins=30)[1]
    ys=[float(y) for y in ys]
    
    dict_response["Lifetime (years)"]=[{"x":x[1], "y":x[0]} for x in zip(xs, ys)]
    
    kind="Capacity factors"
    section="general_data"
    
    xs=np.histogram(df_request_stat[section, kind], bins=30)[0]
    xs=[int(x) for x in xs]
    ys=np.histogram(df_request_stat[section, kind], bins=30)[1]
    ys=[float(y) for y in ys]
    
    dict_response["Capacity factor"]=[{"x":x[1], "y":x[0]} for x in zip(xs, ys)]
    tmp_dict={}
    data=[]

    for k, v in dict_response.items():
        tmp_dict = {}
        tmp_dict["key"] = k
        tmp_dict["values"] = [i for i in v]
        data.append(tmp_dict)

 
    return HttpResponse(json.dumps(data), content_type="application/json")

def request_data_time(request, on_off):
    import json
    if on_off=="ALL":
        path_data = os.path.join(pth, 'time_series_ALL.txt')
    if on_off=="ON":
        path_data = os.path.join(pth, 'time_series_ON.txt')
    if on_off=="OFF":
        path_data = os.path.join(pth, 'time_series_OFF.txt')
        
    with open(path_data) as json_data:
        data = json.load(json_data)
    return HttpResponse(json.dumps(data), content_type="application/json")


def request_percentile(request, kind, year, uuid, min_p, max_p, on_off):
    if on_off=="ALL":
        df_request_perc=df[(df["general_data"]["Start year"]<=int(year))&(df["general_data"]["End year"]>=int(year))
                               &(df["general_data"]["Kapacitet (kW)"]>=int(min_p))
                              &(df["general_data"]["Kapacitet (kW)"]<=int(max_p))]
    if on_off=="ON":
        df_request_perc=df[(df["general_data"]["Start year"]<=int(year))&(df["general_data"]["End year"]>=int(year))
                               &(df["general_data"]["Kapacitet (kW)"]>=int(min_p))
                              &(df["general_data"]["Kapacitet (kW)"]<=int(max_p))
                          &(df["general_data"]["Type af placering"]=="LAND")]
    if on_off=="OFF":
        df_request_perc=df[(df["general_data"]["Start year"]<=int(year))&(df["general_data"]["End year"]>=int(year))
                               &(df["general_data"]["Kapacitet (kW)"]>=int(min_p))
                              &(df["general_data"]["Kapacitet (kW)"]<=int(max_p))
                          &(df["general_data"]["Type af placering"]=="HAV")]
        
    if kind=="capacity":
        kind="Capacity factors"
        section="general_data"
    if kind=="lifetime":
        kind="Lifetime"
        section="general_data"
    if kind=="power":
        kind="Kapacitet (kW)"
        section="general_data"
    if kind=="climate_change":
        kind="('IPCC 2013', 'climate change', 'GWP 100a')"
        section="environmental_data"
    if kind=="metals":
        kind="('ILCD 1.0.8 2016 midpoint', 'resources', 'mineral, fossils and renewables')"
        section="environmental_data"
    
    if kind=="energy":
        
        x=1/(df_request_perc["environmental_data"].T.iloc[-8:-5].sum()/3.6)
        x=x.replace([np.inf, -np.inf], np.nan).dropna()

    else:
        
        x=df_request_perc[section, kind]
        x=x.replace([np.inf, -np.inf], np.nan).dropna()
        
    list_response=[x[uuid], stats.percentileofscore(x,x[uuid]), np.min(x), np.max(x)]
    list_response=[float(val) for val in list_response]
    

    
    return HttpResponse(json.dumps(list_response), content_type="application/json")

def get_other_impacts(request, year, uuid, min_p, max_p, on_off):
    if on_off=="ALL":
        df_others=df[(df["general_data"]["Start year"]<=int(year))&(df["general_data"]["End year"]>=int(year))
                               &(df["general_data"]["Kapacitet (kW)"]>=int(min_p))
                              &(df["general_data"]["Kapacitet (kW)"]<=int(max_p))]
    if on_off=="ON":
        df_others=df[(df["general_data"]["Start year"]<=int(year))&(df["general_data"]["End year"]>=int(year))
                               &(df["general_data"]["Kapacitet (kW)"]>=int(min_p))
                              &(df["general_data"]["Kapacitet (kW)"]<=int(max_p))
                            &(df["general_data"]["Type af placering"]=="LAND")]
    if on_off=="OFF":
        df_others=df[(df["general_data"]["Start year"]<=int(year))&(df["general_data"]["End year"]>=int(year))
                               &(df["general_data"]["Kapacitet (kW)"]>=int(min_p))
                              &(df["general_data"]["Kapacitet (kW)"]<=int(max_p))
                            &(df["general_data"]["Type af placering"]=="HAV")]
        
    df_stats=df_others["environmental_data"].iloc[:,-5:].describe()
    df_stats=df_stats.drop(["count", "25%",  "75%"])
    extra_row=df_others["environmental_data"].loc[uuid]
    extra_row=extra_row.iloc[-5:]
    df_stats=df_stats.append(extra_row)
    df_stats.index=["Mean", "Std. dev.", "Min.", "Median", "Max.", "This turbine"]
    return HttpResponse(df_stats.T.to_json(orient="records"), content_type="application/json")
    

def get_year_manufacture(request, uuid):
    year=int(df["general_data"]["Start year"].loc[str(uuid)])
    pct_steel=steel.loc["Secondary steel", str(year)]
    pct_renew=el.loc[["Solar","-- Onshore, less than 1MW","-- Onshore, between 1 and 3 MW","-- Onshore, more than 3 MW","-- Offshore","Hydro","Biomass","Biogas","Bio natural gas"],str(year)].sum()
    model=df["general_data"]["Model"].loc[str(uuid)]
    production=df["production_data"].loc[str(uuid)].sum()
    location=df["general_data"]["Type af placering"].loc[str(uuid)]
    sea_depth=df["general_data"]["sea depth"].loc[str(uuid)]
    distance_coast=df["general_data"]["dist_cote"].loc[str(uuid)]

    return HttpResponse(json.dumps([str(year), str(pct_steel), str(pct_renew), model, str(production), location, str(sea_depth), str(distance_coast)]), content_type="application/json")
    
    
    