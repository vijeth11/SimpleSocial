from rest_framework.permissions import IsAuthenticated
from rest_framework import mixins, viewsets
from rest_framework.authentication import TokenAuthentication
from accounts.serializers import PostSerializer, PostViewSerializer
from .models import Post
from .permissions import BlockUnauthorizedUpdateOfPost
# Create your views here.

class PostCreateViewSet(viewsets.GenericViewSet,mixins.CreateModelMixin):
    serializer_class = PostSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    queryset = Post.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
class PostUpdateAndDeleteViewSet(viewsets.GenericViewSet, mixins.RetrieveModelMixin,mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    serializer_class = PostSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,BlockUnauthorizedUpdateOfPost)
    queryset = Post.objects.all()

class AllPostViewSet(viewsets.GenericViewSet,mixins.ListModelMixin):
    authentication_classes = []
    permission_classes = []
    serializer_class = PostViewSerializer
    queryset = Post.objects.all()
    
class UserPostsViewSet(viewsets.ReadOnlyModelViewSet):
     serializer_class = PostViewSerializer
     authentication_classes = (TokenAuthentication,)
     permission_classes = (IsAuthenticated,)

     def get_queryset(self):
         return Post.objects.filter(user=self.request.user).all()
