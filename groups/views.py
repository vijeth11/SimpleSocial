from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets 
from rest_framework.authentication import TokenAuthentication
from accounts.serializers import GroupMemberSerializer, GroupSerializer
from .models import Group, GroupMember
from .permissions import AdminUserCanOnlyUpdate
# Create your views here.

"""class GroupCreateViewSet(viewsets.GenericViewSet,mixins.CreateModelMixin):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    serializer_class = GroupCreateSerializer
    queryset = Group.objects.all()

    def get_queryset(self):
        return self.queryset.order_by('-name')

    def perform_create(self, serializer):
        serializer.save(name=self.request.data['name'],description=self.request.data['description'])

class GroupViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = GroupSerializer
    queryset = Group.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)"""

class GroupViewSet(viewsets.ModelViewSet):
    serializer_class = GroupSerializer
    queryset = Group.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,AdminUserCanOnlyUpdate)

    def perform_create(self, serializer):
        instance = serializer.save(adminUser = self.request.user)
        member = GroupMemberSerializer(data = {'group' : instance.id,'user' : self.request.user.id})
        member.is_valid(raise_exception=True)
        member.save()

class GroupMemberCreateView(generics.CreateAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    serializer_class = GroupMemberSerializer

class GroupMemberView(generics.RetrieveDestroyAPIView):
    serializer_class = GroupMemberSerializer
    authentication_classes= (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    queryset = GroupMember.objects.all()
