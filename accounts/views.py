from . import permissions
from accounts.models import AccountUser
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from .serializers import AccountUserSerializer, AccountUserAuthTokenSerializer
# Create your views here.

class AccountUserViewSet(viewsets.ModelViewSet):
    serializer_class = AccountUserSerializer
    queryset = AccountUser.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes =(permissions.UpdateUserProfile,)
    search_fields =('username','email',)

    @action(methods=['GET'], detail = True, url_path='logout')
    def logout(self, request, pk=None):
        token = Token.objects.get(user = request.user)
        token.delete()
        return Response(status=status.HTTP_200_OK)


class UserLoginAPIView(ObtainAuthToken):
    """Handle creating user authentication token"""
    serializer_class = AccountUserAuthTokenSerializer
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES


class GetCurrentUserTokenView(APIView):

    def get(self,request, format=None):
            if request.query_params['username'] is not None:
                user = AccountUser.objects.filter(email = request.query_params['username']).first()
                if user is not None:
                    token = Token.objects.get(user = user)
                    if token:
                        return Response({'token':token.key},status=status.HTTP_200_OK)
                    else:
                        return Response(status=status.HTTP_404_NOT_FOUND)
                else:
                    return Response(status=status.HTTP_404_NOT_FOUND)
            else:
                    return Response(status=status.HTTP_404_NOT_FOUND)
