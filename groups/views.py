from rest_framework import generics,mixins
from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets 
from rest_framework.authentication import TokenAuthentication
from accounts.serializers import GroupMemberSerializer, GroupSerializer
from .models import Group, GroupMember
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
    permission_classes = (IsAuthenticated,)


class GroupMemberCreateView(generics.CreateAPIView):
    serializer_class = GroupMemberSerializer


class GroupMemberView(generics.RetrieveDestroyAPIView):
    serializer_class = GroupMemberSerializer
    authentication_classes= (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    queryset = GroupMember.objects.all()

    

