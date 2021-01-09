from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import action, authentication_classes as auth_classes,permission_classes as permissions
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

"""

class GroupListViewSet(viewsets.ReadOnlyModelViewSet):
    authentication_classes=[]
    permission_classes=[]
    serializer_class = GroupSerializer
    queryset = Group.objects.all()
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

    @auth_classes((TokenAuthentication,))
    @permissions((IsAuthenticated,))
    @action(methods=['GET','DELETE'], detail = True)
    def leave_the_group(self, request, pk=None,*args, **kwargs):
        userid = kwargs['userid'] #it is not used just to learn how to send extra data
        if pk is not None and userid is not None:
            group = Group.objects.filter(id=pk).first()
            if group.adminUser.id is not request.user.id:
                groupmember = GroupMember.objects.filter(user = request.user, group = group).first()
                group.members.remove(groupmember)
                group.save()
            else:
                return Response("Admin User Cannot be removed from group",status=status.HTTP_400_BAD_REQUEST)
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class GroupMemberCreateView(generics.CreateAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = GroupMemberSerializer

    def perform_create(self, serializer):
        serializer.save(user = self.request.user.id)

