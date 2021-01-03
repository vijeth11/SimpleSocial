from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter
from groups.views import GroupViewSet, GroupMemberCreateView, GroupMemberView
from posts.views import AllPostViewSet, PostCreateViewSet,PostUpdateAndDeleteViewSet,UserPostsViewSet

router = DefaultRouter()
router.register('user', AccountUserViewSet)
router.register('group',GroupViewSet)
router.register('post',AllPostViewSet)
router.register('user-post',UserPostsViewSet,basename="user-post-list")
router.register('post-create',PostCreateViewSet)
router.register('post-update',PostUpdateAndDeleteViewSet)

urlpatterns = [
    path('login/',UserLoginAPIView.as_view(),name="login"),
    path('get-token',GetCurrentUserTokenView.as_view(),name="get-token"),
    path('add-member/',GroupMemberCreateView.as_view(),name="addMember"),
    path('delete-member/<int:pk>/',GroupMemberView.as_view(),name="deleteMember"),
    path('',include(router.urls))
]