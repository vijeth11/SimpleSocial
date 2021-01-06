from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter
from groups.views import GroupViewSet, GroupMemberCreateView, GroupListViewSet
from posts.views import AllPostViewSet, PostCreateViewSet,PostUpdateAndDeleteViewSet,UserPostsViewSet

router = DefaultRouter()
router.register('user', AccountUserViewSet)
router.register('group',GroupViewSet)
router.register('group-list',GroupListViewSet)
router.register('post',AllPostViewSet)
router.register('user-post',UserPostsViewSet,basename="user-post-list")
router.register('post-create',PostCreateViewSet)
router.register('post-update',PostUpdateAndDeleteViewSet)

urlpatterns = [
    path('login/',UserLoginAPIView.as_view(),name="login"),
    path('get-token',GetCurrentUserTokenView.as_view(),name="get-token"),
    path('add-member/',GroupMemberCreateView.as_view(),name="addMember"),
    path('group/<int:pk>/deletemember/<int:userid>/',GroupViewSet.as_view({"delete":"leave_the_group"})),
    path('user/logout/',AccountUserViewSet.as_view({"get":"logout"})),
    path('',include(router.urls))
]