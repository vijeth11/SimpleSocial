from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter
from groups.views import GroupViewSet, GroupMemberCreateView, GroupMemberView
router = DefaultRouter()
router.register('user', AccountUserViewSet)
router.register('group',GroupViewSet)
urlpatterns = [
    path('login/',UserLoginAPIView.as_view(),name="login"),
    path('add-member/',GroupMemberCreateView.as_view(),name="addMember"),
    path('delete-member/<int:pk>/',GroupMemberView.as_view(),name="addMember"),
    path('',include(router.urls))
]