"""enviWind URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.urls import path, re_path
from django.contrib import admin
from . import views

urlpatterns = [
    re_path(r'^$', views.index, name="index"),
    re_path(r'^request_data/(?P<uuid>.+)$', views.request_data, name='request_data'),
    re_path(r'^get_markers/(?P<year>\d+)/(?P<min_p>\d+)/(?P<max_p>\d+)/(?P<on_off>[\w\-]+)$', views.get_markers, name='get_markers'),
    re_path(r'^get_min_max/(?P<year>\d+)/(?P<on_off>[\w\-]+)$', views.get_min_max, name='get_min_max'),
    re_path(r'^request_stat/(?P<kind>.+)/(?P<year>\d+)/(?P<min_p>\d+)/(?P<max_p>\d+)/(?P<on_off>[\w\-]+)$', views.request_stat, name='request_stat'),
    re_path(r'^request_stat_models/(?P<min_p>\d+)/(?P<max_p>\d+)/(?P<on_off>[\w\-]+)$', views.request_stat_models, name='request_stat_models'),
    re_path(r'^request_data_time/(?P<on_off>[\w\-]+)$', views.request_data_time, name='request_data_time'),
    re_path(r'^request_percentile/(?P<kind>.+)/(?P<year>\d+)/(?P<uuid>.+)/(?P<min_p>\d+)/(?P<max_p>\d+)/(?P<on_off>[\w\-]+)$', views.request_percentile, name='request_percentile'),
    re_path(r'^request_prod_data/(?P<uuid>.+)$', views.request_prod_data, name='request_prod_data'),
    re_path(r'^get_mean/(?P<year>\d+)/(?P<min_p>\d+)/(?P<max_p>\d+)/(?P<on_off>[\w\-]+)$', views.get_mean, name='get_mean'),
    re_path(r'^get_mean_models/(?P<power>\d+)/(?P<on_off>[\w\-]+)$', views.get_mean_models, name='get_mean_models'),
    re_path(r'^get_other_impacts/(?P<year>\d+)/(?P<uuid>.+)/(?P<min_p>\d+)/(?P<max_p>\d+)/(?P<on_off>[\w\-]+)$', views.get_other_impacts, name='get_other_impacts'),
    re_path(r'^get_year_manufacture/(?P<uuid>.+)$', views.get_year_manufacture, name='get_year_manufacture'),
    re_path(r'^export_csv/(?P<uuid>.+)/(?P<opt>\d+)/(?P<year>\d+)/(?P<min_p>\d+)/(?P<max_p>\d+)/(?P<on_off>[\w\-]+)$', views.export_csv, name='export_csv'),    
]
